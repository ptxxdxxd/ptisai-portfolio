import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chris Vickers (PT) - AI tools, automation and web',
  description: 'Chris Vickers (PT) builds internal tools, CRM automations and AI integrations. Projects, experience and coursework.',
  keywords: 'AI engineering, automation, internal tools, CRM, generative AI, React, Next.js, Python, Supabase',
  authors: [{ name: 'Chris Vickers' }],
  openGraph: {
    title: 'Chris Vickers (PT) - AI tools, automation and web',
    description: 'Chris Vickers (PT) builds internal tools, CRM automations and AI integrations.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chris Vickers (PT) - AI tools, automation and web',
    description: 'Chris Vickers (PT) builds internal tools, CRM automations and AI integrations.',
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