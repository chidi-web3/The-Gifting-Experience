import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Container, PageHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact the Studio — de-fi" },
      {
        name: "description",
        content:
          "Talk to the de-fi studio about gifts, souvenirs, hampers, volume orders and delivery dates.",
      },
      { property: "og:title", content: "Contact the Studio — de-fi" },
      {
        property: "og:description",
        content: "Talk to the de-fi studio about gifting and volume orders.",
      },
    ],
  }),
  component: ContactPage,
});

const details = [
  { Icon: Mail, label: "Email", value: "hello@de-fi.gifts" },
  { Icon: Phone, label: "Phone & WhatsApp", value: "+234 800 000 0000" },
  { Icon: MapPin, label: "Studio", value: "By appointment — Lagos" },
  { Icon: Clock, label: "Hours", value: "Mon–Sat, 9am – 6pm" },
];

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to the studio."
        intro="Questions about a box, a date, a budget or a hundred hampers — write to us and a person answers."
      />

      <Container className="grid gap-14 py-16 lg:grid-cols-[1.4fr_1fr]">
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            e.currentTarget.reset();
            toast.success("Message sent — we'll reply within one working day");
          }}
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="c-name" className="eyebrow block">
                Your name
              </label>
              <input
                id="c-name"
                required
                autoComplete="name"
                className="mt-3 w-full rounded-sm border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="c-email" className="eyebrow block">
                Email
              </label>
              <input
                id="c-email"
                type="email"
                required
                autoComplete="email"
                className="mt-3 w-full rounded-sm border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </div>
          </div>
          <div>
            <label htmlFor="c-subject" className="eyebrow block">
              Subject
            </label>
            <input
              id="c-subject"
              className="mt-3 w-full rounded-sm border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="c-message" className="eyebrow block">
              Message
            </label>
            <textarea
              id="c-message"
              rows={6}
              required
              className="mt-3 w-full rounded-sm border border-border bg-transparent p-4 text-sm outline-none focus:border-primary"
            />
          </div>
          <button
            type="submit"
            className="rounded-sm bg-primary px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            Send message
          </button>
        </form>

        <aside className="h-fit rounded-sm border border-border/70 bg-card/40 p-8">
          <p className="eyebrow">Studio details</p>
          <ul className="mt-7 space-y-7">
            {details.map(({ Icon, label, value }, i) => (
              <Reveal as="li" key={label} delay={i * 70} className="flex gap-4">
                <Icon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {label}
                  </p>
                  <p className="mt-1 text-sm">{value}</p>
                </div>
              </Reveal>
            ))}
          </ul>
          <div className="rule-gold my-8" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            For weddings and corporate programmes, share your date and headcount
            in the first message — it lets us quote in one reply.
          </p>
        </aside>
      </Container>
    </>
  );
}
