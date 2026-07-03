import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, Section, List } from "@/components/LegalPage";
import { brand } from "@/lib/site-content";

export const Route = createFileRoute("/legal/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Servision" },
      {
        name: "description",
        content:
          "How Servision collects, uses, stores, and protects information from restaurant clients.",
      },
      { name: "robots", content: "index,follow" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="July 3, 2026">
      <p>
        This Privacy Policy describes how {brand.name} ("we", "us", "our")
        collects, uses, and protects information provided by restaurant clients
        and visitors of {brand.domain}. By using our services, you agree to the
        practices described below.
      </p>

      <Section heading="1. Information we collect">
        <p>To deliver our AR menu generation and hosting service, we collect:</p>
        <List
          items={[
            "Restaurant name, address, and business type.",
            "Contact information: name of the point of contact, email address, and phone number.",
            "Photos, videos, and 3D scans of dishes provided by the client or captured on-site.",
            "Any 3D model files, images, or menu content uploaded to our systems.",
            "Basic usage data such as pages visited, form submissions, and technical logs.",
          ]}
        />
      </Section>

      <Section heading="2. Why we collect it">
        <p>
          We use this information solely to provide, operate, and improve the
          Servision service, including:
        </p>
        <List
          items={[
            "Generating photorealistic 3D and AR models of your dishes.",
            "Hosting and delivering those models through QR codes and direct links.",
            "Responding to inquiries and preparing proposals.",
            "Billing, account management, and support.",
          ]}
        />
      </Section>

      <Section heading="3. Where data is stored">
        <p>
          Client data and 3D assets are stored on secure cloud infrastructure,
          including third-party providers used for source control and deployment
          (such as GitHub and Vercel), and object storage used for hosting model
          files. All storage is protected by industry-standard access controls.
        </p>
      </Section>

      <Section heading="4. Who has access">
        <p>
          Access to client data is restricted to authorized {brand.name}{" "}
          administrators who need it to operate the service. We do not grant
          public or third-party access to your uploaded content beyond what is
          necessary to serve your AR menu to your own customers.
        </p>
      </Section>

      <Section heading="5. Data sharing">
        <p>
          We do not sell, rent, or share your data with third parties for
          marketing purposes. Information is only shared with infrastructure
          providers strictly for the purpose of running the service.
        </p>
      </Section>

      <Section heading="6. Cookies and sessions">
        <p>
          We use a minimal number of cookies, limited to authentication, session
          management, and basic site functionality. We do not use advertising
          cookies or third-party tracking pixels for marketing.
        </p>
      </Section>

      <Section heading="7. Data retention">
        <p>
          We retain client information for as long as the account is active and
          as required to comply with legal, accounting, and contractual
          obligations. Clients may request deletion of their data by contacting
          us at {brand.contactEmail}, subject to any outstanding contractual
          commitments.
        </p>
      </Section>

      <Section heading="8. Your rights">
        <p>
          You may request access to, correction of, or deletion of your
          information at any time by writing to {brand.contactEmail}. We will
          respond within a reasonable time frame.
        </p>
      </Section>

      <Section heading="9. Changes to this policy">
        <p>
          We may update this policy from time to time. The "Last updated" date
          above reflects the most recent revision.
        </p>
      </Section>
    </LegalPage>
  );
}
