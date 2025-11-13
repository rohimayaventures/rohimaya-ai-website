export const metadata = {
  title: 'Contact Us - Rohimaya Health AI',
  description: 'Get in touch with our team',
}

export default function ContactPage() {
  return (
    <div className="section">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <h1 className="heading-lg mb-4 text-center text-eclipseNavy">
            Contact Us
          </h1>
          <p className="mb-12 text-center text-lg text-lunarBlue">
            Interested in EclipseLink AI or Phoenix & Peacock Honors™? Let's talk.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Info */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold text-eclipseNavy">
                Get in Touch
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-lunarBlue">
                    Email
                  </h3>
                  <a
                    href="mailto:info@rohimaya.ai"
                    className="text-peacockTeal hover:underline"
                  >
                    info@rohimaya.ai
                  </a>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-lunarBlue">
                    Sales Inquiries
                  </h3>
                  <a
                    href="mailto:sales@rohimaya.ai"
                    className="text-peacockTeal hover:underline"
                  >
                    sales@rohimaya.ai
                  </a>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-lunarBlue">
                    Support
                  </h3>
                  <a
                    href="mailto:support@rohimaya.ai"
                    className="text-peacockTeal hover:underline"
                  >
                    support@rohimaya.ai
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold text-eclipseNavy">
                Quick Links
              </h2>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/products/eclipselink"
                    className="text-peacockTeal hover:underline"
                  >
                    → EclipseLink AI Product Page
                  </a>
                </li>
                <li>
                  <a
                    href="/products/honors"
                    className="text-peacockTeal hover:underline"
                  >
                    → Phoenix & Peacock Honors™
                  </a>
                </li>
                <li>
                  <a
                    href="/deck"
                    className="text-peacockTeal hover:underline"
                  >
                    → View Pitch Deck
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form Placeholder */}
          <div className="mt-12 rounded-lg bg-gradient-to-br from-peacockTeal/5 to-phoenixGold/5 p-8">
            <h2 className="heading-sm mb-4 text-center text-eclipseNavy">
              Request a Demo
            </h2>
            <p className="mb-6 text-center text-lunarBlue">
              See EclipseLink AI and Phoenix & Peacock Honors™ in action
            </p>
            <div className="text-center text-sm text-gray-600">
              <p className="mb-4">
                📝 <strong>Coming Soon:</strong> Integrated contact form
              </p>
              <p>
                For now, please email{' '}
                <a
                  href="mailto:demo@rohimaya.ai"
                  className="font-medium text-peacockTeal hover:underline"
                >
                  demo@rohimaya.ai
                </a>{' '}
                to schedule a personalized demo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
