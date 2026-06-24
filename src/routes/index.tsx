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
} from "lucide-react";
import heroPhone from "@/assets/hero-ar-phone.jpg";
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
  variant?: "primary" | "ghost";
  href?: string;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:shadow-[0_0_30px_color-mix(in_oklab,var(--primary)_55%,transparent)] hover:-translate-y-0.5"
      : "border border-white/15 text-foreground hover:border-primary/60 hover:text-primary";
  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
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
        <div className="surface flex items-center justify-between rounded-full px-4 py-2.5 sm:px-6">
          <a href="#" className="flex items-center gap-2 font-bold tracking-tight">
            <span className="relative grid h-7 w-7 place-items-center rounded-lg bg-primary/15 text-primary">
              <Boxes className="h-4 w-4" />
              <span className="absolute inset-0 rounded-lg bg-primary/20 blur-md -z-10" />
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

function Hero() {
  return (
    <section className="relative pt-36 pb-24 sm:pt-44 sm:pb-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div className="space-y-7">
          <SectionLabel>AR menu platform</SectionLabel>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Let your customers{" "}
            <span className="bg-gradient-to-r from-primary to-white bg-clip-text text-transparent text-glow">
              see dishes
            </span>{" "}
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
              <ShieldCheck className="h-4 w-4 text-primary" /> No app required
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" /> Setup in days
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-10 bg-primary/20 blur-3xl rounded-full animate-pulse-glow -z-10" />
          <div className="relative mx-auto max-w-sm animate-float">
            <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-b from-primary/40 to-transparent blur-2xl -z-10" />
            <img
              src={heroPhone}
              alt="Phone showing an AR view of a glowing 3D burger"
              width={1024}
              height={1024}
              className="w-full h-auto rounded-[2.5rem] border border-white/10 shadow-2xl"
            />
          </div>
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
    <section id="how" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <SectionLabel>How it works</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Three steps to a living menu
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5 relative">
          {steps.map((s, i) => (
            <div key={s.title} className="surface hover-glow rounded-2xl p-7 relative">
              <div className="text-xs font-mono text-primary mb-5">0{i + 1}</div>
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary mb-5">
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
    <section id="showcase" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div className="space-y-4">
            <SectionLabel>Live showcase</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-xl">
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
            <article key={d.name} className="surface hover-glow rounded-2xl overflow-hidden flex flex-col">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={d.image}
                  alt={d.name}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>
              <div className="p-5 flex flex-col gap-4 flex-1">
                <div>
                  <h3 className="font-semibold">{d.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{d.description}</p>
                </div>
                <div className="mt-auto flex items-center justify-between gap-3 pt-3 border-t border-white/5">
                  <a
                    href={d.arUrl}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80"
                  >
                    View in AR <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                  <img
                    src={d.qrUrl}
                    alt={`QR code for ${d.name}`}
                    loading="lazy"
                    width={64}
                    height={64}
                    className="h-14 w-14 rounded-md bg-background p-1 border border-white/10"
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
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Why restaurants use Dishplays
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {benefits.map((b) => (
            <div key={b.title} className="surface hover-glow rounded-2xl p-6 flex gap-5">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
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
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <SectionLabel>The difference</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            From static menus to interactive experiences
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">
            <img src={oldMenu} alt="Traditional paper menu" loading="lazy" width={1024} height={768} className="h-full w-full object-cover grayscale opacity-70" />
            <div className="absolute top-4 left-4 rounded-full bg-black/60 backdrop-blur px-3 py-1 text-xs uppercase tracking-widest">Before</div>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-primary/30 aspect-[4/3] glow">
            <img src={heroPhone} alt="Dishplays AR experience" loading="lazy" width={1024} height={1024} className="h-full w-full object-cover" />
            <div className="absolute top-4 left-4 rounded-full bg-primary text-primary-foreground px-3 py-1 text-xs uppercase tracking-widest font-semibold">After</div>
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
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 mb-16 opacity-60">
          {logos.map((l) => (
            <span key={l} className="text-sm font-bold tracking-widest text-muted-foreground">
              {l}
            </span>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t) => (
            <figure key={t.author} className="surface rounded-2xl p-7">
              <blockquote className="text-lg leading-relaxed">
                <span className="text-primary">“</span>
                {t.quote}
                <span className="text-primary">”</span>
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
    <section id="pricing" className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center max-w-xl mx-auto space-y-4 mb-12">
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Simple. Start with one free dish.
          </h2>
        </div>
        <div className="surface rounded-3xl p-8 sm:p-10 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative grid sm:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary mb-3">Starter</p>
              <h3 className="text-2xl font-bold mb-2">Everything to get going</h3>
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
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-primary/15 text-primary">
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
    <section id="contact" className="py-32 relative">
      <div className="mx-auto max-w-4xl px-4 text-center relative">
        <div className="absolute inset-0 -z-10 bg-primary/15 blur-[120px] rounded-full" />
        <SectionLabel>Let's build your AR menu</SectionLabel>
        <h2 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]">
          Ready to bring your{" "}
          <span className="bg-gradient-to-r from-primary to-white bg-clip-text text-transparent text-glow">
            menu to life?
          </span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
          A 15-minute demo is all it takes. We'll show you how Dishplays fits
          your restaurant.
        </p>
        <div className="mt-10 flex justify-center">
          <Button href={brand.bookDemoUrl} className="!px-8 !py-4 text-base glow">
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
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-primary/15 text-primary">
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
