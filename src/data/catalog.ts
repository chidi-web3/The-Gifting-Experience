import corporate from "@/assets/gift-corporate.jpg";
import birthday from "@/assets/gift-birthday.jpg";
import festive from "@/assets/gift-festive.jpg";
import souvenir from "@/assets/gift-souvenir.jpg";
import premiumSet from "@/assets/Premium Set.jpeg";
import simpleFemaleBox from "@/assets/Simple Female Box.jpeg";
import souvenir6 from "@/assets/Souvenir6.jpeg";
import corporateBoxes from "@/assets/Corporate Boxes.jpeg";
import mensGiftBox2 from "@/assets/mens-gift-box2.jpeg";
import staffAppreciationBox from "@/assets/Staff Appreciation Box.jpeg";
import bridalTrainGifts from "@/assets/Bridal Train Gifts.jpeg";
import bevrageHampers from "@/assets/Bevrage Hampers.jpeg";
import weddingSouvenirs from "@/assets/Wedding Souvenirs.jpeg";
import souvenirs4 from "@/assets/Souvenirs4.jpeg";
import mensGiftBox from "@/assets/mens-gift-box.jpeg";
import souvenirs1 from "@/assets/Souvenirs1.jpeg";

export type CollectionSlug = "corporate" | "birthdays" | "festive" | "souvenirs";

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
  moq?: number;
  blurb: string;
  description: string;
  contents: string[];
  image: string;
  featured?: boolean;
}

export const collections: Collection[] = [
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
    slug: "souvenirs",
    name: "Souvenirs",
    tagline: "Keepsakes that get taken home",
    story:
      "Small keepsakes and table souvenirs for guests — wrapped, tagged and priced for volume, finished like a single considered gift.",
    image: souvenir,
  },
];

export const products: Product[] = [
  {
    slug: "the-signature-hamper",
    name: "Premium Set",
    collection: "corporate",
    price: 50000,
    blurb: "Our signature premium box, wrapped to be opened slowly.",
    description:
      "The Signature Premium Set. A deep purple keepsake box lined with tissue, layered with preserves, tea, biscuits and a hand-poured candle, then closed with a gold satin bow and a calligraphed tag.",
    contents: [
      "Hand-poured sandalwood & amber candle",
      "Salted caramel biscuit tin",
      "Chocolate-coated almonds",
      "Strawberry preserve",
      "Loose leaf breakfast tea",
      "Calligraphed gift tag",
    ],
    image: premiumSet,
    featured: true,
  },
  {
    slug: "ivory-vow-box",
    name: "Simple Female Box",
    collection: "birthdays",
    price: 33000,
    blurb: "A refined little box made for her.",
    description:
      "The Simple Female Box. A neat, elegant keepsake chosen to feel personal — pretty on the outside, considered inside, and easy to keep long after the occasion.",
    contents: ["Keepsake gift", "Silk ribbon", "Personalised note card"],
    image: simpleFemaleBox,
    featured: true,
  },
  {
    slug: "guest-souvenir-set",
    name: "Souvenir",
    collection: "souvenirs",
    price: 1850,
    moq: 20,
    blurb: "A keepsake your guests will actually take home.",
    description:
      "A compact souvenir for events — wrapped, tagged and ready for the table. Priced for volume and finished like a single considered gift for every guest.",
    contents: ["Keepsake item", "Wrapped confection", "Printed thank-you card", "Organza pouch"],
    image: souvenir6,
  },
  {
    slug: "the-executive-folio",
    name: "Corporate boxes",
    collection: "corporate",
    price: 25000,
    blurb: "Boxed gifts that carry your business name well.",
    description:
      "Corporate boxes for clients, staff and partners — smartly presented with room for discreet branding, finished cleanly and ready to hand over in volume.",
    contents: ["Corporate gift set", "Presentation box", "Discreet branding", "Gift card"],
    image: corporateBoxes,
    featured: true,
  },
  {
    slug: "brand-welcome-kit",
    name: "Men's Gift Box (personal)",
    collection: "birthdays",
    price: 57750,
    blurb: "A considered gift box built for him.",
    description:
      "The Men's Gift Box (personal). A curated set of useful, well-made pieces — practical enough to use every day and polished enough to feel like a proper gift.",
    contents: ["Curated men's gift set", "Useful everyday piece", "Card and ribbon"],
    image: mensGiftBox2,
  },
  {
    slug: "candlelight-birthday-box",
    name: "Staff Appreciation Box",
    collection: "corporate",
    price: 35000,
    blurb: "A thank-you your team will remember.",
    description:
      "The Staff Appreciation Box. A warm, well-packed way to say thank you — assembled to feel personal, so your people feel genuinely valued.",
    contents: ["Appreciation gift", "Handpoured candle", "Personalised note"],
    image: staffAppreciationBox,
    featured: true,
  },
  {
    slug: "midnight-truffle-box",
    name: "Bridal Train Gifts",
    collection: "souvenirs",
    price: 5000,
    moq: 10,
    blurb: "Little gifts to pass down the bridal train.",
    description:
      "Bridal Train Gifts. Small keepsakes chosen for the bride's inner circle — light to carry, easy to hand over, and lovely enough to be kept.",
    contents: ["Keepsake gift", "Ribbon tie", "Gift tag"],
    image: bridalTrainGifts,
  },
  {
    slug: "year-end-basket",
    name: "Year-End Basket",
    collection: "festive",
    price: 115000,
    blurb: "A generous hamper for the end of the year.",
    description:
      "The Year-End Basket. A full, hand-packed hamper for the December season — weighted with wine, treats and good things worth sharing around a full table.",
    contents: [
      "Bottle of red wine",
      "Roasted spiced nuts",
      "Dried fruit selection",
      "Preserve and biscuits",
      "Woven keepsake basket",
    ],
    image: bevrageHampers,
  },
  {
    slug: "amber-hour-set",
    name: "Wedding Souvenirs",
    collection: "souvenirs",
    price: 2000,
    moq: 12,
    blurb: "Keepsakes your wedding guests will treasure.",
    description:
      "Wedding Souvenirs. Small, wrapped keepsakes for your guests and bridal party — chosen to match the day and taken home with a smile.",
    contents: ["Keepsake souvenir", "Printed card", "Ribbon tie"],
    image: weddingSouvenirs,
    featured: true,
  },
  {
    slug: "lavender-thank-you",
    name: "Souvenir",
    collection: "souvenirs",
    price: 1500,
    moq: 12,
    blurb: "A small keepsake to say thank you.",
    description:
      "A compact thank-you souvenir — wrapped and ready to hand out, chosen to feel considered rather than generic for every recipient.",
    contents: ["Keepsake item", "Printed card", "Ribbon tie"],
    image: souvenirs4,
  },
  {
    slug: "gratitude-duo",
    name: "Men's Gift Box",
    collection: "birthdays",
    price: 78500,
    blurb: "A premium boxed gift for him.",
    description:
      "The Men's Gift Box. A fuller, more considered set of men's essentials — premium enough for a milestone, useful enough to keep on the desk or dresser.",
    contents: ["Curated men's gift set", "Premium finish", "Card and ribbon"],
    image: mensGiftBox,
  },
  {
    slug: "keepsake-mug-set",
    name: "Souvenirs",
    collection: "souvenirs",
    price: 1800,
    moq: 10,
    blurb: "Simple keepsakes that outlive the occasion.",
    description:
      "Souvenirs. Small, useful keepsakes for guests and team members — simple, well-made and quiet enough to suit any occasion.",
    contents: ["Keepsake item", "Gift card", "Ribbon tie"],
    image: souvenirs1,
  },
];

export const occasions = collections.map((c) => ({
  slug: c.slug,
  name: c.name,
  tagline: c.tagline,
}));

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
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
