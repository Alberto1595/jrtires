import { useMemo, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { formatPrice, mexicoStates } from "../data/storeData";

const initialForm = {
  email: "",
  news: false,
  firstName: "",
  lastName: "",
  street: "",
  exteriorNumber: "",
  interiorNumber: "",
  references: "",
  postalCode: "",
  city: "",
  state: "",
  neighborhood: "",
  phone: "",
  paymentMethod: "card",
  cardNumber: "",
  cardName: "",
  cardExpiry: "",
  cardCvv: "",
};

function CheckoutPage() {
  const navigate = useNavigate();
  const { items, total, clearCart } = useCart();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const selectedMethodLabel = useMemo(() => {
    if (form.paymentMethod === "card") return "Tarjeta";
    if (form.paymentMethod === "spei") return "Transferencia SPEI";
    return "Efectivo al entregar";
  }, [form.paymentMethod]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateForm(form, items);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    setIsSuccessOpen(true);
  };

  const handleAccept = () => {
    clearCart();
    navigate("/");
  };

  return (
    <>
      <main className="pb-16 pt-28">
        <div className="section-shell">
          <h1 className="font-titulo text-5xl uppercase tracking-[0.18em] text-texto-base">
            Checkout
          </h1>
          <div className="mt-3 h-0.5 w-24 bg-rojo" />

          {items.length === 0 ? (
            <div className="luxury-card mt-10 flex flex-col items-center justify-center gap-5 px-6 py-16 text-center">
              <p className="font-titulo text-4xl uppercase tracking-[0.16em] text-texto-base">
                No hay productos en tu carrito
              </p>
              <Link
                to="/"
                className="rounded border border-rojo px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-texto-base transition-colors duration-200 hover:bg-rojo/10"
              >
                Ir al catálogo
              </Link>
            </div>
          ) : (
            <div className="mt-10 grid gap-8 xl:grid-cols-[1fr_380px]">
              <form className="space-y-8" onSubmit={handleSubmit} noValidate>
                <section className="luxury-card p-6 sm:p-8">
                  <h2 className="font-titulo text-3xl uppercase tracking-[0.16em] text-texto-base">
                    Información de Contacto
                  </h2>
                  <div className="mt-6 space-y-4">
                    <FormField
                      label="Email *"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      error={errors.email}
                      type="email"
                    />
                    <label className="flex items-center gap-3 text-sm text-texto-gris">
                      <input
                        type="checkbox"
                        name="news"
                        checked={form.news}
                        onChange={handleChange}
                        className="h-4 w-4 accent-rojo"
                      />
                      Deseo recibir noticias y ofertas
                    </label>
                  </div>
                </section>

                <section className="luxury-card p-6 sm:p-8">
                  <h2 className="font-titulo text-3xl uppercase tracking-[0.16em] text-texto-base">
                    Información de Entrega
                  </h2>
                  <div className="mt-6 grid gap-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <FormField label="Nombre *" name="firstName" value={form.firstName} onChange={handleChange} error={errors.firstName} />
                      <FormField label="Apellidos *" name="lastName" value={form.lastName} onChange={handleChange} error={errors.lastName} />
                    </div>
                    <FormField label="Calle *" name="street" value={form.street} onChange={handleChange} error={errors.street} />
                    <div className="grid gap-4 md:grid-cols-2">
                      <FormField label="Núm. Exterior *" name="exteriorNumber" value={form.exteriorNumber} onChange={handleChange} error={errors.exteriorNumber} />
                      <FormField label="Núm. Interior" name="interiorNumber" value={form.interiorNumber} onChange={handleChange} error={errors.interiorNumber} />
                    </div>
                    <FormField label="Referencias" name="references" value={form.references} onChange={handleChange} error={errors.references} />
                    <div className="grid gap-4 md:grid-cols-2">
                      <FormField label="Código Postal *" name="postalCode" value={form.postalCode} onChange={handleChange} error={errors.postalCode} />
                      <FormField label="Ciudad *" name="city" value={form.city} onChange={handleChange} error={errors.city} />
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <SelectField label="Estado *" name="state" value={form.state} onChange={handleChange} error={errors.state} options={mexicoStates} />
                      <FormField label="Colonia *" name="neighborhood" value={form.neighborhood} onChange={handleChange} error={errors.neighborhood} />
                    </div>
                    <FormField label="Teléfono *" name="phone" value={form.phone} onChange={handleChange} error={errors.phone} />
                  </div>
                </section>

                <section className="luxury-card p-6 sm:p-8">
                  <h2 className="font-titulo text-3xl uppercase tracking-[0.16em] text-texto-base">
                    Método de Pago
                  </h2>
                  <div className="mt-6 space-y-4">
                    <PaymentCard selected={form.paymentMethod === "card"} value="card" onChange={handleChange} title="Tarjeta">
                      <div className="grid gap-4">
                        <FormField label="Número" name="cardNumber" value={form.cardNumber} onChange={handleChange} error={errors.cardNumber} />
                        <FormField label="Nombre" name="cardName" value={form.cardName} onChange={handleChange} error={errors.cardName} />
                        <div className="grid gap-4 md:grid-cols-2">
                          <FormField label="Vencimiento" name="cardExpiry" value={form.cardExpiry} onChange={handleChange} error={errors.cardExpiry} />
                          <FormField label="CVV" name="cardCvv" value={form.cardCvv} onChange={handleChange} error={errors.cardCvv} />
                        </div>
                      </div>
                    </PaymentCard>
                    <PaymentCard selected={form.paymentMethod === "spei"} value="spei" onChange={handleChange} title="Transferencia SPEI">
                      <p className="text-sm text-texto-gris">
                        Recibirás los datos bancarios al confirmar tu pedido.
                      </p>
                    </PaymentCard>
                    <PaymentCard selected={form.paymentMethod === "cash"} value="cash" onChange={handleChange} title="Efectivo al entregar" />
                  </div>
                  {errors.cart ? <p className="mt-4 text-sm text-rojo">{errors.cart}</p> : null}
                  <button
                    type="submit"
                    className="mt-8 w-full rounded bg-rojo px-6 py-4 text-xl font-bold uppercase tracking-[0.18em] text-white transition-all duration-200 hover:bg-rojo-hover"
                  >
                    Confirmar Pedido
                  </button>
                </section>
              </form>

              <aside className="space-y-6 xl:sticky xl:top-24 xl:h-fit">
                <div className="luxury-card p-6 sm:p-8">
                  <h2 className="font-titulo text-3xl uppercase tracking-[0.16em] text-texto-base">
                    Resumen
                  </h2>
                  <div className="mt-6 space-y-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center justify-between gap-4 border-b border-negro-borde pb-4">
                        <div>
                          <p className="font-medium text-texto-base">{item.name}</p>
                          <p className="mt-1 text-sm text-texto-gris">x{item.quantity}</p>
                        </div>
                        <p className="text-sm font-semibold text-dorado">
                          ${formatPrice(item.price * item.quantity)} MXN
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 space-y-3 border-t border-negro-borde pt-6">
                    <div className="flex items-center justify-between text-sm text-texto-gris">
                      <span>Subtotal</span>
                      <span>${formatPrice(total)} MXN</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-texto-gris">Envío</span>
                      <span className="font-medium text-green-400">Gratis en área metropolitana</span>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <span className="font-semibold uppercase tracking-[0.18em] text-texto-base">
                        Total
                      </span>
                      <span className="text-3xl font-bold text-dorado">
                        ${formatPrice(total)} MXN
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 rounded-xl border border-negro-borde bg-negro px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-texto-gris">
                      Método seleccionado
                    </p>
                    <p className="mt-2 font-semibold text-texto-base">{selectedMethodLabel}</p>
                  </div>
                </div>
              </aside>
            </div>
          )}
        </div>
      </main>
      <Footer />

      {isSuccessOpen ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4">
          <div className="w-full max-w-xl rounded-2xl border border-negro-borde bg-negro-card p-8 text-center">
            <h2 className="font-titulo text-5xl uppercase tracking-[0.18em] text-texto-base">
              ¡Pedido Confirmado!
            </h2>
            <p className="mt-4 text-base leading-7 text-texto-gris">
              Te contactaremos al número proporcionado para coordinar tu entrega.
            </p>
            <button
              type="button"
              onClick={handleAccept}
              className="mt-8 rounded bg-rojo px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white transition-all duration-200 hover:bg-rojo-hover"
            >
              Aceptar
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

function FormField({ label, name, value, onChange, error, type = "text" }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-texto-base">{label}</span>
      <input type={type} name={name} value={value} onChange={onChange} className="input-base" />
      {error ? <span className="mt-2 block text-sm text-rojo">{error}</span> : null}
    </label>
  );
}

function SelectField({ label, name, value, onChange, error, options }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-texto-base">{label}</span>
      <select name={name} value={value} onChange={onChange} className="input-base">
        <option value="">Selecciona una opción</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? <span className="mt-2 block text-sm text-rojo">{error}</span> : null}
    </label>
  );
}

function PaymentCard({ selected, value, onChange, title, children }) {
  return (
    <label
      className={`block rounded-xl border p-4 transition-colors duration-200 ${
        selected ? "border-rojo bg-rojo/10" : "border-negro-borde bg-negro-card"
      }`}
    >
      <div className="flex items-center gap-3">
        <input
          type="radio"
          name="paymentMethod"
          value={value}
          checked={selected}
          onChange={onChange}
          className="h-4 w-4 accent-rojo"
        />
        <span className="font-semibold text-texto-base">{title}</span>
      </div>
      {children ? <div className="mt-4">{children}</div> : null}
    </label>
  );
}

function validateForm(form, items) {
  const required = [
    "email",
    "firstName",
    "lastName",
    "street",
    "exteriorNumber",
    "postalCode",
    "city",
    "state",
    "neighborhood",
    "phone",
  ];
  const nextErrors = {};

  required.forEach((field) => {
    if (!form[field].trim()) nextErrors[field] = "Este campo es obligatorio.";
  });

  if (form.paymentMethod === "card") {
    ["cardNumber", "cardName", "cardExpiry", "cardCvv"].forEach((field) => {
      if (!form[field].trim()) nextErrors[field] = "Este campo es obligatorio.";
    });
  }

  if (items.length === 0) {
    nextErrors.cart = "Tu carrito está vacío.";
  }

  return nextErrors;
}

export default CheckoutPage;
