/* Desenho do quadro de avisos e eventos: destaque na home, página completa e arquivo de agenda (.ics). */
(function () {
  const { icon, esc } = window.ARCS;
  const q = window.ARCS.quadro;

  const fData = new Intl.DateTimeFormat('pt-BR', { weekday: 'short', day: '2-digit', month: 'short' });
  const fMes = new Intl.DateTimeFormat('pt-BR', { month: 'short' });
  const fMesAno = new Intl.DateTimeFormat('pt-BR', { month: 'long', year: 'numeric' });
  const fHora = new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit' });
  const fCurta = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit' });

  const mesCurto = (d) => fMes.format(d).replace('.', '');
  const mesAno = (d) => { const s = fMesAno.format(d); return s.charAt(0).toUpperCase() + s.slice(1); };
  const mesmoDia = (a, b) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  const diasAte = (d) => {
    const a = new Date(); a.setHours(0, 0, 0, 0);
    const b = new Date(d); b.setHours(0, 0, 0, 0);
    return Math.round((b - a) / 86400000);
  };

  function quando(it) {
    if (it.tipo === 'evento') {
      const n = diasAte(it.inicio);
      if (n < 0) return 'Acontecendo';
      if (n === 0) return 'Hoje';
      if (n === 1) return 'Amanhã';
      if (n <= 7) return `Em ${n} dias`;
      return '';
    }
    const n = -diasAte(it.publicado);
    if (n === 0) return 'Publicado hoje';
    if (n === 1) return 'Publicado ontem';
    return `Publicado há ${n} dias`;
  }

  function periodo(it) {
    const ini = it.inicio, fim = it.fim;
    if (!ini) return '';
    if (!fim || mesmoDia(ini, fim)) {
      return `${fData.format(ini)}, ${fHora.format(ini)}${fim ? '–' + fHora.format(fim) : ''}`;
    }
    return `${fData.format(ini)} a ${fData.format(fim)}`;
  }

  const slug = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

  function tags(it) {
    const out = [];
    if (it.prioridade === 'urgente') out.push(`<span class="tag tag--urgente">${icon('alert')} Urgente</span>`);
    if (it.fixado) out.push(`<span class="tag tag--fixado">${icon('pushpin')} Fixado</span>`);
    if (it.tipo === 'evento') out.push(`<span class="tag tag--evento">${esc(it.categoria)}</span>`);
    else out.push(`<span class="tag tag--${slug(it.categoria)}">${esc(it.categoria)}</span>`);
    return out.join('');
  }

  function datebox(it, extra = '') {
    if (it.tipo === 'evento') {
      return `<div class="datebox ${extra}" aria-hidden="true"><b>${String(it.inicio.getDate()).padStart(2, '0')}</b><small>${mesCurto(it.inicio)}</small></div>`;
    }
    const urg = it.prioridade === 'urgente';
    return `<div class="datebox datebox--icon ${urg ? 'datebox--urgente' : ''} ${extra}" aria-hidden="true">${icon(urg ? 'alert' : it.fixado ? 'pushpin' : 'megaphone')}</div>`;
  }

  /* ---------- Arquivo de agenda (.ics) — gerado no navegador, sem servidor ---------- */
  const icsData = (d) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const icsTexto = (s) => String(s).replace(/\\/g, '\\\\').replace(/([,;])/g, '\\$1').replace(/\n/g, '\\n');

  function ics(lista) {
    const linhas = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Alphaville Rio Costa do Sol//Quadro de eventos//PT-BR', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH', 'X-WR-CALNAME:Alphaville Rio Costa do Sol'];
    const agora = icsData(new Date());
    lista.forEach((it) => {
      const fim = it.fim || new Date(it.inicio.getTime() + 2 * 3600000);
      linhas.push('BEGIN:VEVENT', `UID:${it.id}@arcs.com.br`, `DTSTAMP:${agora}`, `DTSTART:${icsData(it.inicio)}`, `DTEND:${icsData(fim)}`,
        `SUMMARY:${icsTexto(it.titulo)}`, `LOCATION:${icsTexto('Alphaville Rio Costa do Sol - ' + (it.local || ''))}`,
        `DESCRIPTION:${icsTexto(it.resumo || '')}`, 'END:VEVENT');
    });
    linhas.push('END:VCALENDAR');
    return linhas.join('\r\n');
  }

  function baixar(nome, conteudo) {
    const url = URL.createObjectURL(new Blob([conteudo], { type: 'text/calendar;charset=utf-8' }));
    const a = Object.assign(document.createElement('a'), { href: url, download: nome });
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function linkWhatsApp(it) {
    const base = location.href.split('#')[0].replace(/[^/]*$/, '') + 'eventos.html#' + it.id;
    const quandoTxt = it.inicio ? ' — ' + periodo(it) : '';
    return 'https://wa.me/?text=' + encodeURIComponent(`${it.titulo}${quandoTxt}\n${base}`);
  }

  /* ---------- Home ---------- */
  function noticeHTML(it) {
    return `<article class="notice">
      ${datebox(it)}
      <div class="notice__body">
        <div class="notice__meta">${tags(it)}<span>${quando(it)}</span></div>
        <h3><a href="eventos.html#${it.id}" style="color:inherit;text-decoration:none">${esc(it.titulo)}</a></h3>
        <p>${esc(it.resumo)}</p>
      </div>
    </article>`;
  }

  function eventHTML(it) {
    const w = quando(it);
    return `<a class="event" href="eventos.html#${it.id}">
      ${datebox(it)}
      <div>
        ${w ? `<span class="when">${w}</span>` : ''}
        <h3>${esc(it.titulo)}</h3>
        <div class="event__meta"><span>${icon('clock')} ${periodo(it)}</span>${it.local ? `<span>${icon('pin')} ${esc(it.local)}</span>` : ''}</div>
      </div>
    </a>`;
  }

  function renderHome() {
    const av = document.getElementById('home-avisos');
    const ev = document.getElementById('home-eventos');
    const pk = document.getElementById('hero-peek');
    const avisos = q.avisos();
    const eventos = q.eventos();
    if (av) av.innerHTML = avisos.length ? avisos.slice(0, 3).map(noticeHTML).join('') : '<p class="empty">Nenhum aviso no momento.</p>';
    if (ev) ev.innerHTML = eventos.length ? eventos.slice(0, 4).map(eventHTML).join('') : '<p class="empty">Nenhum evento agendado.</p>';
    if (pk) {
      const mix = [...avisos.filter((a) => a.prioridade === 'urgente' || a.fixado).slice(0, 1), ...eventos.slice(0, 2)];
      pk.innerHTML = mix.map((it) => `<a class="peek__item" href="eventos.html#${it.id}">
        ${datebox(it, it.tipo === 'aviso' && it.prioridade !== 'urgente' ? 'datebox--soft' : '')}
        <div><strong>${esc(it.titulo)}</strong><span>${it.tipo === 'evento' ? periodo(it) : esc(it.categoria) + ' · ' + quando(it)}</span></div>
      </a>`).join('');
    }
  }

  /* ---------- Página do quadro ---------- */
  function cardHTML(it) {
    const cls = it.prioridade === 'urgente' ? ' item-card--urgente' : it.fixado ? ' item-card--fixado' : '';
    const meta = [];
    if (it.tipo === 'evento') {
      meta.push(`<span>${icon('clock')} ${periodo(it)}</span>`);
      if (it.local) meta.push(`<span>${icon('pin')} ${esc(it.local)}</span>`);
    } else {
      if (it.inicio) meta.push(`<span>${icon('calendar')} ${periodo(it)}</span>`);
      meta.push(`<span>${icon('eye')} No quadro até ${fCurta.format(it.expira || it.fim)}</span>`);
    }
    const w = quando(it);
    return `<article class="item-card${cls}" id="${it.id}">
      ${datebox(it)}
      <div>
        <div class="notice__meta">${tags(it)}${w ? `<span>${w}</span>` : ''}</div>
        <h3>${esc(it.titulo)}</h3>
        <div class="item-card__meta">${meta.join('')}</div>
        <p>${esc(it.resumo)}</p>
        <div class="item-card__actions">
          ${it.tipo === 'evento' ? `<button class="btn btn--outline btn--sm" type="button" data-ics="${it.id}">${icon('calendar-plus')} Adicionar à agenda</button>` : ''}
          <a class="btn btn--outline btn--sm" href="${linkWhatsApp(it)}" target="_blank" rel="noopener">${icon('share')} Compartilhar</a>
        </div>
      </div>
    </article>`;
  }

  function renderPage() {
    const lista = document.getElementById('quadro-lista');
    if (!lista) return;
    const st = { filtro: 'todos', dia: null, mes: new Date() };
    st.mes.setDate(1);

    const filtros = document.getElementById('quadro-filtros');
    const contagem = { todos: q.ativos().length, aviso: q.avisos().length, evento: q.eventos().length };
    filtros.innerHTML = [['todos', 'Todos'], ['aviso', 'Avisos'], ['evento', 'Eventos']]
      .map(([k, t]) => `<button class="chip" type="button" data-f="${k}" aria-pressed="${k === 'todos'}">${t} <span class="chip__n">${contagem[k]}</span></button>`).join('');
    filtros.addEventListener('click', (e) => {
      const b = e.target.closest('[data-f]');
      if (!b) return;
      st.filtro = b.dataset.f;
      filtros.querySelectorAll('[data-f]').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      desenhar();
    });

    const diaBox = document.getElementById('quadro-dia');

    function noDia(it, dia) {
      const ini = new Date(it.inicio); ini.setHours(0, 0, 0, 0);
      const fim = new Date(it.fim || it.inicio); fim.setHours(23, 59, 59, 999);
      return dia >= ini && dia <= fim;
    }

    function desenhar() {
      let avisos = q.avisos();
      let eventos = q.eventos();
      if (st.dia) {
        avisos = [];
        eventos = eventos.filter((it) => noDia(it, st.dia));
        diaBox.hidden = false;
        diaBox.querySelector('span').textContent = `Eventos de ${fData.format(st.dia)}`;
      } else {
        diaBox.hidden = true;
      }
      if (st.filtro === 'aviso') eventos = [];
      if (st.filtro === 'evento') avisos = [];

      let html = '';
      if (avisos.length) {
        html += `<h2 class="group-label">Avisos</h2>` + avisos.map(cardHTML).join('');
      }
      if (eventos.length) {
        let mesAtual = '';
        html += `<h2 class="group-label">Próximos eventos</h2>`;
        eventos.forEach((it) => {
          const m = mesAno(it.inicio);
          if (m !== mesAtual && eventos.length > 2) {
            mesAtual = m;
            html += `<p class="muted" style="margin:18px 0 10px;font-weight:700">${m}</p>`;
          }
          html += cardHTML(it);
        });
      }
      lista.innerHTML = html || '<p class="empty">Nada para mostrar com esse filtro.</p>';
      calendario();
    }

    diaBox.querySelector('button').addEventListener('click', () => { st.dia = null; desenhar(); });

    lista.addEventListener('click', (e) => {
      const b = e.target.closest('[data-ics]');
      if (!b) return;
      const it = q.porId(b.dataset.ics);
      baixar(`${it.id}.ics`, ics([it]));
    });

    const cal = document.getElementById('quadro-cal');
    function calendario() {
      const ano = st.mes.getFullYear(), mes = st.mes.getMonth();
      const primeiro = new Date(ano, mes, 1);
      const offset = (primeiro.getDay() + 6) % 7; // semana começa na segunda
      const dias = new Date(ano, mes + 1, 0).getDate();
      const hoje = new Date(); hoje.setHours(0, 0, 0, 0);
      const eventos = q.eventos();
      let cells = ['seg', 'ter', 'qua', 'qui', 'sex', 'sáb', 'dom'].map((d) => `<span class="cal__dow">${d}</span>`).join('');
      for (let i = 0; i < offset; i++) cells += '<span></span>';
      for (let n = 1; n <= dias; n++) {
        const dia = new Date(ano, mes, n);
        const tem = eventos.some((it) => noDia(it, dia));
        const cls = ['cal__day', tem ? 'has' : '', mesmoDia(dia, hoje) ? 'today' : '', st.dia && mesmoDia(dia, st.dia) ? 'sel' : ''].join(' ');
        cells += tem
          ? `<button class="${cls}" type="button" data-dia="${n}" aria-label="${fData.format(dia)} — ver eventos">${n}</button>`
          : `<span class="${cls}">${n}</span>`;
      }
      cal.innerHTML = `<div class="cal__head">
          <button class="icon-btn" type="button" data-mes="-1" aria-label="Mês anterior">${icon('left')}</button>
          <strong aria-live="polite">${mesAno(st.mes)}</strong>
          <button class="icon-btn" type="button" data-mes="1" aria-label="Próximo mês">${icon('right')}</button>
        </div>
        <div class="cal__grid">${cells}</div>`;
    }
    cal.addEventListener('click', (e) => {
      const m = e.target.closest('[data-mes]');
      if (m) { st.mes.setMonth(st.mes.getMonth() + Number(m.dataset.mes)); calendario(); return; }
      const d = e.target.closest('[data-dia]');
      if (d) {
        st.dia = new Date(st.mes.getFullYear(), st.mes.getMonth(), Number(d.dataset.dia));
        desenhar();
        lista.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    const todos = document.getElementById('quadro-ics');
    if (todos) todos.addEventListener('click', () => baixar('agenda-alphaville.ics', ics(q.eventos())));

    const past = document.getElementById('quadro-realizados');
    if (past) {
      past.innerHTML = q.realizados.map((p) => `<a class="pcard" href="${p.h}" target="_blank" rel="noopener">
        <img src="${p.img}" alt="" loading="lazy">
        <div><span>${esc(p.t)}</span>${icon('arrow')}</div>
      </a>`).join('');
    }

    desenhar();

    function destacar() {
      const id = decodeURIComponent(location.hash.slice(1));
      if (!id) return;
      const alvo = document.getElementById(id);
      if (!alvo || !alvo.classList.contains('item-card')) return;
      document.querySelectorAll('.item-card.is-target').forEach((x) => x.classList.remove('is-target'));
      alvo.classList.add('is-target');
      alvo.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    window.addEventListener('hashchange', destacar);
    setTimeout(destacar, 150);
  }

  renderHome();
  renderPage();
})();
