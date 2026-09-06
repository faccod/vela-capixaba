import { SERVICOS, whatsappLink } from "@/lib/data";
import Link from "next/link";

const SERVICO = SERVICOS.find((s) => s.slug === "avancado")!;

export const metadata = {
  title: `${SERVICO.name} | Vela Capixaba`,
  description: SERVICO.short,
};

export default function CursoAvancadoPage() {
  return (
    <>
      <section className="bg-azul-marinho py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-dourado">
            {SERVICO.headline}
          </span>
          <h1 className="mt-3 text-5xl font-black uppercase leading-[0.95] md:text-6xl">
            {SERVICO.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">{SERVICO.short}</p>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <p className="text-lg leading-relaxed text-cinza-escuro">
            Para quem já tem base e quer dominar manobras avançadas, técnicas
            de regata e navegação. Conteúdo detalhado em breve — fale com a
            gente pelo WhatsApp e a gente te explica tudo direitinho.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={whatsappLink(
                `Oi, Marlon! Gostaria de saber mais sobre o ${SERVICO.name}.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-dourado px-7 py-4 text-sm font-black uppercase tracking-wide text-azul-marinho shadow-md transition-colors hover:bg-dourado-claro"
            >
              Falar no WhatsApp
            </a>
            <Link
              href="/cursos"
              className="text-sm font-bold uppercase tracking-wide text-azul-marinho underline-offset-4 hover:text-dourado-escuro hover:underline"
            >
              ← Ver todos os cursos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
