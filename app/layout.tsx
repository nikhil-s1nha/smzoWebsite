import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SMZO Dental Clinic - Your Trusted Dental Care Partner',
  description: 'Experience exceptional dental care with our modern, patient-focused approach. From routine checkups to advanced treatments, we\'re committed to your oral health and beautiful smile.',
  keywords: 'dental clinic, dental care, oral health, dental services, family dentistry, cosmetic dentistry',
  authors: [{ name: 'SMZO Dental Clinic' }],
  openGraph: {
    title: 'SMZO Dental Clinic - Your Trusted Dental Care Partner',
    description: 'Experience exceptional dental care with our modern, patient-focused approach.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 