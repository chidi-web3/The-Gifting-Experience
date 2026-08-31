import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-hamper.jpg";
import heroPurpleGold from "@/assets/hero-purple-gold.jpg";
import craft from "@/assets/craft-wrapping.jpg";
import { businessArms, partnershipPathways } from "@/data/group";
import { Container } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DEFI GROUP — Building Brands. Creating Experiences. Making Impact." },
      {
        name: "description",
        content:
          "DEFI GROUP builds businesses and experiences designed to create value and meaningful connections — gifting, food and lifestyle across Africa.",
      },
      {
        property: "og:title",
        content: "DEFI GROUP — Building Brands. Creating Experiences. Making Impact.",
      },
      {
        property: "og:description",
        content:
          "A growing portfolio of businesses and brands: DEFI Gifting Solutions, Epic Taste and DEFI Experiences.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-20 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:pb-32 lg:pt-28">
          <div>
            <Reveal>
              <p className="eyebrow">DEFI GROUP · Lagos, Nigeria</p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-6 font-display text-5xl leading-[1.04] sm:text-6xl lg:text-[4.6rem]">
                Gifted. Served. Curated.
                <span className="block bronze-text italic">With Intention.</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 max-w-lg">
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  We're the most intentional brand you'll come across. We listen to what's not said
                  and see what's not shown.
                </p>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/businesses"
                  className="inline-flex items-center rounded-sm bg-primary px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Explore DEFI GROUP
                </Link>
                <Link
                  to="/partnerships"
                  className="inline-flex items-center rounded-sm border border-primary/50 px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Work With Us
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150} className="relative">
            <div className="absolute -inset-6 rounded-sm border border-border/60" />
            <img
              src={heroPurpleGold}
              alt="A premium purple and gold DEFI Gifting Solutions gift box"
              width={1400}
              height={1053}
              className="lift relative w-full rounded-sm object-cover"
            />
          </Reveal>
        </div>
      </section>

      <Container>
        <div className="rule-gold" />
      </Container>

      {/* ── Our Ecosystem ────────────────────────────────────── */}
      <section id="ecosystem" className="py-24 lg:py-28">
        <Container>
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Our Ecosystem</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">One group. Three arms.</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Gifting, food, experience — different ways of saying the same thing: you're seen.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border/60 bg-border/60 lg:grid-cols-3">
            {businessArms.map((arm, i) => (
              <Reveal key={arm.slug} delay={i * 90} className={`${arm.softBg} p-9 text-ink`}>
                <div className={`h-1 w-12 rounded-full ${arm.accentText} bg-current`} />
                <p className={`eyebrow mt-7 ${arm.accentText}`}>
                  0{i + 1} — {arm.shortName}
                </p>
                <h3 className="mt-3 font-display text-3xl">{arm.name}</h3>
                <p className="mt-2 font-display text-xl italic text-ink/70">{arm.tagline}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">{arm.description}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <Link
              to="/businesses"
              className="mt-10 inline-block border-b border-bronze pb-1 text-[0.7rem] uppercase tracking-[0.24em] text-bronze-deep transition-colors hover:text-primary"
            >
              Meet the businesses
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* ── Featured Business ────────────────────────────────── */}
      <section className="border-y border-border/60 bg-card/50 py-24 lg:py-28">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow text-gifting">Featured Business</p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl">DEFI Gifting Solutions</h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
                Our flagship consumer-facing arm — corporate and personal gifting, branded
                merchandise and gift experiences that make the recipient feel seen. From single
                celebration boxes to company-wide programmes, every box leaves the studio tied by
                hand.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.18em]">
                <span className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-gifting" aria-hidden />
                  Studio purple
                </span>
                <span className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-gifting-gold" aria-hidden />
                  Gold finish
                </span>
                <span className="text-muted-foreground">Corporate & personal</span>
              </div>
              <div className="mt-10">
                <Link
                  to="/collections"
                  className="inline-flex items-center rounded-sm bg-gifting px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-white transition-opacity hover:opacity-90"
                >
                  Explore DEFI Gifting Solutions
                </Link>
              </div>
            </Reveal>

            <Reveal delay={120} className="relative">
              <div
                className="absolute -bottom-5 -left-5 h-full w-full rounded-sm bg-gifting-soft"
                aria-hidden
              />
              <img
                src={craft}
                alt="Hands tying a ribbon around a DEFI Gifting Solutions box"
                width={1200}
                height={912}
                loading="lazy"
                className="lift relative w-full rounded-sm object-cover"
              />
              <div
                className="absolute -right-3 -top-3 hidden h-20 w-20 rounded-sm border-2 border-gifting-gold sm:block"
                aria-hidden
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── Philosophy ───────────────────────────────────────── */}
      <section className="py-24 lg:py-32">
        <Container>
          <Reveal className="text-center">
            <p className="eyebrow">Our Philosophy</p>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl leading-tight sm:text-6xl">
              Intentional. Curated. Human.
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Everything we create — a gift, a meal, an experience — is designed to make people feel
              seen, valued and remembered. We choose fewer, better things; we sweat the details
              others skip; and we never forget there is a person at the end of every product we
              ship.
            </p>
          </Reveal>

          <dl className="mt-16 grid gap-10 sm:grid-cols-3">
            {[
              [
                "Intentional",
                "Nothing ships by accident. Every choice has a reason someone can point to.",
              ],
              ["Curated", "We edit relentlessly — fewer items, higher standards, no filler."],
              ["Human", "Made by people, for people. Warmth is part of the specification."],
            ].map(([word, detail], i) => (
              <Reveal key={word} delay={i * 90} as="div" className="border-t border-border/70 pt-7">
                <dt className="font-display text-3xl">{word}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{detail}</dd>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      {/* ── Work With DEFI ───────────────────────────────────── */}
      <section className="bg-ink py-24 text-ivory lg:py-28">
        <Container>
          <Reveal className="max-w-2xl">
            <p className="eyebrow !text-gifting-gold">Work With DEFI</p>
            <h2 className="mt-4 font-display text-4xl text-ivory sm:text-5xl">
              There are many ways to build with us.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ivory/70">
              Whether you're buying for ten people or ten thousand, launching a brand or investing
              in one — start the conversation.
            </p>
          </Reveal>

          <ul className="mt-14 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {partnershipPathways.map(({ title, description }, i) => (
              <Reveal key={title} as="li" delay={i * 60} className="border-t border-ivory/15 pt-6">
                <h3 className="font-display text-2xl text-ivory">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/65">{description}</p>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={150}>
            <Link
              to="/partnerships"
              className="mt-14 inline-flex items-center rounded-sm bg-gifting-gold px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-ink transition-opacity hover:opacity-90"
            >
              Partner With DEFI
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* ── About DEFI GROUP ─────────────────────────────────── */}
      <section className="py-24 lg:py-32">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr]">
            <Reveal>
              <img
                src={hero}
                alt="DEFI GROUP craftsmanship"
                width={1408}
                height={1200}
                loading="lazy"
                className="lift aspect-[4/3] w-full rounded-sm object-cover"
              />
            </Reveal>
            <Reveal delay={120}>
              <p className="eyebrow">About DEFI GROUP</p>
              <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
                An institution in the making, not a moment.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
                DEFI GROUP is a parent company building a portfolio of businesses and brands for the
                long term. What began with gifting has grown into food and experiences — each arm
                strengthening the other, all held to the same standard.
              </p>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
                We are African at our core and international in our ambition: building quietly,
                consistently, with partners who share the horizon.
              </p>
              <Link
                to="/about"
                className="mt-9 inline-block border-b border-bronze pb-1 text-[0.7rem] uppercase tracking-[0.24em] text-bronze-deep transition-colors hover:text-primary"
              >
                Read our story
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
