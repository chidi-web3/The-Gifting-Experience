import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getProduct } from "@/data/catalog";

export interface CartLine {
  slug: string;
  qty: number;
  wrap: string;
  note?: string;
}

interface CartValue {
  lines: CartLine[];
  count: number;
  subtotal: number;
  add: (line: CartLine) => void;
  setQty: (slug: string, qty: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
  giftNote: string;
  setGiftNote: (note: string) => void;
}

const STORAGE_KEY = "de-fi-cart-v1";

const CartContext = createContext<CartValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [giftNote, setGiftNote] = useState("");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as { lines?: CartLine[]; note?: string };
        if (Array.isArray(parsed.lines)) setLines(parsed.lines);
        if (typeof parsed.note === "string") setGiftNote(parsed.note);
      }
    } catch {
      /* ignore malformed storage */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ lines, note: giftNote }),
    );
  }, [lines, giftNote, hydrated]);

  const add = useCallback((line: CartLine) => {
    setLines((current) => {
      const existing = current.find(
        (l) => l.slug === line.slug && l.wrap === line.wrap,
      );
      if (existing) {
        return current.map((l) =>
          l === existing ? { ...l, qty: l.qty + line.qty } : l,
        );
      }
      return [...current, line];
    });
  }, []);

  const setQty = useCallback((slug: string, qty: number) => {
    setLines((current) =>
      qty <= 0
        ? current.filter((l) => l.slug !== slug)
        : current.map((l) => (l.slug === slug ? { ...l, qty } : l)),
    );
  }, []);

  const remove = useCallback((slug: string) => {
    setLines((current) => current.filter((l) => l.slug !== slug));
  }, []);

  const clear = useCallback(() => {
    setLines([]);
    setGiftNote("");
  }, []);

  const value = useMemo<CartValue>(() => {
    const count = lines.reduce((sum, l) => sum + l.qty, 0);
    const subtotal = lines.reduce((sum, l) => {
      const product = getProduct(l.slug);
      return sum + (product ? product.price * l.qty : 0);
    }, 0);
    return {
      lines,
      count,
      subtotal,
      add,
      setQty,
      remove,
      clear,
      giftNote,
      setGiftNote,
    };
  }, [lines, giftNote, add, setQty, remove, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
