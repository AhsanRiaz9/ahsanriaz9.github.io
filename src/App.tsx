import React, { useState, useEffect, useRef } from 'react';
import type { FC } from 'react';

import portfolioData from './data';

// Define types for all data structures and components
interface HeroData {
    name: string;
    jobTitles: string[];
    description: string;
    ctaText: string;
    secondaryCtaText: string;
}

interface Stat {
    endValue: number;
    label: string;
}

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    features: string[];
}

interface Experience {
    title: string;
    duration: string;
    details: string[];
}

interface Testimonial {
    quote: string;
    author: string;
}

interface SkillsCategory {
    list: string[];
}

interface SkillsData {
    [key: string]: SkillsCategory;
}

// Inline SVG Icons
const SunIcon: FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun-medium">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="M4.93 4.93l1.41 1.41" />
        <path d="M17.66 17.66l1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="M4.93 19.07l1.41-1.41" />
        <path d="M17.66 6.34l1.41-1.41" />
    </svg>
);

const MoonIcon: FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
);

const ChevronLeft: FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left">
        <path d="m15 18-6-6 6-6" />
    </svg>
);

const ChevronRight: FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
        <path d="m9 18 6-6-6-6" />
    </svg>
);

const CloseIcon: FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
        <path d="M18 6 6 18" /><path d="m6 6 12 12" />
    </svg>
);

const ArrowUp: FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up">
        <path d="m5 12 7-7 7 7" /><path d="M12 19V5" />
    </svg>
);

// New icons for Skills, Contact, and Footer
const ServerIcon: FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-server">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
);

const CloudIcon: FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud">
        <path d="M17.5 19H17a5 5 0 0 0 0-9h-.5a.5.5 0 0 1-.5-.5V9a7 7 0 1 0-13.29 4.3" />
        <path d="M22 12a3.5 3.5 0 0 0-4-1.5" />
    </svg>
);

const DatabaseIcon: FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-database">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5V19A9 9 0 0 0 21 19V5" />
        <path d="M3 12A9 9 0 0 0 21 12" />
    </svg>
);

const Code2Icon: FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-2">
        <path d="m18 16 4-4-4-4" />
        <path d="m6 8-4 4 4 4" />
        <path d="m14.5 4-5 16" />
    </svg>
);

const BrainIcon: FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain">
        <path d="M9.4 10.6a2 2 0 1 0 2.8-2.8" />
        <path d="M5.8 11.2a2 2 0 1 0 2.8 2.8" />
        <path d="M16.6 12.8a2 2 0 1 0-2.8-2.8" />
        <path d="M18.2 9.2a2 2 0 1 0-2.8-2.8" />
        <path d="M10.6 16.6a2 2 0 1 0 2.8 2.8" />
        <path d="M7.2 19.8a2 2 0 1 0 2.8-2.8" />
        <path d="M19.8 7.2a2 2 0 1 0-2.8 2.8" />
        <path d="M12 2v20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
        <path d="M4 14.5A8.5 8.5 0 0 1 12 6V2" />
        <path d="M20 14.5A8.5 8.5 0 0 0 12 6V2" />
        <path d="M10 21.8C4.5 21.2 2 15.6 2 12c0-2.4 1-5.6 3.5-7" />
        <path d="M14 21.8c5.5-.6 8-6.2 8-9.8 0-2.4-1-5.6-3.5-7" />
    </svg>
);

const UserIcon: FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

const MailIcon: FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

const MessageCircleIcon: FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle">
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
);

const GithubIcon: FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.23c2.9.3 6-1.4 6-6.3a4.9 4.9 0 0 0-1.4-3.4c.4-.9.4-2.1 0-3.1s-1.8-1-2.8-1a7.7 7.7 0 0 0-1.2.1A6.8 6.8 0 0 0 12 2c-3.7 0-6.8 2-6.8 6a4.9 4.9 0 0 0-1.4 3.4c0 4.9 3.1 6.6 6 6.3a4.8 4.8 0 0 0-1 3.23v4" />
        <path d="M9 18c-2.4 0-4.4-1.2-4.4-3" />
    </svg>
);

const LinkedinIcon: FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

// New icons for the Stats section
const GlobeIcon: FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
    </svg>
);

const BriefcaseIcon: FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase">
        <rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
);

const UsersIcon: FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users">
        <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M6 15.13A4 4 0 0 0 3 19v2" />
    </svg>
);

const skillsIcons: { [key: string]: React.ReactNode  } = {
    "Backend Development": <ServerIcon />,
    "Cloud & DevOps": <CloudIcon />,
    "Databases & Caching": <DatabaseIcon />,
    "Frontend": <Code2Icon />,
    "AI/ML": <BrainIcon />
};

// Reusable Project Card component
const ProjectCard: FC<{ project: Project; onClick: (project: Project) => void }> = ({ project, onClick }) => (
    <div
        onClick={() => onClick(project)}
        className="group relative p-6 rounded-3xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-md shadow-lg border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:scale-[1.03] hover:border-fuchsia-500 hover:shadow-2xl cursor-pointer"
    >
        <div className="relative overflow-hidden rounded-2xl mb-4">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover transform-gpu transition-transform duration-500 group-hover:scale-110" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-50 font-montserrat">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm font-inter">{project.description}</p>
    </div>
);

// Modal component for project details
const ProjectModal: FC<{ project: Project | null; onClose: () => void }> = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-md transition-opacity duration-300 animate-fade-in" onClick={onClose}>
            <div
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8 rounded-3xl bg-white dark:bg-slate-800 shadow-2xl transform transition-transform duration-300 animate-slide-up-from-bottom"
                onClick={e => e.stopPropagation()} // Prevent modal from closing on inner click
            >
                <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-gray-500 dark:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200">
                    <CloseIcon />
                </button>
                <img src={project.image} alt={project.title} className="w-full h-auto rounded-2xl mb-6 shadow-md object-cover" />
                <h2 className="text-4xl font-bold mb-4 text-fuchsia-600 dark:text-fuchsia-400 font-montserrat">{project.title}</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6 font-inter">{project.description}</p>
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-fuchsia-600 dark:text-fuchsia-400 font-montserrat">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-full text-sm font-medium text-slate-700 dark:text-slate-200 font-inter">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-fuchsia-600 dark:text-fuchsia-400 font-montserrat">Key Features</h3>
                        <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400 font-inter">
                            {project.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Main Sections
const HeroSection: FC<{ heroData: HeroData }> = ({ heroData }) => {
    const titles: string[] = heroData.jobTitles;
    const [loopNum, setLoopNum] = useState<number>(0);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const [text, setText] = useState<string>('');
    const [delta, setDelta] = useState<number>(100);

    const period: number = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text]);

    const tick = () => {
        let i = loopNum % titles.length;
        let fullText = titles[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(200);
        }
    };

    return (
        <section id="home" className="relative h-screen flex flex-col items-center justify-center text-center z-10 px-4">
            <div className="relative z-10 animate-fade-in animate-slide-up">
                <h1 className="text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-indigo-500 mb-2 tracking-tight font-montserrat">{heroData.name}</h1>
                <h2 className={`text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-300 font-inter`}>
                    <span className="relative">
                        {text}
                        <span className="inline-block relative w-1 h-8 ml-1 bg-fuchsia-500 animate-pulse"></span>
                    </span>
                </h2>
                <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-400 mt-4 mb-8 font-inter" dangerouslySetInnerHTML={{ __html: heroData.description }}></p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                    <a href="#projects" className="py-3 px-8 rounded-full bg-slate-900 text-white font-semibold shadow-lg hover:bg-slate-700 transition-colors duration-300">
                        {heroData.ctaText}
                    </a>
                    <a href="#contact" className="py-3 px-8 rounded-full bg-white dark:bg-transparent text-slate-900 dark:text-slate-50 font-semibold shadow-lg border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-300">
                        {heroData.secondaryCtaText}
                    </a>
                </div>
            </div>
        </section>
    );
};

// New StatCounter component for animated numbers
const StatCounter: FC<{ stat: Stat; icon: React.ReactNode; }> = ({ stat, icon }) => {
    const [count, setCount] = useState<number>(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const duration = 2000;
                    const steps = stat.endValue / (duration / 16);
                    let currentCount = 0;
                    const interval = setInterval(() => {
                        currentCount += steps;
                        if (currentCount > stat.endValue) {
                            setCount(stat.endValue);
                            clearInterval(interval);
                        } else {
                            setCount(Math.ceil(currentCount));
                        }
                    }, 16);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [stat.endValue]);

    return (
        <div ref={ref} className="text-center p-6 rounded-3xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-md shadow-lg border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:scale-105 hover:border-fuchsia-500 hover:shadow-2xl">
            <div className="inline-block p-4 rounded-full bg-fuchsia-500 text-white mb-4">
                {icon}
            </div>
            <div className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-indigo-500 font-montserrat">
                {count}+
            </div>
            <p className="mt-2 text-lg font-medium text-slate-600 dark:text-slate-400 font-inter">{stat.label}</p>
        </div>
    );
};

// New Stats Section
const StatsSection: FC<{ stats: Stat[] }> = ({ stats }) => {
    const icons: React.ReactNode[] = [<GlobeIcon />, <BriefcaseIcon />, <UsersIcon />];
    return (
        <section id="stats" className="py-16 animate-fade-in" data-section>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                    <StatCounter key={index} stat={stat} icon={icons[index]} />
                ))}
            </div>
        </section>
    );
};

const SkillsSection: FC<{ skillsData: SkillsData }> = ({ skillsData }) => (
    <section id="skills" className="py-16 animate-fade-in" data-section>
        <h2 className="text-4xl font-bold text-center mb-10 font-montserrat">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skillsData).map(([category, { list }], index) => (
                <div key={index} className="flex items-start p-6 rounded-3xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-md shadow-lg border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:scale-105 hover:border-fuchsia-500 hover:shadow-2xl">
                    <div className="p-2 mr-4 rounded-full bg-fuchsia-500 text-white flex-shrink-0">
                        {skillsIcons[category]}
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-3 text-fuchsia-600 dark:text-fuchsia-400 font-montserrat">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {list.map((skill, i) => (
                                <span key={i} className="px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-full text-sm font-medium text-slate-700 dark:text-slate-200 font-inter">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

const ProjectsSection: FC<{ projects: Project[]; onProjectClick: (project: Project) => void }> = ({ projects, onProjectClick }) => (
    <section id="projects" className="py-16 animate-fade-in" data-section>
        <h2 className="text-4xl font-bold text-center mb-10 font-montserrat">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} onClick={onProjectClick} />
            ))}
        </div>
    </section>
);

const ExperienceSection: FC<{ experiences: Experience[] }> = ({ experiences }) => (
    <section id="experience" className="py-16 animate-fade-in" data-section>
        <h2 className="text-4xl font-bold text-center mb-10 font-montserrat">Experience</h2>
        <div className="relative">
            <div className="absolute left-1/2 -ml-0.5 w-1 h-full bg-slate-300 dark:bg-slate-700"></div>
            {experiences.map((exp, index) => (
                <div key={index} className={`flex items-start md:items-center w-full my-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-full md:w-1/2 p-4 ${index % 2 === 0 ? 'pr-8' : 'pl-8 text-right md:text-left'}`}>
                        <div className="p-6 rounded-3xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-md shadow-lg border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:scale-105 hover:border-fuchsia-500 hover:shadow-2xl">
                            <h3 className="text-xl font-semibold mb-1 text-slate-900 dark:text-slate-50 font-montserrat">{exp.title}</h3>
                            <p className="text-sm italic text-slate-500 dark:text-slate-400 font-inter">{exp.duration}</p>
                            <ul className="list-disc list-inside mt-4 space-y-2 text-slate-600 dark:text-slate-400 font-inter">
                                {exp.details.map((detail, i) => <li key={i}>{detail}</li>)}
                            </ul>
                        </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 p-2 rounded-full bg-fuchsia-500 text-white z-10">
                        <BriefcaseIcon />
                    </div>
                </div>
            ))}
        </div>
    </section>
);

const TestimonialsCarousel: FC<{ testimonials: Testimonial[] }> = React.memo(({ testimonials }) => {
    const [current, setCurrent] = useState<number>(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setCurrent((prevCurrent) =>
                    prevCurrent === testimonials.length - 1 ? 0 : prevCurrent + 1
                ),
            5000
        );

        return () => {
            resetTimeout();
        };
    }, [current]);

    const prevSlide = () => {
        resetTimeout();
        setCurrent(prevCurrent =>
            prevCurrent === 0 ? testimonials.length - 1 : prevCurrent - 1
        );
    };

    const nextSlide = () => {
        resetTimeout();
        setCurrent(prevCurrent =>
            prevCurrent === testimonials.length - 1 ? 0 : prevCurrent + 1
        );
    };


    return (
        <section id="testimonials" className="py-16 animate-fade-in" data-section>
            <h2 className="text-4xl font-bold text-center mb-10 font-montserrat">Testimonials</h2>
            <div className="relative max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-slate-700">
                {/* Slide Track */}
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-full p-8 text-center"
                        >
                            <p className="text-lg italic mb-6 text-slate-700 dark:text-slate-300 font-inter leading-relaxed">
                                "{testimonial.quote}"
                            </p>
                            <p className="font-semibold text-right text-slate-800 dark:text-slate-200 font-inter">
                                - {testimonial.author}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Prev Button */}
                <button
                    onClick={prevSlide}
                    className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 p-2 md:p-3 rounded-full bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 shadow hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-200"
                >
                    <ChevronLeft />
                </button>

                {/* Next Button */}
                <button
                    onClick={nextSlide}
                    className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 p-2 md:p-3 rounded-full bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 shadow hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-200"
                >
                    <ChevronRight />
                </button>
            </div>


        </section>
    );
});

const ContactSection: FC = () => {
    const [status, setStatus] = useState<string>('');
    const [formData, setFormData] = useState<{ name: string; email: string; message: string }>({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        if (!formData.name || !formData.email || !formData.message) {
            setStatus('error');
            return;
        }
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        }, 1500);
    };

    return (
        <section id="contact" className="py-16 animate-fade-in" data-section>
            <h2 className="text-4xl font-bold text-center mb-10 font-montserrat">{portfolioData.contact.title}</h2>
            <div className="max-w-xl mx-auto p-8 rounded-3xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-md shadow-lg border border-slate-200 dark:border-slate-700">
                {status === 'success' ? (
                    <div className="text-center text-green-600 dark:text-green-400 font-semibold text-lg animate-fade-in font-inter">
                        {portfolioData.contact.successMessage}
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="relative">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 font-inter"
                            />
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 dark:text-slate-400">
                                <UserIcon />
                            </div>
                        </div>
                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 font-inter"
                            />
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 dark:text-slate-400">
                                <MailIcon />
                            </div>
                        </div>
                        <div className="relative">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 resize-none font-inter"
                            ></textarea>
                            <div className="absolute inset-y-0 top-4 left-0 pl-4 flex items-center pointer-events-none text-slate-500 dark:text-slate-400">
                                <MessageCircleIcon />
                            </div>
                        </div>
                        {status === 'error' && (
                            <div className="text-red-500 text-sm font-medium font-inter">
                                {portfolioData.contact.errorMessage}
                            </div>
                        )}
                        <button
                            type="submit"
                            className="w-full py-4 rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white font-semibold shadow-md hover:from-fuchsia-600 hover:to-indigo-600 transition-all duration-300"
                        >
                            {status === 'submitting' ? 'Sending...' : portfolioData.contact.cta}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

const Footer: FC = React.memo(() => (
    <footer className="py-8 text-center text-slate-600 dark:text-slate-400 font-inter">
        <div className="container mx-auto">
            <p className="mb-4">{portfolioData.footer.copyright}</p>
            <div className="flex justify-center space-x-6">
                <a href={portfolioData.footer.linkedin} className="hover:text-fuchsia-500 transition-colors duration-200">
                    <LinkedinIcon />
                </a>
                <a href={portfolioData.footer.github} className="hover:text-fuchsia-500 transition-colors duration-200">
                    <GithubIcon />
                </a>
                <a
                    href={`mailto:${portfolioData.footer.email}`}
                    className="hover:text-fuchsia-500 transition-colors duration-200"
                >
                    <MailIcon />
                </a>
            </div>
        </div>
    </footer>
));

const App: FC = () => {
    const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || 'dark');
    const [navbarBg, setNavbarBg] = useState<boolean>(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavbarBg(true);
            } else {
                setNavbarBg(false);
            }
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="min-h-screen font-inter bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-50 transition-colors duration-300">
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
                    .font-inter { font-family: 'Inter', sans-serif; }
                    .font-montserrat { font-family: 'Montserrat', sans-serif; }
                    .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
                    .animate-slide-up { animation: slideUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
                    .animate-slide-up-from-bottom { animation: slideUpFromBottom 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
                    .animation-delay-100 { animation-delay: 0.1s; }
                    .animation-delay-200 { animation-delay: 0.2s; }
                    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                    @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
                    @keyframes slideUpFromBottom { from { transform: translateY(50px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
                `}
            </style>

            <header className={`sticky top-0 z-50 py-4 px-8 transition-all duration-300 ${navbarBg ? 'bg-white/90 dark:bg-slate-900/90 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>
                <nav className="container mx-auto flex justify-between items-center">
                    <a href="#home" className="text-2xl font-bold text-slate-900 dark:text-slate-50 font-montserrat">{portfolioData.hero.name}</a>
                    <ul className="hidden md:flex space-x-8 font-medium text-slate-700 dark:text-slate-300 font-inter">
                        <li><a href="#stats" className="relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-fuchsia-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">Stats</a></li>
                        <li><a href="#skills" className="relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-fuchsia-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">Skills</a></li>
                        <li><a href="#projects" className="relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-fuchsia-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">Projects</a></li>
                        <li><a href="#experience" className="relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-fuchsia-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">Experience</a></li>
                        <li><a href="#testimonials" className="relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-fuchsia-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">Testimonials</a></li>
                        <li><a href="#contact" className="relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-fuchsia-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">Contact</a></li>
                    </ul>
                    <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors duration-200">
                        {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
                    </button>
                </nav>
            </header>

            <main className="container mx-auto px-4 py-8">
                <HeroSection heroData={portfolioData.hero as HeroData} />
                <hr className="my-10 border-slate-300 dark:border-slate-700" />
                <StatsSection stats={portfolioData.stats as Stat[]} />
                <hr className="my-10 border-slate-300 dark:border-slate-700" />
                <SkillsSection skillsData={portfolioData.skills as SkillsData} />
                <hr className="my-10 border-slate-300 dark:border-slate-700" />
                <ProjectsSection projects={portfolioData.projects as Project[]}  onProjectClick={handleProjectClick} />
                <hr className="my-10 border-slate-300 dark:border-slate-700" />
                <ExperienceSection experiences={portfolioData.experience as Experience[]} />
                <hr className="my-10 border-slate-300 dark:border-slate-700" />
                <TestimonialsCarousel testimonials={portfolioData.testimonials as Testimonial[]} />
                <hr className="my-10 border-slate-300 dark:border-slate-700" />
                <ContactSection />
            </main>
            <Footer />
            <ProjectModal project={selectedProject} onClose={handleCloseModal} />

            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 p-3 rounded-full bg-fuchsia-500 text-white shadow-lg transition-opacity duration-300 ${showScrollTop ? 'opacity-100' : 'opacity-0'}`}
            >
                <ArrowUp />
            </button>
        </div>
    );
};

export default App;
