import { Link } from "@tanstack/react-router";
import logo from "@/assets/defi-logo.jpg";
import { group } from "@/data/group";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <img
            src={logo}
            alt={group.name}
            width={64}
            height={64}
            loading="lazy"
            className="size-16 rounded-sm object-cover"
          />
          <p className="mt-6 max-w-sm font-display text-2xl leading-snug text-foreground/90">
            {group.promise}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {group.name} builds a portfolio of businesses and brands — in gifting, food and
            experiences — for people and partners across Africa and beyond.
          </p>
        </div>

        <div>
          <p className="eyebrow">Our Businesses</p>
          <ul className="mt-5 space-y-3">
            <li>
              <Link
                to="/businesses"
                hash="gifting"
                className="text-sm text-muted-foreground transition-colors hover:text-gifting"
              >
                DEFI Gifting Solutions
              </Link>
            </li>
            <li>
              <Link
                to="/businesses"
                hash="epic-taste"
                className="text-sm text-muted-foreground transition-colors hover:text-taste"
              >
                Epic Taste Catering
              </Link>
            </li>
            <li>
              <Link
                to="/businesses"
                hash="experiences"
                className="text-sm text-muted-foreground transition-colors hover:text-exp"
              >
                DEFI Experiences
              </Link>
            </li>
          </ul>

          <p className="eyebrow mt-10">Group</p>
          <ul className="mt-5 space-y-3">
            <li>
              <Link
                to="/about"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                About DEFI
              </Link>
            </li>
            <li>
              <Link
                to="/partnerships"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Partnerships
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Contact</p>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>{group.email}</li>
            <li>{group.phone}</li>
            <li>{group.location}</li>
            <li className="pt-2">
              <Link to="/contact" className="transition-colors hover:text-primary">
                General enquiries
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="rule-gold" />
        <p className="py-8 text-xs uppercase tracking-[0.24em] text-muted-foreground">
          {group.name} — Building Brands. Creating Experiences. Making Impact.
        </p>
      </div>
    </footer>
  );
}
