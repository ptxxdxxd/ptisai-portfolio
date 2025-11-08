'use client'

import { Target, Rocket, TrendingUp } from 'lucide-react'

interface ServicesProps {
  scrollToSection: (sectionId: string) => void
}

export default function Services({ scrollToSection }: ServicesProps) {
  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'AI Strategy & Assessment',
      features: [
        'AI maturity assessment',
        'Technology roadmap development',
        'ROI projections & business case',
        'Risk analysis & mitigation'
      ],
      actionText: 'Start Assessment'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Implementation & Deployment',
      features: [
        'Custom AI solution development',
        'Model fine-tuning & optimization',
        'Data pipeline architecture',
        'Production deployment & scaling'
      ],
      actionText: 'Get Implementation'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Optimization & Support',
      features: [
        'Performance monitoring & tuning',
        'Continuous improvement programs',
        'Team training & knowledge transfer',
        '24/7 technical support'
      ],
      actionText: 'Optimize Solutions'
    }
  ]

  return (
    <section id="services" className="py-20 bg-background-page">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            AI Consulting Services
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            End-to-end AI transformation solutions for your business
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card group">
              <div className="text-primary-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-text-primary">
                {service.title}
              </h3>
              <ul className="space-y-2 text-text-secondary text-sm mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary w-full"
              >
                {service.actionText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}