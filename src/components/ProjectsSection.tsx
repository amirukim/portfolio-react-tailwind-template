
import { useState, useEffect } from 'react';
import ProjectCard, { Project } from './ProjectCard';
import { Button } from '@/components/ui/button';

// Sample project data
const sampleProjects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with product catalog, shopping cart, and payment integration.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    categories: ["Web App", "E-Commerce"],
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Task Management System",
    description: "A collaborative task management tool with real-time updates and team workspaces.",
    image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    categories: ["Web App", "Productivity"],
    techStack: ["Vue.js", "Firebase", "Tailwind CSS"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Fitness Tracker",
    description: "A mobile-first application to track workouts, nutrition, and health metrics.",
    image: "https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    categories: ["Mobile App", "Health"],
    techStack: ["React Native", "GraphQL", "TypeScript"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: 4,
    title: "Real-time Chat Application",
    description: "End-to-end encrypted messaging platform with support for multiple channels.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    categories: ["Web App", "Communication"],
    techStack: ["Next.js", "Socket.io", "PostgreSQL"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description: "Interactive weather visualization with historical data analysis and forecasting.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    categories: ["Web App", "Data Visualization"],
    techStack: ["Angular", "D3.js", "OpenWeather API"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: 6,
    title: "Personal Finance Tracker",
    description: "Comprehensive finance management tool with expense tracking and budget planning.",
    image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    categories: ["Web App", "Finance"],
    techStack: ["Svelte", "Express", "MySQL"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  }
];

// Extract unique categories from projects
const allCategories = Array.from(
  new Set(sampleProjects.flatMap(project => project.categories))
);

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(sampleProjects);
  const [isInView, setIsInView] = useState(false);

  // Filter projects when category changes
  useEffect(() => {
    if (selectedCategory) {
      setFilteredProjects(
        sampleProjects.filter(project => project.categories.includes(selectedCategory))
      );
    } else {
      setFilteredProjects(sampleProjects);
    }
  }, [selectedCategory]);

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title text-center">My Projects</h2>
        <p className="section-subtitle text-center">
          A collection of my recent work, spanning various domains and technologies.
          Each project represents a unique challenge and solution.
        </p>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(null)}
            className="opacity-0 animate-fade-in"
          >
            All
          </Button>
          {allCategories.map((category, index) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
