'use client'

import { useState } from 'react'
import { TrendingUp, DollarSign, Clock, Award, Building2, Users } from 'lucide-react'
import { impactMetrics, clientSuccessStories, industryExpertise } from '@/data/impact'

export default function BusinessImpact() {
  const [activeTab, setActiveTab] = useState<'metrics' | 'stories' | 'industries'>('metrics')

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: JSX.Element } = {
      'Cost Savings': <DollarSign className="w-6 h-6" />,
      'Revenue Growth': <TrendingUp className="w-6 h-6" />,
      'Efficiency': <Clock className="w-6 h-6" />,
      'Quality': <Award className="w-6 h-6" />,
      'Innovation': <Users className="w-6 h-6" />
    }
    return icons[category] || <TrendingUp className="w-6 h-6" />
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Cost Savings': 'text-green-400 bg-green-400/10',
      'Revenue Growth': 'text-blue-400 bg-blue-400/10',
      'Efficiency': 'text-purple-400 bg-purple-400/10',
      'Quality': 'text-yellow-400 bg-yellow-400/10',
      'Innovation': 'text-pink-400 bg-pink-400/10'
    }
    return colors[category] || 'text-gray-400 bg-gray-400/10'
  }

  return (
    <section className="py-20 bg-background-surface">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-text-primary mb-4">
            Business Impact & Results
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Delivering measurable value through strategic AI implementations across diverse industries
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-background-page rounded-lg p-1 border border-border-subtle">
            <button
              onClick={() => setActiveTab('metrics')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'metrics'
                  ? 'bg-primary-accent text-white'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Key Metrics
            </button>
            <button
              onClick={() => setActiveTab('stories')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'stories'
                  ? 'bg-primary-accent text-white'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Success Stories
            </button>
            <button
              onClick={() => setActiveTab('industries')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'industries'
                  ? 'bg-primary-accent text-white'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Industry Expertise
            </button>
          </div>
        </div>

        {/* Key Metrics Tab */}
        {activeTab === 'metrics' && (
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="card">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg ${getCategoryColor(metric.category)}`}>
                    {getCategoryIcon(metric.category)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary">{metric.metric}</h3>
                    <span className="text-sm text-text-secondary">{metric.category}</span>
                  </div>
                </div>
                
                <p className="text-text-secondary mb-3 leading-relaxed">
                  {metric.description}
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">Industry: {metric.industry}</span>
                  <span className="text-text-secondary">{metric.timeframe}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Success Stories Tab */}
        {activeTab === 'stories' && (
          <div className="space-y-8">
            {clientSuccessStories.map((story, index) => (
              <div key={index} className="card">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Building2 className="w-6 h-6 text-primary-accent" />
                      <h3 className="text-xl font-bold text-text-primary">{story.client}</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-primary-accent mb-2">Challenge</h4>
                        <p className="text-text-secondary text-sm">{story.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-primary-accent mb-2">Solution</h4>
                        <p className="text-text-secondary text-sm">{story.solution}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {story.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-background-page text-text-secondary text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="bg-background-page rounded-lg p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                        <h4 className="text-lg font-semibold text-text-primary">Outcomes</h4>
                      </div>
                      <p className="text-text-secondary mb-4">{story.outcome}</p>
                      <div className="flex items-center gap-2 text-sm text-text-secondary">
                        <Clock className="w-4 h-4" />
                        <span>Implementation: {story.timeframe}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Industry Expertise Tab */}
        {activeTab === 'industries' && (
          <div className="grid lg:grid-cols-2 gap-8">
            {industryExpertise.map((industry, index) => (
              <div key={index} className="card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-text-primary">{industry.industry}</h3>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      industry.impact === 'Very High' ? 'bg-green-400/20 text-green-400' :
                      industry.impact === 'High' ? 'bg-blue-400/20 text-blue-400' :
                      'bg-gray-400/20 text-gray-400'
                    }`}>
                      {industry.impact} Impact
                    </span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-primary-accent mb-2">Specializations</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {industry.specializations.map((spec, specIndex) => (
                      <div key={specIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary-accent rounded-full"></div>
                        <span className="text-sm text-text-secondary">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">
                    Projects Completed: <span className="text-primary-accent font-semibold">{industry.projects}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-4">Ready to Drive Similar Results?</h3>
            <p className="text-text-secondary mb-6">
              These results speak for themselves. Let's discuss how AI can transform your business operations and drive measurable impact.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary"
            >
              Discuss Your AI Strategy
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}