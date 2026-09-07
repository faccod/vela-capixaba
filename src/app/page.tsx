import Image from "next/image";
import Link from "next/link";
import {
  CURSO_INICIANTE,
  DEPOIMENTOS,
  FAQ,
  PROXIMAS_TURMAS,
  SERVICOS,
  SITE,
  whatsappLink,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative isolate overflow-hidden bg-azul-marinho text-white">
        {/* Background image - mais visível agora */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-barco.jpg"
            alt="Vela Capixaba na Baía de Vitória"
            fill
            priority
            className="object-cover opacity-70"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-azul-marinho/60 via-azul-marinho/55 to-azul-marinho/90" />
        </div>

        <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col items-start justify-center px-4 py-24 md:px-6 md:py-32">
          {/* Credenciamento badge */}
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-dourado/60 bg-dourado/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-dourado backdrop-blur">
              Certificada World Sailing
            </span>
            <span className="rounded-full border border-dourado/60 bg-dourado/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-dourado backdrop-blur">
              Filiada FECAI
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black uppercase leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Escola de Vela na{" "}
            <span className="text-dourado">Praia da Guarderia</span>,
            <br className="hidden md:block" />
            em Vitória/ES.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
            Cursos, passeios e treinamentos para quem quer aprender a velejar,
            evoluir no esporte e viver experiências únicas no mar.
          </p>

          <p className="mt-4 max-w-2xl text-base font-medium text-dourado md:text-lg">
            Do zero ao mar, com instrutor dedicado em todas as aulas.
          </p>

          {/* Google reviews badge - só estrelas */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">
            <span className="text-base font-black text-dourado">
              {SITE.googleNota}
            </span>
            <span className="text-dourado">★★★★★</span>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink(
                `Oi, Marlon! Quero saber mais sobre o Curso de Vela — Módulo Iniciante.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-dourado px-7 py-4 text-sm font-black uppercase tracking-wide text-azul-marinho shadow-xl transition-colors hover:bg-dourado-claro"
            >
              Quero começar a velejar
            </a>
            <Link
              href="/cursos"
              className="rounded-full border border-white/30 bg-white/5 px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Ver todos os serviços
            </Link>
          </div>

          <p className="mt-8 text-xs uppercase tracking-widest text-white/60">
            <span className="font-bold text-dourado">●</span> Turmas abertas —{" "}
            {SITE.horario}
          </p>
        </div>
      </section>

      {/* ===== SOBRE / DIFERENCIAIS ===== */}
      <section className="bg-areia py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-dourado-escuro">
                Quem somos
              </span>
              <h2 className="mt-3 text-4xl font-black uppercase text-azul-marinho md:text-5xl">
                Mais que uma escola. O seu lugar no mar.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-cinza-escuro">
                A Vela Capixaba é uma escola de vela localizada em Vitória/ES,
                criada para aproximar pessoas do esporte e do mar. Nossa missão
                é oferecer uma experiência de aprendizado segura, prática e de
                qualidade — desde o primeiro contato com a vela até o
                aperfeiçoamento e treinamento para regatas.
              </p>
              <ul className="mt-6 space-y-2 text-cinza-escuro">
                <li className="flex items-start gap-2">
                  <span className="text-dourado">✓</span>
                  <span>Instrutores experientes e turmas reduzidas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-dourado">✓</span>
                  <span>Aulas 100% práticas com acompanhamento próximo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-dourado">✓</span>
                  <span>
                    Certificado homologado pela FECAI — Federação Capixaba de
                    Iatismo
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-dourado">✓</span>
                  <span>Atendimento de segunda a domingo, com horários flexíveis</span>
                </li>
              </ul>
              <Link
                href="/sobre"
                className="mt-8 inline-block text-sm font-bold uppercase tracking-wide text-azul-marinho underline-offset-4 hover:text-dourado-escuro hover:underline"
              >
                Conheça a escola →
              </Link>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/hero-mar.jpg"
                alt="Veleiro na baía de Vitória"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVIÇOS ===== */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-dourado-escuro">
              Nossos serviços
            </span>
            <h2 className="mt-3 text-4xl font-black uppercase text-azul-marinho md:text-5xl">
              O que oferecemos
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-cinza-escuro">
              Do primeiro contato com o mar ao treinamento para regatas — uma
              escola completa pra você viver a vela em qualquer nível.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICOS.map((s) => (
              <Link
                key={s.slug}
                href={s.href}
                className={`group relative flex flex-col gap-4 rounded-2xl border p-8 transition-all hover:shadow-2xl ${
                  s.destaque
                    ? "border-dourado bg-azul-marinho text-white shadow-xl"
                    : "border-cinza-claro bg-white text-azul-marinho hover:border-dourado"
                }`}
              >
                {s.destaque && (
                  <span className="absolute -top-3 left-8 rounded-full bg-dourado px-3 py-1 text-[10px] font-black uppercase tracking-widest text-azul-marinho">
                    Carro-chefe
                  </span>
                )}
                <span
                  className={`text-xs font-bold uppercase tracking-widest ${
                    s.destaque ? "text-dourado" : "text-dourado-escuro"
                  }`}
                >
                  {s.headline}
                </span>
                <h3 className="text-3xl font-black uppercase leading-tight">
                  {s.name}
                </h3>
                <p
                  className={`text-base ${
                    s.destaque ? "text-white/85" : "text-cinza-escuro"
                  }`}
                >
                  {s.short}
                </p>
                <div
                  className={`mt-2 flex items-center justify-between text-xs uppercase tracking-widest ${
                    s.destaque ? "text-white/70" : "text-cinza"
                  }`}
                >
                  <span>{s.duracao}</span>
                  <span>{s.embarcação}</span>
                </div>
                <span
                  className={`mt-4 inline-block text-sm font-bold uppercase tracking-wide underline-offset-4 group-hover:underline ${
                    s.destaque ? "text-dourado" : "text-azul-marinho"
                  }`}
                >
                  Ver detalhes →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CREDENCIAMENTO DESTAQUE ===== */}
      <section className="bg-azul-marinho py-20 text-white md:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-dourado">
            Reconhecimento oficial
          </span>
          <h2 className="mt-3 text-4xl font-black uppercase md:text-5xl">
            Escola certificada
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/85">
            A Vela Capixaba é reconhecida pela <strong>World Sailing</strong>{" "}
            (federação internacional do esporte) e homologa seus certificados
            pela <strong>FECAI</strong> (Federação Capixaba de Iatismo). Você
            aprende com padrão internacional de qualidade e segurança.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <div className="rounded-2xl border border-dourado/40 bg-white/5 px-8 py-6 backdrop-blur">
              <div className="font-display text-2xl font-black uppercase tracking-wider text-dourado">
                World Sailing
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest text-white/60">
                Reconhecimento internacional
              </div>
            </div>
            <div className="rounded-2xl border border-dourado/40 bg-white/5 px-8 py-6 backdrop-blur">
              <div className="font-display text-2xl font-black uppercase tracking-wider text-dourado">
                FECAI
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest text-white/60">
                Federação Capixaba de Iatismo
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRÓXIMAS TURMAS ===== */}
      <section className="bg-cinza-claro py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-dourado-escuro">
              Agenda
            </span>
            <h2 className="mt-3 text-4xl font-black uppercase text-azul-marinho md:text-5xl">
              Próximas turmas
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-cinza-escuro">
              Vagas abertas! Fale com a gente pelo WhatsApp e garanta a sua.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROXIMAS_TURMAS.map((turma) => (
              <div
                key={turma.id}
                className="flex flex-col gap-4 rounded-2xl border border-cinza-claro bg-white p-6 shadow-sm"
              >
                <span className="inline-block w-fit rounded-full bg-dourado/20 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-dourado-escuro">
                  {turma.tipo}
                </span>
                <div className="space-y-1">
                  <p className="text-2xl font-black uppercase text-azul-marinho">
                    {turma.data}
                  </p>
                  <p className="text-sm text-cinza-escuro">{turma.horario}</p>
                </div>
                <ul className="space-y-1 text-sm text-cinza-escuro">
                  <li>
                    <span className="font-semibold">Local:</span> {turma.local}
                  </li>
                  <li>
                    <span className="font-semibold">Vagas:</span> {turma.vagas}
                  </li>
                  <li>
                    <span className="font-semibold">Instrutor:</span> {turma.instrutor}
                  </li>
                </ul>
                <a
                  href={whatsappLink(
                    `Oi, Marlon! Quero me inscrever na turma de ${turma.tipo}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block rounded-full bg-dourado px-5 py-3 text-center text-xs font-black uppercase tracking-wide text-azul-marinho transition-colors hover:bg-dourado-claro"
                >
                  Quero essa vaga
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DEPOIMENTOS ===== */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-dourado-escuro">
              Quem viveu, conta
            </span>
            <h2 className="mt-3 text-4xl font-black uppercase text-azul-marinho md:text-5xl">
              Depoimentos
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {DEPOIMENTOS.map((d) => (
              <blockquote
                key={d.id}
                className="rounded-2xl border border-cinza-claro bg-cinza-claro/40 p-6"
              >
                <p className="text-base italic leading-relaxed text-azul-marinho">
                  &ldquo;{d.texto}&rdquo;
                </p>
                <footer className="mt-4 text-sm font-bold uppercase tracking-wide text-cinza-escuro">
                  — {d.nome}, {d.cidade}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-cinza-claro py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-dourado-escuro">
              Dúvidas frequentes
            </span>
            <h2 className="mt-3 text-4xl font-black uppercase text-azul-marinho md:text-5xl">
              Perguntas frequentes
            </h2>
          </div>

          <div className="mt-12 space-y-3">
            {FAQ.map((item, idx) => (
              <details
                key={idx}
                className="group rounded-xl border border-cinza-claro bg-white p-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between font-display text-base font-bold uppercase tracking-wide text-azul-marinho">
                  {item.pergunta}
                  <span className="text-2xl text-dourado transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-cinza-escuro">
                  {item.resposta}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="bg-dourado py-20 text-azul-marinho md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <h2 className="text-4xl font-black uppercase md:text-5xl">
            Pronto pra velejar?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg md:text-xl">
            Fale com a gente pelo WhatsApp. A gente responde rapidinho e te
            ajuda a encontrar a turma ideal.
          </p>
          <a
            href={whatsappLink(
              `Oi, Marlon! Quero saber mais sobre os cursos da Vela Capixaba.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-azul-marinho px-8 py-4 text-sm font-black uppercase tracking-wide text-white shadow-xl transition-colors hover:bg-azul"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
