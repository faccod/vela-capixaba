// Dados estáticos do site (depois serão movidos para o Decap CMS)

export const SITE = {
  name: "Vela Capixaba",
  tagline: "Escola de Vela em Vitória/ES",
  whatsapp: "5527999539293", // wa.me (55 Brasil + 27 DDD + 999539293)
  whatsappDisplay: "(27) 99953-9293",
  email: "marloniatismo@gmail.com",
  instagram: "https://instagram.com/velacapixaba",
  instagramHandle: "@velacapixaba",
  address:
    "Centro Náutico Capixaba — Av. Américo Buaiz, 1811, Enseada do Suá, Vitória-ES, 29050-463",
  cnpj: "42.349.408/0001-13",
  razaoSocial: "Centro Náutico Capixaba",
  credenciamentos: ["World Sailing", "FECAI"],
  googleNota: "5.0",
  googleReviews: "41",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Vela+Capixaba+Vit%C3%B3ria+ES",
  googleEmbedQuery: "Vela+Capixaba+Centro+N%C3%A1utico+Capixaba+Vit%C3%B3ria",
  horario: "Segunda a Domingo, a partir das 08:00",
  horarioDetalhe: "Aulas agendadas conforme disponibilidade do aluno",
  categoria: "Escola de iatismo em Vitória, Espírito Santo",
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Cursos", href: "/cursos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Galeria", href: "/galeria" },
  { label: "Contato", href: "/contato" },
];

export const SERVICOS = [
  {
    slug: "iniciante",
    name: "Curso de Vela — Módulo Iniciante",
    headline: "Carro-chefe da escola",
    short:
      "5 aulas práticas e teóricas de 2h, no Veleiro Dingue. Instrutor acompanha o aluno no barco em todas as aulas.",
    destaque: true,
    duracao: "5 aulas de 2h",
    embarcação: "Veleiro Dingue",
    href: "/cursos/iniciante",
  },
  {
    slug: "avancado",
    name: "Curso de Vela Avançado",
    headline: "Aperfeiçoamento técnico",
    short:
      "Para quem já tem base e quer dominar manobras avançadas, técnicas de regata e navegação.",
    destaque: false,
    duracao: "Consulte",
    embarcação: "Veleiro de passeio",
    href: "/cursos/avancado",
  },
  {
    slug: "regatas",
    name: "Treinamento para Regatas",
    headline: "Performance e competição",
    short:
      "Treinamento específico para velejadores que querem competir. Técnicas de regata, tática e estratégia.",
    destaque: false,
    duracao: "Consulte",
    embarcação: "Veleiro de regata",
    href: "/cursos/regatas",
  },
  {
    slug: "passeios",
    name: "Passeios de Veleiro",
    headline: "Aventuras no mar",
    short:
      "Passeios de veleiro pela Baía de Vitória. Experiência inesquecível para você, sua família ou amigos.",
    destaque: false,
    duracao: "Consulte",
    embarcação: "Veleiro de passeio",
    href: "/cursos/passeios",
  },
  {
    slug: "aluguel",
    name: "Aluguel de Equipamentos",
    headline: "Alugue e veleje",
    short:
      "Aluguel de equipamentos de vela para quem já sabe velejar. Liberdade pra curtir a baía de Vitória no seu ritmo.",
    destaque: false,
    duracao: "Por hora/diária",
    embarcação: "Veleiros diversos",
    href: "/cursos/aluguel",
  },
  {
    slug: "consultoria",
    name: "Consultoria Náutica",
    headline: "Orientação especializada",
    short:
      "Consultoria personalizada pra quem quer orientação profissional sobre vela, embarcações ou projetos náuticos.",
    destaque: false,
    duracao: "Sob consulta",
    embarcação: "—",
    href: "/cursos/consultoria",
  },
];

export const CURSO_INICIANTE = {
  slug: "iniciante",
  name: "Curso de Vela — Módulo Iniciante",
  headline: "Experimente a mistura perfeita de aventura, liberdade e conexão com a natureza.",
  subheadline:
    "Sentir o vento no rosto, ouvir o som das ondas e ver o mundo de outro ângulo faz qualquer estresse ir embora!",
  descricao:
    "Se você sempre sonhou em dominar as velas e sair desbravando o mundo azul, temos uma ótima notícia: nosso curso de vela para iniciantes está de portas abertas. Vem aprender com a gente e descobrir que o vento pode ser o seu melhor amigo!",
  estrutura: [
    "5 aulas realizadas em um Veleiro Dingue",
    "2 horas cada (prática e teórica)",
    "O instrutor acompanha o aluno no barco em todas as aulas",
  ],
  incluso: [
    "Relatório ao final de cada aula",
    "Material teórico completo",
    "Certificado homologado pela FECAI — Federação Capixaba de Iatismo",
  ],
  bonus: ["Fotos + Vídeos das aulas"],
  aprendizado: [
    "Leitura dos ventos",
    "Montagem e desmontagem do barco (nós e nomenclaturas)",
    "Velejar em todas as posições em relação ao vento",
    "Trimagem da vela",
    "Manobras",
  ],
  resultado:
    "Ao término do curso o aluno estará apto a velejar com total segurança e autonomia.",
  precos: [
    {
      modalidade: "Curso completo",
      preco: "R$ 1.495,00",
      destaque: true,
    },
    {
      modalidade: "5% de desconto à vista (PIX)",
      preco: "R$ 1.420,00",
      destaque: false,
    },
    {
      modalidade: "Condição especial DUPLA (20% off à vista PIX)",
      preco: "R$ 1.196,00 por aluno",
      detalhe: "Total para a dupla: R$ 2.392,00",
      destaque: true,
      tag: "Mais vantajoso",
    },
    {
      modalidade: "Aula avulsa (2h)",
      preco: "R$ 299,00",
      destaque: false,
    },
    {
      modalidade: "Parcelamento",
      preco: "Cartão de Crédito via link (com taxa)",
      destaque: false,
    },
  ],
};

export const PROXIMAS_TURMAS = [
  {
    id: 1,
    tipo: "Curso Iniciante",
    data: "Consulte",
    horario: "Aulas agendadas",
    vagas: 4,
    local: "Praia da Guarderia",
    instrutor: "Marlon",
  },
];

export const DEPOIMENTOS = [
  {
    id: 1,
    nome: "J.",
    texto: "Um ótimo professor, aula muito boa.",
    cidade: "Vitória/ES",
    fonte: "Google",
  },
  {
    id: 2,
    nome: "APTA",
    texto: "Vale a pena o curso de vela, muito bom!",
    cidade: "Vitória/ES",
    fonte: "Google",
  },
  {
    id: 3,
    nome: "M.",
    texto: "Profissionalismo do início ao fim, e uma energia extraordinária.",
    cidade: "Vitória/ES",
    fonte: "Google",
  },
];

export const FAQ = [
  {
    pergunta: "Preciso ter experiência prévia para fazer o curso?",
    resposta:
      "Não! O Curso de Vela — Módulo Iniciante é justamente para quem nunca velejou. Você vai aprender tudo do zero, com instrutor dedicado no barco em todas as aulas.",
  },
  {
    pergunta: "Qual a idade mínima?",
    resposta:
      "A partir de 12 anos, com autorização dos responsáveis. Para menores de 12, consulte-nos — temos condições especiais para aulas em família.",
  },
  {
    pergunta: "Preciso levar algum material?",
    resposta:
      "Não. A escola fornece todo o equipamento necessário: colete salva-vidas, embarcação e material didático. Recomendamos vir com roupa confortável, protetor solar e vontade de aprender.",
  },
  {
    pergunta: "Como funciona o agendamento das aulas?",
    resposta:
      "As aulas são agendadas de acordo com a disponibilidade do aluno, de segunda a domingo. Após a inscrição, você combina os melhores dias e horários diretamente com o instrutor.",
  },
  {
    pergunta: "O certificado é reconhecido?",
    resposta:
      "Sim! Emitimos certificado homologado pela FECAI — Federação Capixaba de Iatismo. A escola também é reconhecida pela World Sailing.",
  },
  {
    pergunta: "Posso parcelar o curso?",
    resposta:
      "Sim, parcelamos no Cartão de Crédito via link (com taxa do operador). Para pagamento à vista no PIX, oferecemos 5% de desconto, e para duplas, 20% de desconto.",
  },
  {
    pergunta: "Onde acontecem as aulas?",
    resposta:
      "No Centro Náutico Capixaba — Av. Américo Buaiz, 1811, Enseada do Suá, Vitória-ES. A saída é na Praia da Guarderia, um dos melhores pontos para velejar em Vitória.",
  },
  {
    pergunta: "Como faço para me inscrever?",
    resposta:
      "É só clicar no botão 'Quero essa vaga' da turma escolhida e mandar uma mensagem no WhatsApp (27) 99953-9293. A gente te responde rapidinho!",
  },
];

export const GALERIA = [
  { src: "/images/hero-barco.jpg", alt: "Alunos velejando com instrutor Vela Capixaba" },
  { src: "/images/hero-mar.jpg", alt: "Veleiro na baía de Vitória" },
  { src: "/images/galeria-01.jpg", alt: "Aula de vela" },
  { src: "/images/galeria-02.jpg", alt: "Veleiro Capixaba" },
  { src: "/images/galeria-03.jpg", alt: "Aula prática" },
  { src: "/images/galeria-04.jpg", alt: "Mar de Vitória" },
  { src: "/images/galeria-05.jpg", alt: "Vela e vento" },
  { src: "/images/galeria-06.jpg", alt: "Centro Náutico Capixaba" },
  { src: "/images/galeria-07.jpg", alt: "Equipe Vela Capixaba" },
  { src: "/images/galeria-08.jpg", alt: "Pôr do sol a bordo" },
];

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${SITE.whatsapp}`;
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`;
  }
  return base;
}
