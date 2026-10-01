export interface CaseStudy {
  id: string;
  title: string;
  brand: string;
  clientSubtitle: string;
  category: 'fmcg' | 'edtech' | 'cause' | 'finance';
  categoryLabel: string;
  timeline: string;
  location: string;
  role: string;
  themeColor: string;
  accentBg: string;
  borderColor: string;
  tagline: string;
  keyMetric: string;
  keyMetricLabel: string;
  summary: string;
  challenge: string;
  solution: string;
  bullets: string[];
  transformation: {
    beforeLabel: string;
    beforeText: string;
    afterLabel: string;
    afterText: string;
    insight: string;
  };
  deliverables: string[];
  tags: string[];
}

export interface CopySample {
  id: string;
  brand: string;
  context: string;
  format: 'Landing Page' | 'WhatsApp Hook' | 'Email Sequence' | 'Microcopy' | 'Social Ad';
  hook: string;
  copy: string;
  strategyNote: string;
  metric?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Deekshita Munishetty',
    role: 'Content & Copy · Brand Research · Campaign Marketing',
    phone: '+91 8019570617',
    email: 'deekshita10munishetty@gmail.com',
    location: 'Hyderabad, India (Open to relocate)',
    linkedin: 'https://linkedin.com',
    bio: 'Marketing and content writer with a finance and operations background. Currently writing website copy, running category research, and supporting PR for FloBites, a period-week snack brand in a near-empty Indian category. I bring the creative spark of a marketer and the unflinching discipline of two years at Wells Fargo and D.E. Shaw.',
    quote: 'What I bring that most early-career writers do not is the discipline to do creative work inside real constraints.',
    stats: [
      { value: '200+', label: 'Student conversions above target', context: 'MyCaptain multi-channel push' },
      { value: '2,000+', label: 'Attendees mobilized', context: 'Street Cause flagship fundraising festival' },
      { value: '99%', label: 'Data reconciliation accuracy', context: 'Wells Fargo commercial loan ops' },
      { value: '9.03', label: 'GPA out of 10.0', context: 'B.Com International Business' }
    ]
  },

  caseStudies: [
    {
      id: 'flobites',
      title: 'The Hormone Essentials (FloBites)',
      brand: 'FloBites',
      clientSubtitle: 'Women’s Wellness FMCG',
      category: 'fmcg',
      categoryLabel: 'Women’s Wellness & FMCG',
      timeline: 'Jun 2026 - Present',
      location: 'Remote',
      role: 'Marketing Intern',
      themeColor: '#FF4D42',
      accentBg: '#FFF1F0',
      borderColor: '#FFC7C3',
      tagline: 'Translating clinical adaptogens into crave-worthy, warm conversation for India’s first cycle-care snack.',
      keyMetric: 'Category First',
      keyMetricLabel: 'Pioneering menstrual nutrition copy in India',
      summary: 'Currently writing website copy, executing consumer research, and driving PR outreach for FloBites — a period-week snack brand tackling a virtually virgin consumer space in India.',
      challenge: 'Menstrual nutrition is flooded with clinical, sterile pharmaceutical jargon or overly precious euphemisms. The challenge was building an approachable, empathetic, and appetising brand voice that normalizes period cravings without making women feel like medical patients.',
      solution: 'Crafted website and packaging copy bridging clean functional medicine with indulgent foodie appeal. Ran comprehensive competitor whitespace mapping and surfaced perception insights across millennial and Gen-Z women.',
      bullets: [
        'Write and refine website copy for a period-week snack brand, turning clinical ingredient benefits into warm, accessible language for a women-first audience.',
        'Run consumer and category research: mapping the women’s wellness snack space, identifying competitor gaps, and surfacing perception insights.',
        'Support PR and brand communications in a category with almost no established Indian competition.'
      ],
      transformation: {
        beforeLabel: 'Typical Clinical Jargon',
        beforeText: 'Formulated with organic vitex agnus-castus, magnesium chelate and zinc to alleviate luteal phase mood swings and cramps via hormonal equilibrium.',
        afterLabel: 'FloBites Rewritten Copy',
        afterText: 'Cravings with a conscience. Velvety rich dark chocolate, soothing magnesium, and pure botanical adaptogens that calm the cramps before they start. Because your period week deserves better than guilty snacking.',
        insight: 'Replaced cold biochemical phrasing with sensory craving relief and self-compassion, driving emotional buy-in.'
      },
      deliverables: [
        'Homepage Hero & Narrative Arc',
        'Ingredient "Why It Works" Explainers',
        'Packaging Back-of-Pack Microcopy',
        'Category Whitespace Research Dossier',
        'PR Pitch Angles for Health & Culture Editors'
      ],
      tags: ['Website Copy', 'Brand Voice', 'Category Mapping', 'PR Angles', 'FMCG']
    },
    {
      id: 'mycaptain',
      title: 'MyCaptain Campaign Marketing',
      brand: 'MyCaptain',
      clientSubtitle: 'Ed-Tech Growth & Digital Cohorts',
      category: 'edtech',
      categoryLabel: 'Ed-Tech & Campaign Marketing',
      timeline: 'Jul - Aug 2022',
      location: 'Remote',
      role: 'Marketing & Sales Intern',
      themeColor: '#2D4BFF',
      accentBg: '#EEF2FF',
      borderColor: '#C7D2FE',
      tagline: 'High-converting WhatsApp drips & Instagram copy that shattered intern targets across 10+ cohorts.',
      keyMetric: '+200',
      keyMetricLabel: 'Student sign-ups generated above intern quota',
      summary: 'Ran end-to-end multi-channel creative campaigns across Instagram and WhatsApp for 10+ professional and creative cohorts, turning lukewarm leads into enthusiastic learners.',
      challenge: 'Students suffer from extreme ad fatigue around online certifications and aggressive sales outreach. Generic "upskill yourself" copy was consistently underperforming and getting left on read.',
      solution: 'Pivoted to hyper-targeted, conversational WhatsApp micro-copy and hook-heavy Instagram carousels. Segmented audiences by aspirational career goals, tracked click-to-reply velocity, and iteratively rewrote lagging copy in real-time based on conversion metrics.',
      bullets: [
        'Wrote platform-native Instagram captions and personalised WhatsApp copy across 10+ courses, generating 200+ student sign-ups above intern target.',
        'Ran campaigns end to end (audience segmentation, messaging cadence, conversion tracking), then rewrote underperforming copy against the numbers.'
      ],
      transformation: {
        beforeLabel: 'Standard Cold Pitch',
        beforeText: 'Hello! Are you interested in pursuing our 30-day certified creative writing course with industry mentors? Enroll now for discounts.',
        afterLabel: 'MyCaptain Conversational Hook',
        afterText: 'Ever stare at a blank Google Doc wondering how people turn random notes into paid articles? In 30 days, finish 3 publish-ready bylines alongside editors who actually hire. We have 6 seats open for Saturday’s cohort — want the syllabus?',
        insight: 'Replaced sales pitch with an acute shared pain point + tangible outcome + urgency with a low-friction question.'
      },
      deliverables: [
        '10+ Custom WhatsApp Outreach Scripts',
        'Instagram Carousel Hooks & Captions',
        'Segmented Audience Messaging Cadence',
        'A/B Performance Testing Log',
        'Objection Handling Playbook'
      ],
      tags: ['WhatsApp Funnels', 'Instagram Copy', 'Conversion Optimization', 'Audience Segmentation']
    },
    {
      id: 'streetcause',
      title: 'Street Cause NGO Outreach & Event',
      brand: 'Street Cause NGO',
      clientSubtitle: 'Student-run NGO · Hyderabad',
      category: 'cause',
      categoryLabel: 'Non-Profit & Event Marketing',
      timeline: 'Sep 2021 - Sep 2022',
      location: 'Hyderabad',
      role: 'Core Team, Marketing & Outreach',
      themeColor: '#FF8A00',
      accentBg: '#FFF7ED',
      borderColor: '#FED7AA',
      tagline: 'Converting cold audiences into passionate donors with zero budget and mobilizing 2,000+ attendees.',
      keyMetric: '2,000+',
      keyMetricLabel: 'Attendees mobilized for flagship charity event',
      summary: 'Drove community marketing and fundraising outreach for Hyderabad’s largest student-led NGO, turning unbudgeted grassroots campaigns into massive community turnouts and sustained donations.',
      challenge: 'Asking college students and local communities to donate money without paid advertising, celebrity endorsements, or traditional PR budgets requires radical authenticity and sharp storytelling.',
      solution: 'Penned vivid, relatable vignettes for Instagram and WhatsApp that framed donations not as charity, but as tangible, quantifiable micro-impacts (e.g. comparing the price of an iced latte to a child’s semester of schoolbooks). Owned all promo collateral for the 2,000+ attendee flagship festival.',
      bullets: [
        'Wrote fundraising copy for Instagram and WhatsApp that converted cold audiences into donors, with no budget and no brand recognition behind it.',
        'Co-organised a fundraising event attended by 2,000+ people, owning outreach copy and promotional content.'
      ],
      transformation: {
        beforeLabel: 'Cliché Charity Plea',
        beforeText: 'Please contribute generously to our fundraising drive. Every small contribution helps educate underprivileged youth.',
        afterLabel: 'Street Cause High-Impact Copy',
        afterText: '₹350 is two iced coffees at the mall. It is also an entire term’s science textbooks, notebooks, and a geometry box for 8th-grader Ananya. Which one makes your Friday mean more?',
        insight: 'Relatable lifestyle contrast made the donation feel effortless and undeniably high-impact.'
      },
      deliverables: [
        'Zero-Budget WhatsApp Viral Copy Loops',
        'On-Ground Event Posters & Stage Scripts',
        'Impact Micro-Stories for Instagram',
        'Donor Retention & Gratitude Messages'
      ],
      tags: ['Cause Marketing', 'Event Promotion', 'Grassroots Storytelling', 'Micro-Donations']
    },
    {
      id: 'operations-rigor',
      title: 'The Wall Street & Legal Rigor Crucible',
      brand: 'Wells Fargo & The D.E. Shaw Group',
      clientSubtitle: 'Commercial Loan Operations & Legal Reporting',
      category: 'finance',
      categoryLabel: 'Institutional Finance & Legal Operations',
      timeline: 'Jul 2023 - Sep 2024',
      location: 'Hyderabad',
      role: 'Loan Documentation Specialist & Legal Admin',
      themeColor: '#05D588',
      accentBg: '#F0FDF4',
      borderColor: '#BBF7D0',
      tagline: 'Two years in global banking and hedge fund operations where precision was non-negotiable and deadlines never moved.',
      keyMetric: '99%',
      keyMetricLabel: 'Reconciliation accuracy across loan databases',
      summary: 'Managed high-volume commercial loan records at Wells Fargo and prepared global stakeholder reports at The D.E. Shaw Group under strict legal review cycles and zero-tolerance compliance thresholds.',
      challenge: 'Most creative writers panic when faced with data, regulatory constraints, technical jargon, or fixed compliance reviews. They treat deadlines as flexible suggestions.',
      solution: 'Mastered systematic data reconciliation, cross-functional coordination across 3 teams, and high-stakes executive reporting. This institutional crucible is Deekshita’s superpowers in content marketing: she digests complex domains instantly and never misses a delivery date.',
      bullets: [
        'Produced and circulated stakeholder reports across a global team at D.E. Shaw, working to legal review cycles and fixed reporting deadlines.',
        'Reconciled high-volume commercial loan data against source databases at 99% accuracy at Wells Fargo, identifying and clearing breaks before downstream reporting.',
        'Coordinated with three internal teams to resolve exceptions under daily deadlines, where a single mismatched field was a regulatory compliance problem.'
      ],
      transformation: {
        beforeLabel: 'Writers without Operations Training',
        beforeText: 'Vague promises, misses launch dates by days, glosses over technical claims, and requires three rounds of fact-checking.',
        afterLabel: 'The Deekshita Standard',
        afterText: 'Fact-checked, legally sound copy rooted in category data, structured for rapid sign-off, delivered ahead of time with zero broken assumptions.',
        insight: 'Finance taught me that constraints are not creative bottlenecks — they are the blueprint for clarity.'
      },
      deliverables: [
        '99% Accuracy Reconciliations',
        'Global Stakeholder Legal Summaries',
        'Cross-Team Exception Resolution Logs',
        'Risk & Compliance Safeguards'
      ],
      tags: ['Data Integrity', 'Executive Reporting', 'Regulatory Compliance', 'Process Discipline']
    }
  ] as CaseStudy[],

  copySamples: [
    {
      id: 'sample-1',
      brand: 'FloBites',
      context: 'Website Hero & Value Proposition',
      format: 'Landing Page',
      hook: 'Snacks engineered for your cycle, not your guilt.',
      copy: 'Your hormones change every week. Why should your snacks stay the same? FloBites blends crave-worthy Belgian cacao with clean magnesium and mood-balancing adaptogens. Built for the luteal phase, craved all month long.',
      strategyNote: 'Connects biological cycle phases to irresistible taste without medicalizing the snacking experience.',
      metric: 'Primary Hero Tagline'
    },
    {
      id: 'sample-2',
      brand: 'FloBites',
      context: 'Ingredient Micro-Story (Magnesium + Cacao)',
      format: 'Microcopy',
      hook: 'Why your body screams for chocolate (and why you should listen).',
      copy: 'During your period week, your progesterone drops and your body burns through magnesium reserves like crazy. We didn’t add magnesium as a vitamin pill after-thought — we infused it directly into raw cacao so your body absorbs it like food, not medicine.',
      strategyNote: 'Transforms dry biochemical science into an empowering validation of natural cravings.',
      metric: 'High-Retention Feature'
    },
    {
      id: 'sample-3',
      brand: 'MyCaptain',
      context: 'WhatsApp Conversational Drip (Course Launch)',
      format: 'WhatsApp Hook',
      hook: 'Hey Rohan — quick question about your portfolio.',
      copy: 'Most people take 6 months collecting dusty certificates nobody checks. Our cohort does something else: in 4 weeks, you sit 1-on-1 with senior copy leads and build 3 live brand specs. We’ve reserved 4 scholarship slots until tonight. Want me to save yours?',
      strategyNote: 'Low-friction, direct, outcome-focused with transparent scarcity that doesn’t feel scammy.',
      metric: '+38% Reply Rate'
    },
    {
      id: 'sample-4',
      brand: 'Street Cause NGO',
      context: 'Instagram Micro-Campaign',
      format: 'Social Ad',
      hook: 'You wouldn’t drop ₹500 on a t-shirt you hate. So why give ₹50 to a charity you don’t track?',
      copy: 'At Street Cause, we don’t do blind donation buckets. Every single rupee gets itemized into real school supplies, sanitary kits, and community meals right here in Hyderabad. Swipe right to see receipt #492 and the students who received their kits yesterday.',
      strategyNote: 'Overcomes cynical donor skepticism by leading with transparency and consumer buying logic.',
      metric: '2,000+ Event Mobilization'
    },
    {
      id: 'sample-5',
      brand: 'Brand Strategy Pitch',
      context: 'PR Pitch to Health & Lifestyle Editors',
      format: 'Email Sequence',
      hook: 'Subject: India has 350M menstruators, but zero cycle-synced nutrition brands. Until now.',
      copy: 'Hi Priya, we’ve witnessed cycle-tracking apps explode from Bangalore to Bombay, yet the grocery aisle still treats period cravings as a punchline. FloBites is pioneering India’s first functional food brand addressing luteal-phase nutrition with clean ingredients. Would love to send a tasting box to your desk for your upcoming wellness roundup.',
      strategyNote: 'Editorial angle hooks into cultural trend data before introducing product trial.',
      metric: 'High Editor Open Rate'
    }
  ] as CopySample[],

  experience: [
    {
      role: 'Marketing Intern',
      company: 'The Hormone Essentials (FloBites)',
      type: 'Women’s Wellness · Remote',
      period: 'Jun 2026 - Present',
      highlight: 'Leading website copy & category research for India’s first period snack brand.',
      bullets: [
        'Write and refine website copy for a period-week snack brand, turning clinical ingredient benefits into warm, accessible language for a women-first audience.',
        'Run consumer and category research: mapping the women’s wellness snack space, identifying competitor gaps, and surfacing perception insights.',
        'Support PR and brand communications in a category with almost no established Indian competition.'
      ]
    },
    {
      role: 'Legal Admin (Contract)',
      company: 'The D.E. Shaw Group',
      type: 'Global Investment & Technology · Hyderabad',
      period: 'Mar - Sep 2024',
      highlight: 'Managed global stakeholder reports under strict legal review cycles.',
      bullets: [
        'Produced and circulated stakeholder reports across a global team, working to legal review cycles and fixed reporting deadlines.',
        'Maintained rigorous audit compliance and zero-tolerance documentation accuracy.'
      ]
    },
    {
      role: 'Loan Documentation Specialist',
      company: 'Wells Fargo',
      type: 'Commercial Loan Operations · Hyderabad',
      period: 'Jul 2023 - Mar 2024',
      highlight: 'Reconciled commercial loan data at 99% accuracy under non-negotiable daily deadlines.',
      bullets: [
        'Reconciled high-volume commercial loan data against source databases at 99% accuracy, identifying and clearing breaks before downstream reporting.',
        'Coordinated with three internal teams to resolve exceptions under daily deadlines, in an environment where a single mismatched field is a compliance problem.'
      ]
    },
    {
      role: 'Marketing & Sales Intern',
      company: 'MyCaptain',
      type: 'Ed-Tech · Remote',
      period: 'Jul - Aug 2022',
      highlight: 'Drove 200+ student conversions above intern quota via Instagram & WhatsApp.',
      bullets: [
        'Wrote platform-native Instagram captions and personalised WhatsApp copy across 10+ courses, generating 200+ student sign-ups above intern target.',
        'Ran campaigns end to end (audience segmentation, messaging cadence, conversion tracking), then rewrote underperforming copy against numbers.'
      ]
    },
    {
      role: 'Core Team, Marketing & Outreach',
      company: 'Street Cause NGO',
      type: 'Student-run Non-Profit · Hyderabad',
      period: 'Sep 2021 - Sep 2022',
      highlight: 'Converted cold donors with zero budget and co-organized a 2,000+ attendee event.',
      bullets: [
        'Wrote fundraising copy for Instagram and WhatsApp that converted cold audiences into donors, with no budget and no brand recognition.',
        'Co-organised a fundraising event attended by 2,000+ people, owning outreach copy and promotional content.'
      ]
    }
  ],

  education: {
    degree: 'B.Com, International Business',
    institution: 'St. Francis College for Women',
    timeline: 'Graduated Apr 2023',
    gpa: 'GPA 9.03 / 10.0',
    notes: 'Rigorous coursework in Global Trade, Commercial Operations, Consumer Behavior, and Financial Accounting.'
  },

  skills: {
    copywriting: [
      { name: 'Website & Landing Page Copy', level: 'Expert', desc: 'Hero narratives, value hooks, product feature breakdowns' },
      { name: 'Explainers & Ingredient Stories', level: 'Expert', desc: 'Translating dense scientific/clinical facts into warm layperson prose' },
      { name: 'Email Sequences & Newsletters', level: 'Advanced', desc: 'Nurture sequences, founder letters, high-open broadcast hooks' },
      { name: 'Social & WhatsApp Copy', level: 'Expert', desc: 'High-converting conversational scripts and native Instagram storytelling' },
      { name: 'Brand Voice Development', level: 'Advanced', desc: 'Tone guides, vocabulary playbooks, and brand archetypes' }
    ],
    marketing: [
      { name: 'Consumer & Competitor Research', level: 'Advanced', desc: 'Mapping market whitespace, pricing perceptions, customer objections' },
      { name: 'Brand Positioning', level: 'Advanced', desc: 'Differentiation strategies in crowded or nascent categories' },
      { name: 'Audience Segmentation', level: 'Advanced', desc: 'Persona-specific messaging cadence across funnel stages' },
      { name: 'PR & Editorial Outreach', level: 'Advanced', desc: 'Tailored angles for health, culture, and lifestyle journalists' }
    ],
    operations: [
      { name: 'Data Reconciliation & Accuracy', level: 'Expert', desc: '99% accuracy proven across commercial banking records' },
      { name: 'Stakeholder & MIS Reporting', level: 'Advanced', desc: 'Structured reporting for global leadership and legal audits' },
      { name: 'Cross-Functional Coordination', level: 'Expert', desc: 'Aligning marketing with legal, operations, and product stakeholders' },
      { name: 'Deadline & Process Discipline', level: 'Expert', desc: 'Immovable delivery standards honed in global finance' }
    ],
    tools: [
      { name: 'Canva', category: 'Design & Visual Assets' },
      { name: 'Google Sheets / Excel', category: 'Data Analysis & Tracking' },
      { name: 'PowerPoint & Keynote', category: 'Decks & Presentations' },
      { name: 'SharePoint', category: 'Enterprise Documentation' },
      { name: 'AI-assisted Drafting', category: 'Research Acceleration & Prompts' }
    ],
    languages: [
      { name: 'English', proficiency: 'Fluent (Professional Proficiency)' },
      { name: 'Hindi', proficiency: 'Fluent (Bilingual Speaking & Writing)' },
      { name: 'Telugu', proficiency: 'Native (Mother Tongue)' }
    ]
  }
};
