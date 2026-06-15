/* ============================================================
   ALEX RAMIREZ — FREELANCE WEB DESIGNER — SCRIPTS
   ============================================================ */

const WEB3FORMS_KEY = 'aa619df6-05af-4aaf-8c3c-908c7588458d';

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileMenu();
  initScrollReveal();
  initFAQ();
  initForms();
});

/* ── Header Scroll ── */
function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  let ticking = false;

  function update() {
    header.classList.toggle('header--scrolled', window.scrollY > 60);
    header.classList.toggle('header--transparent', window.scrollY <= 60);
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
}

/* ── Mobile Menu ── */
function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const nav    = document.getElementById('nav');
  const mbar   = document.getElementById('mobile-cta-bar');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('active');
    toggle.classList.toggle('active', open);
    toggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
    if (mbar) mbar.classList.toggle('nav-open', open);
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      if (mbar) mbar.classList.remove('nav-open');
    });
  });
}

/* ── Scroll Reveal ── */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (!els.length) return;

  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('visible'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -60px 0px', threshold: 0.12 });

  els.forEach(el => io.observe(el));
}

/* ── FAQ Accordion ── */
function initFAQ() {
  const items = document.querySelectorAll('.faq__item');
  if (!items.length) return;

  items.forEach(item => {
    const btn = item.querySelector('.faq__q');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('faq__item--open');
      // Close all
      items.forEach(i => {
        i.classList.remove('faq__item--open');
        i.querySelector('.faq__q')?.setAttribute('aria-expanded', 'false');
      });
      // Toggle clicked
      if (!isOpen) {
        item.classList.add('faq__item--open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ── Forms — loops over ALL .inquiry-form elements ── */
function initForms() {
  const forms = document.querySelectorAll('.inquiry-form');
  if (!forms.length) return;

  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const btn = form.querySelector('[type="submit"]');
      const originalText = btn.textContent;

      btn.textContent = 'Sending…';
      btn.disabled = true;

      // Use FormData so all fields (including message) are captured automatically
      const raw = new FormData(form);
      const data = Object.fromEntries(raw.entries());
      data.access_key  = WEB3FORMS_KEY;
      data.subject     = 'New Project Inquiry — Alex Ramirez Web Design';
      data.from_name   = 'Alex Ramirez Portfolio';

      try {
        const res  = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(data),
        });
        const json = await res.json();

        if (json.success) {
          btn.textContent = '✓ Message Sent!';
          btn.style.background = '#16a34a';
          form.reset();
          // Leave success state — one submission per page load is the norm for a portfolio
        } else {
          throw new Error(json.message || 'Failed');
        }
      } catch {
        btn.textContent = 'Error — Call 951-701-9764';
        btn.style.background = '#dc2626';
        btn.disabled = false;
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
        }, 4000);
      }
    });
  });
}
