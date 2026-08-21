import { createFileRoute, Link } from "@tanstack/react-router";
import { Trash2 } from "lucide-react";
import { formatPrice, getProduct } from "@/data/catalog";
import { useCart } from "@/lib/cart";
import { Container, PageHeader } from "@/components/site/Section";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your bag — de-fi" },
      {
        name: "description",
        content: "Review the gifts in your de-fi bag and add a handwritten note.",
      },
      { property: "og:title", content: "Your bag — de-fi" },
      {
        property: "og:description",
        content: "Review the gifts in your de-fi bag before checkout.",
      },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { lines, subtotal, setQty, remove, giftNote, setGiftNote } = useCart();

  if (lines.length === 0) {
    return (
      <>
        <PageHeader eyebrow="Your bag" title="Nothing wrapped yet." />
        <Container className="py-20">
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Your bag is empty. Start with the house selection, or tell us what
            you have in mind and we'll build it.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/collections"
              className="rounded-sm bg-primary px-7 py-3.5 text-[0.72rem] uppercase tracking-[0.22em] text-primary-foreground"
            >
              Browse gifts
            </Link>
            <Link
              to="/bespoke"
              className="rounded-sm border border-border px-7 py-3.5 text-[0.72rem] uppercase tracking-[0.22em] hover:border-primary hover:text-primary"
            >
              Bespoke hamper
            </Link>
          </div>
        </Container>
      </>
    );
  }

  return (
    <>
      <PageHeader eyebrow="Your bag" title="Before we tie the ribbon." />
      <Container className="grid gap-14 py-16 lg:grid-cols-[1.6fr_1fr]">
        <ul className="divide-y divide-border/70 border-y border-border/70">
          {lines.map((line) => {
            const product = getProduct(line.slug);
            if (!product) return null;
            return (
              <li key={line.slug} className="flex gap-5 py-7">
                <img
                  src={product.image}
                  alt={product.name}
                  width={140}
                  height={170}
                  loading="lazy"
                  className="size-28 shrink-0 rounded-sm object-cover sm:size-32"
                />
                <div className="flex flex-1 flex-col justify-between gap-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <Link
                        to="/product/$slug"
                        params={{ slug: product.slug }}
                        className="font-display text-2xl hover:text-primary"
                      >
                        {product.name}
                      </Link>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {line.wrap.replace(/-/g, " ")}
                      </p>
                    </div>
                    <span className="text-sm text-primary">
                      {formatPrice(product.price * line.qty)}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <label className="sr-only" htmlFor={`qty-${line.slug}`}>
                      Quantity for {product.name}
                    </label>
                    <input
                      id={`qty-${line.slug}`}
                      type="number"
                      min={1}
                      max={99}
                      value={line.qty}
                      onChange={(e) => setQty(line.slug, Number(e.target.value))}
                      className="w-20 rounded-sm border border-border bg-transparent px-3 py-2 text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => remove(line.slug)}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-primary"
                    >
                      <Trash2 className="size-3.5" aria-hidden /> Remove
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <aside className="h-fit rounded-sm border border-border/70 bg-card/40 p-8">
          <p className="eyebrow">Summary</p>
          <div className="mt-6 flex items-baseline justify-between">
            <span className="text-sm text-muted-foreground">Subtotal</span>
            <span className="font-display text-3xl text-primary">
              {formatPrice(subtotal)}
            </span>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Delivery calculated at checkout.
          </p>

          <label
            htmlFor="gift-note"
            className="eyebrow mt-8 block"
          >
            Handwritten note
          </label>
          <textarea
            id="gift-note"
            rows={4}
            value={giftNote}
            onChange={(e) => setGiftNote(e.target.value)}
            placeholder="We'll write this in ink on the tag."
            className="mt-3 w-full rounded-sm border border-border bg-transparent p-4 text-sm outline-none focus:border-primary"
          />

          <Link
            to="/checkout"
            className="mt-8 block rounded-sm bg-primary px-6 py-4 text-center text-[0.72rem] uppercase tracking-[0.22em] text-primary-foreground"
          >
            Continue to checkout
          </Link>
          <Link
            to="/collections"
            className="mt-3 block text-center text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-primary"
          >
            Keep browsing
          </Link>
        </aside>
      </Container>
    </>
  );
}
