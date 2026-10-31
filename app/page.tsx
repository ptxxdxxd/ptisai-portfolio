'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Certifications from '@/components/Certifications'
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
        
        <section id="projects">
          <Projects />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="coursework">
          <Certifications />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  )
}