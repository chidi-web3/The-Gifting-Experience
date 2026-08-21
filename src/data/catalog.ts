import wedding from "@/assets/gift-wedding.jpg";
import corporate from "@/assets/gift-corporate.jpg";
import birthday from "@/assets/gift-birthday.jpg";
import festive from "@/assets/gift-festive.jpg";
import thankyou from "@/assets/gift-thankyou.jpg";
import souvenir from "@/assets/gift-souvenir.jpg";
import chocolate from "@/assets/gift-chocolate.jpg";
import fragrance from "@/assets/gift-fragrance.jpg";
import hero from "@/assets/hero-hamper.jpg";

export type CollectionSlug =
  | "weddings"
  | "corporate"
  | "birthdays"
  | "festive"
  | "thank-you";

export interface Collection {
  slug: CollectionSlug;
  name: string;
  tagline: string;
  story: string;
  image: string;
}

export interface Product {
  slug: string;
  name: string;
  collection: CollectionSlug;
  price: number;
  blurb: string;
  description: string;
  contents: string[];
  image: string;
  featured?: boolean;
}

export const collections: Collection[] = [
  {
    slug: "weddings",
    name: "Weddings",
    tagline: "For the vows and everyone who witnessed them",
    story:
      "Bridal party boxes, guest souvenirs and thank-you tokens, wrapped in ivory and gold so they sit beautifully beside the day itself.",
    image: wedding,
  },
  {
    slug: "corporate",
    name: "Corporate",
    tagline: "Gifting that carries your name well",
    story:
      "Considered desk objects and client hampers, finished with discreet branding. Made in volume without ever feeling mass-produced.",
    image: corporate,
  },
  {
    slug: "birthdays",
    name: "Birthdays",
    tagline: "A little theatre for the day",
    story:
      "Boxes built to be opened slowly — layers of tissue, a candle, something sweet, and a note in your own handwriting.",
    image: birthday,
  },
  {
    slug: "festive",
    name: "Festive",
    tagline: "The season, properly packed",
    story:
      "Full hampers for the end of the year: wine, preserves, roasted nuts and slow-burning candles in a hand-tied basket.",
    image: festive,
  },
  {
    slug: "thank-you",
    name: "Thank You",
    tagline: "Small gestures, said properly",
    story:
      "Understated pieces for the moments that deserve more than a message — a candle, a card, a ribbon tied by hand.",
    image: thankyou,
  },
];

export const products: Product[] = [
  {
    slug: "the-signature-hamper",
    name: "The Signature Hamper",
    collection: "festive",
    price: 185000,
    blurb: "Our fullest box — the one people photograph before they open it.",
    description:
      "The house hamper. A deep purple keepsake box lined with tissue, layered with preserves, tea, biscuits and a hand-poured candle, then closed with a gold satin bow and a calligraphed tag.",
    contents: [
      "Hand-poured sandalwood & amber candle",
      "Salted caramel biscuit tin",
      "Chocolate-coated almonds",
      "Strawberry preserve",
      "Loose leaf breakfast tea",
      "Calligraphed gift tag",
    ],
    image: hero,
    featured: true,
  },
  {
    slug: "ivory-vow-box",
    name: "Ivory Vow Box",
    collection: "weddings",
    price: 68000,
    blurb: "An ivory keepsake box for the people standing closest to you.",
    description:
      "Made for bridal parties. A rigid ivory box with a champagne ribbon and dried florals, holding small pieces chosen to be kept long after the day.",
    contents: [
      "Ivory rigid keepsake box",
      "Dried floral sprig",
      "Silk hair ribbon",
      "Personalised note card",
    ],
    image: wedding,
    featured: true,
  },
  {
    slug: "guest-souvenir-set",
    name: "Guest Souvenir Set",
    collection: "weddings",
    price: 24000,
    blurb: "Table souvenirs your guests will actually take home.",
    description:
      "Priced for volume, finished like a single gift. Each souvenir is wrapped, tagged and boxed in trays of twenty for easy table setting.",
    contents: [
      "Enamel keyring",
      "Wrapped confection",
      "Printed thank-you card",
      "Purple organza pouch",
    ],
    image: souvenir,
  },
  {
    slug: "the-executive-folio",
    name: "The Executive Folio",
    collection: "corporate",
    price: 96000,
    blurb: "A leather folio and pen, presented in a purple velvet tray.",
    description:
      "For clients and long-serving staff. Full-grain folio and a weighted pen set into a velvet-lined presentation box, with optional blind-debossed branding.",
    contents: [
      "Full-grain leather folio",
      "Weighted matte pen",
      "Velvet-lined presentation box",
      "Optional debossed logo",
    ],
    image: corporate,
    featured: true,
  },
  {
    slug: "brand-welcome-kit",
    name: "Brand Welcome Kit",
    collection: "corporate",
    price: 54000,
    blurb: "Onboarding gifts that make the first day feel considered.",
    description:
      "A compact welcome set built around your palette — mug, tote and keyring, wrapped as one gift rather than handed over as three items.",
    contents: [
      "Ceramic mug in brand colour",
      "Cotton canvas tote",
      "Enamel keyring",
      "Welcome card",
    ],
    image: souvenir,
  },
  {
    slug: "candlelight-birthday-box",
    name: "Candlelight Birthday Box",
    collection: "birthdays",
    price: 72000,
    blurb: "Confetti, chocolate and one very good candle.",
    description:
      "Built to be opened slowly. Lift the lid and the tissue parts to reveal a candle, truffles and a folded note in your handwriting.",
    contents: [
      "Hand-poured celebration candle",
      "Assorted truffles",
      "Confetti tissue layer",
      "Handwritten note",
    ],
    image: birthday,
    featured: true,
  },
  {
    slug: "midnight-truffle-box",
    name: "Midnight Truffle Box",
    collection: "birthdays",
    price: 38000,
    blurb: "Twelve gold-dusted truffles on purple silk.",
    description:
      "A small, serious box of chocolate. Twelve truffles set on silk in a gold-edged case — the gift for when one thing, done properly, is enough.",
    contents: [
      "12 artisan truffles",
      "Gold-dusted finish",
      "Silk-lined gold case",
      "Ribbon and tag",
    ],
    image: chocolate,
  },
  {
    slug: "year-end-basket",
    name: "Year-End Basket",
    collection: "festive",
    price: 145000,
    blurb: "Wine, preserves and roasted nuts in a hand-tied basket.",
    description:
      "The December hamper. A woven basket dressed in purple cellophane and gold ribbon, weighted with things worth sharing at a full table.",
    contents: [
      "Bottle of red wine",
      "Roasted spiced nuts",
      "Dried fruit selection",
      "Preserve and biscuits",
      "Woven keepsake basket",
    ],
    image: festive,
  },
  {
    slug: "amber-hour-set",
    name: "Amber Hour Set",
    collection: "festive",
    price: 88000,
    blurb: "A fragrance and candle pairing for the quiet end of the year.",
    description:
      "Amber, resin and a little smoke. The bottle and the candle share a scent, so the room and the person carry the same trace.",
    contents: [
      "50ml eau de parfum",
      "Gold-lidded scented candle",
      "Velvet pouch",
      "Scent card",
    ],
    image: fragrance,
    featured: true,
  },
  {
    slug: "lavender-thank-you",
    name: "Lavender Thank You",
    collection: "thank-you",
    price: 29000,
    blurb: "One candle, one card, one length of gold twine.",
    description:
      "The smallest gift we make and one of the most requested. A candle wrapped in purple paper, tied with gold twine and a sprig of dried lavender.",
    contents: [
      "Soy candle",
      "Dried lavender sprig",
      "Letterpressed card",
      "Gold twine",
    ],
    image: thankyou,
  },
  {
    slug: "gratitude-duo",
    name: "Gratitude Duo",
    collection: "thank-you",
    price: 46000,
    blurb: "Chocolate and candlelight, wrapped as a pair.",
    description:
      "When a note isn't quite enough. Truffles and a candle boxed together, ribboned in gold, with space for a handwritten card.",
    contents: [
      "6 artisan truffles",
      "Travel-size candle",
      "Handwritten card",
      "Purple gift box",
    ],
    image: chocolate,
  },
  {
    slug: "keepsake-mug-set",
    name: "Keepsake Mug Set",
    collection: "thank-you",
    price: 34000,
    blurb: "A gold-lined mug that outlives the occasion.",
    description:
      "A glazed ceramic mug finished with a gold rim, boxed with a tote and keyring. Simple, useful, and quietly branded if you'd like it to be.",
    contents: ["Gold-rimmed ceramic mug", "Cotton tote", "Keyring", "Gift box"],
    image: souvenir,
  },
];

export const occasions = collections.map((c) => ({
  slug: c.slug,
  name: c.name,
  tagline: c.tagline,
}));

export function formatPrice(amountMinor: number): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amountMinor / 100);
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

export function productsIn(slug: CollectionSlug): Product[] {
  return products.filter((p) => p.collection === slug);
}
