import { motion } from 'framer-motion';

interface PortfolioCardProps {
  title: string;
  category: string;
  imageUrl: string;
}

const PortfolioCard = ({ title, category, imageUrl }: PortfolioCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative group overflow-hidden rounded-lg"
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <span className="text-gold text-sm font-medium mb-2 font-montserrat">{category}</span>
        <h3 className="text-white text-xl font-semibold font-montserrat">{title}</h3>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;