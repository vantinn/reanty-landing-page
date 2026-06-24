document.addEventListener('DOMContentLoaded', () => {

  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks  = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.contains('is-open');
      hamburger.classList.toggle('is-open');
      hamburger.setAttribute('aria-expanded', String(!isOpen));
      navLinks.classList.toggle('is-open');
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    document.querySelectorAll('.nav-link, .nav-login, .btn--signup').forEach(el => {
      el.addEventListener('click', () => {
        hamburger.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('is-open');
        document.body.style.overflow = '';
      });
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
