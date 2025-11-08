'use client'

import { Download, ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

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
                AI Consultant
                <span className="text-primary-accent block">& Engineer</span>
              </h1>
              
              <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
                Results-driven AI consultant and engineer with 43+ verified certifications 
                spanning generative AI, LLMOps, data engineering, executive leadership, 
                automation, and AI security/governance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('certifications')}
                className="btn-primary inline-flex items-center gap-2"
              >
                View Certifications
                <ArrowDown className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => scrollToSection('resume')}
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary-accent">43+</div>
                <div className="text-sm text-text-secondary">Verified Certifications</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary-accent">7+</div>
                <div className="text-sm text-text-secondary">Core Categories</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary-accent">5</div>
                <div className="text-sm text-text-secondary">Leading Providers</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary-accent">6</div>
                <div className="text-sm text-text-secondary">Months Duration</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-primary-accent/20 to-transparent border border-border-subtle flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 rounded-full bg-background-surface border border-border-subtle flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary-accent">CV</span>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-text-primary">Chris Vickers</div>
                    <div className="text-text-secondary">AI Consultant & Engineer</div>
                    
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