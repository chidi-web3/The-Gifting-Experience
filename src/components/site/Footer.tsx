import { Link } from "@tanstack/react-router";
import logo from "@/assets/de-fi-logo.jpg.asset.json";
import { collections } from "@/data/catalog";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <img
            src={logo.url}
            alt="de-fi"
            width={64}
            height={64}
            loading="lazy"
            className="size-16 rounded-sm object-cover"
          />
          <p className="mt-6 max-w-sm font-display text-2xl leading-snug text-foreground/90">
            Every box leaves the studio tied by hand.
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            de-fi makes gifts, souvenirs and hampers for weddings, boardrooms and
            birthdays — packed so the opening is part of the present.
          </p>
        </div>

        <div>
          <p className="eyebrow">Collections</p>
          <ul className="mt-5 space-y-3">
            {collections.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/collections/$slug"
                  params={{ slug: c.slug }}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Studio</p>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/bespoke" className="transition-colors hover:text-primary">
                Bespoke hampers
              </Link>
            </li>
            <li>
              <Link to="/about" className="transition-colors hover:text-primary">
                Our craft
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="rule-gold" />
        <p className="py-8 text-xs uppercase tracking-[0.24em] text-muted-foreground">
          de-fi — Gifts. Souvenirs. Hampers.
        </p>
      </div>
    </footer>
  );
}
