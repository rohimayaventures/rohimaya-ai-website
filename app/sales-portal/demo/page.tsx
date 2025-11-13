import SectionHeader from '@/components/SectionHeader';
import Link from 'next/link';

export const metadata = {
  title: 'Demo Hub - Sales Portal - Rohimaya Health AI',
  description: 'Access demo environments and sales resources',
};

export default function SalesDemoPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <SectionHeader eyebrow="Sales Portal" title="Demo Hub" />

      <p className="mb-12 text-lg text-lunarBlue/80">
        Product demos, sales decks, case studies, and customer resources.
      </p>

      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-moonWhite">Live Product Demos</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <DemoCard
            title="EclipseLink AI Demo"
            description="Interactive walkthrough of signal-driven clinical handoffs"
            href="#"
            available
          />
          <DemoCard
            title="Phoenix & Peacock Honors Demo"
            description="See how AI-powered recognition drives retention"
            href="#"
            available
          />
          <DemoCard
            title="Rounds Assist Demo"
            description="Bedside rounds workflows and escalation support"
            href="#"
            available={false}
          />
          <DemoCard
            title="Intake Navigator Demo"
            description="Patient intake checklists and risk flagging"
            href="#"
            available={false}
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-moonWhite">Sales Resources</h2>
        <div className="space-y-4">
          <ResourceLink
            title="Product Overview Deck (PDF)"
            description="Complete product suite and value proposition"
            href="#"
          />
          <ResourceLink
            title="ROI Calculator (Excel)"
            description="Time savings and cost reduction modeling"
            href="#"
          />
          <ResourceLink
            title="Case Studies"
            description="Customer success stories and outcomes"
            href="/case-studies"
          />
          <ResourceLink
            title="Security & Compliance Brief"
            description="HIPAA compliance and planned security certifications"
            href="/security"
          />
          <ResourceLink
            title="Pricing & Packaging Guide"
            description="Current pricing models and contract terms"
            href="#"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-moonWhite">Customer Onboarding</h2>
        <div className="space-y-4">
          <ResourceLink
            title="Implementation Timeline"
            description="Typical 30/60/90-day rollout process"
            href="#"
          />
          <ResourceLink
            title="Training Materials"
            description="User guides, video tutorials, and quick-start resources"
            href="#"
          />
          <ResourceLink
            title="Technical Requirements"
            description="EHR integration specs and infrastructure needs"
            href="#"
          />
        </div>
      </section>

      <section className="rounded-lg border border-peacockTeal/30 bg-peacockTeal/5 p-6">
        <h3 className="mb-2 text-lg font-semibold text-peacockTeal">Need Help?</h3>
        <p className="mb-4 text-lunarBlue/80">
          For questions about demos, pricing, or customer implementations, reach out to the sales team.
        </p>
        <a
          href="mailto:sales@rohimaya.ai"
          className="inline-block rounded-md bg-peacockTeal px-6 py-2 font-medium text-eclipseNavy transition hover:bg-peacockTeal/90"
        >
          Contact Sales
        </a>
      </section>
    </main>
  );
}

function DemoCard({
  title,
  description,
  href,
  available,
}: {
  title: string;
  description: string;
  href: string;
  available: boolean;
}) {
  return (
    <div
      className={`rounded-lg border p-6 ${
        available
          ? 'border-lunarBlue/30 bg-eclipseNavy/30 hover:border-peacockTeal/50'
          : 'border-lunarBlue/20 bg-eclipseNavy/10 opacity-60'
      }`}
    >
      <div className="mb-2 flex items-start justify-between">
        <h3 className="font-semibold text-moonWhite">{title}</h3>
        {!available && (
          <span className="rounded-full bg-lunarBlue/30 px-2 py-0.5 text-xs text-lunarBlue/80">
            Coming Soon
          </span>
        )}
      </div>
      <p className="mb-4 text-sm text-lunarBlue/70">{description}</p>
      {available ? (
        <Link
          href={href}
          className="inline-block text-sm font-medium text-peacockTeal hover:underline"
        >
          Launch Demo →
        </Link>
      ) : (
        <span className="text-sm text-lunarBlue/50">Demo in development</span>
      )}
    </div>
  );
}

function ResourceLink({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="block rounded-lg border border-lunarBlue/30 bg-eclipseNavy/30 p-4 transition hover:border-peacockTeal/50"
    >
      <h3 className="mb-1 font-semibold text-moonWhite">{title}</h3>
      <p className="text-sm text-lunarBlue/70">{description}</p>
    </Link>
  );
}
