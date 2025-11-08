// AI Methodology & Thought Leadership
export interface AIArticle {
  id: string;
  title: string;
  publication: string;
  date: string;
  url?: string;
  summary: string;
  tags: string[];
}

export interface AIPresentation {
  id: string;
  title: string;
  event: string;
  date: string;
  description: string;
  audience: string;
}

export const thoughtLeadership = {
  articles: [
    {
      id: '1',
      title: 'The Future of RAG: Beyond Simple Retrieval-Augmented Generation',
      publication: 'AI Strategy Quarterly',
      date: '2025-10',
      summary: 'Exploring advanced RAG architectures for enterprise applications, including hybrid retrieval methods, semantic caching, and dynamic knowledge graphs.',
      tags: ['RAG', 'Enterprise AI', 'Architecture']
    },
    {
      id: '2', 
      title: 'LLMOps in Production: Lessons from 15+ Enterprise Deployments',
      publication: 'Machine Learning Engineering Review',
      date: '2025-09',
      summary: 'Comprehensive guide on deploying and scaling LLM applications in production, covering monitoring, optimization, and governance.',
      tags: ['LLMOps', 'Production', 'Deployment']
    },
    {
      id: '3',
      title: 'AI Ethics in Practice: Building Responsible AI Systems',
      publication: 'Ethics in Technology Journal',
      date: '2025-08',
      summary: 'Practical framework for implementing ethical AI principles in enterprise environments, with real-world case studies.',
      tags: ['AI Ethics', 'Governance', 'Responsible AI']
    },
    {
      id: '4',
      title: 'Prompt Engineering at Scale: Strategies for Enterprise Applications',
      publication: 'Generative AI Today',
      date: '2025-07',
      summary: 'Advanced prompt engineering techniques for large-scale AI applications, including prompt optimization and A/B testing methodologies.',
      tags: ['Prompt Engineering', 'Scaling', 'Optimization']
    }
  ] as AIArticle[],
  
  presentations: [
    {
      id: '1',
      title: 'AI Transformation Strategy for C-Suite Executives',
      event: 'Tech Leaders Summit 2025',
      date: '2025-11',
      description: 'Comprehensive presentation on AI strategy development, ROI measurement, and organizational change management.',
      audience: 'C-Level Executives'
    },
    {
      id: '2',
      title: 'Building Production-Ready LLM Applications',
      event: 'MLOps Conference 2025',
      date: '2025-10',
      description: 'Technical deep-dive into LLMOps best practices, covering deployment, monitoring, and optimization strategies.',
      audience: 'ML Engineers & Data Scientists'
    },
    {
      id: '3',
      title: 'Ethics in AI: A Practical Implementation Guide',
      event: 'AI Safety Summit',
      date: '2025-09',
      description: 'Workshop on implementing ethical AI frameworks in enterprise environments with hands-on exercises.',
      audience: 'AI Practitioners & Compliance Teams'
    }
  ] as AIPresentation[]
};

// AI Development Methodology
export const aiMethodology = {
  phases: [
    {
      phase: '1. Discovery & Assessment',
      description: 'Comprehensive analysis of business needs, data availability, and technical constraints',
      activities: [
        'Stakeholder interviews and requirements gathering',
        'Data audit and quality assessment',
        'Technical feasibility analysis',
        'ROI projection and risk assessment',
        'Compliance and ethical review'
      ],
      deliverables: ['Business case', 'Technical specification', 'Project roadmap']
    },
    {
      phase: '2. Strategy & Design',
      description: 'Architecting AI solutions aligned with business objectives and technical requirements',
      activities: [
        'Solution architecture design',
        'Model selection and algorithm optimization',
        'Data pipeline architecture',
        'Integration planning',
        'Security and privacy framework'
      ],
      deliverables: ['System architecture', 'Implementation plan', 'Risk mitigation strategy']
    },
    {
      phase: '3. Development & Training',
      description: 'Building and training AI models with rigorous testing and validation',
      activities: [
        'Data preprocessing and feature engineering',
        'Model development and training',
        'Hyperparameter optimization',
        'Cross-validation and testing',
        'Performance benchmarking'
      ],
      deliverables: ['Trained models', 'Validation reports', 'Performance metrics']
    },
    {
      phase: '4. Deployment & Integration',
      description: 'Production deployment with proper monitoring and scaling capabilities',
      activities: [
        'Production environment setup',
        'Model deployment and API development',
        'Integration with existing systems',
        'Load testing and optimization',
        'Security implementation'
      ],
      deliverables: ['Production system', 'API documentation', 'Deployment guide']
    },
    {
      phase: '5. Monitoring & Optimization',
      description: 'Continuous monitoring, performance optimization, and model updates',
      activities: [
        'Real-time monitoring setup',
        'Performance tracking and alerting',
        'Model drift detection',
        'Continuous optimization',
        'User feedback integration'
      ],
      deliverables: ['Monitoring dashboard', 'Optimization reports', 'Update procedures']
    }
  ]
};

// AI Tools & Technologies Expertise
export const toolsExpertise = {
  llm_platforms: {
    'OpenAI GPT-4': { proficiency: 'Expert', experience: '2+ years', projects: '15+' },
    'Anthropic Claude': { proficiency: 'Expert', experience: '1+ years', projects: '8+' },
    'Google Gemini': { proficiency: 'Advanced', experience: '1+ year', projects: '5+' },
    'Meta Llama': { proficiency: 'Advanced', experience: '6+ months', projects: '3+' }
  },
  ml_frameworks: {
    'TensorFlow': { proficiency: 'Advanced', experience: '3+ years' },
    'PyTorch': { proficiency: 'Advanced', experience: '2+ years' },
    'Hugging Face': { proficiency: 'Expert', experience: '2+ years' },
    'scikit-learn': { proficiency: 'Expert', experience: '3+ years' },
    'XGBoost/LightGBM': { proficiency: 'Advanced', experience: '2+ years' }
  },
  cloud_platforms: {
    'AWS SageMaker': { proficiency: 'Advanced', certifications: 3 },
    'Google Cloud AI': { proficiency: 'Advanced', certifications: 2 },
    'Azure ML': { proficiency: 'Intermediate', certifications: 1 },
    'Databricks': { proficiency: 'Advanced', certifications: 1 }
  },
  vector_databases: {
    'Pinecone': { proficiency: 'Expert', experience: '1+ years' },
    'Weaviate': { proficiency: 'Advanced', experience: '8+ months' },
    'Chroma': { proficiency: 'Advanced', experience: '6+ months' },
    'FAISS': { proficiency: 'Intermediate', experience: '6+ months' }
  }
};