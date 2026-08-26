import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { formatPrice, getProduct } from "@/data/catalog";
import { useCart } from "@/lib/cart";
import { Container, PageHeader } from "@/components/site/Section";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — DEFI Gifting Solutions" },
      {
        name: "description",
        content: "Complete your DEFI Gifting gift order — delivery details and gift note.",
      },
      { property: "og:title", content: "Checkout — DEFI Gifting Solutions" },
      {
        property: "og:description",
        content: "Complete your DEFI Gifting gift order.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CheckoutPage,
});

const fields = [
  { id: "name", label: "Your name", type: "text", autoComplete: "name" },
  { id: "email", label: "Email", type: "email", autoComplete: "email" },
  { id: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
  { id: "recipient", label: "Recipient name", type: "text", autoComplete: "off" },
] as const;

function CheckoutPage() {
  const { lines, subtotal, giftNote, clear } = useCart();
  const navigate = useNavigate();
  const [placed, setPlaced] = useState(false);

  const delivery = lines.length > 0 ? 7500 : 0;

  if (placed) {
    return (
      <>
        <PageHeader eyebrow="Order received" title="It's in the studio now." />
        <Container className="py-20">
          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
            Thank you. We'll confirm your order by email within a few hours and share a photograph
            of the finished box before it leaves us.
          </p>
          <Link
            to="/"
            className="mt-8 inline-block rounded-sm bg-primary px-7 py-3.5 text-[0.72rem] uppercase tracking-[0.22em] text-primary-foreground"
          >
            Back to the studio
          </Link>
        </Container>
      </>
    );
  }

  if (lines.length === 0) {
    return (
      <>
        <PageHeader eyebrow="Checkout" title="Your bag is empty." />
        <Container className="py-20">
          <Link
            to="/collections"
            className="inline-block rounded-sm bg-primary px-7 py-3.5 text-[0.72rem] uppercase tracking-[0.22em] text-primary-foreground"
          >
            Browse gifts
          </Link>
        </Container>
      </>
    );
  }

  return (
    <>
      <PageHeader eyebrow="Checkout" title="Where is it going?" />
      <Container className="grid gap-14 py-16 lg:grid-cols-[1.4fr_1fr]">
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            clear();
            setPlaced(true);
            toast.success("Order received — we'll be in touch shortly");
            navigate({ to: "/checkout" });
          }}
        >
          <div className="grid gap-6 sm:grid-cols-2">
            {fields.map((f) => (
              <div key={f.id}>
                <label htmlFor={f.id} className="eyebrow block">
                  {f.label}
                </label>
                <input
                  id={f.id}
                  name={f.id}
                  type={f.type}
                  autoComplete={f.autoComplete}
                  required
                  className="mt-3 w-full rounded-sm border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-primary"
                />
              </div>
            ))}
          </div>

          <div>
            <label htmlFor="address" className="eyebrow block">
              Delivery address
            </label>
            <textarea
              id="address"
              name="address"
              rows={4}
              required
              className="mt-3 w-full rounded-sm border border-border bg-transparent p-4 text-sm outline-none focus:border-primary"
            />
          </div>

          <div>
            <label htmlFor="date" className="eyebrow block">
              Preferred delivery date
            </label>
            <input
              id="date"
              name="date"
              type="date"
              className="mt-3 w-full rounded-sm border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-primary sm:w-64"
            />
          </div>

          <button
            type="submit"
            className="rounded-sm bg-primary px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            Place order
          </button>
          <p className="text-xs leading-relaxed text-muted-foreground">
            We confirm every order personally before taking payment, so nothing is charged at this
            step.
          </p>
        </form>

        <aside className="h-fit rounded-sm border border-border/70 bg-card/40 p-8">
          <p className="eyebrow">Your gift</p>
          <ul className="mt-6 space-y-4">
            {lines.map((line) => {
              const product = getProduct(line.slug);
              if (!product) return null;
              return (
                <li key={line.slug} className="flex justify-between gap-4 text-sm">
                  <span className="text-muted-foreground">
                    {product.name} × {line.qty}
                  </span>
                  <span>{formatPrice(product.price * line.qty)}</span>
                </li>
              );
            })}
          </ul>
          <div className="rule-gold my-6" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="mt-2 flex justify-between text-sm text-muted-foreground">
            <span>Delivery</span>
            <span>{formatPrice(delivery)}</span>
          </div>
          <div className="mt-5 flex items-baseline justify-between">
            <span className="eyebrow">Total</span>
            <span className="font-display text-3xl text-primary">
              {formatPrice(subtotal + delivery)}
            </span>
          </div>
          {giftNote && (
            <p className="mt-6 border-t border-border/60 pt-5 text-sm italic leading-relaxed text-muted-foreground">
              "{giftNote}"
            </p>
          )}
        </aside>
      </Container>
    </>
  );
}
