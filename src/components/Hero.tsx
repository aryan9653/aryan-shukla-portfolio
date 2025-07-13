import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-primary text-lg font-medium"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent"
          >
            Aryan Shukla
          </motion.h1>

          {/* Role */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-2xl md:text-3xl font-light text-foreground/80"
          >
            Computer Science Student & Blockchain Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Computer Science Engineering student studying at Thakur College Of Engineering And Technology, specializing in Cybersecurity. 
            Marketing Lead at GDSC-TCET, passionate about blockchain development and AI integration.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex items-center justify-center gap-4 pt-4"
          >
            <Button
              variant="outline"
              size="lg"
              className="group transition-all duration-300 hover:scale-105 hover:shadow-glow"
              asChild
            >
              <a href="https://github.com/aryan9653" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                GitHub
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="group transition-all duration-300 hover:scale-105 hover:shadow-glow"
              asChild
            >
              <a href="https://www.linkedin.com/in/aryan-shukla-480564219/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                LinkedIn
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="group transition-all duration-300 hover:scale-105 hover:shadow-glow"
              asChild
            >
              <a href="mailto:aryanshukla9653@gmail.com">
                <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Email
              </a>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="pt-12"
          >
            <Button
              variant="ghost"
              size="lg"
              onClick={scrollToAbout}
              className="group animate-float"
            >
              <ArrowDown className="h-6 w-6 group-hover:translate-y-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
