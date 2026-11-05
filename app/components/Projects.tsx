'use client'

import { Github, ExternalLink } from 'lucide-react'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <section className="py-20 bg-background-page">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-text-primary mb-4">Projects</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Public work you can open, read and run.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(project => (
            <div key={project.id} className="card flex flex-col">
              <h3 className="text-2xl font-semibold text-text-primary mb-2">{project.title}</h3>
              <p className="text-text-secondary mb-4">{project.summary}</p>

              <ul className="space-y-1 text-sm text-text-primary mb-4">
                {project.details.map(d => (
                  <li key={d}>• {d}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map(t => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-primary-accent/10 text-primary-accent text-xs font-medium rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-accent hover:text-primary-accent/80 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-accent hover:text-primary-accent/80 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live site
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
