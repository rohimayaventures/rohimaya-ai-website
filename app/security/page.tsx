export default function Security() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-6 text-3xl font-semibold text-moonWhite">Security & Compliance</h1>
      
      <div className="prose prose-invert max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-medium text-peacockTeal">Our Commitment</h2>
          <p className="text-lunarBlue/80">
            Rohimaya Health AI is built for healthcare from the ground up. We understand that protecting 
            patient data is not just a requirement—it's a responsibility.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-medium text-peacockTeal">HIPAA Compliance</h2>
          <ul className="list-disc space-y-2 pl-6 text-lunarBlue/80">
            <li>Business Associate Agreements (BAA) available for all customers</li>
            <li>End-to-end encryption for data in transit and at rest</li>
            <li>Regular security audits and penetration testing</li>
            <li>Comprehensive audit logging and access controls</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-medium text-peacockTeal">Data Handling</h2>
          <p className="text-lunarBlue/80">
            All demo and training data is 100% synthetic—no real PHI is used in testing or demonstrations.
            Production deployments are isolated per organization with strict access controls.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-medium text-peacockTeal">Certifications</h2>
          <p className="text-sm text-lunarBlue/70">
            SOC 2 Type II and HITRUST certifications planned for post-commercial launch (2027 target).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-medium text-peacockTeal">Report a Security Issue</h2>
          <p className="text-lunarBlue/80">
            Contact us at <a href="mailto:security@rohimaya.ai" className="underline hover:text-peacockTeal">security@rohimaya.ai</a> for
            responsible disclosure.
          </p>
        </section>
      </div>
    </main>
  );
}
