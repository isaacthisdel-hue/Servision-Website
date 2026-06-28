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
  Eye,
  Hand,
} from "lucide-react";
import oldMenu from "@/assets/old-menu.jpg";
import { brand, dishes, rolloutSteps, pricingTiers } from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Servision — Let guests see your dishes in 3D before they order" },
      {
        name: "description",
        content:
          "Servision turns your menu into an interactive 3D & AR experience. One QR code per dish. No app. Built for independent restaurants.",
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

function Wordmark({ className = "h-7" }: { className?: string }) {
  return (
    <img
      src={brand.logoUrl}
      alt={brand.name}
      className={`${className} w-auto select-none mix-blend-multiply`}
      draggable={false}
    />
  );
}

/* --------------------------------- Nav ---------------------------------- */

function Nav() {
  const links = [
    { href: "#how", label: "How it works" },
    { href: "#showcase", label: "Showcase" },
    { href: "#why", label: "Why it works" },
    { href: "#pricing", label: "Pricing" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <div className="flex items-center justify-between rounded-full bg-background/85 backdrop-blur border border-ink/10 px-5 py-2.5 sm:px-6">
          <a href="#" className="flex items-center" aria-label={brand.name}>
            <Wordmark className="h-5 sm:h-6" />
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button href={brand.ctaUrl} className="hidden sm:inline-flex !px-4 !py-2 text-xs">
              Get Started
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
  Drop in your own photo, video, or 3D model preview by editing
  the <HeroMedia /> component below.
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
          <SectionLabel>3D & AR for restaurant menus</SectionLabel>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.02] font-normal">
            Let guests{" "}
            <em className="text-accent not-italic font-serif italic">see the dish</em>{" "}
            before they order it.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Most customers hesitate on a menu — unsure of portion, plating, or
            what something actually looks like. Servision removes that
            hesitation with one scan: a true-to-life 3D model of every dish,
            viewable in AR right at the table.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href={brand.ctaUrl}>
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={brand.showcaseUrl} variant="ghost">
              See it in action
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-accent" /> No app required
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-accent" /> We handle setup
            </div>
            <div className="flex items-center gap-2">
              <QrCode className="h-4 w-4 text-accent" /> One QR per dish
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
    { icon: ScanLine, title: "We scan your dishes", desc: "15 minutes per dish, on-site. We bring the gear." },
    { icon: Boxes, title: "We build the 3D models", desc: "Photoreal, mobile-optimized, AR-ready." },
    { icon: QrCode, title: "You get QR codes", desc: "Place them on tables, menus, socials. We host everything." },
  ];
  return (
    <section id="how" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <SectionLabel>How it works</SectionLabel>
          <h2 className="font-serif text-4xl sm:text-5xl tracking-tight">
            From a plate on the pass to a 3D model in your guest's hand.
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
            <SectionLabel>Try it yourself</SectionLabel>
            <h2 className="font-serif text-4xl sm:text-5xl tracking-tight max-w-xl">
              Hover a dish. Scan the QR. Watch it appear on your table.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Point your phone camera at any QR code below — the dish opens
            straight in 3D / AR. No download, no sign-up.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {dishes.map((d) => (
            <article
              key={d.name}
              className="group surface hover-lift rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-beige">
                <img
                  src={d.image}
                  alt={d.name}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-90 group-hover:blur-md group-hover:brightness-90"
                />
                {/* QR overlay — appears on hover */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out pointer-events-none">
                  <div className="rounded-xl bg-background p-3 shadow-lg border border-ink/10">
                    <img
                      src={d.qrUrl}
                      alt={`QR code for ${d.name}`}
                      width={160}
                      height={160}
                      className="h-32 w-32"
                    />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-foreground bg-background/90 backdrop-blur rounded-full px-3 py-1 border border-ink/10">
                    Scan to view in AR
                  </p>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <div>
                  <h3 className="font-semibold">{d.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{d.description}</p>
                </div>
                <div className="mt-auto pt-3 border-t border-ink/10">
                  <a
                    href={d.arUrl}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-accent transition-colors"
                  >
                    Open in AR <ArrowRight className="h-3.5 w-3.5" />
                  </a>
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
    {
      icon: Eye,
      title: "Removes ordering hesitation",
      desc: "Guests stop second-guessing portion, plating and presentation — they order with confidence.",
    },
    {
      icon: TrendingUp,
      title: "Lifts higher-margin orders",
      desc: "When customers can actually see a dish, they're far more likely to try something new instead of playing it safe.",
    },
    {
      icon: Share2,
      title: "Turns guests into marketers",
      desc: "AR pulls phones out of pockets — and what follows is photos, stories, and free organic reach.",
    },
    {
      icon: Hand,
      title: "Zero work for your team",
      desc: "We scan, build, host and update. No POS integration, no menu rewrites, no app for staff to learn.",
    },
  ];
  return (
    <section id="why" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl space-y-4 mb-14">
          <SectionLabel>Why it works</SectionLabel>
          <h2 className="font-serif text-4xl sm:text-5xl tracking-tight">
            A menu that sells the dish for you.
          </h2>
          <p className="text-base text-muted-foreground max-w-xl">
            Independent restaurants live and die on first impressions. Servision
            gives every dish a fair shot in front of the guest — before the
            order is placed.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {benefits.map((b) => (
            <div key={b.title} className="surface hover-lift rounded-2xl p-6 flex gap-5">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-beige text-accent">
                <b.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold">{b.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{b.desc}</p>
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
            Flat photos describe a dish. AR sells it.
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
                Drop a screenshot or short clip of your live AR menu here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Rollout --------------------------------- */

function Rollout() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <SectionLabel>What to expect</SectionLabel>
          <h2 className="font-serif text-4xl sm:text-5xl tracking-tight">
            From first call to live QR codes in under a week.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {rolloutSteps.map((step, i) => (
            <div key={step.day} className="surface hover-lift rounded-2xl p-6 relative">
              <div className="text-xs font-mono text-accent mb-4">{step.day}</div>
              <div className="text-xs font-mono text-muted-foreground/60 absolute top-6 right-6">
                0{i + 1}
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-10">
          No app for guests. No integration for your POS. No work for your staff.
        </p>
      </div>
    </section>
  );
}


/* -------------------------------- Pricing ------------------------------- */

function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-beige/40">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="font-serif text-4xl sm:text-5xl tracking-tight">
            Plans that scale with your kitchen.
          </h2>
          <p className="text-base text-muted-foreground">
            Monthly billing on a 12-month plan — so your AR menu stays
            consistent through every season.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5 items-stretch">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-3xl p-8 flex flex-col ${
                tier.highlight ? "bg-foreground text-background shadow-xl" : "surface"
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent text-accent-foreground px-3 py-1 text-[10px] uppercase tracking-widest font-semibold">
                  Most popular
                </span>
              )}
              <p className="text-xs uppercase tracking-widest mb-2 text-accent">
                {tier.name}
              </p>
              <p
                className={`text-sm mb-5 ${
                  tier.highlight ? "text-background/70" : "text-muted-foreground"
                }`}
              >
                {tier.audience}
              </p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-serif text-5xl tracking-tight">{tier.price}</span>
                {tier.priceUnit && (
                  <span
                    className={`text-base ${
                      tier.highlight ? "text-background/70" : "text-muted-foreground"
                    }`}
                  >
                    {tier.priceUnit}
                  </span>
                )}
              </div>
              {tier.term && (
                <p
                  className={`text-xs mb-3 ${
                    tier.highlight ? "text-background/60" : "text-muted-foreground/80"
                  }`}
                >
                  {tier.term}
                </p>
              )}
              <p
                className={`text-sm mb-6 min-h-[2.5rem] ${
                  tier.highlight ? "text-background/70" : "text-muted-foreground"
                }`}
              >
                {tier.setupNote ? tier.setupNote + " · " : ""}
                {tier.bundleSize}
              </p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span
                      className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                        tier.highlight ? "bg-background/15 text-accent" : "bg-beige text-accent"
                      }`}
                    >
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <a
                  href={tier.ctaUrl}
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                    tier.highlight
                      ? "bg-accent text-accent-foreground hover:-translate-y-0.5"
                      : "bg-primary text-primary-foreground hover:bg-ink/90 hover:-translate-y-0.5"
                  }`}
                >
                  {tier.ctaLabel} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
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
          Ready to put your{" "}
          <em className="text-accent italic font-serif">menu in 3D?</em>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
          Tell us a bit about your restaurant. We'll come scan your dishes
          and have your first QR codes live within a week.
        </p>
        <div className="mt-10 flex justify-center">
          <Button href={brand.ctaUrl} className="!px-8 !py-4 text-base">
            Get Started <ArrowRight className="h-5 w-5" />
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
        <div className="flex items-center gap-3">
          <Wordmark className="h-4" />
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
        <Rollout />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
