/* Dados do quadro de avisos e eventos.
   No site final cada item é um arquivo Markdown em src/content/quadro/, validado no build.
   Aqui as datas são relativas a hoje para o protótipo sempre ter o que mostrar. */
(function () {
  const U = 'https://arcs.com.br/wp-content/uploads/2025/';
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  const d = (dias, hora = '00:00') => {
    const x = new Date(hoje);
    x.setDate(x.getDate() + dias);
    const [h, m] = hora.split(':');
    x.setHours(+h, +m, 0, 0);
    return x;
  };

  const itens = [
    {
      id: 'cadastro-facial', tipo: 'aviso', categoria: 'Segurança', prioridade: 'urgente',
      titulo: 'Atualização do cadastro de reconhecimento facial',
      resumo: 'Associados e dependentes que ainda não atualizaram o cadastro facial devem procurar a Recepção até o fim do mês para manter o acesso às portarias.',
      publicado: d(-1), expira: d(18)
    },
    {
      id: 'horario-fim-de-ano', tipo: 'aviso', categoria: 'Clube', fixado: true,
      titulo: 'Horário especial do Clube nas festas de fim de ano',
      resumo: 'Nas vésperas e nos feriados de fim de ano o Clube funciona das 8h às 16h. O Restaurante Alpha Gourmet atende com reserva pela Recepção.',
      publicado: d(-3), expira: d(55)
    },
    {
      id: 'piscina-manutencao', tipo: 'aviso', categoria: 'Manutenção',
      titulo: 'Manutenção preventiva da piscina adulto',
      resumo: 'A piscina adulto ficará fechada para limpeza e manutenção. A piscina infantil segue aberta normalmente.',
      publicado: d(-2), inicio: d(2, '08:00'), fim: d(3, '18:00'), expira: d(4)
    },
    {
      id: 'ecoponto-sabado', tipo: 'aviso', categoria: 'Ambiental',
      titulo: 'Ecoponto passa a receber recicláveis aos sábados',
      resumo: 'Além dos dias úteis, o ecoponto recebe papel, plástico, metal e vidro aos sábados, das 8h às 12h.',
      publicado: d(-6), expira: d(30)
    },
    {
      id: 'aviso-vencido', tipo: 'aviso', categoria: 'Comunicado',
      titulo: 'Aviso com prazo vencido',
      resumo: 'Não aparece no quadro: o prazo de exibição terminou.',
      publicado: d(-20), expira: d(-1)
    },
    {
      id: 'yoga-pergolado', tipo: 'evento', categoria: 'Esporte',
      titulo: 'Aulão de yoga no Pergolado',
      resumo: 'Aula aberta para associados de todas as idades. Leve seu tapete; as redes do Pergolado ficam disponíveis depois da aula.',
      inicio: d(3, '08:00'), fim: d(3, '09:30'), local: 'Pergolado com Redário'
    },
    {
      id: 'torneio-tenis', tipo: 'evento', categoria: 'Esporte',
      titulo: 'Torneio de tênis em duplas',
      resumo: 'Inscrições na Recepção do Clube até dois dias antes. Chaves organizadas por nível.',
      inicio: d(10, '08:00'), fim: d(10, '17:00'), local: 'Quadras de saibro'
    },
    {
      id: 'feirinha-natal', tipo: 'evento', categoria: 'Social',
      titulo: 'Feirinha de Natal',
      resumo: 'A tradicional feirinha que acontece todos os anos, com expositores, música e atividades para as crianças.',
      inicio: d(31, '10:00'), fim: d(31, '18:00'), local: 'Clube', imagem: U + '05/feirinhadenatal.jpg'
    },
    {
      id: 'almoco-natal', tipo: 'evento', categoria: 'Social',
      titulo: 'Almoço de Natal',
      resumo: 'Almoço especial no Restaurante Alpha Gourmet. Reservas pela Recepção.',
      inicio: d(38, '12:00'), fim: d(38, '16:00'), local: 'Restaurante Alpha Gourmet'
    },
    {
      id: 'colonia-ferias', tipo: 'evento', categoria: 'Kids',
      titulo: 'Colônia de Férias',
      resumo: 'Programação de verão para as crianças, com monitores, gincanas e atividades no Alpha Kids e nas quadras.',
      inicio: d(61, '09:00'), fim: d(75, '17:00'), local: 'Alpha Kids'
    }
  ];

  // Eventos já publicados no site atual (posts do WordPress), com a capa usada na página Eventos.
  const realizados = [
    { t: 'Dia das Mães', img: U + '05/13-1-1.jpeg', h: 'https://arcs.com.br/dias-das-maes/' },
    { t: 'Feirinha de Natal', img: U + '05/feirinhadenatal.jpg', h: 'https://arcs.com.br/inauguracao-da-criare/' },
    { t: 'Halloween', img: U + '05/hallowen.jpg', h: 'https://arcs.com.br/halloween/' },
    { t: 'Inauguração da Criare', img: U + '05/inauguracaocreare.jpg', h: 'https://arcs.com.br/feirinha-de-natal/' },
    { t: 'Feirinha da Primavera', img: U + '05/feirinhadaprimavera.jpg', h: 'https://arcs.com.br/feirinha-da-primavera/' },
    { t: 'Dia da Árvore', img: U + '05/diadaarvore.jpg', h: 'https://arcs.com.br/dia-da-arvore/' },
    { t: 'Almoço de Natal', img: U + '05/12-2-1.jpeg', h: 'https://arcs.com.br/almoco-de-natal/' },
    { t: 'Carnaval', img: U + '05/capa.jpg', h: 'https://arcs.com.br/carnaval/' },
    { t: 'Colônia de Férias', img: U + '05/8-4.jpeg', h: 'https://arcs.com.br/colonia-de-ferias/' },
    { t: 'Festa Junina', img: U + '05/7-2.jpeg', h: 'https://arcs.com.br/festa-julina/' },
    { t: 'Dia dos Pais', img: U + '05/capa-1.jpg', h: 'https://arcs.com.br/dia-dos-pais/' },
    { t: 'Feira da Primavera', img: U + '05/9-1.jpeg', h: 'https://arcs.com.br/feira-da-primavera/' }
  ];

  const fimDoDia = (x) => { const y = new Date(x); y.setHours(23, 59, 59, 999); return y; };

  // Item sai do quadro quando passa o prazo: aviso pelo "expira", evento pelo fim (ou o fim do dia em que começa).
  function ativo(it, agora = new Date()) {
    if (it.publicado && it.publicado > agora) return false;
    const limite = it.tipo === 'evento'
      ? (it.fim || fimDoDia(it.inicio))
      : (it.expira || it.fim);
    return !limite || limite >= agora;
  }

  const peso = (it) => (it.prioridade === 'urgente' ? 0 : it.fixado ? 1 : 2);

  const api = {
    exemplo: true,
    itens,
    realizados,
    ativos: () => itens.filter((it) => ativo(it)),
    avisos: () => api.ativos()
      .filter((it) => it.tipo === 'aviso')
      .sort((a, b) => peso(a) - peso(b) || b.publicado - a.publicado),
    eventos: () => api.ativos()
      .filter((it) => it.tipo === 'evento')
      .sort((a, b) => a.inicio - b.inicio),
    urgente: () => api.avisos().find((it) => it.prioridade === 'urgente') || null,
    porId: (id) => itens.find((it) => it.id === id) || null
  };

  window.ARCS = window.ARCS || {};
  window.ARCS.quadro = api;
})();
