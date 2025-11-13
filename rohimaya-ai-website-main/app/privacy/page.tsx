export const metadata = {
  title: 'Privacy Policy - Rohimaya Health AI',
  description: 'Our commitment to protecting your privacy and data security',
}

export default function PrivacyPage() {
  return (
    <div className="section">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <h1 className="heading-lg mb-6 text-eclipseNavy">Privacy Policy</h1>
          <p className="mb-8 text-sm text-gray-600">
            <strong>Last Updated:</strong> November 12, 2025
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-lunarBlue">
                Rohimaya Health AI ("we," "our," or "us") is committed to protecting
                the privacy and security of your information. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information
                when you use our products, including EclipseLink AI and Phoenix &
                Peacock Honors™ (collectively, "Services").
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="heading-sm mb-4 text-eclipseNavy">
                1. Information We Collect
              </h2>

              <h3 className="mb-2 text-lg font-semibold text-lunarBlue">
                1.1 Healthcare Information
              </h3>
              <p className="mb-4 text-lunarBlue">
                EclipseLink AI processes clinical handoff data, including:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-lunarBlue">
                <li>Patient identifiers and demographics</li>
                <li>Medical history and diagnoses</li>
                <li>Medications and treatment plans</li>
                <li>Vital signs and laboratory results</li>
                <li>Voice recordings and transcriptions (temporarily, for SBAR generation)</li>
                <li>Clinical assessments and recommendations</li>
              </ul>

              <h3 className="mb-2 text-lg font-semibold text-lunarBlue">
                1.2 User Account Information
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-lunarBlue">
                <li>Name, email address, and job title</li>
                <li>Healthcare facility and department affiliation</li>
                <li>Professional credentials and license numbers</li>
                <li>Login credentials and authentication data</li>
              </ul>

              <h3 className="mb-2 text-lg font-semibold text-lunarBlue">
                1.3 Usage Data
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-lunarBlue">
                <li>Device information and IP addresses</li>
                <li>Browser type and operating system</li>
                <li>Access times and pages viewed</li>
                <li>Feature usage patterns and interactions</li>
              </ul>

              <h3 className="mb-2 text-lg font-semibold text-lunarBlue">
                1.4 Recognition Data (Phoenix & Peacock Honors™)
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-lunarBlue">
                <li>Performance metrics and achievements</li>
                <li>Peer nominations and feedback</li>
                <li>Safety milestone records</li>
                <li>Leaderboard participation (with user consent)</li>
              </ul>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="heading-sm mb-4 text-eclipseNavy">
                2. How We Use Your Information
              </h2>
              <p className="mb-4 text-lunarBlue">We use collected information to:</p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-lunarBlue">
                <li>Provide and improve our Services</li>
                <li>Generate SBAR reports and clinical handoff documentation</li>
                <li>Deliver predictive alerts for patient deterioration</li>
                <li>Facilitate recognition programs and gamification features</li>
                <li>Ensure system security and prevent fraud</li>
                <li>Comply with legal and regulatory obligations</li>
                <li>Conduct research and analytics to enhance product features</li>
                <li>Communicate with you about service updates and support</li>
              </ul>
            </section>

            {/* HIPAA Compliance */}
            <section>
              <h2 className="heading-sm mb-4 text-eclipseNavy">
                3. HIPAA Compliance
              </h2>
              <p className="mb-4 text-lunarBlue">
                <strong>Rohimaya Health AI is a HIPAA-covered Business Associate.</strong>
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-lunarBlue">
                <li>
                  We execute Business Associate Agreements (BAAs) with all covered
                  entities and healthcare organizations using our Services
                </li>
                <li>
                  All Protected Health Information (PHI) is encrypted in transit
                  (TLS 1.3) and at rest (AES-256)
                </li>
                <li>
                  Access to PHI is restricted to authorized personnel on a
                  need-to-know basis
                </li>
                <li>
                  We maintain comprehensive audit trails of all PHI access and
                  modifications
                </li>
                <li>
                  Regular risk assessments and security audits are conducted
                </li>
                <li>
                  Staff undergo annual HIPAA training and background checks
                </li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="heading-sm mb-4 text-eclipseNavy">
                4. Data Security Measures
              </h2>
              <p className="mb-4 text-lunarBlue">
                We implement industry-standard security measures:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-lunarBlue">
                <li>End-to-end encryption for data in transit and at rest</li>
                <li>Multi-factor authentication (MFA) for user accounts</li>
                <li>Role-based access controls (RBAC)</li>
                <li>Regular security penetration testing</li>
                <li>SOC 2 Type II certification (planned for 2027)</li>
                <li>Automated backup and disaster recovery systems</li>
                <li>24/7 security monitoring and incident response</li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="heading-sm mb-4 text-eclipseNavy">
                5. Data Sharing and Disclosure
              </h2>
              <p className="mb-4 text-lunarBlue">
                We do not sell your personal or health information. We may share data
                only in the following circumstances:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-lunarBlue">
                <li>
                  <strong>With Your Healthcare Organization:</strong> To facilitate
                  clinical workflows and care coordination
                </li>
                <li>
                  <strong>Service Providers:</strong> Third-party vendors who assist
                  in service delivery (under strict confidentiality agreements)
                </li>
                <li>
                  <strong>Legal Compliance:</strong> When required by law, court
                  order, or government request
                </li>
                <li>
                  <strong>Emergency Situations:</strong> To protect health and safety
                  in urgent circumstances
                </li>
                <li>
                  <strong>De-identified Data:</strong> Aggregated, anonymized data
                  for research and analytics (cannot be traced back to individuals)
                </li>
              </ul>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="heading-sm mb-4 text-eclipseNavy">
                6. Data Retention
              </h2>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-lunarBlue">
                <li>
                  <strong>Clinical Data:</strong> Retained per healthcare
                  organization's record retention policies and applicable laws
                  (typically 6-10 years)
                </li>
                <li>
                  <strong>Voice Recordings:</strong> Deleted within 24 hours after
                  SBAR generation is complete
                </li>
                <li>
                  <strong>User Accounts:</strong> Deleted within 90 days of account
                  deactivation request
                </li>
                <li>
                  <strong>Audit Logs:</strong> Retained for 7 years for compliance
                  purposes
                </li>
              </ul>
            </section>

            {/* User Rights */}
            <section>
              <h2 className="heading-sm mb-4 text-eclipseNavy">
                7. Your Rights
              </h2>
              <p className="mb-4 text-lunarBlue">You have the right to:</p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-lunarBlue">
                <li>
                  <strong>Access:</strong> Request a copy of your personal
                  information
                </li>
                <li>
                  <strong>Correction:</strong> Update or correct inaccurate data
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your data (subject
                  to legal retention requirements)
                </li>
                <li>
                  <strong>Portability:</strong> Receive your data in a
                  machine-readable format
                </li>
                <li>
                  <strong>Opt-Out:</strong> Decline participation in recognition
                  programs or public leaderboards
                </li>
                <li>
                  <strong>Restrict Processing:</strong> Limit how we use your data
                </li>
              </ul>
              <p className="text-lunarBlue">
                To exercise these rights, contact us at{' '}
                <a
                  href="mailto:privacy@rohimaya.ai"
                  className="text-peacockTeal hover:underline"
                >
                  privacy@rohimaya.ai
                </a>
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="heading-sm mb-4 text-eclipseNavy">
                8. Cookies and Tracking Technologies
              </h2>
              <p className="mb-4 text-lunarBlue">
                We use cookies and similar technologies to:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-lunarBlue">
                <li>Maintain user sessions and authentication</li>
                <li>Remember user preferences</li>
                <li>Analyze usage patterns and improve Services</li>
                <li>Prevent fraud and enhance security</li>
              </ul>
              <p className="text-lunarBlue">
                You can control cookie preferences through your browser settings.
                Disabling cookies may limit certain features.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="heading-sm mb-4 text-eclipseNavy">
                9. Children's Privacy
              </h2>
              <p className="text-lunarBlue">
                Our Services are not intended for individuals under 18 years of age.
                We do not knowingly collect information from minors. If we discover
                we have collected data from a minor, we will delete it promptly.
              </p>
            </section>

            {/* International Data Transfers */}
            <section>
              <h2 className="heading-sm mb-4 text-eclipseNavy">
                10. International Data Transfers
              </h2>
              <p className="text-lunarBlue">
                Your information may be processed in the United States or other
                countries where we or our service providers operate. We ensure
                adequate protections through standard contractual clauses and
                compliance with applicable data protection laws.
              </p>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="heading-sm mb-4 text-eclipseNavy">
                11. Changes to This Privacy Policy
              </h2>
              <p className="text-lunarBlue">
                We may update this Privacy Policy periodically. Material changes will
                be communicated via email or prominent notice in the Services. Your
                continued use after changes indicates acceptance of the updated
                policy.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="heading-sm mb-4 text-eclipseNavy">
                12. Contact Us
              </h2>
              <p className="mb-4 text-lunarBlue">
                For privacy-related questions or concerns:
              </p>
              <div className="rounded-lg bg-moonWhite p-6">
                <p className="mb-2 font-semibold text-eclipseNavy">
                  Rohimaya Health AI - Privacy Officer
                </p>
                <p className="text-lunarBlue">
                  Email:{' '}
                  <a
                    href="mailto:privacy@rohimaya.ai"
                    className="text-peacockTeal hover:underline"
                  >
                    privacy@rohimaya.ai
                  </a>
                </p>
                <p className="text-lunarBlue">
                  General Inquiries:{' '}
                  <a
                    href="mailto:info@rohimaya.ai"
                    className="text-peacockTeal hover:underline"
                  >
                    info@rohimaya.ai
                  </a>
                </p>
                <p className="mt-4 text-sm text-gray-600">
                  We will respond to all requests within 30 days.
                </p>
              </div>
            </section>

            {/* HIPAA Notice */}
            <section className="mt-8 rounded-lg border-2 border-peacockTeal bg-peacockTeal/5 p-6">
              <h3 className="mb-3 text-lg font-semibold text-eclipseNavy">
                📋 HIPAA Notice of Privacy Practices
              </h3>
              <p className="text-sm text-lunarBlue">
                If you are a patient whose information is processed through our
                Services, your healthcare provider's Notice of Privacy Practices
                governs how your Protected Health Information is used and disclosed.
                For questions about patient rights, contact your healthcare provider
                directly.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
