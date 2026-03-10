import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { navLinks } from "../data/storeData";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-negro/90 backdrop-blur">
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <Link to="/" className="shrink-0 text-2xl leading-none sm:text-3xl">
          <span className="font-titulo tracking-[0.18em] text-rojo">JR TIRE'S</span>
          <span className="font-titulo tracking-[0.18em] text-white"> & WHEELS</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href === "#inicio" ? "/" : `/${link.href}`}
              className="text-sm font-semibold uppercase tracking-[0.18em] text-texto-gris transition-colors duration-200 hover:text-texto-base"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="https://wa.me/528117913781"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-texto-base"
          >
            <PhoneIcon />
            811-791-3781
          </a>
          <NavLink
            to="/carrito"
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-negro-borde bg-negro-card transition-all duration-200 hover:border-rojo"
          >
            <CartIcon />
            <span className="absolute -right-1 -top-1 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-rojo px-1 text-[10px] font-bold text-white">
              {itemCount}
            </span>
          </NavLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-negro-borde bg-negro-card lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Abrir menú"
        >
          <MenuIcon />
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-negro-borde bg-negro-card lg:hidden">
          <div className="section-shell flex flex-col gap-4 py-5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href === "#inicio" ? "/" : `/${link.href}`}
                className="text-sm font-semibold uppercase tracking-[0.18em] text-texto-base"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center justify-between gap-4 pt-2">
              <a
                href="https://wa.me/528117913781"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-texto-base"
              >
                <PhoneIcon />
                811-791-3781
              </a>
              <NavLink
                to="/carrito"
                className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-negro-borde bg-negro"
                onClick={() => setIsOpen(false)}
              >
                <CartIcon />
                <span className="absolute -right-1 -top-1 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-rojo px-1 text-[10px] font-bold text-white">
                  {itemCount}
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current text-texto-base">
      <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2ZM7.2 14h9.8c.75 0 1.41-.41 1.75-1.03L22 6H6.2l-.95-2H2v2h2l3.6 7.59-1.35 2.45A2 2 0 0 0 8 19h12v-2H8l1.2-2Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-rojo">
      <path d="M6.62 10.79a15.53 15.53 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.3 21 3 13.7 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2Z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current text-texto-base">
      <path d="M4 7h16v2H4V7Zm0 4h16v2H4v-2Zm0 4h16v2H4v-2Z" />
    </svg>
  );
}

export default Navbar;
