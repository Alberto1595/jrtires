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

export default Footer;
