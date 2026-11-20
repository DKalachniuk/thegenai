// Translation system for TheGenAI website
const translations = {
    en: {
        // Meta tags
        'page-title': 'TheGenAI — AI That Your Engineering Team Can Actually Run | Netherlands',
        'page-description': 'AI that your engineering team can actually run. Legacy codebase intelligence, 8-hour proof-of-value sprints, and hands-on developer training for Dutch software companies.',
        'og-title': 'TheGenAI — AI That Your Engineering Team Can Actually Run | Netherlands',
        'og-description': 'AI that your engineering team can actually run. Legacy codebase intelligence, 8-hour proof-of-value sprints, and hands-on developer training for Dutch software companies.',
        'twitter-title': 'TheGenAI — AI That Your Engineering Team Can Actually Run | Netherlands',
        'twitter-description': 'AI that your engineering team can actually run. Legacy codebase intelligence, 8-hour proof-of-value sprints, and hands-on developer training for Dutch software companies.',

        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About Us',
        'nav.services': 'Services',
        'nav.portfolio': 'Portfolio',
        'nav.lab': 'Lab',
        'nav.games': 'Lab',
        'nav.blog': 'Blog',
        'nav.contact': 'Contact',
        'nav.cta': 'Book a Sprint',

        // Hero section
        'hero.badge': 'Independent AI Studio • Amsterdam, Netherlands',
        'hero.title': 'AI that your engineering team can <span class="hero-highlight">actually run</span>',
        'hero.subtitle': 'Legacy codebase intelligence, <span class="hero-accent">8-hour proof-of-value sprints</span>, and hands-on developer training for Dutch software companies.',
        'hero.btn.cta': 'Book a Sprint',
        'hero.btn.explore': 'Explore Solutions',
        'hero.btn.portfolio': 'View Portfolio',
        'hero.trust.metric1': '50+ AI Sprints Delivered',
        'hero.trust.metric2': 'EU AI Act & GDPR Ready',
        'hero.trust.metric3': 'Zero Data Retention / Private VPC',

        // About section
        'about.title': 'About TheGenAI',
        'about.subtitle': 'Independent AI studio based in Amsterdam, founded in 2026 by Dima Kalachniuk.',
        'about.heading': 'Principal-Led AI Engineering & Architecture',
        'about.text1': 'Founded in 2026 in Amsterdam by senior engineer Dima Kalachniuk, TheGenAI operates as a lean, independent AI studio. Rather than traditional agency overhead with junior handoffs and layers of account management, clients partner directly with a principal builder who designs, architectures, and ships every system.',
        'about.text2': 'From architecting production agentic workflows and reverse-engineering complex legacy codebases to launching live MVPs in rapid 8-hour sprints, we combine deep engineering rigor with pragmatic speed.',
        'about.founder.role': 'Founder & Principal AI Architect • Amsterdam',
        'about.stats.projects': 'AI Sprints & Builds',
        'about.stats.products': 'Live Shipped Products',
        'about.stats.speed': 'Proof-of-Value Sprint',

        // Venture Lab & Experiments
        'lab.badge': 'Venture Lab & Publications',
        'lab.title': 'Built in Public & Developer Guides',
        'lab.subtitle': 'Beyond enterprise client work, we actively author developer playbooks and build production SaaS products in public.',

        // Book section
        'book.label': 'NEW BOOK RELEASE',
        'book.title': 'Practical Vibecoding with Prompts',
        'book.subtitle': 'How I Built a Real SaaS with AI',
        'book.description': 'Woonprijs.nl is a live, revenue-generating platform with real paying users. This book shares the exact, production-tested prompts and playbook I used to build it from scratch as a solo builder.',
        'book.benefit1': '55 production-tested prompts (APIs, UI, Stripe, auth, and more)',
        'book.benefit2': 'Prompt strategies for leading AI models and coding agents',
        'book.benefit3': 'No fluff: Actual mistakes, bugs, and real AI fixes included',
        'book.cta': 'Buy on Gumroad',

        // Services section (6 Core Services)
        'services.title': 'Our AI Solutions',
        'services.subtitle': 'Pragmatic, principal-led engineering services designed for European tech teams.',
        'services.cta': 'Request a quote',
        'services.footnote': 'Pilot fees are credited against follow-up work. 50% upfront, 50% on delivery.',

        // Service 1: Legacy Codebase Intelligence
        'services.legacy.title': 'Legacy Codebase Intelligence',
        'services.legacy.badge': 'Most popular',
        'services.legacy.description': 'Turn undocumented systems into living architecture maps, API contracts and AI-ready docs. Remove key-person risk and onboard developers faster.',
        'services.legacy.price': 'Pilot (1 module, ~1 week) from €5,500 fixed. Full codebase from €15,000.',
        'services.legacy.note': 'Pilot fee is credited against a full engagement.',

        // Service 2: AI Readiness Scan
        'services.readiness.title': 'AI Readiness Scan',
        'services.readiness.description': 'A 1-2 week scan that finds your best AI use cases, the risks and a short roadmap. No hype, a prioritised plan.',
        'services.readiness.price': '€3,900 fixed.',
        'services.readiness.note': '1-2 weeks • Prioritised opportunity & risk roadmap',

        // Service 3: Proof-of-Value Sprint (8 hours)
        'services.pov.title': 'Proof-of-Value Sprint (8 hours)',
        'services.pov.description': 'A working prototype of your "magic feature" in one day, to prove value before you invest. Follow-up hardening available.',
        'services.pov.price': '€2,900 fixed.',
        'services.pov.note': '1 working day • Working prototype of your core feature',

        // Service 4: Production Hardening
        'services.hardening.title': 'Production Hardening',
        'services.hardening.description': 'Turn a prototype into something your team can run: tests, security review, logging and a clean handover.',
        'services.hardening.price': '€1,000/day or 5-day package €4,750.',
        'services.hardening.note': '5-day package €4,750 • Tests, security review & logging',

        // Service 5: AI Workshops for Developer Teams
        'services.workshops.title': 'AI Workshops for Developer Teams',
        'services.workshops.description': 'Hands-on training in AI-assisted coding, working safely with agents (AGENTS.md, llms.txt) and building real prototypes. Includes an optional AI-literacy session for the wider organisation.',
        'services.workshops.price': 'Half day €2,000, full day €3,500 (up to 12 people). AI-literacy session half day €1,500 (up to 20 people).',
        'services.workshops.note': 'Up to 12 people • Optional AI-literacy session (up to 20 people)',

        // Service 6: Website as a Service
        'services.waas.title': 'Website as a Service (WaaS)',
        'services.waas.description': 'Get a high-converting, fully-managed website for your business with zero down payment and all-inclusive support.',
        'services.waas.price': 'Dedicated plans • €0 down payment',
        'services.waas.note': 'Open page to see all plans & pricing options',
        'services.waas.cta': 'View Plans & Pricing',

        // WaaS Page English
        'waas.title': 'WaaS for Builders, Contractors & Klusbedrijven | TheGenAI',
        'waas.meta_desc': 'World-class Website as a Service (WaaS) built specifically for construction companies, renovation firms (klusbedrijven), painters, and contractors in the Netherlands. Zero upfront cost.',
        'waas.hero.badge': '🔨 Built Specifically for Contractors & Klusbedrijven',
        'waas.hero.title': 'Bespoke Websites for Builders. Zero Upfront Costs.',
        'waas.hero.subtitle': 'Get a world-class, premium website that showcases your projects, generates leads, and brings in clients. Fully managed, SEO/GEO optimized, with €0 downpayment.',
        'waas.cta.get_started': 'Get Your Offerte Now',
        'waas.cta.view_example': 'View Live Demo Website',
        'waas.cta.explore': 'Explore Pricing Models',
        
        'waas.features.title': 'Engineered to Convert',
        'waas.features.subtitle': 'We don\'t just build websites; we design high-performance digital sales machines tailored specifically for Dutch construction & renovation services.',
        'waas.feature.whatsapp.title': 'Direct WhatsApp Integration',
        'waas.feature.whatsapp.desc': 'A floating, high-conversion WhatsApp widget allows prospective clients to text you instantly, reducing booking friction by up to 40%.',
        'waas.feature.offerte.title': 'Smart "Offerte aanvragen" Forms',
        'waas.feature.offerte.desc': 'Easy-to-use estimation request forms designed for high response rates. Get qualified building leads straight to your inbox.',
        'waas.feature.seo.title': 'Generative Engine & SEO Optimized',
        'waas.feature.seo.desc': 'Built from the ground up to rank high on Google and be recommended by LLMs like ChatGPT, Gemini, and Claude for local services.',
        'waas.feature.support.title': 'The WhatsApp Content Feature',
        'waas.feature.support.desc': 'Finished a new roof, kitchen, or tiling job? Just WhatsApp us the photos and text directly from the site. We format and publish them beautifully within 24 hours!',

        'waas.pricing.title': 'Simple, Transparent Pricing',
        'waas.pricing.subtitle': 'Choose the model that fits your cash flow. Both options include premium design, responsiveness, and top-tier performance for your firm.',
        
        'waas.plan.classic.title': 'Classic Model',
        'waas.plan.classic.subtitle': 'One-off payment + basic maintenance',
        'waas.plan.classic.setup_price': '€399 – €499',
        'waas.plan.classic.setup_period': 'one-off setup',
        'waas.plan.classic.monthly_price': '€39.99',
        'waas.plan.classic.monthly_period': 'per month',
        'waas.plan.classic.desc': 'Ideal for builders wanting full codebase ownership from day one, with low ongoing maintenance costs.',
        'waas.plan.classic.feat1': 'Complete ownership of design & code',
        'waas.plan.classic.feat2': 'Premium hosting & SSL security',
        'waas.plan.classic.feat3': 'Official .nl or .com domain registration',
        'waas.plan.classic.feat4': 'Regular technical & plug-in updates',
        'waas.plan.classic.feat5': 'Basic content changes self-managed',
        
        'waas.plan.waas.title': 'Website as a Service (WaaS)',
        'waas.plan.waas.subtitle': 'Zero downpayment + full management',
        'waas.plan.waas.setup_price': '€0',
        'waas.plan.waas.setup_period': 'zero downpayment',
        'waas.plan.waas.monthly_price': '€79.99',
        'waas.plan.waas.monthly_period': 'per month',
        'waas.plan.waas.desc': 'The ultimate hassle-free solution. We design, host, protect, and continuously update your website while you focus on your building projects.',
        'waas.plan.waas.feat1': '€0 starting downpayment (Zero upfront risk)',
        'waas.plan.waas.feat2': 'All-inclusive premium cloud hosting & SSL',
        'waas.plan.waas.feat3': 'Weekly secure cloud backups & spam defense',
        'waas.plan.waas.feat4': 'WhatsApp Content Support (15-20 min/mo included)',
        'waas.plan.waas.feat5': 'Flexible 12 or 24-month contract terms',
        
        'waas.partner.badge': 'Official Bookkeeping Partner',
        'waas.partner.title': 'Need Help with ZZP/EMZ Bookkeeping & Registration?',
        'waas.partner.subtitle': 'We have partnered with TaxUA to make running your business in the Netherlands simple.',
        'waas.partner.promo_title': 'Exclusive Partner Offer:',
        'waas.partner.item1': 'EMZ/ZZP Bookkeeping: From €50 / month',
        'waas.partner.item2': 'EMZ/ZZP Registration: Free**',
        'waas.partner.link_text': 'Visit TaxUA.nl',

        'waas.faq.title': 'WaaS Frequently Asked Questions',
        'waas.faq.q1': 'What is Website as a Service (WaaS)?',
        'waas.faq.a1': 'WaaS is an all-inclusive subscription model. Instead of paying thousands of euros upfront for design and development, you pay a flat monthly fee. We build, host, secure, and update the site for you.',
        'waas.faq.q2': 'What is the commitment period for Option 2 (WaaS)?',
        'waas.faq.a2': 'Option 2 is built on a minimum contract of 12 or 24 months. If you wish to terminate early, the website remains the property of TheGenAI, or you can purchase it for the standard one-off development price (€499).',
        'waas.faq.q3': 'How does the WhatsApp Content Support work?',
        'waas.faq.a3': 'It\'s our killer support feature! If you finish a project, renovate a house, or paint a room, just send us the photos and a brief description directly on WhatsApp. We will format them and upload them beautifully to your website portfolio section within 24 hours.',
        'waas.faq.q4': 'Are the websites optimized for Google and AI search engines?',
        'waas.faq.a4': 'Absolutely. Every site we build is highly optimized using Generative Engine Optimization (GEO) and standard SEO practices. This ensures search engines and AI assistants (like ChatGPT or Claude) easily read, cite, and recommend your services.',

        // Portfolio section
        'portfolio.title': 'Featured Portfolio',
        'portfolio.subtitle': 'Real-world AI solutions that deliver measurable results',
        'portfolio.filter.all': 'All Solutions',
        'portfolio.filter.proptech': 'PropTech & Real Estate',
        'portfolio.filter.b2b': 'B2B & SaaS Tools',
        'portfolio.filter.platforms': 'Public Platforms',
        'portfolio.bedankt.title': 'Bedankt.me',
        'portfolio.bedankt.category': 'Digital Gratitude Platform',
        'portfolio.bedankt.description': 'A modern, easy-to-use eCard platform that revolutionizes group greeting cards and employee recognition. Built with a focus on simplicity, responsiveness, and premium design to help teams and individuals celebrate life\'s moments together.',
        'portfolio.woonprijs.title': 'Woonprijs.nl',
        'portfolio.woonprijs.category': 'Real Estate AI Platform',
        'portfolio.woonprijs.description': 'Developed a comprehensive AI-powered property valuation platform that aggregates multiple data sources to provide accurate price estimates, neighborhood demographics, and intelligent bidding advice for the Dutch real estate market.',
        'portfolio.wheretoinvest.badge': '⚡ Live Case Study: Built in Under 8 Hours',
        'portfolio.wheretoinvest.title': 'WhereToInvest.nl',
        'portfolio.wheretoinvest.category': 'Investment Analysis Platform',
        'portfolio.wheretoinvest.description': 'A live case study in 8-hour MVP delivery: built from concept to production-ready deployment in a single day. Analyzes market trends, rental yields, and property appreciation potential to pinpoint high-return real estate in the Netherlands.',
        'portfolio.roundrobin.title': 'Round Robin Shift Manager for Confluence',
        'portfolio.roundrobin.category': 'Confluence Workflow Automation',
        'portfolio.roundrobin.description': 'A comprehensive Atlassian Marketplace app that automates rotating team responsibilities, on-call duties, and support schedules. Features real-time countdowns, automated rotation logic, and a full audit trail of shift history, integrated directly into Confluence.',
        'portfolio.linkedinformatter.title': 'LinkedIn Formatter',
        'portfolio.linkedinformatter.category': 'Content Creation Tool',
        'portfolio.linkedinformatter.description': 'A specialized tool that ensures your formatted text (bold and italics) stays preserved when pasting into LinkedIn. The tool also automatically detects and removes common AI-generated "slop" to make your posts more authentic and professional.',
        'portfolio.tendermaat.title': 'TenderMaat.nl',
        'portfolio.tendermaat.category': 'AI Tender Analysis Platform',
        'portfolio.tendermaat.description': 'An AI-powered platform for Dutch companies to analyze public tenders from TenderNed. It provides instant Go/No-Go recommendations, qualification checklists, and strategic bid advice in Dutch.',
        'portfolio.fluitvoormij.title': 'FluitVoorMij.nl',
        'portfolio.fluitvoormij.category': 'Sports Automation Platform',
        'portfolio.fluitvoormij.description': 'A specialized platform that automates referee assignments for football clubs in the Netherlands. It streamlines communication, manages availability, and ensures fair rotation for club referees.',
        'portfolio.dovidka.title': 'Dovidka.nl',
        'portfolio.dovidka.category': 'Community Knowledge & Integration Portal',
        'portfolio.dovidka.description': 'An extensive informational platform and knowledge base for the Ukrainian community in the Netherlands. Features 40+ structured step-by-step guides covering housing, ZZP taxes, healthcare, education, and an audited directory of accredited Dutch professionals.',
        'portfolio.socialehuurgids.title': 'SocialeHuurGids.nl',
        'portfolio.socialehuurgids.category': 'Social Housing Navigation Platform',
        'portfolio.socialehuurgids.description': 'A comprehensive navigation platform and strategy guide for the Dutch social housing market. Helps tenants understand the regulated rental system, bypass years-long waiting lists with lottery housing (lotingwoningen), navigate municipal priority schemes (urgentie), and calculate rental subsidies (huurtoeslag).',
        'portfolio.kerntest.badge': '⚡ Live Case Study: Built in Under 8 Hours',
        'portfolio.kerntest.title': 'Kerntest.nl',
        'portfolio.kerntest.category': 'Psychometric & Assessment Platform',
        'portfolio.kerntest.description': 'A scientifically grounded psychometric testing platform in the Netherlands. Offers validated assessments including Big Five (OCEAN/IPIP-50), 16 Personality Types, DISC, Core Quadrants (Ofman), and Attachment Styles with calibrated scoring, trait distribution analytics, and in-depth psychological reports.',
        'portfolio.padelmath.title': 'PadelMath.com',
        'portfolio.padelmath.category': 'Padel Analytics & Equipment Intelligence',
        'portfolio.padelmath.description': 'A data-driven sports analytics platform and decision engine for padel players and court developers. Features objective racket fit scoring formulas, comprehensive spec databases, and US court cost & ROI feasibility calculators.',
        'portfolio.btn.view': 'View Project',

        // Contact section
        'contact.title': 'Ready to Transform Your Business?',
        'contact.subtitle': 'Let\'s discuss how AI can accelerate your growth',
        'contact.info.title': 'Get in Touch',
        'contact.info.description': 'We\'re always excited to work on new projects and help businesses leverage the power of artificial intelligence.',
        'contact.form.name': 'Your Name',
        'contact.form.email': 'Your Email',
        'contact.form.company': 'Company Name',
        'contact.form.message': 'Tell us about your project',
        'contact.form.submit': 'Send Message',

        // Process Section (How it Works)
        'process.title': 'Proof-of-Value Sprint',
        'process.subtitle': 'From idea to working prototype in a single day.',
        'process.step1.title': 'Discovery',
        'process.step1.duration': '1 Hour',
        'process.step1.text': 'We identify the core problem and define the "magic" feature.',
        'process.step2.title': 'Architecture',
        'process.step2.duration': '2 Hours',
        'process.step2.text': 'We map out the data flow and UI structure.',
        'process.step3.title': 'Core Build',
        'process.step3.duration': '4 Hours',
        'process.step3.text': 'We code the primary AI functionality and user interface.',
        'process.step4.title': 'Handover',
        'process.step4.duration': '1 Hour',
        'process.step4.text': 'We refine the UX and deliver your working prototype. (Proven by WhereToInvest.nl — conceived, coded, and launched in an 8-hour sprint).',
        'process.step5.title': 'Next: Hardening',
        'process.step5.duration': 'Next Step',
        'process.step5.text': 'We scope the path to production (optional).',

        // FAQ Section
        'faq.title': 'Frequently Asked Questions',
        'faq.subtitle': 'Everything you need to know about our AI solutions.',
        'faq.q1': 'Can you really build a prototype in 8 hours?',
        'faq.a1': 'Yes. By focusing on the "magic" feature and leveraging pre-built components, we deliver high-quality, focused results that solve real problems.',
        'faq.q2': 'Do I need a technical background?',
        'faq.a2': 'No. Our workshops and prototypes are designed to bridge the gap between business ideas and technical reality for everyone.',
        'faq.q3': 'What happens after the 8 hours?',
        'faq.a3': 'You receive a working prototype of your core feature along with the complete source code. Production hardening — adding automated tests, CI/CD, security audits, logging, and production infrastructure — is a separate, scoped follow-up phase so you only invest once value is proven.',
        'faq.q4': 'Where does TheGenAI operate?',
        'faq.a4': 'TheGenAI is based in Amsterdam, The Netherlands, and serves clients across all of Europe with on-site and remote workshops and consulting.',
        'faq.q5': 'How do I book a workshop or order an MVP?',
        'faq.a5': 'Email us at info@thegenai.nl or fill in the contact form on our website to get started.',
        'faq.q6': 'How does TheGenAI handle enterprise data security, privacy, and EU AI Act compliance?',
        'faq.a6': 'We prioritize enterprise-grade security and full compliance with the EU AI Act and GDPR. All solutions can be deployed 100% privately within your enterprise VPC (AWS, Azure, GCP) or on-premise air-gapped environments. We enforce zero data retention policies with zero training on your proprietary data. Learn more on our <a href="/security/">Security and Data Handling</a> page.',
        'faq.q7': 'How do you reverse-engineer and document undocumented legacy codebases?',
        'faq.a7': 'We employ specialized static analysis engines and private LLM agents to map service boundaries, data flows, database schemas, and API contracts into living architectural diagrams and OpenAPI specifications. We also create context layers (AGENTS.md, llms.txt) allowing modern AI coding assistants to work safely with your legacy code without hallucinations.',
        'faq.q8': 'What do your services cost?',
        'faq.a8': 'We work with fixed, transparent pricing: AI Readiness Scan (€3,900 fixed), 8-Hour Proof-of-Value Sprint (€2,900 fixed), Legacy Codebase Intelligence (pilot from €5,500, full codebase from €15,000, with pilot fee credited toward full engagements), Production Hardening (€1,000/day or €4,750 for 5 days), and Developer Workshops (half-day €2,000, full-day €3,500). Website as a Service (WaaS) offers dedicated plans starting from €0 upfront.',
        'faq.q9': 'Who owns the code?',
        'faq.a9': 'You do. The client owns 100% of the deliverables and custom source code, as agreed and stipulated in our contract. There is no vendor lock-in.',
        'faq.q10': 'What is the AI-literacy session?',
        'faq.a10': 'The AI-literacy session is a half-day interactive workshop covering the AI-literacy obligation under the EU AI Act for organisations using or deploying AI systems. It provides practical, non-technical and technical guidance on safe, compliant AI usage.',
        'faq.q11': 'How does Codebase Intelligence prevent high-risk "Big Bang" rewrites?',
        'faq.a11': 'Instead of freezing feature work for a multi-year rewrite that risks omitting undocumented edge cases, our codebase intelligence maps dependencies and data flows so you can safely apply the Strangler Fig pattern — incrementally migrating isolated modules with zero downtime.',
        'faq.q12': 'How do you eliminate key-person risk ("sleutelpersoonrisico") in legacy systems?',
        'faq.a12': 'We extract tribal knowledge directly from git history, undocumented business logic, and code paths into living architectural maps, OpenAPI specs, and AI context layers (AGENTS.md, llms.txt), ensuring no single engineer is a single point of failure.',

        // Newsletter
        'newsletter.title': 'Stay Ahead of AI',
        'newsletter.subtitle': 'Get fresh insights and deep dives from our blog delivered to your inbox.',
        'newsletter.placeholder': 'Your Email',
        'newsletter.btn': 'Subscribe',

        // Footer
        'footer.description': 'Creating intelligent solutions for tomorrow\'s challenges.',
        'footer.services.title': 'Services',
        // Services: Forward Deployed Engineer
        'services.fde.badge': 'New • Embedded AI',
        'services.fde.title': 'Forward Deployed Engineer (FDE)',
        'services.fde.description': 'Embed a principal AI engineer directly in your Dutch team (on-site Amsterdam/Randstad or hybrid) to connect AI to real legacy systems and ship production software in days.',
        'services.fde.price': '1-week Field Sprint €5,500 fixed. Embedded FDE from €7,500/mo.',
        'services.fde.note': 'Sprint fee 100% credited toward monthly retainer • On-site NL & Remote EU',
        'services.fde.cta': 'Explore FDE Service',

        // Blog: Forward Deployed Engineer
        'blog.fde.category': 'Forward Deployed Engineering • NL',
        'blog.fde.title': 'What Is a Forward Deployed Engineer (FDE) — And Why Dutch Companies Hire Them Instead of AI Agencies',
        'blog.fde.description': 'Pioneered by Palantir and scaled by OpenAI and Anthropic, the Forward Deployed Engineer embeds directly in your team to ship production AI in days instead of 6-month consultancy cycles.',

        // Forward Deployed Engineer Page (EN)
        'fde.meta.title': 'Forward Deployed Engineer Netherlands (FDE) | Hire Embedded AI Engineer — TheGenAI Amsterdam',
        'fde.meta.desc': 'Hire a principal Forward Deployed Engineer (FDE) in the Netherlands. Embedded on-site or hybrid in Amsterdam, Rotterdam, Utrecht & Eindhoven to ship production AI systems, integrate legacy codebases, and deliver measurable ROI in days.',
        'fde.breadcrumb': 'Forward Deployed Engineer',
        'fde.hero.kicker': 'Forward Deployed Engineering • Netherlands',
        'fde.hero.title': 'Forward Deployed Engineer in the Netherlands',
        'fde.hero.subtitle': 'Stop waiting 6 months for consultants to write slide decks or recruiters to fill senior AI roles. Embed a principal Forward Deployed Engineer (FDE) directly inside your Dutch engineering team to connect AI to your real systems and ship production software in days.',
        'fde.hero.cta_primary': 'Book an FDE Discovery Call',
        'fde.hero.cta_secondary': 'View Engagement Models',
        'fde.hero.cta_guide': 'What is an FDE? Read Guide',
        'fde.trust.1': 'On-site in Amsterdam & Randstad or Hybrid NL',
        'fde.trust.2': 'Private VPC & EU AI Act / GDPR Ready',
        'fde.trust.3': '100% Client Code & IP Ownership',
        'fde.what.title': 'Why Dutch Companies Hire a Forward Deployed Engineer',
        'fde.what.subtitle': 'Pioneered by Palantir and scaled by OpenAI and Anthropic, the Forward Deployed Engineer closes the "last mile" gap between foundation models and messy enterprise reality.',
        'fde.what.c1.title': 'Embedded in Your Team',
        'fde.what.c1.desc': 'Your FDE joins your standups, Slack/Teams, and Git repositories. No account managers, no junior handoffs — you work directly with a principal AI architect who talks to both stakeholders and engineers.',
        'fde.what.c2.title': 'Ships Inside Messy Legacy Stacks',
        'fde.what.c2.desc': 'Real companies don\'t have clean greenfield data. We wire RAG pipelines, agentic workflows, and LLM integrations directly into your existing ERPs, APIs, SQL databases, and legacy monoliths.',
        'fde.what.c3.title': 'Production ROI in Days, Not Quarters',
        'fde.what.c3.desc': 'Instead of endless feasibility PDFs, you get working software in production during week one — complete with automated evals, observability, security guardrails, and clean handover documentation.',
        'fde.compare.title': 'Forward Deployed Engineer vs. Agencies & Traditional Hiring',
        'fde.compare.subtitle': 'How an embedded FDE from TheGenAI compares to traditional IT consultancies and full-time recruiting in the Netherlands.',
        'fde.table.h1': 'Dimension',
        'fde.table.h2': 'TheGenAI Forward Deployed Engineer',
        'fde.table.h3': 'Traditional AI / IT Consultancy',
        'fde.table.h4': 'In-House Senior AI Hire (NL)',
        'fde.table.r1c1': 'Time to First Production Ship',
        'fde.table.r1c2': 'Days (Week 1)',
        'fde.table.r1c3': '3–6 months (discovery + RFP)',
        'fde.table.r1c4': '4–7 months (recruiting + onboarding)',
        'fde.table.r2c1': 'Who Writes the Code',
        'fde.table.r2c2': 'Principal Architect (Founder-led)',
        'fde.table.r2c3': 'Partner sells, juniors execute',
        'fde.table.r2c4': 'Single hire (variable seniority)',
        'fde.table.r3c1': 'Business + Engineering Alignment',
        'fde.table.r3c2': 'Direct stakeholder-to-code loop',
        'fde.table.r3c3': 'Lost across PM & account layers',
        'fde.table.r3c4': 'Requires internal product management',
        'fde.table.r4c1': 'Legacy & Private VPC Integration',
        'fde.table.r4c2': 'Native (AWS/Azure/GCP/On-Prem)',
        'fde.table.r4c3': 'Often isolated PoC sandboxes',
        'fde.table.r4c4': 'Slow internal ramp-up',
        'fde.table.r5c1': 'Commitment & Risk',
        'fde.table.r5c2': 'Start with a 1-week €5,500 sprint',
        'fde.table.r5c3': '€50k–€200k+ locked SOW',
        'fde.table.r5c4': 'Fixed payroll + Dutch employment lock-in',
        'fde.process.title': 'How Forward Deployed Engineering Works',
        'fde.process.subtitle': 'A pragmatic, battle-tested field playbook built for speed, security, and zero lock-in.',
        'fde.step1.kicker': 'Step 01 • Days 1–2',
        'fde.step1.title': 'Embed & Diagnose on the Ground',
        'fde.step1.desc': 'We join your team on-site in Amsterdam/Randstad or via your dev environment. We interview key operators, inspect your legacy code and data flows, and lock onto the highest-ROI AI bottleneck.',
        'fde.step2.kicker': 'Step 02 • Days 3–10',
        'fde.step2.title': 'Architect & Ship to Your VPC',
        'fde.step2.desc': 'We build and deploy the working AI feature, agentic workflow, or data pipeline directly inside your private cloud (AWS, Azure, GCP) or on-premise servers with zero external data retention.',
        'fde.step3.kicker': 'Step 03 • Ongoing / Handover',
        'fde.step3.title': 'Production Hardening & Team Transfer',
        'fde.step3.desc': 'We add automated tests, LLM evals, logging, EU AI Act guardrails, and AGENTS.md / llms.txt documentation so your internal engineers can run and extend everything independently.',
        'fde.pricing.title': 'Transparent Engagement Models',
        'fde.pricing.subtitle': 'Start with a low-risk 1-week Field Sprint or embed a dedicated Forward Deployed Engineer into your Dutch team.',
        'fde.plan1.name': 'FDE Field Sprint',
        'fde.plan1.sub': 'Prove production value in 5 working days',
        'fde.plan1.period': 'Fixed • 100% credited toward monthly retainer',
        'fde.plan1.f1': '5 days embedded (on-site NL or hybrid)',
        'fde.plan1.f2': '1 working AI integration shipped to your repo/VPC',
        'fde.plan1.f3': 'Architecture blueprint & bottleneck audit',
        'fde.plan1.f4': '100% client source code & IP ownership',
        'fde.plan.cta': 'Book Field Sprint',
        'fde.plan2.badge': 'Most Popular',
        'fde.plan2.name': 'Part-Time Embedded FDE',
        'fde.plan2.sub': '2–3 days/week embedded alongside your devs',
        'fde.plan2.period': 'Per month • Flexible quarterly or monthly rolling',
        'fde.plan2.f1': 'Principal FDE embedded in Slack, standups & CI/CD',
        'fde.plan2.f2': 'End-to-end RAG, agents & legacy API integrations',
        'fde.plan2.f3': 'Automated evals, testing & EU AI Act compliance',
        'fde.plan2.f4': 'Hands-on pair programming & team upskilling',
        'fde.plan.cta2': 'Request Embedded FDE',
        'fde.plan3.name': 'Full-Time Dedicated FDE',
        'fde.plan3.sub': 'Full-capacity embedded AI engineering',
        'fde.plan3.period': 'Per month • Priority on-site Randstad coverage',
        'fde.plan3.f1': 'Full-time dedicated principal builder in your org',
        'fde.plan3.f2': 'Multi-system AI transformation & legacy modernization',
        'fde.plan3.f3': 'Direct executive & customer stakeholder workshops',
        'fde.plan3.f4': 'Full production hardening & clean team handover',
        'fde.plan.cta3': 'Discuss Dedicated FDE',
        'fde.nl.title': 'On-Site & Hybrid Across the Netherlands',
        'fde.nl.desc': 'Headquartered in Amsterdam (KVK 42019613), TheGenAI deploys Forward Deployed Engineers on-site across the Randstad and Dutch tech hubs — and remotely across Europe. Whether you are a FinTech in Amsterdam, a logistics enterprise in Rotterdam, a SaaS scale-up in Utrecht, or a high-tech firm in Eindhoven, we embed where your team works.',
        'fde.faq.title': 'Forward Deployed Engineer — FAQ',
        'fde.faq.q1': 'What is a Forward Deployed Engineer (FDE)?',
        'fde.faq.a1': 'A Forward Deployed Engineer (pioneered by Palantir and adopted by OpenAI and Anthropic) is a senior software and AI engineer who embeds directly inside a client\'s team. Unlike consultants who deliver slide decks, an FDE integrates AI into your real systems and ships production code.',
        'fde.faq.q2': 'Can I hire a Forward Deployed Engineer on-site in the Netherlands?',
        'fde.faq.a2': 'Yes. We are based in Amsterdam and work on-site or hybrid across Amsterdam, Rotterdam, Utrecht, Eindhoven, and The Hague, as well as remote across the EU.',
        'fde.faq.q3': 'What tech stacks and AI models do you work with?',
        'fde.faq.a3': 'We work inside your existing stack (Python, TypeScript/Node.js, Go, Java, .NET, PostgreSQL, Kubernetes) and deploy private or frontier models (OpenAI, Anthropic Claude, Google Gemini, open-weights on Azure/AWS Bedrock/GCP Vertex) inside your VPC.',
        'fde.faq.q4': 'How do you ensure GDPR and EU AI Act compliance?',
        'fde.faq.a4': 'All deployments run in your private EU VPC or on-premise with zero data retention and zero training on your proprietary data. We build audit logging, PII redaction, and EU AI Act compliance from day one.',
        'fde.faq.q5': 'Who owns the code and IP?',
        'fde.faq.a5': 'You do — 100%. All custom code, pipelines, prompts, and documentation are committed directly to your repositories with zero vendor lock-in.',
        'fde.cta.title': 'Ready to Embed a Forward Deployed Engineer?',
        'fde.cta.desc': 'Tell us about your AI bottleneck or legacy integration challenge. Start with a 1-week Field Sprint (€5,500, 100% credited toward a retainer) or book a 30-minute technical intake directly with Dima Kalachniuk.',
        'fde.cta.btn': 'Schedule Your Intake Call',

        'footer.services.fde': 'Forward Deployed Engineer',
        'footer.services.legacy': 'Legacy Codebase Intelligence',
        'footer.services.readiness': 'AI Readiness Scan',
        'footer.services.pov': 'Proof-of-Value Sprint',
        'footer.services.hardening': 'Production Hardening',
        'footer.services.workshops': 'AI Workshops',
        'footer.services.waas': 'Website as a Service',
        'footer.company.title': 'Company',
        'footer.social.title': 'Connect',
        'footer.social.linkedin_company': 'LinkedIn (Company)',
        'footer.social.linkedin_founder': 'LinkedIn (Founder)',
        'footer.privacy': 'Privacy Policy',
        'footer.security': 'Security & Data Handling',
        'footer.copyright': '© 2026 TheGenAI. All rights reserved. KVK 42019613',

        // Security Page English
        'security.title': 'Security and Data Handling - TheGenAI',
        'security.badge': 'Enterprise Security & Compliance',
        'security.heading': 'Security & Data Handling',
        'security.subtitle': 'Deploy in your private cloud, retain 100% data ownership, and stay compliant with GDPR and the EU AI Act.',
        'security.last_updated': 'Last Updated: October 2026',
        'security.intro': 'At TheGenAI, enterprise security, code confidentiality, and regulatory compliance are built into our architecture from day one. Here is exactly how we handle your infrastructure, models, and data.',
        'security.vpc.title': '1. Private VPC & On-Premise Deployment',
        'security.vpc.text': 'All custom AI solutions, prototypes, and agentic workflows can be deployed entirely within your own cloud perimeter (AWS, Microsoft Azure, Google Cloud Platform) or self-hosted in air-gapped on-premise environments. No client code, proprietary business logic, or customer data ever leaves your controlled security perimeter.',
        'security.retention.title': '2. Zero Data Retention & No Training on Client Data',
        'security.retention.text': 'We enforce strict Zero Data Retention (ZDR) policies across all AI APIs and foundation model providers. Your proprietary codebases, architecture diagrams, internal APIs, and operational data are strictly processed ephemerally for runtime inference and are never stored or used to train public or proprietary models.',
        'security.gdpr.title': '3. GDPR & EU AI Act-Aware Architecture',
        'security.gdpr.text': 'As an Amsterdam-based studio, we build systems with privacy-by-design under the GDPR and align with the European AI Act framework. We implement strict data minimization, human-in-the-loop governance for agentic workflows, audit logging, and team AI-literacy best practices.',
        'security.ownership.title': '4. 100% Code & IP Ownership',
        'security.ownership.text': 'Clients retain complete, unencumbered ownership of all deliverables, repositories, architecture maps, and custom code created during our engagements. We build on open, standardized technologies to guarantee zero vendor lock-in.',
        'security.subprocessors.title': '5. Subprocessors List',
        'security.subprocessors.text': 'We maintain a minimal footprint of verified infrastructure subprocessors. A comprehensive list of third-party sub-processors with geographic hosting regions is available upon request.',
        'security.dpa.title': '6. Data Processing Agreement (DPA)',
        'security.dpa.text': 'We provide standard, GDPR-compliant Data Processing Agreements (DPA) incorporating standard contractual clauses for all enterprise and pilot engagements.',
        'security.insurance.title': '7. Insurance & Liability',
        'security.insurance.text': 'TheGenAI carries professional indemnity and cyber liability insurance tailored for software engineering and enterprise advisory services.',
        'security.certifications.title': '8. Certifications & Standards',
        'security.certifications.text': 'Our engineering practices adhere to ISO/IEC 27001 information security controls and OWASP Top 10 for LLMs security guidelines.',

        // Blog Section
        'blog.page_title': 'Blog: AI Insights, Workshops & Prototyping - TheGenAI',
        'blog.page_description': 'Read the latest insights on Artificial Intelligence, prototyping, and team workshops from TheGenAI. Based in the Netherlands.',
        'blog.title': 'Our Blog',
        'blog.subtitle': 'Insights, news, and deep dives into the world of Artificial Intelligence.',
        'blog.read_more': 'Read More',
        'blog.view_all': 'Explore more articles',
        'blog.guide.category': 'Strategy Guide',
        'blog.guide.title': 'From Idea to Launch: How to Build a Working AI MVP in Just 8 Hours',
        'blog.guide.description': 'Practical tips for rapid prototyping. Learn the exact strategy we use at TheGenAI to launch your idea in a single day.',
        'blog.ide.category': 'AI Development',
        'blog.ide.title': 'Trae vs Antigravity vs Cursor: The Battle of AI IDEs',
        'blog.ide.description': 'A deep dive into the financial impact, development speed, and code quality of the top three AI-powered development environments.',
        'blog.geo.category': 'SEO & Marketing',
        'blog.geo.title': 'The New SEO: How to Get Your Website Cited by LLMs',
        'blog.geo.description': 'The exact blueprint we used to get discovered, read, and cited by the world\'s most popular AI assistants.',
        'blog.thinking.category': 'AI Architecture',
        'blog.thinking.title': 'Why I stopped asking AI to "code" and started asking it to "think."',
        'blog.thinking.description': 'I changed my workflow to a Two-Tier AI Architecture. Here is the 2-step playbook I used for my latest build.',
        'blog.trends.category': 'SEO & Agentic AI',
        'blog.trends.title': 'Supercharge Your SEO Directly in Claude Code & Antigravity: Introducing trends-skill',
        'blog.trends.description': 'Bridge real-world search volume demand on Google Trends directly with your local website codebase using Claude Code, Antigravity, and Gemini.',
        'blog.gemini_flash.category': 'Autonomous AI & Agents',
        'blog.gemini_flash.title': 'Google Just Quietly Changed the AI Game: Why Gemini 3.8 Flash Isn\'t Just Another Cheap Model',
        'blog.gemini_flash.description': 'Forget tiny speed upgrades and low API bills. Google re-engineered its budget model into an autonomous workhorse built for agentic execution, heavy coding, and cyber defense.',

        'blog.guide.page_title': '8-Hour MVP: How to Build and Launch Your AI Idea Fast - TheGenAI',
        'blog.guide.page_description': 'Practical tips on how to build a working AI MVP in just 8 hours. Learn the strategies for rapid prototyping.',
        'blog.ide.page_title': 'Trae vs Antigravity vs Cursor: Which AI IDE Wins in 2026? - TheGenAI',
        'blog.ide.page_description': 'Comparing Trae, Google Antigravity, and Cursor. A deep dive into GPT 5.0, Gemini 3.1 Pro, and Claude 3.6 for developers.',
        'blog.geo.page_title': 'The New SEO: How to Get Your Website Cited by LLMs - TheGenAI',
        'blog.geo.page_description': 'Learn how to optimize your website for AI search engines like ChatGPT, Gemini, Copilot, and Claude. Embrace Generative Engine Optimization (GEO).',
        'blog.thinking.page_title': 'Why I Stopped Asking AI to Code and Started Asking it to Think - TheGenAI',
        'blog.thinking.page_description': 'Leverage the 2-step "Master Architect" playbook for agentic workflows. Use thinking models for logic and standard models for execution.',
        'blog.trends.page_title': 'Supercharge Your SEO Directly in Claude Code & Antigravity: Introducing trends-skill - TheGenAI',
        'blog.trends.page_description': 'Supercharge your SEO directly in Claude Code & Antigravity. Introducing trends-skill: an open-source Agentic AI skill bridging real-time Google Trends data with local website code.',
        'blog.gemini_flash.page_title': 'Why Gemini 3.8 Flash Isn\'t Just Another Cheap Model - TheGenAI',
        'blog.gemini_flash.page_description': 'Google re-engineered Gemini 3.8 Flash into an autonomous workhorse built for agentic execution, heavy coding, and cyber defense.',

        // Privacy Policy Page
        'privacy.title': 'Privacy Policy - TheGenAI',
        'privacy.heading': 'Privacy Policy',
        'privacy.last_updated': 'Last Updated: March 29, 2026',
        'privacy.intro': 'At TheGenAI, we are committed to protecting your privacy and ensuring a transparent experience on our website.',
        
        'privacy.analytics.title': '1. Analytics & Tracking',
        'privacy.analytics.text': 'We use Umami Analytics to understand how visitors interact with our website. Umami is a privacy-first, cookieless analytics solution. It does not collect any personally identifiable information (PII) and does not track you across different websites. All data is anonymized and used solely to improve our website experience.',
        
        'privacy.contact.title': '2. Contact Form & Data',
        'privacy.contact.text': 'When you fill out our contact form, we collect the information you provide (name, email, company, and message) to respond to your inquiry. This data is stored securely using Firebase Firestore. We do not use this information for marketing purposes unless you explicitly request it, and we never share it with third parties.',
        
        'privacy.cookies.title': '3. Cookies',
        'privacy.cookies.text': 'Our website does not use non-essential tracking cookies. We prioritize your privacy by using modern, cookieless alternatives for analytics. Some functional cookies may be used by our hosting provider (Firebase) to ensure the security and stability of the site.',
        
        'privacy.rights.title': '4. Your Rights',
        'privacy.rights.text': 'Under the GDPR, you have the right to access, rectify, or erase your personal data. If you have submitted a contact form and wish to have your data removed, please contact us at info@thegenai.nl.',
        
        'privacy.contact_us.title': '5. Contact Us',
        'privacy.contact_us.text': 'If you have any questions about this Privacy Policy, please contact us at info@thegenai.nl.',

        // Studio Spec Panel
        'spec.title': 'ENGAGEMENT MATRIX',
        'spec.meta': 'FIXED SCOPE · EUR',
        'spec.legacy.desc': 'Architecture maps, OpenAPI specs & AGENTS.md',
        'spec.legacy.unit': '1 wk pilot',
        'spec.pov.desc': 'Working prototype of your core AI feature',
        'spec.pov.unit': '1 day fixed',
        'spec.readiness.desc': 'Prioritised use-case & risk roadmap',
        'spec.readiness.unit': '1–2 weeks',
        'spec.hardening.desc': 'Tests, security review, logging & handover',
        'spec.hardening.unit': '5-day pack',
        'spec.footer.left': '100% client IP & code ownership',
        'spec.footer.right': 'Amsterdam · Europe',

        // Deliverables Preview
        'deliverables.eyebrow': 'Concrete Output',
        'deliverables.title': 'What your team actually receives',
        'deliverables.description': 'No slide decks that sit in Drive. Every engagement ships directly into your repository as versioned architecture maps, API contracts, and AI-ready context layers.',
        'deliverables.item1': '<code>AGENTS.md</code> &amp; <code>llms.txt</code> rules so coding agents never hallucinate legacy boundaries',
        'deliverables.item2': 'Strangler Fig module dependency map &amp; OpenAPI 3.1 contracts',
        'deliverables.item3': '100% client-owned source code, tests &amp; VPC deployment runbook',
        'deliverables.link_llms': 'Inspect our live /llms.txt →',
        'deliverables.link_security': 'Security &amp; VPC Handling →',

        // Blog eyebrow
        'blog.eyebrow': 'Writing',

        // Contact Service Select
        'contact.form.service.placeholder': 'Select an engagement (optional)',
        'contact.form.service.legacy': 'Legacy Codebase Intelligence (from €5,500)',
        'contact.form.service.pov': 'Proof-of-Value Sprint — 8 hours (€2,900)',
        'contact.form.service.readiness': 'AI Readiness Scan (€3,900)',
        'contact.form.service.hardening': 'Production Hardening (from €4,750)',
        'contact.form.service.workshops': 'AI Workshops for Developer Teams (from €2,000)',
        'contact.form.service.waas': 'Website as a Service (WaaS)'
    },
    nl: {
        // Meta tags
        'page-title': 'TheGenAI — AI Die Uw Engineeringteam Daadwerkelijk Kan Beheren | Nederland',
        'page-description': 'AI die uw engineeringteam daadwerkelijk kan beheren. Legacy codebase intelligence, 8-uurs proof-of-value sprints en praktijkgerichte developer training voor Nederlandse softwarebedrijven.',
        'og-title': 'TheGenAI — AI Die Uw Engineeringteam Daadwerkelijk Kan Beheren | Nederland',
        'og-description': 'AI die uw engineeringteam daadwerkelijk kan beheren. Legacy codebase intelligence, 8-uurs proof-of-value sprints en praktijkgerichte developer training voor Nederlandse softwarebedrijven.',
        'twitter-title': 'TheGenAI — AI Die Uw Engineeringteam Daadwerkelijk Kan Beheren | Nederland',
        'twitter-description': 'AI die uw engineeringteam daadwerkelijk kan beheren. Legacy codebase intelligence, 8-uurs proof-of-value sprints en praktijkgerichte developer training voor Nederlandse softwarebedrijven.',

        // Navigation
        'nav.home': 'Home',
        'nav.about': 'Over Ons',
        'nav.services': 'Diensten',
        'nav.portfolio': 'Portfolio',
        'nav.lab': 'Lab',
        'nav.games': 'Lab',
        'nav.blog': 'Blog',
        'nav.contact': 'Contact',
        'nav.cta': 'Boek een Sprint',

        // Hero section
        'hero.badge': 'Onafhankelijke AI Studio • Amsterdam, Nederland',
        'hero.title': 'AI die uw engineeringteam daadwerkelijk kan <span class="hero-highlight">beheren</span>',
        'hero.subtitle': 'Legacy codebase intelligence, <span class="hero-accent">8-uurs proof-of-value sprints</span> en praktijkgerichte developer training voor Nederlandse softwarebedrijven.',
        'hero.btn.cta': 'Boek een Sprint',
        'hero.btn.explore': 'Ontdek Oplossingen',
        'hero.btn.portfolio': 'Bekijk Portfolio',
        'hero.trust.metric1': '50+ AI Sprints Opgeleverd',
        'hero.trust.metric2': 'EU AI Act & AVG/GDPR Conform',
        'hero.trust.metric3': 'Zero Data Retention / Private VPC',

        // About section
        'about.title': 'Over TheGenAI',
        'about.subtitle': 'Onafhankelijke AI-studio gevestigd in Amsterdam, opgericht in 2026 door Dima Kalachniuk.',
        'about.heading': 'Principal-Led AI Engineering & Architectuur',
        'about.text1': 'TheGenAI is in 2026 in Amsterdam opgericht door senior engineer Dima Kalachniuk als een wendbare, onafhankelijke AI-studio. In plaats van logge adviesbureaus met talloze accountmanagers werkt u rechtstreeks samen met een ervaren hoofdontwikkelaar die uw systemen ontwerpt, bouwt en oplevert.',
        'about.text2': 'Van het ontwerpen van geavanceerde agentic workflows en het ontrafelen van ongedocumenteerde legacy codebases tot het lanceren van live MVP\'s in sprints van 8 uur: wij combineren diepgaand vakmanschap met maximale snelheid.',
        'about.founder.role': 'Oprichter & Principal AI Architect • Amsterdam',
        'about.stats.projects': 'AI Sprints & Opleveringen',
        'about.stats.products': 'Live Producten Gebouwd',
        'about.stats.speed': 'Proof-of-Value Sprint',

        // Venture Lab & Experiments
        'lab.badge': 'Venture Lab & Publicaties',
        'lab.title': 'Openbaar Gebouwd & Ontwikkelaarsgidsen',
        'lab.subtitle': 'Naast zakelijke opdrachten schrijven we praktische ontwikkelaarsgidsen en bouwen we publiekelijk aan eigen SaaS-producten.',

        // Book section
        'book.label': 'NIEUW BOEK UITGEBRACHT',
        'book.title': 'Practical Vibecoding with Prompts',
        'book.subtitle': 'How I Built a Real SaaS with AI',
        'book.description': 'Woonprijs.nl is een live platform met betalende gebruikers. Dit boek deelt de exacte, in de praktijk geteste prompts en het playbook dat ik heb gebruikt om het vanaf nul op te bouwen als solo-ontwikkelaar.',
        'book.benefit1': '55 in de praktijk geteste prompts (APIs, UI, Stripe, auth, enz.)',
        'book.benefit2': 'Promptstrategieën voor toonaangevende AI-modellen en coding agents',
        'book.benefit3': 'Geen onzin: Inclusief echte fouten, bugs en concrete AI-oplossingen',
        'book.cta': 'Koop op Gumroad',

        // Services section (6 Core Services Dutch)
        'services.title': 'Onze AI Oplossingen',
        'services.subtitle': 'Pragmatische engineeringdiensten door een ervaren hoofdontwikkelaar voor Nederlandse softwarebedrijven.',
        'services.cta': 'Offerte aanvragen',
        'services.footnote': 'Pilotkosten worden verrekend met vervolgtrajecten. 50% vooraf, 50% bij oplevering.',

        // Service 1: Legacy Codebase Intelligence
        'services.legacy.title': 'Legacy Codebase Intelligence',
        'services.legacy.badge': 'Meest populair',
        'services.legacy.description': 'Transformeer ongedocumenteerde systemen naar actuele architectuurkaarten, API-contracten en AI-ready documentatie. Elimineer sleutelpersoonrisico en werk developers sneller in.',
        'services.legacy.price': 'Pilot (1 module, ~1 week) vanaf €5.500 vast. Volledige codebase vanaf €15.000.',
        'services.legacy.note': 'Pilotkosten worden verrekend met een volledig traject.',

        // Service 2: AI Readiness Scan
        'services.readiness.title': 'AI Readiness Scan',
        'services.readiness.description': 'Een scan van 1-2 weken die uw beste AI use-cases, risico\'s en een compacte roadmap identificeert. Geen hype, een geprioriteerd plan.',
        'services.readiness.price': '€3.900 vast.',
        'services.readiness.note': '1-2 weken • Geprioriteerde kansen & risico-roadmap',

        // Service 3: Proof-of-Value Sprint (8 uur)
        'services.pov.title': 'Proof-of-Value Sprint (8 uur)',
        'services.pov.description': 'Een werkend prototype van uw "magic feature" in één dag, om waarde te bewijzen vóórdat u investeert. Aansluitende hardening beschikbaar.',
        'services.pov.price': '€2.900 vast.',
        'services.pov.note': '1 werkdag • Werkend prototype van uw kernfeature',

        // Service 4: Production Hardening
        'services.hardening.title': 'Production Hardening',
        'services.hardening.description': 'Transformeer een prototype naar iets dat uw team daadwerkelijk kan beheren: tests, security review, logging en een gestructureerde overdracht.',
        'services.hardening.price': '€1.000/dag of 5-dagen pakket €4.750.',
        'services.hardening.note': '5-dagen pakket €4.750 • Tests, security review & logging',

        // Service 5: AI Workshops voor Developer Teams
        'services.workshops.title': 'AI Workshops voor Developer Teams',
        'services.workshops.description': 'Praktijkgerichte training in AI-assisted coding, veilig werken met agents (AGENTS.md, llms.txt) en het bouwen van echte prototypes. Inclusief optionele AI-geletterdheidssessie voor de bredere organisatie.',
        'services.workshops.price': 'Halve dag €2.000, hele dag €3.500 (tot 12 personen). AI-geletterdheidssessie halve dag €1.500 (tot 20 personen).',
        'services.workshops.note': 'Tot 12 personen • Optionele AI-geletterdheidssessie (tot 20 personen)',

        // Service 6: Website as a Service
        'services.waas.title': 'Website as a Service (WaaS)',
        'services.waas.description': 'Ontvang een converterende, volledig beheerde website voor uw bedrijf met nul aanbetaling en complete ondersteuning.',
        'services.waas.price': 'Vaste pakketten • €0 aanbetaling',
        'services.waas.note': 'Open de pagina om alle pakketten en tarieven te bekijken',
        'services.waas.cta': 'Bekijk Tarieven & Details',

        // WaaS Page Dutch
        'waas.title': 'WaaS voor Klusbedrijven, Aannemers & Bouw-ZZP\'ers | TheGenAI',
        'waas.meta_desc': 'Website as a Service (WaaS) van wereldklasse, speciaal gebouwd voor klusbedrijven, aannemers, schilders en bouw-ZZP\'ers in Nederland. Geen opstartkosten.',
        'waas.hero.badge': '🔨 Speciaal voor Aannemers & Klusbedrijven',
        'waas.hero.title': 'Professionele Websites voor de Bouw. Nul Opstartkosten.',
        'waas.hero.subtitle': 'Ontvang een website van topklasse die uw projecten toont, nieuwe offerte-aanvragen genereert en perfect werkt. Volledig beheerd, SEO/GEO geoptimaliseerd, met €0 aanbetaling.',
        'waas.cta.get_started': 'Vraag Nu Een Offerte Aan',
        'waas.cta.view_example': 'Bekijk Demo Website',
        'waas.cta.explore': 'Bekijk Tarieven',
        
        'waas.features.title': 'Ontworpen voor Maximale Conversie',
        'waas.features.subtitle': 'Wij bouwen niet zomaar websites; wij ontwerpen hoogwaardige digitale verkoopmachines speciaal afgestemd op Nederlandse klusbedrijven en aannemers.',
        'waas.feature.whatsapp.title': 'Directe WhatsApp-integratie',
        'waas.feature.whatsapp.desc': 'Een zwevende WhatsApp-widget met hoge conversie stelt potentiële klanten in staat om direct met u te chatten, wat de drempel voor boekingen met 40% verlaagt.',
        'waas.feature.offerte.title': 'Slimme "Offerte aanvragen" Formulieren',
        'waas.feature.offerte.desc': 'Eenvoudig te gebruiken formulieren voor offerte-aanvragen, ontworpen voor een hoge respons. Ontvang gekwalificeerde bouw-leads direct in uw inbox.',
        'waas.feature.seo.title': 'Geoptimaliseerd voor AI en Google (SEO/GEO)',
        'waas.feature.seo.desc': 'Vanaf de basis opgebouwd om hoog te scoren in Google en aanbevolen te worden door LLM\'s zoals ChatGPT, Gemini en Claude voor lokale diensten.',
        'waas.feature.support.title': 'WhatsApp Content Ondersteuning',
        'waas.feature.support.desc': 'Heeft u een dak gerenoveerd, een aanbouw geplaatst of een badkamer betegeld? Stuur ons foto\'s en tekst direct vanaf de bouwplaats via WhatsApp. Wij plaatsen het binnen 24 uur prachtig online!',

        'waas.pricing.title': 'Eenvoudige, Transparante Prijzen',
        'waas.pricing.subtitle': 'Kies het model dat bij uw cashflow past. Beide opties zijn inclusief premium design, responsiviteit en uitstekende prestaties voor uw bedrijf.',
        
        'waas.plan.classic.title': 'Klassiek Model',
        'waas.plan.classic.subtitle': 'Eenmalige betaling + basisonderhoud',
        'waas.plan.classic.setup_price': '€399 – €499',
        'waas.plan.classic.setup_period': 'eenmalige opstartkosten',
        'waas.plan.classic.monthly_price': '€39.99',
        'waas.plan.classic.monthly_period': 'per maand',
        'waas.plan.classic.desc': 'Ideaal voor ondernemers die vanaf dag één het volledige eigendom van hun website willen, met lage lopende onderhoudskosten.',
        'waas.plan.classic.feat1': 'Volledig eigendom van ontwerp & code',
        'waas.plan.classic.feat2': 'Premium hosting & SSL-beveiliging',
        'waas.plan.classic.feat3': 'Officiële .nl of .com domeinregistratie',
        'waas.plan.classic.feat4': 'Regelmatige technische & plug-in updates',
        'waas.plan.classic.feat5': 'Basis contentwijzigingen zelf beheren',
        
        'waas.plan.waas.title': 'Website as a Service (WaaS)',
        'waas.plan.waas.subtitle': 'Nul aanbetaling + volledig beheer',
        'waas.plan.waas.setup_price': '€0',
        'waas.plan.waas.setup_period': 'geen opstartkosten',
        'waas.plan.waas.monthly_price': '€79.99',
        'waas.plan.waas.monthly_period': 'per maand',
        'waas.plan.waas.desc': 'De ultieme zorgeloze oplossing. Wij ontwerpen, hosten, beveiligen en updaten uw website continu, zodat u zich kunt richten op uw bouwprojecten.',
        'waas.plan.waas.feat1': '€0 opstartkosten (Geen financieel risico vooraf)',
        'waas.plan.waas.feat2': 'All-inclusive premium cloudhosting & SSL',
        'waas.plan.waas.feat3': 'Wekelijkse beveiligde back-ups & spambeveiliging',
        'waas.plan.waas.feat4': 'WhatsApp Content Support (15-20 min/mnd inbegrepen)',
        'waas.plan.waas.feat5': 'Flexibele contracten van 12 of 24 maanden',
        
        'waas.partner.badge': 'Officiële Boekhoudpartner',
        'waas.partner.title': 'Hulp nodig met uw ZZP/EMZ boekhouding & registratie?',
        'waas.partner.subtitle': 'We zijn een samenwerking aangegaan met TaxUA om het runnen van uw bedrijf in Nederland eenvoudig te maken.',
        'waas.partner.promo_title': 'Exclusieve Partneraanbieding:',
        'waas.partner.item1': 'EMZ/ZZP Boekhouding: Vanaf €50 / maand',
        'waas.partner.item2': 'EMZ/ZZP Registratie: Gratis**',
        'waas.partner.link_text': 'Bezoek TaxUA.nl',

        'waas.faq.title': 'Veelgestelde vragen over WaaS',
        'waas.faq.q1': 'Wat is Website as a Service (WaaS)?',
        'waas.faq.a1': 'WaaS is een all-in-one abonnement. In plaats van duizenden euro\'s vooraf te betalen voor ontwerp en ontwikkeling, betaalt u een vast maandelijks bedrag. Wij bouwen, hosten, beveiligen en updaten de site voor u.',
        'waas.faq.q2': 'Wat is de contractduur voor Optie 2 (WaaS)?',
        'waas.faq.a2': 'Optie 2 is gebaseerd op een minimale contractduur van 12 of 24 maanden. Als u het contract eerder wilt beëindigen, blijft de website eigendom van TheGenAI, of kunt u deze overnemen voor het reguliere eenmalige ontwikkelingstarief (€499).',
        'waas.faq.q3': 'Hoe werkt de WhatsApp Content Ondersteuning?',
        'waas.faq.a3': 'Dit is onze absolute succesformule! Zodra u een klus heeft afgerond, een dak heeft gerenoveerd of een kamer heeft geverfd, stuurt u ons gewoon foto\'s en een korte tekst via WhatsApp. Wij zorgen dat het binnen 24 uur prachtig in uw online portfolio staat.',
        'waas.faq.q4': 'Zijn de websites geoptimaliseerd voor Google en AI?',
        'waas.faq.a4': 'Absoluut. Elke site die we bouwen is geoptimaliseerd met Generative Engine Optimization (GEO) en reguliere SEO-best practices. Dit zorgt ervoor dat zoekmachines en AI-assistenten (zoals ChatGPT of Claude) uw diensten gemakkelijk kunnen vinden en aanbevelen.',

        // Portfolio section
        'portfolio.title': 'Uitgelicht Portfolio',
        'portfolio.subtitle': 'AI-oplossingen uit de echte wereld die meetbare resultaten opleveren',
        'portfolio.filter.all': 'Alle Oplossingen',
        'portfolio.filter.proptech': 'PropTech & Vastgoed',
        'portfolio.filter.b2b': 'B2B & SaaS Tools',
        'portfolio.filter.platforms': 'Publieke Platforms',
        'portfolio.bedankt.title': 'Bedankt.me',
        'portfolio.bedankt.category': 'Digitaal Dankbaarheidsplatform',
        'portfolio.bedankt.description': 'Een modern, gebruiksvriendelijk eCard-platform dat groepskaarten en werknemerserkenning naar een hoger niveau tilt. Gebouwd met een focus op eenvoud, responsiviteit en een premium design om teams en individuen te helpen samen de momenten van het leven te vieren.',
        'portfolio.woonprijs.title': 'Woonprijs.nl',
        'portfolio.woonprijs.category': 'AI Platform voor Vastgoed',
        'portfolio.woonprijs.description': 'Ontwikkeld een uitgebreid AI-aangedreven vastgoedwaarderingplatform dat meerdere gegevensbronnen samenbrengt om nauwkeurige prijsschattingen, buurtdemografie en intelligente biedingsadviezen te bieden voor de Nederlandse vastgoedmarkt.',
        'portfolio.wheretoinvest.badge': '⚡ Live Case Study: Gebouwd in minder dan 8 uur',
        'portfolio.wheretoinvest.title': 'WhereToInvest.nl',
        'portfolio.wheretoinvest.category': 'Investeringsanalyse Platform',
        'portfolio.wheretoinvest.description': 'Een live case study van een 8-uurs MVP: binnen één werkdag van concept tot live productieplatform gerealiseerd. Analyseert markttrends, huuropbrengsten en waardestijgingspotentieel voor vastgoedbeleggers in Nederland.',
        'portfolio.roundrobin.title': 'Round Robin Shift Manager voor Confluence',
        'portfolio.roundrobin.category': 'Confluence Workflow Automatisering',
        'portfolio.roundrobin.description': 'Een uitgebreide Atlassian Marketplace-app die roterende teamverantwoordelijkheden, oproepdiensten en ondersteuningsschema\'s automatiseert. Voorzien van real-time aftellers, geautomatiseerde rotatielogica en een volledige historiek van diensten, direct geïntegreerd in Confluence.',
        'portfolio.linkedinformatter.title': 'LinkedIn Formatter',
        'portfolio.linkedinformatter.category': 'Content Creatie Tool',
        'portfolio.linkedinformatter.description': 'Een gespecialiseerde tool die ervoor zorgt dat je opgemaakte tekst (vetgedrukt en cursief) behouden blijft bij het plakken in LinkedIn. De tool detecteert en verwijdert ook automatisch veelvoorkomende AI-gegenereerde "slop" om je berichten authentieker en professioneler te maken.',
        'portfolio.tendermaat.title': 'TenderMaat.nl',
        'portfolio.tendermaat.category': 'AI Tender Analyse Platform',
        'portfolio.tendermaat.description': 'Een AI-gestuurd platform voor Nederlandse bedrijven om openbare aanbestedingen van TenderNed te analyseren. Het biedt direct Go/No-Go advies, kwalificatiechecklists en strategisch biedingsadvies.',
        'portfolio.fluitvoormij.title': 'FluitVoorMij.nl',
        'portfolio.fluitvoormij.category': 'Sport Automatisering Platform',
        'portfolio.fluitvoormij.description': 'Een gespecialiseerd platform dat scheidsrechtertoewijzingen voor voetbalclubs in Nederland automatiseert. Het stroomlijnt de communicatie, beheert beschikbaarheid en zorgt voor een eerlijke rotatie van clubscheidsrechters.',
        'portfolio.dovidka.title': 'Dovidka.nl',
        'portfolio.dovidka.category': 'Kennis- en Integratieplatform',
        'portfolio.dovidka.description': 'Een uitgebreid informatieplatform en kennisbank voor de Oekraïense gemeenschap in Nederland. Bevat 40+ gestructureerde gidsen over wonen, ZZP-belastingen, zorg, onderwijs, gemeentelijke registratie en een geauditeerd register van erkende professionals.',
        'portfolio.socialehuurgids.title': 'SocialeHuurGids.nl',
        'portfolio.socialehuurgids.category': 'Sociale Huur Navigatieplatform',
        'portfolio.socialehuurgids.description': 'Een uitgebreid navigatieplatform en strategiegids voor de Nederlandse sociale huursector. Helpt woningzoekenden het gereguleerde huursysteem te doorgronden, jarenlange wachtlijsten te omzeilen via lotingwoningen, urgentieverklaringen aan te vragen en huurtoeslag te berekenen.',
        'portfolio.kerntest.badge': '⚡ Live Case Study: Gebouwd in minder dan 8 uur',
        'portfolio.kerntest.title': 'Kerntest.nl',
        'portfolio.kerntest.category': 'Psychometrisch & Assessment Platform',
        'portfolio.kerntest.description': 'Een wetenschappelijk onderbouwd psychometrisch testplatform in Nederland. Biedt gevalideerde assessments waaronder de Big Five (OCEAN/IPIP-50), 16 Persoonlijkheidstypes, DISC, Kernkwadranten (Ofman) en Hechtingsstijlen met gekalibreerde scoring, profielanalyses en diepgaande psychologische rapportages.',
        'portfolio.padelmath.title': 'PadelMath.com',
        'portfolio.padelmath.category': 'Padel Analytics & Materiaalplatform',
        'portfolio.padelmath.description': 'Een datagedreven sportanalyse- en beslissingsplatform voor padelspelers en baaneigenaren. Biedt objectieve racket fit-algoritmes, specificatiedatabases en financiële haalbaarheidsmodellen voor padelbanen.',
        'portfolio.btn.view': 'Bekijk Project',

        // Contact section
        'contact.title': 'Klaar om Uw Bedrijf te Transformeren?',
        'contact.subtitle': 'Laten we bespreken hoe AI uw groei kan versnellen',
        'contact.info.title': 'Neem Contact Op',
        'contact.info.description': 'We zijn altijd enthousiast om aan nieuwe projecten te werken en bedrijven te helpen de kracht van kunstmatige intelligentie te benutten.',
        'contact.form.name': 'Uw Naam',
        'contact.form.email': 'Uw E-mail',
        'contact.form.company': 'Bedrijfsnaam',
        'contact.form.message': 'Vertel ons over uw project',
        'contact.form.submit': 'Verstuur Bericht',

        // Process Section (How it Works)
        'process.title': 'Proof-of-Value Sprint',
        'process.subtitle': 'Van idee naar werkend prototype in één werkdag.',
        'process.step1.title': 'Ontdekking',
        'process.step1.duration': '1 Uur',
        'process.step1.text': 'We identificeren het kernprobleem en definiëren de "magic" feature.',
        'process.step2.title': 'Architectuur',
        'process.step2.duration': '2 Uur',
        'process.step2.text': 'We ontwerpen de datastromen en UI-structuur.',
        'process.step3.title': 'Core Bouw',
        'process.step3.duration': '4 Uur',
        'process.step3.text': 'We ontwikkelen de primaire AI-functionaliteit en gebruikersinterface.',
        'process.step4.title': 'Overdracht',
        'process.step4.duration': '1 Uur',
        'process.step4.text': 'We verfijnen de UX en leveren uw werkende prototype op. (Bewezen met WhereToInvest.nl — bedacht, gecodeerd en gelanceerd in een 8-uurs sprint).',
        'process.step5.title': 'Volgende stap: Hardening',
        'process.step5.duration': 'Vervolgstap',
        'process.step5.text': 'We bepalen het traject naar productie (optioneel).',

        // FAQ Section
        'faq.title': 'Veelgestelde Vragen',
        'faq.subtitle': 'Alles wat u moet weten over onze AI-oplossingen.',
        'faq.q1': 'Kunnen jullie echt een prototype bouwen in 8 uur?',
        'faq.a1': 'Ja. Door te focussen op de "magic" feature en gebruik te maken van vooraf gebouwde componenten, leveren we hoogwaardige, gerichte resultaten die echte problemen oplossen.',
        'faq.q2': 'Heb ik een technische achtergrond nodig?',
        'faq.a2': 'Nee. Onze workshops en prototypes zijn ontworpen om de kloof tussen zakelijke ideeën en technische realiteit voor iedereen te overbruggen.',
        'faq.q3': 'Wat gebeurt er na de 8 uur?',
        'faq.a3': 'U ontvangt een werkend prototype van uw kernfeature inclusief de volledige broncode. Production hardening — geautomatiseerde tests, CI/CD, beveiligingsaudits, logging en productie-infrastructuur — is een afzonderlijke, afgebakende vervolgfase, zodat u pas investeert nadat waarde is bewezen.',
        'faq.q4': 'Waar is TheGenAI actief?',
        'faq.a4': 'TheGenAI is gevestigd in Amsterdam, Nederland en bedient klanten in heel Europa met workshops en advies, zowel op locatie als op afstand.',
        'faq.q5': 'Hoe boek ik een workshop of bestel ik een MVP?',
        'faq.a5': 'Mail ons op info@thegenai.nl of vul het contactformulier in op onze website om te starten.',
        'faq.q6': 'Hoe waarborgt TheGenAI enterprise databeveiliging, privacy en de EU AI Act?',
        'faq.a6': 'Wij hanteren enterprise-grade beveiliging en volledige compliance met de EU AI Act en AVG/GDPR. Onze oplossingen kunnen 100% privé worden geïmplementeerd binnen uw enterprise VPC (AWS, Azure, GCP) of op eigen servers, met gegarandeerd zero data retention en zonder dat uw data wordt gebruikt voor modeltraining. Lees meer op onze pagina <a href="/security/">Beveiliging en dataverwerking</a>.',
        'faq.q7': 'Hoe documenteren en moderniseren jullie ongedocumenteerde legacy codebases?',
        'faq.a7': 'We zetten gespecialiseerde statische analyse-engines en private LLM-agenten in om servicegrenzen, datastromen, databaseschema\'s en API-contracten te vertalen naar levende architectuurschema\'s en OpenAPI-specificaties. Ook bouwen we context-lagen (AGENTS.md, llms.txt) waarmee moderne AI coding assistants veilig met uw codebase kunnen werken zonder te hallucineren.',
        'faq.q8': 'Wat kosten jullie diensten?',
        'faq.a8': 'Wij hanteren transparante, vaste prijzen: AI Readiness Scan (€3.900 vast), 8-uurs Proof-of-Value Sprint (€2.900 vast), Legacy Codebase Intelligence (pilot vanaf €5.500, volledige codebase vanaf €15.000, waarbij pilotkosten worden verrekend met een vervolgtraject), Production Hardening (€1.000/dag of €4.750 voor 5 dagen) en Developer Workshops (halve dag €2.000, hele dag €3.500). Website as a Service (WaaS) biedt pakketten vanaf €0 opstartkosten.',
        'faq.q9': 'Wie is eigenaar van de broncode?',
        'faq.a9': 'U bent de eigenaar. De opdrachtgever bezit 100% van de opgeleverde deliverables en maatwerkcode, zoals contractueel vastgelegd. Er is geen sprake van vendor lock-in.',
        'faq.q10': 'Wat houdt de AI-geletterdheidssessie in?',
        'faq.a10': 'De AI-geletterdheidssessie is een interactieve workshop van een halve dag die aansluit bij de verplichting tot AI-geletterdheid onder de Europese AI Act voor organisaties die AI-systemen inzetten. Het biedt praktische richtlijnen voor verantwoord, veilig en compliant AI-gebruik.',
        'faq.q11': 'Hoe voorkomt Codebase Intelligence een risicovolle "Big Bang" softwareherbouw?',
        'faq.a11': 'In plaats van een jarenlang herschrijftraject waarbij de business stilstaat, brengt onze codebase intelligence alle datastromen en afhankelijkheden in kaart. Hierdoor past u veilig het Strangler Fig-patroon toe: stapsgewijze modernisering per module zonder downtime of risico op ontbrekende bedrijfslogica.',
        'faq.q12': 'Hoe lost Codebase Intelligence het sleutelpersoonrisico op bij vertrek van ontwikkelaars?',
        'faq.a12': 'Wij extraheren impliciete kennis en ongedocumenteerde regels direct uit de code en git-geschiedenis naar actuele architectuurkaarten, API-contracten en AI-contextlagen (AGENTS.md, llms.txt). Hierdoor blijft bedrijfskennis gewaarborgd en werken nieuwe ontwikkelaars in dagen in plaats van maanden in.',

        // Newsletter
        'newsletter.title': 'Blijf Voorop met AI',
        'newsletter.subtitle': 'Ontvang de nieuwste inzichten en verdiepingen van onze blog in uw inbox.',
        'newsletter.placeholder': 'Uw E-mailadres',
        'newsletter.btn': 'Inschrijven',

        // Footer
        'footer.description': 'Intelligente oplossingen creëren voor de uitdagingen van morgen.',
        'footer.services.title': 'Diensten',
        // Diensten: Forward Deployed Engineer
        'services.fde.badge': 'Nieuw • Embedded AI',
        'services.fde.title': 'Forward Deployed Engineer (FDE)',
        'services.fde.description': 'Haal een ervaren AI-engineer direct in uw Nederlandse team (op locatie in Amsterdam/Randstad of hybride) om AI aan echte legacy-systemen te koppelen en binnen dagen productiesoftware te leveren.',
        'services.fde.price': '1-week Field Sprint €5.500 vast. Embedded FDE vanaf €7.500/mnd.',
        'services.fde.note': 'Sprint-fee 100% verrekend met maandretainer • Op locatie NL & Remote EU',
        'services.fde.cta': 'Bekijk FDE Dienst',

        // Blog: Forward Deployed Engineer
        'blog.fde.category': 'Forward Deployed Engineering • NL',
        'blog.fde.title': 'Wat is een Forward Deployed Engineer (FDE) — En waarom Nederlandse bedrijven hen inhuren in plaats van AI-bureaus',
        'blog.fde.description': 'Ontstaan bij Palantir en groot gemaakt door OpenAI en Anthropic: een Forward Deployed Engineer werkt direct in uw team en levert binnen dagen productie-AI in plaats van maandenlange adviestrajecten.',

        // Forward Deployed Engineer Pagina (NL)
        'fde.meta.title': 'Forward Deployed Engineer Nederland (FDE) | Embedded AI Engineer Inhuren — TheGenAI Amsterdam',
        'fde.meta.desc': 'Huur een ervaren Forward Deployed Engineer (FDE) in Nederland in. Op locatie of hybride in Amsterdam, Rotterdam, Utrecht & Eindhoven om productie-AI te bouwen, legacy-systemen te koppelen en binnen dagen ROI te leveren.',
        'fde.breadcrumb': 'Forward Deployed Engineer',
        'fde.hero.kicker': 'Forward Deployed Engineering • Nederland',
        'fde.hero.title': 'Forward Deployed Engineer in Nederland',
        'fde.hero.subtitle': 'Wacht geen 6 maanden op consultants met dikke rapporten of recruiters die senior AI-rollen niet ingevuld krijgen. Zet een ervaren Forward Deployed Engineer (FDE) direct in uw Nederlandse engineeringteam en breng AI binnen dagen naar productie.',
        'fde.hero.cta_primary': 'Plan een FDE Kennismaking',
        'fde.hero.cta_secondary': 'Bekijk Samenwerkingsvormen',
        'fde.hero.cta_guide': 'Wat is een FDE? Lees Gids',
        'fde.trust.1': 'Op locatie in Amsterdam & Randstad of Hybride NL',
        'fde.trust.2': 'Private VPC & EU AI Act / AVG (GDPR) Proof',
        'fde.trust.3': '100% Eigendom van Code & IP bij Klant',
        'fde.what.title': 'Waarom Nederlandse Bedrijven een Forward Deployed Engineer Inhuren',
        'fde.what.subtitle': 'Ontwikkeld bij Palantir en omarmd door OpenAI en Anthropic: de Forward Deployed Engineer dicht het gat tussen AI-modellen en de weerbarstige praktijk van uw bedrijfssystemen.',
        'fde.what.c1.title': 'Direct Embedded in Uw Team',
        'fde.what.c1.desc': 'Uw FDE draait mee in uw stand-ups, Slack/Teams en Git-repositories. Geen accountmanagers of junior-overdrachten — u werkt rechtstreeks met een principal AI-architect die zowel met stakeholders als developers schakelt.',
        'fde.what.c2.title': 'Bouwt Binnen Bestaande Legacy-Stacks',
        'fde.what.c2.desc': 'Echte bedrijven hebben geen schone greenfield-data. Wij koppelen RAG-pipelines, agentic workflows en LLM-integraties rechtstreeks aan uw bestaande ERP’s, API’s, SQL-databases en legacy-monolieten.',
        'fde.what.c3.title': 'Productie-ROI in Dagen, Niet Kwartalen',
        'fde.what.c3.desc': 'Geen eindeloze haalbaarheids-PDF’s, maar werkende software in productie in week één — inclusief geautomatiseerde evals, logging, beveiliging en een heldere overdracht.',
        'fde.compare.title': 'Forward Deployed Engineer vs. Consultancy & Werving',
        'fde.compare.subtitle': 'Hoe een embedded FDE van TheGenAI zich verhoudt tot traditionele IT-consultants en het aannemen van vast AI-personeel in Nederland.',
        'fde.table.h1': 'Onderdeel',
        'fde.table.h2': 'TheGenAI Forward Deployed Engineer',
        'fde.table.h3': 'Traditioneel AI / IT-Adviesbureau',
        'fde.table.h4': 'Vaste Senior AI Developer (NL)',
        'fde.table.r1c1': 'Tijd tot Eerste Productie-Release',
        'fde.table.r1c2': 'Dagen (Week 1)',
        'fde.table.r1c3': '3–6 maanden (discovery + offerte)',
        'fde.table.r1c4': '4–7 maanden (werving + inwerken)',
        'fde.table.r2c1': 'Wie Schrijft de Code',
        'fde.table.r2c2': 'Principal Architect (Founder-led)',
        'fde.table.r2c3': 'Partner verkoopt, juniors bouwen',
        'fde.table.r2c4': 'Eén aanname (wisselend niveau)',
        'fde.table.r3c1': 'Afstemming Business & Techniek',
        'fde.table.r3c2': 'Directe lijn van stakeholder naar code',
        'fde.table.r3c3': 'Vertraging door PM- & accountlagen',
        'fde.table.r3c4': 'Vereist intern productmanagement',
        'fde.table.r4c1': 'Legacy & Private VPC Integratie',
        'fde.table.r4c2': 'Direct (AWS/Azure/GCP/On-Prem)',
        'fde.table.r4c3': 'Vaak geïsoleerde PoC-sandboxes',
        'fde.table.r4c4': 'Trage interne opstart',
        'fde.table.r5c1': 'Risico & Commitment',
        'fde.table.r5c2': 'Start met 1-week sprint à €5.500',
        'fde.table.r5c3': '€50k–€200k+ vast contract',
        'fde.table.r5c4': 'Vaste loonkosten & arbeidsrechtelijk risico',
        'fde.process.title': 'Hoe Forward Deployed Engineering Werkt',
        'fde.process.subtitle': 'Een pragmatische veldaanpak gericht op snelheid, veiligheid en volledige onafhankelijkheid.',
        'fde.step1.kicker': 'Stap 01 • Dag 1–2',
        'fde.step1.title': 'Inbedden & Analyseren op de Werkvloer',
        'fde.step1.desc': 'We sluiten aan bij uw team op locatie in Amsterdam/Randstad of via uw ontwikkelomgeving, spreken met uw experts en identificeren het AI-knelpunt met de hoogste ROI.',
        'fde.step2.kicker': 'Stap 02 • Dag 3–10',
        'fde.step2.title': 'Ontwerpen & Live Zetten in Uw VPC',
        'fde.step2.desc': 'We bouwen en deployen de werkende AI-functie, agentic workflow of datapipeline direct in uw private cloud (AWS, Azure, GCP) of on-premise zonder externe data-retentie.',
        'fde.step3.kicker': 'Stap 03 • Doorlopend / Overdracht',
        'fde.step3.title': 'Production Hardening & Overdracht',
        'fde.step3.desc': 'We voegen geautomatiseerde tests, LLM-evals, logging, EU AI Act-waarborgen en AGENTS.md / llms.txt documentatie toe zodat uw eigen team alles zelfstandig kan beheren.',
        'fde.pricing.title': 'Transparante Samenwerkingsvormen',
        'fde.pricing.subtitle': 'Start laagdrempelig met een 1-week Field Sprint of haal direct een vaste Forward Deployed Engineer in huis.',
        'fde.plan1.name': 'FDE Field Sprint',
        'fde.plan1.sub': 'Bewijs productiewaarde in 5 werkdagen',
        'fde.plan1.period': 'Vast bedrag • 100% verrekend bij maandretainer',
        'fde.plan1.f1': '5 dagen embedded (op locatie NL of hybride)',
        'fde.plan1.f2': '1 werkende AI-integratie in uw repo/VPC',
        'fde.plan1.f3': 'Architectuurplan & knelpuntanalyse',
        'fde.plan1.f4': '100% eigendom van code en IP',
        'fde.plan.cta': 'Boek Field Sprint',
        'fde.plan2.badge': 'Meest Gekozen',
        'fde.plan2.name': 'Part-Time Embedded FDE',
        'fde.plan2.sub': '2–3 dagen/week naast uw eigen developers',
        'fde.plan2.period': 'Per maand • Flexibel maandelijks of per kwartaal',
        'fde.plan2.f1': 'Principal FDE in uw Slack, stand-ups & CI/CD',
        'fde.plan2.f2': 'End-to-end RAG, agents & legacy API-koppelingen',
        'fde.plan2.f3': 'Geautomatiseerde evals, tests & EU AI Act compliance',
        'fde.plan2.f4': 'Hands-on pair programming & kennisoverdracht',
        'fde.plan.cta2': 'Vraag Embedded FDE Aan',
        'fde.plan3.name': 'Full-Time Dedicated FDE',
        'fde.plan3.sub': 'Volledige capaciteit embedded AI-engineering',
        'fde.plan3.period': 'Per maand • Prioriteit op locatie in de Randstad',
        'fde.plan3.f1': 'Full-time toegewijde principal builder in uw team',
        'fde.plan3.f2': 'AI-transformatie & legacy-modernisering over meerdere systemen',
        'fde.plan3.f3': 'Directe workshops met directie en eindgebruikers',
        'fde.plan3.f4': 'Volledige production hardening & nette overdracht',
        'fde.plan.cta3': 'Bespreek Dedicated FDE',
        'fde.nl.title': 'Op Locatie & Hybride in Heel Nederland',
        'fde.nl.desc': 'Vanuit ons hoofdkantoor in Amsterdam (KVK 42019613) zet TheGenAI Forward Deployed Engineers in door de hele Randstad en Nederlandse tech-hubs — én remote in heel Europa. Of u nu een FinTech in Amsterdam bent, een logistiek bedrijf in Rotterdam, een SaaS scale-up in Utrecht of een hightech-speler in Eindhoven: wij werken waar uw team zit.',
        'fde.faq.title': 'Forward Deployed Engineer — Veelgestelde Vragen',
        'fde.faq.q1': 'Wat is een Forward Deployed Engineer (FDE)?',
        'fde.faq.a1': 'Een Forward Deployed Engineer (ontstaan bij Palantir en omarmd door OpenAI en Anthropic) is een senior software- en AI-engineer die direct meedraait in het team van de klant. In plaats van adviesrapporten te schrijven, koppelt een FDE AI aan uw echte systemen en levert hij werkende productiecode op.',
        'fde.faq.q2': 'Kan ik een Forward Deployed Engineer op locatie in Nederland inhuren?',
        'fde.faq.a2': 'Ja. Wij zijn gevestigd in Amsterdam en werken op locatie of hybride in Amsterdam, Rotterdam, Utrecht, Eindhoven en Den Haag, en remote door heel Europa.',
        'fde.faq.q3': 'Met welke tech stacks en AI-modellen werken jullie?',
        'fde.faq.a3': 'Wij werken binnen uw bestaande stack (Python, TypeScript/Node.js, Go, Java, .NET, PostgreSQL, Kubernetes) en deployen modellen (OpenAI, Anthropic Claude, Google Gemini, open-weights via Azure/AWS Bedrock/GCP Vertex) veilig binnen uw eigen VPC.',
        'fde.faq.q4': 'Hoe borgen jullie AVG (GDPR) en EU AI Act compliance?',
        'fde.faq.a4': 'Alle oplossingen draaien in uw eigen EU-VPC of on-premise met zero data retention en zonder training op uw bedrijfsdata. Audit logging, PII-maskering en EU AI Act-compliance worden vanaf dag één ingebouwd.',
        'fde.faq.q5': 'Wie is eigenaar van de broncode en het IP?',
        'fde.faq.a5': 'U — voor 100%. Alle code, pipelines, prompts en documentatie worden direct in uw eigen repositories opgeslagen zonder enige vendor lock-in.',
        'fde.cta.title': 'Klaar om een Forward Deployed Engineer in te zetten?',
        'fde.cta.desc': 'Vertel ons over uw AI-uitdaging of legacy-koppeling. Start met een 1-week Field Sprint (€5.500, 100% verrekend bij een retainer) of plan direct een technisch kennismakingsgesprek van 30 minuten met Dima Kalachniuk.',
        'fde.cta.btn': 'Plan Uw Kennismakingsgesprek',

        'footer.services.fde': 'Forward Deployed Engineer',
        'footer.services.legacy': 'Legacy Codebase Intelligence',
        'footer.services.readiness': 'AI Readiness Scan',
        'footer.services.pov': 'Proof-of-Value Sprint',
        'footer.services.hardening': 'Production Hardening',
        'footer.services.workshops': 'AI Workshops',
        'footer.services.waas': 'Website as a Service',
        'footer.company.title': 'Bedrijf',
        'footer.social.title': 'Connect',
        'footer.social.linkedin_company': 'LinkedIn (Bedrijf)',
        'footer.social.linkedin_founder': 'LinkedIn (Oprichter)',
        'footer.privacy': 'Privacybeleid',
        'footer.security': 'Beveiliging & Dataverwerking',
        'footer.copyright': '© 2026 TheGenAI. Alle rechten voorbehouden. KVK 42019613',

        // Security Page Dutch
        'security.title': 'Beveiliging en Dataverwerking - TheGenAI',
        'security.badge': 'Enterprise Beveiliging & Compliance',
        'security.heading': 'Beveiliging & Dataverwerking',
        'security.subtitle': 'Implementatie in uw private cloud, 100% eigendom van data en code, en conform de AVG/GDPR en EU AI Act.',
        'security.last_updated': 'Laatst bijgewerkt: oktober 2026',
        'security.intro': 'Bij TheGenAI zijn enterprise beveiliging, codevertrouwelijkheid en wetgevingscompliance vanaf dag één verankerd in onze werkwijze. Hier leest u precies hoe wij omgaan met uw infrastructuur, modellen en bedrijfsdata.',
        'security.vpc.title': '1. Private VPC & On-Premise Implementatie',
        'security.vpc.text': 'Alle AI-oplossingen, prototypes en agentic workflows kunnen volledig binnen uw eigen cloudomgeving (AWS, Microsoft Azure, Google Cloud Platform) of in afgeschermde on-premise omgevingen draaien. Er verlaat nooit broncode of data uw beveiligingsperimeter.',
        'security.retention.title': '2. Zero Data Retention & Geen Training op Klantdata',
        'security.retention.text': 'Wij hanteren strikte Zero Data Retention (ZDR) voorwaarden bij modelaanbieders. Uw codebases, architectuurschema\'s en bedrijfsgegevens worden enkel vluchtig verwerkt tijdens runtime en worden nooit opgeslagen of gebruikt om openbare of private AI-modellen te trainen.',
        'security.gdpr.title': '3. AVG/GDPR & EU AI Act-Conforme Architectuur',
        'security.gdpr.text': 'Als studio in Amsterdam ontwerpen we volgens privacy-by-design onder de AVG en sluiten we aan bij de vereisten van de Europese AI Act. We hanteren dataminimalisatie, human-in-the-loop controle voor agents, auditlogs en scholing in AI-geletterdheid.',
        'security.ownership.title': '4. 100% Eigendom van Code & IP',
        'security.ownership.text': 'Opdrachtgevers behouden het volledige eigendom over alle deliverables, repositories, architectuurkaarten en maatwerkcode. We bouwen op open standaarden zodat u nooit vastzit aan een leverancier.',
        'security.subprocessors.title': '5. Lijst van Subverwerkers',
        'security.subprocessors.text': 'Wij houden een minimale kring van geverifieerde infrastructuur-subverwerkers aan. Een actuele lijst met hostingregio\'s is op aanvraag beschikbaar.',
        'security.dpa.title': '6. Verwerkersovereenkomst (DPA)',
        'security.dpa.text': 'Wij verstrekken standaard, AVG-conforme verwerkersovereenkomsten met standaard contractbepalingen voor al onze zakelijke opdrachten en pilots.',
        'security.insurance.title': '7. Verzekering & Aansprakelijkheid',
        'security.insurance.text': 'TheGenAI beschikt over een beroepsaansprakelijkheids- en cyberverzekering afgestemd op softwareontwikkeling en zakelijke advisering.',
        'security.certifications.title': '8. Certificeringen & Standaarden',
        'security.certifications.text': 'Onze engineeringpraktijken volgen ISO/IEC 27001 beveiligingsrichtlijnen en de OWASP Top 10 voor LLM-applicaties.',

        // Blog Section
        'blog.page_title': 'Blog: AI Inzichten, Workshops & Prototyping - TheGenAI',
        'blog.page_description': 'Lees de nieuwste inzichten over kunstmatige intelligentie, prototyping en teamworkshops van TheGenAI. Gevestigd in Nederland.',
        'blog.title': 'Onze Blog',
        'blog.subtitle': 'Inzichten, nieuws en diepgaande duiken in de wereld van Artificial Intelligence.',
        'blog.read_more': 'Lees Meer',
        'blog.view_all': 'Bekijk alle artikelen',
        'blog.guide.category': 'Strategiegids',
        'blog.guide.title': 'Van Idee naar Lancering: Hoe je een Werkend AI MVP Bouwt in Slechts 8 Uur',
        'blog.guide.description': 'Praktische tips voor snelle prototyping. Leer de exacte strategie die we bij TheGenAI gebruiken om je idee in één dag te lanceren.',
        'blog.ide.category': 'AI Ontwikkeling',
        'blog.ide.title': 'Trae vs Antigravity vs Cursor: De Strijd van de AI IDE\'s',
        'blog.ide.description': 'Een diepe duik in de financiële impact, ontwikkelingssnelheid en codekwaliteit van de drie beste AI-gestuurde ontwikkelomgevingen.',
        'blog.geo.category': 'SEO & Marketing',
        'blog.geo.title': 'De Nieuwe SEO: Hoe u geciteerd wordt door LLM\'s',
        'blog.geo.description': 'De exacte blauwdruk die we gebruikten om ontdekt, gelezen en geciteerd te worden door de meest populaire AI-assistenten.',
        'blog.thinking.category': 'AI Architectuur',
        'blog.thinking.title': 'Waarom ik stopte met AI te vragen om "code" en begon te vragen om te "denken"',
        'blog.thinking.description': 'Ik veranderde mijn workflow naar een Two-Tier AI-architectuur. Ontdek het 2-stappen playbook dat ik gebruikte voor mijn laatste build.',
        'blog.trends.category': 'SEO & Agentic AI',
        'blog.trends.title': 'Supercharge je SEO direct in Claude Code & Antigravity: Introductie van trends-skill',
        'blog.trends.description': 'Verbind real-time Google Trends zoekgegevens rechtstreeks met je lokale codebase met Claude Code, Antigravity en Gemini.',
        'blog.gemini_flash.category': 'Autonome AI & Agents',
        'blog.gemini_flash.title': 'Google veranderde zojuist het AI-speelveld: Waarom Gemini 3.8 Flash meer is dan een budgetmodel',
        'blog.gemini_flash.description': 'Vergeet kleine snelheidsupgrades en lage API-rekeningen. Google heeft zijn budgetmodel herontworpen tot een autonome engineer voor agentische executie, zwaar programmeerwerk en cyberdefensie.',

        'blog.guide.page_title': '8-Uur MVP: Hoe je jouw AI-idee snel bouwt en lanceert - TheGenAI',
        'blog.guide.page_description': 'Praktische tips over hoe je in slechts 8 uur een werkende AI MVP bouwt. Leer de strategieën voor prototyping.',
        'blog.ide.page_title': 'Trae vs Antigravity vs Cursor: Welke AI IDE wint in 2026? - TheGenAI',
        'blog.ide.page_description': 'Vergelijking tussen Trae, Google Antigravity en Cursor. Een diepe duik in GPT 5.0, Gemini 3.1 Pro en Claude 3.6.',
        'blog.geo.page_title': 'De Nieuwe SEO: Hoe u geciteerd wordt door LLM\'s - TheGenAI',
        'blog.geo.page_description': 'Leer hoe u uw website optimaliseert voor AI-zoekmachines zoals ChatGPT, Gemini, Copilot en Claude. Ontdek Generative Engine Optimization (GEO).',
        'blog.thinking.page_title': 'Waarom ik stopte met AI te vragen om te coderen - TheGenAI',
        'blog.thinking.page_description': 'Gebruik het 2-stappen "Master Architect" playbook voor agentic workflows. Gebruik denkhulpmiddelen voor logica en coderingsmodellen voor uitvoering.',
        'blog.trends.page_title': 'Supercharge je SEO in Claude Code & Antigravity: Introductie van trends-skill - TheGenAI',
        'blog.trends.page_description': 'Supercharge je SEO rechtstreeks vanuit Claude Code & Antigravity met de open-source Agentic AI trends-skill.',
        'blog.gemini_flash.page_title': 'Waarom Gemini 3.8 Flash meer is dan een budgetmodel - TheGenAI',
        'blog.gemini_flash.page_description': 'Google heeft Gemini 3.8 Flash herontworpen tot een autonome engineer geoptimaliseerd voor multi-stap agentic executie en cyberverdediging.',

        // Privacy Policy Page
        'privacy.title': 'Privacybeleid - TheGenAI',
        'privacy.heading': 'Privacybeleid',
        'privacy.last_updated': 'Laatst Bijgewerkt: 29 maart 2026',
        'privacy.intro': 'Bij TheGenAI doen we er alles aan om uw privacy te beschermen en te zorgen voor een transparante ervaring op onze website.',
        
        'privacy.analytics.title': '1. Analytics & Tracking',
        'privacy.analytics.text': 'We gebruiken Umami Analytics om te begrijpen hoe bezoekers met onze website omgaan. Umami is een privacy-vriendelijke, cookieloze analytics-oplossing. Het verzamelt geen persoonlijk identificeerbare informatie (PII) en volgt u niet op verschillende websites. Alle gegevens worden geanonimiseerd en uitsluitend gebruikt om onze website-ervaring te verbeteren.',
        
        'privacy.contact.title': '2. Contactformulier & Gegevens',
        'privacy.contact.text': 'Wanneer u ons contactformulier invult, verzamelen we de informatie die u verstrekt (naam, e-mailadres, bedrijf en bericht) om op uw aanvraag te reageren. Deze gegevens worden veilig opgeslagen met Firebase Firestore. We gebruiken deze informatie niet voor marketingdoeleinden, tenzij u hier expliciet om vraagt, en we delen deze nooit met derden.',
        
        'privacy.cookies.title': '3. Cookies',
        'privacy.cookies.text': 'Onze website gebruikt geen niet-essentiële tracking cookies. We geven prioriteit aan uw privacy door moderne, cookieloze alternatieven te gebruiken voor analytics. Sommige functionele cookies kunnen worden gebruikt door onze hostingprovider (Firebase) om de veiligheid en stabiliteit van de site te garanderen.',
        
        'privacy.rights.title': '4. Uw Rechten',
        'privacy.rights.text': 'Onder de AVG heeft u het recht om uw persoonlijke gegevens in te zien, te corrigeren of te laten verwijderen. Als u een contactformulier heeft ingediend en wilt dat uw gegevens worden verwijderd, neem dan contact met ons op via info@thegenai.nl.',
        
        'privacy.contact_us.title': '5. Contact met Ons Opnemen',
        'privacy.contact_us.text': 'Als u vragen heeft over dit Privacybeleid, neem dan contact met ons op via info@thegenai.nl.',

        // Studio Spec Panel
        'spec.title': 'DIENSTENMATRIX',
        'spec.meta': 'VASTE PRIJS · EUR',
        'spec.legacy.desc': 'Architectuurkaarten, OpenAPI-specs & AGENTS.md',
        'spec.legacy.unit': '1 wk pilot',
        'spec.pov.desc': 'Werkend prototype van uw belangrijkste AI-functie',
        'spec.pov.unit': '1 dag vast',
        'spec.readiness.desc': 'Geprioriteerde use-case- & risicoroadmap',
        'spec.readiness.unit': '1–2 weken',
        'spec.hardening.desc': 'Tests, security review, logging & overdracht',
        'spec.hardening.unit': '5-daags pakket',
        'spec.footer.left': '100% IP- & code-eigendom bij klant',
        'spec.footer.right': 'Amsterdam · Europa',

        // Deliverables Preview
        'deliverables.eyebrow': 'Concreet Resultaat',
        'deliverables.title': 'Wat uw team daadwerkelijk ontvangt',
        'deliverables.description': 'Geen PowerPoints die in een map verdwijnen. Elke opdracht wordt direct in uw repository opgeleverd als geversioneerde architectuurkaarten, API-contracten en AI-contextlagen.',
        'deliverables.item1': '<code>AGENTS.md</code> &amp; <code>llms.txt</code>-regels zodat coding agents legacy-grenzen respecteren',
        'deliverables.item2': 'Strangler Fig-afhankelijkheidskaart &amp; OpenAPI 3.1-contracten',
        'deliverables.item3': '100% klanteigen broncode, tests &amp; VPC-deploymenthandleiding',
        'deliverables.link_llms': 'Bekijk onze live /llms.txt →',
        'deliverables.link_security': 'Security &amp; VPC-verwerking →',

        // Blog eyebrow
        'blog.eyebrow': 'Artikelen',

        // Contact Service Select
        'contact.form.service.placeholder': 'Kies een dienst (optioneel)',
        'contact.form.service.legacy': 'Legacy Codebase Intelligence (vanaf €5.500)',
        'contact.form.service.pov': 'Proof-of-Value Sprint — 8 uur (€2.900)',
        'contact.form.service.readiness': 'AI Readiness Scan (€3.900)',
        'contact.form.service.hardening': 'Production Hardening (vanaf €4.750)',
        'contact.form.service.workshops': 'AI Workshops voor Developer Teams (vanaf €2.000)',
        'contact.form.service.waas': 'Website as a Service (WaaS)'
    }
};

// Language detection and translation system
class TranslationManager {
    constructor() {
        this.currentLanguage = this.detectLanguage();
        this.init();
    }

    detectLanguage() {
        // Check URL parameter first
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');
        if (urlLang && translations[urlLang]) {
            return urlLang;
        }

        // Check browser language
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('nl')) {
            return 'nl';
        }

        // Default to English
        return 'en';
    }

    init() {
        this.applyLanguage(this.currentLanguage);
        this.updateMetaTags();
        this.updateStructuredData();
        this.addLanguageToggle();
    }

    applyLanguage(lang) {
        this.currentLanguage = lang;

        // Update HTML lang attribute
        document.getElementById('html-lang').setAttribute('lang', lang);

        // Update all translatable elements
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                if (translations[lang][key].includes('<')) {
                    element.innerHTML = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        // Update placeholder attributes
        const inputs = document.querySelectorAll('input[data-translate], textarea[data-translate]');
        inputs.forEach(input => {
            const key = input.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                input.setAttribute('placeholder', translations[lang][key]);
            }
        });

        // Store language preference
        localStorage.setItem('thegenai-language', lang);
    }

    updateMetaTags() {
        const lang = this.currentLanguage;

        // Update page title only if it has data-translate attribute
        const titleEl = document.getElementById('page-title');
        if (titleEl && titleEl.hasAttribute('data-translate')) {
            const key = titleEl.getAttribute('data-translate');
            if (translations[lang][key]) {
                titleEl.textContent = translations[lang][key];
                document.title = translations[lang][key];
            }
        }

        // Update meta description
        const descEl = document.getElementById('page-description');
        if (descEl && descEl.hasAttribute('data-translate')) {
            const key = descEl.getAttribute('data-translate');
            if (translations[lang][key]) {
                descEl.setAttribute('content', translations[lang][key]);
            }
        }

        // Update Open Graph tags
        const ogTitleEl = document.getElementById('og-title');
        if (ogTitleEl && ogTitleEl.hasAttribute('data-translate')) {
            const key = ogTitleEl.getAttribute('data-translate');
            if (translations[lang][key]) {
                ogTitleEl.setAttribute('content', translations[lang][key]);
            }
        }

        const ogDescEl = document.getElementById('og-description');
        if (ogDescEl && ogDescEl.hasAttribute('data-translate')) {
            const key = ogDescEl.getAttribute('data-translate');
            if (translations[lang][key]) {
                ogDescEl.setAttribute('content', translations[lang][key]);
            }
        }

        // Update Twitter tags
        const twitterTitleEl = document.getElementById('twitter-title');
        if (twitterTitleEl && twitterTitleEl.hasAttribute('data-translate')) {
            const key = twitterTitleEl.getAttribute('data-translate');
            if (translations[lang][key]) {
                twitterTitleEl.setAttribute('content', translations[lang][key]);
            }
        }

        const twitterDescEl = document.getElementById('twitter-description');
        if (twitterDescEl && twitterDescEl.hasAttribute('data-translate')) {
            const key = twitterDescEl.getAttribute('data-translate');
            if (translations[lang][key]) {
                twitterDescEl.setAttribute('content', translations[lang][key]);
            }
        }

        // Update language meta tag
        const languageMeta = document.querySelector('meta[name="language"]');
        if (languageMeta) {
            languageMeta.setAttribute('content', lang);
        }

        // Update Open Graph locale
        const ogLocale = document.querySelector('meta[property="og:locale"]');
        if (ogLocale) {
            ogLocale.setAttribute('content', lang === 'nl' ? 'nl_NL' : 'en_US');
        }
    }

    updateStructuredData() {
        const lang = this.currentLanguage;
        const structuredData = document.getElementById('structured-data');

        if (structuredData) {
            const data = JSON.parse(structuredData.textContent);
            data.description = translations[lang]['page-description'];

            // Update structured data with translated content
            structuredData.textContent = JSON.stringify(data);
        }
    }

    addLanguageToggle() {
        const toggle = document.getElementById('header-lang-toggle');
        if (!toggle) return;

        toggle.innerHTML = this.currentLanguage === 'nl' ? 'EN' : 'NL';
        toggle.title = this.currentLanguage === 'nl' ? 'Switch to English' : 'Schakel naar Nederlands';

        toggle.addEventListener('click', () => {
            const newLang = this.currentLanguage === 'nl' ? 'en' : 'nl';
            this.switchLanguage(newLang);
        });
    }

    switchLanguage(lang) {
        // Update URL without page reload
        const url = new URL(window.location);
        url.searchParams.set('lang', lang);
        window.history.pushState({}, '', url);

        // Apply new language
        this.applyLanguage(lang);
        this.updateMetaTags();
        this.updateStructuredData();

        // Update language toggle
        const toggle = document.getElementById('header-lang-toggle');
        if (toggle) {
            toggle.innerHTML = lang === 'nl' ? 'EN' : 'NL';
            toggle.title = lang === 'nl' ? 'Switch to English' : 'Schakel naar Nederlands';
        }

        // Show notification
        this.showLanguageNotification(lang);

        // Track language change with Umami
        if (typeof window.umami !== 'undefined') {
            try {
                window.umami.track('language_change', {
                    new_language: lang,
                    previous_language: this.currentLanguage
                });
            } catch (error) {
                // Analytics tracking failed silently
            }
        }
    }

    showLanguageNotification(lang) {
        const message = lang === 'nl' ? 'Taal gewijzigd naar Nederlands' : 'Language changed to English';
        this.showNotification(message);
    }

    showNotification(message) {
        // Remove existing notifications
        const existingNotification = document.querySelector('.language-notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'language-notification';
        notification.textContent = message;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 120px;
            right: 20px;
            background: #09090b;
            border: 1px solid rgba(255, 255, 255, 0.14);
            color: white;
            padding: 10px 16px;
            border-radius: 6px;
            font-weight: 500;
            font-size: 13px;
            z-index: 10000;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Auto remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 3000);
    }
}

// Initialize translation system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TranslationManager();
});

// Handle browser back/forward navigation
window.addEventListener('popstate', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'en';
    if (window.translationManager) {
        window.translationManager.applyLanguage(lang);
    }
});
