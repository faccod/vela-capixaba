import Link from "next/link";
import Image from "next/image";
import { NAV, SITE, whatsappLink } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-azul-marinho text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          {/* Logo + tagline */}
          <div>
            <Image
              src="/images/logo-branca.png"
              alt="Vela Capixaba"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Escola de vela certificada pela World Sailing e FECAI, na Praia da
              Guarderia em Vitória-ES.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {SITE.credenciamentos.map((cred) => (
                <span
                  key={cred}
                  className="rounded-full border border-dourado/40 bg-dourado/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-dourado"
                >
                  {cred}
                </span>
              ))}
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-dourado">
              Navegação
            </h4>
            <ul className="mt-4 space-y-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 transition-colors hover:text-dourado"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-dourado">
              Contato
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>
                <span className="block text-xs uppercase tracking-wide text-white/50">
                  WhatsApp
                </span>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-white transition-colors hover:text-dourado"
                >
                  {SITE.whatsappDisplay}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wide text-white/50">
                  E-mail
                </span>
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-medium text-white transition-colors hover:text-dourado"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wide text-white/50">
                  Instagram
                </span>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-white transition-colors hover:text-dourado"
                >
                  {SITE.instagramHandle}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wide text-white/50">
                  Endereço
                </span>
                <span className="text-white/80">{SITE.address}</span>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wide text-white/50">
                  Atendimento
                </span>
                <span className="text-white/80">{SITE.horario}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name} — {SITE.razaoSocial}. CNPJ{" "}
            {SITE.cnpj}. Todos os direitos reservados.
          </p>
          <p className="text-white/40">Velejar é viver o vento.</p>
        </div>
      </div>
    </footer>
  );
}
