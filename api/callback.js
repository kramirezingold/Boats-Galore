module.exports = async (req, res) => {
  const { code } = req.query;

  if (!code) {
    res.status(400).send('Missing code parameter');
    return;
  }

  try {
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      }),
    });

    const data = await tokenRes.json();

    if (data.access_token) {
      // Pass token to Decap CMS opener window via postMessage
      res.send(`<!DOCTYPE html><html><head><title>Authorizing...</title></head><body>
<div id="t" data-v="${data.access_token.replace(/"/g, '&quot;')}"></div>
<script>
(function() {
  var token = document.getElementById('t').getAttribute('data-v');
  function receiveMessage(e) {
    window.opener.postMessage(
      'authorization:github:success:' + JSON.stringify({ token: token, provider: 'github' }),
      e.origin
    );
  }
  window.addEventListener('message', receiveMessage, false);
  window.opener.postMessage('authorizing:github', '*');
})();
</script>
</body></html>`);
    } else {
      res.status(401).send('Authorization failed: ' + (data.error_description || 'Unknown error'));
    }
  } catch (err) {
    res.status(500).send('Server error during authentication');
  }
};
