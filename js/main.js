document.addEventListener('DOMContentLoaded', () => {

  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks  = document.querySelector('.nav-links');

  function closeMenu() {
    hamburger.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.contains('is-open');
      hamburger.classList.toggle('is-open');
      hamburger.setAttribute('aria-expanded', String(!isOpen));
      navLinks.classList.toggle('is-open');
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    document.querySelectorAll('.nav-link, .nav-login, .btn--signup').forEach(el => {
      el.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && hamburger.classList.contains('is-open')) {
        closeMenu();
        hamburger.focus();
      }
    });

    document.addEventListener('click', e => {
      if (
        hamburger.classList.contains('is-open') &&
        !navLinks.contains(e.target) &&
        !hamburger.contains(e.target)
      ) {
        closeMenu();
      }
    });
  }

  document.querySelectorAll('.prop-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.prop-tab').forEach(t => {
        t.classList.remove('prop-tab--active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('prop-tab--active');
      tab.setAttribute('aria-selected', 'true');
    });
  });

  document.querySelector('.subscribe-wrap')?.addEventListener('submit', e => {
    e.preventDefault();
    const input = e.currentTarget.querySelector('.subscribe-input');
    if (input && input.value) {
      input.value = '';
      input.placeholder = 'Thank you for subscribing!';
    }
  });

  document.querySelector('.footer__subscribe')?.addEventListener('submit', e => {
    e.preventDefault();
  });

  document.querySelector('.contact-form')?.addEventListener('submit', e => {
    e.preventDefault();
    e.target.reset();
  });

});
