import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, Section, List } from "@/components/LegalPage";
import { brand } from "@/lib/site-content";

export const Route = createFileRoute("/legal/subscription")({
  head: () => ({
    meta: [
      { title: "Subscription Agreement — Servision" },
      {
        name: "description",
        content:
          "Servision subscription plans, pricing, billing terms, and cancellation rules.",
      },
    ],
  }),
  component: SubscriptionPage,
});

function Plan({
  name,
  price,
  setup,
  items,
}: {
  name: string;
  price: string;
  setup: string;
  items: string[];
}) {
  return (
    <div className="surface rounded-2xl p-6 space-y-3">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-2xl">{name}</h3>
        <div className="text-right">
          <div className="text-lg font-semibold">{price}</div>
          <div className="text-xs text-muted-foreground">{setup}</div>
        </div>
      </div>
      <ul className="list-disc pl-5 space-y-1.5 text-sm text-foreground/85 marker:text-muted-foreground">
        {items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </div>
  );
}

function SubscriptionPage() {
  return (
    <LegalPage title="Subscription Agreement" updated="July 3, 2026">
      <p>
        This Subscription Agreement describes the plans offered by {brand.name},
        how billing works, and the rules that apply to active subscriptions.
      </p>

      <Section heading="1. Plans and pricing">
        <div className="grid gap-4 pt-2">
          <Plan
            name="Starter"
            price="$49 / month"
            setup="$39 setup fee"
            items={[
              "Up to 10 dishes per location",
              "Photorealistic 3D + AR models",
              "Unique QR code for every dish",
              "Hosting included",
              "Annual Service Agreement, billed monthly",
            ]}
          />
          <Plan
            name="Growth"
            price="$99 / month"
            setup="$69 setup fee"
            items={[
              "Everything in Starter",
              "Up to 24 dishes per location",
              "One full menu refresh per year",
              "Priority dish updates",
              "Annual Service Agreement, billed monthly",
            ]}
          />
          <Plan
            name="Franchise"
            price="Custom pricing"
            setup="Annual contract"
            items={[
              "Unlimited dishes per location",
              "Multi-location rollout and support",
              "Custom branding and integrations",
              "Annual contract only",
            ]}
          />
        </div>
      </Section>

      <Section heading="2. Billing">
        <List
          items={[
            "Billing is automatic on a monthly cycle through our payment provider.",
            "By subscribing, clients authorize recurring charges to the payment method on file.",
            "An invoice is generated automatically for each successful payment.",
            "Setup fees are billed once, at the start of the engagement.",
          ]}
        />
      </Section>

      <Section heading="3. Annual Service Agreement">
        <p>
          Starter and Growth plans operate under an Annual Service Agreement,
          billed monthly over a 12-month term. The Franchise plan is offered
          on an annual contract with terms tailored to the group.
          Subscriptions renew automatically at the end of the annual term
          unless the client provides written notice of non-renewal. Clients
          may cancel at any time, subject to the early termination fee
          described in the Refund & Cancellation Policy.
        </p>
      </Section>

      <Section heading="4. Failed payments">
        <p>
          If a scheduled payment fails, we will attempt to notify the client
          and retry the charge. If the balance is not resolved within a
          reasonable grace period, the service may be suspended. Suspension
          does not terminate the contract or waive any remaining obligations.
        </p>
      </Section>

      <Section heading="5. Cancellation">
        <p>
          Accounts remain active until the cancellation terms in the Refund &
          Cancellation Policy are met. Early cancellation is subject to a
          penalty equal to 50% of the remaining contract value.
        </p>
      </Section>

      <Section heading="6. Changes to plans or pricing">
        <p>
          We may adjust future pricing or plan features with reasonable notice.
          Changes will not affect the pricing of active commitments during the
          current term.
        </p>
      </Section>

      <Section heading="7. Contact">
        <p>
          Questions about your subscription can be sent to{" "}
          <a
            href={`mailto:${brand.contactEmail}`}
            className="text-foreground underline underline-offset-2 hover:text-accent"
          >
            {brand.contactEmail}
          </a>
          .
        </p>
      </Section>
    </LegalPage>
  );
}
