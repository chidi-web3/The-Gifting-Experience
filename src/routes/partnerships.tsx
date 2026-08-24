import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { partnershipPathways, group } from "@/data/group";
import { Container, PageHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/partnerships")({
  head: () => ({
    meta: [
      { title: "Partnerships — DEFI GROUP" },
      {
        name: "description",
        content:
          "Corporate partnerships, bulk orders, brand collaborations, event partnerships and strategic conversations — work with DEFI GROUP.",
      },
      { property: "og:title", content: "Partnerships — DEFI GROUP" },
      {
        property: "og:description",
        content: "There are many ways to build with DEFI. Start the conversation.",
      },
    ],
  }),
  component: PartnershipsPage,
});

const enquiryTypes = [...partnershipPathways.map((p) => p.title), "Something else"] as const;

function PartnershipsPage() {
  const [enquiry, setEnquiry] = useState<string>(enquiryTypes[0]);

  return (
    <>
      <PageHeader
        eyebrow="Partnerships"
        title="Let's build something that lasts."
        intro="DEFI GROUP works with corporates, brands, event owners and investors. Tell us where you're headed and we'll tell you honestly how we can help."
      />

      <Container className="grid gap-16 py-16 lg:grid-cols-[1fr_1.1fr]">
        {/* Pathways */}
        <div>
          <Reveal>
            <p className="eyebrow">Ways to work together</p>
          </Reveal>
          <ul className="mt-8 space-y-8">
            {partnershipPathways.map(({ title, description }, i) => (
              <Reveal key={title} as="li" delay={i * 60} className="border-t border-border/70 pt-5">
                <h2 className="font-display text-2xl">{title}</h2>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={120} className="mt-12 rounded-sm bg-card p-8">
            <p className="eyebrow">Prefer to talk first?</p>
            <p className="mt-4 space-y-1 text-sm leading-relaxed text-muted-foreground">
              Write to{" "}
              <a
                href={`mailto:${group.email}`}
                className="text-primary underline-offset-4 hover:underline"
              >
                {group.email}
              </a>{" "}
              or call {group.phone}. A person replies within one working day.
            </p>
          </Reveal>
        </div>

        {/* Enquiry form */}
        <Reveal delay={100}>
          <form
            className="rounded-sm border border-border/70 bg-card p-8 sm:p-10"
            onSubmit={(e) => {
              e.preventDefault();
              e.currentTarget.reset();
              setEnquiry(enquiryTypes[0]);
              toast.success(
                "Enquiry received — the right person at DEFI will reply within one working day",
              );
            }}
          >
            <p className="eyebrow">Partner With DEFI</p>
            <h2 className="mt-3 font-display text-3xl">Start the conversation.</h2>

            <fieldset className="mt-8">
              <legend className="eyebrow">I'm interested in</legend>
              <div className="mt-4 flex flex-wrap gap-2">
                {enquiryTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setEnquiry(type)}
                    aria-pressed={enquiry === type}
                    className={`rounded-sm border px-4 py-2.5 text-xs tracking-wide transition-colors ${
                      enquiry === type
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-muted-foreground hover:border-primary/60 hover:text-primary"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="p-name" className="eyebrow block">
                  Your name
                </label>
                <input
                  id="p-name"
                  required
                  autoComplete="name"
                  className="mt-3 w-full rounded-sm border border-input bg-transparent px-4 py-3 text-sm outline-none focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="p-company" className="eyebrow block">
                  Company / organisation
                </label>
                <input
                  id="p-company"
                  autoComplete="organization"
                  className="mt-3 w-full rounded-sm border border-input bg-transparent px-4 py-3 text-sm outline-none focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="p-email" className="eyebrow block">
                  Email
                </label>
                <input
                  id="p-email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-3 w-full rounded-sm border border-input bg-transparent px-4 py-3 text-sm outline-none focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="p-timeline" className="eyebrow block">
                  Timeline (optional)
                </label>
                <input
                  id="p-timeline"
                  placeholder="e.g. Q4 this year"
                  className="mt-3 w-full rounded-sm border border-input bg-transparent px-4 py-3 text-sm outline-none focus:border-primary"
                />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="p-message" className="eyebrow block">
                What are you thinking about?
              </label>
              <textarea
                id="p-message"
                rows={5}
                required
                placeholder="A little context helps us route your enquiry to the right arm of the group."
                className="mt-3 w-full rounded-sm border border-input bg-transparent p-4 text-sm outline-none focus:border-primary"
              />
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-sm bg-gifting-gold px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-ink transition-opacity hover:opacity-90 sm:w-auto"
            >
              Send partnership enquiry
            </button>
            <p className="mt-4 text-xs text-muted-foreground">
              For bulk gifting orders, you can also browse the{" "}
              <Link to="/collections" className="underline underline-offset-4">
                DEFI Gifting Solutions storefront
              </Link>
              .
            </p>
          </form>
        </Reveal>
      </Container>
    </>
  );
}
