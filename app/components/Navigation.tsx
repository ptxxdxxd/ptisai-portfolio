'use client'

import { Sun, Moon } from 'lucide-react'

interface NavigationProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export default function Navigation({ 
  darkMode, 
  setDarkMode, 
  activeSection, 
  scrollToSection 
}: NavigationProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'resume', label: 'Resume' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-18 backdrop-blur-xl bg-background-page/50 border-b border-border-subtle">
      <div className="container-custom h-full flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center space-x-3 cursor-pointer hover:text-primary-accent transition-colors"
          onClick={() => scrollToSection('home')}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-primary-accent to-secondary-accent rounded-lg flex items-center justify-center text-white font-bold text-sm">
            PT
          </div>
          <div className="text-xl font-bold text-text-primary">PTisAI</div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`nav-link ${
                activeSection === item.id ? 'active' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-md border border-border-subtle bg-background-surface hover:border-primary-accent transition-all duration-300"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-text-secondary" />
          ) : (
            <Moon className="w-5 h-5 text-text-secondary" />
          )}
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="p-2 text-text-secondary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}