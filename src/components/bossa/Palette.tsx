import { PALETTE } from "./data";

export function Palette() {
  return (
    <section id="paleta" className="relative bg-jacaranda py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mb-16 max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-couro-cognac-light">
            Conceito da Paleta
          </span>
          <h2 className="mt-4 font-italiana text-4xl font-normal leading-tight text-linho-cru sm:text-5xl text-balance">
            A atmosfera visual do{" "}
            <span className="italic text-couro-cognac-light">Studio Bossa</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-linho-cru/75">
            Reflete a harmonia entre o orgânico e o contemporâneo. Através de
            texturas táteis, da marcenaria nobre e de tons minerais, traduzimos
            o conceito de um luxo intemporal focado no bem-estar.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PALETTE.map((color, idx) => (
            <div
              key={color.name}
              className="reveal group flex flex-col overflow-hidden rounded-2xl border border-linho-cru/15 bg-jacaranda-soft/40"
              data-reveal-delay={`${idx * 100}`}
            >
              {/* Color swatch */}
              <div
                className="relative h-40 overflow-hidden"
                style={{ backgroundColor: color.hex }}
              >
                { }
                <img
                  src={color.texture}
                  alt={`Textura ${color.name}`}
                  className="h-full w-full object-cover opacity-60 mix-blend-overlay transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className="absolute bottom-3 left-3 font-italiana text-2xl font-normal text-linho-cru">
                  {color.name}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider text-linho-cru/60">
                  <span>HEX {color.hex}</span>
                </div>
                <p className="text-sm leading-relaxed text-linho-cru/80">
                  {color.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="reveal mt-16 text-center">
          <p className="font-italiana text-2xl italic text-linho-cru/85 sm:text-3xl">
            “Onde cada material conta uma história.”
          </p>
        </div>
      </div>
    </section>
  );
}
