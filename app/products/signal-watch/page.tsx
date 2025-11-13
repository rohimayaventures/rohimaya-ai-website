import { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import ComingSoonBadge from '@/components/ComingSoonBadge';

export const metadata: Metadata = {
  title: 'SignalWatch - Rohimaya Health AI',
  description: 'Real-time risk signals from the noise with continuous risk monitoring and alerting across units.',
};

export default function SignalWatchPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <div className="mb-8 flex items-start justify-between">
        <SectionHeader eyebrow="Product" title="SignalWatch" />
        <ComingSoonBadge />
      </div>

      <p className="mb-8 text-xl text-peacockTeal/90">
        Real-time risk signals from the noise
      </p>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-moonWhite">Overview</h2>
        <p className="mb-4 text-lunarBlue/80">
          SignalWatch is a continuous monitoring system that identifies and surfaces
          critical patient risk signals in real time. By analyzing vital signs, lab
          results, medication changes, and clinical documentation, SignalWatch alerts
          care teams to early warning signs of deterioration before they become crises.
        </p>
        <p className="text-lunarBlue/80">
          Unlike traditional alarm systems that generate noise and alert fatigue,
          SignalWatch uses AI to filter signal from noise—delivering actionable,
          context-aware notifications that help clinicians intervene early and
          prevent adverse events.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-moonWhite">Key Features</h2>
        <ul className="space-y-3 text-lunarBlue/80">
          <li className="flex items-start">
            <span className="mr-2 text-peacockTeal">•</span>
            <span>
              <strong className="text-moonWhite">Multi-Signal Analysis:</strong>{' '}
              Correlates vitals, labs, medications, and clinical notes to detect
              subtle patterns of deterioration
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-peacockTeal">•</span>
            <span>
              <strong className="text-moonWhite">Smart Alerting:</strong>{' '}
              Context-aware notifications that prioritize by acuity and clinical
              relevance, reducing alert fatigue
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-peacockTeal">•</span>
            <span>
              <strong className="text-moonWhite">Unit-Wide Dashboards:</strong>{' '}
              Real-time risk scorecards for charge nurses and unit managers to
              monitor entire units at a glance
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-peacockTeal">•</span>
            <span>
              <strong className="text-moonWhite">Predictive Early Warning:</strong>{' '}
              AI-powered predictions for sepsis, respiratory failure, cardiac events,
              and other high-risk conditions
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-peacockTeal">•</span>
            <span>
              <strong className="text-moonWhite">Escalation Workflows:</strong>{' '}
              Automated escalation pathways when risks exceed thresholds or remain
              unacknowledged
            </span>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-moonWhite">Who It's For</h2>
        <p className="mb-4 text-lunarBlue/80">
          SignalWatch is designed for:
        </p>
        <ul className="space-y-2 text-lunarBlue/80">
          <li className="flex items-start">
            <span className="mr-2 text-peacockTeal">•</span>
            <span>Charge nurses monitoring high-acuity medical-surgical units</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-peacockTeal">•</span>
            <span>Rapid response teams seeking earlier intervention opportunities</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-peacockTeal">•</span>
            <span>Quality and safety leaders tracking preventable adverse events</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-peacockTeal">•</span>
            <span>Hospital systems implementing early warning score protocols</span>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-moonWhite">Coming Soon</h2>
        <p className="mb-4 text-lunarBlue/80">
          SignalWatch is currently in development. We're partnering with hospital
          quality and safety teams to validate risk models and refine alert thresholds
          for maximum clinical utility with minimal noise.
        </p>
        <p className="text-lunarBlue/80">
          Interested in participating in our pilot program?{' '}
          <a
            href="/contact"
            className="text-peacockTeal hover:underline"
          >
            Contact us
          </a>{' '}
          to learn more.
        </p>
      </section>
    </main>
  );
}
