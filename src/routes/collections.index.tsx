import { createFileRoute, Link } from "@tanstack/react-router";
import { collections, products } from "@/data/catalog";
import { ProductCard } from "@/components/site/ProductCard";
import { Container, PageHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/collections/")({
  head: () => ({
    meta: [
      { title: "Collections — DEFI Gifting Solutions" },
      {
        name: "description",
        content:
          "Browse every DEFI Gifting Solutions box and hamper — wedding favours, corporate gifting, birthdays, festive hampers and keepsake souvenirs.",
      },
      { property: "og:title", content: "Collections — DEFI Gifting Solutions" },
      {
        property: "og:description",
        content: "Every gift box and hamper, arranged by occasion.",
      },
    ],
  }),
  component: CollectionsIndex,
});

function CollectionsIndex() {
  return (
    <>
      <PageHeader
        eyebrow="DEFI Gifting Solutions"
        title="Every gift we make, arranged by occasion."
        intro="Each box is assembled to order in the studio. Choose one as it stands, or ask us to build around it."
      />

      <Container className="py-12">
        <Reveal className="flex flex-wrap gap-3">
          {collections.map((c) => (
            <Link
              key={c.slug}
              to="/collections/$slug"
              params={{ slug: c.slug }}
              className="rounded-sm border border-border px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {c.name}
            </Link>
          ))}
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} delay={(i % 3) * 80} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://wa.me/c/2348063938828"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-sm bg-primary px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            View more items
          </a>
          <p className="mt-3 text-xs text-muted-foreground">
            Follow this link to view our catalog on WhatsApp.
          </p>
        </div>
      </Container>
    </>
  );
}
