import SectionHeader from '@/components/SectionHeader';

export const metadata = {
  title: 'Blog - Rohimaya Health AI',
  description: 'Insights on healthcare AI, clinical workflows, and product development.',
};

export default function Blog() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <SectionHeader eyebrow="Coming Soon" title="Blog" />
      <p className="mb-12 text-lg text-lunarBlue/80">
        We're preparing insights on healthcare AI, clinical workflows, and our product development journey.
      </p>

      <div className="rounded-lg border border-peacockTeal/20 bg-peacockTeal/5 p-8 mb-12">
        <div className="flex items-start gap-4">
          <span className="text-4xl">📝</span>
          <div>
            <h2 className="text-xl font-semibold text-eclipseNavy mb-3">
              Blog Launching Q1 2026
            </h2>
            <p className="text-lunarBlue mb-4">
              We're building our content library on healthcare AI, clinical workflow optimization, 
              and lessons from our product development journey. Subscribe to get notified when we publish.
            </p>
            <a 
              href="mailto:info@rohimaya.ai?subject=Blog%20Subscription%20Request" 
              className="inline-flex items-center gap-2 text-peacockTeal font-semibold hover:underline"
            >
              Subscribe via email →
            </a>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-eclipseNavy mb-6">
          Topics We'll Cover
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-lg border border-lunarBlue/20 p-5">
            <h4 className="font-semibold text-peacockTeal mb-2">
              Healthcare AI & Clinical Communication
            </h4>
            <ul className="text-sm text-lunarBlue space-y-1">
              <li>• AI in clinical handoffs</li>
              <li>• Voice recognition in healthcare</li>
              <li>• Predictive analytics for patient safety</li>
            </ul>
          </div>

          <div className="rounded-lg border border-lunarBlue/20 p-5">
            <h4 className="font-semibold text-peacockTeal mb-2">
              Staff Engagement & Recognition
            </h4>
            <ul className="text-sm text-lunarBlue space-y-1">
              <li>• Gamification in healthcare</li>
              <li>• Nurse burnout and retention</li>
              <li>• Compliance-friendly recognition systems</li>
            </ul>
          </div>

          <div className="rounded-lg border border-lunarBlue/20 p-5">
            <h4 className="font-semibold text-peacockTeal mb-2">
              Product Development
            </h4>
            <ul className="text-sm text-lunarBlue space-y-1">
              <li>• Building HIPAA-compliant AI products</li>
              <li>• User research with clinicians</li>
              <li>• Lessons from pilot programs</li>
            </ul>
          </div>

          <div className="rounded-lg border border-lunarBlue/20 p-5">
            <h4 className="font-semibold text-peacockTeal mb-2">
              Industry Insights
            </h4>
            <ul className="text-sm text-lunarBlue space-y-1">
              <li>• Healthcare workflow challenges</li>
              <li>• Clinical communication best practices</li>
              <li>• Future of AI in nursing</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 p-6 rounded-lg bg-lunarBlue/5 border border-lunarBlue/20">
        <p className="text-sm text-lunarBlue">
          <strong>In the meantime:</strong> Follow our development progress in the{' '}
          <a href="/changelog" className="text-peacockTeal font-semibold hover:underline">
            Development Timeline
          </a>
          {' '}or{' '}
          <a href="/contact" className="text-peacockTeal font-semibold hover:underline">
            contact us
          </a>
          {' '}to learn more about our pilot program.
        </p>
      </div>
    </main>
  );
}
