// Self-directed coursework, grouped by topic. Several topics were completed
// through more than one provider, so each topic lists every provider once.
export interface Course {
  name: string
  providers: string[]
  category: string
  date: string
}

export const courses: Course[] = [
  { name: 'Generative AI Foundations', providers: ['AWS', 'IBM SkillsBuild', 'Davidson_Galileo', 'Pragmatic AI Labs', 'edX'], category: 'Generative AI', date: '2025-07' },
  { name: 'Prompt Engineering', providers: ['IBM SkillsBuild'], category: 'Generative AI', date: '2025-08' },
  { name: 'Prompt Engineering (Advanced)', providers: ['Pragmatic AI Labs'], category: 'Generative AI', date: '2025-08' },
  { name: 'Machine Learning Solutions', providers: ['AWS', 'IBM SkillsBuild'], category: 'Machine Learning', date: '2025-09' },
  { name: 'LLMOps', providers: ['Pragmatic AI Labs'], category: 'AI Operations', date: '2025-08' },
  { name: 'RAG Pipelines', providers: ['Pragmatic AI Labs'], category: 'AI Operations', date: '2025-08' },
  { name: 'AI Deployment & Scaling', providers: ['Pragmatic AI Labs'], category: 'AI Operations', date: '2025-11' },
  { name: 'Data Engineering', providers: ['AWS', 'IBM SkillsBuild'], category: 'Data Engineering', date: '2025-09' },
  { name: 'Data Pipelines', providers: ['AWS', 'IBM SkillsBuild'], category: 'Data Engineering', date: '2025-09' },
  { name: 'Automation Foundations', providers: ['IBM SkillsBuild'], category: 'Data Engineering', date: '2025-09' },
  { name: 'Workflow Optimization', providers: ['IBM SkillsBuild'], category: 'Data Engineering', date: '2025-09' },
  { name: 'AI Security', providers: ['AWS', 'IBM SkillsBuild'], category: 'Security & Governance', date: '2025-10' },
  { name: 'AI Governance', providers: ['AWS', 'IBM SkillsBuild'], category: 'Security & Governance', date: '2025-10' },
  { name: 'AI Risk Management', providers: ['IBM SkillsBuild', 'AWS'], category: 'Security & Governance', date: '2025-10' },
  { name: 'GenAI Ethics', providers: ['Davidson_Galileo', 'edX'], category: 'Ethics', date: '2025-08' },
  { name: 'Responsible AI', providers: ['Davidson_Galileo', 'IBM SkillsBuild'], category: 'Ethics', date: '2025-08' },
  { name: 'AI Ethics & Bias Mitigation', providers: ['Davidson_Galileo', 'edX'], category: 'Ethics', date: '2025-11' },
  { name: 'Enterprise AI Sustainability', providers: ['edX'], category: 'Ethics', date: '2025-11' },
  { name: 'AI Strategy', providers: ['IBM SkillsBuild', 'edX'], category: 'Strategy & Business', date: '2025-09' },
  { name: 'AI Transformation', providers: ['IBM SkillsBuild', 'edX'], category: 'Strategy & Business', date: '2025-09' },
  { name: 'Executive Leadership in AI', providers: ['IBM SkillsBuild', 'edX'], category: 'Strategy & Business', date: '2025-10' },
  { name: 'Organizational Transformation with AI', providers: ['IBM SkillsBuild', 'edX'], category: 'Strategy & Business', date: '2025-10' },
  { name: 'AI for Business', providers: ['IBM SkillsBuild', 'edX'], category: 'Strategy & Business', date: '2025-10' },
  { name: 'GenAI Marketing Optimization', providers: ['Pragmatic AI Labs'], category: 'Strategy & Business', date: '2025-09' },
  { name: 'Credential Management & Portfolio Strategy', providers: ['Pragmatic AI Labs'], category: 'Strategy & Business', date: '2025-11' },
]

export const categories = Array.from(new Set(courses.map(c => c.category)))
