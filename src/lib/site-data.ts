export const navLinks = [
  { href: '/solutions/ai-agents', label: 'Solutions' },
  { href: '/industries', label: 'Industries' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/technology-stack', label: 'Technology' },
  { href: '/blog', label: 'Blog' },
  { href: '/resources', label: 'Resources' }
];

export const footerColumns = [
  {
    title: 'Solutions',
    links: [
      ['/solutions/ai-agents', 'AI Agents'],
      ['/solutions/n8n-workflow-automation', 'n8n Automation'],
      ['/solutions/enterprise-automation-systems', 'Enterprise Systems'],
      ['/solutions/api-integrations', 'API Integrations'],
      ['/solutions/ai-data-pipelines', 'AI Data Pipelines'],
      ['/solutions/custom-gpt-llm-systems', 'Custom GPT/LLM']
    ]
  },
  {
    title: 'Company',
    links: [
      ['/about', 'About'],
      ['/careers', 'Careers'],
      ['/contact', 'Contact'],
      ['/book-call', 'Book Discovery Call']
    ]
  },
  {
    title: 'Trust & Legal',
    links: [
      ['/security', 'Security'],
      ['/privacy-policy', 'Privacy Policy'],
      ['/terms-and-conditions', 'Terms'],
      ['/cookie-policy', 'Cookie Policy'],
      ['/gdpr-compliance', 'GDPR'],
      ['/ccpa-notice', 'CCPA'],
      ['/html-sitemap', 'HTML Sitemap']
    ]
  }
];

export const solutionPages = [
  {
    slug: 'ai-agents',
    title: 'AI Agent Systems',
    description: 'Autonomous and supervised AI agents for support, RevOps, procurement, and internal operations.',
    bullets: ['Role-based AI copilots', 'Retrieval-augmented response quality', 'Agent governance and escalation controls']
  },
  {
    slug: 'n8n-workflow-automation',
    title: 'n8n Workflow Automation',
    description: 'Resilient low-code orchestration for mission-critical process automation with auditability.',
    bullets: ['Event-driven workflows', 'Retries and dead-letter handling', 'Versioned automation pipelines']
  },
  {
    slug: 'enterprise-automation-systems',
    title: 'Enterprise Automation Systems',
    description: 'Cross-functional automation architecture that modernizes finance, operations, and delivery workflows.',
    bullets: ['Process mapping and modernization', 'Governance-ready architecture', 'Human-in-the-loop checkpoints']
  },
  {
    slug: 'api-integrations',
    title: 'API Integrations',
    description: 'Unified API strategy spanning product, CRM, ERP, billing, support, and data tooling.',
    bullets: ['Reliable webhook and polling architecture', 'Secure OAuth / token lifecycle controls', 'Observability and SLA tracking']
  },
  {
    slug: 'ai-data-pipelines',
    title: 'AI Data Pipelines',
    description: 'Intelligent data ingestion, enrichment, and routing pipelines powering analytics and model workflows.',
    bullets: ['ETL and reverse ETL design', 'Data quality and lineage checks', 'BI and model-ready marts']
  },
  {
    slug: 'custom-gpt-llm-systems',
    title: 'Custom GPT/LLM Systems',
    description: 'Production-grade LLM solutions integrated with proprietary data, APIs, and business logic.',
    bullets: ['Prompt and retrieval engineering', 'Cost and latency optimization', 'Safety, governance, and compliance controls']
  }
];

export const blogPosts = [
  {
    slug: 'how-n8n-powers-enterprise-ai-automation',
    title: 'How n8n Powers Enterprise AI Automation',
    description: 'A comprehensive implementation guide for combining n8n orchestration with AI systems in enterprise environments.',
    content: [
      'Enterprise organizations rarely fail due to a lack of tooling; they fail because automation ownership is fragmented, process definitions are inconsistent, and integration architecture is brittle under scale. n8n is powerful because it allows technical teams to centralize orchestration logic while still shipping quickly across departments. When paired with AI services and strict governance conventions, n8n becomes a strategic orchestration layer, not just a low-code utility.',
      'The first design principle is process decomposition. Before building flows, split each automation into trigger, decision, execution, and monitoring phases. This creates maintainable flow blocks and lets teams evolve only the decision logic when policy changes. For AI-powered automations this is essential: prompts, retrieval context, and approval thresholds evolve often, but upstream data collection rarely does. Build once and swap decision blocks as maturity increases.',
      'Second, treat retries, idempotency, and dead-letter queues as core product requirements. An enterprise automation that fails silently is worse than a manual process because teams assume coverage that does not exist. n8n supports robust retries and branching; combine this with explicit run IDs and idempotency keys so downstream APIs do not duplicate state. Introduce dead-letter routes to Slack, Jira, or incident tooling and define ownership by business domain.',
      'Third, build AI tasks as policy-constrained workers. Instead of allowing a generic model call to determine outcomes directly, route AI outputs through guardrails. Validate schema, check confidence thresholds, compare with deterministic rules, and apply human approvals for high-risk decisions. With this pattern, AI augments operations without destabilizing compliance obligations. In regulated sectors, this can be the difference between pilot success and production shutdown.',
      'Fourth, invest in observability from day one. Create dashboard slices for flow latency, error classes, queue depth, and business impact metrics such as average handling time and recovered revenue. Technical uptime is not enough; leadership teams need the economic narrative of automation. A workflow that has 99.9% success but handles low-value work may rank below a 95% successful flow that saves legal teams 400 hours per month.',
      'Fifth, version your automation architecture with explicit release channels. Maintain a development, staging, and production strategy where each n8n workflow version is tested against synthetic and sampled real traffic. Use feature flags for AI rollout by department. This avoids all-at-once launches and lets you test model-provider alternatives without disrupting business continuity.',
      'Sixth, align data contracts between workflow owners and system owners. Every trigger payload and transformed object should carry a schema contract and ownership metadata. When upstream tools change field names, breaking changes become immediately visible. Teams can enforce schema drift alerts and route fixes quickly before operational damage compounds.',
      'Finally, n8n delivers enterprise impact when it is positioned as the automation operating system. Standardize naming, node conventions, failure management, secrets management, and audit logging. Pair this with quarterly architecture reviews that retire redundant flows and consolidate high-value capabilities. The result is not just faster execution; it is institutional automation maturity that compounds quarter after quarter.'
    ]
  },
  {
    slug: 'ai-agents-vs-traditional-automation',
    title: 'AI Agents vs Traditional Automation',
    description: 'A strategic framework for deciding where deterministic automation ends and AI agent systems begin.',
    content: [
      'Traditional automation excels when process states are known, decision paths are stable, and exceptions are limited. AI agents excel when the environment is semi-structured, context changes rapidly, and outcomes depend on interpretation. Enterprise leaders make costly mistakes when they frame this as a replacement narrative. The right model is layered architecture: deterministic systems for core control, agents for adaptive decision support.',
      'Start with a decision matrix. If a task has high compliance sensitivity, high financial risk, or irreversible actions, deterministic automation should own execution while AI contributes recommendations. If the task has high variability, heavy unstructured input, and reversible actions, agents can execute with supervisory checks. This framing avoids over-automation and under-automation simultaneously.',
      'Consider RevOps lead routing. A rule-based workflow can route by region, segment, and account score. But when inbound requests include nuanced intent, product fit ambiguity, or conflicting data across channels, an AI agent can summarize intent, enrich records, and produce recommended routing confidence. Deterministic logic then applies final policy. Hybrid orchestration typically delivers better speed and precision than either approach alone.',
      'Another example is support operations. Deterministic automations can classify ticket source and SLA tiers, while agents generate response drafts and identify likely resolution paths from historical knowledge. The support manager retains approval for sensitive categories. Over time, approval telemetry creates training data for expanding agent autonomy safely.',
      'Technical architecture matters. Agents should be bounded by explicit tools, scoped memory, and protected execution capabilities. Never grant unrestricted system actions. Wrap agent calls in policy services that enforce permissions, redact sensitive fields, and log all prompts and outputs for auditability. With these controls, agents become trusted execution layers instead of black-box risk vectors.',
      'Cost governance is equally important. Traditional automations have predictable marginal cost, while agent workloads can spike with token usage and repeated tool invocations. Implement request budgets, caching for common queries, prompt compression, and model tiering. Route low-complexity tasks to smaller models and reserve frontier models for high-impact workflows.',
      'From an operating model perspective, teams should establish an Automation Council that includes engineering, security, legal, and domain leaders. This council defines risk tiers, rollout policy, and incident response standards. Enterprises that formalize governance early move faster later because teams are not renegotiating approval pathways for every new use case.',
      'The future is not agents versus automation. It is deterministic foundations orchestrating agent intelligence where it drives measurable business value. Organizations that embrace this layered strategy will modernize confidently, protect compliance posture, and unlock a durable operational advantage.'
    ]
  },
  {
    slug: 'how-to-build-scalable-ai-workflows',
    title: 'How to Build Scalable AI Workflows',
    description: 'Architecture blueprint for reliable, observable, and compliant AI workflows that scale with enterprise complexity.',
    content: [
      'Scalable AI workflows are engineered systems, not prompt experiments. Teams should begin by defining service-level objectives for latency, accuracy, and failure recovery. Without targets, optimization is arbitrary and stakeholder trust erodes quickly. For each workflow, document acceptable delay, tolerated error rate, and fallback behavior when model providers degrade.',
      'Use layered pipeline design: ingestion, context assembly, reasoning, action, and verification. Ingestion normalizes events from product usage, CRM changes, support tickets, and external APIs. Context assembly fetches retrieval documents, policy references, and account metadata. Reasoning runs structured prompts. Action executes approved tools. Verification checks schema, confidence, and policy compliance before committing outcomes.',
      'To scale context reliability, implement retrieval discipline. Build domain-specific indexes rather than one giant vector store. Apply metadata filtering for business unit, policy version, and effective dates. Add freshness constraints so outdated guidance is excluded automatically. This prevents stale decisions and dramatically improves response precision in production.',
      'Observability should connect technical and business telemetry. Track model latency, token usage, hallucination flags, and tool-call success rates alongside conversion lift, cycle-time reduction, and error rework costs. Executive teams fund what they can measure; your instrumentation determines whether AI is treated as strategic infrastructure or temporary experimentation.',
      'Guardrails are non-negotiable. Validate every model output against strict schemas and reject malformed responses. Add semantic checks for prohibited claims, legal constraints, and privacy policy boundaries. For sensitive actions, enforce multi-step approvals and immutable audit logs. These controls protect users and create confidence for broader deployment.',
      'Capacity planning must include provider diversification. Maintain abstraction layers for model providers so failover is possible without rewriting business logic. Establish async queues for burst management and use priority tiers for mission-critical work. This reduces fragility during provider incidents or sudden demand spikes.',
      'Teams often overlook human workflow design. Define who reviews escalations, how false positives are handled, and how policy exceptions are recorded. AI systems are socio-technical systems; performance depends on clear operational roles as much as code quality.',
      'Scalable AI workflows emerge when architecture, governance, and operations are built together. Organizations that operationalize this triad can expand use cases confidently, reduce risk, and generate compounding value from automation investments.'
    ]
  },
  {
    slug: 'automation-roi-for-scaling-businesses',
    title: 'Automation ROI for Scaling Businesses',
    description: 'A financial model for proving and expanding automation impact across growth-stage and enterprise organizations.',
    content: [
      'Automation ROI is often framed too narrowly as headcount reduction. Enterprise buyers care more about throughput, resilience, customer experience, and strategic capacity. The strongest business cases combine hard savings with growth and risk metrics. Start by quantifying cycle-time reduction, error-rate reduction, improved SLA adherence, and incremental revenue from faster response loops.',
      'Construct a baseline map by process family: revenue operations, customer support, finance workflows, procurement, and onboarding. For each process, capture current volumes, manual touchpoints, average handling time, escalation frequency, and downstream business impact when delays occur. This process map becomes your control model for ROI tracking.',
      'Next, estimate savings with conservative assumptions. If a process currently takes 18 minutes and automation reduces it to 6 minutes for 10,000 monthly events, calculate reclaimed hours and assign blended cost rates. Then apply confidence discounts for early-stage rollout to avoid inflated promises. Conservative forecasts build stakeholder trust and support larger follow-on investments.',
      'Revenue impact is often larger than labor savings. Faster lead response increases meeting conversion, faster onboarding reduces time-to-value, and improved support resolution drives retention. Tie automation metrics to funnel milestones and customer lifecycle economics. This reframes automation from cost center initiative to growth engine.',
      'Risk-adjusted ROI should include compliance and operational resilience. Automations with strong audit trails reduce remediation costs during audits. Systems with failover and alerting reduce outage duration. These benefits rarely appear in simplistic ROI calculators but are highly valued by enterprise procurement and legal teams.',
      'Model ongoing costs explicitly: orchestration infrastructure, model usage, monitoring, maintenance, and governance overhead. Decision-makers respect programs that acknowledge total cost of ownership. Clear cost visibility also supports model tiering and optimization roadmaps as usage scales.',
      'After deployment, establish a 30-60-90 day measurement cadence. In the first 30 days, verify workflow reliability and adoption. At 60 days, report early efficiency and quality deltas. At 90 days, assess revenue and customer outcomes. This structured reporting cadence keeps executive sponsors engaged and creates momentum for additional process modernization.',
      'Automation ROI is not a one-time calculation. It is an operating discipline. Companies that run automation as a measured portfolio consistently outperform those that treat it as isolated projects.'
    ]
  },
  {
    slug: 'future-of-ai-system-architecture',
    title: 'Future of AI System Architecture',
    description: 'What enterprise AI architecture will look like over the next five years and how to prepare now.',
    content: [
      'AI system architecture is shifting from model-centric design to system-centric design. Early adopters focused on model capability headlines. Mature organizations now focus on orchestration reliability, governance, data quality, and integration depth. The future belongs to teams that can combine intelligence with dependable execution across business-critical operations.',
      'One major trend is composable intelligence layers. Instead of one monolithic assistant, enterprises will deploy role-specific agents connected to shared policy, identity, and observability services. This pattern mirrors microservices evolution: bounded contexts with platform-level standards. It enables faster innovation while reducing systemic risk.',
      'Another trend is policy-as-code for AI governance. Legal and compliance rules will increasingly be encoded into runtime policy engines that evaluate prompts, outputs, and tool actions in real time. This allows organizations to adapt to regulatory changes without rewriting every workflow. Governance becomes programmable infrastructure rather than static documentation.',
      'Data architecture will become retrieval-native. Traditional warehouses remain central for reporting, but AI systems require knowledge stores optimized for semantic retrieval, temporal validity, and citation traceability. Enterprises will maintain layered knowledge fabrics where structured and unstructured data coexist with explicit ownership and freshness policies.',
      'Execution platforms will converge. Workflow orchestration tools, event buses, API gateways, and model routing layers will integrate into unified automation fabrics. This reduces handoff friction between application teams and AI teams. The winning architecture pattern is event-driven, observable, and provider-agnostic.',
      'Human oversight will be redesigned instead of removed. New operational roles will emerge: AI operations analysts, policy engineers, and automation reliability managers. Their responsibility will be tuning confidence thresholds, reviewing escalations, and optimizing business outcomes. Organizations investing in these roles early will scale AI safely and faster.',
      'Performance engineering will remain decisive. As token costs fluctuate and inference demand grows, teams that optimize prompt efficiency, cache strategy, and model routing will preserve margins. Architecture decisions made today should support dynamic cost governance and transparent chargeback models by department.',
      'The future of AI system architecture is strategic infrastructure thinking. Enterprises that build governance, data, orchestration, and human operations into one coherent stack will convert AI from experimentation into durable competitive advantage.'
    ]
  }
];

export const allSiteLinks = [
  '/',
  '/about',
  '/contact',
  '/book-call',
  '/industries',
  '/case-studies',
  '/technology-stack',
  '/resources',
  '/careers',
  '/privacy-policy',
  '/terms-and-conditions',
  '/cookie-policy',
  '/gdpr-compliance',
  '/ccpa-notice',
  '/security',
  '/html-sitemap',
  '/solutions/ai-agents',
  '/solutions/n8n-workflow-automation',
  '/solutions/enterprise-automation-systems',
  '/solutions/api-integrations',
  '/solutions/ai-data-pipelines',
  '/solutions/custom-gpt-llm-systems',
  '/blog',
  ...blogPosts.map((post) => `/blog/${post.slug}`)
];
