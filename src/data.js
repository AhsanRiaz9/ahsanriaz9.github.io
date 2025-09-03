// Define the portfolio data directly in the file
const portfolioData = {
  hero: {
    name: "Ahsan Riaz",
    jobTitles: ["Software Engineer", "Full-Stack Developer", "AI Engineer"],
    description: "I'm a passionate software engineer with a knack for building scalable, high-performance applications. My expertise lies in full-stack development, leveraging data to drive decision-making and creating seamless user experiences. I thrive on solving complex problems and turning innovative ideas into reality.",
    ctaText: "Explore My Work",
    secondaryCtaText: "Get In Touch",
  },
  stats: [
    { endValue: 5, label: "Years of Experience" },
    { endValue: 25, label: "Projects Completed" },
    { endValue: 12, label: "Clients Served" },
  ],
  skills: {
    "Backend Development": {
      list: ["Python", "Go", "Node.js", "Django", "FastAPI"],
    },
    "Cloud & DevOps": {
      list: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    },
    "Databases & Caching": {
      list: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
    },
    "Frontend": {
      list: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    "AI/ML": {
      list: ["PyTorch", "TensorFlow", "scikit-learn", "Hugging Face"],
    },
  },
  projects: [
    {
      id: 1,
      title: "Scalable API Gateway",
      description: "Developed a high-performance API gateway using Python and FastAPI, handling over 1 million requests per day with sub-50ms latency.",
      image: "https://placehold.co/800x600/0B2447/A5D7E8?text=API",
      technologies: ["Python", "FastAPI", "Docker", "Kubernetes", "Redis"],
      features: ["High-throughput API routing", "Rate limiting and authentication", "Dynamic request caching", "Containerized deployment"],
    },
    {
      id: 2,
      title: "Real-time Data Processing Pipeline",
      description: "Engineered a data pipeline to process streaming data from IoT devices, built with Kafka and Spark, enabling real-time analytics.",
      image: "https://placehold.co/800x600/19376D/A5D7E8?text=Data",
      technologies: ["Kafka", "Spark", "Scala", "AWS EMR", "S3"],
      features: ["Scalable stream processing", "Fault-tolerant architecture", "Automated data validation", "Real-time dashboard integration"],
    },
    {
      id: 3,
      title: "AI-Powered Content Generator",
      description: "Created a backend service that uses a custom language model to generate content for marketing campaigns, reducing manual effort by 70%.",
      image: "https://placehold.co/800x600/576CBC/A5D7E8?text=AI",
      technologies: ["PyTorch", "Hugging Face", "FastAPI", "GCP", "Kubernetes"],
      features: ["Natural language generation", "Custom fine-tuned model", "RESTful API endpoint", "Scalable serving infrastructure"],
    },
  ],
  experience: [
    {
      title: "Senior Software Engineer | TechCorp Solutions",
      duration: "Jan 2022 - Present",
      details: ["Led a team of 5 engineers to re-architect a legacy backend system, improving performance by 200%.", "Designed and implemented a new microservice for user authentication using Flask and JWT.", "Mentored junior developers, promoting best practices in Python and software design patterns."],
    },
    {
      title: "Software Engineer | Innovate Labs",
      duration: "Jun 2018 - Dec 2021",
      details: ["Developed backend services for a SaaS product using Django, reducing development time by 30%.", "Collaborated with the data science team to integrate machine learning models into the product.", "Managed database migrations and schema updates with SQLAlchemy."],
    },
  ],
  testimonials: [
    { quote: "Alex's work ethic and deep understanding of Python are truly exceptional. He was a key player in our most complex projects and always delivered high-quality, maintainable code.", author: "Jane Smith, Engineering Manager" },
    { quote: "I highly recommend Alex for any backend role. His ability to design scalable systems and his dedication to clean code made our entire team more efficient.", author: "David Lee, Former Colleague" },
  ],
  contact: {
    title: "Contact",
    successMessage: "Your message has been sent successfully! We'll be in touch.",
    errorMessage: "Please fill out all fields correctly to send your message.",
    cta: "Send Message",
  },
  footer: {
    copyright: "© 2024 Alex Johnson. All Rights Reserved.",
  },
};

export default portfolioData;
