import { Link } from "@tanstack/react-router";
import { brand } from "@/lib/site-content";

const legalLinks = [
  { to: "/legal/privacy", label: "Privacy Policy" },
  { to: "/legal/terms", label: "Terms of Service" },
  { to: "/legal/refund", label: "Refund & Cancellation" },
  { to: "/legal/subscription", label: "Subscription Agreement" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 py-10 mt-16">
      <div className="mx-auto max-w-6xl px-4 flex flex-col gap-6 text-sm text-muted-foreground">
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <img
              src={brand.logoUrl}
              alt={brand.name}
              className="h-4 w-auto mix-blend-multiply"
              draggable={false}
            />
            <span>· {brand.domain}</span>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between text-xs">
          <div>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </div>
          <a
            href={`mailto:${brand.contactEmail}`}
            className="hover:text-foreground transition-colors"
          >
            {brand.contactEmail}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
