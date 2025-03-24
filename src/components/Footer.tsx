
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-white border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-bold">Portfolio</a>
            <p className="mt-2 text-muted-foreground">
              Building beautiful digital experiences.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-muted-foreground text-sm mb-2">
              © {currentYear} All rights reserved.
            </p>
            <p className="flex items-center text-sm">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> using React & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
