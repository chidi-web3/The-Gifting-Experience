import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, ShoppingBag, X } from "lucide-react";
import logo from "@/assets/defi-logo.jpg";
import { useCart } from "@/lib/cart";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About DEFI" },
  { to: "/businesses", label: "Our Businesses" },
  { to: "/partnerships", label: "Partnerships" },
  { to: "/contact", label: "Contact" },
] as const;

/** Routes belonging to the DEFI Gifting Solutions storefront. */
const shopPrefixes = ["/collections", "/product/", "/cart", "/checkout"];

export function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const inShop = shopPrefixes.some((p) => pathname.startsWith(p)) || pathname === "/bespoke";

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="DEFI GROUP"
            width={44}
            height={44}
            className="size-11 rounded-sm object-cover"
          />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-[1.35rem] tracking-wide">DEFI GROUP</span>
            <span className="eyebrow mt-1 text-[0.45rem]">Gift · Food · Experience</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[0.78rem] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {inShop && (
            <Link
              to="/cart"
              aria-label={`Bag, ${count} items`}
              className="relative inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2.5 text-[0.7rem] uppercase tracking-[0.2em] transition-colors hover:border-primary hover:text-primary"
            >
              <ShoppingBag className="size-4" aria-hidden />
              <span className="hidden sm:inline">Bag</span>
              <span className="text-primary">{count}</span>
            </Link>
          )}
          <Link
            to="/partnerships"
            className="hidden rounded-sm bg-primary px-6 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90 md:inline-flex"
          >
            Work With Us
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-sm border border-border lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 pb-6 pt-4 lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm uppercase tracking-[0.18em] text-muted-foreground"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/partnerships"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex rounded-sm bg-primary px-6 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-primary-foreground"
          >
            Work With Us
          </Link>
        </nav>
      )}
    </header>
  );
}
