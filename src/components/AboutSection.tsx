
import { useEffect, useState } from 'react';
import { Calendar, Users, Briefcase, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
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

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const stats = [
    { value: '5+', label: 'Years Experience', icon: <Calendar className="h-5 w-5" /> },
    { value: '20+', label: 'Completed Projects', icon: <Briefcase className="h-5 w-5" /> },
    { value: '15+', label: 'Happy Clients', icon: <Users className="h-5 w-5" /> },
    { value: '3', label: 'Awards', icon: <Award className="h-5 w-5" /> },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image column */}
          <div className={`relative ${isInView ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="absolute inset-0 -z-10 bg-blue-100/50 rounded-2xl transform rotate-3"></div>
            <div className="absolute inset-0 -z-10 bg-primary/5 rounded-2xl transform -rotate-3"></div>
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content column */}
          <div>
            <span className={`inline-block px-3 py-1 text-sm bg-blue-50 text-primary rounded-full mb-4 ${isInView ? 'animate-fade-in-right' : 'opacity-0'}`}>
              About Me
            </span>
            
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isInView ? 'animate-fade-in-right delay-100' : 'opacity-0'}`}>
              Passionate Developer Creating Impactful Solutions
            </h2>
            
            <div className={`prose prose-blue max-w-none mb-8 ${isInView ? 'animate-fade-in-right delay-200' : 'opacity-0'}`}>
              <p className="text-lg text-muted-foreground">
                I'm a full-stack developer with a passion for building applications that solve real-world problems.
                With expertise spanning front-end interfaces to back-end systems, I strive to create solutions 
                that are not only functional but also intuitive and enjoyable to use.
              </p>
              <p className="text-lg text-muted-foreground mt-4">
                My journey in software development began over 5 years ago, and since then, I've had the privilege 
                of working with startups, agencies, and established companies across various industries. This diverse 
                experience has equipped me with a versatile skill set and a holistic approach to development.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className={`flex items-center ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${400 + (index * 100)}ms` }}
                >
                  <div className="mr-3 p-2 rounded-lg bg-primary/10 text-primary">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={`mt-8 ${isInView ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
              <Button size="lg" className="mr-4" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#">Download Resume</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
