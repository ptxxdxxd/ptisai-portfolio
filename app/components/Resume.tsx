'use client'

import { Download, Mail, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react'

export default function Resume() {
  return (
    <section className="py-20 bg-background-surface">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-text-primary mb-4">Professional Resume</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Comprehensive overview of my expertise, certifications, and professional achievements 
            in AI consulting and engineering.
          </p>
          <div className="flex justify-center mt-8">
            <button className="btn-primary inline-flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download PDF Resume
            </button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-background-page border border-border-subtle rounded-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-text-primary mb-2">Chris Vickers</h1>
            <h3 className="text-2xl text-primary-accent mb-6">AI Consultant & Engineer</h3>
            
            <div className="flex flex-wrap justify-center gap-6 text-text-secondary">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>West Palm Beach, FL</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>ptisdead@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                <a 
                  href="https://github.com/ptxxdxxd" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-accent transition-colors"
                >
                  GitHub
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                <a 
                  href="https://www.linkedin.com/in/christopher-vickers-78607335b/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-accent transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                <span>Portfolio Website</span>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-text-primary mb-6">Professional Summary</h3>
          <div className="bg-background-page border border-border-subtle rounded-lg p-8">
            <p className="text-lg text-text-primary leading-relaxed mb-6">
              Results-driven AI consultant and engineer with 43+ verified certifications spanning generative AI, 
              prompt engineering, LLMOps, data engineering, executive leadership, automation, and AI security/governance. 
              Proven expertise in modern web architecture, ethical AI deployment, and strategic digital transformation.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold text-primary-accent mb-3">Core Expertise</h4>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Generative AI Systems & Prompt Engineering</li>
                  <li>• LLM Orchestration & RAG Pipeline Development</li>
                  <li>• Data Engineering & Automated Workflow Optimization</li>
                  <li>• AI Security, Governance & Risk Management</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-primary-accent mb-3">Strategic Focus</h4>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Executive Leadership & Organizational Transformation</li>
                  <li>• Ethical AI & Sustainable Technology Implementation</li>
                  <li>• Modern Web Architecture & SEO Optimization</li>
                  <li>• Strategic Digital Transformation Consulting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-text-primary mb-6">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-background-page border border-border-subtle rounded-lg p-6">
              <h4 className="text-xl font-semibold text-primary-accent mb-3">AI & Machine Learning</h4>
              <p className="text-text-secondary text-sm">
                Generative AI, Prompt Engineering, LLM Orchestration, RAG Pipelines, ML Solutions
              </p>
            </div>
            <div className="bg-background-page border border-border-subtle rounded-lg p-6">
              <h4 className="text-xl font-semibold text-primary-accent mb-3">Data & Engineering</h4>
              <p className="text-text-secondary text-sm">
                Data Engineering, Data Pipelines, Automation Foundations, Workflow Optimization
              </p>
            </div>
            <div className="bg-background-page border border-border-subtle rounded-lg p-6">
              <h4 className="text-xl font-semibold text-primary-accent mb-3">Security & Governance</h4>
              <p className="text-text-secondary text-sm">
                AI Security, AI Governance, Risk Management, Compliance Frameworks
              </p>
            </div>
            <div className="bg-background-page border border-border-subtle rounded-lg p-6">
              <h4 className="text-xl font-semibold text-primary-accent mb-3">Web Technologies</h4>
              <p className="text-text-secondary text-sm">
                React, Next.js, Tailwind CSS, Headless CMS, SEO Optimization
              </p>
            </div>
            <div className="bg-background-page border border-border-subtle rounded-lg p-6">
              <h4 className="text-xl font-semibold text-primary-accent mb-3">Leadership & Strategy</h4>
              <p className="text-text-secondary text-sm">
                Executive Leadership, AI Strategy, Organizational Transformation, Portfolio Management
              </p>
            </div>
            <div className="bg-background-page border border-border-subtle rounded-lg p-6">
              <h4 className="text-xl font-semibold text-primary-accent mb-3">Ethics & Compliance</h4>
              <p className="text-text-secondary text-sm">
                Ethical AI, Responsible AI, Bias Mitigation, AI for Business
              </p>
            </div>
          </div>
        </div>

        {/* Notable Projects */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-text-primary mb-6">Notable Projects</h3>
          <div className="space-y-8">
            <div className="bg-background-page border border-border-subtle rounded-lg p-8">
              <h4 className="text-2xl font-semibold text-primary-accent mb-2">Desi Sub & Grill Website Transformation</h4>
              <p className="text-sm text-text-secondary mb-4 italic">Strategic Digital Overhaul & Brand Evolution</p>
              <ul className="space-y-2 text-text-primary">
                <li>• Led comprehensive website redesign utilizing Next.js and Tailwind CSS architecture</li>
                <li>• Implemented real-time content management system integration</li>
                <li>• Developed automated social media management and seamless ordering workflows</li>
                <li>• Successfully preserved brand legacy while introducing modern functionality and user experience</li>
              </ul>
            </div>
            
            <div className="bg-background-page border border-border-subtle rounded-lg p-8">
              <h4 className="text-2xl font-semibold text-primary-accent mb-2">AI Credential Portfolio System</h4>
              <p className="text-sm text-text-secondary mb-4 italic">Professional Portfolio & Credential Management Platform</p>
              <ul className="space-y-2 text-text-primary">
                <li>• Engineered comprehensive credential verification and organization system</li>
                <li>• Implemented smart deduplication and chronological categorization algorithms</li>
                <li>• Created professional showcase platform optimized for consulting and remote work applications</li>
                <li>• Established best practices for credential presentation and professional branding</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Professional Objectives */}
        <div>
          <h3 className="text-3xl font-bold text-text-primary mb-6">Professional Objectives</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background-page border border-border-subtle rounded-lg p-8">
              <h4 className="text-xl font-semibold text-primary-accent mb-4">Immediate Goals</h4>
              <ul className="space-y-3 text-text-primary">
                <li>• Secure remote AI engineering and consulting positions with leading technology organizations</li>
                <li>• Lead ethical AI transformation initiatives for enterprise clients seeking digital modernization</li>
                <li>• Develop scalable, high-impact web platforms that enhance local business operations and customer engagement</li>
              </ul>
            </div>
            
            <div className="bg-background-page border border-border-subtle rounded-lg p-8">
              <h4 className="text-xl font-semibold text-primary-accent mb-4">Long-term Vision</h4>
              <ul className="space-y-3 text-text-primary">
                <li>• Establish thought leadership in responsible AI implementation and organizational transformation</li>
                <li>• Mentor emerging AI professionals while building sustainable technology solutions</li>
                <li>• Drive innovation in ethical AI deployment and sustainable technology practices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}