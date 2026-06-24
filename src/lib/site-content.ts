// Edit this file to update the site content (dishes, copy, links, etc.)
import dishBurger from "@/assets/dish-burger.jpg";
import dishSushi from "@/assets/dish-sushi.jpg";
import dishPasta from "@/assets/dish-pasta.jpg";

export const brand = {
  name: "Dishplays",
  domain: "Dishplays.ca",
  bookDemoUrl: "#contact",
  watchDemoUrl: "#showcase",
};

export type Dish = {
  name: string;
  description: string;
  image: string;
  arUrl: string;
  qrUrl: string; // image URL for the QR code
};

// Replace QR URLs and arUrl with your real model links.
const qr = (data: string) =>
  `https://api.qrserver.com/v1/create-qr-code/?size=240x240&bgcolor=0B0B0D&color=00D1FF&margin=1&data=${encodeURIComponent(data)}`;

export const dishes: Dish[] = [
  {
    name: "Signature Burger",
    description: "Aged beef, brioche bun, house sauce.",
    image: dishBurger,
    arUrl: "https://dishplays.ca/ar/burger",
    qrUrl: qr("https://dishplays.ca/ar/burger"),
  },
  {
    name: "Omakase Roll",
    description: "Daily selection, hand-pressed sushi.",
    image: dishSushi,
    arUrl: "https://dishplays.ca/ar/sushi",
    qrUrl: qr("https://dishplays.ca/ar/sushi"),
  },
  {
    name: "Truffle Tagliolini",
    description: "Fresh pasta, black truffle, parmigiano.",
    image: dishPasta,
    arUrl: "https://dishplays.ca/ar/pasta",
    qrUrl: qr("https://dishplays.ca/ar/pasta"),
  },
];

export const testimonials = [
  {
    quote:
      "Customers love it — they spend more time exploring the menu and trying new dishes.",
    author: "Marco R.",
    role: "Owner, Trattoria Nova",
  },
  {
    quote:
      "Our average order value went up the week we launched the AR menu.",
    author: "Sasha L.",
    role: "GM, Ember & Oak",
  },
];

export const logos = ["NORTHSIDE", "EMBER & OAK", "TRATTORIA NOVA", "KAITEN", "MAISON 8"];
