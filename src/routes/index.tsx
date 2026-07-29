import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
  Link2,
  ChevronDown,
  MapPin,
  Activity,
} from "lucide-react";
import { media } from "@/lib/media";
import {
  brand,
  dishes,
  rolloutSteps,
  pricingTiers,
  faqs,
  dashboardPreview,
  founder,
} from "@/lib/site-content";
import { SiteFooter as Footer } from "@/components/SiteFooter";

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
    { href: "#faq", label: "FAQ" },
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
    <div className="relative">
      <div className="relative aspect-[4/5] sm:aspect-[5/6] rounded-3xl overflow-hidden border border-ink/10 bg-background">
        <img
          src={media.heroPhone}
          alt="Diner scanning a QR code at a restaurant table to see a dish in AR"
          width={1024}
          height={1280}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Floating detail cards — fill the space around the hero image on
          wide screens with real information instead of leaving it blank. */}
      <div className="hidden 2xl:flex absolute -left-16 top-10 w-48 items-start gap-3 rounded-2xl surface p-4 shadow-lg animate-fade-up">
        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-beige text-accent">
          <QrCode className="h-4 w-4" />
        </div>
        <div>
          <p className="text-xs font-semibold leading-tight">One code, forever</p>
          <p className="text-[11px] text-muted-foreground mt-1 leading-snug">
            Swap dishes anytime — the printed QR never changes.
          </p>
        </div>
      </div>

      <div className="hidden 2xl:flex absolute -right-14 bottom-24 w-52 items-start gap-3 rounded-2xl surface p-4 shadow-lg animate-fade-up">
        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-beige text-accent">
          <TrendingUp className="h-4 w-4" />
        </div>
        <div>
          <p className="text-xs font-semibold leading-tight">See the hesitation gap</p>
          <p className="text-[11px] text-muted-foreground mt-1 leading-snug">
            Every scan is tracked, so you know which dishes guests open but don't order.
          </p>
        </div>
      </div>

      <div className="hidden 2xl:flex absolute -left-10 bottom-6 items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 shadow-lg animate-fade-up">
        <Sparkles className="h-3.5 w-3.5 text-accent" />
        <span className="text-[11px] font-semibold whitespace-nowrap">Live in under a week</span>
      </div>
    </div>
  );
}


function Hero() {
  return (
    <section className="relative overflow-x-clip pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
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
      <div className="mx-auto max-w-7xl px-4">
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
      <div className="mx-auto max-w-7xl px-4">
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

/* ----------------------------- Delivery Methods -------------------------- */

function DeliveryMethods() {
  const methods = [
    {
      icon: QrCode,
      title: "QR codes",
      desc: "Place on tables, physical menus, window displays, or check presenters. Guests scan with any phone camera — no app needed.",
    },
    {
      icon: Link2,
      title: "Direct links",
      desc: "Embed on your website, Instagram bio, Google Business profile, or online ordering platform. The same 3D / AR experience opens from any link.",
    },
  ];
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div className="space-y-4 max-w-xl">
            <SectionLabel>Works everywhere</SectionLabel>
            <h2 className="font-serif text-4xl sm:text-5xl tracking-tight">
              QR codes for the table. Links for everything else.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Whether guests are sitting down or browsing online, every dish is
            one tap away from a true-to-life 3D preview.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {methods.map((m) => (
            <div key={m.title} className="surface hover-lift rounded-2xl p-6 flex gap-5">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-beige text-accent">
                <m.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold">{m.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl bg-foreground text-background p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-background/15 text-accent">
            <QrCode className="h-5 w-5" />
          </div>
          <p className="text-sm sm:text-base leading-relaxed">
            <span className="font-semibold">Your table QR code never changes.</span>{" "}
            Add a dish, remove one, or rewrite a description — the same printed
            code on the table always shows what's live right now. Nothing to reprint.
          </p>
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
      <div className="mx-auto max-w-7xl px-4">
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
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <SectionLabel>The difference</SectionLabel>
          <h2 className="font-serif text-4xl sm:text-5xl tracking-tight">
            Flat photos describe a dish. AR sells it.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="relative rounded-2xl overflow-hidden border border-ink/10 aspect-[4/3] bg-background">
            <img
              src={media.oldMenu}
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
          <div className="relative rounded-2xl overflow-hidden border border-ink/10 aspect-[4/3] bg-background">
            <img
              src={media.arAfter}
              alt="Guest scanning a table QR code to view a 3D dish in AR"
              loading="lazy"
              width={1200}
              height={912}
              className="h-full w-full object-cover"
            />
            <div className="absolute top-4 left-4 rounded-full bg-accent text-accent-foreground px-3 py-1 text-xs uppercase tracking-widest font-semibold">
              After
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
      <div className="mx-auto max-w-7xl px-4">
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


/* ---------------------------- Analytics preview -------------------------- */

function AnalyticsPreview() {
  const maxBar = Math.max(...dashboardPreview.bars.map((b) => b.value));
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-5 max-w-xl">
          <SectionLabel>Included with every plan</SectionLabel>
          <h2 className="font-serif text-4xl sm:text-5xl tracking-tight">
            Know which dishes guests love before your staff ever tells you.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Every scan, AR launch, and view is tracked automatically. You get
            a live dashboard per dish and per menu — including the "hesitation
            gap": dishes guests open often but order less. That's a menu fix
            waiting to happen.
          </p>
          <ul className="space-y-3 pt-2">
            {[
              "Scans and AR launches, per dish and per table",
              "Average view time, so you know what actually holds attention",
              "A ranked list of dishes guests view but don't order",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-beige text-accent">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-foreground/85">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="surface rounded-3xl p-6 sm:p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Example dashboard
              </p>
              <h3 className="font-semibold text-lg mt-1">{dashboardPreview.dishName}</h3>
            </div>
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-beige text-accent">
              <Activity className="h-5 w-5" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="rounded-xl bg-beige/60 p-4">
              <p className="text-2xl font-serif tracking-tight">{dashboardPreview.scans}</p>
              <p className="text-xs text-muted-foreground mt-1">Scans this week</p>
            </div>
            <div className="rounded-xl bg-beige/60 p-4">
              <p className="text-2xl font-serif tracking-tight">{dashboardPreview.avgViewTime}</p>
              <p className="text-xs text-muted-foreground mt-1">Avg. view time</p>
            </div>
          </div>

          <div className="flex items-end gap-2 h-28 mb-2">
            {dashboardPreview.bars.map((b) => (
              <div key={b.label} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full rounded-md bg-accent/70"
                  style={{ height: `${(b.value / maxBar) * 100}%` }}
                />
                <span className="text-[10px] text-muted-foreground">{b.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-ink/10 bg-background px-4 py-3 flex items-start gap-3">
            <TrendingUp className="h-4 w-4 text-accent shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              {dashboardPreview.hesitationNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Pricing ------------------------------- */

function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-beige/40">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="font-serif text-4xl sm:text-5xl tracking-tight">
            Plans that scale with your kitchen.
          </h2>
          <p className="text-base text-muted-foreground">
            Annual Service Agreement, billed monthly. You can cancel anytime —
            an early termination fee applies based on the time left on your
            annual term.
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

/* ----------------------------------- FAQ ---------------------------------- */

function FAQItem({ item, isOpen, onToggle }: { item: { q: string; a: string }; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="surface rounded-2xl overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-sm sm:text-base">{item.q}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-accent transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm text-muted-foreground leading-relaxed">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const mid = Math.ceil(faqs.length / 2);
  const columns = [faqs.slice(0, mid), faqs.slice(mid)];

  return (
    <section id="faq" className="py-24 sm:py-32 bg-beige/40">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <SectionLabel>Common questions</SectionLabel>
          <h2 className="font-serif text-4xl sm:text-5xl tracking-tight">
            Answers before you have to ask.
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-4">
          {columns.map((col, colIdx) => (
            <div key={colIdx} className="space-y-4">
              {col.map((item, i) => {
                const globalIndex = colIdx * mid + i;
                return (
                  <FAQItem
                    key={item.q}
                    item={item}
                    isOpen={openIndex === globalIndex}
                    onToggle={() =>
                      setOpenIndex(openIndex === globalIndex ? null : globalIndex)
                    }
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Founder -------------------------------- */

function FounderNote() {
  const initials = founder.name
    .split(" ")
    .map((n) => n[0])
    .join("");
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="surface rounded-3xl p-8 sm:p-10 grid sm:grid-cols-[auto_1fr] gap-6 sm:gap-8 items-center">
          <div className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-3">
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-foreground text-background font-serif text-xl">
              {initials}
            </div>
            <div className="sm:mt-1">
              <p className="font-semibold leading-tight">{founder.name}</p>
              <p className="text-sm text-muted-foreground">{founder.role}</p>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
                <MapPin className="h-3 w-3" /> {founder.location}
              </div>
            </div>
          </div>
          <p className="text-base sm:text-lg text-foreground/85 leading-relaxed font-serif italic">
            "{founder.bio}"
          </p>
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

/* --------------------------------- Footer imported from @/components/SiteFooter ---------------- */

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
        <DeliveryMethods />
        <BeforeAfter />
        <Rollout />
        <AnalyticsPreview />
        <Pricing />
        <FAQSection />
        <FounderNote />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
