import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { formatPrice } from "@/data/catalog";
import { Container, PageHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/bespoke")({
  head: () => ({
    meta: [
      { title: "Bespoke Hampers — DEFI Gifting Solutions" },
      {
        name: "description",
        content:
          "Commission a bespoke hamper from DEFI Gifting Solutions — tell us the occasion, budget and quantity and we'll build the box around it.",
      },
      { property: "og:title", content: "Bespoke Hampers — DEFI Gifting Solutions" },
      {
        property: "og:description",
        content: "Commission a hamper built around your occasion and budget.",
      },
    ],
  }),
  component: BespokePage,
});

const occasionOptions = ["Wedding", "Corporate", "Birthday", "Festive", "Thank you", "Other"];

const bands = [
  { id: "band-1", label: "Up to ₦50,000 per box", min: 0 },
  { id: "band-2", label: "₦50,000 – ₦120,000 per box", min: 50000 },
  { id: "band-3", label: "₦120,000 – ₦250,000 per box", min: 120000 },
  { id: "band-4", label: "₦250,000 and above", min: 250000 },
];

const steps = [
  ["01", "Tell us the occasion", "Who it's for, when it lands, how many boxes."],
  ["02", "We propose", "A written concept with contents, wrapping and pricing."],
  ["03", "We build", "Packed by hand, photographed, then delivered on your date."],
] as const;

function BespokePage() {
  const [occasion, setOccasion] = useState(occasionOptions[0] ?? "Wedding");
  const [band, setBand] = useState(bands[1]?.id ?? "band-2");
  const [qty, setQty] = useState(25);

  const estimate = (bands.find((b) => b.id === band)?.min ?? 0) * qty;

  return (
    <>
      <PageHeader
        eyebrow="DEFI Gifting Solutions"
        title="Tell us the occasion. We'll build the box around it."
        intro="From one anniversary box to two hundred conference hampers — same hands, same ribbon."
      />

      <Container className="py-16">
        <ol className="grid gap-px overflow-hidden rounded-sm border border-border/60 bg-border/60 md:grid-cols-3">
          {steps.map(([n, title, body], i) => (
            <Reveal as="li" key={n} delay={i * 80} className="bg-background p-8">
              <span className="font-display text-4xl text-primary">{n}</span>
              <h2 className="mt-4 font-display text-2xl">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </Reveal>
          ))}
        </ol>

        <div className="mt-20 grid gap-14 lg:grid-cols-[1.5fr_1fr]">
          <form
            className="space-y-7"
            onSubmit={(e) => {
              e.preventDefault();
              e.currentTarget.reset();
              toast.success("Enquiry sent — we'll reply within one working day");
            }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="b-name" className="eyebrow block">
                  Your name
                </label>
                <input
                  id="b-name"
                  required
                  autoComplete="name"
                  className="mt-3 w-full rounded-sm border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="b-email" className="eyebrow block">
                  Email
                </label>
                <input
                  id="b-email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-3 w-full rounded-sm border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-primary"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="b-occasion" className="eyebrow block">
                  Occasion
                </label>
                <select
                  id="b-occasion"
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="mt-3 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                >
                  {occasionOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="b-qty" className="eyebrow block">
                  How many boxes
                </label>
                <input
                  id="b-qty"
                  type="number"
                  min={1}
                  max={2000}
                  value={qty}
                  onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
                  className="mt-3 w-full rounded-sm border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-primary"
                />
              </div>
            </div>

            <fieldset>
              <legend className="eyebrow">Budget per box</legend>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {bands.map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => setBand(b.id)}
                    aria-pressed={band === b.id}
                    className={`rounded-sm border px-5 py-3.5 text-left text-sm transition-colors ${
                      band === b.id
                        ? "border-primary text-primary"
                        : "border-border text-muted-foreground hover:border-primary/60"
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </fieldset>

            <div>
              <label htmlFor="b-brief" className="eyebrow block">
                What should be inside?
              </label>
              <textarea
                id="b-brief"
                rows={5}
                placeholder="Branding, dietary notes, colours, delivery date — anything that matters."
                className="mt-3 w-full rounded-sm border border-border bg-transparent p-4 text-sm outline-none focus:border-primary"
              />
            </div>

            <button
              type="submit"
              className="rounded-sm bg-primary px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              Send enquiry
            </button>
          </form>

          <aside className="h-fit rounded-sm border border-border/70 bg-card/40 p-8">
            <p className="eyebrow">Working estimate</p>
            <p className="mt-6 font-display text-4xl text-primary">from {formatPrice(estimate)}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {qty} {qty === 1 ? "box" : "boxes"} for {occasion.toLowerCase()}. A guide only — we'll
              send exact pricing with the concept.
            </p>
            <div className="rule-gold my-7" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Volume orders over 100 boxes are quoted with a dedicated packing schedule and staged
              delivery.
            </p>
          </aside>
        </div>
      </Container>
    </>
  );
}
