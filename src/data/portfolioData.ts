export interface CaseStudy {
  id: string;
  title: string;
  brand: string;
  clientSubtitle: string;
  category: 'fmcg' | 'edtech' | 'cause' | 'finance' | 'webdesign';
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
  liveUrl?: string;
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

export interface FloBiteSKU {
  name: string;
  packSize: string;
  price: string;
  calories: string;
  variant: string;
  hook: string;
  description: string;
  ingredients: string[];
}

export interface FloTagline {
  id: number;
  text: string;
  category: 'Empowering & Defiant' | 'Sensory & Habit' | 'Witty & Conversational' | 'Hinglish & Cultural';
  favorite?: boolean;
}

export interface CompetitorTeardown {
  brand: string;
  category: string;
  whatIsIt: string;
  strengths: string;
  weaknesses: string;
  opportunities: string;
  threats: string;
  brandingMove: string;
  yearsToTraction: string;
}

export interface AdConcept {
  id: number;
  title: string;
  scenario: string;
  taglineOrResolution: string;
  targetEmotion: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Deekshita Munishetty',
    role: 'Content & Copywriter · Brand Researcher · Campaign Marketer',
    phone: '+91 8019570617',
    email: 'deekshita10munishetty@gmail.com',
    location: 'Hyderabad, India (Open to relocate)',
    linkedin: 'https://linkedin.com',
    bio: 'Marketing and content writer with a finance and operations background. Led website copy, 25-brand category research, 40+ campaign activations, and PR strategy for FloBites (India’s first period-week wellness snack). Started in marketing with fundraising copy at Street Cause and multi-channel campaigns at MyCaptain that converted 200+ students above target. Followed by two years in loan reconciliation and legal reporting at Wells Fargo and The D.E. Shaw Group. The move to marketing is deliberate: creative work delivered inside real constraints.',
    quote: 'What I bring that most early-career writers do not is the discipline to do creative work inside real constraints.',
    status: 'Available for Full-Time & Contract Roles · Open to Relocate',
    stats: [
      { value: '25+', label: 'Brands mapped in category research', context: 'Comprehensive Quick-Commerce & E-Commerce audit' },
      { value: '200+', label: 'Student conversions above quota', context: 'MyCaptain multi-channel push' },
      { value: '99%', label: 'Data reconciliation accuracy', context: 'Wells Fargo commercial loan operations' },
      { value: '9.03', label: 'B.Com GPA out of 10.0', context: 'St. Francis College for Women' }
    ]
  },

  // Real FloBites Commercial SKUs
  flobitesProducts: [
    {
      name: 'Craving Cruncher',
      packSize: 'Pack of 6 (30g each)',
      price: '₹549',
      calories: '138 kcal',
      variant: '55% Dark Chocolate',
      hook: 'Chocolate calling? Answer better.',
      description: 'Chocolaty, crunchy and healthy bites. Munch through your period cravings with no guilt. Made with 55% Dark Chocolate and 100% comfort for your period week.',
      ingredients: ['Dark Chocolate (55%)', 'Mixed Seeds (Pumpkin, Sesame, Sunflower, Flax)', 'Dates Paste', 'Cocoa Mass', 'Puffed Ragi Pops (Millet)', 'Black Raisins', 'Chicory Root Fibre (Inulin)', 'Brown Rice Syrup', 'Coconut Oil', 'Amla Powder', 'Myo-Inositol']
    },
    {
      name: 'Mood Muncher',
      packSize: 'Pack of 6 (3 Dark Chocolate + 3 Classic)',
      price: '₹499',
      calories: '111 – 138 kcal',
      variant: 'Jaggery & Dark Chocolate Combo',
      hook: 'Every mood deserves its bite.',
      description: 'Jaggery or Dark Chocolate? Let your mood decide. Either way, it’s packed with super seeds, real ingredients and a little something your body actually asked for.',
      ingredients: ['Jaggery Syrup', 'Mixed Seeds (Pumpkin, Sesame, Sunflower, Flax)', 'Dates Paste', 'Puffed Ragi Pops', 'Black Raisins', 'Chicory Root Inulin', 'Myo-Inositol', 'Amla Powder']
    },
    {
      name: 'Secret Flo (Mystery Pack)',
      packSize: 'Pack of 6 Surprise Bars',
      price: '₹499',
      calories: 'Nutrient-Dense Comfort',
      variant: 'Unbox the Surprise Box',
      hook: 'A little surprise. A lot of period love.',
      description: 'A mystery mix of FloBites favorites picked for you, packed with delicious comfort and period-week goodness. You won’t know until you unwrap.',
      ingredients: ['Curated Surprise Selection of FloBites cycle-nutrition bars']
    }
  ] as FloBiteSKU[],

  // Curated from Deekshita's 43 Real Taglines Document
  curatedTaglines: [
    { id: 13, text: 'Day 1 didn’t win.', category: 'Empowering & Defiant', favorite: true },
    { id: 33, text: 'Built different. Bleeds different. Shows up the same.', category: 'Empowering & Defiant', favorite: true },
    { id: 39, text: 'Felt it all. Did it anyway.', category: 'Empowering & Defiant', favorite: true },
    { id: 30, text: 'Snack in one hand. Deadlines in the other. Thriving.', category: 'Empowering & Defiant', favorite: true },
    { id: 2, text: 'Flo in. Guilt out.', category: 'Sensory & Habit', favorite: true },
    { id: 1, text: 'The dread is over. Period.', category: 'Witty & Conversational', favorite: true },
    { id: 23, text: 'Cancel mat karo, bas flo karo.', category: 'Hinglish & Cultural', favorite: true },
    { id: 31, text: 'Her bag has snacks. Her mind has plans. Her body has no choice.', category: 'Empowering & Defiant' },
    { id: 32, text: 'Asked her how she’s doing. She said fine. She meant it this time.', category: 'Witty & Conversational', favorite: true },
    { id: 34, text: 'Your cycle. Your pace. Your call.', category: 'Empowering & Defiant' },
    { id: 19, text: 'Ab jaagega asli flo.', category: 'Hinglish & Cultural' },
    { id: 27, text: 'Every month. Without fail. Without credit.', category: 'Empowering & Defiant' },
    { id: 41, text: 'Her week. Her way.', category: 'Sensory & Habit' },
    { id: 43, text: 'Cancel? Continue.', category: 'Witty & Conversational' },
    { id: 14, text: 'Your flo. Your rules.', category: 'Empowering & Defiant' },
    { id: 15, text: 'Flo gang don’t pause for nobody.', category: 'Witty & Conversational' },
    { id: 24, text: 'Your body works hard. So do you.', category: 'Empowering & Defiant' },
    { id: 26, text: 'Same week. Different story.', category: 'Sensory & Habit' }
  ] as FloTagline[],

  // From Deekshita's 15 Video Ad Storyboards
  adConcepts: [
    {
      id: 13,
      title: 'Day 1 Didn’t Win',
      scenario: 'Girl wakes up on Day 1 of her periods. She looks at her phone: 3 missed calls from work, a group message asking where she is, and a gym reminder. She stares at the ceiling, feeling the energy drop. She reaches for FloBites on her bedside table, takes a bite, and gets out of bed.',
      taglineOrResolution: 'Resolution Line: “Day 1 didn’t win.”',
      targetEmotion: 'Relief, resilience, unforced power.'
    },
    {
      id: 11,
      title: 'The Quiet Desk Drop',
      scenario: 'High-pressure open-plan corporate office. A colleague notices a teammate struggling with menstrual cramps before a critical board presentation. Without turning it into a dramatic spectacle or pity party, she quietly slides a FloBite bar onto her laptop keyboard.',
      taglineOrResolution: 'Resolution Line: “Understanding the hormonal rollercoaster silently.”',
      targetEmotion: 'Workplace solidarity, subtle empathy.'
    },
    {
      id: 12,
      title: 'Date Night Spiral',
      scenario: 'Getting ready for a long-anticipated date, she checks her calendar app and realizes her period started 2 days early. Full panic mode: she begins discarding outfits and drafting cancellation texts. Her sister walks in, sees the spiral, hands her a FloBites bar, and says: “Just go.”',
      taglineOrResolution: 'Resolution Line: “Cancel mat karo, bas flo karo.”',
      targetEmotion: 'Sisterhood, overcoming pre-event dread.'
    },
    {
      id: 9,
      title: 'The Grocery Cart Ritual',
      scenario: 'A partner/brother goes grocery shopping every Saturday. For three weeks a month, the grocery basket is completely identical. But on week four, without being asked, he adds two packs of FloBites to the cart.',
      taglineOrResolution: 'Resolution Line: “Normalizing period care as everyday nutrition.”',
      targetEmotion: 'Thoughtful domestic partnership, de-stigmatization.'
    },
    {
      id: 8,
      title: 'The Seed Cycling Problem',
      scenario: 'One girl asks her friend: “Wait, zero cravings and zero crash this month? How?” The friend lists out measuring flax seeds, pumpkin seeds, dates, and soaking ragi: “It was taking 45 minutes of daily prep!” Cut to FloBites: all of it in a single crave-worthy bar.',
      taglineOrResolution: 'Resolution Line: “All the seed cycling benefits, zero kitchen chaos.”',
      targetEmotion: 'Convenience, practical life upgrade.'
    }
  ] as AdConcept[],

  // From Deekshita's 40 Guerrilla & Experiential Campaign Activations
  experientialActivations: [
    {
      title: 'The “Cancelled Plans” Wall',
      concept: 'An interactive public installation where women pin sticky notes detailing every plan, party, or workout they had to cancel because of cramps, fatigue, or mood swings. Shows live statistics (e.g. “1,234 women in Hyderabad cancelled plans this week”).',
      payoff: 'Converts invisible menstrual grief into shared community validation, then introduces FloBites to keep plans alive.'
    },
    {
      title: 'Punch Your Period (Symptom Foam)',
      concept: 'A physical high-density foam punching board with real symptoms printed across it: Cramps, Bloating, Mood Swings, Fatigue. Visitors name their worst symptom out loud, punch it, and are handed a bar as their reward.',
      payoff: 'High-energy physical release; gamified product trial.'
    },
    {
      title: 'The Comfort Menu',
      concept: 'Instead of food items, a café pop-up menu lists period needs: “A long nap”, “A warm hug”, “Zero stupid questions”, “Craving crunch”. Women circle what they need today and get a complimentary FloBite with warm tea.',
      payoff: 'Gentle, emotionally validating brand intimacy.'
    },
    {
      title: 'The 7.26 Litre Visualizer',
      concept: 'A striking glass installation visualizing 7.26 litres of liquid—the exact average amount of blood a woman quietly sheds over 10 years of menstruation without a single day off.',
      payoff: 'Raw respect for female biology; frames period nutrition as non-negotiable recovery.'
    },
    {
      title: 'Two Doors: “Not Today” vs “Still Showing Up”',
      concept: 'Two physical doors installed at college campuses and malls. Women choose whichever door matches their mood today—and get a bar either way.',
      payoff: 'Validates that resting and pushing through are both equally acceptable choices.'
    }
  ],

  // From Deekshita's FloGirl's Guide to Periods (12-Page Booklet)
  bookletExcerpt: {
    title: 'FloGirl’s Guide to Periods',
    opening: 'As you read this, there are 2.1 billion women menstruating in this world. You are not alone.',
    dos: [
      'Eat warm, home-cooked food.',
      'Hot water bag on your abdomen. Always.',
      'Eat every 3–4 hours. Hydrate more than you think.',
      'Short walks and gentle stretches go a long way.'
    ],
    donts: [
      'Skip the extra coffee and salty chips.',
      'DO NOT skip meals. Your cramps and mood will take the hit.',
      'No intense workouts on Day 1 and 2. Avoid cortisol spikes.',
      'Stop feeling guilty for slowing down.'
    ],
    bloodLossFormula: {
      formula: 'Periods so far = 12 × (2026 − year of first period)',
      example: 'First period in 2015 = 132 periods × 55ml = 7,260 ml (7.26 Litres)',
      closingThought: 'Your body has done that every month. Quietly. Without a single day off.'
    },
    closingPhilosophy: 'Adjust your Periods. Not Yourself. Not Anymore. Flow with Flo.'
  },

  // From Deekshita's Strategic Competitor Teardown Deck (CRED, SuperYou, Yoga Bar, Max Protein, The Whole Truth)
  competitorTeardowns: [
    {
      brand: 'CRED',
      category: 'Fintech & Elite Membership',
      whatIsIt: 'Invite-only app that rewards people with high credit scores for paying bills on time. The reward and gatekeeping are the product; bill payment is just the utility.',
      strengths: 'Exclusivity became free marketing: users bragged about getting in before the product proved tangible utility.',
      weaknesses: 'The brand is more loved than the business model is understood; high cultural pull but less clear durable monetisation.',
      opportunities: 'Expand premium trust-based positioning into wealth management and financial education for affluent user base.',
      threats: 'The cool, ironic tone risks feeling try-hard as brand ages; fintech regulatory scrutiny.',
      brandingMove: 'Kunal Shah’s UBP (Unique Brag-worthy Proposition) + Delta 4 theory.',
      yearsToTraction: '3.5 years (3 years of research before launch, 6 months to scale)'
    },
    {
      brand: 'Super You',
      category: 'Mainstream Protein Snacking',
      whatIsIt: 'Quick-commerce-first protein snacking brand (wafers, chips, powder) co-founded by Ranveer Singh. Positioned as fun and fast, not clinical health food.',
      strengths: 'Bold visual identity standing out against beige “wellness” packs. Ranveer as genuine co-founder (not a paid model). Killed slow 20g bar quickly.',
      weaknesses: 'Ingredient profile seen as less strictly clean-label than rivals. Brand equity untested without Ranveer’s high visibility.',
      opportunities: 'Convert celebrity trial into repeat purchases; expand into everyday biscuits and cereal formats.',
      threats: 'Risk of staying “Ranveer’s brand” rather than the customer’s brand; clean-label entrants like The Whole Truth contesting health narrative.',
      brandingMove: 'Celebrity as architecture, not decoration—deliberately kept Ranveer’s face OFF packaging so brand stands on its own.',
      yearsToTraction: '6 months to a ₹100 crore annualized run-rate (fastest of all 5)'
    },
    {
      brand: 'The Whole Truth',
      category: 'Radically Transparent Clean-Label',
      whatIsIt: 'Clean-label food built entirely around total honesty, to the point of visually annotating competitors’ misleading labels to prove contrast.',
      strengths: 'Singular brand philosophy: everything traces back to honesty. Founder’s personal obesity story creates deep community loyalty.',
      weaknesses: '100% honesty promise is a high bar to maintain; slower product cadence limits category coverage.',
      opportunities: 'Position as the credible “adult” option as clean-eating fills with hype-driven celebrity entrants.',
      threats: 'A single mislabeling claim does disproportionate reputational damage. Celebrity brands winning on convenience/cool factor.',
      brandingMove: '“A good kind of vandalism” — publicly red-penning competitor ingredient labels to visually prove honesty.',
      yearsToTraction: '3 years pre-brand-clarity (“And Nothing Else” ➔ The Whole Truth)'
    },
    {
      brand: 'Yoga Bar',
      category: 'Clean Energy & Breakfast FMCG',
      whatIsIt: 'Clean-label energy bars, expanded into protein powders, muesli, and oats.',
      strengths: 'Loud, shelf-standout packaging colors. Founder put her personal phone number on packaging for years to build direct intimacy.',
      weaknesses: 'Less strictly clean than newer entrants; viewed more as consistent utility than a talking-point brand.',
      opportunities: 'ITC’s distribution muscle (post-acquisition) pushing into Tier-2/3 India; international expansion into SE Asia.',
      threats: 'Founder-led intimacy harder to preserve inside a large conglomerate as cleaner niche brands emerge.',
      brandingMove: 'Radical customer intimacy via direct founder access; offline-first retail presence.',
      yearsToTraction: '8 years to real scale (2015 launch ➔ 2023 ITC acquisition)'
    },
    {
      brand: 'Max Protein',
      category: 'Pioneer Protein Bar Utility',
      whatIsIt: 'Simple protein bars split by need: 10g Daily, 20g Active, 30g Ultimate for different activity levels.',
      strengths: 'Protein needs made simple through clear 10/20/30g tiering; first-mover credibility as India’s original protein bar (est. 2006).',
      weaknesses: 'Very little emotional or narrative branding. Risks feeling generic or relegated to the “supplement aisle”.',
      opportunities: 'Zydus Wellness backing brings R&D firepower (Korean-flavored chips, ghee-jaggery bars) as India protein market quadruples.',
      threats: 'Squeezed between cheaper legacy supplements and cooler story-led brands like Super You and The Whole Truth.',
      brandingMove: 'Category-first functional utility: owning the phrase “protein bar” for nearly two decades.',
      yearsToTraction: '15+ years (2006 founding to 2025 Zydus Wellness scale)'
    }
  ] as CompetitorTeardown[],

  // From Deekshita's 25 Indian Quick-Commerce Category Research Brands
  researchedBrands: [
    { name: 'FloBites', category: 'Period Wellness Snack', tag: 'The Sweet Spot', note: 'The only bar engineered for period week; combines adaptogens with craving indulgence.' },
    { name: 'Yoga Bar', category: 'Clean Energy Bars', tag: 'Snacking', note: 'Conversational tone, no-junk copy, but zero menstrual cycle specificity.' },
    { name: 'Nua', category: 'Modern Menstrual Care', tag: 'Feminine Care', note: 'Customizable pads, #FlowAndTell community, Made Safe certified; sanitary focus, not snack.' },
    { name: 'The Whole Truth', category: 'Radical Transparency', tag: 'Clean Label', note: 'Founder-led, bold no-BS tone; leads with fitness nutrition, not menstrual wellness.' },
    { name: 'Super You', category: 'Wafer Protein Bars', tag: 'Quick Commerce', note: 'Playful fitness-adjacent tone backed by Ranveer Singh; mass market indulgence.' },
    { name: 'Carmesi', category: 'Natural Period Care', tag: 'Feminine Care', note: '90% women workforce, body-positive, sensitive skin positioning; hygiene pads only.' },
    { name: 'Sirona', category: 'Product Innovation', tag: 'Hygiene & Pain', note: 'PeeBuddy, cramp patches; clinical innovation identity without nutritional snacking.' },
    { name: 'Nutrizoe', category: 'Maternal Nutrition', tag: 'Women’s Health', note: 'India’s first women’s energy bar, but targeted strictly at pregnancy & lactation, not periods.' },
    { name: 'Liv Supr', category: 'Hormone Protein Powder', tag: 'Supplements', note: 'Gynaecologist-approved PCOS formula; supplement format requiring daily water mixing.' },
    { name: 'Bemo Wellness', category: 'Hormonal Sachet Sticks', tag: 'Supplements', note: 'Raw personal founder story, educational PCOS community; daily sachet format.' },
    { name: 'Acme Poshan', category: 'Women’s Ragi & Dates Bar', tag: 'Direct Competitor', note: 'Dates & ragi bar format, but leads with general protein/nutrition rather than period cycle care.' },
    { name: 'The Good Bug', category: 'Gut Health Snacks', tag: 'Gut Wellness', note: 'Prebiotic bars, Shark Tank credibility, quirky copy (“your gut has opinions”).' }
  ],

  // 50 Indian Brand Campaign Analysis Highlights
  campaignTeardownSamples: [
    { brand: 'Whisper', campaign: 'Touch the Pickle', insight: 'Politely shattered centuries-old period taboos by showing an adolescent girl touching the pickle jar and elder women celebrating it.' },
    { brand: 'Ariel', campaign: 'Share the Load', insight: 'Provoked the national dialogue on household chores being gender-neutral by having fathers realize what they modeled to their daughters.' },
    { brand: 'Surf Excel', campaign: 'Daag Acche Hain', insight: 'Transformed stain removal into emotional regulation: if your intentions are noble, getting dirty is an act of love.' },
    { brand: 'Fevicol', campaign: 'Fevicol Ka Jod', insight: 'Elevated a mundane industrial adhesive into an indelible cultural idiom for unbreakable human bonds.' },
    { brand: 'Swiggy', campaign: 'What’s In A Name', insight: 'Thought-provoking ad that corrected the careless habit of addressing delivery partners as “Swiggy” rather than their real names.' },
    { brand: 'L’Oréal Paris', campaign: 'Because You’re Worth It', insight: 'Delivers a definitive psychological answer to a consumer’s private internal hesitance: “Do I deserve this?”' },
    { brand: 'Paper Boat', campaign: 'Drinks and Memories', insight: 'Created an entirely new premium beverage sub-category strictly by bottling nostalgic childhood memories of Aam Panna and Jaljeera.' },
    { brand: 'Cadbury 5 Star', campaign: 'Eat 5 Star, Do Nothing', insight: 'Antithesis of hustle culture: celebrated the counter-intuitive luxury of pausing and doing absolutely nothing.' }
  ],

  caseStudies: [
    {
      id: 'flobites',
      title: 'The Hormone Essentials (FloBites)',
      brand: 'FloBites',
      clientSubtitle: 'Women’s Wellness FMCG',
      category: 'fmcg',
      categoryLabel: 'Women’s Wellness & FMCG',
      timeline: 'Marketing & Content Specialist',
      location: 'Remote',
      role: 'Marketing & Content Specialist',
      themeColor: '#FF4D42',
      accentBg: '#FFF1F0',
      borderColor: '#FFC7C3',
      tagline: 'Translating clinical adaptogens into crave-worthy conversation for India’s first cycle-care snack.',
      keyMetric: 'Category First',
      keyMetricLabel: 'Pioneered menstrual nutrition copy across 25+ brand audits',
      summary: 'Authored website and product packaging copy, created 43 taglines, architected 15 ad film storyboards, designed the 12-page “FloGirl’s Guide to Periods” booklet, and executed 25-brand category research across e-commerce and quick-commerce for FloBites.',
      challenge: 'Menstrual nutrition was stuck between clinical pharmaceutical jargon (Myo-Inositol, prostaglandin synthesis) and euphemistic guilt. The challenge was building an unapologetic, craving-validating brand voice that treats period week with comfort, science, and foodie delight.',
      solution: 'Crafted website and packaging copy for Craving Cruncher, Mood Muncher, and Secret Flo SKUs. Delivered 40 guerrilla campaign activations (Cancelled Plans Wall, Punch Your Period) and mapped 25 brands across quick commerce to establish FloBites as the only snack owning period week.',
      bullets: [
        'Wrote website and commercial packaging copy for Craving Cruncher (55% Dark Chocolate) and Mood Muncher (Jaggery Classic) bars.',
        'Authored 43 brand taglines and 15 video ad film storyboards centered on relatable real-world period situations.',
        'Authored the 12-page educational booklet "FloGirl’s Guide to Periods", featuring the 7.26 Litre blood loss metric and cycle nutrition habits.',
        'Executed a comprehensive 25-brand category research audit mapping competitor pricing, pack sizes, keywords, and whitespace across Blinkit, Amazon, and quick commerce.'
      ],
      transformation: {
        beforeLabel: 'Typical Clinical Jargon',
        beforeText: 'Formulated with organic vitex agnus-castus, magnesium chelate and zinc to alleviate luteal phase mood swings and cramps via hormonal equilibrium.',
        afterLabel: 'FloBites Rewritten Copy',
        afterText: 'Cravings with a conscience. Velvety rich dark chocolate, soothing magnesium, and pure botanical adaptogens that calm the cramps before they start. Because your period week deserves better than guilty snacking.',
        insight: 'Replaced cold biochemical phrasing with sensory craving relief and self-compassion, driving emotional buy-in.'
      },
      deliverables: [
        '3 Commercial SKU Packaging Descriptions & Ingredient Microcopy',
        '43 Taglines & Brand Mottos',
        '15 Video Ad Storyboards (Day 1 Didn’t Win, Quiet Desk Drop)',
        '12-Page Educational Booklet: FloGirl’s Guide to Periods',
        '25-Brand Category Research & Whitespace Audit',
        '40 Guerrilla & Experiential Marketing Activations'
      ],
      tags: ['Packaging Copy', '43 Taglines', 'Ad Scripts', '12-Page Booklet', 'Category Whitespace']
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
      challenge: 'Students suffer from extreme ad fatigue around online certifications. Generic "upskill yourself" copy was consistently underperforming and getting left on read.',
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
        'A/B Performance Testing Log'
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
      solution: 'Penned vivid, relatable vignettes for Instagram and WhatsApp that framed donations not as charity, but as tangible, quantifiable micro-impacts. Owned all promotional collateral for the 2,000+ attendee flagship festival.',
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
        'Impact Micro-Stories for Instagram'
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
      challenge: 'Most creative writers panic when faced with data, regulatory constraints, technical jargon, or fixed compliance reviews.',
      solution: 'Mastered systematic data reconciliation, cross-functional coordination across 3 teams, and high-stakes executive reporting. This institutional crucible is Deekshita’s superpower in content marketing: she digests complex domains instantly and never misses a delivery date.',
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
        'Cross-Team Exception Resolution Logs'
      ],
      tags: ['Data Integrity', 'Executive Reporting', 'Regulatory Compliance', 'Process Discipline']
    },
    {
      id: 'nevara-top',
      title: 'nevara.top — Custom Web Design & Live Integrations',
      brand: 'nevara.top',
      clientSubtitle: 'WordPress Web Design, Live Chat & Social Widgets',
      category: 'webdesign',
      categoryLabel: 'Web Design & WordPress',
      timeline: 'Live Deployment',
      location: 'Live on nevara.top',
      role: 'Web Designer & Developer',
      themeColor: '#7C3AED',
      accentBg: '#F5F3FF',
      borderColor: '#DDD6FE',
      tagline: 'Custom WordPress website architecture featuring real-time social widgets, interactive live chat, and responsive mobile UX.',
      keyMetric: 'nevara.top',
      keyMetricLabel: 'Live production website deployed',
      liveUrl: 'https://nevara.top',
      summary: 'Designed, customized, and deployed nevara.top using WordPress. Integrated real-time social media widgets, live customer chat functionality, and mobile-first responsive architecture to deliver an interactive web experience.',
      challenge: 'A modern online presence requires more than static brochures: visitors expect immediate engagement via live chat, social proof through live feeds, and seamless navigation across mobile and desktop without speed drops.',
      solution: 'Engineered a clean WordPress layout, embedded live social feeds for dynamic community updates, integrated automated live chat for direct visitor interaction, and optimized page speed and UI aesthetics.',
      bullets: [
        'Designed and published nevara.top using WordPress with clean visual hierarchy and responsive mobile layouts.',
        'Configured and embedded live social media widgets to display real-time community activity and social proof.',
        'Integrated live chat functionality for instant visitor communication, automated welcome triggers, and lead capture.',
        'Currently expanding stack into Google Ads (Search & Display) and Meta Ads (Instagram/Facebook Ads Manager) for full-funnel acquisition.'
      ],
      transformation: {
        beforeLabel: 'Static Brochure Website',
        beforeText: 'Static text pages with no live visitor engagement, broken social links, and unoptimized mobile layouts.',
        afterLabel: 'The nevara.top Architecture',
        afterText: 'Dynamic, interactive WordPress web experience equipped with live chat, real-time social feeds, and mobile-first responsiveness.',
        insight: 'Pairing conversion copywriting with hands-on WordPress web design and live widgets gives 100% full-funnel control from traffic to conversion.'
      },
      deliverables: [
        'Custom WordPress Theme Architecture',
        'Live Chat Widget Integration',
        'Real-Time Social Media Feeds',
        'Mobile-Responsive UX Layout',
        'Google & Meta Ads Campaign Strategy'
      ],
      tags: ['WordPress', 'nevara.top', 'Live Chat', 'Social Widgets', 'Google Ads', 'Meta Ads']
    }
  ] as CaseStudy[],

  copySamples: [
    {
      id: 'sample-1',
      brand: 'FloBites',
      context: 'Craving Cruncher (55% Dark Chocolate SKU)',
      format: 'Microcopy',
      hook: 'Chocolate calling? Answer better.',
      copy: 'Chocolaty, crunchy and healthy bites. Munch through your period cravings with no guilt. Made with 55% Dark Chocolate, puffed ragi pops, and 100% comfort for your period week. (138 kcal | 30g bar)',
      strategyNote: 'Connects biological cycle phases to irresistible taste without medicalizing the snacking experience.',
      metric: 'Product Pack Copy'
    },
    {
      id: 'sample-2',
      brand: 'FloBites',
      context: 'Ad Storyboard Concept #13',
      format: 'Social Ad',
      hook: 'Girl wakes up on Day 1: 3 missed work calls, gym reminder.',
      copy: 'She looks at her phone, feeling the hormonal drop. Stares at the ceiling for 10 seconds. Then reaches for FloBites on her bedside table, takes a bite, and gets up. Voiceover: “Day 1 didn’t win.”',
      strategyNote: 'Replaces artificial cheerleader optimism with realistic, relatable female resilience.',
      metric: 'Ad Storyboard'
    },
    {
      id: 'sample-3',
      brand: 'FloBites',
      context: 'FloGirl’s Guide to Periods (Booklet Page 10)',
      format: 'Landing Page',
      hook: 'What is the amount of blood you’ve shed until now?',
      copy: '132 periods × 55ml = 7,260 ml. That is 7.26 litres. Your body has done that every month. Quietly. Without a single day off. Adjust your periods. Not yourself. Not anymore.',
      strategyNote: 'Transforms a taboo biological fact into a jaw-dropping stat that honors female endurance.',
      metric: 'Educational Booklet'
    },
    {
      id: 'sample-4',
      brand: 'MyCaptain',
      context: 'WhatsApp Conversational Drip (Course Launch)',
      format: 'WhatsApp Hook',
      hook: 'Hey Rohan — quick question about your portfolio.',
      copy: 'Most people take 6 months collecting dusty certificates nobody checks. Our cohort does something else: in 4 weeks, you sit 1-on-1 with senior copy leads and build 3 live brand specs. We’ve reserved 4 scholarship slots until tonight. Want me to save yours?',
      strategyNote: 'Low-friction, direct, outcome-focused with transparent scarcity that doesn’t feel scammy.',
      metric: '+38% Reply Rate'
    },
    {
      id: 'sample-5',
      brand: 'Street Cause NGO',
      context: 'Instagram Micro-Campaign',
      format: 'Social Ad',
      hook: 'You wouldn’t drop ₹500 on a t-shirt you hate. So why give ₹50 to a charity you don’t track?',
      copy: 'At Street Cause, we don’t do blind donation buckets. Every single rupee gets itemized into real school supplies, sanitary kits, and community meals right here in Hyderabad. ₹350 buys an entire term of textbooks for Class 8.',
      strategyNote: 'Overcomes cynical donor skepticism by leading with transparency and consumer buying logic.',
      metric: '2,000+ Event Mobilization'
    }
  ],

  experience: [
    {
      role: 'Marketing & Content Specialist',
      company: 'The Hormone Essentials (FloBites)',
      type: 'Women’s Wellness FMCG · Remote',
      period: 'Marketing & Content Specialist',
      highlight: 'Authored website copy, 43 taglines, 15 ad storyboards, 12-page booklet & 25-brand category research.',
      bullets: [
        'Wrote and refined website copy and product packaging for Craving Cruncher (55% Dark Chocolate) and Mood Muncher (Jaggery Classic) bars.',
        'Executed 25-brand category research mapping competitor gaps across Blinkit, Amazon, and quick commerce (Yoga Bar, The Whole Truth, Nua, SuperYou).',
        'Penned 43 brand taglines (e.g. “Day 1 didn’t win”, “Built different. Bleeds different. Shows up the same.”) and 15 video ad concepts.',
        'Authored the 12-page educational booklet "FloGirl’s Guide to Periods" featuring the 7.26L blood loss metric and cycle nutrition tips.',
        'Conducted competitor SWOT and valuation analysis across CRED, SuperYou, Yoga Bar, Max Protein, and The Whole Truth.'
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
      { name: 'Website & Packaging Microcopy', level: 'Expert', desc: 'Crafted real SKU descriptions for Craving Cruncher & Mood Muncher' },
      { name: 'Tagline & Motto Development', level: 'Expert', desc: 'Created 43 original taglines for FloBites across 4 tone categories' },
      { name: 'Ad Storyboards & Video Scripts', level: 'Expert', desc: 'Architected 15 narrative commercial concepts (e.g. Day 1 Didn’t Win)' },
      { name: 'Educational Long-Form Copy', level: 'Expert', desc: 'Authored 12-page "FloGirl’s Guide to Periods" booklet' },
      { name: 'Social & WhatsApp Conversion Funnels', level: 'Advanced', desc: 'Multi-channel student conversion hooks (+200 sign-ups above target)' }
    ],
    marketing: [
      { name: 'Quick-Commerce & E-Commerce Audits', level: 'Expert', desc: '25-brand category research across Blinkit, Zepto, Amazon, and Instamart' },
      { name: 'Competitor Strategic Teardowns', level: 'Advanced', desc: 'SWOT and branding architecture for CRED, SuperYou, Whole Truth, Yoga Bar' },
      { name: 'Indian Advertising Deconstruction', level: 'Advanced', desc: 'Analyzed 50 iconic Indian campaigns (Whisper, Ariel, Fevicol, Swiggy)' },
      { name: 'Experiential & Guerrilla Campaigns', level: 'Expert', desc: 'Designed 40 on-ground activations (Cancelled Plans Wall, Punch Your Period)' }
    ],
    webDesign: [
      { name: 'WordPress Web Design', level: 'Expert', desc: 'Custom website building, landing page creation, theme customization (built nevara.top)' },
      { name: 'Live Chat Integration', level: 'Advanced', desc: 'Configuring automated visitor chat, real-time lead capture, and conversational support widgets' },
      { name: 'Live Social Widgets', level: 'Advanced', desc: 'Embedding dynamic social media feeds, live reviews, and community proof embeds' },
      { name: 'Google Ads (SEM & Display)', level: 'Active Course', desc: 'Search intent keyword targeting, ad copy variations, and campaign structure' },
      { name: 'Meta Ads (Instagram & Facebook)', level: 'Active Course', desc: 'Paid ad creative testing, custom audience segmentation, and campaign optimization' }
    ],
    operations: [
      { name: 'Data Reconciliation & Accuracy', level: 'Expert', desc: '99% accuracy proven across commercial banking records at Wells Fargo' },
      { name: 'Stakeholder & Legal Reporting', level: 'Advanced', desc: 'Structured reporting for global leadership at The D.E. Shaw Group' },
      { name: 'Cross-Functional Coordination', level: 'Expert', desc: 'Bridging marketing with operations, legal review cycles, and product specs' },
      { name: 'Deadline & Process Discipline', level: 'Expert', desc: 'Immovable delivery standards honed in institutional finance' }
    ],
    tools: [
      { name: 'Canva', category: 'Packaging & Deck Design' },
      { name: 'Google Sheets / Excel', category: '25-Brand Audits & Reconciliation' },
      { name: 'PowerPoint & Keynote', category: 'Client Pitches & Strategy Decks' },
      { name: 'SharePoint', category: 'Enterprise Documentation' },
      { name: 'AI-assisted Drafting', category: 'Prompt Strategy & Research' }
    ],
    languages: [
      { name: 'English', proficiency: 'Fluent (Professional Proficiency)' },
      { name: 'Hindi', proficiency: 'Fluent (Bilingual Speaking & Writing)' },
      { name: 'Telugu', proficiency: 'Native (Mother Tongue)' }
    ]
  }
};
