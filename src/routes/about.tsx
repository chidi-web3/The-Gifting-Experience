import { createFileRoute, Link } from "@tanstack/react-router";
import craft from "@/assets/craft-wrapping.jpg";
import fragrance from "@/assets/gift-fragrance.jpg";
import { Container, PageHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Craft — de-fi Gifts, Souvenirs & Hampers" },
      {
        name: "description",
        content:
          "How de-fi builds a gift: rigid boxes, house purple tissue, hand-tied satin and a note written in ink. Packed in-house, never machine-sealed.",
      },
      { property: "og:title", content: "Our Craft — de-fi" },
      {
        property: "og:description",
        content: "How de-fi builds a gift, layer by layer, entirely by hand.",
      },
    ],
  }),
  component: AboutPage,
});

const principles = [
  [
    "Weight before volume",
    "A box that feels substantial in the hand beats a box that looks full. We set contents by weight so nothing shifts in transit.",
  ],
  [
    "One ribbon, tied once",
    "Every bow is hand-tied and adjusted. If it doesn't sit right, the whole box gets rewrapped.",
  ],
  [
    "Ink, not print",
    "Notes and tags are written by hand. It takes longer and it's the first thing people mention.",
  ],
  [
    "Nothing filler",
    "If an item is in the box only to take up space, it comes out. Fewer, better pieces.",
  ],
] as const;

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our craft"
        title="A gift is an object and a moment. We make both."
        intro="de-fi began with one hamper packed on a kitchen table and a stubborn belief that unwrapping should feel like something."
      />

      <Container className="py-16">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <img
              src={craft}
              alt="Hands tying a gold satin ribbon around a purple gift box"
              width={1200}
              height={912}
              className="lift w-full rounded-sm object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              Built in layers, in order, by hand.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Rigid case first. Tissue in the house purple, folded rather than
              crumpled. Contents laid so the heaviest sits lowest and the piece
              you should see first sits highest. Then the ribbon, then the tag.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Nothing leaves the studio machine-sealed and nothing goes out
              unphotographed — you see the finished box before the recipient does.
            </p>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-px overflow-hidden rounded-sm border border-border/60 bg-border/60 sm:grid-cols-2">
          {principles.map(([title, body], i) => (
            <Reveal key={title} delay={i * 70} className="bg-background p-9">
              <h3 className="font-display text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 grid items-center gap-14 lg:grid-cols-2">
          <Reveal delay={80} className="order-2 lg:order-1">
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              Sourced close, chosen slowly.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Candles are hand-poured. Chocolate is tempered by a maker we've
              worked with for years. Ceramics come from a small studio that
              throws in small batches. When we can't get something to the
              standard, we leave it out rather than substitute quietly.
            </p>
            <Link
              to="/collections"
              className="mt-9 inline-block rounded-sm bg-primary px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-primary-foreground"
            >
              See what's in the house
            </Link>
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <img
              src={fragrance}
              alt="Hand-poured candle and fragrance gift set in purple and gold packaging"
              width={1000}
              height={1000}
              loading="lazy"
              className="lift w-full rounded-sm object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </>
  );
}
