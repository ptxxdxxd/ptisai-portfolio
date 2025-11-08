'use client'

import { useState } from 'react'
import { Mail, Linkedin, MapPin, Send, Github, ExternalLink } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success')
      setIsSubmitting(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      })
      
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 1000)
  }

  const isFormValid = formData.name && formData.email && formData.subject && formData.message

  return (
    <section className="py-20 bg-background-surface">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-text-primary mb-4">Let's Connect</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Ready to explore how AI can transform your organization? I'm here to discuss 
            consulting opportunities, strategic partnerships, and innovative projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-text-primary mb-6">Get in Touch</h3>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                I'm currently available for remote AI consulting engagements and strategic projects. 
                Whether you're looking to implement generative AI solutions, optimize your data pipelines, 
                or develop an AI governance framework, I'd love to discuss how we can work together.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-background-page border border-border-subtle rounded-lg hover:border-primary-accent transition-all">
                <div className="w-12 h-12 bg-primary-accent/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-text-primary">Email</h4>
                  <a 
                    href="mailto:ptisdead@gmail.com" 
                    className="text-primary-accent hover:text-primary-accent/80 transition-colors"
                  >
                    ptisdead@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-background-page border border-border-subtle rounded-lg hover:border-primary-accent transition-all">
                <div className="w-12 h-12 bg-primary-accent/10 rounded-lg flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-primary-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-text-primary">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/christopher-vickers-78607335b/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-accent hover:text-primary-accent/80 transition-colors"
                  >
                    Connect with me
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-background-page border border-border-subtle rounded-lg hover:border-primary-accent transition-all">
                <div className="w-12 h-12 bg-primary-accent/10 rounded-lg flex items-center justify-center">
                  <Github className="w-6 h-6 text-primary-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-text-primary">GitHub</h4>
                  <a 
                    href="https://github.com/ptxxdxxd" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-accent hover:text-primary-accent/80 transition-colors"
                  >
                    @ptxxdxxd
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-background-page border border-border-subtle rounded-lg hover:border-primary-accent transition-all">
                <div className="w-12 h-12 bg-primary-accent/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-text-primary">Location</h4>
                  <p className="text-text-secondary">West Palm Beach, FL</p>
                  <p className="text-sm text-text-secondary">Available for remote work worldwide</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-background-page border border-border-subtle rounded-lg hover:border-primary-accent transition-all">
                <div className="w-12 h-12 bg-primary-accent/10 rounded-lg flex items-center justify-center">
                  <ExternalLink className="w-6 h-6 text-primary-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-text-primary">Portfolio</h4>
                  <a 
                    href="#" 
                    className="text-primary-accent hover:text-primary-accent/80 transition-colors"
                  >
                    View this portfolio
                  </a>
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-primary-accent/10 border border-primary-accent/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-semantic-success rounded-full animate-pulse"></div>
                <h4 className="text-lg font-semibold text-text-primary">Available for Projects</h4>
              </div>
              <p className="text-text-secondary text-sm">
                Currently accepting new consulting engagements and remote AI engineering projects. 
                Response time: Within 24 hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background-page border border-border-subtle rounded-lg p-8">
            <h3 className="text-2xl font-bold text-text-primary mb-6">Send a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-semantic-success/10 border border-semantic-success/20 rounded-lg">
                <p className="text-semantic-success font-medium">
                  Thank you for your message! I'll get back to you within 24 hours.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background-surface border border-border-subtle rounded-lg text-text-primary placeholder-text-secondary focus:border-primary-accent focus:ring-1 focus:ring-primary-accent outline-none transition-all"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background-surface border border-border-subtle rounded-lg text-text-primary placeholder-text-secondary focus:border-primary-accent focus:ring-1 focus:ring-primary-accent outline-none transition-all"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background-surface border border-border-subtle rounded-lg text-text-primary placeholder-text-secondary focus:border-primary-accent focus:ring-1 focus:ring-primary-accent outline-none transition-all"
                  placeholder="Your company or organization"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background-surface border border-border-subtle rounded-lg text-text-primary focus:border-primary-accent focus:ring-1 focus:ring-primary-accent outline-none transition-all"
                >
                  <option value="">Select a subject</option>
                  <option value="AI Consulting">AI Consulting</option>
                  <option value="Data Engineering">Data Engineering</option>
                  <option value="AI Strategy">AI Strategy & Transformation</option>
                  <option value="Ethical AI">Ethical AI Implementation</option>
                  <option value="LLMOps">LLMOps & RAG Pipelines</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Speaking">Speaking/Collaboration</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-background-surface border border-border-subtle rounded-lg text-text-primary placeholder-text-secondary focus:border-primary-accent focus:ring-1 focus:ring-primary-accent outline-none transition-all resize-none"
                  placeholder="Tell me about your project, goals, and how I can help..."
                />
              </div>

              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className={`w-full btn-primary inline-flex items-center justify-center gap-2 ${
                  !isFormValid ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-border-subtle text-center">
              <p className="text-sm text-text-secondary">
                By sending this message, you agree to be contacted regarding your inquiry.
                I respect your privacy and will never share your information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}