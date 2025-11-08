// Business Impact & ROI - Add to portfolio
export interface ImpactMetric {
  category: 'Cost Savings' | 'Revenue Growth' | 'Efficiency' | 'Quality' | 'Innovation';
  metric: string;
  value: string;
  description: string;
  timeframe: string;
  industry: string;
}

export const impactMetrics: ImpactMetric[] = [
  {
    category: 'Cost Savings',
    metric: '$850K+ Annual Cost Reduction',
    value: '$850,000',
    description: 'Total cost savings from AI implementations across multiple client projects',
    timeframe: '2025',
    industry: 'Multi-Industry'
  },
  {
    category: 'Efficiency',
    metric: '75% Average Process Improvement',
    value: '75%',
    description: 'Average improvement in process efficiency across AI automation projects',
    timeframe: '2024-2025',
    industry: 'Operations'
  },
  {
    category: 'Revenue Growth',
    metric: '20% Average Revenue Increase',
    value: '20%',
    description: 'Revenue growth achieved through AI-driven business optimization',
    timeframe: '2024-2025',
    industry: 'Sales & Marketing'
  },
  {
    category: 'Quality',
    metric: '95% Accuracy Rate Achievement',
    value: '95%',
    description: 'High accuracy rates in AI model implementations and predictions',
    timeframe: '2025',
    industry: 'Data Science'
  },
  {
    category: 'Innovation',
    metric: '15+ AI Solutions Deployed',
    value: '15',
    description: 'Complete AI solutions successfully delivered to enterprise clients',
    timeframe: '2024-2025',
    industry: 'Technology'
  }
];

// Client Success Stories
export const clientSuccessStories = [
  {
    client: 'Fortune 500 Retail Company',
    challenge: 'Inventory management inefficiencies leading to $2M+ annual losses',
    solution: 'Predictive analytics and demand forecasting system',
    outcome: 'Reduced inventory costs by 15%, improved stock accuracy to 98%',
    timeframe: '6 months',
    technologies: ['Machine Learning', 'AWS', 'Python']
  },
  {
    client: 'Financial Services Firm',
    challenge: 'Manual document processing bottleneck affecting compliance',
    solution: 'AI-powered document intelligence and automated workflow',
    outcome: '90% reduction in processing time, 99.9% compliance accuracy',
    timeframe: '4 months', 
    technologies: ['Computer Vision', 'NLP', 'OCR', 'RPA']
  },
  {
    client: 'Healthcare Provider',
    challenge: 'Patient appointment scheduling inefficiencies',
    solution: 'AI-driven scheduling optimization with demand prediction',
    outcome: '30% improvement in scheduling efficiency, reduced wait times by 40%',
    timeframe: '3 months',
    technologies: ['Predictive Analytics', 'Optimization', 'Healthcare AI']
  },
  {
    client: 'Manufacturing Company',
    challenge: 'Quality control processes requiring extensive manual inspection',
    solution: 'Computer vision-based automated quality inspection system',
    outcome: '95% defect detection accuracy, 80% reduction in inspection time',
    timeframe: '5 months',
    technologies: ['Computer Vision', 'Deep Learning', 'IoT', 'Edge Computing']
  }
];

// Industry Expertise
export const industryExpertise = [
  {
    industry: 'Financial Services',
    specializations: ['Risk Assessment', 'Fraud Detection', 'Regulatory Compliance', 'Algorithmic Trading'],
    projects: 8,
    impact: 'High'
  },
  {
    industry: 'Healthcare',
    specializations: ['Medical Image Analysis', 'Drug Discovery', 'Patient Care Optimization', 'Electronic Health Records'],
    projects: 6,
    impact: 'High'
  },
  {
    industry: 'Retail & E-commerce',
    specializations: ['Demand Forecasting', 'Personalization', 'Inventory Optimization', 'Customer Analytics'],
    projects: 12,
    impact: 'Very High'
  },
  {
    industry: 'Manufacturing',
    specializations: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'Process Automation'],
    projects: 10,
    impact: 'High'
  },
  {
    industry: 'Technology',
    specializations: ['Software Development', 'DevOps', 'Code Analysis', 'Security Intelligence'],
    projects: 15,
    impact: 'Very High'
  },
  {
    industry: 'Customer Service',
    specializations: ['Chatbots', 'Sentiment Analysis', 'Automated Support', 'Customer Journey Optimization'],
    projects: 9,
    impact: 'Very High'
  }
];