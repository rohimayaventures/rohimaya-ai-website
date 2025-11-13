export const metadata = {
  title: 'Partners - Rohimaya Health AI',
  description: 'Seeking healthcare organizations and technology partners for our pilot program',
};

export default function PartnersPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="mb-6 text-4xl font-bold text-moonWhite">Partners</h1>
      
      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-lunarBlue/90">
          We're seeking partnerships with healthcare organizations and technology providers to build and validate AI solutions for clinical teams.
        </p>

        <div className="mt-8 rounded-lg border border-peacockTeal/30 bg-peacockTeal/10 p-6">
          <h2 className="text-xl font-semibold text-peacockTeal mb-3">🤝 Partnership Opportunities</h2>
          <p className="text-lunarBlue/90 mb-4">
            Currently building our partner ecosystem for Q1 2026 pilot program launch.
          </p>
        </div>

        <h2 className="mt-12 text-2xl font-semibold text-moonWhite">We're Looking For</h2>
        
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-lunarBlue/30 bg-eclipseNavy/30 p-6">
            <h3 className="text-lg font-semibold text-peacockTeal">🏥 Healthcare Systems</h3>
            <p className="mt-2 text-sm text-lunarBlue/80">
              Forward-thinking hospitals and clinics to pilot our clinical AI tools and provide feedback during development
            </p>
            <p className="mt-2 text-xs text-lunarBlue/60">
              Ideal: 100+ bed facilities with existing EMR systems
            </p>
          </div>

          <div className="rounded-lg border border-lunarBlue/30 bg-eclipseNavy/30 p-6">
            <h3 className="text-lg font-semibold text-peacockTeal">🔌 Integration Partners</h3>
            <p className="mt-2 text-sm text-lunarBlue/80">
              Healthcare technology companies interested in building connectors and co-developing solutions
            </p>
            <p className="mt-2 text-xs text-lunarBlue/60">
              Focus: EMR vendors, workflow automation, nurse communication tools
            </p>
          </div>

          <div className="rounded-lg border border-lunarBlue/30 bg-eclipseNavy/30 p-6">
            <h3 className="text-lg font-semibold text-peacockTeal">📊 Research Partners</h3>
            <p className="mt-2 text-sm text-lunarBlue/80">
              Academic institutions and research organizations for clinical validation and outcome studies
            </p>
            <p className="mt-2 text-xs text-lunarBlue/60">
              Areas: Nurse communication, patient safety, staff engagement
            </p>
          </div>

          <div className="rounded-lg border border-lunarBlue/30 bg-eclipseNavy/30 p-6">
            <h3 className="text-lg font-semibold text-peacockTeal">💼 Distribution Partners</h3>
            <p className="mt-2 text-sm text-lunarBlue/80">
              Healthcare consultants and solution providers to help bring our tools to market
            </p>
            <p className="mt-2 text-xs text-lunarBlue/60">
              Post-pilot program, targeting late 2026
            </p>
          </div>
        </div>

        <h2 className="mt-12 text-2xl font-semibold text-moonWhite">Partner Benefits</h2>
        <div className="mt-6 bg-lunarBlue/10 rounded-lg p-6">
          <ul className="space-y-3 text-lunarBlue/90">
            <li>✅ <strong>Early Access</strong>: First look at new AI tools before general release</li>
            <li>✅ <strong>Collaborative Development</strong>: Direct input on product features and roadmap</li>
            <li>✅ <strong>Preferred Pricing</strong>: Discounted rates for pilot partners who become customers</li>
            <li>✅ <strong>Co-Marketing</strong>: Joint case studies and conference presentations (with permission)</li>
            <li>✅ <strong>Priority Support</strong>: Dedicated technical and clinical support teams</li>
          </ul>
        </div>

        <h2 className="mt-12 text-2xl font-semibold text-moonWhite">Ready to Partner?</h2>
        <p className="mt-4 text-lunarBlue/90">
          We're accepting partnership applications for our 2026 pilot program. Limited spots available.
        </p>
        
        <div className="mt-6 p-6 rounded-lg border border-peacockTeal/30">
          <p className="text-lunarBlue/90 mb-4">
            <strong>Next Steps:</strong> Schedule a 30-minute discovery call to discuss partnership opportunities and pilot program requirements.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 rounded-lg bg-peacockTeal px-6 py-3 font-semibold text-eclipseNavy hover:bg-peacockTeal/90 transition-all"
          >
            Contact Partnership Team →
          </a>
        </div>
      </div>
    </main>
  );
}
