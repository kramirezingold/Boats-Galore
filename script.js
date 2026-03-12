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


// ---- Carousel (auto-playing crossfade) ----
(function () {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots   = document.querySelectorAll('.dot');
  if (!slides.length) return;

  let current = 0;

  function goTo(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = index;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function next() {
    goTo((current + 1) % slides.length);
  }

  // Auto-advance every 4 seconds
  let timer = setInterval(next, 4000);

  // Dot clicks restart the timer
  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () {
      clearInterval(timer);
      goTo(i);
      timer = setInterval(next, 4000);
    });
  });

  // Pause on hover, resume on leave
  const carousel = document.querySelector('.carousel');
  if (carousel) {
    carousel.addEventListener('mouseenter', function () { clearInterval(timer); });
    carousel.addEventListener('mouseleave', function () { timer = setInterval(next, 4000); });
  }
})();


// ---- Tab Switcher (Storage Rates / Our Services) ----
// Fades the active panel out, swaps hidden attribute, fades new panel in.
// Re-triggers card entrance animations by cloning and replacing the list.
(function () {
  const buttons = document.querySelectorAll('.tab-btn');
  if (!buttons.length) return;

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const targetId = this.dataset.tab;
      const targetPanel = document.getElementById('tab-' + targetId);
      const activePanel = document.querySelector('.tab-panel--active');

      if (targetPanel === activePanel) return;

      // Update button states
      buttons.forEach(function (b) {
        b.classList.remove('tab-btn--active');
        b.setAttribute('aria-selected', 'false');
      });
      this.classList.add('tab-btn--active');
      this.setAttribute('aria-selected', 'true');

      // Fade out current panel
      activePanel.classList.add('tab-fading');

      setTimeout(function () {
        activePanel.classList.remove('tab-panel--active', 'tab-fading');
        activePanel.hidden = true;

        // Re-trigger card animations by resetting animation on cards
        targetPanel.querySelectorAll('.rate-card, .svc-card').forEach(function (card) {
          card.style.animation = 'none';
          card.offsetHeight; // reflow
          card.style.animation = '';
        });

        targetPanel.hidden = false;
        targetPanel.classList.add('tab-panel--active');
      }, 300);
    });
  });
})();


// ---- Accordion ----
(function () {
  document.querySelectorAll('.accordion-trigger').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      const item   = this.closest('.accordion-item');
      const isOpen = item.classList.contains('open');

      // Close all items
      document.querySelectorAll('.accordion-item').forEach(function (i) {
        i.classList.remove('open');
        i.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
      });

      // If it was closed, open it
      if (!isOpen) {
        item.classList.add('open');
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });
})();
