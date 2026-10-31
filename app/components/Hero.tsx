'use client'

import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

interface HeroProps {
  scrollToSection: (sectionId: string) => void
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container-custom">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-3 space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold text-text-primary leading-tight">
                I build tools
                <span className="text-primary-accent block">that run on AI</span>
              </h1>

              <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
                I'm Chris Vickers (PT). I build internal tools, CRM automations and AI
                integrations, and I've been building with generative AI since 2022.
                Self-taught, fast to pick up new stacks, and happiest shipping something
                people use every day.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary inline-flex items-center gap-2"
              >
                See my projects
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('experience')}
                className="btn-secondary inline-flex items-center gap-2"
              >
                What I do now
              </button>
            </div>
          </div>

          {/* Profile Card */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-primary-accent/20 to-transparent border border-border-subtle flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto rounded-full bg-background-surface border border-border-subtle flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary-accent">PT</span>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-text-primary">Chris Vickers</div>
                    <div className="text-text-secondary">AI tools, automation and web</div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-4 mt-3">
                      <a
                        href="mailto:ptisdead@gmail.com"
                        className="w-8 h-8 bg-background-page border border-border-subtle rounded-lg flex items-center justify-center hover:border-primary-accent hover:text-primary-accent transition-all"
                        title="Email"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                      <a
                        href="https://github.com/ptxxdxxd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-background-page border border-border-subtle rounded-lg flex items-center justify-center hover:border-primary-accent hover:text-primary-accent transition-all"
                        title="GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/christopher-vickers-78607335b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-background-page border border-border-subtle rounded-lg flex items-center justify-center hover:border-primary-accent hover:text-primary-accent transition-all"
                        title="LinkedIn"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-primary-accent/10 blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
