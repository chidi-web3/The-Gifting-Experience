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
          "DEFI Group is an original born collective of brands built around one idea: intention — DEFI Gifting Solutions, Epic Taste Catering and DEFI Experiences.",
      },
      { property: "og:title", content: "About DEFI GROUP" },
      {
        property: "og:description",
        content:
          "Who we are, our vision, what we believe — and a note from our founder.",
      },
    ],
  }),
  component: AboutPage,
});

const beliefs = [
  [
    "Details carry meaning",
    "The right gift, meal, or experience says what words often can't.",
  ],
  [
    "Relationships outlast transactions",
    "We build for the long term, not the one-off.",
  ],
  [
    "Every brand under DEFI is ours",
    "It is original, warm, and unmistakably intentional.",
  ],
] as const;

const founderNote = [
  "DEFI Group didn't start as a business plan. It started with a moment in my own life when things were hard — genuinely hard — and what pulled me through wasn't grand gestures. It was intentionality. Someone paid attention. Someone saw what I didn't say out loud and showed up for it anyway.",
  "That stayed with me.",
  "I started DEFI because I wanted to give other people that same feeling — to be seen, without having to ask. Whether it's a gift, a meal, or an experience we curate, the goal has never just been to deliver something beautiful. It's to make someone feel like they matter, the way I was made to feel like I mattered when I needed it most.",
  "That's why \"intentional\" isn't a brand word for us. It's personal. It's where everything from DEFI Gifting Solutions, Epic Taste Catering to DEFI Experiences actually comes from.",
] as const;

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About DEFI"
        title="A parent company built on intention."
        intro="DEFI Group creates products and experiences that make people feel seen, valued and remembered — one business at a time."
      />

      <Container className="py-16">
        {/* Who we are */}
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
              A group solving three problems with one solution.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              DEFI Group is an original born collective of brands built around one idea: intention.
              What started in 2019 has grown into three businesses — DEFI Gifting Solutions, Epic
              Taste Catering, and DEFI Experiences. Each solving a different part of how people
              connect, celebrate, and show up for each other.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We're not three businesses. We're a group solving three problems with one solution.
            </p>
          </Reveal>
        </div>

        {/* Vision + Founder's note */}
        <div className="mt-24 grid gap-px overflow-hidden rounded-sm border border-border/60 bg-border/60 md:grid-cols-2">
          <Reveal className="bg-card p-10 sm:p-14">
            <p className="eyebrow">Our vision</p>
            <h3 className="mt-4 font-display text-3xl leading-snug sm:text-4xl">
              A memorable feeling, traced only to our brand.
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              To give a memorable feeling that can be traced only to our brand. To become the name
              people trust when a moment matters — whether that's a corporate gift that says more
              than words could, a table set for an unforgettable event, or an experience someone
              will talk about for years.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              We're building toward a future where DEFI Group is synonymous with intentional living
              and giving across Africa and beyond.
            </p>
          </Reveal>
          <Reveal delay={100} className="bg-gifting-soft p-10 text-ink sm:p-14">
            <p className="eyebrow text-gifting">From the Founder's Note</p>
            <blockquote className="mt-4 space-y-4">
              {founderNote.map((paragraph) => (
                <p
                  key={paragraph}
                  className="font-display text-lg italic leading-snug text-ink/90 sm:text-xl"
                >
                  {paragraph}
                </p>
              ))}
            </blockquote>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-ink/60">
              Deborah · Founder, DEFI Group
            </p>
          </Reveal>
        </div>

        {/* What we believe */}
        <div className="mt-24">
          <Reveal>
            <p className="eyebrow">What we believe</p>
            <h3 className="mt-4 max-w-xl font-display text-4xl leading-tight sm:text-5xl">
              The most intentional brand you'll come across.
            </h3>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              We listen to what's not said and see what's not shown. We believe:
            </p>
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