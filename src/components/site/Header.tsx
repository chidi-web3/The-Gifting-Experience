import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, ShoppingBag, X } from "lucide-react";
import logo from "@/assets/de-fi-logo.jpg.asset.json";
import { useCart } from "@/lib/cart";

const nav = [
  { to: "/collections", label: "Collections" },
  { to: "/bespoke", label: "Bespoke" },
  { to: "/about", label: "Our Craft" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logo.url}
            alt="de-fi gifts, souvenirs and hampers"
            width={44}
            height={44}
            className="size-11 rounded-sm object-cover"
          />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-2xl tracking-tight">de-fi</span>
            <span className="eyebrow mt-1 text-[0.5rem]">Gifts · Souvenirs · Hampers</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[0.78rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/cart"
            className="relative inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2.5 text-[0.7rem] uppercase tracking-[0.2em] transition-colors hover:border-primary hover:text-primary"
          >
            <ShoppingBag className="size-4" aria-hidden />
            <span className="hidden sm:inline">Bag</span>
            <span className="text-primary">{count}</span>
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-sm border border-border md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 pb-6 pt-4 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm uppercase tracking-[0.2em] text-muted-foreground"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
