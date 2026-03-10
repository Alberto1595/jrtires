import { useCart } from "../context/CartContext";
import { formatPrice } from "../data/storeData";

function ProductCard({ product }) {
  const { addItem } = useCart();
  const isWheel = product.category === "rin";

  return (
    <article className="luxury-card overflow-hidden">
      <div className="relative border-b border-negro-borde bg-negro-card p-6">
        <span className="absolute right-4 top-4 rounded-full bg-rojo px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
          {product.category}
        </span>
        {product.image ? (
          <div className="flex h-44 items-center justify-center rounded-xl border border-negro-borde bg-negro p-4">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-contain"
            />
          </div>
        ) : (
          <div className="flex h-44 items-center justify-center rounded-xl border border-negro-borde bg-negro">
            {isWheel ? <WheelIcon /> : <TireIcon />}
          </div>
        )}
      </div>
      <div className="space-y-4 p-6">
        <h3 className="font-titulo text-3xl uppercase tracking-[0.14em] text-texto-base">
          {product.name}
        </h3>
        <p className="text-sm text-texto-gris">{product.specs}</p>
        {product.compatibility ? (
          <p className="text-xs leading-5 text-texto-gris">{product.compatibility}</p>
        ) : null}
        <div className="pt-1">
          <p className="text-2xl font-bold text-dorado">${formatPrice(product.price)} MXN</p>
        </div>
        <button
          type="button"
          onClick={() => addItem(product)}
          className="w-full rounded bg-rojo px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white transition-all duration-200 hover:bg-rojo-hover"
        >
          Agregar al carrito
        </button>
      </div>
    </article>
  );
}

function TireIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-20 w-20 stroke-texto-gris" fill="none" strokeWidth="2">
      <circle cx="32" cy="32" r="22" />
      <circle cx="32" cy="32" r="12" />
      <circle cx="32" cy="32" r="4" />
      <path d="M32 10v10M32 44v10M10 32h10M44 32h10M17 17l7 7M40 40l7 7M47 17l-7 7M24 40l-7 7" />
    </svg>
  );
}

function WheelIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-20 w-20 stroke-texto-gris" fill="none" strokeWidth="2">
      <circle cx="32" cy="32" r="22" />
      <circle cx="32" cy="32" r="8" />
      <path d="M32 10c5 8 5 36 0 44M10 32c8-5 36-5 44 0M19 19c10 1 18 25 13 35M45 19c-10 1-18 25-13 35" />
    </svg>
  );
}

export default ProductCard;
