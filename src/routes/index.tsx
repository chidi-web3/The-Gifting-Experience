import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-hamper.jpg";
import craft from "@/assets/craft-wrapping.jpg";
import { collections, products } from "@/data/catalog";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";
import { Container } from "@/components/site/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "de-fi — Gifts. Souvenirs. Hampers." },
      {
        name: "description",
        content:
          "Hand-tied luxury gift boxes and hampers for weddings, corporate gifting, birthdays and the festive season. Wrapped so the opening is part of the gift.",
      },
      { property: "og:title", content: "de-fi — Gifts. Souvenirs. Hampers." },
      {
        property: "og:description",
        content:
          "Hand-tied luxury gift boxes and hampers, wrapped so the opening is part of the gift.",
      },
    ],
  }),
  component: Home,
});

const featured = products.filter((p) => p.featured);

const testimonials = [
  [
    "It arrived and the room went quiet. Nobody wanted to be the one to untie it.",
    "Adaeze · wedding party boxes",
  ],
  [
    "We send fifty client hampers a year. These are the first ones people emailed us about.",
    "Tunde · corporate gifting",
  ],
  [
    "The tissue, the note, the ribbon — she opened it three times.",
    "Ifeoma · birthday box",
  ],
] as const;

const marks = [
  ["Hand-tied", "Every ribbon, every box"],
  ["Bespoke", "Built to your budget and occasion"],
  ["Volume-ready", "From one box to two hundred"],
] as const;

function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-20 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:pb-32 lg:pt-28">
          <div>
            <Reveal>
              <p className="eyebrow">Est. for the well-given gift</p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-6 font-display text-6xl leading-[0.98] sm:text-7xl lg:text-[5.5rem]">
                Unwrapping
                <span className="block foil-text italic">should feel</span>
                like the gift.
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
                de-fi builds gifts, souvenirs and hampers in layers — tissue,
                ribbon, a note in your own words — so the moment of opening
                carries as much as what's inside.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10">
                <Link
                  to="/collections"
                  className="inline-flex items-center rounded-sm bg-primary px-8 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Browse the collections
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150} className="relative">
            <div className="absolute -inset-6 rounded-sm border border-border/50" />
            <img
              src={hero}
              alt="Purple and gold luxury gift hamper tied with a gold ribbon"
              width={1408}
              height={1200}
              className="lift relative w-full rounded-sm object-cover"
            />
          </Reveal>
        </div>
      </section>

      <Container>
        <div className="rule-gold" />
      </Container>

      <section className="py-24">
        <Container>
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">The house selection</p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl">
                Gifts we're known for
              </h2>
            </div>
            <Link
              to="/collections"
              className="border-b border-primary pb-1 text-[0.7rem] uppercase tracking-[0.24em] text-primary"
            >
              See everything
            </Link>
          </Reveal>

          <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product, i) => (
              <ProductCard key={product.slug} product={product} delay={i * 80} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border/60 bg-card/40 py-20">
        <Container>
          <Reveal>
            <p className="eyebrow">Gifting by occasion</p>
          </Reveal>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-5">
            {collections.map((c, i) => (
              <Reveal as="li" key={c.slug} delay={i * 60} className="bg-background">
                <Link
                  to="/collections/$slug"
                  params={{ slug: c.slug }}
                  className="flex h-full flex-col justify-between gap-6 p-7 transition-colors hover:bg-card"
                >
                  <span className="font-display text-3xl">{c.name}</span>
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {c.tagline}
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-28">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <img
                src={craft}
                alt="Hands tying a gold ribbon around a purple wrapped gift"
                width={1200}
                height={912}
                loading="lazy"
                className="lift w-full rounded-sm object-cover"
              />
            </Reveal>
            <Reveal delay={120}>
              <p className="eyebrow">Packed by hand, in-house</p>
              <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
                Nothing leaves the studio machine-sealed.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Each box is built in order: rigid case, tissue in the house
                purple, contents set by weight so nothing shifts, then a satin
                ribbon tied by hand and a tag written in ink. It takes longer.
                It shows.
              </p>
              <dl className="mt-10 grid gap-8 sm:grid-cols-3">
                {marks.map(([term, detail]) => (
                  <div key={term}>
                    <dt className="text-sm uppercase tracking-[0.18em] text-primary">
                      {term}
                    </dt>
                    <dd className="mt-2 text-sm text-muted-foreground">{detail}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-28">
        <Container>
          <div className="grid gap-10 rounded-sm border border-border/60 bg-card/40 p-10 sm:p-14 lg:grid-cols-3">
            {testimonials.map(([quote, who], i) => (
              <Reveal key={who} delay={i * 90}>
                <p className="font-display text-2xl leading-snug">"{quote}"</p>
                <p className="mt-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {who}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-32">
        <Container>
          <Reveal className="rounded-sm border border-primary/40 px-8 py-16 text-center sm:px-16">
            <p className="eyebrow">Something entirely yours</p>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
              Tell us the occasion. We'll build the box around it.
            </h2>
            <Link
              to="/bespoke"
              className="mt-10 inline-flex items-center rounded-sm bg-primary px-8 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              Start a bespoke hamper
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
