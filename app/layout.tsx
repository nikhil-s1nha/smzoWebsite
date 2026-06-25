import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Smile Zone Family Dental - Your Trusted Dental Care Partner',
  description: 'Experience exceptional dental care with our modern, patient-focused approach. From routine checkups to advanced treatments, we\'re committed to your oral health and beautiful smile.',
  keywords: 'dental clinic, dental care, oral health, dental services, family dentistry, cosmetic dentistry',
  authors: [{ name: 'Smile Zone Family Dental' }],
  openGraph: {
    title: 'Smile Zone Family Dental - Your Trusted Dental Care Partner',
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
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-983885403"
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-983885403');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 