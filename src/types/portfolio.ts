// Hero Section
export interface HeroData {
  name: string;
  jobTitles: string[];
  description: string;
  ctaText: string;
  secondaryCtaText: string;
}

// Stats Section
export interface Stat {
  endValue: number;
  label: string;
}

// Projects Section
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
}

// Experience Section
export interface Experience {
  title: string;
  duration: string;
  details: string[];
}

// Testimonials Section
export interface Testimonial {
  quote: string;
  author: string;
}

// Skills Section
export interface SkillsCategory {
  list: string[];
}

export interface SkillsData {
  [key: string]: SkillsCategory;
}
