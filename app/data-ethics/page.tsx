import { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';

export const metadata: Metadata = {
  title: 'Data Ethics - Rohimaya Health AI',
  description: 'Our principles and practices for responsible AI development in healthcare.',
};

export default function DataEthicsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <SectionHeader eyebrow="Principles" title="Data Ethics" />

      <p className="mb-12 text-xl text-lunarBlue/80">
        Building AI for healthcare requires more than technical excellence—it demands
        unwavering commitment to patient privacy, clinical safety, and ethical data use.
      </p>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-moonWhite">Our Core Principles</h2>
        <div className="space-y-6">
          <Principle
            title="Patient Privacy First"
            description="All patient data is de-identified, encrypted at rest and in transit, and processed under strict HIPAA compliance. We never train models on identifiable patient information or share data across organizations."
          />
          <Principle
            title="Clinical Safety by Design"
            description="Our AI systems are decision-support tools, not autonomous decision-makers. Every prediction surfaces to clinicians with transparent reasoning and appropriate uncertainty quantification."
          />
          <Principle
            title="Bias Monitoring & Mitigation"
            description="We actively monitor model performance across demographic groups and clinical contexts, continuously testing for and mitigating algorithmic bias that could lead to disparities in care."
          />
          <Principle
            title="Human Oversight & Accountability"
            description="Clinical experts review model outputs, validate recommendations, and maintain ultimate decision authority. AI augments clinical judgment—it never replaces it."
          />
          <Principle
            title="Transparency & Explainability"
            description="Clinicians understand why AI makes specific recommendations. We provide feature importance, confidence intervals, and clear reasoning for all predictions."
          />
          <Principle
            title="Data Minimization"
            description="We collect and process only the minimum data necessary for clinical value. Retention policies ensure data is purged when no longer needed for product function or regulatory compliance."
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-moonWhite">Governance & Oversight</h2>
        <p className="mb-4 text-lunarBlue/80">
          Our internal Data Ethics Review Board evaluates all new AI features, model updates,
          and data practices. The board includes clinical advisors, data scientists, legal
          counsel, and patient advocates.
        </p>
        <p className="text-lunarBlue/80">
          We conduct quarterly audits of model performance, bias metrics, and data handling
          practices. Results are reviewed by executive leadership and inform product roadmaps.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-moonWhite">Patient Rights</h2>
        <p className="mb-4 text-lunarBlue/80">
          Patients have the right to:
        </p>
        <ul className="space-y-2 text-lunarBlue/80">
          <li className="flex items-start">
            <span className="mr-2 text-peacockTeal">•</span>
            <span>Understand how their de-identified data is used to improve care quality</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-peacockTeal">•</span>
            <span>Request deletion of their data from our systems (subject to regulatory retention requirements)</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-peacockTeal">•</span>
            <span>Know when AI tools are used in their care decisions</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-peacockTeal">•</span>
            <span>Access transparent explanations of AI-generated recommendations affecting their treatment</span>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-moonWhite">Research & Academic Collaboration</h2>
        <p className="mb-4 text-lunarBlue/80">
          We partner with academic medical centers and research institutions to advance
          healthcare AI responsibly. All research collaborations:
        </p>
        <ul className="space-y-2 text-lunarBlue/80">
          <li className="flex items-start">
            <span className="mr-2 text-peacockTeal">•</span>
            <span>Require IRB approval and informed consent where applicable</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-peacockTeal">•</span>
            <span>Use de-identified or synthetic data wherever possible</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-peacockTeal">•</span>
            <span>Include data use agreements with strict privacy protections</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-peacockTeal">•</span>
            <span>Publish findings in peer-reviewed journals to contribute to scientific knowledge</span>
          </li>
        </ul>
      </section>

      <section className="rounded-lg border border-peacockTeal/30 bg-peacockTeal/5 p-6">
        <h3 className="mb-2 text-lg font-semibold text-peacockTeal">Questions or Concerns?</h3>
        <p className="mb-4 text-lunarBlue/80">
          We welcome questions about our data practices, ethical frameworks, and governance processes.
        </p>
        <a
          href="mailto:privacy@rohimaya.ai"
          className="inline-block rounded-md bg-peacockTeal px-6 py-2 font-medium text-eclipseNavy transition hover:bg-peacockTeal/90"
        >
          Contact Privacy Team
        </a>
      </section>
    </main>
  );
}

function Principle({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg border border-lunarBlue/30 bg-eclipseNavy/20 p-6">
      <h3 className="mb-2 text-lg font-semibold text-peacockTeal">{title}</h3>
      <p className="text-lunarBlue/80">{description}</p>
    </div>
  );
}
