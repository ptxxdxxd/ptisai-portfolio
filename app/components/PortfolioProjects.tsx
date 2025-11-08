'use client'

import { useState } from 'react'
import { ExternalLink, Github, TrendingUp, Calendar, Building, Code, Award } from 'lucide-react'
import { projects, Project } from '@/data/projects'

export default function PortfolioProjects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedImpact, setSelectedImpact] = useState<string>('All')

  const categories = ['All', 'LLM', 'ML', 'NLP', 'Computer Vision', 'Data Science', 'Automation']
  const impacts = ['All', 'Cost Reduction', 'Revenue Growth', 'Efficiency Gain', 'Innovation']

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory
    const impactMatch = selectedImpact === 'All' || project.impact === selectedImpact
    return categoryMatch && impactMatch
  })

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'LLM': '🧠',
      'ML': '📊',
      'NLP': '💬',
      'Computer Vision': '👁️',
      'Data Science': '🔬',
      'Automation': '⚡'
    }
    return icons[category] || '🚀'
  }

  const getImpactColor = (impact: string) => {
    const colors: { [key: string]: string } = {
      'Cost Reduction': 'text-green-400 bg-green-400/10',
      'Revenue Growth': 'text-blue-400 bg-blue-400/10', 
      'Efficiency Gain': 'text-purple-400 bg-purple-400/10',
      'Innovation': 'text-yellow-400 bg-yellow-400/10'
    }
    return colors[impact] || 'text-gray-400 bg-gray-400/10'
  }

  return (
    <section className="py-20 bg-background-page">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-text-primary mb-4">
            Portfolio Projects
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            Real-world AI implementations delivering measurable business impact across multiple industries
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-accent">6</div>
              <div className="text-sm text-text-secondary">Major Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-accent">$850K+</div>
              <div className="text-sm text-text-secondary">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-accent">75%</div>
              <div className="text-sm text-text-secondary">Avg Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-accent">95%</div>
              <div className="text-sm text-text-secondary">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex flex-wrap gap-2">
            <span className="text-text-secondary text-sm font-medium px-3 py-1">Category:</span>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-accent text-white'
                    : 'bg-background-surface text-text-secondary hover:bg-border-subtle'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-2">
            <span className="text-text-secondary text-sm font-medium px-3 py-1">Impact:</span>
            {impacts.map(impact => (
              <button
                key={impact}
                onClick={() => setSelectedImpact(impact)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedImpact === impact
                    ? 'bg-primary-accent text-white'
                    : 'bg-background-surface text-text-secondary hover:bg-border-subtle'
                }`}
              >
                {impact}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="card hover:scale-[1.02] transition-all duration-300">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{getCategoryIcon(project.category)}</span>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">{project.title}</h3>
                    <div className="flex items-center gap-4 mt-1">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getImpactColor(project.impact)}`}>
                        {project.impact}
                      </span>
                      <span className="text-sm text-text-secondary flex items-center gap-1">
                        <Building className="w-4 h-4" />
                        {project.industry}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-text-secondary mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Problem & Solution */}
              <div className="space-y-3 mb-4">
                <div>
                  <h4 className="text-sm font-semibold text-primary-accent mb-1">Problem:</h4>
                  <p className="text-sm text-text-secondary">{project.problem}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-primary-accent mb-1">Solution:</h4>
                  <p className="text-sm text-text-secondary">{project.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div className="bg-background-surface rounded-lg p-4 mb-4">
                <h4 className="text-sm font-semibold text-primary-accent mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Business Impact
                </h4>
                <div className="text-sm text-text-secondary whitespace-pre-line">
                  {project.results}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-primary-accent mb-2 flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-border-subtle text-text-secondary text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4 border-t border-border-subtle">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-accent hover:text-primary-accent/80 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">View Code</span>
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-accent hover:text-primary-accent/80 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-4">Let's Build Your Next AI Solution</h3>
            <p className="text-text-secondary mb-6">
              Ready to transform your business with AI? These projects demonstrate proven results across multiple industries.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary"
            >
              Start Your AI Project
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}