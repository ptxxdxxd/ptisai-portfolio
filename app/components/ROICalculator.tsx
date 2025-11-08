'use client'

import { useState } from 'react'
import { Calculator, TrendingUp, Clock, Shield } from 'lucide-react'

interface ROICalculatorProps {
  scrollToSection: (sectionId: string) => void
}

export default function ROICalculator({ scrollToSection }: ROICalculatorProps) {
  const [inputs, setInputs] = useState({
    revenue: '',
    manualHours: '',
    hourlyRate: ''
  })
  const [results, setResults] = useState({
    timeSavings: 0,
    efficiencyGain: 0,
    errorReduction: 0,
    totalROI: 0
  })

  const handleInputChange = (field: string, value: string) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const calculateROI = () => {
    const revenue = parseFloat(inputs.revenue) || 0
    const manualHours = parseFloat(inputs.manualHours) || 0
    const hourlyRate = parseFloat(inputs.hourlyRate) || 0

    if (revenue > 0 && manualHours > 0 && hourlyRate > 0) {
      // Calculate time savings (70% automation of manual tasks)
      const weeklySavings = manualHours * 0.7 * hourlyRate
      const annualTimeSavings = weeklySavings * 52

      // Calculate efficiency gain (15% improvement in revenue processes)
      const efficiencyGain = revenue * 0.15 * 0.25 // 25% of improvement captured

      // Calculate error reduction (5% of revenue protected from errors)
      const errorReduction = revenue * 0.05

      const totalROI = annualTimeSavings + efficiencyGain + errorReduction

      setResults({
        timeSavings: Math.round(annualTimeSavings),
        efficiencyGain: Math.round(efficiencyGain),
        errorReduction: Math.round(errorReduction),
        totalROI: Math.round(totalROI)
      })
    }
  }

  return (
    <section className="py-20 bg-background-surface">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            AI ROI Calculator
          </h2>
          <p className="text-xl text-text-secondary">
            Estimate the potential impact of AI implementation for your business
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-background-page border border-border-subtle rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Form */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Current Annual Revenue
                  </label>
                  <input
                    type="number"
                    value={inputs.revenue}
                    onChange={(e) => handleInputChange('revenue', e.target.value)}
                    placeholder="1000000"
                    className="w-full px-4 py-3 bg-background-surface border border-border-subtle rounded-md text-text-primary placeholder-text-secondary focus:border-primary-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Time Spent on Manual Tasks (hours/week)
                  </label>
                  <input
                    type="number"
                    value={inputs.manualHours}
                    onChange={(e) => handleInputChange('manualHours', e.target.value)}
                    placeholder="40"
                    className="w-full px-4 py-3 bg-background-surface border border-border-subtle rounded-md text-text-primary placeholder-text-secondary focus:border-primary-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Average Hourly Rate ($)
                  </label>
                  <input
                    type="number"
                    value={inputs.hourlyRate}
                    onChange={(e) => handleInputChange('hourlyRate', e.target.value)}
                    placeholder="50"
                    className="w-full px-4 py-3 bg-background-surface border border-border-subtle rounded-md text-text-primary placeholder-text-secondary focus:border-primary-accent focus:outline-none"
                  />
                </div>
                <button
                  onClick={calculateROI}
                  className="btn-primary w-full flex items-center justify-center gap-2 mt-4"
                >
                  <Calculator className="w-4 h-4" />
                  Calculate Potential Savings
                </button>
              </div>

              {/* Results Display */}
              <div className="space-y-4">
                <div className="bg-background-surface rounded-lg p-4 border border-border-subtle">
                  <h4 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary-accent" />
                    Estimated Annual Impact
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Time Savings:
                      </span>
                      <span className="text-secondary-accent font-bold">
                        ${results.timeSavings.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Efficiency Gain:
                      </span>
                      <span className="text-secondary-accent font-bold">
                        ${results.efficiencyGain.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary flex items-center gap-2">
                        <Shield className="w-4 h-4" />
                        Error Reduction:
                      </span>
                      <span className="text-secondary-accent font-bold">
                        ${results.errorReduction.toLocaleString()}
                      </span>
                    </div>
                    <hr className="border-border-subtle" />
                    <div className="flex justify-between items-center text-xl">
                      <span className="text-text-primary font-bold">Total ROI:</span>
                      <span className="text-primary-accent font-bold">
                        ${results.totalROI.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm text-text-secondary mb-4">
                    Based on industry benchmarks and PTisAI client data
                  </p>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="btn-secondary"
                  >
                    Get Custom Analysis
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}