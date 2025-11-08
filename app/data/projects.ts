// Portfolio Projects - Add this new section
export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  results: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  category: 'LLM' | 'ML' | 'NLP' | 'Computer Vision' | 'Data Science' | 'Automation';
  impact: 'Cost Reduction' | 'Revenue Growth' | 'Efficiency Gain' | 'Innovation';
  industry: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Customer Service Automation',
    description: 'Built a sophisticated RAG-based chatbot system that reduced customer service response time by 75% and handled 90% of inquiries without human intervention.',
    problem: 'Customer service team was overwhelmed with repetitive inquiries, leading to long wait times and customer dissatisfaction.',
    solution: 'Developed a custom RAG system using GPT-4 and enterprise data, with intelligent escalation to human agents for complex issues.',
    results: '• 75% reduction in response time\n• 90% automation rate\n• $200K annual cost savings\n• 95% customer satisfaction score',
    technologies: ['GPT-4', 'LangChain', 'Pinecone', 'FastAPI', 'React', 'Docker'],
    githubUrl: 'https://github.com/ptxxdxxd/ai-customer-service',
    category: 'LLM',
    impact: 'Cost Reduction',
    industry: 'Customer Service'
  },
  {
    id: '2', 
    title: 'Generative AI Content Platform',
    description: 'Created an enterprise content generation platform that produces high-quality marketing materials, documentation, and training content at scale.',
    problem: 'Marketing team spent 40+ hours weekly creating content, leading to inconsistent quality and delayed campaigns.',
    solution: 'Built a multi-model AI platform with brand voice training, content templates, and automated approval workflows.',
    results: '• 300% increase in content production\n• 85% reduction in creation time\n• 40% improvement in engagement rates\n• Consistent brand voice across all materials',
    technologies: ['GPT-4', 'Fine-tuning', 'DALL-E', 'AWS S3', 'PostgreSQL', 'Next.js'],
    githubUrl: 'https://github.com/ptxxdxxd/ai-content-platform',
    category: 'LLM',
    impact: 'Efficiency Gain',
    industry: 'Marketing'
  },
  {
    id: '3',
    title: 'Predictive Analytics for Sales Forecasting',
    description: 'Developed a machine learning pipeline that predicts sales trends with 92% accuracy, enabling data-driven inventory and staffing decisions.',
    problem: 'Manual forecasting led to frequent stock-outs and overstock situations, costing the company 15% in lost sales and excess inventory.',
    solution: 'Implemented ensemble ML models incorporating historical data, market trends, and external factors for comprehensive forecasting.',
    results: '• 92% prediction accuracy\n• 15% reduction in inventory costs\n• 20% improvement in sales\n• Real-time dashboard for stakeholders',
    technologies: ['Python', 'TensorFlow', 'scikit-learn', 'Apache Airflow', 'Tableau', 'AWS'],
    category: 'ML',
    impact: 'Revenue Growth',
    industry: 'Retail'
  },
  {
    id: '4',
    title: 'Document Intelligence & Processing',
    description: 'Automated document processing using computer vision and NLP to extract, classify, and validate information from complex business documents.',
    problem: 'Manual document processing was error-prone, time-consuming, and required significant human resources for basic data entry.',
    solution: 'Built an end-to-end document processing pipeline with OCR, entity extraction, validation rules, and automated workflow routing.',
    results: '• 95% accuracy in data extraction\n• 80% reduction in processing time\n• 70% reduction in human intervention\n• 99.9% accuracy in compliance checks',
    technologies: ['OpenAI Vision', 'Tesseract', 'spaCy', 'Computer Vision', 'React', 'MongoDB'],
    githubUrl: 'https://github.com/ptxxdxxd/document-ai',
    category: 'NLP',
    impact: 'Efficiency Gain',
    industry: 'Financial Services'
  },
  {
    id: '5',
    title: 'AI-Powered Code Review Assistant',
    description: 'Built an intelligent code review system that automatically detects bugs, security vulnerabilities, and suggests improvements for faster development cycles.',
    problem: 'Code reviews were time-consuming and often missed critical issues, leading to production bugs and security vulnerabilities.',
    solution: 'Developed an AI assistant that analyzes code quality, security patterns, and suggests improvements using static analysis and LLM reasoning.',
    results: '• 60% faster code reviews\n• 45% reduction in production bugs\n• 80% improvement in code quality scores\n• Enhanced security posture',
    technologies: ['GPT-4', 'Static Analysis', 'AST Parsing', 'GitHub Actions', 'Python', 'Node.js'],
    githubUrl: 'https://github.com/ptxxdxxd/ai-code-review',
    category: 'LLM',
    impact: 'Efficiency Gain',
    industry: 'Software Development'
  },
  {
    id: '6',
    title: 'Intelligent Process Automation',
    description: 'Designed and implemented RPA solutions using AI to automate complex business processes, reducing manual work and improving accuracy.',
    problem: 'Multiple departments had repetitive manual processes that were time-consuming and error-prone, affecting productivity and employee satisfaction.',
    solution: 'Created intelligent automation workflows combining RPA tools with AI decision-making, allowing complex conditional logic and error handling.',
    results: '• 70% reduction in process completion time\n• 95% accuracy improvement\n• $150K annual labor cost savings\n• Enhanced employee satisfaction',
    technologies: ['UiPath', 'Python', 'Machine Learning', 'OCR', 'API Integration', 'PowerBI'],
    category: 'Automation',
    impact: 'Cost Reduction',
    industry: 'Operations'
  }
];