'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-sm">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-eclipseNavy">
              Rohimaya Health AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-lunarBlue hover:text-peacockTeal transition-colors"
            >
              Home
            </Link>
            <div className="group relative">
              <button className="text-sm font-medium text-lunarBlue hover:text-peacockTeal transition-colors">
                Products
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="py-1">
                  <Link
                    href="/products"
                    className="block px-4 py-2 text-sm text-lunarBlue hover:bg-gray-100"
                  >
                    All Products
                  </Link>
                  <Link
                    href="/products/eclipselink"
                    className="block px-4 py-2 text-sm text-lunarBlue hover:bg-gray-100"
                  >
                    EclipseLink AI
                  </Link>
                  <Link
                    href="/products/honors"
                    className="block px-4 py-2 text-sm text-lunarBlue hover:bg-gray-100"
                  >
                    Phoenix & Peacock Honors
                  </Link>
                  <Link
                    href="/products/rounds-assist"
                    className="block px-4 py-2 text-sm text-lunarBlue hover:bg-gray-100"
                  >
                    Rounds Assist
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href="/case-studies"
              className="text-sm font-medium text-lunarBlue hover:text-peacockTeal transition-colors"
            >
              Pilot Program
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-lunarBlue hover:text-peacockTeal transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-lunarBlue hover:text-peacockTeal transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/sales-portal"
              className="rounded-md bg-peacockTeal px-4 py-2 text-sm font-medium text-eclipseNavy hover:bg-peacockTeal/90 transition-colors"
            >
              Sales Portal
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-lunarBlue"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="pb-4 md:hidden">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-sm font-medium text-lunarBlue hover:text-peacockTeal"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-sm font-medium text-lunarBlue hover:text-peacockTeal"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/case-studies"
                className="text-sm font-medium text-lunarBlue hover:text-peacockTeal"
                onClick={() => setIsOpen(false)}
              >
                Pilot Program
              </Link>
              <Link
                href="/blog"
                className="text-sm font-medium text-lunarBlue hover:text-peacockTeal"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-lunarBlue hover:text-peacockTeal"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/sales-portal"
                className="text-sm font-medium text-peacockTeal hover:text-peacockTeal/80"
                onClick={() => setIsOpen(false)}
              >
                Sales Portal
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
