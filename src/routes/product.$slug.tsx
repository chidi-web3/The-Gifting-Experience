import { useState } from "react";
import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { Check, Minus, Plus } from "lucide-react";
import { formatPrice, getProduct, productsIn } from "@/data/catalog";
import { useCart } from "@/lib/cart";
import { Container } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ProductCard } from "@/components/site/ProductCard";

const wraps = [
  { id: "house-purple", label: "House purple + gold satin" },
  { id: "ivory", label: "Ivory + champagne ribbon" },
  { id: "kraft", label: "Kraft + raw silk cord" },
] as const;

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Gift not found — DEFI Gifting Solutions" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { product } = loaderData;
    const title = `${product.name} — DEFI Gifting Solutions`;
    return {
      meta: [
        { title },
        { name: "description", content: product.blurb },
        { property: "og:title", content: title },
        { property: "og:description", content: product.blurb },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const [wrap, setWrap] = useState<string>(wraps[0].id);

  const related = productsIn(product.collection)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  function addToBag(goToBag: boolean) {
    add({ slug: product.slug, qty, wrap });
    toast.success(`${product.name} added to your bag`);
    if (goToBag) navigate({ to: "/cart" });
  }

  return (
    <>
      <Container className="py-14">
        <nav className="text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground">
          <Link to="/collections" className="hover:text-primary">
            Collections
          </Link>
          <span className="px-2">/</span>
          <span className="text-foreground/80">{product.name}</span>
        </nav>

        <div className="mt-10 grid gap-14 lg:grid-cols-2">
          <Reveal>
            <img
              src={product.image}
              alt={product.name}
              width={1000}
              height={1200}
              className="w-full rounded-sm object-cover"
            />
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-display text-5xl leading-tight sm:text-6xl">{product.name}</h1>
            <p className="mt-5 text-xl text-primary">{formatPrice(product.price)}</p>
            {product.moq && (
              <p className="mt-1 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                Per piece · Minimum order {product.moq}
              </p>
            )}
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            <div className="mt-10">
              <p className="eyebrow">Inside the box</p>
              <ul className="mt-5 space-y-3">
                {product.contents.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <fieldset className="mt-10">
              <legend className="eyebrow">Wrapping</legend>
              <div className="mt-5 flex flex-wrap gap-3">
                {wraps.map((w) => (
                  <button
                    key={w.id}
                    type="button"
                    onClick={() => setWrap(w.id)}
                    aria-pressed={wrap === w.id}
                    className={`rounded-sm border px-5 py-3 text-[0.7rem] uppercase tracking-[0.18em] transition-colors ${
                      wrap === w.id
                        ? "border-primary text-primary"
                        : "border-border text-muted-foreground hover:border-primary/60"
                    }`}
                  >
                    {w.label}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <div className="flex items-center rounded-sm border border-border">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="inline-flex size-12 items-center justify-center text-muted-foreground hover:text-primary"
                >
                  <Minus className="size-4" />
                </button>
                <span className="w-10 text-center text-sm">{qty}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQty((q) => Math.min(99, q + 1))}
                  className="inline-flex size-12 items-center justify-center text-muted-foreground hover:text-primary"
                >
                  <Plus className="size-4" />
                </button>
              </div>

              <button
                type="button"
                onClick={() => addToBag(false)}
                className="rounded-sm bg-primary px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                Add to bag
              </button>
              <button
                type="button"
                onClick={() => addToBag(true)}
                className="rounded-sm border border-border px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] transition-colors hover:border-primary hover:text-primary"
              >
                Add &amp; review bag
              </button>
            </div>

            <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
              Packed by hand within 48 hours. Nationwide delivery, with a handwritten note included
              at checkout at no extra cost.
            </p>
          </Reveal>
        </div>
      </Container>

      {related.length > 0 && (
        <Container className="pb-24">
          <div className="rule-gold" />
          <h2 className="mt-14 font-display text-3xl sm:text-4xl">Others from this collection</h2>
          <div className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <ProductCard key={p.slug} product={p} delay={i * 80} />
            ))}
          </div>
        </Container>
      )}
    </>
  );
}
