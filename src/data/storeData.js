export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Llantas", href: "#catalogo" },
  { label: "Rines", href: "#catalogo" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export const services = [
  {
    id: "delivery",
    icon: "delivery",
    title: "Entrega a Domicilio",
    description:
      "Llevamos tus llantas y rines hasta donde estés en Monterrey y área metropolitana",
  },
  {
    id: "mounting",
    icon: "mounting",
    title: "Montaje Incluido",
    description:
      "Instalación profesional incluida en cada compra, sin costos adicionales",
  },
  {
    id: "balance",
    icon: "balance",
    title: "Balanceo Incluido",
    description:
      "Balanceo de precisión incluido para una conducción segura y suave",
  },
  {
    id: "warranty",
    icon: "warranty",
    title: "Garantía de Producto",
    description:
      "Todos nuestros productos cuentan con garantía directa de fabricante",
  },
];

export const products = [
  {
    id: "tire-1",
    category: "llanta",
    image: "/images/WhatsApp Image 2026-03-10 at 9.19.04 AM.jpeg",
    name: "Continental UltraContact 195/55 R16 87V",
    specs: "Medida 195/55 R16, índice 87V.",
    compatibility: "",
    price: 2800,
  },
  {
    id: "tire-2",
    category: "llanta",
    image: "/images/WhatsApp Image 2026-03-10 at 9.19.04 AM(1).jpeg",
    name: "Continental UltraContact 185/60 R15 84H",
    specs: "Medida 185/60 R15, índice 84H.",
    compatibility: "",
    price: 2400,
  },
  {
    id: "tire-3",
    category: "llanta",
    image: "/images/WhatsApp Image 2026-03-10 at 9.19.05 AM.jpeg",
    name: "Continental ExtremeContact Sport 225/45 ZR17 99W",
    specs: "Medida 225/45 ZR17, índice 99W.",
    compatibility: "",
    price: 3500,
  },
  {
    id: "wheel-1",
    category: "rin",
    image: "/images/WhatsApp Image 2026-03-10 at 9.19.05 AM(1).jpeg",
    name: "GTRWheel RP15164 15x8 5x114.3 ET0 BMF",
    specs: "15x8 5x114.3 ET0 BMF.",
    compatibility:
      "Compatible: Ford Ranger, Toyota Tacoma/Hilux, Jeep Cherokee/Wrangler, Ford Explorer, Nissan PickUp.",
    price: 1800,
  },
  {
    id: "wheel-2",
    category: "rin",
    image: "/images/WhatsApp Image 2026-03-10 at 9.19.05 AM(2).jpeg",
    name: "IMP RA15211 15x8 4x100 ET25 BMF+Millín",
    specs: "15x8 4x100 ET25 BMF+Millín.",
    compatibility:
      "Compatible: VW Pointer, Gol, Golf/Jetta A2/A3, Chevy, Aveo, Tsuru, Nissan March/Versa, Mazda 2.",
    price: 1600,
  },
  {
    id: "wheel-3",
    category: "rin",
    image: "/images/WhatsApp Image 2026-03-10 at 9.19.05 AM(3).jpeg",
    name: "IMP RP15156 15x8 4x100 ET25 BMF+Millín",
    specs: "15x8 4x100 ET25 BMF+Millín.",
    compatibility:
      "Compatible: Chevy, Tsuru, Honda Civic/Fit, Suzuki Swift, Mazda 2, Nissan March/Platina.",
    price: 1600,
  },
];

export const mexicoStates = [
  "Aguascalientes",
  "Baja California",
  "Baja California Sur",
  "Campeche",
  "Chiapas",
  "Chihuahua",
  "Ciudad de México",
  "Coahuila",
  "Colima",
  "Durango",
  "Estado de México",
  "Guanajuato",
  "Guerrero",
  "Hidalgo",
  "Jalisco",
  "Michoacán",
  "Morelos",
  "Nayarit",
  "Nuevo León",
  "Oaxaca",
  "Puebla",
  "Querétaro",
  "Quintana Roo",
  "San Luis Potosí",
  "Sinaloa",
  "Sonora",
  "Tabasco",
  "Tamaulipas",
  "Tlaxcala",
  "Veracruz",
  "Yucatán",
  "Zacatecas",
];

export function formatPrice(value) {
  return new Intl.NumberFormat("es-MX").format(value);
}
