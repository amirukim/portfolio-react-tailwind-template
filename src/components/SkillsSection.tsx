
import { useEffect, useState } from 'react';
import { Code, Server, Layout, Database, Globe, GitBranch } from 'lucide-react';

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number; // 1-100
}

const SkillsSection = () => {
  const [isInView, setIsInView] = useState(false);

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

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend Development",
      icon: <Layout className="h-6 w-6" />,
      skills: [
        { name: "React / React Native", level: 90 },
        { name: "JavaScript / TypeScript", level: 85 },
        { name: "HTML / CSS", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Redux", level: 80 }
      ]
    },
    {
      name: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 82 },
        { name: "REST APIs", level: 88 },
        { name: "GraphQL", level: 75 },
        { name: "Authentication", level: 80 }
      ]
    },
    {
      name: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 78 },
        { name: "Firebase", level: 82 },
        { name: "Redis", level: 70 },
        { name: "ORM Tools", level: 75 }
      ]
    },
    {
      name: "Programming",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Python", level: 78 },
        { name: "Go", level: 65 },
        { name: "Rust", level: 60 }
      ]
    },
    {
      name: "DevOps & Deployment",
      icon: <GitBranch className="h-6 w-6" />,
      skills: [
        { name: "Git / GitHub", level: 88 },
        { name: "Docker", level: 75 },
        { name: "CI/CD", level: 80 },
        { name: "AWS / Cloud", level: 75 },
        { name: "Vercel / Netlify", level: 85 }
      ]
    },
    {
      name: "Other",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: "UI/UX Design", level: 70 },
        { name: "Agile Methodology", level: 85 },
        { name: "Testing", level: 80 },
        { name: "SEO", level: 75 },
        { name: "Performance Optimization", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="section-container">
        <h2 className="section-title text-center">Skills & Expertise</h2>
        <p className="section-subtitle text-center">
          My technical toolkit spans frontend and backend development,
          with expertise in modern frameworks and best practices.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.name}
              className={`glass-card rounded-xl p-6 opacity-0 ${isInView ? 'animate-fade-in-up' : ''}`}
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="mr-3 p-2 rounded-lg bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isInView ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 100) + (skillIndex * 100)}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
