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
            <WhatsAppIcon />
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
                <WhatsAppIcon />
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

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-[#25D366]">
      <path d="M19.11 4.93A10 10 0 0 0 3.58 17.1L2 22l5.03-1.53a10 10 0 1 0 12.08-15.54Zm-7.12 15.3a8.25 8.25 0 0 1-4.19-1.14l-.3-.18-2.98.9.96-2.9-.19-.3a8.24 8.24 0 1 1 6.7 3.62Zm4.52-6.17c-.25-.12-1.48-.73-1.71-.82-.23-.08-.39-.12-.56.13-.16.25-.64.81-.78.98-.14.16-.29.18-.53.06-.25-.12-1.03-.38-1.96-1.22-.72-.64-1.21-1.43-1.35-1.67-.14-.25-.01-.38.1-.5.11-.11.25-.29.37-.43.13-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.07-.12-.56-1.34-.77-1.83-.2-.49-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.39 1.02 2.55.12.17 1.75 2.66 4.23 3.74.59.26 1.06.41 1.43.53.6.19 1.14.16 1.57.1.48-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.29Z" />
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
