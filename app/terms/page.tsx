export const metadata = {
  title: 'Terms of Service - Rohimaya Health AI',
  description: 'Terms and conditions for using Rohimaya Health AI services',
}

export default function TermsPage() {
  return (
    <div className="section">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <h1 className="heading-lg mb-6 text-eclipseNavy">Terms of Service</h1>
          <p className="mb-8 text-sm text-gray-600">
            <strong>Last Updated:</strong> November 12, 2025
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-lunarBlue">
                These Terms of Service ("Terms") govern your access to and use of
                Rohimaya Health AI's products and services, including EclipseLink AI
                and Phoenix & Peacock Honors™ (collectively, "Services"). By
                accessing or using our Services, you agree to be bound by these Terms.
              </p>
              <p className="text-lunarBlue">
                <strong>
                  IF YOU DO NOT AGREE TO THESE TERMS, DO NOT USE OUR SERVICES.
                </strong>
              </p>
            </section>

            {/* Acceptance */}
            <section>
              <h2 className="heading-sm mb-4 text-eclipseNavy">
                1. Acceptance of Terms
              </h2>
              <p className="text-lunarBlue">
                By registering for an account, accessing our platform, or using our
                Services, you represent that:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-lunarBlue">
                <li>You are at least 18 years of age</li>
                <li>
                  You are authorized by your healthcare organization to use the
                  Services
                </li>
                <li>
                  You have the legal capacity to enter into this binding agreement
                </li>
                <li>
                  Your use complies with all applicable federal, state, and local laws
                </li>
              </ul>
            </section>

            {/* Service Description */}
            <section>
              <h2 className="heading-sm mb-4 text-eclipseNavy">
                2. Services Description
              </h2>

              <h3 className="mb-2 text-lg font-semibold text-lunarBlue">
                2.1 EclipseLink AI
              </h3>
              <p className="mb-4 text-lunarBlue">
                A voice-powered clinical handoff platform that generates SBAR reports,
                provides predictive patient alerts, and facilitates care coordination.
                EclipseLink AI is a clinical decision support tool and does not replace
                professional medical judgment.
              </p>

              <h3 className="mb-2 text-lg font-semibold text-lunarBlue">
                2.2 Phoenix & Peacock Honors™
              </h3>
              <p className="mb-4 text-lunarBlue">
                A gamified recognition system that celebrates healthcare excellence,
                safety achievements, and team collaboration. Participation is voluntary
                and does not affect employment status or compensation (unless
                explicitly agreed upon with your employer).
              </p>
            </section>

            {/* User Responsibilities */}
            <section>
              <h2 className="heading-sm mb-4 text-eclipseNavy">
                3. User Responsibilities
              </h2>

              <h3 className="mb-2 text-lg font-semibold text-lunarBlue">
                3.1 Account Security
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-lunarBlue">
                <li>Maintain confidentiality of your login credentials</li>
                <li>Enable multi-factor authentication (MFA) when available</li>
                <li>
                  Immediately report any unauthorized access or security breaches
                </li>
                <li>Do not share your account with others</li>
                <li>Log out from shared or public devices</li>
              </ul>

              <h3 className="mb-2 text-lg font-semibold text-lunarBlue">
                3.2 Professional Use
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-lunarBlue">
                <li>
                  Use Services only for legitimate clinical or professional purposes
                </li>
                <li>Comply with HIPAA, state privacy laws, and organizational policies</li>
                <li>
                  Verify accuracy of all AI-generated content before clinical use
                </li>
                <li>Exercise independent clinical judgment at all times</li>
                <li>
                  Do not rely solely on predictive alerts; use as supplemental
                  information
                </li>
              </ul>

              <h3 className="mb-2 text-lg font-semibold text-lunarBlue">
                3.3 Prohibited Conduct
              </h3>
              <p className="mb-2 text-lunarBlue">You agree NOT to:</p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-lunarBlue">
                <li>
                  Access or attempt to access data you are not authorized to view
                </li>
                <li>Reverse engineer, decompile, or disassemble the Services</li>
                <li>
                  Introduce malware, viruses, or harmful code into the platform
                </li>
                <li>Scrape, harvest, or extract data using automated tools</li>
                <li>Interfere with system security or integrity</li>
                <li>
                  Use Services to violate any laws, regulations, or third-party rights
                </li>
                <li>
                  Upload false, misleading, or fraudulent information
                </li>
                <li>
                  Harass, abuse, or harm other users or patients
                </li>
              </ul>
            </section>

            {/* HIPAA and BAA */}
            <section>
              <h2 className="heading-sm mb-4 text-eclipseNavy">
                4. HIPAA Business Associate Agreement
              </h2>
              <p className="mb-4 text-lunarBlue">
                Rohimaya Health AI acts as a Business Associate under HIPAA. Your
                healthcare organization ("Covered Entity") must execute a separate
                Business Associate Agreement (BAA) before using Services that involve
                Protected Health Information (PHI).
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-lunarBlue">
                <li>
                  The BAA governs our handling of PHI and takes precedence over
                  conflicting provisions in these Terms
                </li>
                <li>
                  We will use and disclose PHI only as permitted by the BAA and HIPAA
                </li>
                <li>
                  Breach notification procedures are outlined in the BAA
                </li>
                <li>
                  Contact{' '}
                  <a
                    href="mailto:legal@rohimaya.ai"
                    className="text-peacockTeal hover:underline"
                  >
                    legal@rohimaya.ai
                  </a>{' '}
                  to request a BAA
                </li>
              </ul>
            </section>

            {/* Clinical Disclaimers */}
            <section>
              <h2 className="heading-sm mb-4 text-eclipseNavy">
                5. Clinical Disclaimers and Limitations
              </h2>

              <h3 className="mb-2 text-lg font-semibold text-lunarBlue">
                5.1 Not a Substitute for Medical Judgment
              </h3>
              <p className="mb-4 text-lunarBlue">
                EclipseLink AI is a <strong>clinical decision support tool</strong>,
                not a diagnostic or treatment device. It does not replace professional
                medical judgment, clinical expertise, or direct patient assessment.
              </p>

              <h3 className="mb-2 text-lg font-semibold text-lunarBlue">
                5.2 AI Limitations
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-lunarBlue">
                <li>
                  AI-generated SBAR reports may contain errors or omissions
                </li>
                <li>
                  Predictive alerts are probabilistic and may have false positives or
                  negatives
                </li>
                <li>
                  Voice transcription accuracy depends on audio quality and accents
                </li>
                <li>
                  Users must verify all information before taking clinical action
                </li>
              </ul>

              <h3 className="mb-2 text-lg font-semibold text-lunarBlue">
                5.3 No Medical Advice
              </h3>
              <p className="text-lunarBlue">
                Our Services do not provide medical advice, diagnosis, or treatment.
                Always seek the advice of qualified healthcare professionals for
                medical questions or emergencies.
              </p>
            </section>

            {/* Payment Terms */}
            <section>
              <h2 className="heading-sm mb-4 text-eclipseNavy">
                6. Payment and Subscription Terms
              </h2>

              <h3 className="mb-2 text-lg font-semibold text-lunarBlue">
                6.1 Fees
              </h3>
              <p className="mb-4 text-lunarBlue">
                Pricing is determined through individual contracts with healthcare
                organizations. Fees may be based on:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-lunarBlue">
                <li>Per-user subscriptions</li>
                <li>Volume-based pricing (number of handoffs/patients)</li>
                <li>Enterprise licenses</li>
                <li>Custom arrangements</li>
              </ul>

              <h3 className="mb-2 text-lg font-semibold text-lunarBlue">
                6.2 Billing
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-lunarBlue">
                <li>Fees are billed in advance on a monthly or annual basis</li>
                <li>Payment is due within 30 days of invoice date</li>
                <li>Late payments may incur interest charges or service suspension</li>
                <li>Prices are subject to change with 60 days' notice</li>
              </ul>

              <h3 className="mb-2 text-lg font-semibold text-lunarBlue">
                6.3 Refunds
              </h3>
              <p className="text-lunarBlue">
                Fees are non-refundable except as required by law or specified in your
                contract. You may cancel at the end of your subscription term with 30
                days' notice.
              </p>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="heading-sm mb-4 text-eclipseNavy">
                7. Intellectual Property Rights
              </h2>

              <h3 className="mb-2 text-lg font-semibold text-lunarBlue">
                7.1 Rohimaya's Ownership
              </h3>
              <p className="mb-4 text-lunarBlue">
                We retain all rights, title, and interest in:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-lunarBlue">
                <li>
                  The Services, software, platform, and underlying technology
                </li>
                <li>
                  Trademarks: "Rohimaya Health AI," "EclipseLink AI," "Phoenix &
                  Peacock Honors™"
                </li>
                <li>
                  AI models, algorithms, and predictive analytics systems
                </li>
                <li>
                  Documentation, training materials, and user interfaces
                </li>
              </ul>

              <h3 className="mb-2 text-lg font-semibold text-lunarBlue">
                7.2 Your Data
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-lunarBlue">
                <li>
                  You retain ownership of all patient data and PHI entered into the
                  Services
                </li>
                <li>
                  You grant us a limited license to process your data to provide
                  Services
                </li>
                <li>
                  We may use de-identified, aggregated data for analytics and product
                  improvement
                </li>
              </ul>

              <h3 className="mb-2 text-lg font-semibold text-lunarBlue">
                7.3 Feedback
              </h3>
              <p className="text-lunarBlue">
                Any suggestions, ideas, or feedback you provide becomes our property
                and may be used without compensation or attribution.
              </p>
            </section>

            {/* Warranties */}
            <section>
              <h2 className="heading-sm mb-4 text-eclipseNavy">
                8. Warranties and Disclaimers
              </h2>

              <h3 className="mb-2 text-lg font-semibold text-lunarBlue">
                8.1 Limited Warranty
              </h3>
              <p className="mb-4 text-lunarBlue">
                We warrant that the Services will perform substantially as described in
                our documentation under normal use. This warranty is valid for 90 days
                from the date of initial access.
              </p>

              <h3 className="mb-2 text-lg font-semibold text-lunarBlue">
                8.2 Disclaimer
              </h3>
              <div className="rounded-lg bg-gray-100 p-4">
                <p className="text-sm uppercase text-lunarBlue">
                  <strong>
                    EXCEPT AS EXPRESSLY STATED, SERVICES ARE PROVIDED "AS IS" AND "AS
                    AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED,
                    INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                    PURPOSE, NON-INFRINGEMENT, OR ACCURACY. WE DO NOT GUARANTEE
                    UNINTERRUPTED, SECURE, OR ERROR-FREE OPERATION.
                  </strong>
                </p>
              </div>
            </section>

            {/* Liability */}
            <section>
              <h2 className="heading-sm mb-4 text-eclipseNavy">
                9. Limitation of Liability
              </h2>
              <div className="rounded-lg bg-gray-100 p-4">
                <p className="mb-4 text-sm uppercase text-lunarBlue">
                  <strong>
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, ROHIMAYA HEALTH AI SHALL
                    NOT BE LIABLE FOR:
                  </strong>
                </p>
                <ul className="mb-4 list-disc space-y-2 pl-6 text-sm uppercase text-lunarBlue">
                  <li>
                    INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE DAMAGES
                  </li>
                  <li>LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL</li>
                  <li>
                    PATIENT HARM OR MEDICAL MALPRACTICE CLAIMS (user retains
                    professional liability)
                  </li>
                  <li>
                    THIRD-PARTY CLAIMS ARISING FROM YOUR USE OF THE SERVICES
                  </li>
                </ul>
                <p className="text-sm uppercase text-lunarBlue">
                  <strong>
                    OUR TOTAL LIABILITY SHALL NOT EXCEED THE FEES PAID BY YOUR
                    ORGANIZATION IN THE 12 MONTHS PRECEDING THE CLAIM.
                  </strong>
                </p>
              </div>
            </section>

            {/* Indemnification */}
            <section>
              <h2 className="heading-sm mb-4 text-eclipseNavy">
                10. Indemnification
              </h2>
              <p className="mb-4 text-lunarBlue">
                You agree to indemnify, defend, and hold harmless Rohimaya Health AI
                and its officers, directors, employees, and agents from any claims,
                damages, losses, or expenses (including attorneys' fees) arising from:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-lunarBlue">
                <li>Your violation of these Terms</li>
                <li>Your misuse of the Services</li>
                <li>
                  Medical malpractice or patient care decisions made using the Services
                </li>
                <li>Violation of third-party rights or applicable laws</li>
                <li>Unauthorized access to patient data</li>
              </ul>
            </section>

            {/* Data Availability */}
            <section>
              <h2 className="heading-sm mb-4 text-eclipseNavy">
                11. Service Availability and Maintenance
              </h2>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-lunarBlue">
                <li>
                  We target 99.9% uptime but do not guarantee uninterrupted access
                </li>
                <li>
                  Scheduled maintenance will be announced at least 48 hours in advance
                </li>
                <li>
                  Emergency maintenance may occur without notice to address security
                  issues
                </li>
                <li>
                  Downtime credits may be available under enterprise SLAs
                </li>
              </ul>
            </section>

            {/* Termination */}
            <section>
              <h2 className="heading-sm mb-4 text-eclipseNavy">
                12. Termination
              </h2>

              <h3 className="mb-2 text-lg font-semibold text-lunarBlue">
                12.1 By You
              </h3>
              <p className="mb-4 text-lunarBlue">
                You may terminate your account at any time by providing 30 days'
                written notice. Fees paid for the current term are non-refundable.
              </p>

              <h3 className="mb-2 text-lg font-semibold text-lunarBlue">
                12.2 By Us
              </h3>
              <p className="mb-4 text-lunarBlue">
                We may suspend or terminate your access immediately if:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-lunarBlue">
                <li>You breach these Terms or applicable laws</li>
                <li>Your account poses a security risk</li>
                <li>Payment is more than 30 days overdue</li>
                <li>Required by law or legal process</li>
              </ul>

              <h3 className="mb-2 text-lg font-semibold text-lunarBlue">
                12.3 Effect of Termination
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-lunarBlue">
                <li>
                  You will have 30 days to export your data after termination
                </li>
                <li>
                  We will delete or anonymize your data per our retention policy
                </li>
                <li>
                  Outstanding fees remain due
                </li>
                <li>
                  Sections 4, 7, 8, 9, 10, and 13 survive termination
                </li>
              </ul>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="heading-sm mb-4 text-eclipseNavy">
                13. Modifications to Terms
              </h2>
              <p className="text-lunarBlue">
                We may update these Terms from time to time. Material changes will be
                communicated via email or in-app notification at least 30 days before
                taking effect. Continued use after changes constitutes acceptance. If
                you disagree, you may terminate your account.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="heading-sm mb-4 text-eclipseNavy">
                14. Governing Law and Dispute Resolution
              </h2>

              <h3 className="mb-2 text-lg font-semibold text-lunarBlue">
                14.1 Governing Law
              </h3>
              <p className="mb-4 text-lunarBlue">
                These Terms are governed by the laws of the State of [Your State],
                without regard to conflict of law principles.
              </p>

              <h3 className="mb-2 text-lg font-semibold text-lunarBlue">
                14.2 Arbitration
              </h3>
              <p className="mb-4 text-lunarBlue">
                Disputes will be resolved through binding arbitration in accordance
                with the American Arbitration Association (AAA) Commercial Arbitration
                Rules. Arbitration will take place in [Your City, State]. Each party
                bears its own costs.
              </p>

              <h3 className="mb-2 text-lg font-semibold text-lunarBlue">
                14.3 Class Action Waiver
              </h3>
              <p className="text-lunarBlue">
                You agree to resolve disputes on an individual basis only. Class
                actions, class arbitrations, and representative actions are prohibited.
              </p>
            </section>

            {/* Miscellaneous */}
            <section>
              <h2 className="heading-sm mb-4 text-eclipseNavy">
                15. Miscellaneous
              </h2>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-lunarBlue">
                <li>
                  <strong>Entire Agreement:</strong> These Terms constitute the entire
                  agreement between you and Rohimaya Health AI
                </li>
                <li>
                  <strong>Severability:</strong> If any provision is invalid, the
                  remaining provisions remain in effect
                </li>
                <li>
                  <strong>Waiver:</strong> Failure to enforce a right does not waive
                  that right
                </li>
                <li>
                  <strong>Assignment:</strong> You may not assign these Terms without
                  our written consent
                </li>
                <li>
                  <strong>Force Majeure:</strong> We are not liable for delays caused
                  by events beyond our reasonable control
                </li>
              </ul>
            </section>

            {/* Contact */}
            <section>
              <h2 className="heading-sm mb-4 text-eclipseNavy">
                16. Contact Information
              </h2>
              <p className="mb-4 text-lunarBlue">
                Questions about these Terms? Contact us:
              </p>
              <div className="rounded-lg bg-moonWhite p-6">
                <p className="mb-2 font-semibold text-eclipseNavy">
                  Rohimaya Health AI - Legal Department
                </p>
                <p className="text-lunarBlue">
                  Email:{' '}
                  <a
                    href="mailto:legal@rohimaya.ai"
                    className="text-peacockTeal hover:underline"
                  >
                    legal@rohimaya.ai
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
              </div>
            </section>

            {/* Acknowledgment */}
            <section className="mt-8 rounded-lg border-2 border-phoenixGold bg-phoenixGold/5 p-6">
              <h3 className="mb-3 text-lg font-semibold text-eclipseNavy">
                ✅ Acknowledgment
              </h3>
              <p className="text-sm text-lunarBlue">
                BY USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ,
                UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
