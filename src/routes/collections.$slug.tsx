import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { collections, getCollection, productsIn, type CollectionSlug } from "@/data/catalog";
import { ProductCard } from "@/components/site/ProductCard";
import { Container, PageHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/collections/$slug")({
  loader: ({ params }) => {
    const collection = getCollection(params.slug);
    if (!collection) throw notFound();
    return { collection };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Collection not found — DEFI Gifting Solutions" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { collection } = loaderData;
    const title = `${collection.name} Gifts & Hampers — DEFI Gifting Solutions`;
    return {
      meta: [
        { title },
        { name: "description", content: collection.story },
        { property: "og:title", content: title },
        { property: "og:description", content: collection.story },
      ],
    };
  },
  component: CollectionPage,
});

function CollectionPage() {
  const { collection } = Route.useLoaderData();
  const items = productsIn(collection.slug as CollectionSlug);

  return (
    <>
      <PageHeader eyebrow={collection.tagline} title={collection.name} intro={collection.story} />

      <Container className="py-12">
        <Reveal className="flex flex-wrap gap-3">
          <Link
            to="/collections"
            className="rounded-sm border border-border px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            All gifts
          </Link>
          {collections.map((c) => (
            <Link
              key={c.slug}
              to="/collections/$slug"
              params={{ slug: c.slug }}
              className="rounded-sm border border-border px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              activeProps={{ className: "border-primary text-primary" }}
            >
              {c.name}
            </Link>
          ))}
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <ProductCard key={p.slug} product={p} delay={(i % 3) * 80} />
          ))}
        </div>

        {items.length === 0 && (
          <p className="py-20 text-center text-sm text-muted-foreground">
            Nothing in this collection yet — ask us for a bespoke box.
          </p>
        )}
      </Container>
    </>
  );
}
