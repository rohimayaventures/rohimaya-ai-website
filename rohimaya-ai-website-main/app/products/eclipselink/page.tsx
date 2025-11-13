import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EclipseLink AI - Rohimaya Health AI',
  description: 'Voice-powered clinical handoffs with predictive intelligence',
};

export default function EclipseLinkPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="mb-4 text-4xl font-bold text-eclipseNavy">EclipseLink AI</h1>
      
      <p className="mb-8 text-xl font-semibold text-lunarBlue">
        Voice-Powered Clinical Handoffs with Predictive Intelligence
      </p>
      
      <p className="mb-8 text-lg text-lunarBlue">
        EclipseLink AI transforms clinical communication by automating handoff documentation and providing early warning alerts for patient deterioration.
      </p>

      <hr className="my-8 border-t border-gray-300" />

      <h2 className="mb-6 text-3xl font-bold text-eclipseNavy">Key Features</h2>

      <div className="mb-6">
        <h3 className="mb-2 text-2xl font-semibold text-peacockTeal">Voice Capture</h3>
        <p className="text-lunarBlue">Speak naturally—AI transcribes and structures your handoff notes in real-time.</p>
      </div>

      <div className="mb-6">
        <h3 className="mb-2 text-2xl font-semibold text-peacockTeal">SBAR in 30 Seconds</h3>
        <p className="text-lunarBlue">Complete Situation-Background-Assessment-Recommendation reports generated instantly.</p>
      </div>

      <div className="mb-6">
        <h3 className="mb-2 text-2xl font-semibold text-peacockTeal">Update-Only Model</h3>
        <p className="text-lunarBlue">Only document what changed—AI maintains context from previous shifts.</p>
      </div>

      <div className="mb-6">
        <h3 className="mb-2 text-2xl font-semibold text-peacockTeal">Predictive Alerts (6–12h)</h3>
        <p className="text-lunarBlue">Machine learning models flag patients at risk of deterioration before crisis points.</p>
      </div>

      <div className="mb-6">
        <h3 className="mb-2 text-2xl font-semibold text-peacockTeal">Real-Time Translation</h3>
        <p className="text-lunarBlue">Multilingual support ensures clear communication across diverse care teams.</p>
      </div>

      <div className="mb-6">
        <h3 className="mb-2 text-2xl font-semibold text-peacockTeal">Role-Based Dashboards</h3>
        <p className="text-lunarBlue">Customized views for nurses, physicians, and administrators.</p>
      </div>

      <hr className="my-8 border-t border-gray-300" />

      <h2 className="mb-6 text-3xl font-bold text-eclipseNavy">How It Works</h2>

      <ol className="mb-8 list-decimal space-y-3 pl-6 text-lunarBlue">
        <li><strong>Record Your Handoff</strong>: Use voice input or quick updates via mobile/desktop</li>
        <li><strong>AI Structures</strong>: Automatically formats into SBAR with clinical context</li>
        <li><strong>Review & Send</strong>: Verify accuracy, add notes, and transmit to incoming staff</li>
        <li><strong>Monitor Alerts</strong>: Receive predictive warnings for high-risk patients</li>
      </ol>

      <hr className="my-8 border-t border-gray-300" />

      <h2 className="mb-6 text-3xl font-bold text-eclipseNavy">Benefits</h2>

      <ul className="mb-8 list-disc space-y-2 pl-6 text-lunarBlue">
        <li><strong>Reduce Documentation Time</strong>: From 15 minutes to under 30 seconds per patient</li>
        <li><strong>Improve Accuracy</strong>: Eliminate transcription errors and missed details</li>
        <li><strong>Enhance Patient Safety</strong>: Early detection of deterioration trends</li>
        <li><strong>Support Compliance</strong>: Automated audit trails and HIPAA-compliant encryption</li>
      </ul>

      <hr className="my-8 border-t border-gray-300" />

      <h2 className="mb-6 text-3xl font-bold text-eclipseNavy">Integration</h2>

      <p className="mb-4 text-lunarBlue">EclipseLink AI integrates seamlessly with:</p>

      <ul className="mb-8 list-disc space-y-2 pl-6 text-lunarBlue">
        <li>Epic, Cerner, Meditech EHRs</li>
        <li>Shift scheduling systems</li>
        <li>Mobile nursing apps</li>
        <li>Secure messaging platforms</li>
      </ul>

      <hr className="my-8 border-t border-gray-300" />

      <div className="flex gap-4 text-lg">
        <a href="/contact" className="font-semibold text-peacockTeal hover:underline">Get Started</a>
        <span className="text-gray-400">·</span>
        <a href="/deck" className="font-semibold text-peacockTeal hover:underline">View Deck</a>
      </div>
    </div>
  );
}
