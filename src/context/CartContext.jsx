import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "jrtires-cart";

export function CartProvider({ children }) {
  const toastTimeoutRef = useRef(null);
  const [items, setItems] = useState(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });
  const [toast, setToast] = useState(null);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) {
        window.clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  const showToast = (message) => {
    setToast({ id: Date.now(), message });

    if (toastTimeoutRef.current) {
      window.clearTimeout(toastTimeoutRef.current);
    }

    toastTimeoutRef.current = window.setTimeout(() => {
      setToast(null);
    }, 2600);
  };

  const addItem = (product) => {
    setItems((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) {
        return current.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...current, { ...product, quantity: 1 }];
    });
    showToast(`Agregaste "${product.name}" al carrito.`);
  };

  const removeItem = (productId) => {
    setItems((current) => current.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setItems((current) =>
      current
        .map((item) =>
          item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const clearCart = () => setItems([]);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const value = useMemo(
    () => ({
      items,
      itemCount,
      total,
      toast,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
    }),
    [items, itemCount, total, toast],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
