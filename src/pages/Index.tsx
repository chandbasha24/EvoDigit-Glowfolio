import { motion } from 'framer-motion';
import { Palette, Code, LineChart, Users, Mail, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ServiceCard from '@/components/ServiceCard';
import PortfolioCard from '@/components/PortfolioCard';
import { Button } from '@/components/ui/button';

const Index = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user experiences that delight your customers."
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Building robust and scalable web applications with cutting-edge technologies."
    },
    {
      icon: LineChart,
      title: "Digital Marketing",
      description: "Driving growth through strategic digital marketing campaigns."
    }
  ];

  const portfolio = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      title: "Brand Identity",
      category: "Design",
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    },
    {
      title: "Mobile App",
      category: "Development",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    }
  ];

  return (
    <div className="bg-black min-h-screen font-montserrat">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/20 via-black to-black" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-gold text-sm font-medium mb-4 inline-block">WELCOME TO EVODIGIT</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              We Create Digital
              <span className="text-gold"> Experiences</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Transform your digital presence with our innovative solutions and creative expertise.
            </p>
            <Button className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-6 rounded-lg transition-all transform hover:scale-105">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-medium mb-4 inline-block">OUR SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Do Best</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We offer a comprehensive range of digital services to help your business grow and succeed in the digital age.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                Icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
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
                Crafting Digital Excellence Since 2015
              </h2>
              <p className="text-gray-400 mb-6">
                We are a team of passionate digital creators, developers, and strategists dedicated to transforming businesses through innovative digital solutions.
              </p>
              <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black transition-all">
                Learn More
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="Team at work"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-medium mb-4 inline-block">OUR WORK</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our latest work and see how we've helped our clients achieve their digital goals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <PortfolioCard
                key={index}
                title={item.title}
                category={item.category}
                imageUrl={item.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-20 bg-black/95">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-medium mb-4 inline-block">JOIN OUR TEAM</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Career Opportunities</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Join our team of passionate professionals and help us shape the future of digital experiences.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {['UI/UX Designer', 'Frontend Developer', 'Digital Marketing Specialist'].map((position, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-black/40 backdrop-blur-lg p-6 rounded-lg border border-gold/20 hover:border-gold/40 transition-all"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{position}</h3>
                <p className="text-gray-400 mb-4">Full-time · Remote</p>
                <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black transition-all">
                  Apply Now
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-gold text-sm font-medium mb-4 inline-block">GET IN TOUCH</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-gray-400 mb-8">
              Ready to start your next project? Contact us and let's discuss how we can help bring your vision to life.
            </p>
            <Button className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-6 rounded-lg transition-all transform hover:scale-105">
              <Mail className="mr-2 h-4 w-4" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;