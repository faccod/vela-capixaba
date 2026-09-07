import { whatsappLink } from "@/lib/whatsapp";
import { getSettings } from "@/lib/cms";

export const metadata = {
  title: "Contato — Vela Capixaba",
  description:
    "Fale com a Vela Capixaba pelo WhatsApp (27) 99953-9293 ou venha nos visitar no Centro Náutico Capixaba.",
};

export default async function ContatoPage() {
  const site = await getSettings();
  return (
    <>
      <section className="bg-azul-marinho py-20 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-dourado">
            Fale com a gente
          </span>
          <h1 className="mt-3 text-5xl font-black uppercase leading-[0.95] md:text-6xl">
            Vamos <span className="text-dourado">conversar</span>?
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            Estamos prontos pra te ajudar a escolher o melhor curso, passeio ou
            treinamento. Fale com a gente!
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">
            <span className="text-base font-black text-dourado">
              {site.googleNota}
            </span>
            <span className="text-dourado">★★★★★</span>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {/* WhatsApp */}
            <a
              href={whatsappLink(
                `Oi, Marlon! Vim pelo site da Vela Capixaba e gostaria de mais informações.`,
                site.whatsapp,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-4 rounded-2xl bg-[#25d366] p-8 text-white shadow-md transition-transform hover:scale-[1.02]"
            >
              <span className="text-4xl">💬</span>
              <h2 className="text-2xl font-black uppercase">WhatsApp</h2>
              <p className="text-base text-white/90">
                Resposta rápida e atendimento personalizado.
              </p>
              <span className="text-2xl font-black tracking-wide">
                {site.whatsappDisplay}
              </span>
              <span className="mt-2 inline-block rounded-full bg-white/20 px-4 py-2 text-center text-sm font-bold uppercase tracking-wide backdrop-blur">
                Iniciar conversa →
              </span>
            </a>

            {/* E-mail */}
            <a
              href={`mailto:${site.email}`}
              className="group flex flex-col gap-4 rounded-2xl border-2 border-azul-marinho bg-white p-8 text-azul-marinho shadow-md transition-transform hover:scale-[1.02]"
            >
              <span className="text-4xl">✉️</span>
              <h2 className="text-2xl font-black uppercase">E-mail</h2>
              <p className="text-base text-cinza-escuro">
                Para dúvidas detalhadas, parcerias ou imprensa.
              </p>
              <span className="text-xl font-bold">{site.email}</span>
              <span className="mt-2 inline-block rounded-full border-2 border-azul-marinho px-4 py-2 text-center text-sm font-bold uppercase tracking-wide">
                Enviar e-mail →
              </span>
            </a>
          </div>

          {/* Endereço + Horário */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-areia p-8">
              <h2 className="text-xl font-black uppercase text-azul-marinho">
                📍 Endereço
              </h2>
              <p className="mt-3 text-base text-cinza-escuro">{site.address}</p>
              <a
                href={site.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-bold uppercase tracking-wide text-azul-marinho underline-offset-4 hover:text-dourado-escuro hover:underline"
              >
                Ver no Google Maps →
              </a>
            </div>
            <div className="rounded-2xl bg-areia p-8">
              <h2 className="text-xl font-black uppercase text-azul-marinho">
                🕐 Atendimento
              </h2>
              <p className="mt-3 text-base text-cinza-escuro">
                <strong className="block uppercase tracking-wide">
                  {site.horario}
                </strong>
                {site.horarioDetalhe}
              </p>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-bold uppercase tracking-wide text-azul-marinho underline-offset-4 hover:text-dourado-escuro hover:underline"
              >
                Siga no Instagram →
              </a>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-cinza-claro shadow-md">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.name + " " + site.address)}&output=embed`}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Vela Capixaba"
            />
          </div>
        </div>
      </section>
    </>
  );
}
