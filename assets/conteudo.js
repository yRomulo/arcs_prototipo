/* Textos das páginas internas, copiados do site atual (arcs.com.br) sem reescrita.
   No Astro cada página vira um arquivo em src/content/paginas/ com o mesmo conteúdo. */
(function () {
  const U = 'https://arcs.com.br/wp-content/uploads/2025/';
  const img = (n) => U + '05/' + n;

  const listaSeguranca = [
    'Reconhecimento facial;',
    'Comunicação entre portarias e residências;',
    'Equipe de segurança capacitada e treinada periodicamente;',
    'Cerca elétrica monitorada com alarme e sensor ao redor dos Residenciais e Clube;',
    'Rondas realizadas com motos e veículos em toda a extensão do empreendimento 24 horas;',
    'Central de Controle de Videomonitoramento com atuação 24h (Câmeras em Full HD com longo alcance).'
  ];
  const textoConselho = 'Formado por 16 membros, de acordo com o Estatuto Social, compete ao Conselho Deliberativo, soberano em suas resoluções, é o órgão representativo dos Associados, em cujo nome decidirá sobre os assuntos de interesse da Associação Alphaville Residencial, excluindo unicamente os privativos da Assembleia Geral.';
  const politica = (titulo) => ({
    secao: null, eyebrow: 'Políticas', titulo, hero: img('page-title.jpg'),
    blocos: [{ tipo: 'texto', paragrafos: ['Texto integral migrado do site atual e revisado pela Associação antes da publicação.'] }]
  });

  window.ARCS = window.ARCS || {};
  window.ARCS.paginas = {
    alphaville: {
      secao: 'alphaville', eyebrow: 'Alphaville', titulo: 'Saiba tudo sobre este incrível local', hero: img('sobre1.jpg'),
      blocos: [
        {
          tipo: 'texto', imagens: [img('sobre1.jpg'), img('sobre2.jpg')],
          paragrafos: [
            'Localizado no município de Rio das Ostras e bem pertinho da cidade de Macaé, o Alphaville Rio Costa do Sol é um empreendimento cercado pelo mar e por uma área verde com densa vegetação de Mata Atlântica e restinga. Um patrimônio ambiental integralmente preservado com mais de 500 mil metros quadrados e que faz dele um dos mais belos cenários para se viver na região.',
            'As áreas verdes incluem um bosque e um canal com paisagismos cuidadosamente projetados que passam no meio do empreendimento, proporcionando ainda mais beleza ao local.',
            'Além de belas paisagens por todos os lados, você encontra aqui uma estrutura completa de lazer, segurança 24 horas e comprometimento com o meio ambiente.'
          ]
        },
        {
          tipo: 'cards', itens: [
            { icone: 'eye', titulo: 'Visão', texto: 'Ser reconhecido como um condomínio que prima pela qualidade de vida, segurança, inovação e excelência em gestão.' },
            { icone: 'target', titulo: 'Missão', texto: 'A missão do Alphaville Rio Costa do Sol é buscar e manter uma excelente qualidade de vida em nosso condomínio, de forma ética, transparente, participativa e inspiradora, agregada à segurança e ao bem-viver, com respeito ao próximo e ao meio-ambiente.' },
            { icone: 'heart', titulo: 'Valores', texto: 'Prazer de viver, alegria dos condôminos e colaboradores, respeito e valorização das pessoas, aprimoramento contínuo, integridade e transparência, segurança e organização para realização.' }
          ]
        },
        {
          tipo: 'pessoas', titulo: 'Membros do Conselho Diretor', texto: textoConselho,
          linhas: [
            ['Diego Fernando Garcia', 'Presidente – Conselho Diretor', 'presid.conselhodiretor@arcs.com.br'],
            ['André Luís da Fonseca Santos', 'Vice Presidente – Conselho Diretor', 'vicepresid.cons.diretor@arcs.com.br'],
            ['Philipe Andrade de Sousa', 'Primeiro Secretário', 'primeirosecretario@arcs.com.br'],
            ['André Duarte Bueno', 'Segundo Secretário', 'segundosecretario@arcs.com.br']
          ]
        },
        {
          tipo: 'pessoas', titulo: 'Membros do Comitê Executivo', texto: textoConselho,
          linhas: [
            ['Rafael Mendes Pinto', 'Diretor Presidente', 'presidenteexecutivo@arcs.com.br'],
            ['Nicácio Mouriel Alexandro Correia', 'Vice Presidente Residencial I', 'vicepresid.r1@arcs.com.br'],
            ['Wanderson Teixeira de Godoi', 'Diretor – Vice Presidente Residencial II', 'vicepresid.r2@arcs.com.br'],
            ['Gabriel de Pinna Mendez', 'Diretor – Vice Presidente Residencial III', 'vicepresid.r3@arcs.com.br'],
            ['Adalberto Goulart Correia', 'Diretor – Vice Presidente Comercial', 'vicepresid.comercial@arcs.com.br'],
            ['Gabriel de Pinna Mendez', 'Diretor Administrativo', 'diretoradministrativo@arcs.com.br'],
            ['Mauricio Carvalho Paes Pinheiro', 'Diretor Financeiro', 'diretorfinanceiro@arcs.com.br'],
            ['Roberta Aline Moreira Primo', 'Diretor Social', 'diretorsocial@arcs.com.br'],
            ['Eduardo Hamilton Ribeiro', 'Diretor Técnico', 'diretortecnico@arcs.com.br'],
            ['Rafael Lopes Dumard', 'Diretor de Esportes', 'diretoresporte@arcs.com.br'],
            ['Cláudio Luiz Lourenço de Souza júnior', 'Diretor de Segurança', 'diretorseguranca@arcs.com.br']
          ]
        }
      ]
    },

    clube: {
      secao: 'clube', eyebrow: 'Clube', titulo: 'Conheça o nosso fabuloso Clube', hero: img('clube1.jpg'),
      blocos: [
        {
          tipo: 'texto', imagens: [img('clube1.jpg'), img('clube2.jpg'), img('clube3-1.jpg')],
          paragrafos: ['O Clube é um espaço pensado para o conforto e lazer dos associados. Rodeado de muito verde e cheio de atrativos para a família toda aproveitar momentos de diversão e descanso. Fazem parte de sua estrutura:'],
          lista: ['Piscina de adulto e infantil;', 'Saunas feminina e masculina;', '2 quadras poliesportivas;', '4 quadras de tênis, sendo 2 de saibro e 2 de concreto;', '1 Campo de futebol com grama natural;', '2 quadras de areia;', '1 Pista de esportes radicais;', '1 Salão Social com lounge, TV e mesas num ambiente climatizado;', '1 Deck de madeira suspenso que passa pelo interior da mata e leva os nossos associados direto para a Praia das Pedrinhas;', 'Espaço de Esportes para a prática de lutas, dança e outras atividades.']
        },
        { tipo: 'texto', titulo: 'Recepção/Hall de Entrada', imagens: [img('recepcao.jpg'), img('recepcao2.jpg')], paragrafos: ['A Recepção é a porta de entrada para que o associado ou visitante aproveite nosso Clube. Seu design alia a beleza à funcionalidade para que possamos lhe tratar da melhor maneira possível.'] },
        { tipo: 'texto', titulo: 'Salão Social', imagens: [img('salaosocial1.jpg'), img('salaosocial2.jpg'), img('salaosocial3.jpg'), img('salaosocial4.jpg')], paragrafos: ['O mesmo conceito foi levado para nosso Salão Social, que dispõe de um espaço de TV, onde os associados podem relaxar ou conversar com amigos e familiares.'] },
        { tipo: 'texto', titulo: 'Restaurante Alpha Gourmet', imagens: [img('restaurante1.jpg')], paragrafos: ['O Restaurante Alpha Gourmet é o local ideal para quem quer se alimentar bem e, ao mesmo tempo, desfrutar de toda a estrutura e as atrações do Clube. Ele é parte indispensável de uma ótima tarde com a família ou os amigos, com cardápio variado e ótimas opções para todas as refeições com o funcionamento de:'], lista: ['Terça à Sexta, com prato executivo das 08h às 20h.', 'Sábados, Domingos e Feriados com almoço self-service das 08h às 20h.'] },
        { tipo: 'texto', titulo: 'Atividades Esportivas', imagens: [img('atesportiva1.jpg'), img('atesportiva2.jpg'), img('atesportiva3.jpg'), img('atesportiva4.jpg'), img('atesportiva5.jpg'), img('atesportiva6.jpg')], paragrafos: ['Os Associados podem utilizar as quadras e alguns espaços para a realização de atividades esportivas, agendando com antecedência o melhor horário para a utilização deles. O agendamento é feito em nosso aplicativo, o Condomob, na aba Espaços Comuns.', 'E caso o associado não possua material para desempenhar as atividades esportivas no Clube, não há problema! Há uma sala disponível com todo o equipamento necessário. São bolas, raquetes, redes e tudo para você não perder nenhum momento de nossa estrutura. O empréstimo deve ser requerido à Recepção ou à Supervisão do Clube. E lembre-se: a devolução e a boa conservação do material são fundamentais e garantem a tranquilidade de todos.'] },
        { tipo: 'texto', titulo: 'Alpha Kids', imagens: [img('alphakids1.jpg'), img('alphakids2.jpg'), img('alphakids3.jpg'), img('alphakids4.jpg')], paragrafos: ['Aqui, as crianças se divertem com muitos brinquedos e com toda a estrutura e supervisão necessárias para se desenvolver. O ambiente é climatizado e o espaço conta com monitor nos finais de semana.', 'Funcionamento: Terça a Domingo, das 8h às 22h.'] },
        { tipo: 'texto', titulo: 'Sala de Atividades', imagens: [img('atividades1.jpg'), img('atividades2.jpg')], paragrafos: ['Sala de atividades no clube, o ambiente moderno e confortável, pronto para prática de atividades variadas, como: yoga, ballet, pilates, capoeira entre outras.', 'O Alphaville Rio Costa do Sol é a tradução de bem viver com todo conforto que você precisa!'] },
        { tipo: 'texto', titulo: 'Academia Alpha Fitness', imagens: [img('academia1.jpg'), img('academia2.jpg'), img('academia4.jpg')], paragrafos: ['Com modernos equipamentos, a nossa academia é o lugar ideal para você ficar em forma. Pedale, corra e levante todo o peso que aguentar, sempre com o acompanhamento de um dos nossos profissionais de Educação Física.', 'Mas não se esqueça: antes de começar os exercícios, faça os exames médicos e traga o atestado de saúde.'], lista: ['Segunda à sexta: 6h às 21h', 'Sábados, domingos e feriados: 8h às 16h'] },
        { tipo: 'texto', titulo: 'Área Gourmet', imagens: [img('areagourmet1.jpg'), img('areagourmet2.jpg')], paragrafos: ['Com capacidade para até 60 pessoas e equipada com churrasqueira, forno, mesas e toda a estrutura para a realização de seu evento.'] },
        { tipo: 'texto', titulo: 'Pergolado com Redário', imagens: [img('redario1.jpg'), img('redario2.jpg')], paragrafos: ['Um ambiente para relaxar, com muita tranquilidade e a sombra de árvores. As redes podem ser solicitadas à Supervisão do Clube.'] }
      ]
    },

    ambiental: {
      secao: 'ambiental', eyebrow: 'Ambiental', titulo: 'Gestão Ambiental', subtitulo: 'Modelo Sistema de Gestão Socioambiental', hero: img('hortaville.jpg'),
      blocos: [
        {
          tipo: 'texto', imagens: [img('hortaville.jpg'), img('ecoponto.jpg')],
          paragrafos: [
            'Mais que desenvolver um programa voltado à preservação do meio ambiente é o despertar pelo sentimento ambiental nas pessoas através dos trabalhos desenvolvidos pelo SGSA. Isto não está limitado aos muros do residencial. Nosso amor pela natureza alcança a cada dia mais pessoas e espaços, inclusive no Município de Rio das Ostras, onde integramos uma cadeira no Conselho Municipal de Meio Ambiente, biênio 2022/2023.',
            'Todas as atividades socioambientais implantadas aqui, trazem respostas são impactantes que as famílias se unem para agregar ainda mais valores em nosso trabalho.',
            'Desde o incentivo à implementação de sistema de reuso de água, implementação de sistemas de Energia renovável, arborização e jardinagem visando manter as árvores do bioma da Mata Atlântica (com preservação da RPPN – Reserva Particular de Patrimônio Natural), Legalização e Operação da Estação de Tratamento de Esgoto (ETE), implantação de Compostagem, Horta Comunitária, Coleta Seletiva de Lixo e Ações de Conscientização e Educação Ambiental para funcionários e Associados.',
            'Podemos dizer que investir no Alphaville é investir na preservação das riquezas ambientais do município de Rio das Ostras e região. Sem dúvidas, um atrativo para aqueles que desejam aliar o contato com a natureza com o bem-estar e o conforto. A Associação trabalha para, cada vez mais, contribuir com a sustentabilidade e as oportunidades para as futuras gerações.'
          ]
        },
        {
          tipo: 'abas', abas: [
            {
              titulo: 'Politica Geral',
              paragrafos: ['A Associação Alphaville Rio Costa do Sol, em virtude de suas atividades e de sua abrangência geográfica, prima por buscar a melhoria contínua de suas ações relacionadas ao meio ambiente e desta forma reafirma o compromisso em:'],
              lista: [
                'Proporcionar a integração entre as pessoas e o meio ambiente, visando a qualidade de vida de seus Associados;',
                'Promover ações de fiscalização e acompanhamento para que a ocupação e as atividades dentro do condomínio se deem de acordo com o estatuto do empreendimento, seu projeto urbanístico e paisagístico, bem como com as leis municipais, estaduais e federais;',
                'Compartilhar com a sociedade em geral, atitudes ambientalmente corretas, que incluam o empreendimento no conceito de desenvolvimento sustentável;',
                'Promover o gerenciamento correto dos resíduos gerados nas obras, nas residências e no clube;',
                'Estimular a educação ambiental através de ações de conscientização, informação e treinamento;',
                'Mobilizar associados, proprietários, colaboradores e prestadores de serviço para o uso consciente dos recursos naturais como energia, solo e água;',
                'Garantir transparência em suas atividades e ações, disponibilizando às partes interessadas informações sobre seu desempenho em meio ambiente através de sistema de gestão estruturado.'
              ]
            },
            {
              titulo: 'Coleta Seletiva',
              paragrafos: [
                'A Coleta Seletiva é um sistema de recolhimento do lixo que separa os diferentes materiais no momento de seu descarte. Esse sistema possibilita a destinação ambientalmente adequada a cada tipo de resíduo.',
                'A implantação desse sistema na Associação Alphaville Rio Costa do Sol fez parte da primeira etapa do SGSA e contribui para a gestão dos resíduos das residências, clube e Área Comercial. Ele conta, primariamente, com os coletores de resíduos sólidos (metais, papel, papelão, caixa tetra Pak, plástico e vidro). Eles estão espalhados pelas áreas comuns, como o Clube, guaritas de entrada, PEVs e são distribuídos para os associados em ações de conscientização informativos sobre a separação do lixo.'
              ]
            }
          ]
        }
      ]
    },

    seguranca: {
      secao: 'estrutura', eyebrow: 'Segurança', titulo: 'Alphaville e toda sua segurança', hero: img('seguranca.jpg'),
      blocos: [{
        tipo: 'texto', imagens: [img('seguranca.jpg'), img('seguranca2.jpg'), img('seguranca3.jpg')],
        paragrafos: [
          'A Segurança na Associação Alphaville vai além do equipamento tecnológico de proteção de última geração. Ela também é feita através do planejamento inteligente, cultura da prevenção e o modelo participativo de gestão, que garantem a segurança de todos.',
          'O Departamento de Segurança também é responsável pelo controle de acesso de associados, dependentes, visitantes e prestadores de serviço à todas as áreas de nosso empreendimento.',
          'Contamos com:'
        ],
        lista: listaSeguranca
      }]
    },

    'area-comercial': {
      secao: 'estrutura', eyebrow: 'Área Comercial', titulo: 'Alphaville Boulevard', hero: img('comercial-1.jpg'),
      blocos: [{
        tipo: 'texto', imagens: [img('comercial-1.jpg'), img('comercial1.jpg'), img('comercial2.jpg'), img('comercial3.jpg'), img('comercial4.jpg')],
        paragrafos: ['A Área Comercial é composta por 4 quadras totalizando 69 lotes que medem a partir de 483 metros quadrados. Eles estão prontos para receber a instalação de lojas, salas, escolas, centros comerciais, tudo para atender de forma independente os associados tanto da Associação quanto da região.']
      }]
    },

    'area-residencial': {
      secao: 'estrutura', eyebrow: 'Área Residencial', titulo: 'Estrutura', hero: img('residencial.jpg'),
      blocos: [{
        tipo: 'texto', imagens: [img('residencial.jpg'), img('residencial2.jpg'), img('residencial3.jpg')],
        paragrafos: ['A Área Residencial é composta por três loteamentos independentes, que contam com terrenos a partir de 360 metros quadrados.'],
        lista: listaSeguranca
      }]
    },

    'estatuto-social': {
      secao: 'estrutura', eyebrow: 'Documentos', titulo: 'Estatuto Social', hero: img('page-title.jpg'),
      blocos: [{
        tipo: 'documentos', paragrafos: ['Separamos todas as nossas normas para que você possa fazer o download.'],
        itens: [
          ['ANEXO A - ESTATUTO SOCIAL RIO DAS OSTRAS', img('ANEXO-A-ESTATUTO-SOCIAL-RIO-DAS-OSTRAS.pdf')],
          ['ANEXO B - REGULAMENTO DO LOTEAMENTO-RIO DAS OSTRAS', img('ANEXO-B-REGULAMENTO-DO-LOTEAMENTO-RIO-DAS-OSTRAS.pdf')],
          ['ANEXO C - MEMORIAL DO LOTEAMENTO RIO DAS OSTRAS', img('ANEXO-C-MEMORIAL-DO-LOTEAMENTO-RIO-DAS-OSTRAS.pdf')],
          ['ANEXO D - REGULAMENTO DA ÁREA DE LAZER RIO DAS OSTRAS', img('ANEXO-D-REGULAMENTO-DA-AREA-DE-LAZER-RIO-DAS-OSTRAS.pdf')],
          ['ANEXO E - MEMORIAL CLUBE RIO DAS OSTRAS', img('ANEXO-E-MEMORIAL-CLUBE-RIO-DAS-OSTRAS.pdf')]
        ]
      }]
    },

    'normas-e-regimentos': {
      secao: 'estrutura', eyebrow: 'Documentos', titulo: 'Normas e Regimentos', hero: img('page-title.jpg'),
      blocos: [{
        tipo: 'documentos', paragrafos: ['Arquivos para download:'],
        itens: [
          ['REGIMENTO INTERNO DO CLUBE', img('Regimento-Interno-Clube-1.pdf')],
          ['NORMA REGULAMENTADORA DA VIGILÂNCIA Nº 001 - 2017', img('NORMA-REGULAMENTADORA-DA-VIGILANCIA-No-002-2017.pdf')],
          ['NORMA REGULAMENTADORA DA VIGILÂNCIA Nº 002 - 2017', img('NORMA-REGULAMENTADORA-DA-VIGILANCIA-No-002-2017.pdf')],
          ['NORMA REGULAMENTADORA DA VIGILÂNCIA Nº 003 - 2017', img('NORMA-REGULAMENTADORA-DA-VIGILANCIA-No-003-2017.pdf')],
          ['NORMA REGULAMENTADORA DA VIGILÂNCIA Nº 004 - 2019', img('NORMA-REGULAMENTADORA-DA-VIGILANCIA-No-004-2019.pdf')],
          ['NORMA REGULAMENTADORA DA VIGILÂNCIA Nº 005 - 2021', img('NORMA-REGULAMENTADORA-DA-VIGILANCIA-No-005-2021-2.pdf')],
          ['NORMA REGULAMENTADORA DA VIGILANCIA Nº 006 - 2021', img('NORMA-REGULAMENTADORA-DA-VIGILANCIA-No-006-2021.pdf')]
        ]
      }]
    },

    'politica-de-privacidade': politica('Política de Privacidade'),
    'politica-de-cookies': politica('Política de Cookies'),
    'termos-de-uso': politica('Termos de Uso')
  };
})();
