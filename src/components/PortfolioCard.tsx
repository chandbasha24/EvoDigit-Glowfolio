import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface PortfolioCardProps {
  title: string;
  category: string;
  Icon: LucideIcon;
}

const PortfolioCard = ({ title, category, Icon }: PortfolioCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative group overflow-hidden rounded-lg bg-black/40 backdrop-blur-lg p-8 border border-gold/20 hover:border-gold/40"
    >
      <div className="flex flex-col items-center text-center">
        <Icon className="w-16 h-16 text-gold mb-4" />
        <span className="text-gold text-sm font-medium mb-2">{category}</span>
        <h3 className="text-white text-xl font-semibold">{title}</h3>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;