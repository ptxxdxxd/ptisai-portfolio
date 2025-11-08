'use client'

import { useState, useMemo } from 'react'
import { Search, Filter, Award, Calendar, Building } from 'lucide-react'
import { certificates, categories, issuers } from '@/data/certificates'

export default function Certifications() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedIssuer, setSelectedIssuer] = useState('All')
  const [showFilters, setShowFilters] = useState(false)

  const filteredCertificates = useMemo(() => {
    return certificates.filter(cert => {
      const matchesSearch = cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           cert.category.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || cert.category === selectedCategory
      const matchesIssuer = selectedIssuer === 'All' || cert.issuer === selectedIssuer
      
      return matchesSearch && matchesCategory && matchesIssuer
    })
  }, [searchTerm, selectedCategory, selectedIssuer])

  const getIssuerLogo = (issuer: string) => {
    // Simple text-based logos for now - can be enhanced with actual logos
    const colors: { [key: string]: string } = {
      'AWS': 'bg-orange-500',
      'IBM SkillsBuild': 'bg-blue-600',
      'edX': 'bg-purple-600',
      'Pragmatic AI Labs': 'bg-green-600',
      'Davidson_Galileo': 'bg-red-600'
    }
    return colors[issuer] || 'bg-gray-500'
  }

  return (
    <section className="py-20 bg-background-page">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-text-primary mb-4">
            Professional Certifications
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            Comprehensive collection of 43 verified certifications across AI, ML, prompt engineering, 
            data engineering, LLMOps, executive leadership, automation, and AI security/governance.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-accent">{certificates.length}</div>
              <div className="text-sm text-text-secondary">Total Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-accent">{categories.length - 1}</div>
              <div className="text-sm text-text-secondary">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-accent">{issuers.length - 1}</div>
              <div className="text-sm text-text-secondary">Providers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-accent">6</div>
              <div className="text-sm text-text-secondary">Months Duration</div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
              <input
                type="text"
                placeholder="Search certifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-background-surface border border-border-subtle rounded-lg text-text-primary placeholder-text-secondary focus:border-primary-accent focus:ring-1 focus:ring-primary-accent outline-none transition-all"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              Filters
              {(selectedCategory !== 'All' || selectedIssuer !== 'All') && (
                <span className="bg-primary-accent text-white text-xs px-2 py-1 rounded-full">
                  Active
                </span>
              )}
            </button>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="mt-6 p-6 bg-background-surface border border-border-subtle rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-3">
                    Category
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                          selectedCategory === category
                            ? 'bg-primary-accent text-white'
                            : 'bg-background-page text-text-secondary border border-border-subtle hover:border-primary-accent'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-3">
                    Provider
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {issuers.map((issuer) => (
                      <button
                        key={issuer}
                        onClick={() => setSelectedIssuer(issuer)}
                        className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                          selectedIssuer === issuer
                            ? 'bg-primary-accent text-white'
                            : 'bg-background-page text-text-secondary border border-border-subtle hover:border-primary-accent'
                        }`}
                      >
                        {issuer}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              {(selectedCategory !== 'All' || selectedIssuer !== 'All' || searchTerm) && (
                <div className="mt-4 pt-4 border-t border-border-subtle">
                  <button
                    onClick={() => {
                      setSelectedCategory('All')
                      setSelectedIssuer('All')
                      setSearchTerm('')
                    }}
                    className="text-sm text-primary-accent hover:text-primary-accent/80"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-text-secondary">
            Showing <span className="text-primary-accent font-semibold">{filteredCertificates.length}</span> of {certificates.length} certifications
          </p>
        </div>

        {/* Certification Grid */}
        {filteredCertificates.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertificates.map((cert) => (
              <div key={cert.id} className="card group">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg ${getIssuerLogo(cert.issuer)} flex items-center justify-center text-white font-bold text-sm`}>
                    {cert.issuer.split(' ').map(word => word[0]).join('').substring(0, 2)}
                  </div>
                  <Award className="w-5 h-5 text-primary-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h3 className="text-lg font-semibold text-text-primary mb-3 leading-tight">
                  {cert.name}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-text-secondary">
                    <Building className="w-4 h-4" />
                    <span>{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-text-secondary">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>
                
                <div className="inline-block px-3 py-1 bg-primary-accent/10 text-primary-accent text-xs font-medium rounded-full">
                  {cert.category}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Award className="w-16 h-16 text-text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-text-primary mb-2">No certifications found</h3>
            <p className="text-text-secondary">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-background-surface border border-border-subtle rounded-lg">
          <h3 className="text-2xl font-bold text-text-primary mb-4">
            Ready to collaborate on your AI transformation?
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            With expertise spanning 43 verified certifications, I'm ready to help your organization 
            navigate the complexities of modern AI implementation and drive sustainable digital transformation.
          </p>
          <button className="btn-primary">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  )
}