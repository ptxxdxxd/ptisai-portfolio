import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chris Vickers - AI Consultant & Engineer',
  description: 'AI consultant and engineer with 43+ verified certifications in generative AI, LLMOps, data engineering, and executive leadership. Expert in ethical AI deployment and strategic transformation.',
  keywords: 'AI consultant, machine learning engineer, generative AI, prompt engineering, LLMOps, data engineering, AI strategy, AI governance, remote work, Next.js, React, AI certifications',
  authors: [{ name: 'Chris Vickers' }],
  openGraph: {
    title: 'Chris Vickers - AI Consultant & Engineer',
    description: 'AI consultant and engineer with 43+ verified certifications in generative AI, LLMOps, data engineering, and executive leadership.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chris Vickers - AI Consultant & Engineer',
    description: 'AI consultant and engineer with 43+ verified certifications in generative AI, LLMOps, data engineering, and executive leadership.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}