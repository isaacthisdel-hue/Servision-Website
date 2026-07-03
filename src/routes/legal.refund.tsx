import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, Section, List } from "@/components/LegalPage";
import { brand } from "@/lib/site-content";

export const Route = createFileRoute("/legal/refund")({
  head: () => ({
    meta: [
      { title: "Refund & Cancellation Policy — Servision" },
      {
        name: "description",
        content:
          "Servision refund and cancellation policy, including setup fees, monthly billing, and early cancellation terms.",
      },
    ],
  }),
  component: RefundPage,
});

function RefundPage() {
  return (
    <LegalPage title="Refund & Cancellation Policy" updated="July 3, 2026">
      <p>
        This policy explains how refunds and cancellations are handled for all
        {" "}
        {brand.name} plans.
      </p>

      <Section heading="1. Setup fees">
        <p>
          Setup fees cover the on-site scanning session and the initial
          production of your 3D and AR models. Setup fees are non-refundable
          once work has started, including scheduling of the on-site visit or
          the beginning of model production.
        </p>
      </Section>

      <Section heading="2. Monthly payments">
        <p>
          Monthly subscription payments are non-refundable once a billing cycle
          has begun. Cancelling a subscription does not entitle the client to a
          refund of the current month.
        </p>
      </Section>

      <Section heading="3. 12-month commitment">
        <p>
          The Starter and Growth plans require a 12-month commitment, billed
          monthly. The Franchise plan is offered on an annual contract with
          terms tailored to the group.
        </p>
      </Section>

      <Section heading="4. Early cancellation">
        <p>
          Clients may cancel before the end of the 12-month term, but early
          cancellation is subject to a penalty equal to{" "}
          <strong>50% of the remaining contract value</strong>. This is
          calculated as 50% of the monthly fee multiplied by the number of
          months remaining in the current term. This structure allows{" "}
          {brand.name} to maintain stable service through seasonal fluctuations
          in the client's business.
        </p>
      </Section>

      <Section heading="5. Exceptions">
        <p>
          Refunds or credit may be issued at our discretion in cases of
          technical failure where the service cannot be delivered as described
          and cannot be reasonably restored. Requests must be submitted to{" "}
          {brand.contactEmail} with a description of the issue.
        </p>
      </Section>

      <Section heading="6. How to cancel">
        <List
          items={[
            <>
              Send a written cancellation request to{" "}
              <a
                href={`mailto:${brand.contactEmail}`}
                className="text-foreground underline underline-offset-2 hover:text-accent"
              >
                {brand.contactEmail}
              </a>{" "}
              from the email address on file.
            </>,
            "Include the restaurant name and the reason for cancellation.",
            "We will confirm receipt and outline any remaining charges within a reasonable time frame.",
          ]}
        />
      </Section>
    </LegalPage>
  );
}
