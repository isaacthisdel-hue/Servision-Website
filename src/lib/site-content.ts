// ============================================================
// SITE CONTENT — copy, pricing tiers and the rollout timeline.
//
// Looking for logos, images or dish links?
// → those live in `src/lib/media.ts` (one file, easy to swap).
// ============================================================
import { media, arLinks } from "./media";

export const brand = {
  name: "Servision",
  domain: "servision.ca",
  logoUrl: media.logo,
  contactEmail: "ServisionAr@gmail.com",
  ctaUrl: "/contact",
  enterpriseUrl: "/contact?plan=franchise",
  showcaseUrl: "#showcase",
};


export type Dish = {
  name: string;
  description: string;
  image: string;
  arUrl: string;
  qrUrl: string;
};

// Generates a QR code image URL pointing at the AR experience.
const qr = (data: string) =>
  `https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=1&data=${encodeURIComponent(data)}`;

export const dishes: Dish[] = [
  {
    name: "Breakfast Feast",
    description: "Scrambled eggs, ham, toasted English muffin — Isaac's Casa, West Island.",
    image: media.dishes.breakfast,
    arUrl: arLinks.breakfast,
    qrUrl: qr(arLinks.breakfast),
  },

  {
    name: "Signature Burger",
    description: "Aged beef, brioche bun, house sauce.",
    image: media.dishes.burger,
    arUrl: arLinks.burger,
    qrUrl: qr(arLinks.burger),
  },
  {
    name: "Omakase Roll",
    description: "Daily selection, hand-pressed sushi.",
    image: media.dishes.sushi,
    arUrl: arLinks.sushi,
    qrUrl: qr(arLinks.sushi),
  },
  {
    name: "Truffle Tagliolini",
    description: "Fresh pasta, black truffle, parmigiano.",
    image: media.dishes.pasta,
    arUrl: arLinks.pasta,
    qrUrl: qr(arLinks.pasta),
  },
];

// Honest rollout timeline — used to replace fabricated social proof.
export const rolloutSteps = [
  {
    day: "Day 1",
    title: "Quick call",
    desc: "We confirm your dish list and lock in a scan date.",
  },
  {
    day: "Day 2–3",
    title: "On-site scan",
    desc: "We come to your kitchen and capture every dish — about 15 minutes each.",
  },
  {
    day: "Day 4–6",
    title: "We build the models",
    desc: "Photoreal 3D, mobile-optimized, AR-ready and hosted on our side.",
  },
  {
    day: "Day 7",
    title: "QR codes live",
    desc: "Print-ready QR codes arrive for tables, menus and socials.",
  },
];

// Tiered pricing — sized by restaurant type.
export type PricingTier = {
  id: string;
  name: string;
  audience: string;
  price: string;
  priceUnit?: string;
  term?: string;
  setupNote?: string;
  bundleSize?: string;
  features: string[];
  ctaLabel: string;
  ctaUrl: string;
  highlight?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    audience: "Small independent restaurants",
    price: "$59",
    priceUnit: "/month",
    term: "Annual Service Agreement · billed monthly",
    setupNote: "$149 one-time setup",
    bundleSize: "Up to 10 dishes",
    features: [
      "Up to 10 dishes per location",
      "Photorealistic 3D + AR models",
      "Unique QR code for every dish",
      "Hosted & maintained for you",
    ],
    ctaLabel: "Get Started",
    ctaUrl: "/contact?plan=starter",
  },
  {
    id: "growth",
    name: "Growth",
    audience: "Medium independent restaurants",
    price: "$99",
    priceUnit: "/month",
    term: "Annual Service Agreement · billed monthly",
    setupNote: "$149 one-time setup",
    bundleSize: "Up to 20 dishes",
    features: [
      "Everything in Starter",
      "Up to 20 dishes per location",
      "Photorealistic 3D + AR models",
      "Unique QR code for every dish",
      "One full menu refresh per year (swap or update any number of dishes)",
      "Priority dish updates",
    ],
    ctaLabel: "Get Started",
    ctaUrl: "/contact?plan=growth",
    highlight: true,
  },

  {
    id: "franchise",
    name: "Franchise",
    audience: "Chains & multi-location groups",
    price: "Let's talk",
    term: "Annual contract, terms tailored to your group",
    bundleSize: "Unlimited dishes & locations",
    features: [
      "Unlimited dishes per location",
      "Multi-location rollout & support",
      "Custom branding & integrations",
    ],
    ctaLabel: "Contact Sales",
    ctaUrl: "/contact?plan=franchise",
  },
];
