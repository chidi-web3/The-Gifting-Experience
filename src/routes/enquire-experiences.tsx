import { createFileRoute } from "@tanstack/react-router";
import experienceTravel from "@/assets/defi-experience-travel2.jpeg";
import experience3 from "@/assets/defi-experience3.jpg";
import { Container, PageHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { EnquiryForm } from "@/components/site/EnquiryForm";

export const Route = createFileRoute("/enquire-experiences")({
  head: () => ({
    meta: [
      { title: "Enquire About DEFI Experiences — DEFI GROUP" },
      {
        name: "description",
        content:
          "Ask DEFI Experiences about tours, retreats and cultural events — moments from the places we've been and the ones we'll take you next.",
      },
    ],
  }),
  component: EnquireExperiencesPage,
});

const experienceDestinations = [
  {
    name: "Tours & Adventures",
    blurb:
      "Curated travels through places worth seeing — landmarks, culture and hidden corners, planned end to end.",
    image: experienceTravel,
  },
  {
    name: "Retreats & Escapes",
    blurb:
      "Quiet getaways and group retreats designed to slow time, reset and leave everyone wiser.",
    image:
      "https://images.unsplash.com/photo-1768028758084-e6b264ece28b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Events & Culture",
    blurb:
      "Lifestyle programming and cultural experiences that turn occasions into memories you'll keep.",
    image: experience3,
  },
];

function EnquireExperiencesPage() {
  return (
    <>
      <PageHeader
        eyebrow="DEFI Experiences"
        title="Enquire About DEFI Experiences."
        intro="Visited areas and countries — moments from the places we've been and the ones we'll take you next."
      />

      <Container className="space-y-20 pb-20">
        <Reveal>
          <p className="eyebrow text-exp">Visited Areas & Countries</p>
          <div className="mt-9 grid gap-x-8 gap-y-10 sm:grid-cols-3">
            {experienceDestinations.map((d) => (
              <div key={d.name} className="group">
                <div className="relative overflow-hidden rounded-sm">
                  <img
                    src={d.image}
                    alt={`${d.name} — DEFI Experiences`}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-sm object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-4 font-display text-xl">{d.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d.blurb}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <EnquiryForm defaultTopic="DEFI Experiences" />
      </Container>
    </>
  );
}
