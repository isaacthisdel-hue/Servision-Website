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
import arAfterImg from "@/assets/ar-after.jpg";

// --- Dish photos (used in the "Try it yourself" section) ----
import dishBurgerImg from "@/assets/dish-burger.jpg";
import dishSushiImg from "@/assets/dish-sushi.jpg";
import dishPastaImg from "@/assets/dish-pasta.jpg";
import dishBreakfastImg from "@/assets/dish-breakfast.png";
import dishKatsuImg from "@/assets/dish-katsu.png";

// --- Interactive 3D model (the "explore in 3D" viewer) -------
// Converted from the raw USDZ scan. `.glb` powers the in-browser
// drag-to-rotate viewer everywhere; `.usdz` is only used as the
// AR handoff file for Safari on iOS (Quick Look). The ?url suffix
// forces Vite to treat these as plain asset files regardless of
// extension, same hashed-URL bundling as every other asset here.
import katsuModelGlb from "@/assets/models/katsu.glb?url";
import katsuModelUsdz from "@/assets/models/katsu.usdz?url";
import breakfastModelGlb from "@/assets/models/breakfast.glb?url";
import burgerModelGlb from "@/assets/models/burger.glb?url";

export const media = {
  logo: logoImg,
  heroPhone: heroPhoneImg,
  oldMenu: oldMenuImg,
  arAfter: arAfterImg,
  dishes: {
    breakfast: dishBreakfastImg,
    burger: dishBurgerImg,
    sushi: dishSushiImg,
    pasta: dishPastaImg,
    katsu: dishKatsuImg,
  },
  models: {
    katsu: {
      glb: katsuModelGlb,
      usdz: katsuModelUsdz,
    },
  },
};

// ============================================================
// MODEL CAROUSEL — the dishes shown in the interactive 3D
// viewer (ModelExplorer, in the homepage Showcase section).
// Only dishes with a real GLB export belong here. `usdz` is
// optional — without it, iOS Quick Look AR just won't be
// offered for that dish, the drag/zoom viewer works regardless.
// ============================================================
export const modelShowcase = [
  {
    id: "katsu",
    name: "Chicken Katsu",
    glb: katsuModelGlb,
    usdz: katsuModelUsdz,
    poster: dishKatsuImg,
  },
  {
    id: "breakfast",
    name: "Breakfast Feast",
    glb: breakfastModelGlb,
    poster: dishBreakfastImg,
  },
  {
    id: "burger",
    name: "Burger",
    glb: burgerModelGlb,
    poster: dishBurgerImg,
  },
];

// ============================================================
// LINKS — where each dish's AR experience lives online.
// The QR codes on the site are generated automatically from
// these URLs (see `qr()` in site-content.ts), so changing a URL
// here also updates its QR code.
// ============================================================
export const arLinks = {
  breakfast: "https://ar.servision.ca/isaac-s-casa/west-island/breakfast-feast",
  burger: "https://servision.ca/ar/burger",
  sushi: "https://ar.servision.ca/isaac-s-casa/west-island/chicken-noodle",
  pasta: "https://servision.ca/ar/pasta",
  katsu: "https://ar.servision.ca/isaac-s-casa/down-town/chicken-katsu",
};
