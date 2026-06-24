import { createFileRoute } from "@tanstack/react-router";
import {
  ScanLine,
  Boxes,
  QrCode,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Share2,
  ShieldCheck,
  Check,
  Menu as MenuIcon,
  ImageIcon,
} from "lucide-react";
import oldMenu from "@/assets/old-menu.jpg";
import { brand, dishes, testimonials, logos } from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dishplays — See dishes before you order" },
      {
        name: "description",
        content:
          "Dishplays brings restaurant menus to life with interactive 3D and AR dish experiences. Book a free demo today.",
      },
    ],
  }),
  component: HomePage,
});

/* ------------------------------ Primitives ------------------------------ */

function Button({
  children,
  variant = "primary",
  href,
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "accent";
  href?: string;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-ink/90 hover:-translate-y-0.5"
      : variant === "accent"
        ? "bg-accent text-accent-foreground hover:-translate-y-0.5"
        : "border border-ink/15 text-foreground hover:border-ink/40 hover:bg-beige";
  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full surface-beige px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-foreground/70">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </div>
  );
}

/* --------------------------------- Nav ---------------------------------- */

function Nav() {
  const links = [
    { href: "#how", label: "How it works" },
    { href: "#showcase", label: "Showcase" },
    { href: "#why", label: "Why" },
    { href: "#pricing", label: "Pricing" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <div className="flex items-center justify-between rounded-full bg-background/85 backdrop-blur border border-ink/10 px-4 py-2.5 sm:px-6">
          <a href="#" className="flex items-center gap-2 font-bold tracking-tight">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-ink text-primary-foreground">
              <Boxes className="h-4 w-4" />
            </span>
            <span className="text-base">{brand.name}</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button href={brand.bookDemoUrl} className="hidden sm:inline-flex !px-4 !py-2 text-xs">
              Book a Demo
            </Button>
            <button className="md:hidden p-2 text-muted-foreground" aria-label="Menu">
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

/* --------------------------------- Hero --------------------------------- */
/*
  HERO MEDIA PLACEHOLDER
  ----------------------
  To replace, swap the contents of <HeroMedia /> below with your own:
    - an <img src="..." />
    - a <video> tag
    - a 3D / model-viewer embed
  Keep the wrapping aspect ratio for layout stability.
*/
function HeroMedia() {
  return (
    <div className="surface-beige aspect-[4/5] sm:aspect-[5/6] rounded-3xl flex flex-col items-center justify-center text-center p-8 gap-3">
      <div className="grid h-12 w-12 place-items-center rounded-full bg-background border border-ink/10 text-muted-foreground">
        <ImageIcon className="h-5 w-5" />
      </div>
      <p className="text-sm font-medium text-foreground">Your hero media here</p>
      <p className="text-xs text-muted-foreground max-w-xs">
        Drop in a photo, video, or 3D model. Edit{" "}
        <code className="font-mono text-foreground">HeroMedia</code> in{" "}
        <code className="font-mono text-foreground">src/routes/index.tsx</code>.
      </p>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        <div className="lg:col-span-7 space-y-7 animate-fade-up">
          <SectionLabel>AR menu platform</SectionLabel>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.02] font-normal">
            Let your customers{" "}
            <em className="text-accent not-italic font-serif italic">see dishes</em>{" "}
            before they order.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Dishplays helps restaurants increase orders and engagement using
            interactive 3D and AR food experiences — right from a QR code on
            the table.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href={brand.bookDemoUrl}>
              Book a Free Demo <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={brand.watchDemoUrl} variant="ghost">
              See It In Action
            </Button>
          </div>
          <div className="flex items-center gap-6 pt-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-accent" /> No app required
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-accent" /> Setup in days
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 animate-fade-up">
          <HeroMedia />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ How it works ----------------------------- */

function HowItWorks() {
  const steps = [
    { icon: ScanLine, title: "We scan your dishes", desc: "Bring us your menu — we capture every detail." },
    { icon: Boxes, title: "We build 3D models", desc: "Photoreal, interactive, optimized for mobile." },
    { icon: QrCode, title: "Customers scan & explore", desc: "A QR code unlocks AR — no app needed." },
  ];
  return (
    <section id="how" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <SectionLabel>How it works</SectionLabel>
          <h2 className="font-serif text-4xl sm:text-5xl tracking-tight">
            Three steps to a living menu
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <div key={s.title} className="surface hover-lift rounded-2xl p-7">
              <div className="text-xs font-mono text-accent mb-5">0{i + 1}</div>
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-beige text-foreground mb-5">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Showcase ------------------------------- */

function Showcase() {
  return (
    <section id="showcase" className="py-24 sm:py-32 bg-beige/40">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div className="space-y-4">
            <SectionLabel>Live showcase</SectionLabel>
            <h2 className="font-serif text-4xl sm:text-5xl tracking-tight max-w-xl">
              Try it yourself. Scan, tap, explore.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Point your phone camera at any QR code below to launch the dish
            in 3D / AR.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {dishes.map((d) => (
            <article key={d.name} className="surface hover-lift rounded-2xl overflow-hidden flex flex-col">
              <div className="aspect-[4/3] relative overflow-hidden bg-beige">
                <img
                  src={d.image}
                  alt={d.name}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-5 flex flex-col gap-4 flex-1">
                <div>
                  <h3 className="font-semibold">{d.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{d.description}</p>
                </div>
                <div className="mt-auto flex items-center justify-between gap-3 pt-3 border-t border-ink/10">
                  <a
                    href={d.arUrl}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-accent transition-colors"
                  >
                    View in AR <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                  <img
                    src={d.qrUrl}
                    alt={`QR code for ${d.name}`}
                    loading="lazy"
                    width={64}
                    height={64}
                    className="h-14 w-14 rounded-md bg-background p-1 border border-ink/10"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Why --------------------------------- */

function Why() {
  const benefits = [
    { icon: ShieldCheck, title: "More confidence, more orders", desc: "Customers know exactly what they're getting." },
    { icon: Sparkles, title: "More dishes tried", desc: "Visual menus encourage exploration." },
    { icon: TrendingUp, title: "Memorable experience", desc: "Stand out from every other restaurant on the block." },
    { icon: Share2, title: "Built-in social buzz", desc: "Guests share what they've never seen before." },
  ];
  return (
    <section id="why" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl space-y-4 mb-14">
          <SectionLabel>Why it works</SectionLabel>
          <h2 className="font-serif text-4xl sm:text-5xl tracking-tight">
            Why restaurants use Dishplays
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {benefits.map((b) => (
            <div key={b.title} className="surface hover-lift rounded-2xl p-6 flex gap-5">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-beige text-accent">
                <b.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold">{b.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Before / After ---------------------------- */

function BeforeAfter() {
  return (
    <section className="py-24 sm:py-32 bg-beige/40">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <SectionLabel>The difference</SectionLabel>
          <h2 className="font-serif text-4xl sm:text-5xl tracking-tight">
            From static menus to interactive experiences
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="relative rounded-2xl overflow-hidden border border-ink/10 aspect-[4/3] bg-background">
            <img
              src={oldMenu}
              alt="Traditional paper menu"
              loading="lazy"
              width={1024}
              height={768}
              className="h-full w-full object-cover grayscale"
            />
            <div className="absolute top-4 left-4 rounded-full bg-background/90 backdrop-blur px-3 py-1 text-xs uppercase tracking-widest border border-ink/10">
              Before
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-ink/10 aspect-[4/3] surface-beige flex items-center justify-center text-center p-8">
            <div className="absolute top-4 left-4 rounded-full bg-accent text-accent-foreground px-3 py-1 text-xs uppercase tracking-widest font-semibold">
              After
            </div>
            <div className="space-y-3 max-w-xs">
              <div className="grid h-12 w-12 mx-auto place-items-center rounded-full bg-background border border-ink/10 text-muted-foreground">
                <ImageIcon className="h-5 w-5" />
              </div>
              <p className="text-sm font-medium">Your AR experience</p>
              <p className="text-xs text-muted-foreground">
                Replace with a screenshot or video of your live menu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Social proof ----------------------------- */

function SocialProof() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Used by modern restaurants
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 mb-16">
          {logos.map((l) => (
            <span key={l} className="text-sm font-bold tracking-widest text-muted-foreground">
              {l}
            </span>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t) => (
            <figure key={t.author} className="surface rounded-2xl p-7">
              <blockquote className="font-serif text-2xl leading-snug">
                <span className="text-accent">“</span>
                {t.quote}
                <span className="text-accent">”</span>
              </blockquote>
              <figcaption className="mt-5 text-sm text-muted-foreground">
                <span className="text-foreground font-medium">{t.author}</span> · {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Pricing ------------------------------- */

function Pricing() {
  const features = [
    "1–10 dishes",
    "Setup included",
    "QR codes & analytics",
    "Monthly subscription",
  ];
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-beige/40">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center max-w-xl mx-auto space-y-4 mb-12">
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="font-serif text-4xl sm:text-5xl tracking-tight">
            Simple. Start with one free dish.
          </h2>
        </div>
        <div className="surface rounded-3xl p-8 sm:p-10">
          <div className="grid sm:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-accent mb-3">Starter</p>
              <h3 className="font-serif text-3xl mb-2">Everything to get going</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Built and managed for you. Cancel anytime.
              </p>
              <Button href={brand.bookDemoUrl}>
                Start with a free dish <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-beige text-accent">
                    <Check className="h-3 w-3" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Final CTA ----------------------------- */

function FinalCTA() {
  return (
    <section id="contact" className="py-32">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <SectionLabel>Let's build your AR menu</SectionLabel>
        <h2 className="mt-6 font-serif text-5xl sm:text-7xl tracking-tight leading-[1.02]">
          Ready to bring your{" "}
          <em className="text-accent italic font-serif">menu to life?</em>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
          A 15-minute demo is all it takes. We'll show you how Dishplays fits
          your restaurant.
        </p>
        <div className="mt-10 flex justify-center">
          <Button href={brand.bookDemoUrl} className="!px-8 !py-4 text-base">
            Book Your Free Demo <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Footer ------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-ink/10 py-10">
      <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-ink text-primary-foreground">
            <Boxes className="h-3.5 w-3.5" />
          </span>
          <span className="font-semibold text-foreground">{brand.name}</span>
          <span>· {brand.domain}</span>
        </div>
        <div>© {new Date().getFullYear()} {brand.name}. All rights reserved.</div>
      </div>
    </footer>
  );
}

/* ---------------------------------- Page -------------------------------- */

function HomePage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Showcase />
        <Why />
        <BeforeAfter />
        <SocialProof />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
