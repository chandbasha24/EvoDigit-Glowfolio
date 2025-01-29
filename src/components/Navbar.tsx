import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/c635732e-aeee-426e-b673-44c2c87c472d.png" 
            alt="EvoDigit Logo" 
            className="w-16 h-16"
          />
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('services')} className="text-white hover:text-gold transition-colors font-montserrat">
            Services
          </button>
          <button onClick={() => scrollToSection('about')} className="text-white hover:text-gold transition-colors font-montserrat">
            About Us
          </button>
          <button onClick={() => scrollToSection('portfolio')} className="text-white hover:text-gold transition-colors font-montserrat">
            Portfolio
          </button>
          <button onClick={() => scrollToSection('careers')} className="text-white hover:text-gold transition-colors font-montserrat">
            Careers
          </button>
          <Button onClick={() => scrollToSection('contact')} className="bg-black hover:bg-black/80 text-gold border-2 border-gold font-semibold transition-all transform hover:scale-105 font-montserrat">
            Contact Us
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;