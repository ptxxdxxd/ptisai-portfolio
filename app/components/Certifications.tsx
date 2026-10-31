'use client'

import { useState, useMemo } from 'react'
import { Search, Calendar, Building } from 'lucide-react'
import { courses, categories } from '@/data/certificates'

export default function Certifications() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredCourses = useMemo(() => {
    const term = searchTerm.toLowerCase()
    return courses.filter(course => {
      const matchesSearch = course.name.toLowerCase().includes(term) ||
                           course.providers.some(p => p.toLowerCase().includes(term)) ||
                           course.category.toLowerCase().includes(term)
      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  return (
    <section className="py-20 bg-background-surface">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-text-primary mb-4">Coursework</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Self-directed AI coursework from July to November 2025, grouped by topic.
            Some topics I took through more than one provider.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
            <input
              type="text"
              placeholder="Search coursework..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-background-page border border-border-subtle rounded-lg text-text-primary placeholder-text-secondary focus:border-primary-accent focus:ring-1 focus:ring-primary-accent outline-none transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {['All', ...categories].map((category) => (
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

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div key={course.name} className="card">
                <h3 className="text-lg font-semibold text-text-primary mb-3 leading-tight">
                  {course.name}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2 text-sm text-text-secondary">
                    <Building className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{course.providers.join(', ')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-text-secondary">
                    <Calendar className="w-4 h-4" />
                    <span>{course.date}</span>
                  </div>
                </div>

                <div className="inline-block px-3 py-1 bg-primary-accent/10 text-primary-accent text-xs font-medium rounded-full">
                  {course.category}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center py-16 text-text-secondary">
            Nothing matches that search.
          </p>
        )}
      </div>
    </section>
  )
}
