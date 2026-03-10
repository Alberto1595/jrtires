import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-negro-borde bg-negro-card" id="contacto">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <p className="font-titulo text-3xl tracking-[0.18em] text-rojo">JR TIRE'S</p>
          <p className="text-sm leading-6 text-texto-gris">
            Tienda de llantas y rines a domicilio en Monterrey con servicio profesional
            y atención personalizada.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="font-titulo text-2xl uppercase tracking-[0.18em] text-texto-base">
            Links
          </h3>
          <div className="flex flex-col gap-2 text-sm text-texto-gris">
            <a href="#inicio">Inicio</a>
            <a href="#catalogo">Catálogo</a>
            <a href="#servicios">Servicios</a>
            <Link to="/carrito">Carrito</Link>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="font-titulo text-2xl uppercase tracking-[0.18em] text-texto-base">
            Teléfonos
          </h3>
          <div className="space-y-2 text-sm text-texto-gris">
            <a
              href="https://wa.me/528117913781"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-texto-base"
            >
              <WhatsAppIcon />
              811-791-3781
            </a>
            <a
              href="https://wa.me/528131955599"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-texto-base"
            >
              <WhatsAppIcon />
              813-195-5599
            </a>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="font-titulo text-2xl uppercase tracking-[0.18em] text-texto-base">
            Direcciones
          </h3>
          <div className="space-y-2 text-sm leading-6 text-texto-gris">
            <p>Au Ruiz Cortinez #143 PTE, Col. Nueva Libertad</p>
            <p>Mario J. Montemayor #605, Col. Nuevo Mundo</p>
          </div>
        </div>
      </div>
      <div className="border-t border-negro-borde">
        <div className="section-shell py-4 text-sm text-texto-gris">
          © 2025 JR Tire&apos;s & Wheels
        </div>
      </div>
    </footer>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-[#25D366]">
      <path d="M19.11 4.93A10 10 0 0 0 3.58 17.1L2 22l5.03-1.53a10 10 0 1 0 12.08-15.54Zm-7.12 15.3a8.25 8.25 0 0 1-4.19-1.14l-.3-.18-2.98.9.96-2.9-.19-.3a8.24 8.24 0 1 1 6.7 3.62Zm4.52-6.17c-.25-.12-1.48-.73-1.71-.82-.23-.08-.39-.12-.56.13-.16.25-.64.81-.78.98-.14.16-.29.18-.53.06-.25-.12-1.03-.38-1.96-1.22-.72-.64-1.21-1.43-1.35-1.67-.14-.25-.01-.38.1-.5.11-.11.25-.29.37-.43.13-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.07-.12-.56-1.34-.77-1.83-.2-.49-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.39 1.02 2.55.12.17 1.75 2.66 4.23 3.74.59.26 1.06.41 1.43.53.6.19 1.14.16 1.57.1.48-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.29Z" />
    </svg>
  );
}

export default Footer;
