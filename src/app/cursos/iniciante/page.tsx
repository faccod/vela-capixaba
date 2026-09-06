import Image from "next/image";
import Link from "next/link";
import { CURSO_INICIANTE, whatsappLink } from "@/lib/data";

export const metadata = {
  title: "Curso de Vela — Módulo Iniciante | Vela Capixaba",
  description:
    "Curso de vela para iniciantes em Vitória/ES. 5 aulas, veleiro dingue, instrutor dedicado e certificado FECAI.",
};

export default function CursoIniciantePage() {
  const c = CURSO_INICIANTE;
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-azul-marinho text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-barco.jpg"
            alt="Curso de vela iniciante"
            fill
            priority
            className="object-cover opacity-50"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-azul-marinho/80 via-azul-marinho/70 to-azul-marinho" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32">
          <span className="rounded-full border border-dourado/60 bg-dourado/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-dourado">
            Carro-chefe da escola
          </span>
          <h1 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-[0.95] md:text-6xl">
            {c.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85 md:text-xl">
            {c.subheadline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink(
                `Oi, Marlon! Quero me inscrever no Curso de Vela — Módulo Iniciante.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-dourado px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-azul-marinho shadow-xl transition-colors hover:bg-dourado-claro"
            >
              Quero me inscrever
            </a>
            <a
              href="#investimento"
              className="rounded-full border border-white/30 bg-white/5 px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Ver investimento
            </a>
          </div>
        </div>
      </section>

      {/* Descrição */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <p className="text-lg leading-relaxed text-cinza-escuro">
            {c.descricao}
          </p>
        </div>
      </section>

      {/* Estrutura */}
      <section className="bg-areia py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="text-3xl font-black uppercase text-azul-marinho md:text-4xl">
            Como funciona o curso
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {c.estrutura.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-dourado/30 bg-white p-6 shadow-sm"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-dourado-escuro">
                  {idx === 0 ? "Aulas" : idx === 1 ? "Carga horária" : "Acompanhamento"}
                </span>
                <p className="mt-3 text-lg font-bold uppercase text-azul-marinho">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incluso + Bônus */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black uppercase text-azul-marinho md:text-4xl">
                O que está incluso
              </h2>
              <ul className="mt-8 space-y-3">
                {c.incluso.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-cinza-escuro">
                    <span className="mt-1 text-dourado">✓</span>
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-black uppercase text-dourado-escuro md:text-4xl">
                🎁 Bônus
              </h2>
              <ul className="mt-8 space-y-3">
                {c.bonus.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-cinza-escuro">
                    <span className="mt-1 text-dourado">★</span>
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* O que você aprende */}
      <section className="bg-cinza-claro py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <h2 className="text-3xl font-black uppercase text-azul-marinho md:text-4xl">
            O que você vai aprender
          </h2>
          <ul className="mt-10 grid gap-3 md:grid-cols-2">
            {c.aprendizado.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-dourado/20 text-sm font-black text-dourado-escuro">
                  {idx + 1}
                </span>
                <span className="text-base font-medium text-azul-marinho">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-12 rounded-2xl border-2 border-dourado bg-white p-8 text-center shadow-md">
            <p className="text-xl font-bold uppercase text-azul-marinho md:text-2xl">
              {c.resultado}
            </p>
          </div>
        </div>
      </section>

      {/* Investimento */}
      <section
        id="investimento"
        className="bg-azul-marinho py-20 text-white md:py-24"
      >
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-dourado">
              Investimento
            </span>
            <h2 className="mt-3 text-3xl font-black uppercase md:text-4xl">
              Quanto custa
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {c.precos.map((p, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl p-6 ${
                  p.destaque
                    ? "border-2 border-dourado bg-dourado text-azul-marinho shadow-2xl"
                    : "border border-white/10 bg-white/5 text-white"
                }`}
              >
                {p.tag && (
                  <span className="absolute -top-3 right-6 rounded-full bg-azul-marinho px-3 py-1 text-[10px] font-black uppercase tracking-widest text-dourado">
                    {p.tag}
                  </span>
                )}
                <p className={`text-xs font-bold uppercase tracking-widest ${p.destaque ? "text-azul-marinho/80" : "text-white/60"}`}>
                  {p.modalidade}
                </p>
                <p className={`mt-3 text-3xl font-black uppercase ${p.destaque ? "text-azul-marinho" : "text-white"}`}>
                  {p.preco}
                </p>
                {p.detalhe && (
                  <p className={`mt-1 text-xs ${p.destaque ? "text-azul-marinho/70" : "text-white/60"}`}>
                    {p.detalhe}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={whatsappLink(
                `Oi, Marlon! Quero me inscrever no Curso de Vela — Módulo Iniciante.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-dourado px-8 py-4 text-sm font-black uppercase tracking-wide text-azul-marinho shadow-xl transition-colors hover:bg-dourado-claro"
            >
              Quero me inscrever agora
            </a>
            <p className="mt-4 text-xs text-white/60">
              Dúvidas? Fale com a gente no WhatsApp antes de se inscrever.
            </p>
          </div>
        </div>
      </section>

      {/* Voltar */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
          <Link
            href="/cursos"
            className="text-sm font-bold uppercase tracking-wide text-azul-marinho underline-offset-4 hover:text-dourado-escuro hover:underline"
          >
            ← Ver todos os cursos
          </Link>
        </div>
      </section>
    </>
  );
}
