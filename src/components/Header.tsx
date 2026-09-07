import Link from "next/link";
import Image from "next/image";
import { NAV } from "@/lib/data";
import { whatsappLink } from "@/lib/whatsapp";
import type { SiteSettings } from "@/lib/cms";

export function Header({ site }: { site: SiteSettings }) {
  return (
    <header className="sticky top-0 z-50 bg-azul-marinho text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo-branca.png"
            alt={site.name}
            width={200}
            height={62}
            className="h-14 w-auto md:h-16"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold uppercase tracking-wide text-white/90 transition-colors hover:text-dourado"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink(
              `Oi, ${site.name}! Vim pelo site e gostaria de mais informações.`,
              site.whatsapp,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-dourado px-4 py-2 text-xs font-bold uppercase tracking-wide text-azul-marinho transition-colors hover:bg-dourado-claro sm:inline-block"
          >
            Fale conosco
          </a>

          <Link
            href="/contato"
            className="md:hidden rounded-full bg-dourado px-4 py-2 text-xs font-bold uppercase tracking-wide text-azul-marinho"
          >
            Contato
          </Link>
        </div>
      </div>
    </header>
  );
}
