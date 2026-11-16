/* Monta uma página interna a partir de ARCS.paginas (?p=slug).
   Roda antes do site.js para o menu já nascer com a aba certa marcada. */
(function () {
  const ic = (n) => `<svg class="i" aria-hidden="true"><use href="#i-${n}"></use></svg>`;
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const slug = new URLSearchParams(location.search).get('p') || 'alphaville';
  const pg = (window.ARCS.paginas || {})[slug];
  const main = document.getElementById('conteudo');

  document.body.dataset.page = slug;

  if (!pg) {
    document.title = 'Página não encontrada — Alphaville Rio Costa do Sol';
    main.innerHTML = `<section class="section"><div class="container prose"><h1>Página não encontrada</h1><p><a class="link-arrow" href="index.html">Voltar para a Home ${ic('arrow')}</a></p></div></section>`;
    return;
  }

  const nomeDaAba = pg.eyebrow === 'Documentos' || pg.eyebrow === 'Políticas' ? pg.titulo : pg.eyebrow;
  document.title = `${nomeDaAba} — Alphaville Rio Costa do Sol`;

  const paras = (ps = []) => ps.map((p) => `<p>${esc(p)}</p>`).join('');
  const lista = (l) => (l && l.length ? `<ul class="checklist">${l.map((x) => `<li>${ic('check')}<span>${esc(x)}</span></li>`).join('')}</ul>` : '');
  const galeria = (imgs, titulo) => `<div class="gallery" data-n="${imgs.length}">${imgs.map((src, i) =>
    `<button type="button" data-lightbox="img" data-src="${src}" data-alt="${esc(titulo || '')}" aria-label="Ampliar foto ${i + 1}${titulo ? ' — ' + esc(titulo) : ''}"><img src="${src}" alt="" loading="lazy"></button>`).join('')}</div>`;

  let alterna = 0;
  const blocos = pg.blocos.map((b) => {
    if (b.tipo === 'texto') {
      const texto = `<div class="prose">${b.titulo ? `<h2>${esc(b.titulo)}</h2>` : ''}${paras(b.paragrafos)}${lista(b.lista)}</div>`;
      if (!b.imagens || !b.imagens.length) return `<div class="block reveal">${texto}</div>`;
      const rev = alterna++ % 2 ? ' block-grid--rev' : '';
      return `<div class="block reveal"><div class="block-grid${rev}">${texto}${galeria(b.imagens, b.titulo)}</div></div>`;
    }
    if (b.tipo === 'cards') {
      return `<div class="block reveal"><div class="cards3">${b.itens.map((c) => `<div class="vcard"><h3>${ic(c.icone)} ${esc(c.titulo)}</h3><p>${esc(c.texto)}</p></div>`).join('')}</div></div>`;
    }
    if (b.tipo === 'pessoas') {
      return `<div class="block reveal">
        <h2>${esc(b.titulo)}</h2>
        <p class="muted prose">${esc(b.texto)}</p>
        <div class="table-wrap"><table class="people">
          <thead><tr><th scope="col">Nome</th><th scope="col">Função</th><th scope="col">E-mail</th></tr></thead>
          <tbody>${b.linhas.map(([n, f, e]) => `<tr><td>${esc(n)}</td><td>${esc(f)}</td><td><a href="mailto:${e}">${e}</a></td></tr>`).join('')}</tbody>
        </table></div>
      </div>`;
    }
    if (b.tipo === 'documentos') {
      return `<div class="block reveal"><div class="prose">${paras(b.paragrafos)}</div>
        <ul class="docs">${b.itens.map(([t, h]) => `<li><a class="doc" href="${h}" target="_blank" rel="noopener">
          <span class="doc__ic">${ic('file')}</span>
          <span class="doc__t">${esc(t)}<small>PDF</small></span>
          ${ic('download')}
        </a></li>`).join('')}</ul></div>`;
    }
    if (b.tipo === 'abas') {
      const id = 'abas-' + Math.random().toString(36).slice(2, 7);
      return `<div class="block reveal">
        <div class="tabs" role="tablist" aria-label="Seções">${b.abas.map((a, i) => `<button class="tab" type="button" role="tab" id="${id}-t${i}" aria-controls="${id}-p${i}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">${esc(a.titulo)}</button>`).join('')}</div>
        ${b.abas.map((a, i) => `<div class="prose" role="tabpanel" id="${id}-p${i}" aria-labelledby="${id}-t${i}"${i ? ' hidden' : ''}>${paras(a.paragrafos)}${lista(a.lista)}</div>`).join('')}
      </div>`;
    }
    return '';
  }).join('');

  const NAVSEC = { estrutura: 'Estrutura' };
  const crumb = NAVSEC[pg.secao] ? `<span>${NAVSEC[pg.secao]}</span>${ic('right')}` : '';

  main.innerHTML = `
    <section class="phero" style="background-image:url('${pg.hero}')">
      <div class="container">
        <nav class="crumbs" aria-label="Você está em"><a href="index.html">Home</a>${ic('right')}${crumb}<span>${esc(pg.eyebrow === 'Documentos' || pg.eyebrow === 'Políticas' ? pg.titulo : pg.eyebrow)}</span></nav>
        <p class="eyebrow eyebrow--light">${esc(pg.eyebrow)}</p>
        <h1>${esc(pg.titulo)}</h1>
        ${pg.subtitulo ? `<p>${esc(pg.subtitulo)}</p>` : ''}
      </div>
    </section>
    <section class="section"><div class="container">${blocos}</div></section>
    <section class="appband">
      <div class="container">
        <h2>${ic('phoneapp')} Atenção, associados, já conhece o nosso aplicativo?</h2>
        <div class="appband__stores">
          <a class="store" href="https://play.google.com/store/apps/details?id=com.formulaweb.MyVillage" target="_blank" rel="noopener">Android</a>
          <a class="store" href="https://apps.apple.com/br/app/myvillage/id803954678" target="_blank" rel="noopener">iOS</a>
        </div>
      </div>
    </section>`;

  // Abas acessíveis: clique e setas do teclado.
  main.querySelectorAll('[role="tablist"]').forEach((tl) => {
    const tabs = [...tl.querySelectorAll('[role="tab"]')];
    const ativar = (t) => {
      tabs.forEach((x) => {
        const on = x === t;
        x.setAttribute('aria-selected', String(on));
        x.tabIndex = on ? 0 : -1;
        document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
      });
      t.focus();
    };
    tl.addEventListener('click', (e) => { const t = e.target.closest('[role="tab"]'); if (t) ativar(t); });
    tl.addEventListener('keydown', (e) => {
      const i = tabs.indexOf(document.activeElement);
      if (e.key === 'ArrowRight') ativar(tabs[(i + 1) % tabs.length]);
      if (e.key === 'ArrowLeft') ativar(tabs[(i - 1 + tabs.length) % tabs.length]);
    });
  });
})();
