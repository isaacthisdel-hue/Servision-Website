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
    description: "Scrambled eggs, ham, toasted English muffin. From Isaac's Casa, West Island.",
    image: media.dishes.breakfast,
    arUrl: arLinks.breakfast,
    qrUrl: qr(arLinks.breakfast),
  },

  {
    name: "Chicken Noodle",
    description: "Grilled chicken tenders, farfalle and rigatoni in a creamy pepper sauce. From Isaac's Casa, West Island.",
    image: media.dishes.sushi,
    arUrl: arLinks.sushi,
    qrUrl: qr(arLinks.sushi),
  },
  {
    name: "Chicken Katsu",
    description: "Panko-crusted chicken cutlet, steamed jasmine rice, bok choy and bean sprout stir-fry. From Isaac's Casa, West Island.",
    image: media.dishes.katsu,
    arUrl: arLinks.katsu,
    qrUrl: qr(arLinks.katsu),
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
    desc: "We come to your kitchen and capture every dish, about 15 minutes each.",
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

// Common objections, answered directly so a prospect can self-serve
// before ever getting on a call.
export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Do we need to reprint anything when the menu changes?",
    a: "No. Each table's QR code points at a live page, not a fixed file. Add a dish, remove one, or update a description, and the same printed code just shows the new lineup. Nothing to reprint, ever.",
  },
  {
    q: "Do my guests need to download an app?",
    a: "No app, no account, no install. Guests open their phone camera, scan, and the 3D model launches straight in their browser using built-in AR support on iPhone and Android.",
  },
  {
    q: "Does this replace our printed menu?",
    a: "It sits alongside it. Most restaurants keep their printed or digital menu as-is and add a QR code next to the dishes they want guests to see in 3D first, usually the higher-margin or hardest-to-describe items.",
  },
  {
    q: "What does your team need from us to get started?",
    a: "Just your dish list and 15 minutes per dish for an on-site scan. We bring the equipment, build the models, host everything, and hand you print-ready QR codes.",
  },
  {
    q: "What happens if we need to cancel?",
    a: "Plans run on a 12-month term billed monthly. If you need out early, an early termination fee applies based on time remaining on the term. Full details are in the Subscription Agreement before you sign anything.",
  },
  {
    q: "We have more than one location. How does pricing work?",
    a: "Franchise and multi-location groups get a custom quote based on dish count per location and rollout timeline. Reach out and we'll put a real number in front of you, not a generic tier.",
  },
];

// Illustrative preview of the per-dish analytics dashboard every plan
// includes. Numbers here are example UI content, not a specific client's
// results — real dashboards are seeded from each restaurant's own scans.
export const dashboardPreview = {
  dishName: "Chicken Katsu",
  scans: 214,
  avgViewTime: "38s",
  hesitationNote: "Opened often, ordered less. A candidate for a menu highlight.",
  bars: [
    { label: "Mon", value: 22 },
    { label: "Tue", value: 30 },
    { label: "Wed", value: 18 },
    { label: "Thu", value: 41 },
    { label: "Fri", value: 63 },
    { label: "Sat", value: 74 },
    { label: "Sun", value: 55 },
  ],
};

export type Founder = {
  name: string;
  role: string;
  location?: string;
  bio: string;
};

export const founders: Founder[] = [
  {
    name: "Isaac Thisdel",
    role: "Founder, Servision",
    location: "West Island, Montréal",
    bio: "A photo shows a dish. Servision lets customers experience it. This is where restaurants will be in 5 years. We're building it now.",
  },
  {
    name: "Brandon Bayan",
    role: "Co-founder & Social Media Manager",
    bio: "We're not changing what's on the plate. We're changing how the world sees it. The best dishes deserve more than a name and a photo.",
  },
  {
    name: "Raphael Marques",
    role: "Team",
    bio: "Life is meaningless.",
  },
];
