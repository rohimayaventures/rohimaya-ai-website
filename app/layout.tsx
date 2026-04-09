import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Rohimaya Health AI',
  description: 'Clinical Handoffs, Reimagined - EclipseLink AI + Phoenix & Peacock Honors™',
  keywords: ['healthcare', 'AI', 'clinical handoffs', 'SBAR', 'patient safety'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
