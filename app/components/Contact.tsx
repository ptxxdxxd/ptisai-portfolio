'use client'

import { Mail, Linkedin, MapPin, Github } from 'lucide-react'

const methods = [
  { icon: Mail, label: 'Email', text: 'ptisdead@gmail.com', href: 'mailto:ptisdead@gmail.com' },
  { icon: Linkedin, label: 'LinkedIn', text: 'Connect with me', href: 'https://www.linkedin.com/in/christopher-vickers-78607335b/' },
  { icon: Github, label: 'GitHub', text: '@ptxxdxxd', href: 'https://github.com/ptxxdxxd' },
]

export default function Contact() {
  return (
    <section className="py-20 bg-background-page">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-text-primary mb-4">Let's talk</h2>
          <p className="text-xl text-text-secondary">
            Always happy to talk about AI engineering, automation and internal tools.
            Email is the fastest way to reach me.
          </p>
        </div>

        <div className="space-y-4">
          {methods.map(({ icon: Icon, label, text, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 p-4 bg-background-surface border border-border-subtle rounded-lg hover:border-primary-accent transition-all"
            >
              <div className="w-12 h-12 bg-primary-accent/10 rounded-lg flex items-center justify-center">
                <Icon className="w-6 h-6 text-primary-accent" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-text-primary">{label}</h4>
                <span className="text-primary-accent">{text}</span>
              </div>
            </a>
          ))}

          <div className="flex items-center gap-4 p-4 bg-background-surface border border-border-subtle rounded-lg">
            <div className="w-12 h-12 bg-primary-accent/10 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary-accent" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-text-primary">Location</h4>
              <p className="text-text-secondary">West Palm Beach, FL</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
