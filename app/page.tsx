'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Resume from '@/components/Resume'
import Certifications from '@/components/Certifications'
import Services from '@/components/Services'
import AITools from '@/components/AITools'
import IndustryExpertise from '@/components/IndustryExpertise'
import ROICalculator from '@/components/ROICalculator'
import Contact from '@/components/Contact'

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-background-page text-text-primary">
      <Navigation 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      
      <main>
        <section id="home">
          <Hero scrollToSection={scrollToSection} />
        </section>
        
        <section id="resume">
          <Resume />
        </section>
        
        <section id="certifications">
          <Certifications />
        </section>
        
        <section id="services">
          <Services scrollToSection={scrollToSection} />
        </section>

        <section>
          <AITools />
        </section>

        <section>
          <IndustryExpertise />
        </section>

        <section>
          <ROICalculator scrollToSection={scrollToSection} />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  )
}