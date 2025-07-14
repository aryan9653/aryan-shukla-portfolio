import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";

const Projects = () => {
  // Real projects from resume
  const projects = [
    {
      id: 1,
      title: "Blockchain File Storage",
      description: "Implemented a decentralized and secure storage system using Ethereum and IPFS, eliminating centralized servers to ensure data integrity, immutability, and transparency. Developed smart contract-based file manager in Solidity.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop",
      technologies: ["Solidity", "Ethereum", "QuickNode", "Next.js", "IPFS", "Web3.js"],
      githubUrl: "https://github.com/aryan9653/blockchain-file-storage",
      liveUrl: "#",
      stars: 12,
      forks: 5,
      date: "October 2024"
    },
    {
      id: 2,
      title: "Crowdfunding Platform",
      description: "Built a decentralized crowdfunding application on Ethereum enabling trustless fundraising, automatic refunds, and secure fund management through Solidity smart contracts with immutability and auditability.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["Solidity", "Ethereum", "Hardhat", "Next.js", "IPFS", "MetaMask"],
      githubUrl: "https://github.com/aryan9653/hacksmiths_hackniche3",
      liveUrl: "#",
      stars: 8,
      forks: 3,
      date: "January 2025"
    },
    {
      id: 3,
      title: "Justifi.ai",
      description: "Developed an AI-powered legal assistant that helps users understand and counter IPC (Indian Penal Code) charges by explaining relevant laws and suggesting potential defenses using Gemini AI.",
      image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=500&h=300&fit=crop",
      technologies: ["Next.js", "Node.js", "TypeScript", "Gemini AI", "Legal Tech"],
      githubUrl: "https://github.com/aryan9653/Justify.ai",
      liveUrl: "#",
      stars: 15,
      forks: 7,
      date: "March 2025"
    },
    {
      id: 4,
      title: "TCET TNP Documentation",
      description: "Designed and managed the TCET TNP website documentation, ensuring accessibility and ease of use for stakeholders. Part of my work as Documentation Intern at TCET-OpenSource.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["Documentation", "Git", "GitHub", "Technical Writing", "Project Management"],
      githubUrl: "https://github.com/tcet-opensource",
      liveUrl: "#",
      stars: 25,
      forks: 12,
      date: "2024"
    },
    {
      id: 5,
      title: "Fill My Cycle Documentation",
      description: "Developed the Fill My Cycle documentation page, utilized by 1,000+ students annually for streamlined access to information. Enhanced workflow efficiency through GitHub strategies.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop",
      technologies: ["Documentation", "GitHub", "Git Branching", "Technical Writing", "Student Portal"],
      githubUrl: "https://github.com/tcet-opensource/fill-my-cycle",
      liveUrl: "#",
      stars: 18,
      forks: 9,
      date: "2024"
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
            A showcase of my work in blockchain development, AI integration, and documentation engineering.
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
                  
                  {/* Date Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-black/50 text-white border-none">
                      {project.date}
                    </Badge>
                  </div>
                  
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
                  <p className="text-muted-foreground mb-4 flex-1 text-sm leading-relaxed">
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
                    {project.liveUrl !== "#" && (
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
                    )}
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
