import Image from "next/image";
import { GALERIA } from "@/lib/data";

export const metadata = {
  title: "Galeria — Vela Capixaba",
  description: "Fotos e momentos da escola de vela Vela Capixaba em Vitória/ES.",
};

export default function GaleriaPage() {
  return (
    <>
      <section className="bg-azul-marinho py-20 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-dourado">
            Galeria
          </span>
          <h1 className="mt-3 text-5xl font-black uppercase leading-[0.95] md:text-6xl">
            Momentos no <span className="text-dourado">mar</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            Velejando, ensinando, aprendendo. A Vela Capixaba em imagens.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {GALERIA.map((g, idx) => (
              <div
                key={idx}
                className="group relative aspect-square overflow-hidden rounded-xl bg-cinza-claro shadow-sm"
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
