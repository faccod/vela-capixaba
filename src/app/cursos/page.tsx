import Image from "next/image";
import Link from "next/link";
import { SERVICOS, whatsappLink } from "@/lib/data";

export const metadata = {
  title: "Cursos e Serviços — Vela Capixaba",
  description:
    "Curso de Vela Iniciante, Avançado, Treinamento para Regatas e Passeios de Veleiro em Vitória/ES.",
};

export default function CursosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-azul-marinho py-20 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-dourado">
            Nossos serviços
          </span>
          <h1 className="mt-3 text-5xl font-black uppercase leading-[0.95] md:text-6xl">
            Cursos e <span className="text-dourado">passeios</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            Do zero ao mar. Escolha o serviço ideal pro seu momento.
          </p>
        </div>
      </section>

      {/* Lista */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {SERVICOS.map((s) => (
              <Link
                key={s.slug}
                href={s.href}
                className={`group relative flex flex-col gap-4 overflow-hidden rounded-2xl border transition-all hover:shadow-2xl ${
                  s.destaque
                    ? "border-dourado bg-azul-marinho text-white shadow-xl"
                    : "border-cinza-claro bg-white text-azul-marinho hover:border-dourado"
                }`}
              >
                {s.destaque && (
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src="/images/hero-barco.jpg"
                      alt="Curso de Vela Iniciante"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-azul-marinho via-azul-marinho/40 to-transparent" />
                    <span className="absolute left-6 top-6 rounded-full bg-dourado px-3 py-1 text-[10px] font-black uppercase tracking-widest text-azul-marinho">
                      Carro-chefe
                    </span>
                  </div>
                )}
                <div className="flex flex-1 flex-col gap-4 p-8">
                  <span
                    className={`text-xs font-bold uppercase tracking-widest ${
                      s.destaque ? "text-dourado" : "text-dourado-escuro"
                    }`}
                  >
                    {s.headline}
                  </span>
                  <h2 className="text-3xl font-black uppercase leading-tight">
                    {s.name}
                  </h2>
                  <p
                    className={`text-base ${
                      s.destaque ? "text-white/85" : "text-cinza-escuro"
                    }`}
                  >
                    {s.short}
                  </p>
                  <div
                    className={`mt-auto flex items-center justify-between text-xs uppercase tracking-widest ${
                      s.destaque ? "text-white/70" : "text-cinza"
                    }`}
                  >
                    <span>{s.duracao}</span>
                    <span>{s.embarcação}</span>
                  </div>
                  <span
                    className={`mt-2 inline-block text-sm font-bold uppercase tracking-wide underline-offset-4 group-hover:underline ${
                      s.destaque ? "text-dourado" : "text-azul-marinho"
                    }`}
                  >
                    Ver detalhes →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dourado py-16 text-azul-marinho md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <h2 className="text-3xl font-black uppercase md:text-4xl">
            Não sabe qual curso combina com você?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg">
            Fala com a gente no WhatsApp. A gente te ajuda a escolher.
          </p>
          <a
            href={whatsappLink(
              `Oi, Marlon! Gostaria de ajuda pra escolher o curso ideal.`
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
