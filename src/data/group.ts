export type ArmSlug = "gifting" | "epic-taste" | "experiences";

export interface BusinessArm {
  slug: ArmSlug;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  offerings: string[];
  /** Tailwind classes driven by arm tokens in styles.css */
  accentText: string;
  accentBorder: string;
  softBg: string;
}

export const businessArms: BusinessArm[] = [
  {
    slug: "gifting",
    name: "DEFI Gifting Solutions",
    shortName: "Gifting Solutions",
    tagline: "Gifts that carry your name well",
    description:
      "Corporate and personal gifting, branded merchandise and thoughtful gift experiences — built for boardrooms, weddings and everything worth marking.",
    offerings: [
      "Corporate gifting programmes",
      "Branded merchandise",
      "Event souvenirs & hampers",
      "Personal celebration boxes",
    ],
    accentText: "text-gifting",
    accentBorder: "border-gifting/40",
    softBg: "bg-gifting-soft",
  },
  {
    slug: "epic-taste",
    name: "Epic Taste Catering",
    shortName: "Epic Taste",
    tagline: "Everyday food, done properly",
    description:
      "Food and everyday culinary experiences — warm, generous and grounded in flavour, made for people who take good eating seriously.",
    offerings: [
      "Ready-to-enjoy meals & treats",
      "Catering for gatherings",
      "Signature bakes & confections",
      "Seasonal menus",
    ],
    accentText: "text-taste",
    accentBorder: "border-taste/40",
    softBg: "bg-taste-soft",
  },
  {
    slug: "experiences",
    name: "DEFI Experiences",
    shortName: "Experiences",
    tagline: "Moments designed to be remembered",
    description:
      "Events, Tours and Adventures, curated to leave unforgettable memories and create moments.",
    offerings: [
      "Curated events & activations",
      "Group experiences & retreats",
      "Lifestyle programming",
      "Culture & adventure tours",
    ],
    accentText: "text-exp",
    accentBorder: "border-exp/40",
    softBg: "bg-exp-soft",
  },
];

export function getArm(slug: string): BusinessArm | undefined {
  return businessArms.find((a) => a.slug === slug);
}

export interface PartnershipPathway {
  title: string;
  description: string;
}

export const partnershipPathways: PartnershipPathway[] = [
  {
    title: "Corporate partnerships",
    description:
      "Long-term gifting, hospitality and experience programmes for your staff, clients and communities.",
  },
  {
    title: "Bulk orders",
    description:
      "Volume production across gifting, merchandise and food — consistent quality at scale.",
  },
  {
    title: "Brand collaborations",
    description:
      "Co-branded products and campaigns that put your name alongside ours, done properly.",
  },
  {
    title: "Event partnerships",
    description:
      "Souvenirs, catering and experience design for weddings, conferences and public events.",
  },
  {
    title: "Strategic partnerships",
    description:
      "Investment, distribution and joint-venture conversations as we build the portfolio.",
  },
  {
    title: "General business enquiries",
    description: "Suppliers, talent and anyone who believes they should be building with us.",
  },
];

export const group = {
  name: "DEFI GROUP",
  promise: "Building Brands. Creating Experiences. Making Impact.",
  email: "hellodefigroup@gmail.com",
  phone: "08063938828",
  location: "Ogba, Lagos, Nigeria",
  hours: "Mon–Sat, 9am – 6pm",
} as const;
