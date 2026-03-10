import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../data/storeData";

function CartPage() {
  const { items, total, removeItem, updateQuantity } = useCart();

  return (
    <>
      <main className="pb-16 pt-28">
        <div className="section-shell">
          <h1 className="font-titulo text-5xl uppercase tracking-[0.18em] text-texto-base">
            Tu Carrito
          </h1>
          <div className="mt-3 h-0.5 w-24 bg-rojo" />

          {items.length === 0 ? (
            <div className="luxury-card mt-10 flex flex-col items-center justify-center gap-5 px-6 py-16 text-center">
              <p className="font-titulo text-4xl uppercase tracking-[0.16em] text-texto-base">
                Tu carrito está vacío
              </p>
              <Link
                to="/"
                className="rounded border border-rojo px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-texto-base transition-colors duration-200 hover:bg-rojo/10"
              >
                Ir al catálogo
              </Link>
            </div>
          ) : (
            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_340px]">
              <div className="space-y-4">
                {items.map((item) => (
                  <article
                    key={item.id}
                    className="luxury-card grid gap-4 p-5 md:grid-cols-[120px_1fr_auto]"
                  >
                    <div className="flex h-28 items-center justify-center rounded-xl border border-negro-borde bg-negro">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-contain p-3"
                        />
                      ) : item.category === "rin" ? (
                        <WheelIcon />
                      ) : (
                        <TireIcon />
                      )}
                    </div>
                    <div>
                      <h2 className="font-titulo text-3xl uppercase tracking-[0.14em] text-texto-base">
                        {item.name}
                      </h2>
                      <p className="mt-2 text-sm text-texto-gris">{item.specs}</p>
                      <p className="mt-4 text-sm font-semibold text-dorado">
                        ${formatPrice(item.price)} MXN
                      </p>
                    </div>
                    <div className="flex flex-col items-end justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="text-sm font-bold uppercase tracking-[0.18em] text-rojo"
                      >
                        X
                      </button>
                      <div className="flex items-center rounded border border-negro-borde bg-negro-card">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-4 py-2 text-texto-base"
                        >
                          -
                        </button>
                        <span className="px-4 py-2 text-sm font-semibold text-texto-base">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-4 py-2 text-texto-base"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-sm text-texto-gris">
                        Subtotal: ${formatPrice(item.price * item.quantity)} MXN
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              <aside className="luxury-card h-fit space-y-6 p-6">
                <h2 className="font-titulo text-3xl uppercase tracking-[0.16em] text-texto-base">
                  Resumen
                </h2>
                <div className="flex items-center justify-between border-t border-negro-borde pt-4">
                  <span className="text-texto-gris">Total general</span>
                  <strong className="text-3xl font-bold text-dorado">
                    ${formatPrice(total)} MXN
                  </strong>
                </div>
                <div className="flex flex-col gap-3">
                  <Link
                    to="/"
                    className="rounded border border-rojo px-4 py-3 text-center text-sm font-bold uppercase tracking-[0.18em] text-texto-base transition-colors duration-200 hover:bg-rojo/10"
                  >
                    Seguir comprando
                  </Link>
                  <Link
                    to="/checkout"
                    className="rounded bg-rojo px-4 py-3 text-center text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:bg-rojo-hover"
                  >
                    Proceder al pago
                  </Link>
                </div>
              </aside>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

function TireIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14 stroke-texto-gris" fill="none" strokeWidth="2">
      <circle cx="32" cy="32" r="22" />
      <circle cx="32" cy="32" r="12" />
      <circle cx="32" cy="32" r="4" />
    </svg>
  );
}

function WheelIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14 stroke-texto-gris" fill="none" strokeWidth="2">
      <circle cx="32" cy="32" r="22" />
      <circle cx="32" cy="32" r="8" />
      <path d="M32 10c5 8 5 36 0 44M10 32c8-5 36-5 44 0" />
    </svg>
  );
}

export default CartPage;
