import { useMemo, useState } from "react";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { products, services } from "../data/storeData";

function HomePage() {
  const [filter, setFilter] = useState("todos");

  const filteredProducts = useMemo(() => {
    if (filter === "todos") return products;
    return products.filter((product) => product.category === filter);
  }, [filter]);

  return (
    <>
      <main className="pb-16 pt-20">
        <section
          id="inicio"
          className="relative flex min-h-screen items-center overflow-hidden border-b border-rojo/60"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(204,0,0,0.2),_transparent_28%),linear-gradient(180deg,rgba(0,0,0,0.6),rgba(0,0,0,0.86))]" />
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:14px_14px]" />
          <div className="section-shell relative grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="max-w-4xl space-y-6">
              <p className="font-semibold uppercase tracking-[0.24em] text-texto-gris">
                Monterrey, México
              </p>
              <h1 className="font-titulo text-7xl uppercase leading-[0.88] tracking-[0.18em] text-texto-base sm:text-8xl lg:text-[9rem]">
                LLANTAS Y RINES
                <span className="block text-rojo">A DOMICILIO</span>
              </h1>
              <p className="max-w-2xl text-lg text-texto-gris">
                Servicio profesional en Monterrey y área metropolitana
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#catalogo"
                  className="rounded bg-rojo px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all duration-200 hover:bg-rojo-hover"
                >
                  Ver Catálogo
                </a>
                <a
                  href="https://wa.me/528117913781"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded border border-rojo px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-texto-base transition-all duration-200 hover:bg-rojo/10"
                >
                  Llámanos
                </a>
              </div>
            </div>
            <div className="grid gap-4 self-end">
              <div className="luxury-card p-6">
                <p className="font-titulo text-3xl uppercase tracking-[0.18em] text-texto-base">
                  Atención inmediata
                </p>
                <div className="mt-4 h-0.5 w-16 bg-rojo" />
                <p className="mt-4 text-sm leading-6 text-texto-gris">
                  Compra desde el catálogo, agrega tus productos y finaliza tu pedido con
                  checkout estándar.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="py-20">
          <div className="section-shell">
            <h2 className="section-title">Nuestros Servicios</h2>
            <div className="section-divider" />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => (
                <article
                  key={service.id}
                  className="luxury-card border-negro-borde p-6 hover:border-rojo"
                >
                  <div className="mb-5 text-rojo">{renderServiceIcon(service.icon)}</div>
                  <h3 className="font-titulo text-3xl uppercase tracking-[0.16em] text-texto-base">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-texto-gris">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="catalogo" className="py-20">
          <div className="section-shell">
            <h2 className="section-title">Catálogo</h2>
            <div className="section-divider" />
            <div className="mt-8 flex flex-wrap gap-3">
              {["todos", "llanta", "rin"].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setFilter(option)}
                  className={`rounded-full border px-5 py-2 text-sm font-bold uppercase tracking-[0.18em] transition-colors duration-200 ${
                    filter === option
                      ? "border-rojo bg-rojo text-white"
                      : "border-negro-borde bg-negro-card text-texto-gris hover:border-rojo hover:text-texto-base"
                  }`}
                >
                  {option === "todos" ? "Todos" : option === "llanta" ? "Llantas" : "Rines"}
                </button>
              ))}
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="py-20">
          <div className="section-shell">
            <h2 className="section-title">Encuéntranos</h2>
            <div className="section-divider" />
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="luxury-card p-8">
                <div className="space-y-6 text-texto-gris">
                  <div>
                    <h3 className="font-titulo text-3xl uppercase tracking-[0.16em] text-texto-base">
                      Contacto
                    </h3>
                    <div className="mt-3 space-y-2">
                      <a
                        href="https://wa.me/528117913781"
                        target="_blank"
                        rel="noreferrer"
                        className="block hover:text-texto-base"
                      >
                        811-791-3781
                      </a>
                      <a
                        href="https://wa.me/528131955599"
                        target="_blank"
                        rel="noreferrer"
                        className="block hover:text-texto-base"
                      >
                        813-195-5599
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-titulo text-3xl uppercase tracking-[0.16em] text-texto-base">
                      Direcciones
                    </h3>
                    <p className="mt-3">Au Ruiz Cortinez #143 PTE, Col. Nueva Libertad</p>
                    <p className="mt-2">Mario J. Montemayor #605, Col. Nuevo Mundo</p>
                  </div>
                  <div>
                    <h3 className="font-titulo text-3xl uppercase tracking-[0.16em] text-texto-base">
                      Horario
                    </h3>
                    <p className="mt-3">Lun-Sab 9:00am - 7:00pm</p>
                  </div>
                </div>
              </div>
              <div className="luxury-card flex min-h-[320px] items-center justify-center border border-dashed border-rojo/40">
                <div className="space-y-3 text-center">
                  <MapIcon />
                  <p className="font-titulo text-3xl uppercase tracking-[0.16em] text-texto-base">
                    Mapa de ubicación
                  </p>
                  <p className="text-sm text-texto-gris">Placeholder hasta integrar mapa real</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function renderServiceIcon(icon) {
  const shared = "h-10 w-10 fill-current";

  if (icon === "delivery") {
    return (
      <svg viewBox="0 0 24 24" className={shared}>
        <path d="M3 6h11v8h2.5l2.5-3V8h2v6h-2a2.5 2.5 0 1 1-5 0H9a2.5 2.5 0 1 1-5 0H3V6Z" />
      </svg>
    );
  }

  if (icon === "mounting") {
    return (
      <svg viewBox="0 0 24 24" className={shared}>
        <path d="m21.7 19.3-6.4-6.4a6 6 0 0 1-7.9-7.9l3.1 3.1 2.8-2.8-3.1-3.1a6 6 0 0 1 7.9 7.9l6.4 6.4-2.8 2.8Z" />
      </svg>
    );
  }

  if (icon === "balance") {
    return (
      <svg viewBox="0 0 24 24" className={shared}>
        <path d="M12 4a10 10 0 0 0-10 10h2a8 8 0 1 1 16 0h2A10 10 0 0 0 12 4Zm4.95 5.64-5.66 2.83A2 2 0 1 0 12 16a2 2 0 0 0 .89-.21l4.95-4.95-.89-1.2Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={shared}>
      <path d="M12 2 4 5v6c0 5.25 3.4 10.74 8 12 4.6-1.26 8-6.75 8-12V5l-8-3Zm-1 14-4-4 1.4-1.4 2.6 2.58 5.6-5.58L18 9l-7 7Z" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mx-auto h-12 w-12 fill-current text-rojo">
      <path d="M15 5.5 9 3 3 5.5v15L9 18l6 2.5 6-2.5v-15L15 5.5ZM9 5.18l4 1.67v11.97L9 17.15V5.18Zm-4 1.9 2-.83v11.57l-2 .83V7.08Zm14 11.57-4 1.67V8.75l4-1.67v11.57Z" />
    </svg>
  );
}

export default HomePage;
