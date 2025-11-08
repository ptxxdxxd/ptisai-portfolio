export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  category: string;
  date: string;
  description?: string;
}

export const certificates: Certificate[] = [
  // Generative AI & Machine Learning
  { id: '1', name: 'Generative AI Foundations', issuer: 'AWS', category: 'Generative AI', date: '2025-07' },
  { id: '2', name: 'Generative AI Foundations', issuer: 'IBM SkillsBuild', category: 'Generative AI', date: '2025-07' },
  { id: '3', name: 'Generative AI Foundations', issuer: 'Davidson_Galileo', category: 'Generative AI', date: '2025-07' },
  { id: '4', name: 'Generative AI Foundations', issuer: 'Pragmatic AI Labs', category: 'Generative AI', date: '2025-07' },
  { id: '5', name: 'Generative AI Foundations', issuer: 'edX', category: 'Generative AI', date: '2025-07' },
  { id: '6', name: 'Prompt Engineering', issuer: 'IBM SkillsBuild', category: 'Generative AI', date: '2025-08' },
  { id: '7', name: 'Prompt Engineering (Advanced)', issuer: 'Pragmatic AI Labs', category: 'Generative AI', date: '2025-08' },
  { id: '12', name: 'Machine Learning Solutions', issuer: 'AWS', category: 'Machine Learning', date: '2025-09' },
  { id: '13', name: 'Machine Learning Solutions', issuer: 'IBM SkillsBuild', category: 'Machine Learning', date: '2025-09' },
  
  // AI Strategy & Transformation
  { id: '8', name: 'AI Strategy', issuer: 'IBM SkillsBuild', category: 'AI Strategy', date: '2025-09' },
  { id: '9', name: 'AI Strategy', issuer: 'edX', category: 'AI Strategy', date: '2025-09' },
  { id: '10', name: 'AI Transformation', issuer: 'IBM SkillsBuild', category: 'AI Strategy', date: '2025-09' },
  { id: '11', name: 'AI Transformation', issuer: 'edX', category: 'AI Strategy', date: '2025-09' },
  { id: '32', name: 'Executive Leadership in AI', issuer: 'IBM SkillsBuild', category: 'Leadership', date: '2025-10' },
  { id: '33', name: 'Executive Leadership in AI', issuer: 'edX', category: 'Leadership', date: '2025-10' },
  { id: '34', name: 'Organizational Transformation with AI', issuer: 'IBM SkillsBuild', category: 'Leadership', date: '2025-10' },
  { id: '35', name: 'Organizational Transformation with AI', issuer: 'edX', category: 'Leadership', date: '2025-10' },
  
  // AI Operations & Infrastructure
  { id: '14', name: 'LLMOps', issuer: 'Pragmatic AI Labs', category: 'AI Operations', date: '2025-08' },
  { id: '15', name: 'RAG Pipelines', issuer: 'Pragmatic AI Labs', category: 'AI Operations', date: '2025-08' },
  { id: '43', name: 'AI Deployment & Scaling', issuer: 'Pragmatic AI Labs', category: 'AI Operations', date: '2025-11' },
  { id: '40', name: 'AI Risk Management', issuer: 'IBM SkillsBuild', category: 'Security & Governance', date: '2025-10' },
  { id: '41', name: 'AI Risk Management', issuer: 'AWS', category: 'Security & Governance', date: '2025-10' },
  
  // Data Engineering & Automation
  { id: '26', name: 'Data Engineering', issuer: 'AWS', category: 'Data Engineering', date: '2025-09' },
  { id: '27', name: 'Data Engineering', issuer: 'IBM SkillsBuild', category: 'Data Engineering', date: '2025-09' },
  { id: '28', name: 'Data Pipelines', issuer: 'AWS', category: 'Data Engineering', date: '2025-09' },
  { id: '29', name: 'Data Pipelines', issuer: 'IBM SkillsBuild', category: 'Data Engineering', date: '2025-09' },
  { id: '30', name: 'Automation Foundations', issuer: 'IBM SkillsBuild', category: 'Data Engineering', date: '2025-09' },
  { id: '31', name: 'Workflow Optimization', issuer: 'IBM SkillsBuild', category: 'Data Engineering', date: '2025-09' },
  
  // AI Ethics & Governance
  { id: '16', name: 'GenAI Ethics', issuer: 'Davidson_Galileo', category: 'Ethics & Governance', date: '2025-08' },
  { id: '17', name: 'GenAI Ethics', issuer: 'edX', category: 'Ethics & Governance', date: '2025-08' },
  { id: '18', name: 'Responsible AI', issuer: 'Davidson_Galileo', category: 'Ethics & Governance', date: '2025-08' },
  { id: '19', name: 'Responsible AI', issuer: 'IBM SkillsBuild', category: 'Ethics & Governance', date: '2025-08' },
  { id: '21', name: 'AI Security', issuer: 'AWS', category: 'Security & Governance', date: '2025-10' },
  { id: '22', name: 'AI Security', issuer: 'IBM SkillsBuild', category: 'Security & Governance', date: '2025-10' },
  { id: '23', name: 'AI Governance', issuer: 'AWS', category: 'Security & Governance', date: '2025-10' },
  { id: '24', name: 'AI Governance', issuer: 'IBM SkillsBuild', category: 'Security & Governance', date: '2025-10' },
  { id: '38', name: 'AI Ethics & Bias Mitigation', issuer: 'Davidson_Galileo', category: 'Ethics & Governance', date: '2025-11' },
  { id: '39', name: 'AI Ethics & Bias Mitigation', issuer: 'edX', category: 'Ethics & Governance', date: '2025-11' },
  { id: '25', name: 'Enterprise AI Sustainability', issuer: 'edX', category: 'Ethics & Governance', date: '2025-11' },
  
  // Business & Marketing
  { id: '20', name: 'GenAI Marketing Optimization', issuer: 'Pragmatic AI Labs', category: 'Business & Marketing', date: '2025-09' },
  { id: '36', name: 'AI for Business', issuer: 'IBM SkillsBuild', category: 'Business & Marketing', date: '2025-10' },
  { id: '37', name: 'AI for Business', issuer: 'edX', category: 'Business & Marketing', date: '2025-10' },
  { id: '42', name: 'Credential Management & Portfolio Strategy', issuer: 'Pragmatic AI Labs', category: 'Business & Marketing', date: '2025-11' },
];

export const categories = [
  'All',
  'Generative AI',
  'Machine Learning', 
  'AI Strategy',
  'Leadership',
  'AI Operations',
  'Data Engineering',
  'Ethics & Governance',
  'Security & Governance',
  'Business & Marketing'
];

export const issuers = [
  'All',
  'AWS',
  'IBM SkillsBuild', 
  'edX',
  'Pragmatic AI Labs',
  'Davidson_Galileo'
];