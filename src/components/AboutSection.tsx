import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Users, Laptop, Target } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-black/95">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-gold text-sm font-medium mb-4 inline-block">ABOUT US</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Crafting Digital Excellence
            </h2>
            <p className="text-gray-400 mb-6">
              We are a team of passionate digital creators, developers, and strategists dedicated to transforming businesses through innovative digital solutions.
            </p>
            <Button variant="outline" className="bg-black hover:bg-black/80 text-gold border-2 border-gold transition-all">
              Learn More
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative grid grid-cols-2 gap-4"
          >
            <div className="flex flex-col items-center space-y-4 p-6 bg-black/40 rounded-lg border border-gold/20">
              <Users className="w-12 h-12 text-gold" />
              <p className="text-white text-center">Expert Team</p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 bg-black/40 rounded-lg border border-gold/20">
              <Laptop className="w-12 h-12 text-gold" />
              <p className="text-white text-center">Modern Tech</p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 bg-black/40 rounded-lg border border-gold/20">
              <Target className="w-12 h-12 text-gold" />
              <p className="text-white text-center">Results Driven</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;