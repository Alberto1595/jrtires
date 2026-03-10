import { Routes, Route } from "react-router-dom";
import { CartProvider, useCart } from "./context/CartContext";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

function AppContent() {
  const { toast } = useCart();

  return (
    <div className="min-h-screen bg-negro font-cuerpo text-texto-base">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/carrito" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>

      <div className="pointer-events-none fixed inset-x-0 top-24 z-[70] flex justify-center px-4">
        {toast ? (
          <div className="max-w-md rounded-xl border border-rojo/40 bg-negro-card/95 px-4 py-3 text-sm text-texto-base shadow-lg shadow-rojo/20 backdrop-blur">
            {toast.message}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
