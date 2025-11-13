import SectionHeader from '@/components/SectionHeader';

export const metadata = {
  title: 'Careers - Rohimaya Health AI',
  description: 'Join our mission to transform healthcare with AI',
};

export default function CareersPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <SectionHeader eyebrow="Join Us" title="Careers" />
      
      <p className="mb-12 text-lg text-lunarBlue/80">
        We're building AI that saves lives and gives time back to healthcare teams.
      </p>

      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-moonWhite">Open Positions</h2>
        
        <div className="space-y-4">
          <div className="rounded-lg border border-lunarBlue/30 bg-eclipseNavy/30 p-6">
            <h3 className="text-xl font-semibold text-peacockTeal">Senior Full-Stack Engineer</h3>
            <p className="mt-2 text-sm text-lunarBlue/70">Remote · Full-time</p>
            <p className="mt-3 text-lunarBlue/80">
              Build production healthcare AI systems with Next.js, TypeScript, and Python.
            </p>
          </div>

          <div className="rounded-lg border border-lunarBlue/30 bg-eclipseNavy/30 p-6">
            <h3 className="text-xl font-semibold text-peacockTeal">Clinical Success Manager</h3>
            <p className="mt-2 text-sm text-lunarBlue/70">San Francisco · Full-time</p>
            <p className="mt-3 text-lunarBlue/80">
              RN or MD background required. Help hospitals deploy and optimize our products.
            </p>
          </div>

          <div className="rounded-lg border border-lunarBlue/30 bg-eclipseNavy/30 p-6">
            <h3 className="text-xl font-semibold text-peacockTeal">Machine Learning Engineer</h3>
            <p className="mt-2 text-sm text-lunarBlue/70">Remote · Full-time</p>
            <p className="mt-3 text-lunarBlue/80">
              Build and deploy healthcare prediction models. Experience with PyTorch, transformers, and clinical data.
            </p>
          </div>

          <div className="rounded-lg border border-lunarBlue/30 bg-eclipseNavy/30 p-6">
            <h3 className="text-xl font-semibold text-peacockTeal">Healthcare Data Engineer</h3>
            <p className="mt-2 text-sm text-lunarBlue/70">Remote · Full-time</p>
            <p className="mt-3 text-lunarBlue/80">
              Build HIPAA-compliant data pipelines integrating EHR systems, HL7/FHIR, and cloud infrastructure.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-moonWhite">Why Rohimaya?</h2>
        <ul className="space-y-3 text-lunarBlue/80">
          <li className="flex items-start">
            <span className="mr-3 text-lg">🏥</span>
            <div>
              <strong className="text-moonWhite">Impact:</strong> Your code directly helps nurses and doctors save lives
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-lg">💰</span>
            <div>
              <strong className="text-moonWhite">Equity:</strong> Competitive salary + meaningful equity in early-stage company
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-lg">🌎</span>
            <div>
              <strong className="text-moonWhite">Remote-First:</strong> Work from anywhere with flexible hours
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-lg">🧑‍⚕️</span>
            <div>
              <strong className="text-moonWhite">Healthcare:</strong> Premium medical, dental, vision for you and family
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-lg">📚</span>
            <div>
              <strong className="text-moonWhite">Growth:</strong> Conference budget, learning stipend, mentorship
            </div>
          </li>
        </ul>
      </section>

      <section className="rounded-lg border border-peacockTeal/30 bg-peacockTeal/5 p-6">
        <h2 className="mb-4 text-2xl font-semibold text-peacockTeal">How to Apply</h2>
        <p className="mb-4 text-lunarBlue/80">
          Email{' '}
          <a href="mailto:careers@rohimaya.ai" className="text-peacockTeal hover:underline">
            careers@rohimaya.ai
          </a>{' '}
          with:
        </p>
        <ul className="space-y-2 text-lunarBlue/80">
          <li className="flex items-start">
            <span className="mr-2 text-peacockTeal">•</span>
            <span>Resume/CV</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-peacockTeal">•</span>
            <span>Link to portfolio or relevant work samples</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-peacockTeal">•</span>
            <span>Brief note on why you're interested in healthcare AI</span>
          </li>
        </ul>
      </section>
    </main>
  );
}
