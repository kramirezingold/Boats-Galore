// ============================================================
// Boats Galore — script.js
// Shared across all pages
// ============================================================

// ---- Sticky Header ----
// Adds `.scrolled` class to <header> once user scrolls past 60px.
// CSS transitions header from transparent to solid navy.
(function () {
  const header = document.querySelector('header');
  if (!header) return;

  function onScroll() {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load in case page is already scrolled
})();


// ---- Mobile Nav Toggle ----
// Toggles `.nav-open` on <header> when hamburger button is clicked.
// CSS shows/hides the nav menu based on that class.
(function () {
  const hamburger = document.querySelector('.hamburger');
  const header    = document.querySelector('header');
  if (!hamburger || !header) return;

  hamburger.addEventListener('click', function () {
    const isOpen = header.classList.toggle('nav-open');
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close nav when a link is clicked (useful on mobile)
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
      header.classList.remove('nav-open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Close nav when clicking outside the header
  document.addEventListener('click', function (e) {
    if (!header.contains(e.target)) {
      header.classList.remove('nav-open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
})();
