// ============================================================
// MEDIA — single source of truth for every image, logo and link
// used across the site.
//
// HOW TO CHANGE A MEDIA FILE
// 1. Drop the new image into `src/assets/` (keep the same file
//    name if you want, or update the import path below).
// 2. Update the matching entry in this file.
//
// WHY IMPORT IMAGES LIKE THIS?
// All images are imported through Vite (`import x from "@/assets/..."`).
// That means the build process bundles them into the final site
// and gives them a stable hashed URL, so the pictures keep working
// on EVERY host (Lovable, Vercel, Netlify, static export, etc.).
// Do NOT reference images by raw path strings like "/assets/foo.png"
// — those break once the project is exported.
// ============================================================

// --- Logo ---------------------------------------------------
import logoImg from "@/assets/servision-logo.png";

// --- Hero / marketing images --------------------------------
import heroPhoneImg from "@/assets/hero-ar-phone.jpg";
import oldMenuImg from "@/assets/old-menu.jpg";

// --- Dish photos (used in the "Try it yourself" section) ----
import dishBurgerImg from "@/assets/dish-burger.jpg";
import dishSushiImg from "@/assets/dish-sushi.jpg";
import dishPastaImg from "@/assets/dish-pasta.jpg";
import dishBreakfastImg from "@/assets/dish-breakfast.png";


export const media = {
  logo: logoImg,
  heroPhone: heroPhoneImg,
  oldMenu: oldMenuImg,
  dishes: {
    breakfast: dishBreakfastImg,
    burger: dishBurgerImg,
    sushi: dishSushiImg,
    pasta: dishPastaImg,
  },
};


// ============================================================
// LINKS — where each dish's AR experience lives online.
// The QR codes on the site are generated automatically from
// these URLs (see `qr()` in site-content.ts), so changing a URL
// here also updates its QR code.
// ============================================================
export const arLinks = {
  burger: "https://servision.ca/ar/burger",
  sushi: "https://servision.ca/ar/sushi",
  pasta: "https://servision.ca/ar/pasta",
};
