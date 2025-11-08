'use client'

import { Bot, Database, Cloud, Settings } from 'lucide-react'

export default function AITools() {
  const toolCategories = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'LLMs & Generative AI',
      description: 'GPT-4, Claude, Gemini, LLaMA, LangChain'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data & Analytics',
      description: 'Apache Spark, Pandas, TensorFlow, PyTorch'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Platforms',
      description: 'AWS, Google Cloud, Azure, OpenAI API'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'DevOps & MLOps',
      description: 'Docker, Kubernetes, MLflow, Weights & Biases'
    }
  ]

  return (
    <section className="py-20 bg-background-surface">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            AI Tools & Technologies
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Mastery across the complete AI technology stack
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {toolCategories.map((category, index) => (
            <div key={index} className="card text-center group">
              <div className="text-primary-accent mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                {category.icon}
              </div>
              <h4 className="font-bold text-text-primary mb-3">{category.title}</h4>
              <p className="text-sm text-text-secondary">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}