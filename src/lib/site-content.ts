// ============================================================
// EDIT THIS FILE TO UPDATE ALL SITE CONTENT
// (brand info, dishes, pricing, links)
// Images live in src/assets/ — replace the files there to swap.
// ============================================================
import dishBurger from "@/assets/dish-burger.jpg";
import dishSushi from "@/assets/dish-sushi.jpg";
import dishPasta from "@/assets/dish-pasta.jpg";
import logoAsset from "@/assets/servision-logo.png.asset.json";

export const brand = {
  name: "Servision",
  domain: "servision.ca",
  logoUrl: logoAsset.url,
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
    name: "Signature Burger",
    description: "Aged beef, brioche bun, house sauce.",
    image: dishBurger,
    arUrl: "https://servision.ca/ar/burger",
    qrUrl: qr("https://servision.ca/ar/burger"),
  },
  {
    name: "Omakase Roll",
    description: "Daily selection, hand-pressed sushi.",
    image: dishSushi,
    arUrl: "https://servision.ca/ar/sushi",
    qrUrl: qr("https://servision.ca/ar/sushi"),
  },
  {
    name: "Truffle Tagliolini",
    description: "Fresh pasta, black truffle, parmigiano.",
    image: dishPasta,
    arUrl: "https://servision.ca/ar/pasta",
    qrUrl: qr("https://servision.ca/ar/pasta"),
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
    price: "$49",
    priceUnit: "/month",
    term: "Annual Service Agreement · billed monthly",
    setupNote: "$39 one-time setup",
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
    setupNote: "$69 one-time setup",
    bundleSize: "Up to 24 dishes",
    features: [
      "Everything in Starter",
      "Up to 24 dishes per location",
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
