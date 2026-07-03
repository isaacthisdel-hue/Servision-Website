import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, Section, List } from "@/components/LegalPage";
import { brand } from "@/lib/site-content";

export const Route = createFileRoute("/legal/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Servision" },
      {
        name: "description",
        content:
          "The terms governing use of the Servision AR menu generation and hosting service.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="July 3, 2026">
      <p>
        These Terms of Service ("Terms") govern your use of the {brand.name}{" "}
        service. By subscribing to or using the service, you agree to these
        Terms.
      </p>

      <Section heading="1. The service">
        <p>
          {brand.name} provides AR menu generation and hosting for restaurants.
          This includes creating 3D and AR models of dishes, generating unique
          QR codes and direct links, and hosting the resulting experiences on
          our infrastructure.
        </p>
      </Section>

      <Section heading="2. Client responsibilities">
        <List
          items={[
            "You must have the legal right to upload, publish, and distribute all menu content, images, dish concepts, and brand assets you provide to us.",
            "You are responsible for the accuracy of the menu information you supply.",
            "You will not use the service to publish content that is illegal, infringing, misleading, or harmful.",
          ]}
        />
      </Section>

      <Section heading="3. Content ownership and license">
        <p>
          You retain ownership of the menu content and materials you provide.
          You grant {brand.name} a limited license to store, process, host, and
          display that content solely to operate the service on your behalf.
        </p>
      </Section>

      <Section heading="4. Limitation of responsibility">
        <p>
          {brand.name} is not responsible for misuse of uploaded content by the
          client or by third parties, nor for any legal issues arising from
          content the client did not have the right to provide.
        </p>
      </Section>

      <Section heading="5. Service availability">
        <p>
          We aim to maintain high availability, but the service depends in part
          on third-party infrastructure providers (including but not limited to
          GitHub and Vercel). Temporary interruptions may occur, and{" "}
          {brand.name} is not liable for downtime caused by those providers or
          by other events outside our reasonable control.
        </p>
      </Section>

      <Section heading="6. Suspension and termination">
        <p>
          We reserve the right to suspend or terminate accounts in cases of
          abuse of the service, violation of these Terms, or non-payment. See
          the Subscription Agreement for cancellation terms.
        </p>
      </Section>

      <Section heading="7. Warranty disclaimer">
        <p>
          The service is provided on an "as is" and "as available" basis. To
          the fullest extent permitted by law, {brand.name} disclaims all
          implied warranties, including merchantability and fitness for a
          particular purpose.
        </p>
      </Section>

      <Section heading="8. Governing law">
        <p>
          These Terms are governed by the laws of the Province of Quebec,
          Canada, without regard to conflict-of-law principles.
        </p>
      </Section>

      <Section heading="9. Changes">
        <p>
          We may update these Terms from time to time. Continued use of the
          service after changes constitutes acceptance of the updated Terms.
        </p>
      </Section>
    </LegalPage>
  );
}
