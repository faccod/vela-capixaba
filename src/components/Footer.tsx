import Link from "next/link";
import Image from "next/image";
import { NAV } from "@/lib/data";
import { whatsappLink } from "@/lib/whatsapp";
import type { SiteSettings } from "@/lib/cms";

export function Footer({ site }: { site: SiteSettings }) {
  return (
    <footer className="bg-azul-marinho text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          {/* Logo + tagline */}
          <div>
            <Image
              src="/images/logo-branca.png"
              alt={site.name}
              width={200}
              height={60}
              className="h-12 w-auto"
            />
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Escola de vela certificada pela World Sailing e FECAI, na Praia
              da Guarderia em Vitória-ES.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["World Sailing", "FECAI"].map((cred) => (
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
                  href={whatsappLink(undefined, site.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-white transition-colors hover:text-dourado"
                >
                  {site.whatsappDisplay}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wide text-white/50">
                  E-mail
                </span>
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-white transition-colors hover:text-dourado"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wide text-white/50">
                  Instagram
                </span>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-white transition-colors hover:text-dourado"
                >
                  {site.instagramHandle}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wide text-white/50">
                  Endereço
                </span>
                <span className="text-white/80">{site.address}</span>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wide text-white/50">
                  Atendimento
                </span>
                <span className="text-white/80">{site.horario}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name} — {site.razaoSocial}. CNPJ{" "}
            {site.cnpj}. Todos os direitos reservados.
          </p>
          <p className="text-white/40">Velejar é viver o vento.</p>
        </div>
      </div>
    </footer>
  );
}
