export type Article = {
  title: string;
  meta: string;
  sections: { heading: string; paragraphs: string[] }[];
};

const longParagraph = (topic: string) =>
  `${topic} requires executive alignment, process clarity, disciplined data governance, and an enablement rhythm that protects adoption after launch. High-performing Salesforce programs are not won by features alone; they are won by operational design, cross-functional accountability, and a decisioning framework that links every workflow improvement to a commercial metric such as pipeline velocity, forecast confidence, win rate, retention, or margin expansion. When teams operationalize this mindset, Salesforce moves from system-of-record to system-of-growth.`;

export const articles: Record<string, Article> = {
  'maximizing-salesforce-roi': {
    title: 'Maximizing Salesforce ROI: A Board-Level Playbook for Revenue Leaders',
    meta: 'Learn how to maximize Salesforce ROI with governance, AI workflows, and conversion-centered operating models.',
    sections: [
      { heading: 'Why ROI stalls in otherwise healthy Salesforce programs', paragraphs: Array.from({ length: 4 }, () => longParagraph('Maximizing Salesforce ROI')) },
      { heading: 'The four levers of enterprise CRM return', paragraphs: Array.from({ length: 4 }, () => longParagraph('ROI lift')) },
      { heading: 'Operating model and KPI architecture', paragraphs: Array.from({ length: 4 }, () => longParagraph('KPI architecture')) },
      { heading: 'Execution roadmap for the next 90 days', paragraphs: Array.from({ length: 4 }, () => longParagraph('Revenue roadmap')) }
    ]
  },
  'ai-in-salesforce-consulting': {
    title: 'AI in Salesforce Consulting: Practical Patterns That Actually Drive Revenue',
    meta: 'A practical enterprise guide to applying AI in Salesforce consulting across pipeline, service, and forecasting.',
    sections: [
      { heading: 'From experimentation to enterprise value', paragraphs: Array.from({ length: 4 }, () => longParagraph('AI in Salesforce consulting')) },
      { heading: 'High-impact AI use cases for GTM teams', paragraphs: Array.from({ length: 4 }, () => longParagraph('AI use cases')) },
      { heading: 'Compliance, bias, and governance controls', paragraphs: Array.from({ length: 4 }, () => longParagraph('Responsible AI governance')) },
      { heading: 'Implementation blueprint and change management', paragraphs: Array.from({ length: 4 }, () => longParagraph('AI implementation')) }
    ]
  },
  'salesforce-implementation-mistakes': {
    title: '11 Salesforce Implementation Mistakes That Quietly Kill Pipeline Performance',
    meta: 'Avoid costly Salesforce implementation mistakes with this executive field guide and prevention checklist.',
    sections: [
      { heading: 'Why implementations fail quietly', paragraphs: Array.from({ length: 4 }, () => longParagraph('Implementation quality')) },
      { heading: 'Mistakes in discovery and architecture', paragraphs: Array.from({ length: 4 }, () => longParagraph('Discovery discipline')) },
      { heading: 'Adoption, enablement, and governance gaps', paragraphs: Array.from({ length: 4 }, () => longParagraph('Adoption strategy')) },
      { heading: 'Recovery plan for underperforming orgs', paragraphs: Array.from({ length: 4 }, () => longParagraph('Recovery motion')) }
    ]
  },
  'optimize-vs-rebuild-salesforce': {
    title: 'When to Optimize vs Rebuild Salesforce: A Decision Framework for Executives',
    meta: 'Use this framework to decide whether to optimize your Salesforce org or execute a full rebuild.',
    sections: [
      { heading: 'The hidden cost of indecision', paragraphs: Array.from({ length: 4 }, () => longParagraph('Optimize versus rebuild')) },
      { heading: 'Decision criteria and scoring model', paragraphs: Array.from({ length: 4 }, () => longParagraph('Decision framework')) },
      { heading: 'How to de-risk either path', paragraphs: Array.from({ length: 4 }, () => longParagraph('Program risk management')) },
      { heading: 'Budgeting and executive communication', paragraphs: Array.from({ length: 4 }, () => longParagraph('Executive alignment')) }
    ]
  },
  'automation-sales-productivity': {
    title: 'Automation and Sales Productivity: Turning Process Debt Into Revenue Velocity',
    meta: 'Design Salesforce automation for high sales productivity while preserving governance and customer experience.',
    sections: [
      { heading: 'Where productivity is lost today', paragraphs: Array.from({ length: 4 }, () => longParagraph('Sales productivity')) },
      { heading: 'Automation architecture that scales', paragraphs: Array.from({ length: 4 }, () => longParagraph('Automation design')) },
      { heading: 'Balancing speed with controls', paragraphs: Array.from({ length: 4 }, () => longParagraph('Automation governance')) },
      { heading: 'Measurement model and optimization cadence', paragraphs: Array.from({ length: 4 }, () => longParagraph('Continuous optimization')) }
    ]
  }
};
