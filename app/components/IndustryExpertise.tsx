'use client'

import { Heart, Building, ShoppingCart, Factory, Zap } from 'lucide-react'

export default function IndustryExpertise() {
  const industries = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Healthcare',
      description: 'Diagnostic AI, Patient Analytics, Drug Discovery'
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Finance',
      description: 'Risk Assessment, Fraud Detection, Algorithmic Trading'
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'E-commerce',
      description: 'Personalization, Inventory Optimization, Customer Insights'
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: 'Manufacturing',
      description: 'Predictive Maintenance, Quality Control, Supply Chain'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Energy',
      description: 'Grid Optimization, Demand Forecasting, Asset Management'
    }
  ]

  return (
    <section className="py-20 bg-background-page">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Industry Expertise
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Deep knowledge across key industry verticals
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <div key={index} className="card text-center group">
              <div className="text-primary-accent mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                {industry.icon}
              </div>
              <h4 className="font-bold text-text-primary mb-3">{industry.title}</h4>
              <p className="text-sm text-text-secondary">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}