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


// ---- Reviews Carousel ----
// Shows 3 cards on desktop, 1 on mobile.
// Infinite loop: clones first/last cards so wrap feels seamless.
(function () {
  const track      = document.querySelector('.rev-track');
  const dotsEl     = document.querySelector('.rev-dots');
  const prevBtn    = document.querySelector('.rev-arrow--prev');
  const nextBtn    = document.querySelector('.rev-arrow--next');
  if (!track || !dotsEl) return;

  const cards      = Array.from(track.querySelectorAll('.rev-card'));
  const total      = cards.length; // 8 real cards

  // How many visible at once depends on viewport
  function perView() {
    return window.innerWidth >= 768 ? 3 : 1;
  }

  // Clone first N and last N cards for infinite wrap
  function buildClones() {
    const n = 3; // max perView
    // Prepend clones of last N cards
    for (let i = total - 1; i >= total - n; i--) {
      const clone = cards[i].cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      track.prepend(clone);
    }
    // Append clones of first N cards
    for (let i = 0; i < n; i++) {
      const clone = cards[i].cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      track.append(clone);
    }
  }
  buildClones();

  const CLONES_BEFORE = 3;
  let current = 0; // index into real cards (0–7)
  let isTransitioning = false;

  // Build dots
  for (let i = 0; i < total; i++) {
    const dot = document.createElement('button');
    dot.className = 'rev-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Go to review ' + (i + 1));
    dot.setAttribute('role', 'tab');
    dot.dataset.index = i;
    dotsEl.appendChild(dot);
  }
  const dots = Array.from(dotsEl.querySelectorAll('.rev-dot'));

  function cardWidth() {
    const allCards = track.querySelectorAll('.rev-card');
    if (!allCards.length) return 0;
    const style  = getComputedStyle(track);
    const gap    = parseFloat(style.gap) || 20;
    return allCards[0].getBoundingClientRect().width + gap;
  }

  // Jump to a track position (real index) without animation
  function jumpTo(realIndex) {
    track.style.transition = 'none';
    const offset = (CLONES_BEFORE + realIndex) * cardWidth();
    track.style.transform = 'translateX(-' + offset + 'px)';
    // Force reflow so next transition fires
    track.offsetHeight;
    track.style.transition = '';
  }

  // Slide to real card index with animation
  function goTo(index, animate) {
    if (animate === false) { jumpTo(index); return; }
    if (isTransitioning) return;
    isTransitioning = true;

    current = index;
    const offset = (CLONES_BEFORE + current) * cardWidth();
    track.style.transform = 'translateX(-' + offset + 'px)';

    // Update dots
    dots.forEach(function (d, i) {
      d.classList.toggle('active', i === ((current % total) + total) % total);
    });
  }

  // After transition ends, silently jump if we've entered clone territory
  track.addEventListener('transitionend', function () {
    isTransitioning = false;
    const n = perView();
    if (current < 0) {
      current = total - n;
      jumpTo(current);
    } else if (current > total - n) {
      current = 0;
      jumpTo(current);
    }
    // Re-sync dots after jump
    const active = ((current % total) + total) % total;
    dots.forEach(function (d, i) { d.classList.toggle('active', i === active); });
  });

  // Init position (no animation)
  goTo(0, false);

  // Auto-advance
  let timer = setInterval(advance, 4000);
  function advance() { goTo(current + 1, true); }

  nextBtn && nextBtn.addEventListener('click', function () {
    clearInterval(timer);
    goTo(current + 1, true);
    timer = setInterval(advance, 4000);
  });

  prevBtn && prevBtn.addEventListener('click', function () {
    clearInterval(timer);
    goTo(current - 1, true);
    timer = setInterval(advance, 4000);
  });

  dots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      clearInterval(timer);
      goTo(parseInt(this.dataset.index, 10), true);
      timer = setInterval(advance, 4000);
    });
  });

  // Pause on hover
  const carousel = document.querySelector('.rev-carousel');
  if (carousel) {
    carousel.addEventListener('mouseenter', function () { clearInterval(timer); });
    carousel.addEventListener('mouseleave', function () { timer = setInterval(advance, 4000); });
  }

  // Recalculate on resize
  let resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () { jumpTo(current); }, 150);
  });
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
