/* ============================================================
   ALEX RAMIREZ — FREELANCE WEB DESIGNER — SCRIPTS
   ============================================================ */

const WEB3FORMS_KEY = 'aa619df6-05af-4aaf-8c3c-908c7588458d';

/* ── Translations ── */
const translations = {
  en: {
    logo_loc: "Riverside, CA",
    nav_services: "Services", nav_process: "How It Works", nav_about: "About", nav_faq: "FAQ", nav_contact: "Get a Free Quote",
    nav_cta: "Get a Free Quote",
    hero_eyebrow: "Freelance Web Designer · Riverside, CA",
    hero_h1: "Riverside's Freelance Web Designer — Sites Built to Rank, Not Just Look Good",
    hero_sub: "From free basic websites to full SEO campaigns and Google Ads — I build online presences for local Riverside businesses that actually get found.",
    trust_1: "✓ No Agency Fees", trust_2: "✓ E-Contract Before Any Work", trust_3: "✓ Transparent Pricing", trust_4: "✓ Stripe Payments",
    hero_cta_call: "📞 Call 951-701-9764", hero_cta_services: "View Services ↓",
    hero_card_title: "Get a Free Quote", hero_card_sub: "No obligation. Response same day.",
    form_name: "Your Name", form_phone: "Phone Number", form_email: "Email Address",
    form_service_default: "What do you need?", form_message_hero: "Tell me about your business (optional)",
    form_submit: "Send Quote Request →",
    services_eyebrow: "What I Offer",
    services_h2: "Web Design & Google Ads Packages — Pick What Fits Your Budget",
    services_sub: "Three clear options. No hidden fees. You know exactly what you're getting before any money moves.",
    basic_tier: "Starter", basic_name: "Basic Website", basic_unit: " upfront", basic_monthly: "then $250 / month",
    basic_desc: "A clean, professional website built at no upfront cost. You pay only for ongoing maintenance and hosting.",
    basic_f1: "Mobile-responsive design", basic_f2: "Contact form included", basic_f3: "Hosting & deployment managed", basic_f4: "Up to 2 revisions / month", basic_f5: "Monthly site updates",
    card_cta: "Get Started", card_cta_light: "Get Started",
    seo_tier: "SEO Package", seo_badge: "Most Popular", seo_name: "SEO-Optimized Website", seo_unit: " upfront", seo_monthly: "then $450 / month",
    seo_desc: "Built from the ground up to rank on Google. This isn't just a website — it's a lead-generation machine for your local business.",
    seo_f1: "Everything in Basic, plus:", seo_f2: "Keyword research & targeting", seo_f3: "Schema.org structured data", seo_f4: "Local citation building", seo_f5: "Google Business Profile management", seo_f6: "Monthly SEO updates", seo_f7: "Backlink building", seo_f8: "Monthly performance report", seo_f9: "Goal: Google top 10 in 12 months",
    ads_tier: "Google Ads", ads_name: "Ads Campaign Management", ads_unit: " min. spend", ads_monthly: "weekly or monthly options",
    ads_desc: "Show up at the top of Google immediately. No waiting for SEO. I set up and manage your entire campaign from start to finish.",
    ads_f1: "Full campaign setup & targeting", ads_f2: "Ad copy & keyword strategy", ads_f3: "Bid management & optimization", ads_f4: "Weekly performance reports", ads_f5: "Weekly plan: $1,000 / week", ads_f6: "Monthly plan: $1,000–$3,000 / mo",
    ads_note: "Ad performance is determined by Google and your budget — not by me. I optimize every dollar, but Google controls placement.",
    process_eyebrow: "How It Works", process_h2: "How Alex Builds Sites That Show Up on Google",
    process_sub: "Straightforward from start to finish. You know what's happening at every step before any money moves.",
    step1_title: "Free Consultation", step1_desc: "Call or text me at <a href=\"tel:+19517019764\">951-701-9764</a>. We talk about your business, your goals, and your budget. No pressure, no sales pitch — just a straight conversation about what will actually work for you.",
    step2_title: "E-Contract Sent", step2_desc: "Before any money moves, you receive a clear digital contract laying out exactly what's being built, what it costs, and all policies. You review it, sign it digitally, and we move forward on your terms.",
    step3_title: "Stripe Invoice & Payment", step3_desc: "Once the contract is signed, a secure Stripe invoice is sent to your email. Pay by credit card, debit card, or any major card brand — Visa, Mastercard, Amex, Discover, and more. Work begins the moment payment is recorded.",
    step4_title: "Build, Launch & Rank", step4_desc: "Your site goes live. For SEO clients, ongoing monthly work starts immediately — citations, backlinks, content updates, GBP management — all compounding every month to push your rankings higher on Google.",
    about_eyebrow: "Who You're Working With",
    about_h2: "About Alex Ramirez — Riverside's Independent Web Designer",
    about_p1: "I'm a freelance web designer and digital marketer based in Riverside, California. I work directly with local business owners — no agency middleman, no junior staff passing your project around. When you work with me, you talk to me.",
    about_p2: "I specialize in building websites that don't just look good — they're engineered to rank on Google and turn visitors into leads. Whether you need an affordable website to get online or a full SEO campaign to dominate local search, I build it all from scratch, the right way.",
    about_p3: "I serve businesses across Riverside and the entire Inland Empire — Corona, Moreno Valley, Ontario, San Bernardino, Temecula, and beyond. If your customers are local, I can help them find you.",
    about_card_label1: "You talk to Alex — not a rep", about_card_label2: "Based in Riverside, CA", about_card_label3: "Full Inland Empire coverage",
    about_card_cta: "Call or Text Alex",
    faq_eyebrow: "FAQ",
    faq_h2: "Frequently Asked Questions About Web Design & SEO in Riverside",
    faq_q1: "How much does a website cost?", faq_a1: "It depends on what you need. Alex offers a Basic Website with no upfront build cost — you only pay $250 per month for maintenance and hosting. If you want a site built to rank on Google, the SEO-Optimized Website package is $1,500 upfront plus $450 per month. Both options are designed for Riverside small businesses that want results without agency-level pricing.",
    faq_q2: "Do I need SEO?", faq_a2: "If your customers search Google before they buy — and most do — then yes. A website without SEO is invisible. Alex works with businesses of all sizes, local and international. His SEO-Optimized Website package is built to rank in Google's top 10 for your specific target terms — whether you're a local shop or a business reaching customers nationwide or worldwide. Without it, your site may exist but won't be found by people actively looking for what you offer.",
    faq_q3: "How long does SEO take to work?", faq_a3: "Most local SEO campaigns start showing measurable movement in 60 to 90 days, with significant ranking gains visible by months four to six. Alex focuses on Riverside-specific local SEO, which tends to produce faster results than national campaigns because the competition pool is smaller and more targetable.",
    faq_q4: "How do Google Ads work?", faq_a4: "Google Ads put your business at the top of search results immediately — no waiting for SEO. You pay per click, and Alex manages everything: campaign setup, keyword targeting, ad copy, bid management, and weekly reporting. The minimum ad spend is $1,000/month. Weekly option at $1,000/week, monthly at $1,000–$3,000/month. The more you spend, the higher Google places your ads — that's Google's system, not mine.",
    faq_q5: "Where is Alex located and what areas does he serve?", faq_a5: "Alex is based in Riverside, California but works with clients everywhere — local Inland Empire businesses, national brands, and international clients of any size. Web design and SEO are fully remote services. Reach him at <a href=\"tel:+19517019764\">951-701-9764</a> or <a href=\"mailto:alexramirezbiz24@gmail.com\">alexramirezbiz24@gmail.com</a>.",
    faq_q6: "How do I get started?", faq_a6: "Call or text Alex at <a href=\"tel:+19517019764\">951-701-9764</a> — that's the fastest way. You can also email <a href=\"mailto:alexramirezbiz24@gmail.com\">alexramirezbiz24@gmail.com</a> or fill out the form on this page. He'll ask a few questions about your business and budget, then give you a straight recommendation. No sales pitch, no obligation. Most clients are up and moving within a week of first contact.",
    contact_eyebrow: "Let's Talk", contact_h2: "Ready to Get Found Online? Contact Alex Today",
    contact_sub: "No agency. No runaround. You talk directly to me. Most inquiries get a response the same day.",
    contact_label_phone: "Call or Text", contact_label_email: "Email", contact_label_loc: "Location",
    contact_loc_val: "Riverside, CA · Inland Empire",
    contact_payments_label: "Payments accepted via Stripe",
    contact_payments_note: "A Stripe invoice is sent before any work begins. Payment required before work starts.",
    contact_form_title: "Send a Message",
    contact_service_default: "Which service are you interested in?",
    form_message_contact: "Tell me about your business and what you're looking for",
    mobile_call: "📞 Call Now", mobile_quote: "Get a Free Quote",
    footer_sub: "Freelance Web Designer · Riverside, CA",
    footer_copyright: "© 2026 Alex Ramirez · Riverside, CA · Freelance Web Design & SEO · Inland Empire",
    footer_privacy: "Privacy Policy", footer_terms: "Terms of Service",
    footer_stripe: "Payments processed securely by Stripe."
  },
  es: {
    logo_loc: "Riverside, CA",
    nav_services: "Servicios", nav_process: "Cómo Funciona", nav_about: "Sobre Mí", nav_faq: "Preguntas", nav_contact: "Cotización Gratis",
    nav_cta: "Cotización Gratis",
    hero_eyebrow: "Diseñador Web Independiente · Riverside, CA",
    hero_h1: "Diseñador Web en Riverside — Sitios Creados para Posicionarse, No Solo para Verse Bien",
    hero_sub: "Desde sitios web básicos gratis hasta campañas de SEO completas y Google Ads — creo presencias en línea para negocios que realmente se encuentran en Google.",
    trust_1: "✓ Sin Tarifas de Agencia", trust_2: "✓ Contrato Digital Antes de Comenzar", trust_3: "✓ Precios Transparentes", trust_4: "✓ Pagos por Stripe",
    hero_cta_call: "📞 Llamar 951-701-9764", hero_cta_services: "Ver Servicios ↓",
    hero_card_title: "Obtén una Cotización Gratis", hero_card_sub: "Sin compromiso. Respuesta el mismo día.",
    form_name: "Tu Nombre", form_phone: "Número de Teléfono", form_email: "Correo Electrónico",
    form_service_default: "¿Qué necesitas?", form_message_hero: "Cuéntame sobre tu negocio (opcional)",
    form_submit: "Enviar Solicitud →",
    services_eyebrow: "Lo Que Ofrezco",
    services_h2: "Paquetes de Diseño Web y Google Ads — Elige el que se Adapte a Tu Presupuesto",
    services_sub: "Tres opciones claras. Sin tarifas ocultas. Sabes exactamente lo que recibes antes de que se mueva cualquier dinero.",
    basic_tier: "Básico", basic_name: "Sitio Web Básico", basic_unit: " sin costo inicial", basic_monthly: "luego $250 / mes",
    basic_desc: "Un sitio web limpio y profesional sin costo inicial. Solo pagas el mantenimiento y hosting mensual.",
    basic_f1: "Diseño adaptable a móviles", basic_f2: "Formulario de contacto incluido", basic_f3: "Hosting y despliegue administrado", basic_f4: "Hasta 2 revisiones / mes", basic_f5: "Actualizaciones mensuales del sitio",
    card_cta: "Comenzar", card_cta_light: "Comenzar",
    seo_tier: "Paquete SEO", seo_badge: "Más Popular", seo_name: "Sitio Web Optimizado para SEO", seo_unit: " costo inicial", seo_monthly: "luego $450 / mes",
    seo_desc: "Construido desde cero para posicionarse en Google. No es solo un sitio web — es una máquina de generación de clientes para tu negocio.",
    seo_f1: "Todo lo del plan Básico, más:", seo_f2: "Investigación y targeting de palabras clave", seo_f3: "Datos estructurados Schema.org", seo_f4: "Construcción de citas locales", seo_f5: "Gestión de Google Business Profile", seo_f6: "Actualizaciones SEO mensuales", seo_f7: "Construcción de backlinks", seo_f8: "Reporte mensual de rendimiento", seo_f9: "Meta: Top 10 de Google en 12 meses",
    ads_tier: "Google Ads", ads_name: "Gestión de Campañas Publicitarias", ads_unit: " gasto mínimo", ads_monthly: "opciones semanales o mensuales",
    ads_desc: "Aparece en la cima de Google de inmediato. Sin esperar al SEO. Configuro y gestiono toda tu campaña de principio a fin.",
    ads_f1: "Configuración completa de campaña y targeting", ads_f2: "Estrategia de anuncios y palabras clave", ads_f3: "Gestión y optimización de pujas", ads_f4: "Reportes semanales de rendimiento", ads_f5: "Plan semanal: $1,000 / semana", ads_f6: "Plan mensual: $1,000–$3,000 / mes",
    ads_note: "El rendimiento de los anuncios lo determina Google y tu presupuesto — no yo. Optimizo cada dólar, pero Google controla el posicionamiento.",
    process_eyebrow: "Cómo Funciona", process_h2: "Cómo Alex Crea Sitios que Aparecen en Google",
    process_sub: "Claro de principio a fin. Sabes lo que ocurre en cada paso antes de que se mueva cualquier dinero.",
    step1_title: "Consulta Gratuita", step1_desc: "Llámame o envíame un mensaje al <a href=\"tel:+19517019764\">951-701-9764</a>. Hablamos sobre tu negocio, tus metas y tu presupuesto. Sin presión, sin ventas — solo una conversación directa sobre lo que realmente funciona para ti.",
    step2_title: "Contrato Digital", step2_desc: "Antes de mover cualquier dinero, recibes un contrato digital claro con exactamente lo que se va a construir, cuánto cuesta y todas las políticas. Lo revisas, lo firmas digitalmente y avanzamos en tus términos.",
    step3_title: "Factura Stripe y Pago", step3_desc: "Una vez firmado el contrato, se envía una factura segura de Stripe a tu correo. Paga con tarjeta de crédito, débito o cualquier marca principal — Visa, Mastercard, Amex, Discover y más. El trabajo comienza en cuanto se registra el pago.",
    step4_title: "Crear, Lanzar y Posicionar", step4_desc: "Tu sitio se lanza. Para clientes de SEO, el trabajo mensual continuo comienza de inmediato — citas, backlinks, actualizaciones de contenido, gestión de GBP — todo acumulándose cada mes para subir tu posición en Google.",
    about_eyebrow: "Con Quién Trabajas",
    about_h2: "Sobre Alex Ramirez — Diseñador Web Independiente en Riverside",
    about_p1: "Soy un diseñador web y mercadólogo digital independiente basado en Riverside, California. Trabajo directamente con dueños de negocios — sin intermediarios de agencia, sin personal junior pasando tu proyecto. Cuando trabajas conmigo, hablas conmigo.",
    about_p2: "Me especializo en crear sitios web que no solo se ven bien — están diseñados para posicionarse en Google y convertir visitantes en clientes. Ya sea que necesites un sitio económico para estar en línea o una campaña SEO completa, lo construyo todo desde cero, de la manera correcta.",
    about_p3: "Sirvo a negocios en todo Riverside y el Inland Empire — Corona, Moreno Valley, Ontario, San Bernardino, Temecula y más allá. Si tus clientes son locales, puedo ayudarlos a encontrarte.",
    about_card_label1: "Hablas con Alex — no con un representante", about_card_label2: "Basado en Riverside, CA", about_card_label3: "Cobertura completa del Inland Empire",
    about_card_cta: "Llama o Escríbele a Alex",
    faq_eyebrow: "Preguntas Frecuentes",
    faq_h2: "Preguntas Frecuentes sobre Diseño Web y SEO",
    faq_q1: "¿Cuánto cuesta un sitio web?", faq_a1: "Depende de lo que necesites. Alex ofrece un Sitio Web Básico sin costo inicial — solo pagas $250 al mes por mantenimiento y hosting. Si quieres un sitio diseñado para posicionarse en Google, el paquete SEO cuesta $1,500 inicial más $450 al mes. Ambas opciones están diseñadas para negocios que quieren resultados sin precios de agencia.",
    faq_q2: "¿Necesito SEO?", faq_a2: "Si tus clientes buscan en Google antes de comprar — y la mayoría lo hace — entonces sí. Un sitio sin SEO es invisible. Alex trabaja con negocios de todos los tamaños, locales e internacionales. Su paquete SEO está diseñado para posicionarse en el top 10 de Google para tus términos de búsqueda específicos — ya seas un negocio local o uno que llega a clientes en todo el mundo. Sin SEO, tu sitio puede existir pero nadie lo encontrará.",
    faq_q3: "¿Cuánto tiempo tarda el SEO en funcionar?", faq_a3: "La mayoría de las campañas de SEO local comienzan a mostrar movimiento medible en 60 a 90 días, con ganancias significativas visibles entre los meses cuatro y seis. Alex se enfoca en SEO local específico, que tiende a producir resultados más rápidos porque el grupo de competencia es más pequeño.",
    faq_q4: "¿Cómo funcionan los Google Ads?", faq_a4: "Los Google Ads ponen tu negocio en la cima de los resultados de búsqueda de inmediato — sin esperar al SEO. Pagas por clic, y Alex gestiona todo: configuración de campaña, targeting de palabras clave, redacción de anuncios, gestión de pujas y reportes semanales. El gasto mínimo es $1,000/mes. Opción semanal a $1,000/semana, mensual a $1,000–$3,000/mes. Entre más inviertes, más alto coloca Google tus anuncios — ese es el sistema de Google, no mío.",
    faq_q5: "¿Dónde está Alex y a qué áreas sirve?", faq_a5: "Alex está basado en Riverside, California, pero trabaja con clientes en todos lados — negocios locales del Inland Empire, marcas nacionales y clientes internacionales de cualquier tamaño. El diseño web y el SEO son servicios completamente remotos. Contáctalo al <a href=\"tel:+19517019764\">951-701-9764</a> o <a href=\"mailto:alexramirezbiz24@gmail.com\">alexramirezbiz24@gmail.com</a>.",
    faq_q6: "¿Cómo empiezo?", faq_a6: "Llama o escríbele a Alex al <a href=\"tel:+19517019764\">951-701-9764</a> — esa es la forma más rápida. También puedes enviar un correo a <a href=\"mailto:alexramirezbiz24@gmail.com\">alexramirezbiz24@gmail.com</a> o llenar el formulario en esta página. Te hará algunas preguntas sobre tu negocio y presupuesto, y te dará una recomendación directa. Sin discurso de ventas, sin compromiso. La mayoría de los clientes están en marcha en menos de una semana.",
    contact_eyebrow: "Hablemos", contact_h2: "¿Listo para Ser Encontrado en Línea? Contacta a Alex Hoy",
    contact_sub: "Sin agencia. Sin rodeos. Hablas directamente conmigo. La mayoría de las consultas reciben respuesta el mismo día.",
    contact_label_phone: "Llamar o Escribir", contact_label_email: "Correo", contact_label_loc: "Ubicación",
    contact_loc_val: "Riverside, CA · Inland Empire",
    contact_payments_label: "Pagos aceptados por Stripe",
    contact_payments_note: "Se envía una factura de Stripe antes de comenzar cualquier trabajo. Se requiere pago antes de iniciar.",
    contact_form_title: "Enviar un Mensaje",
    contact_service_default: "¿Qué servicio te interesa?",
    form_message_contact: "Cuéntame sobre tu negocio y lo que buscas",
    mobile_call: "📞 Llamar Ahora", mobile_quote: "Cotización Gratis",
    footer_sub: "Diseñador Web Independiente · Riverside, CA",
    footer_copyright: "© 2026 Alex Ramirez · Riverside, CA · Diseño Web y SEO · Inland Empire",
    footer_privacy: "Política de Privacidad", footer_terms: "Términos de Servicio",
    footer_stripe: "Pagos procesados de forma segura por Stripe."
  }
};

/* ── Language Toggle ── */
function setLanguage(lang) {
  // Keys that contain HTML (links must be preserved)
  const htmlKeys = new Set([
    'step1_desc', 'step2_desc', 'step3_desc', 'step4_desc',
    'faq_a5', 'faq_a6'
  ]);

  // Update all text elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key] !== undefined) {
      if (htmlKeys.has(key)) {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.placeholder = translations[lang][key];
    }
  });

  // Update html lang attribute
  document.documentElement.lang = lang === 'es' ? 'es' : 'en';

  // Update toggle button active states
  document.getElementById('lang-en')?.classList.toggle('lang-toggle__btn--active', lang === 'en');
  document.getElementById('lang-es')?.classList.toggle('lang-toggle__btn--active', lang === 'es');

  // Save preference
  localStorage.setItem('preferred-lang', lang);
}

function initLanguage() {
  const saved = localStorage.getItem('preferred-lang') || 'en';
  setLanguage(saved);
}

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
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

  // Close mobile nav on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('active')) {
      nav.classList.remove('active');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      if (mbar) mbar.classList.remove('nav-open');
      toggle.focus();
    }
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
    const answer = item.querySelector('.faq__a');
    if (!btn || !answer) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('faq__item--open');
      // Close all
      items.forEach(i => {
        i.classList.remove('faq__item--open');
        const a = i.querySelector('.faq__a');
        if (a) a.style.maxHeight = '';
        i.querySelector('.faq__q')?.setAttribute('aria-expanded', 'false');
      });
      // Toggle clicked
      if (!isOpen) {
        item.classList.add('faq__item--open');
        // Set max-height to exact scroll height so animation is accurate regardless of content length
        answer.style.maxHeight = answer.scrollHeight + 'px';
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
    // Per-form state: track in-flight request and pending reset timer
    let submitting = false;
    let resetTimer = null;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Prevent double-submit while a request is already in flight
      if (submitting) return;

      const btn = form.querySelector('[type="submit"]');
      if (!btn) return;

      // Cancel any pending error-reset timer from a previous failed attempt
      if (resetTimer !== null) {
        clearTimeout(resetTimer);
        resetTimer = null;
      }

      const originalText = btn.textContent;
      submitting = true;
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
        // Re-enable after showing the error; store timer so it can be cancelled
        resetTimer = setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
          btn.disabled = false;
          submitting = false;
          resetTimer = null;
        }, 4000);
      }
    });
  });
}
