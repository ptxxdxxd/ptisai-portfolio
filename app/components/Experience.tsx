'use client'

import { Briefcase, Wrench, Sparkles } from 'lucide-react'

const skills = [
  { group: 'Languages', items: 'Python, TypeScript, JavaScript, HTML/CSS, SQL' },
  { group: 'Web', items: 'React, Next.js, Vite, Tailwind CSS' },
  { group: 'Backend and data', items: 'Supabase (Postgres, auth, Edge Functions), Stripe' },
  { group: 'AI', items: 'Claude, Gemini and OpenAI APIs, prompt engineering, ComfyUI' },
  { group: 'Business systems', items: 'Zoho CRM, QuickBooks' },
  { group: 'Python libraries', items: 'NumPy, OpenCV, Pillow, Tkinter' },
]

export default function Experience() {
  return (
    <section className="py-20 bg-background-surface">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-text-primary mb-4">What I do</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Most of my building happens on the job and on my own machine. This is the short version.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Current role */}
          <div className="bg-background-page border border-border-subtle rounded-lg p-8">
            <div className="flex items-center gap-3 mb-2">
              <Briefcase className="w-6 h-6 text-primary-accent" />
              <h3 className="text-2xl font-semibold text-text-primary">AI, systems and sales</h3>
            </div>
            <p className="text-sm text-text-secondary mb-4 italic">
              Industrial metals distributor, June 2026 to present
            </p>
            <ul className="space-y-2 text-text-primary">
              <li>• Run and improve the company's Zoho CRM: cleanup, automation and workflows</li>
              <li>• Build internal tools for quoting and the sales pipeline</li>
              <li>• Automate repetitive back-office work, including QuickBooks tasks</li>
              <li>• Fix and update older code and company websites</li>
              <li>• Bring AI into day-to-day work where it actually saves time</li>
            </ul>
          </div>

          {/* Other work */}
          <div className="bg-background-page border border-border-subtle rounded-lg p-8">
            <div className="flex items-center gap-3 mb-2">
              <Wrench className="w-6 h-6 text-primary-accent" />
              <h3 className="text-2xl font-semibold text-text-primary">Side and freelance work</h3>
            </div>
            <ul className="space-y-4 text-text-primary mt-4">
              <li>
                <span className="font-semibold">Packable Pits</span>
                <span className="text-text-secondary">, co-founder and technical lead. </span>
                Built the storefront, cart and checkout for a flat-pack steel fire pit company.
              </li>
              <li>
                <span className="font-semibold">Desi Sub & Grill</span>
                <span className="text-text-secondary">, freelance. </span>
                Restaurant website redesign in Next.js and Tailwind CSS.
              </li>
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-text-primary mb-6">Tools I use</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map(s => (
              <div key={s.group} className="bg-background-page border border-border-subtle rounded-lg p-6">
                <h4 className="text-xl font-semibold text-primary-accent mb-3">{s.group}</h4>
                <p className="text-text-secondary text-sm">{s.items}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Background */}
        <div className="bg-background-page border border-border-subtle rounded-lg p-8">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="w-6 h-6 text-primary-accent" />
            <h3 className="text-2xl font-semibold text-text-primary">A bit more about me</h3>
          </div>
          <p className="text-text-primary leading-relaxed">
            I started making things with generative AI in 2022, mostly in ComfyUI, and went
            all in on AI engineering in 2025. Tech was my hobby long before it was my job.
            Outside of work I'm a competitive DDR and ITG player and a self-described huge nerd.
          </p>
        </div>
      </div>
    </section>
  )
}
