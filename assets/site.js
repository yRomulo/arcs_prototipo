/* Estrutura comum a todas as páginas: cabeçalho, menu, rodapé, aviso de cookies e utilitários.
   No Astro isto vira Header.astro / Footer.astro / BaseLayout.astro. */
(function () {
  document.documentElement.classList.add('js');

  const U = 'https://arcs.com.br/wp-content/uploads/2025/';
  const C = {
    logo: U + '04/footer-logo-1.png',
    endereco: 'Rodovia Amaral Peixoto, Km 165. Balneário das Garças - Rio das Ostras, RJ',
    email: 'contato@arcs.com.br',
    tel1: '(22) 2006-0085',
    tel2: '(22) 2006-0087',
    whatsapp: 'https://api.whatsapp.com/send?phone=5522981731300&text=Ol%C3%A1%2C%20acabo%20de%20vir%20do%20site%20e%20gostaria%20tirar%20uma%20d%C3%BAvida%20com%20um%20atendente.',
    facebook: 'https://www.facebook.com/AlphaRioCostadoSol/',
    instagram: 'https://www.instagram.com/riocostadosolalphaville/',
    mapa: 'https://g.co/kgs/DgVHaoF',
    android: 'https://play.google.com/store/apps/details?id=com.formulaweb.MyVillage',
    ios: 'https://apps.apple.com/br/app/myvillage/id803954678',
    cartilha: U + '05/Bem-vindo_Associado.pdf'
  };

  const NAV = [
    { t: 'Home', h: 'index.html', id: 'home' },
    {
      t: 'Estrutura', id: 'estrutura', sub: [
        { t: 'Segurança', h: 'pagina.html?p=seguranca', id: 'seguranca' },
        { t: 'Área Comercial', h: 'pagina.html?p=area-comercial', id: 'area-comercial' },
        { t: 'Área Residencial', h: 'pagina.html?p=area-residencial', id: 'area-residencial' },
        { t: 'Estatuto Social', h: 'pagina.html?p=estatuto-social', id: 'estatuto-social' },
        { t: 'Normas e Regimentos', h: 'pagina.html?p=normas-e-regimentos', id: 'normas-e-regimentos' }
      ]
    },
    { t: 'Alphaville', h: 'pagina.html?p=alphaville', id: 'alphaville' },
    { t: 'Clube', h: 'pagina.html?p=clube', id: 'clube' },
    { t: 'Ambiental', h: 'pagina.html?p=ambiental', id: 'ambiental' },
    { t: 'Eventos', h: 'eventos.html', id: 'eventos' },
    { t: 'Contato', h: 'contato.html', id: 'contato' }
  ];

  // Ícones no traço do Lucide (licença ISC).
  const ICONS = {
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    calendar: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    'calendar-plus': '<path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8M16 2v4M8 2v4M3 10h18M19 16v6M16 19h6"/>',
    arrow: '<path d="M5 12h14M12 5l7 7-7 7"/>',
    down: '<path d="m6 9 6 6 6-6"/>',
    left: '<path d="m15 18-6-6 6-6"/>',
    right: '<path d="m9 18 6-6-6-6"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
    share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98"/>',
    play: '<path d="M6 3l14 9-14 9V3z"/>',
    file: '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>',
    megaphone: '<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
    alert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4M12 17h.01"/>',
    pushpin: '<path d="M12 17v5M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/>',
    external: '<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    phoneapp: '<rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/>',
    facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
    instagram: '<rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01"/>',
    chat: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
    leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
    building: '<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>',
    nav: '<path d="M3 11 22 2l-9 19-2-8-8-2z"/>',
    bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    star: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>',
    eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>'
  };

  const icon = (n, cls = '') => `<svg class="i ${cls}" aria-hidden="true"><use href="#i-${n}"></use></svg>`;
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const store = {
    get(k, area = 'local') { try { return window[area + 'Storage'].getItem(k); } catch { return null; } },
    set(k, v, area = 'local') { try { window[area + 'Storage'].setItem(k, v); } catch { /* armazenamento indisponível: segue sem lembrar */ } }
  };

  function sprite() {
    const s = Object.entries(ICONS).map(([k, v]) => `<symbol id="i-${k}" viewBox="0 0 24 24">${v}</symbol>`).join('');
    document.body.insertAdjacentHTML('afterbegin', `<svg width="0" height="0" style="position:absolute" aria-hidden="true">${s}</svg>`);
  }

  const page = document.body.dataset.page || '';
  const isActive = (it) => it.id === page || (it.sub && it.sub.some((s) => s.id === page));

  function alertBar() {
    const q = window.ARCS.quadro;
    const u = q && q.urgente();
    if (!u || store.get('arcs-alerta-' + u.id, 'session')) return '';
    return `<div class="alertbar" role="region" aria-label="Aviso urgente"><div class="container">
      <span class="alertbar__tag">Urgente</span>
      <p class="alertbar__text" style="margin:0"><a href="eventos.html#${esc(u.id)}">${esc(u.titulo)}</a></p>
      <button class="alertbar__close" type="button" data-close-alert="${esc(u.id)}" aria-label="Fechar aviso">${icon('x')}</button>
    </div></div>`;
  }

  function header() {
    const q = window.ARCS.quadro;
    const nAvisos = q ? q.avisos().length : 0;
    const items = NAV.map((it) => {
      const act = isActive(it) ? ' is-active' : '';
      const cur = it.id === page ? ' aria-current="page"' : '';
      if (it.sub) {
        return `<li class="nav__item">
          <button class="nav__link${act}" type="button" aria-expanded="false" aria-haspopup="true">${it.t} ${icon('down')}</button>
          <ul class="dropdown">${it.sub.map((s) => `<li><a href="${s.h}"${s.id === page ? ' class="is-active" aria-current="page"' : ''}>${s.t}</a></li>`).join('')}</ul>
        </li>`;
      }
      const badge = it.id === 'eventos' && nAvisos ? ` <span class="nav__badge" aria-label="${nAvisos} avisos ativos">${nAvisos}</span>` : '';
      return `<li class="nav__item"><a class="nav__link${act}" href="${it.h}"${cur}>${it.t}${badge}</a></li>`;
    }).join('');

    const mItems = NAV.map((it) => it.sub
      ? `<li><details${isActive(it) ? ' open' : ''}><summary>${it.t} ${icon('down')}</summary>${it.sub.map((s) => `<a href="${s.h}"${s.id === page ? ' class="is-active"' : ''}>${s.t}</a>`).join('')}</details></li>`
      : `<li><a href="${it.h}"${isActive(it) ? ' class="is-active"' : ''}>${it.t}${it.id === 'eventos' && nAvisos ? ` <span class="nav__badge">${nAvisos}</span>` : ''}</a></li>`
    ).join('');

    return `${alertBar()}
    <div class="topbar"><div class="container">
      <div class="topbar__info">
        <span class="topbar__addr">${icon('pin')} Rodovia Amaral Peixoto, Km 165 Balneário das Garças - Rio das Ostras, RJ</span>
        <a href="tel:+552220060085">${icon('phone')} Suporte ${C.tel1}</a>
      </div>
      <div class="topbar__social">
        <a href="${C.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${icon('facebook')}</a>
        <a href="${C.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${icon('instagram')}</a>
        <a href="${C.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp">${icon('chat')}</a>
      </div>
    </div></div>
    <header class="header"><div class="container">
      <a class="brand" href="index.html" aria-label="Alphaville Rio Costa do Sol — página inicial"><img src="${C.logo}" alt="Alphaville Rio Costa do Sol" width="188" height="51"></a>
      <nav class="nav" aria-label="Principal"><ul class="nav__list">${items}</ul></nav>
      <button class="menu-btn" type="button" aria-label="Abrir menu" aria-controls="mnav" aria-expanded="false">${icon('menu')}</button>
    </div></header>
    <div class="mnav" id="mnav" role="dialog" aria-modal="true" aria-label="Menu">
      <div class="mnav__top">
        <img src="${C.logo}" alt="Alphaville Rio Costa do Sol" width="188" height="51">
        <button class="menu-btn" type="button" data-close-nav aria-label="Fechar menu">${icon('x')}</button>
      </div>
      <ul class="mnav__list">${mItems}</ul>
      <div class="mnav__contact">
        <span>${icon('pin')} ${C.endereco}</span>
        <a href="tel:+552220060085">${icon('phone')} ${C.tel1}</a>
        <a href="mailto:${C.email}">${icon('mail')} ${C.email}</a>
        <a href="${C.whatsapp}" target="_blank" rel="noopener">${icon('chat')} WhatsApp</a>
      </div>
    </div>`;
  }

  function footer() {
    const ano = new Date().getFullYear();
    return `<footer class="footer">
      <div class="container footer__grid">
        <div>
          <img class="footer__logo" src="${C.logo}" alt="Alphaville Rio Costa do Sol" width="188" height="51" loading="lazy">
          <ul>
            <li>${icon('pin')} <span>${C.endereco}</span></li>
            <li>${icon('mail')} <a href="mailto:${C.email}">${C.email}</a></li>
            <li>${icon('phone')} <a href="tel:+552220060085">${C.tel1}</a></li>
            <li>${icon('phone')} <a href="tel:+552220060087">${C.tel2}</a></li>
          </ul>
          <div class="social">
            <a href="${C.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${icon('facebook')}</a>
            <a href="${C.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${icon('instagram')}</a>
            <a href="${C.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp">${icon('chat')}</a>
            <a href="${C.mapa}" target="_blank" rel="noopener" aria-label="Como chegar">${icon('nav')}</a>
          </div>
        </div>
        <div>
          <h4>Links Úteis</h4>
          <ul>
            ${NAV.filter((n) => !n.sub).map((n) => `<li><a href="${n.h}">${icon('arrow')} ${n.t}</a></li>`).join('')}
          </ul>
        </div>
        <div>
          <h4>Políticas</h4>
          <ul>
            <li><a href="pagina.html?p=politica-de-privacidade">${icon('arrow')} Política de Privacidade</a></li>
            <li><a href="pagina.html?p=politica-de-cookies">${icon('arrow')} Política de Cookies</a></li>
            <li><a href="pagina.html?p=termos-de-uso">${icon('arrow')} Termos de Uso</a></li>
          </ul>
        </div>
        <div>
          <h4>Aplicativo MyVillage</h4>
          <p>Atenção, associados, já conhece o nosso aplicativo?</p>
          <a class="store" href="${C.android}" target="_blank" rel="noopener">${icon('phoneapp')} Android</a>
          <a class="store" href="${C.ios}" target="_blank" rel="noopener">${icon('phoneapp')} iOS</a>
        </div>
      </div>
      <div class="copy"><div class="container">
        <span>Copyright ©${ano} Alphaville Rio Costa do Sol. Todos os direitos reservados.</span>
      </div></div>
    </footer>
    <a class="wa-float" href="${C.whatsapp}" target="_blank" rel="noopener" aria-label="Falar pelo WhatsApp">${icon('chat')}</a>`;
  }

  function cookieNotice() {
    if (store.get('arcs-cookies')) return;
    const el = document.createElement('div');
    el.className = 'cookie';
    el.setAttribute('role', 'region');
    el.setAttribute('aria-label', 'Aviso de cookies');
    el.innerHTML = `<p>Este site usa apenas cookies essenciais ao funcionamento. Mapas e vídeos de terceiros só carregam se você pedir.</p>
      <div class="cookie__actions">
        <button class="btn btn--primary btn--sm" type="button">Entendi</button>
        <a href="pagina.html?p=politica-de-cookies">Política de Cookies</a>
      </div>`;
    el.querySelector('button').addEventListener('click', () => { store.set('arcs-cookies', '1'); el.remove(); });
    document.body.appendChild(el);
  }

  function wire() {
    const mnav = document.getElementById('mnav');
    const openBtn = document.querySelector('.header .menu-btn');
    const setNav = (open) => {
      mnav.classList.toggle('open', open);
      document.body.classList.toggle('nav-open', open);
      openBtn.setAttribute('aria-expanded', String(open));
      if (open) mnav.querySelector('[data-close-nav]').focus(); else openBtn.focus();
    };
    openBtn.addEventListener('click', () => setNav(true));
    mnav.querySelector('[data-close-nav]').addEventListener('click', () => setNav(false));

    document.querySelectorAll('.nav__item > button').forEach((btn) => {
      btn.addEventListener('click', () => {
        const li = btn.parentElement;
        const open = !li.classList.contains('open');
        li.classList.toggle('open', open);
        btn.setAttribute('aria-expanded', String(open));
      });
    });
    document.addEventListener('click', (e) => {
      document.querySelectorAll('.nav__item.open').forEach((li) => {
        if (!li.contains(e.target)) { li.classList.remove('open'); li.querySelector('button').setAttribute('aria-expanded', 'false'); }
      });
    });
    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      if (mnav.classList.contains('open')) setNav(false);
      document.querySelectorAll('.nav__item.open').forEach((li) => { li.classList.remove('open'); li.querySelector('button').setAttribute('aria-expanded', 'false'); });
    });

    const close = document.querySelector('[data-close-alert]');
    if (close) close.addEventListener('click', () => {
      store.set('arcs-alerta-' + close.dataset.closeAlert, '1', 'session');
      close.closest('.alertbar').remove();
    });

    // Mapa do Google só carrega a pedido (evita cookie de terceiro sem consentimento).
    document.querySelectorAll('[data-load-map]').forEach((btn) => btn.addEventListener('click', () => {
      const box = btn.closest('.mapbox');
      box.innerHTML = '<iframe title="Mapa: Alphaville Rio Costa do Sol" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=Alphaville%20Rio%20Costa%20do%20Sol&t=m&z=14&output=embed&iwloc=near"></iframe>';
    }));

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      }), { rootMargin: '0px 0px -8% 0px' });
      document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    } else {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
    }
  }

  // Lightbox para imagem e vídeo, com <dialog> nativo (Esc e foco já resolvidos pelo navegador).
  function lightbox(kind, src, alt = '') {
    const dlg = document.createElement('dialog');
    dlg.className = 'lightbox';
    dlg.innerHTML = `<button class="lightbox__close" type="button" aria-label="Fechar">${icon('x')}</button>` +
      (kind === 'video'
        ? `<video src="${esc(src)}" controls autoplay playsinline></video>`
        : `<img src="${esc(src)}" alt="${esc(alt)}">`);
    document.body.appendChild(dlg);
    dlg.querySelector('.lightbox__close').addEventListener('click', () => dlg.close());
    dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener('close', () => dlg.remove());
    dlg.showModal();
  }

  function wireLightbox(root = document) {
    root.querySelectorAll('[data-lightbox]').forEach((el) => el.addEventListener('click', () => {
      lightbox(el.dataset.lightbox, el.dataset.src, el.dataset.alt || '');
    }));
  }

  sprite();
  const h = document.getElementById('site-header');
  const f = document.getElementById('site-footer');
  if (h) h.outerHTML = header();
  if (f) f.outerHTML = footer();
  cookieNotice();

  window.ARCS = Object.assign(window.ARCS || {}, { U, C, NAV, icon, esc, store, lightbox, wireLightbox, wire });
  document.addEventListener('DOMContentLoaded', () => { wire(); wireLightbox(); });
})();
