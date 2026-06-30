import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { brand, pricingTiers } from "@/lib/site-content";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnjkbeaz";

type Search = { plan?: string };

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    plan: typeof search.plan === "string" ? search.plan : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Get a Demo — Servision" },
      {
        name: "description",
        content:
          "Tell us about your restaurant and we'll come scan your dishes. First QR codes live within a week.",
      },
      { property: "og:title", content: "Get a Demo — Servision" },
      {
        property: "og:description",
        content:
          "Tell us about your restaurant and we'll come scan your dishes. First QR codes live within a week.",
      },
    ],
  }),
  component: ContactPage,
});

const leadSchema = z.object({
  full_name: z.string().trim().min(1, "Required").max(120),
  email: z.string().trim().email("Enter a valid email").max(254),
  phone: z
    .string()
    .trim()
    .max(40)
    .optional()
    .or(z.literal("")),
  restaurant_name: z.string().trim().min(1, "Required").max(160),
  restaurant_type: z.string().trim().max(80).optional().or(z.literal("")),
  city: z.string().trim().max(120).optional().or(z.literal("")),
  website: z.string().trim().max(255).optional().or(z.literal("")),
  dish_count: z
    .string()
    .trim()
    .optional()
    .or(z.literal("")),
  preferred_contact: z.string().trim().max(40).optional().or(z.literal("")),
  hear_about: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

function Field({
  label,
  htmlFor,
  required,
  hint,
  error,
  children,
  className = "",
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="block text-sm font-medium text-foreground mb-1.5">
        {label}
        {required && <span className="text-accent ml-0.5">*</span>}
      </label>
      {children}
      {error ? (
        <p className="mt-1 text-xs text-red-600">{error}</p>
      ) : hint ? (
        <p className="mt-1 text-xs text-muted-foreground">{hint}</p>
      ) : null}
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-ink/15 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition";

function ContactPage() {
  const navigate = useNavigate();
  const { plan: planParam } = Route.useSearch();
  const initialTier = pricingTiers.find((t) => t.id === planParam);

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [selectedPlan, setSelectedPlan] = useState<string>(initialTier?.id ?? "starter");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setServerError(null);
    setErrors({});

    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries()) as Record<string, string>;

    const parsed = leadSchema.safeParse(raw);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !fieldErrors[key]) {
          fieldErrors[key] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    const data = parsed.data;
    setSubmitting(true);
    try {
      const planTier = pricingTiers.find((t) => t.id === selectedPlan);
      const payload = {
        plan: planTier?.name ?? selectedPlan ?? "",
        name: data.full_name,
        full_name: data.full_name,
        email: data.email,
        phone: data.phone || "",
        restaurant_name: data.restaurant_name,
        restaurant_type: data.restaurant_type || "",
        city: data.city || "",
        website: data.website || "",
        dish_count: data.dish_count || "",
        preferred_contact: data.preferred_contact || "",
        hear_about: data.hear_about || "",
        message: data.message || "",
        _subject: `New Servision lead — ${data.restaurant_name} (${planTier?.name ?? selectedPlan})`,
      };

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(`Formspree error ${res.status}`);
      setSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error("Lead submission failed", err);
      setServerError(
        "Something went wrong submitting the form. Please try again or email us directly.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-2xl px-4 py-32 text-center">
          <div className="mx-auto mb-8 grid h-16 w-16 place-items-center rounded-full bg-accent/15 text-accent">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h1 className="font-serif text-5xl tracking-tight">Got it — thank you.</h1>
          <p className="mt-5 text-base text-muted-foreground">
            Your request landed safely. We'll reach out within one business day
            to plan a scan visit and walk you through your first dishes.
          </p>
          <div className="mt-10 flex justify-center gap-3">
            <button
              onClick={() => navigate({ to: "/" })}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-foreground/90 transition"
            >
              <ArrowLeft className="h-4 w-4" /> Back to site
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition mb-8"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>

        <div className="space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-beige px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-foreground/70">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Talk to us
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl tracking-tight leading-[1.05]">
            Tell us about your restaurant.
          </h1>
          <p className="text-base text-muted-foreground max-w-xl">
            A few details so we can prepare a real proposal — not a generic
            quote. We reply within one business day.
          </p>
        </div>

        <form onSubmit={onSubmit} noValidate className="space-y-6">
          {/* Plan selector */}
          <div className="surface rounded-2xl p-5">
            <p className="text-xs font-medium uppercase tracking-widest text-accent mb-3">
              Plan you're interested in
            </p>
            <div className="grid sm:grid-cols-3 gap-2">
              {pricingTiers.map((t) => {
                const active = selectedPlan === t.id;
                return (
                  <button
                    type="button"
                    key={t.id}
                    onClick={() => setSelectedPlan(t.id)}
                    className={`text-left rounded-xl border px-4 py-3 transition ${
                      active
                        ? "border-foreground bg-foreground text-background"
                        : "border-ink/15 hover:border-ink/40 bg-background"
                    }`}
                  >
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div
                      className={`text-xs mt-0.5 ${
                        active ? "text-background/70" : "text-muted-foreground"
                      }`}
                    >
                      {t.price}
                      {t.priceUnit ?? ""}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Your name" htmlFor="full_name" required error={errors.full_name}>
              <input
                id="full_name"
                name="full_name"
                type="text"
                autoComplete="name"
                required
                maxLength={120}
                className={inputClass}
                placeholder="Alex Tremblay"
              />
            </Field>
            <Field label="Email" htmlFor="email" required error={errors.email}>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                className={inputClass}
                placeholder="you@restaurant.com"
              />
            </Field>
            <Field label="Phone" htmlFor="phone" hint="Optional, but speeds things up" error={errors.phone}>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                maxLength={40}
                className={inputClass}
                placeholder="(514) 555-0199"
              />
            </Field>
            <Field
              label="Preferred contact"
              htmlFor="preferred_contact"
              error={errors.preferred_contact}
            >
              <select
                id="preferred_contact"
                name="preferred_contact"
                defaultValue="email"
                className={inputClass}
              >
                <option value="email">Email</option>
                <option value="phone">Phone call</option>
                <option value="text">Text / SMS</option>
              </select>
            </Field>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <Field
              label="Restaurant name"
              htmlFor="restaurant_name"
              required
              error={errors.restaurant_name}
            >
              <input
                id="restaurant_name"
                name="restaurant_name"
                type="text"
                required
                maxLength={160}
                className={inputClass}
                placeholder="Trattoria Nova"
              />
            </Field>
            <Field label="Cuisine / type" htmlFor="restaurant_type" error={errors.restaurant_type}>
              <input
                id="restaurant_type"
                name="restaurant_type"
                type="text"
                maxLength={80}
                className={inputClass}
                placeholder="Italian, sushi, brunch…"
              />
            </Field>
            <Field label="City" htmlFor="city" error={errors.city}>
              <input
                id="city"
                name="city"
                type="text"
                autoComplete="address-level2"
                maxLength={120}
                className={inputClass}
                placeholder="Montréal, QC"
              />
            </Field>
            <Field label="Website or Instagram" htmlFor="website" error={errors.website}>
              <input
                id="website"
                name="website"
                type="text"
                maxLength={255}
                className={inputClass}
                placeholder="trattorianova.ca / @trattorianova"
              />
            </Field>
            <Field
              label="How many dishes?"
              htmlFor="dish_count"
              hint="Rough number is fine"
              error={errors.dish_count}
            >
              <input
                id="dish_count"
                name="dish_count"
                type="number"
                min={1}
                max={500}
                className={inputClass}
                placeholder="10"
              />
            </Field>
            <Field label="How did you hear about us?" htmlFor="hear_about" error={errors.hear_about}>
              <input
                id="hear_about"
                name="hear_about"
                type="text"
                maxLength={120}
                className={inputClass}
                placeholder="Instagram, a friend, search…"
              />
            </Field>
          </div>

          <Field
            label="Anything we should know?"
            htmlFor="message"
            hint="Timing, specific dishes, questions — anything that helps us reply well."
            error={errors.message}
          >
            <textarea
              id="message"
              name="message"
              rows={5}
              maxLength={2000}
              className={`${inputClass} resize-y min-h-[120px]`}
              placeholder="We'd like to start with our 8 most-ordered dishes…"
            />
          </Field>

          {serverError && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {serverError}
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
            <p className="text-xs text-muted-foreground">
              By submitting, you agree we may contact you about Servision. We
              don't share your info.
            </p>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold hover:bg-foreground/90 disabled:opacity-60 disabled:cursor-not-allowed transition"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                </>
              ) : (
                <>
                  Send request <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </div>

          <p className="text-xs text-muted-foreground pt-4">
            Prefer email? Reach us at{" "}
            <a
              href={`mailto:${brand.contactEmail}`}
              className="text-foreground underline underline-offset-2 hover:text-accent"
            >
              {brand.contactEmail}
            </a>
            .
          </p>
        </form>
      </div>
    </main>
  );
}
