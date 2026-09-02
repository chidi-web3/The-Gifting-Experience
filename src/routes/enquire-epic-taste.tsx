import { createFileRoute } from "@tanstack/react-router";
import epicTasteFood2 from "@/assets/gift-epic-taste-food2.jpg";
import epicTasteFood4 from "@/assets/defi-epic-taste-food4.jpg";
import epicTasteFoodtray from "@/assets/epic-taste-foodtray.jpeg";
import { Container, PageHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { EnquiryForm } from "@/components/site/EnquiryForm";

export const Route = createFileRoute("/enquire-epic-taste")({
  head: () => ({
    meta: [
      { title: "Enquire About Epic Taste — DEFI GROUP" },
      {
        name: "description",
        content:
          "Tell Epic Taste Catering what you're planning — corporate, native or occasional menus handled end to end.",
      },
    ],
  }),
  component: EnquireEpicTastePage,
});

const tasteCollections = [
  {
    name: "Corporate Taste",
    blurb:
      "Staff breakfast & lunch bulk — refined menus and smart presentation for every business occasion.",
    image: epicTasteFoodtray,
  },
  {
    name: "Native Taste",
    blurb: "Jollof, egusi, puff-puff and the classics — cooked from memory and served like home.",
    image: epicTasteFood2,
  },
  {
    name: "Occasional Taste",
    blurb:
      "Finger food and full menus for birthdays, weddings and parties — food that keeps the room talking.",
    image: epicTasteFood4,
  },
];

function EnquireEpicTastePage() {
  return (
    <>
      <PageHeader
        eyebrow="Epic Taste Catering"
        title="Enquire About Epic Taste."
        intro="Corporate, native or occasional — tell us what you're planning and we'll handle the menu."
      />

      <Container className="space-y-20 pb-20">
        <Reveal>
          <p className="eyebrow text-taste">Taste Collections</p>
          <div className="mt-9 grid gap-x-8 gap-y-10 sm:grid-cols-3">
            {tasteCollections.map((t) => (
              <div key={t.name} className="group">
                <div className="relative overflow-hidden rounded-sm">
                  <img
                    src={t.image}
                    alt={`${t.name} from Epic Taste Catering`}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-sm object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-4 font-display text-xl">{t.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.blurb}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <EnquiryForm defaultTopic="Epic Taste" />
      </Container>
    </>
  );
}
