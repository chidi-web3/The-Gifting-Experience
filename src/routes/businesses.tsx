import { createFileRoute, Link } from "@tanstack/react-router";
import heroHamper from "@/assets/hero-hamper.jpg";
import epicTasteFood from "@/assets/gift-epic-taste-food.jpg";
import experience from "@/assets/defi-experience.jpg";
import { businessArms, type ArmSlug } from "@/data/group";
import { Container, PageHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/businesses")({
  head: () => ({
    meta: [
      { title: "Our Businesses — DEFI GROUP" },
      {
        name: "description",
        content:
          "Meet the DEFI GROUP portfolio: DEFI Gifting Solutions, Epic Taste and DEFI Experiences — one group, three businesses.",
      },
      { property: "og:title", content: "Our Businesses — DEFI GROUP" },
      {
        property: "og:description",
        content: "DEFI Gifting Solutions, Epic Taste and DEFI Experiences — explore the ecosystem.",
      },
    ],
  }),
  component: BusinessesPage,
});

/** Per-arm visual identity for the detail panels. */
const armVisuals: Record<
  ArmSlug,
  {
    image?: string;
    alt?: string;
    panelBg: string;
    rule: string;
    cta?: { to: string; label: string; className: string };
  }
> = {
  gifting: {
    image: heroHamper,
    alt: "A premium hand-tied gift hamper by DEFI Gifting Solutions",
    panelBg: "bg-gifting-soft",
    rule: "border-gifting/50",
    cta: {
      to: "/collections",
      label: "Explore DEFI Gifting Solutions",
      className:
        "inline-flex items-center rounded-sm bg-gifting px-7 py-3.5 text-[0.7rem] uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-90",
    },
  },
  "epic-taste": {
    image: epicTasteFood,
    alt: "Signature plates from Epic Taste Catering",
    panelBg: "bg-taste-soft",
    rule: "border-taste/50",
    cta: {
      to: "/enquire-epic-taste",
      label: "Enquire About Epic Taste",
      className:
        "inline-flex items-center rounded-sm bg-taste px-7 py-3.5 text-[0.7rem] uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-90",
    },
  },
  experiences: {
    image: experience,
    alt: "A DEFI Experiences moment",
    panelBg: "bg-exp-soft",
    rule: "border-exp/50",
    cta: {
      to: "/enquire-experiences",
      label: "Enquire About DEFI Experiences",
      className:
        "inline-flex items-center rounded-sm bg-exp px-7 py-3.5 text-[0.7rem] uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-90",
    },
  },
};

function BusinessesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Businesses"
        title="One group. Three ways to matter."
        intro="Each business in the DEFI GROUP portfolio carries its own identity and audience — connected by one standard of quality."
      />

      <Container className="space-y-24 py-20">
        {businessArms.map((arm, i) => {
          const visual = armVisuals[arm.slug];
          const flip = i % 2 === 1;
          return (
            <section key={arm.slug} id={arm.slug} className="scroll-mt-28">
              <div className="grid items-center gap-14 lg:grid-cols-2">
                <Reveal className={flip ? "order-2 lg:order-1" : ""}>
                  <p className={`eyebrow ${arm.accentText}`}>
                    0{i + 1} · {arm.name}
                  </p>
                  <h2
                    className={`mt-4 border-t-2 pt-6 font-display text-4xl leading-tight sm:text-5xl ${visual.rule}`}
                  >
                    {arm.tagline}
                  </h2>
                  <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
                    {arm.description}
                  </p>
                  <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {arm.offerings.map((item) => (
                      <li
                        key={item}
                        className={`flex items-start gap-3 border-t pt-3 text-sm text-foreground/85`}
                      >
                        <span
                          className={`mt-1.5 size-1.5 shrink-0 rounded-full ${arm.accentText} bg-current`}
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10 flex flex-wrap items-center gap-4">
                    {visual.cta ? (
                      <Link to={visual.cta.to} className={visual.cta.className}>
                        {visual.cta.label}
                      </Link>
                    ) : (
                      <Link
                        to="/contact"
                        className="inline-flex items-center rounded-sm bg-primary px-7 py-3.5 text-[0.7rem] uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
                      >
                        Enquire about {arm.shortName}
                      </Link>
                    )}
                  </div>
                </Reveal>

                <Reveal delay={120} className={flip ? "order-1 lg:order-2" : ""}>
                  <div className={`relative`}>
                    <div className={`absolute -inset-4 rounded-sm ${visual.panelBg}`} aria-hidden />
                    {visual.image && (
                      <img
                        src={visual.image}
                        alt={visual.alt ?? arm.name}
                        width={1200}
                        height={912}
                        loading={i === 0 ? "eager" : "lazy"}
                        className="lift relative aspect-[4/3] w-full rounded-sm object-cover"
                      />
                    )}
                  </div>
                </Reveal>
              </div>
            </section>
          );
        })}

        <Reveal className="rounded-sm border border-primary/30 px-8 py-16 text-center sm:px-16">
          <p className="eyebrow">And this is only the beginning</p>
          <h3 className="mx-auto mt-4 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
            The portfolio is growing.
          </h3>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            New businesses are in the works. If you'd like to build one with us, we'd like to hear
            from you.
          </p>
          <Link
            to="/partnerships"
            className="mt-9 inline-flex items-center rounded-sm bg-primary px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            Partner With DEFI
          </Link>
        </Reveal>
      </Container>
    </>
  );
}
