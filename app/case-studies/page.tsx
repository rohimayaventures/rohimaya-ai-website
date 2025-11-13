import SectionHeader from '@/components/SectionHeader';

export const metadata = {
  title: 'Pilot Program - Rohimaya Health AI',
  description: 'Join our pilot program to shape the future of clinical handoffs and staff recognition.',
};

export default function CaseStudies() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <SectionHeader eyebrow="Early Access" title="Pilot Program" />
      <p className="mb-8 text-lg text-lunarBlue/80">
        We're currently in development and seeking design partners to help validate our products.
      </p>
      
      <div className="rounded-lg border-2 border-peacockTeal bg-peacockTeal/5 p-8 mb-12">
        <h2 className="text-2xl font-semibold text-eclipseNavy mb-4">
          🚀 Pilot Program Applications Now Open
        </h2>
        <p className="text-lunarBlue mb-6">
          Interested in being part of our early pilot program? We're looking for forward-thinking 
          healthcare organizations to help shape the future of clinical handoffs and staff recognition.
        </p>
        <p className="text-sm text-lunarBlue mb-6">
          <strong>Benefits for pilot partners:</strong> Early access to products, discounted pricing, 
          direct input on feature development, and priority support.
        </p>
        <a 
          href="/contact" 
          className="inline-flex items-center gap-2 rounded-lg bg-peacockTeal px-6 py-3 font-semibold text-white hover:bg-peacockTeal/90 transition-all"
        >
          Apply for Pilot Program →
        </a>
      </div>

      <div className="mb-12">
        <h3 className="text-xl font-semibold text-eclipseNavy mb-6">
          Industry Problems We're Solving
        </h3>
        <p className="text-lunarBlue mb-6">
          Based on published healthcare research and industry data:
        </p>
        
        <div className="space-y-6">
          <article className="rounded-lg border border-lunarBlue/30 bg-white p-6">
            <h4 className="font-semibold text-peacockTeal mb-3 text-lg">
              Clinical Handoffs Take Too Long
            </h4>
            <p className="text-lunarBlue mb-3">
              Industry research shows nurses spend 15+ minutes per patient on handoff documentation, 
              leading to overtime costs, delayed patient care, and nurse fatigue.
            </p>
            <p className="text-sm text-lunarBlue/70">
              <strong>Our solution:</strong> EclipseLink AI aims to reduce handoff time to under 30 seconds 
              through voice-powered SBAR generation.
            </p>
          </article>

          <article className="rounded-lg border border-lunarBlue/30 bg-white p-6">
            <h4 className="font-semibold text-peacockTeal mb-3 text-lg">
              Healthcare Staff Burnout & Turnover
            </h4>
            <p className="text-lunarBlue mb-3">
              Healthcare organizations face 18-20% annual nurse turnover, costing $40,000-$64,000 
              per nurse to replace. Lack of recognition is a top contributor to burnout.
            </p>
            <p className="text-sm text-lunarBlue/70">
              <strong>Our solution:</strong> Phoenix & Peacock Honors™ provides a compliance-friendly 
              gamification system that celebrates clinical excellence and drives engagement.
            </p>
          </article>

          <article className="rounded-lg border border-lunarBlue/30 bg-white p-6">
            <h4 className="font-semibold text-peacockTeal mb-3 text-lg">
              Preventable Patient Safety Events
            </h4>
            <p className="text-lunarBlue mb-3">
              The Joint Commission cites poor handoff communication as a leading cause of adverse events. 
              Early warning systems can help prevent patient deterioration.
            </p>
            <p className="text-sm text-lunarBlue/70">
              <strong>Our solution:</strong> Predictive alerting aims to flag potential patient 
              deterioration 6-12 hours in advance, enabling proactive intervention.
            </p>
          </article>
        </div>
      </div>

      <div className="rounded-lg bg-lunarBlue/5 border border-lunarBlue/20 p-6">
        <h3 className="font-semibold text-eclipseNavy mb-2">
          Ready to Join Our Pilot?
        </h3>
        <p className="text-sm text-lunarBlue mb-4">
          We're targeting Q1 2026 launch with 2-3 healthcare organizations. Space is limited.
        </p>
        <a href="/contact" className="text-peacockTeal font-semibold hover:underline">
          Contact us to learn more →
        </a>
      </div>
    </main>
  );
}
