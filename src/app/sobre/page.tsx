import Image from "next/image";
import Link from "next/link";
import { SITE, whatsappLink } from "@/lib/data";

export const metadata = {
  title: "Sobre — Vela Capixaba",
  description: "Conheça a escola de vela certificada pela World Sailing e FECAI em Vitória/ES.",
};

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-azul-marinho text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-mar.jpg"
            alt="Baía de Vitória"
            fill
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-azul-marinho/80 to-azul-marinho" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32">
          <span className="text-xs font-bold uppercase tracking-widest text-dourado">
            Sobre a escola
          </span>
          <h1 className="mt-4 max-w-3xl text-5xl font-black uppercase leading-[0.95] md:text-6xl">
            Mais que uma escola.
            <br />
            <span className="text-dourado">O seu lugar no mar.</span>
          </h1>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <h2 className="text-3xl font-black uppercase text-azul-marinho md:text-4xl">
            Quem somos
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cinza-escuro">
            A Vela Capixaba é uma escola de vela localizada em Vitória/ES,
            criada para aproximar pessoas do esporte e do mar. Nossa missão é
            oferecer uma experiência de aprendizado segura, prática e de
            qualidade, desde o primeiro contato com a vela até o
            aperfeiçoamento e treinamento para regatas.
          </p>

          <h2 className="mt-16 text-3xl font-black uppercase text-azul-marinho md:text-4xl">
            O que oferecemos
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cinza-escuro">
            Somos uma escola de vela que oferece cursos, passeios e
            treinamentos para regatas. As aulas são agendadas de acordo com a
            disponibilidade de cada aluno e atendemos de segunda a domingo,
            proporcionando flexibilidade e praticidade.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-cinza-escuro">
            Contamos com instrutores experientes, turmas reduzidas,
            acompanhamento próximo e aulas práticas. Também emitimos
            certificados oficiais reconhecidos pela World Sailing e pela
            Federação Capixaba de Iatismo (FECAI).
          </p>

          <h2 className="mt-16 text-3xl font-black uppercase text-azul-marinho md:text-4xl">
            Credenciamentos
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-dourado/40 bg-dourado/5 p-6">
              <h3 className="font-display text-2xl font-black uppercase text-dourado-escuro">
                World Sailing
              </h3>
              <p className="mt-2 text-base text-cinza-escuro">
                Reconhecimento internacional como escola de vela dentro do
                padrão da federação mundial do esporte.
              </p>
            </div>
            <div className="rounded-xl border border-dourado/40 bg-dourado/5 p-6">
              <h3 className="font-display text-2xl font-black uppercase text-dourado-escuro">
                FECAI
              </h3>
              <p className="mt-2 text-base text-cinza-escuro">
                Federação Capixaba de Iatismo — homologa nossos certificados,
                dando validade oficial dentro do Espírito Santo.
              </p>
            </div>
          </div>

          <h2 className="mt-16 text-3xl font-black uppercase text-azul-marinho md:text-4xl">
            Onde estamos
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cinza-escuro">
            {SITE.address}
          </p>
          <p className="mt-2 text-lg leading-relaxed text-cinza-escuro">
            A escola funciona no Centro Náutico Capixaba, com saída pela Praia
            da Guarderia — um dos melhores pontos para velejar em Vitória, com
            águas abrigadas e visual privilegiado.
          </p>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink(`Oi, Marlon! Gostaria de conhecer a escola.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-dourado px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-azul-marinho shadow-md transition-colors hover:bg-dourado-claro"
            >
              Falar com a escola
            </a>
            <Link
              href="/cursos"
              className="rounded-full border border-azul-marinho px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-azul-marinho transition-colors hover:bg-azul-marinho hover:text-white"
            >
              Ver cursos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
