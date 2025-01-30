import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pb-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/20 via-black to-black" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            We Create Digital
            <span className="text-gold"> Experiences</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Transform your digital presence with our innovative solutions and creative expertise.
          </p>
          <Button 
            onClick={onGetStarted}
            className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-6 rounded-lg transition-all transform hover:scale-105 animate-pulse shadow-[0_0_15px_rgba(255,215,0,0.5)]"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;