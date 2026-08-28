import { Link } from "@tanstack/react-router";
import { formatPrice, type Product } from "@/data/catalog";
import { Reveal } from "./Reveal";

export function ProductCard({ product, delay = 0 }: { product: Product; delay?: number }) {
  return (
    <Reveal as="article" delay={delay} className="group">
      <Link to="/product/$slug" params={{ slug: product.slug }} className="block">
        <div className="relative overflow-hidden rounded-sm bg-card">
          <img
            src={product.image}
            alt={product.name}
            width={900}
            height={1100}
            loading="lazy"
            className="aspect-[9/11] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
          />
          <div className="pointer-events-none absolute inset-0 veil opacity-70" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 px-5 pb-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="inline-block border-b border-primary pb-1 text-[0.68rem] uppercase tracking-[0.24em] text-primary">
              Open this gift
            </span>
          </div>
        </div>
        <div className="mt-5 flex items-baseline justify-between gap-4">
          <h3 className="font-display text-2xl leading-tight">{product.name}</h3>
          <span className="shrink-0 text-sm text-primary">{formatPrice(product.price)}</span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.blurb}</p>
      </Link>
    </Reveal>
  );
}
