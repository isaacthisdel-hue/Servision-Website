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
  ctaUrl: "#contact",
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

// Bundle pricing — up to 10 dishes per plan.
export const pricing = {
  price: 49,
  priceUnit: "/month",
  setupFee: 39,
  bundleSize: 10,
  features: [
    "Up to 10 dishes per location",
    "Photorealistic 3D + AR models",
    "Unique QR code for every dish",
    "Hosted & maintained for you",
    "Works on any phone — no app",
    "Cancel anytime",
  ],
};
