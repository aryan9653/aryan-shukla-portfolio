import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";

const Projects = () => {
  // Sample projects - replace with your actual GitHub projects
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      githubUrl: "https://github.com/aryan9653/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.netlify.app",
      stars: 15,
      forks: 8
    },
    {
      id: 2,
      title: "Blockchain Voting System",
      description: "Decentralized voting application using Ethereum smart contracts. Winner of DJ Sanghvi College blockchain hackathon.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
      githubUrl: "https://github.com/aryan9653/blockchain-voting",
      liveUrl: "https://blockchain-voting-demo.netlify.app",
      stars: 32,
      forks: 12
    },
    {
      id: 3,
      title: "AI Chat Application",
      description: "Real-time chat application with AI bot integration. Features include message encryption, file sharing, and smart replies.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop",
      technologies: ["React", "Socket.io", "Python", "TensorFlow", "Redis"],
      githubUrl: "https://github.com/aryan9653/ai-chat-app",
      liveUrl: "https://ai-chat-demo.herokuapp.com",
      stars: 24,
      forks: 7
    },
    {
      id: 4,
      title: "Task Management Dashboard",
      description: "A comprehensive project management tool with team collaboration features, time tracking, and progress analytics.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Chart.js", "WebSockets"],
      githubUrl: "https://github.com/aryan9653/task-manager",
      liveUrl: "https://task-manager-demo.vercel.app",
      stars: 18,
      forks: 5
    },
    {
      id: 5,
      title: "Cryptocurrency Tracker",
      description: "Real-time cryptocurrency price tracking with portfolio management and alerts. Integrated with multiple exchange APIs.",
      image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=500&h=300&fit=crop",
      technologies: ["React Native", "Redux", "CoinGecko API", "Firebase"],
      githubUrl: "https://github.com/aryan9653/crypto-tracker",
      liveUrl: "https://crypto-tracker-demo.netlify.app",
      stars: 27,
      forks: 11
    },
    {
      id: 6,
      title: "Weather Prediction ML Model",
      description: "Machine learning model for weather prediction using historical data and multiple algorithms for improved accuracy.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      technologies: ["Python", "TensorFlow", "Pandas", "Flask", "Docker"],
      githubUrl: "https://github.com/aryan9653/weather-prediction",
      liveUrl: "https://weather-ml-demo.herokuapp.com",
      stars: 21,
      forks: 9
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full bg-gradient-card border-none shadow-card hover:shadow-glow transition-all duration-300 overflow-hidden">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  
                  {/* GitHub Stats */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div className="flex items-center gap-1 bg-black/50 rounded-full px-2 py-1 text-xs text-white">
                      <Star className="h-3 w-3" />
                      {project.stars}
                    </div>
                    <div className="flex items-center gap-1 bg-black/50 rounded-full px-2 py-1 text-xs text-white">
                      <GitFork className="h-3 w-3" />
                      {project.forks}
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0 flex flex-col flex-1">
                  <p className="text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group/btn"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 group/btn bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="group bg-primary hover:bg-primary/90"
            asChild
          >
            <a href="https://github.com/aryan9653" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;