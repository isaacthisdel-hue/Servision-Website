import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { brand } from "@/lib/site-content";
import { SiteFooter } from "./SiteFooter";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-ink/10">
        <div className="mx-auto max-w-3xl px-4 py-5 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {brand.name}
          </Link>
          <img
            src={brand.logoUrl}
            alt={brand.name}
            className="h-5 w-auto mix-blend-multiply"
            draggable={false}
          />
        </div>
      </header>

      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
          <div className="mb-10">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Legal
            </p>
            <h1 className="mt-2 font-serif text-4xl sm:text-5xl tracking-tight leading-[1.05]">
              {title}
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Last updated: {updated}
            </p>
          </div>

          <div className="legal-prose space-y-8 text-[15px] leading-relaxed text-foreground/90">
            {children}
          </div>

          <div className="mt-16 pt-8 border-t border-ink/10 text-sm text-muted-foreground">
            Questions? Contact us at{" "}
            <a
              href={`mailto:${brand.contactEmail}`}
              className="text-foreground underline underline-offset-2 hover:text-accent"
            >
              {brand.contactEmail}
            </a>
            .
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}

export function Section({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="font-serif text-2xl tracking-tight text-foreground">
        {heading}
      </h2>
      <div className="space-y-3 text-foreground/85">{children}</div>
    </section>
  );
}

export function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc pl-5 space-y-2 marker:text-muted-foreground">
      {items.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </ul>
  );
}
