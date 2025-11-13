import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-eclipseNavy text-moonWhite">
      <div className="container">
        <div className="grid gap-8 py-12 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Rohimaya Health AI</h3>
            <p className="text-sm text-gray-300 mb-2">
              Building AI-powered tools for clinical handoffs and staff recognition.
            </p>
            <p className="text-xs text-gray-400 italic">
              Currently in development • Pilot programs Q1 2026
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Products
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/products"
                  className="text-gray-300 hover:text-peacockTeal transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/products/eclipselink"
                  className="text-gray-300 hover:text-peacockTeal transition-colors"
                >
                  EclipseLink AI
                </Link>
              </li>
              <li>
                <Link
                  href="/products/honors"
                  className="text-gray-300 hover:text-peacockTeal transition-colors"
                >
                  Phoenix & Peacock Honors
                </Link>
              </li>
              <li>
                <Link
                  href="/products/rounds-assist"
                  className="text-gray-300 hover:text-peacockTeal transition-colors"
                >
                  Rounds Assist
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/case-studies"
                  className="text-gray-300 hover:text-peacockTeal transition-colors"
                >
                  Pilot Program
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-peacockTeal transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-300 hover:text-peacockTeal transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-peacockTeal transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-peacockTeal transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-300 hover:text-peacockTeal transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="text-gray-300 hover:text-peacockTeal transition-colors"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  href="/data-ethics"
                  className="text-gray-300 hover:text-peacockTeal transition-colors"
                >
                  Data Ethics
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 py-6">
          <p className="text-center text-sm text-gray-400">
            © {currentYear} Rohimaya Health AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
