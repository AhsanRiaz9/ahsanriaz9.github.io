const portfolioData = {
  hero: {
    name: "Ahsan Riaz",
    jobTitles: ["Python Engineer", "Backend Developer", "AI & Automation Specialist"],
    description:
      "I am a Python Engineer with expertise in backend development, web scraping, and AI-driven SaaS platforms. I specialize in building scalable APIs, automation tools, and AI assistants that solve real business problems.",
    ctaText: "Explore My Work",
    secondaryCtaText: "Get In Touch",
  },
  stats: [
    { endValue: 5, label: "Years of Experience" },
    { endValue: 186, label: "Projects Completed" },
    { endValue: 42, label: "Clients Served" },
  ],
  skills: {
    "Backend Development": {
      list: ["Python", "Django", "FastAPI", "Flask", "DRF", "Celery"],
    },
    "Cloud & DevOps": {
      list: ["AWS (EC2, Lambda, S3)", "Docker", "Kubernetes", "CI/CD"],
    },
    "Databases & Caching": {
      list: ["PostgreSQL", "MySQL", "MongoDB", "OpenSearch", "Redis"],
    },
    "Frontend": {
      list: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    "AI/ML": {
      list: ["OpenAI", "LangChain", "LLMs", "RAG", "Hugging Face", "ElevenLabs", "Vapi"],
    },
  },
  projects: [
    {
      id: 1,
      title: "Price Comparison Tool",
      description:
        "Developed a platform to scrape and cross-reference 800,000+ SKUs from Amazon, eBay, Kogan, MyDeal, Catch, Trademe, and Rebeelo using Scrapy, Selenium, and FastAPI. Reduced retrieval time by 40% with OpenSearch indexing.",
      image: "https://placehold.co/800x600/0B2447/A5D7E8?text=Comparison+Tool",
      technologies: ["Python", "Scrapy", "Selenium", "FastAPI", "OpenSearch", "AWS"],
      features: [
        "Multi-marketplace product scraping",
        "Dynamic SKU assignment",
        "Proxy management",
        "API access for reporting",
      ],
    },
    {
      id: 2,
      title: "Auto-Beat Pricing Tool",
      description:
        "Built an automation tool that dynamically adjusted product prices based on competitor listings. Helped clients improve BuyBox wins by 25% through scheduled runs and pricing logic.",
      image: "https://placehold.co/800x600/19376D/A5D7E8?text=Auto-Beat",
      technologies: ["Python", "Scrapy", "FastAPI", "PostgreSQL", "AWS"],
      features: ["Dynamic pricing engine", "Competitive product analysis", "Google Sheets export"],
    },
    {
      id: 3,
      title: "Collings Real Estate AI Voice Agent",
      description:
        "Created an AI-powered voice agent integrated with Twilio and OpenAI. It qualified real estate leads through natural conversations, saving manual effort for sales teams.",
      image: "https://placehold.co/800x600/576CBC/A5D7E8?text=Voice+Agent",
      technologies: ["FastAPI", "Twilio", "OpenAI", "LLM", "React.js"],
      features: ["Voice-to-text AI integration", "Lead qualification automation", "Twilio telephony integration"],
    },
    {
      id: 4,
      title: "Justiciano (AI Legal Advisor)",
      description:
        "Developed an AI system for drafting legal documents with interactive Q&A flows powered by LLMs. Improved legal workflow efficiency by 70%.",
      image: "https://placehold.co/800x600/4F6D7A/A5D7E8?text=Justiciano",
      technologies: ["Python", "FastAPI", "OpenAI", "LangChain", "PostgreSQL"],
      features: ["AI-driven document drafting", "Smart legal Q&A", "Scalable API architecture"],
    },
    {
      id: 5,
      title: "GPT-Style Chatbot",
      description:
        "Built a SaaS chatbot platform with GPT integration, supporting chat history, message regeneration, and user sessions. Reduced support team workload by 40%.",
      image: "https://placehold.co/800x600/9A3B3B/A5D7E8?text=Chatbot",
      technologies: ["Python", "FastAPI", "OpenAI", "LangChain", "PostgreSQL"],
      features: ["Persistent chat history", "Message regeneration", "Secure user authentication"],
    },
  ],
  experience: [
    {
      title: "Python Engineer | Zaltech AI",
      duration: "2024 - Present",
      details: [
        "Developed AI-driven SaaS products like GPT chatbots, legal AI, and voice assistants.",
        "Deployed scalable APIs and microservices on AWS with Docker & Kubernetes.",
        "Collaborated with AI researchers to integrate LLMs into production systems.",
      ],
    },
    {
      title: "Software Engineer | OZ Teckwork",
      duration: "2023 - 2024",
      details: [
        "Designed backend services for e-commerce automation and scraping solutions.",
        "Implemented ETL pipelines for large-scale data collection.",
        "Integrated OpenSearch for high-performance queries and analytics.",
      ],
    },
    {
      title: "Software Engineer | Devsinc",
      duration: "2022 - 2023",
      details: [
        "Built REST APIs with Django and FastAPI for multiple SaaS platforms.",
        "Optimized backend services with Redis caching and Celery for async tasks.",
        "Collaborated with cross-functional teams to deliver production-ready apps.",
      ],
    },
    {
      title: "Software Engineer | Fiverr (Freelance)",
      duration: "Nov 2020 – Aug 2022",
      details: [
        "Delivered 200+ full-stack projects for international clients, ranging from debugging and optimization to end-to-end application development.",
        "Developed web and desktop applications using Python (Flask, Django), C#, and .NET, ensuring scalable and maintainable solutions.",
        "Designed relational databases (MySQL, SQLite) and implemented optimized queries for high-performance applications.",
        "Applied OOP and data structure principles to solve complex problems across different domains.",
        "Technologies: C/C++, Python, Java, C#, .NET, Flask, Django, HTML, CSS, JavaScript, jQuery, Bootstrap.",
        "Achieved Fiverr Level 2 Seller status with consistent client satisfaction and repeat business.",
      ],
    },

  ],
  testimonials: [
    {
      quote:
        "Ahsan is a skilled Python engineer who delivered our price automation platform flawlessly. He balanced scalability and performance perfectly.",
      author: "E-commerce Client",
    },
    {
      quote:
        "We worked with Ahsan on an AI chatbot project, and his ability to integrate LLMs into production was outstanding. Highly recommended.",
      author: "SaaS Product Manager",
    },
    ,{
      quote: 
      "Ahsan combines technical expertise with a strong work ethic. I highly recommend him as a dedicated and skilled Full Stack Developer.",
      author: "Muhammad Usman - AI Engineer at 10 Pearls"

    },
    {
      quote: 
      "Working with Ahsan was smooth thanks to his clear communication and quick delivery. He met all requirements while keeping me updated, and I’d highly recommend him for complex coding and development projects.",
      author: "Fiverr Client"
    }

  ],
  contact: {
    title: "Contact",
    successMessage: "Your message has been sent successfully!",
    errorMessage: "Please fill out all fields correctly to send your message.",
    cta: "Send Message",
  },
  footer: {
    github: "https://github.com/AhsanRiaz9/",
    linkedin: "https://www.linkedin.com/in/ahsan-riaz49/",
    email: "ahsan.m.riaz87004@gmail.com",
    copyright: "© 2025 Ahsan Riaz. All Rights Reserved.",
  },
};

export default portfolioData;
