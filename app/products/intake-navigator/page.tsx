import { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import ComingSoonBadge from '@/components/ComingSoonBadge';

export const metadata: Metadata = {
  title: 'Intake Navigator - Rohimaya Health AI',
  description: 'Safer, smoother patient intake with AI-powered admission checklists, risk flags, and smoother transitions of care.',
};

export default function IntakeNavigatorPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <div className="mb-8 flex items-start justify-between">
        <SectionHeader eyebrow="Product" title="Intake Navigator" />
        <ComingSoonBadge />
      </div>

      <p className="mb-8 text-xl text-peacockTeal/90">
        Safer, smoother patient intake
      </p>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-moonWhite">Overview</h2>
        <p className="mb-4 text-lunarBlue/80">
          Intake Navigator streamlines patient admission workflows with intelligent
          checklists, automated risk flagging, and seamless care transition support.
          Designed for admission nurses and care coordinators managing high-volume
          intake processes.
        </p>
        <p className="text-lunarBlue/80">
          By surfacing critical patient information at the right time and automating
          routine documentation tasks, Intake Navigator reduces admission errors,
          accelerates bed turnover, and ensures no critical details slip through
          the cracks during patient onboarding.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-moonWhite">Key Features</h2>
        <ul className="space-y-3 text-lunarBlue/80">
          <li className="flex items-start">
            <span className="mr-2 text-peacockTeal">•</span>
            <span>
              <strong className="text-moonWhite">Smart Admission Checklists:</strong>{' '}
              Dynamic checklists that adapt to patient acuity, diagnosis, and unit-specific
              protocols
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-peacockTeal">•</span>
            <span>
              <strong className="text-moonWhite">Automated Risk Flags:</strong>{' '}
              Real-time alerts for fall risk, infection precautions, allergies, and
              medication interactions
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-peacockTeal">•</span>
            <span>
              <strong className="text-moonWhite">Transition Documentation:</strong>{' '}
              Auto-generated handoff notes and care summaries for smooth ED-to-floor
              or facility-to-facility transfers
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-peacockTeal">•</span>
            <span>
              <strong className="text-moonWhite">EHR Integration:</strong>{' '}
              Pulls patient history, medications, and allergies directly from your EMR
            </span>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-moonWhite">Who It's For</h2>
        <p className="mb-4 text-lunarBlue/80">
          Intake Navigator is purpose-built for:
        </p>
        <ul className="space-y-2 text-lunarBlue/80">
          <li className="flex items-start">
            <span className="mr-2 text-peacockTeal">•</span>
            <span>Admission nurses managing multiple concurrent patient intakes</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-peacockTeal">•</span>
            <span>Care coordinators handling facility-to-facility transfers</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-peacockTeal">•</span>
            <span>Emergency department staff coordinating patient admissions</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-peacockTeal">•</span>
            <span>Unit managers seeking to reduce admission-related safety events</span>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-moonWhite">Coming Soon</h2>
        <p className="mb-4 text-lunarBlue/80">
          Intake Navigator is currently in development. We're working closely with
          hospital admission teams to refine workflows and ensure seamless integration
          with existing EMR systems.
        </p>
        <p className="text-lunarBlue/80">
          Interested in early access or pilot program participation?{' '}
          <a
            href="/contact"
            className="text-peacockTeal hover:underline"
          >
            Get in touch
          </a>
          .
        </p>
      </section>
    </main>
  );
}
