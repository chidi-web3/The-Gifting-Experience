import { createFileRoute, Link } from "@tanstack/react-router";
import craft from "@/assets/craft-wrapping.jpg";
import { Container, PageHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About DEFI GROUP" },
      {
        name: "description",
        content:
          "DEFI GROUP is a parent company building a portfolio of businesses and brands — gifting, food and experiences — for the long term.",
      },
      { property: "og:title", content: "About DEFI GROUP" },
      {
        property: "og:description",
        content: "Who we are, what we believe, and where DEFI GROUP is going.",
      },
    ],
  }),
  component: AboutPage,
});

const beliefs = [
  [
    "Built to last",
    "We make decisions for the decade, not the quarter. Brands that compound quietly beat brands that spike and fade.",
  ],
  [
    "Quality is the strategy",
    "Every arm of the group competes on the same thing: being genuinely better than people expected. There is no discount version of that.",
  ],
  [
    "African by design",
    "We build from Nigeria outward — our taste, our standards, our relationships. Global in ambition without apologising for where we're from.",
  ],
  [
    "Partnership over transactions",
    "The best work we've done started as a conversation, not an order form. We grow when the people around us grow.",
  ],
] as const;

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About DEFI"
        title="A parent company built on intention."
        intro="DEFI GROUP creates products and experiences that make people feel seen, valued and remembered — one business at a time."
      />

      <Container className="py-16">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <img
              src={craft}
              alt="Hands finishing a product in a DEFI GROUP studio"
              width={1200}
              height={912}
              className="lift w-full rounded-sm object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Who we are</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              A group, not a shop.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              DEFI GROUP is the parent company behind DEFI Gifting Solutions, Epic Taste and DEFI
              Experiences. We identify categories where care is undervalued — gifting, food, shared
              experiences — and build businesses that raise the standard.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Each business runs with its own identity and its own customers. Behind them sits one
              operating philosophy: intentional choices, curated quality, human warmth. That's what
              makes the whole greater than the portfolio.
            </p>
          </Reveal>
        </div>

        {/* Vision + founder */}
        <div className="mt-24 grid gap-px overflow-hidden rounded-sm border border-border/60 bg-border/60 md:grid-cols-2">
          <Reveal className="bg-card p-10 sm:p-14">
            <p className="eyebrow">Our vision</p>
            <h3 className="mt-4 font-display text-3xl leading-snug sm:text-4xl">
              A family of African brands the world trusts.
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              We are building institutions — companies with their own names, their own reputations
              and their own futures — under a group that gives them patience, standards and shared
              strength. In ten years, we intend for DEFI businesses to be part of how Nigerians
              celebrate, eat and gather, and how the world gifts African-made quality.
            </p>
          </Reveal>
          <Reveal delay={100} className="bg-gifting-soft p-10 sm:p-14">
            <p className="eyebrow text-gifting">From the founder</p>
            <blockquote className="mt-4 font-display text-2xl italic leading-snug text-foreground/90 sm:text-[1.7rem]">
              "I didn't start DEFI to sell things. I started it because how we give, eat and
              celebrate says everything about how much we value each other — and I believed that
              could be done better here."
            </blockquote>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Founder, DEFI GROUP
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              What began as one studio has become a growing group — still founder-led, still
              hands-on, now building beyond gifting into food and experiences.
            </p>
          </Reveal>
        </div>

        {/* Beliefs */}
        <div className="mt-24">
          <Reveal>
            <p className="eyebrow">What we believe</p>
            <h3 className="mt-4 max-w-xl font-display text-4xl leading-tight sm:text-5xl">
              Principles that outlast trends.
            </h3>
          </Reveal>
          <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {beliefs.map(([title, body], i) => (
              <Reveal key={title} delay={i * 70} className="border-t border-border/70 pt-6">
                <h4 className="font-display text-2xl">{title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Reveal className="mt-24 rounded-sm border border-primary/30 px-8 py-16 text-center sm:px-16">
          <p className="eyebrow">The long game</p>
          <h3 className="mx-auto mt-4 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
            We're just getting started.
          </h3>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            If you're a customer, a partner or someone who wants to build with us — there's a place
            for you in this story.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/businesses"
              className="inline-flex items-center rounded-sm bg-primary px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              Our Businesses
            </Link>
            <Link
              to="/partnerships"
              className="inline-flex items-center rounded-sm border border-primary/50 px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Partner With DEFI
            </Link>
          </div>
        </Reveal>
      </Container>
    </>
  );
}
