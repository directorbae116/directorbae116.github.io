(function () {
  'use strict';

  var nav = document.getElementById('nav');
  var navLinks = document.getElementById('navLinks');
  var navToggle = document.getElementById('navToggle');

  /* --- sticky nav style --- */
  var onScroll = function () {
    if (window.scrollY > 40) nav.classList.add('is-stuck');
    else nav.classList.remove('is-stuck');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* --- mobile menu --- */
  var closeMenu = function () {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', '메뉴 열기');
  };

  navToggle.addEventListener('click', function () {
    var open = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    navToggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  });

  Array.prototype.forEach.call(navLinks.querySelectorAll('a'), function (a) {
    a.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 860) closeMenu();
  });

  /* --- reveal on scroll --- */
  var reveals = document.querySelectorAll('.reveal');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduce || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(reveals, function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var siblings = Array.prototype.slice.call(el.parentNode.children).filter(function (n) {
          return n.classList && n.classList.contains('reveal');
        });
        var i = siblings.indexOf(el);
        el.style.transitionDelay = (i > 0 ? Math.min(i, 5) * 70 : 0) + 'ms';
        el.classList.add('is-in');
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    Array.prototype.forEach.call(reveals, function (el) { io.observe(el); });
  }

  /* --- active nav link --- */
  var sections = Array.prototype.slice.call(document.querySelectorAll('main section[id]'));
  var linkFor = {};
  Array.prototype.forEach.call(navLinks.querySelectorAll('a[href^="#"]'), function (a) {
    linkFor[a.getAttribute('href').slice(1)] = a;
  });

  if ('IntersectionObserver' in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        Object.keys(linkFor).forEach(function (id) {
          linkFor[id].classList.toggle('is-active', id === entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(function (s) { spy.observe(s); });
  }
})();
