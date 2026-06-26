// ============================================================
// EDIT THIS FILE TO UPDATE ALL SITE CONTENT
// (brand info, dishes, testimonials, pricing, links)
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

export const testimonials = [
  {
    quote:
      "Guests spend more time on the menu and try dishes they'd normally skip.",
    author: "Marco R.",
    role: "Owner, Trattoria Nova",
  },
  {
    quote:
      "Average check went up the week we rolled it out. It pays for itself.",
    author: "Sasha L.",
    role: "GM, Ember & Oak",
  },
];

export const logos = ["NORTHSIDE", "EMBER & OAK", "TRATTORIA NOVA", "KAITEN", "MAISON 8"];

// Tiered pricing — sized by restaurant type.
export type PricingTier = {
  id: string;
  name: string;
  audience: string;
  price: string;
  priceUnit?: string;
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
    setupNote: "$39 one-time setup",
    bundleSize: "Up to 10 dishes",
    features: [
      "Up to 10 dishes per location",
      "Photorealistic 3D + AR models",
      "Unique QR code for every dish",
      "Hosted & maintained for you",
      "Cancel anytime",
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
    setupNote: "$69 one-time setup",
    bundleSize: "Up to 24 dishes",
    features: [
      "Up to 24 dishes per location",
      "Everything in Starter",
      "Priority dish updates",
      "Seasonal menu swaps included",
      "Cancel anytime",
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
    bundleSize: "Unlimited dishes & locations",
    features: [
      "Unlimited dishes per location",
      "Multi-location rollout & support",
      "Centralized menu management",
      "Custom branding & integrations",
      "Dedicated account manager",
    ],
    ctaLabel: "Contact Sales",
    ctaUrl: "/contact?plan=franchise",
  },
];
