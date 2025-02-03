import { motion } from 'framer-motion';
import { Palette, Code, LineChart, Users, Mail, ArrowRight, Phone, Linkedin, Send, MonitorSmartphone, Briefcase, Trophy } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ServiceCard from '@/components/ServiceCard';
import PortfolioCard from '@/components/PortfolioCard';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Index = () => {
  const { toast } = useToast();
  const phoneNumber = "";
  const linkedinUrl = "https://www.linkedin.com/company/evodigit/";

  const handleGetStarted = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

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
      icon: MonitorSmartphone
    },
    {
      title: "Brand Identity",
      category: "Design",
      icon: Briefcase
    },
    {
      title: "Mobile App",
      category: "Development",
      icon: Trophy
    }
  ];

  const handleContactClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const submissionData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
    };

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([submissionData]);

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "We'll get back to you soon.",
      });
      
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="bg-black min-h-screen font-montserrat">
      <Navbar />
      
      <HeroSection onGetStarted={handleGetStarted} />

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

      <AboutSection />

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
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="relative group overflow-hidden rounded-lg bg-black/40 backdrop-blur-lg p-8 border border-gold/20 hover:border-gold/40"
              >
                <div className="flex flex-col items-center text-center">
                  <item.icon className="w-16 h-16 text-gold mb-4" />
                  <span className="text-gold text-sm font-medium mb-2">{item.category}</span>
                  <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
                <Button 
                  onClick={handleContactClick}
                  variant="outline" 
                  className="border-gold text-gold hover:bg-gold hover:text-black transition-all"
                >
                  Contact Us
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
            <Button 
              onClick={handleContactClick}
              className="bg-black hover:bg-black/80 text-gold border-2 border-gold font-semibold px-8 py-6 rounded-lg transition-all transform hover:scale-105"
            >
              <Phone className="mr-2 h-4 w-4" />
              Contact on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-black/95 border-t border-gold/20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  required
                  className="bg-black/50 border-gold/20 text-white placeholder:text-gray-400"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  className="bg-black/50 border-gold/20 text-white placeholder:text-gray-400"
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Your Phone Number"
                  required
                  className="bg-black/50 border-gold/20 text-white placeholder:text-gray-400"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  className="bg-black/50 border-gold/20 text-white placeholder:text-gray-400"
                />
                <Button type="submit" className="w-full bg-black hover:bg-black/80 text-gold border-2 border-gold">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info & Social Links */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <p className="text-gray-400 flex items-center">
                    <Phone className="mr-2 h-4 w-4 text-gold" />
                    {phoneNumber}
                  </p>
                  <a 
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 flex items-center hover:text-gold transition-colors"
                  >
                    <Linkedin className="mr-2 h-4 w-4 text-gold" />
                    Follow us on LinkedIn
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Office Hours</h4>
                <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-400">Saturday: 10:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gold/20 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} EvoDigit. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
