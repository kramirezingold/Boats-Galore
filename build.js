const fs = require('fs');
const path = require('path');

function escapeHtml(str) {
  if (typeof str !== 'string') return String(str);
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function getVal(obj, keyPath) {
  return keyPath.split('.').reduce((curr, key) => (curr != null ? curr[key] : undefined), obj);
}

function processTemplate(html, content) {
  // Array loops: {{#key.path}}...{{/key.path}}
  // Supports {{__last__}} inside loop to add 'sp-step--last' class on last item
  html = html.replace(/\{\{#([\w.]+)\}\}([\s\S]*?)\{\{\/\1\}\}/g, (match, key, tmpl) => {
    const arr = getVal(content, key);
    if (!Array.isArray(arr)) return '';
    return arr.map((item, i) => {
      return tmpl.replace(/\{\{([\w.]+)\}\}/g, (m, k) => {
        if (k === '__last__') return i === arr.length - 1 ? 'sp-step--last' : '';
        const val = getVal(item, k);
        return val != null ? escapeHtml(String(val)) : '';
      });
    }).join('');
  });

  // Simple key replacements: {{namespace.key}}
  html = html.replace(/\{\{([\w.]+)\}\}/g, (match, key) => {
    const val = getVal(content, key);
    return val != null ? escapeHtml(String(val)) : match;
  });

  return html;
}

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  for (const file of fs.readdirSync(src)) {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    if (fs.statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Load all content
const content = {
  global:   JSON.parse(fs.readFileSync('_content/global.json',  'utf8')),
  home:     JSON.parse(fs.readFileSync('_content/home.json',    'utf8')),
  services: JSON.parse(fs.readFileSync('_content/services.json','utf8')),
  about:    JSON.parse(fs.readFileSync('_content/about.json',   'utf8')),
  contact:  JSON.parse(fs.readFileSync('_content/contact.json', 'utf8')),
};

// Create dist directory
if (!fs.existsSync('dist')) fs.mkdirSync('dist');

// Build HTML pages from templates
['index', 'services', 'about', 'contact'].forEach(page => {
  const template = fs.readFileSync(`${page}.html`, 'utf8');
  const output = processTemplate(template, content);
  fs.writeFileSync(`dist/${page}.html`, output);
  console.log(`Built: dist/${page}.html`);
});

// Copy static assets
for (const file of ['style.css', 'script.js', 'sitemap.xml', 'robots.txt']) {
  if (fs.existsSync(file)) {
    fs.copyFileSync(file, `dist/${file}`);
    console.log(`Copied: dist/${file}`);
  }
}

// Copy directories
for (const dir of ['images', 'admin']) {
  if (fs.existsSync(dir)) {
    copyDir(dir, `dist/${dir}`);
    console.log(`Copied: dist/${dir}/`);
  }
}

console.log('\nBuild complete.');
