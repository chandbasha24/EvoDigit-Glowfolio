import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const ServiceCard = ({ title, description, Icon }: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-black/40 backdrop-blur-lg p-6 rounded-lg border border-gold/20 group hover:border-gold/40 transition-all duration-300"
    >
      <div className="h-12 w-12 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-all duration-300">
        <Icon className="h-6 w-6 text-gold" />
      </div>
      <h3 className="text-xl font-semibold mt-4 mb-2 text-white font-montserrat">{title}</h3>
      <p className="text-gray-400 font-montserrat">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;