// Translation system for TheGenAI website
const translations = {
    en: {
        // Meta tags
        'page-title': 'TheGenAI - AI Prototyping & Team Workshops across Europe',
        'page-description': 'TheGenAI offers rapid 8-hour AI prototyping and hands-on team workshops. Based in the Netherlands, serving all of Europe.',
        'og-title': 'TheGenAI - AI Prototyping & Team Workshops across Europe',
        'og-description': 'TheGenAI offers rapid 8-hour AI prototyping and hands-on team workshops. Based in the Netherlands, serving all of Europe.',
        'twitter-title': 'TheGenAI - AI Prototyping & Team Workshops across Europe',
        'twitter-description': 'TheGenAI offers rapid 8-hour AI prototyping and hands-on team workshops. Based in the Netherlands, serving all of Europe.',

        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About Us',
        'nav.services': 'Services',
        'nav.portfolio': 'Portfolio',
        'nav.games': 'Games',
        'nav.contact': 'Contact',

        // Hero section
        'hero.title': 'AI Solutions That Transform Business',
        'hero.subtitle': 'We build production-ready AI prototypes in just 8 hours, and deliver comprehensive workshops to teach your teams how to do the same.',
        'hero.btn.explore': 'Explore Solutions',
        'hero.btn.portfolio': 'View Portfolio',

        // About section
        'about.title': 'About TheGenAI',
        'about.subtitle': 'We\'re passionate about creating AI solutions that make a real difference',
        'about.heading': 'Transforming Ideas into Intelligence',
        'about.text1': 'At TheGenAI, we specialize in developing cutting-edge artificial intelligence solutions tailored to meet the unique needs of businesses and individuals. Our team combines deep technical expertise with a deep understanding of real-world challenges.',
        'about.text2': 'We create intelligent systems that enhance productivity, improve decision-making, and drive innovation across various industries.',
        'about.stats.projects': 'Projects Completed',
        'about.stats.clients': 'Happy Clients',

        // Services section
        'services.title': 'Our AI Solutions',
        'services.subtitle': 'Comprehensive AI services designed to accelerate your business growth',
        'services.workshop.title': 'AI Team Workshops',
        'services.workshop.description': 'Empower your team with hands-on training to build AI prototypes and real-world projects over immersive sessions.',
        'services.prototype.title': 'Rapid AI Prototyping',
        'services.prototype.description': 'Hire us to design and build a working AI prototype for your future project in just 8 hours.',
        'services.consulting.title': 'AI Consulting',
        'services.consulting.description': 'Strategic guidance to help you identify AI opportunities and develop a comprehensive AI roadmap.',
        'services.dev.title': 'Software Development with AI',
        'services.dev.description': 'Custom software solutions powered by AI to automate workflows and enhance user experiences.',

        // Portfolio section
        'portfolio.title': 'Featured Portfolio',
        'portfolio.subtitle': 'Real-world AI solutions that deliver measurable results',
        'portfolio.bedankt.title': 'Bedankt.me',
        'portfolio.bedankt.category': 'Digital Gratitude Platform',
        'portfolio.bedankt.description': 'A modern, easy-to-use eCard platform that revolutionizes group greeting cards and employee recognition. Built with a focus on simplicity, responsiveness, and premium design to help teams and individuals celebrate life\'s moments together.',
        'portfolio.woonprijs.title': 'Woonprijs.nl',
        'portfolio.woonprijs.category': 'Real Estate AI Platform',
        'portfolio.woonprijs.description': 'Developed a comprehensive AI-powered property valuation platform that aggregates multiple data sources to provide accurate price estimates, neighborhood demographics, and intelligent bidding advice for the Dutch real estate market.',
        'portfolio.wheretoinvest.title': 'WhereToInvest.nl',
        'portfolio.wheretoinvest.category': 'Investment Analysis Platform',
        'portfolio.wheretoinvest.description': 'An advanced AI-driven platform for real estate investors that analyzes market trends, rental yields, and property appreciation potential to identify the best investment opportunities in the Netherlands.',
        'portfolio.roundrobin.title': 'Round Robin Shift Manager for Confluence',
        'portfolio.roundrobin.category': 'Confluence Workflow Automation',
        'portfolio.roundrobin.description': 'A comprehensive Atlassian Marketplace app that automates rotating team responsibilities, on-call duties, and support schedules. Features real-time countdowns, automated rotation logic, and a full audit trail of shift history, integrated directly into Confluence.',
        'portfolio.linkedinformatter.title': 'LinkedIn Formatter',
        'portfolio.linkedinformatter.category': 'Content Creation Tool',
        'portfolio.linkedinformatter.description': 'A specialized tool that ensures your formatted text (bold and italics) stays preserved when pasting into LinkedIn. The tool also automatically detects and removes common AI-generated "slop" to make your posts more authentic and professional.',
        'portfolio.btn.view': 'View Project',

        // Games section
        'games.title': 'AI & Strategy Games',
        'games.subtitle': 'Immersive experiences that blend strategy, management, and fun',
        'games.landlordje.title': 'Landlordje',
        'games.landlordje.category': 'Real Estate Strategy Game',
        'games.landlordje.description': 'Become the wealthiest landlord in the Netherlands. Start as a regular employee, save your wages, and build a property empire. Manage tenants, survive tax changes, and deal with broken washing machines in this realistic Dutch real estate simulator.',
        'games.btn.play': 'Play Game',

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

        // Footer
        'footer.description': 'Creating intelligent solutions for tomorrow\'s challenges.',
        'footer.services.title': 'Services',
        'footer.services.workshop': 'AI Workshops',
        'footer.services.prototype': 'Rapid Prototyping',
        'footer.services.consulting': 'AI Consulting',
        'footer.services.dev': 'Software Development',
        'footer.company.title': 'Company',
        'footer.social.title': 'Connect',
        'footer.social.linkedin_company': 'LinkedIn (Company)',
        'footer.social.linkedin_founder': 'LinkedIn (Founder)',
        'footer.privacy': 'Privacy Policy',
        'footer.copyright': '© 2026 TheGenAI. All rights reserved. KVK 42019613',

        // Blog Section
        'blog.title': 'Our Blog',
        'blog.subtitle': 'Insights, news, and deep dives into the world of Artificial Intelligence.',
        'blog.read_more': 'Read More',
        'blog.guide.category': 'Strategy Guide',
        'blog.guide.title': 'From Idea to Launch: How to Build a Working AI MVP in Just 8 Hours',
        'blog.guide.description': 'Practical tips for rapid prototyping. Learn the exact strategy we use at TheGenAI to launch your idea in a single day.',
        'blog.ide.category': 'AI Development',
        'blog.ide.title': 'Trae vs Antigravity vs Cursor: The Battle of AI IDEs',
        'blog.ide.description': 'A deep dive into the financial impact, development speed, and code quality of the top three AI-powered development environments.',

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
        'privacy.rights.text': 'Under the GDPR, you have the right to access, rectify, or erase your personal data. If you have submitted a contact form and wish to have your data removed, please contact us at info@thegenai.com.',
        
        'privacy.contact_us.title': '5. Contact Us',
        'privacy.contact_us.text': 'If you have any questions about this Privacy Policy, please contact us at info@thegenai.com.'
    },
    nl: {
        // Meta tags
        'page-title': 'TheGenAI - AI Prototyping & Team Workshops in heel Europa',
        'page-description': 'TheGenAI biedt snelle 8-uur AI-prototyping en praktische teamworkshops. Gevestigd in Nederland, actief in heel Europa.',
        'og-title': 'TheGenAI - AI Prototyping & Team Workshops in heel Europa',
        'og-description': 'TheGenAI biedt snelle 8-uur AI-prototyping en praktische teamworkshops. Gevestigd in Nederland, actief in heel Europa.',
        'twitter-title': 'TheGenAI - AI Prototyping & Team Workshops in heel Europa',
        'twitter-description': 'TheGenAI biedt snelle 8-uur AI-prototyping en praktische teamworkshops. Gevestigd in Nederland, actief in heel Europa.',

        // Navigation
        'nav.home': 'Home',
        'nav.about': 'Over Ons',
        'nav.services': 'Diensten',
        'nav.portfolio': 'Portfolio',
        'nav.games': 'Games',
        'nav.contact': 'Contact',

        // Hero section
        'hero.title': 'AI Oplossingen Die Bedrijven Transformeren',
        'hero.subtitle': 'Wij bouwen productieklare AI-prototypes in slechts 8 uur en geven uitgebreide workshops om uw teams te leren hetzelfde te doen.',
        'hero.btn.explore': 'Ontdek Oplossingen',
        'hero.btn.portfolio': 'Bekijk Portfolio',

        // About section
        'about.title': 'Over TheGenAI',
        'about.subtitle': 'We zijn gepassioneerd over het creëren van AI-oplossingen die echt verschil maken',
        'about.heading': 'Ideeën Omzetten in Intelligentie',
        'about.text1': 'Bij TheGenAI specialiseren we ons in het ontwikkelen van geavanceerde kunstmatige intelligentie-oplossingen die zijn afgestemd op de unieke behoeften van bedrijven en particulieren. Ons team combineert diepgaande technische expertise met een diep begrip van uitdagingen in de echte wereld.',
        'about.text2': 'We creëren intelligente systemen die productiviteit verhogen, besluitvorming verbeteren en innovatie stimuleren in verschillende industrieën.',
        'about.stats.projects': 'Projecten Voltooid',
        'about.stats.clients': 'Tevreden Klanten',

        // Services section
        'services.title': 'Onze AI Oplossingen',
        'services.subtitle': 'Uitgebreide AI-diensten ontworpen om uw bedrijfsgroei te versnellen',
        'services.workshop.title': 'AI Team Workshops',
        'services.workshop.description': 'Geef uw team praktische training om AI-prototypes en echte projecten te bouwen tijdens interactieve sessies.',
        'services.prototype.title': 'Snelle AI Prototyping',
        'services.prototype.description': 'Huur ons in om binnen 8 uur een werkend AI-prototype voor uw toekomstige project te ontwerpen en bouwen.',
        'services.consulting.title': 'AI Advies',
        'services.consulting.description': 'Strategische begeleiding om u te helpen AI-mogelijkheden te identificeren en een uitgebreide AI-roadmap te ontwikkelen.',
        'services.dev.title': 'Softwareontwikkeling met AI',
        'services.dev.description': 'Maatwerk software-oplossingen aangedreven door AI om workflows te automatiseren en gebruikerservaringen te verbeteren.',

        // Portfolio section
        'portfolio.title': 'Uitgelicht Portfolio',
        'portfolio.subtitle': 'AI-oplossingen uit de echte wereld die meetbare resultaten opleveren',
        'portfolio.bedankt.title': 'Bedankt.me',
        'portfolio.bedankt.category': 'Digitaal Dankbaarheidsplatform',
        'portfolio.bedankt.description': 'Een modern, gebruiksvriendelijk eCard-platform dat groepskaarten en werknemerserkenning naar een hoger niveau tilt. Gebouwd met een focus op eenvoud, responsiviteit en een premium design om teams en individuen te helpen samen de momenten van het leven te vieren.',
        'portfolio.woonprijs.title': 'Woonprijs.nl',
        'portfolio.woonprijs.category': 'AI Platform voor Vastgoed',
        'portfolio.woonprijs.description': 'Ontwikkeld een uitgebreid AI-aangedreven vastgoedwaarderingplatform dat meerdere gegevensbronnen samenbrengt om nauwkeurige prijsschattingen, buurtdemografie en intelligente biedingsadviezen te bieden voor de Nederlandse vastgoedmarkt.',
        'portfolio.wheretoinvest.title': 'WhereToInvest.nl',
        'portfolio.wheretoinvest.category': 'Investeringsanalyse Platform',
        'portfolio.wheretoinvest.description': 'Een geavanceerd AI-gestuurd platform voor vastgoedbeleggers dat markttrends, huuropbrengsten en waardestijgingspotentieel analyseert om de beste investeringsmogelijkheden in Nederland te identificeren.',
        'portfolio.roundrobin.title': 'Round Robin Shift Manager voor Confluence',
        'portfolio.roundrobin.category': 'Confluence Workflow Automatisering',
        'portfolio.roundrobin.description': 'Een uitgebreide Atlassian Marketplace-app die roterende teamverantwoordelijkheden, oproepdiensten en ondersteuningsschema\'s automatiseert. Voorzien van real-time aftellers, geautomatiseerde rotatielogica en een volledige historiek van diensten, direct geïntegreerd in Confluence.',
        'portfolio.linkedinformatter.title': 'LinkedIn Formatter',
        'portfolio.linkedinformatter.category': 'Content Creatie Tool',
        'portfolio.linkedinformatter.description': 'Een gespecialiseerde tool die ervoor zorgt dat je opgemaakte tekst (vetgedrukt en cursief) behouden blijft bij het plakken in LinkedIn. De tool detecteert en verwijdert ook automatisch veelvoorkomende AI-gegenereerde "slop" om je berichten authentieker en professioneler te maken.',
        'portfolio.btn.view': 'Bekijk Project',

        // Games section
        'games.title': 'AI & Strategy Games',
        'games.subtitle': 'Meeslepende ervaringen die strategie, management en plezier combineren',
        'games.landlordje.title': 'Landlordje',
        'games.landlordje.category': 'Vastgoed Strategie Spel',
        'games.landlordje.description': 'Word de rijkste verhuurder van Nederland. Begin als werknemer, spaar je salaris op en bouw een vastgoedimperium. Beheer huurders, overleef belastingwijzigingen en ga om met kapotte wasmachines in deze realistische Nederlandse vastgoedsimulator.',
        'games.btn.play': 'Speel Nu',

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

        // Footer
        'footer.description': 'Intelligente oplossingen creëren voor de uitdagingen van morgen.',
        'footer.services.title': 'Diensten',
        'footer.services.workshop': 'AI Workshops',
        'footer.services.prototype': 'Snelle Prototyping',
        'footer.services.consulting': 'AI Advies',
        'footer.services.dev': 'Softwareontwikkeling met AI',
        'footer.company.title': 'Bedrijf',
        'footer.social.title': 'Connect',
        'footer.social.linkedin_company': 'LinkedIn (Bedrijf)',
        'footer.social.linkedin_founder': 'LinkedIn (Oprichter)',
        'footer.privacy': 'Privacybeleid',
        'footer.copyright': '© 2026 TheGenAI. Alle rechten voorbehouden. KVK 42019613',

        // Blog Section
        'blog.title': 'Onze Blog',
        'blog.subtitle': 'Inzichten, nieuws en diepgaande duiken in de wereld van Artificial Intelligence.',
        'blog.read_more': 'Lees Meer',
        'blog.guide.category': 'Strategiegids',
        'blog.guide.title': 'Van Idee naar Lancering: Hoe je een Werkend AI MVP Bouwt in Slechts 8 Uur',
        'blog.guide.description': 'Praktische tips voor snelle prototyping. Leer de exacte strategie die we bij TheGenAI gebruiken om je idee in één dag te lanceren.',
        'blog.ide.category': 'AI Ontwikkeling',
        'blog.ide.title': 'Trae vs Antigravity vs Cursor: De Strijd van de AI IDE\'s',
        'blog.ide.description': 'Een diepe duik in de financiële impact, ontwikkelingssnelheid en codekwaliteit van de drie beste AI-gestuurde ontwikkelomgevingen.',

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
        'privacy.rights.text': 'Onder de AVG heeft u het recht om uw persoonlijke gegevens in te zien, te corrigeren of te laten verwijderen. Als u een contactformulier heeft ingediend en wilt dat uw gegevens worden verwijderd, neem dan contact met ons op via info@thegenai.com.',
        
        'privacy.contact_us.title': '5. Contact met Ons Opnemen',
        'privacy.contact_us.text': 'Als u vragen heeft over dit Privacybeleid, neem dan contact met ons op via info@thegenai.com.'
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
                element.textContent = translations[lang][key];
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

        // Update page title
        document.getElementById('page-title').textContent = translations[lang]['page-title'];
        document.title = translations[lang]['page-title'];

        // Update meta description
        document.getElementById('page-description').setAttribute('content', translations[lang]['page-description']);

        // Update Open Graph tags
        document.getElementById('og-title').setAttribute('content', translations[lang]['og-title']);
        document.getElementById('og-description').setAttribute('content', translations[lang]['og-description']);

        // Update Twitter tags
        document.getElementById('twitter-title').setAttribute('content', translations[lang]['twitter-title']);
        document.getElementById('twitter-description').setAttribute('content', translations[lang]['twitter-description']);

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
            background: rgba(102, 126, 234, 0.9);
            backdrop-filter: blur(10px);
            color: white;
            padding: 12px 20px;
            border-radius: 12px;
            font-weight: 500;
            font-size: 14px;
            z-index: 10000;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
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
