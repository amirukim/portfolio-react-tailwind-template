
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50/30 to-transparent"></div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 text-sm bg-blue-50 text-primary rounded-full mb-8 animate-fade-in-down">
            Full-Stack Developer
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight opacity-0 animate-fade-in-up">
            Crafting Digital Experiences with Precision
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl opacity-0 animate-fade-in-up delay-200">
            I build thoughtfully designed applications that balance aesthetics with functionality. Every project is an opportunity to create something meaningful.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up delay-300">
            <Button size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </div>

      <a 
        href="#projects" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll to projects"
      >
        <ArrowDown className="text-primary h-6 w-6" />
      </a>
    </section>
  );
};

export default HeroSection;
