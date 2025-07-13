import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Trophy, Heart } from "lucide-react";

const About = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", "Java",
    "Blockchain", "Solidity", "Web3", "MongoDB", "PostgreSQL", "AWS",
    "Docker", "Kubernetes", "Git", "Linux", "REST APIs", "GraphQL"
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "Blockchain Hackathon Winner",
      description: "Won first place at DJ Sanghvi College of Engineering hackathon in blockchain domain",
      year: "2023"
    },
    {
      icon: Code,
      title: "Full Stack Developer",
      description: "Building scalable web applications with modern technologies",
      year: "2022-Present"
    },
    {
      icon: Brain,
      title: "Problem Solver",
      description: "Passionate about solving complex problems with elegant solutions",
      year: "Always"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer who loves creating innovative solutions and pushing the boundaries of technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="bg-gradient-card border-none shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-semibold">My Journey</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    My journey in technology began with curiosity about how things work under the hood. 
                    This led me to explore various domains, from web development to blockchain technology.
                  </p>
                  <p>
                    I believe in continuous learning and staying updated with the latest technologies. 
                    My experience spans across full-stack development, blockchain solutions, and cloud technologies.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                    or sharing knowledge with the developer community.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Tech Skills */}
            <Card className="bg-gradient-card border-none shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Code className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-semibold">Tech Stack</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="text-sm py-2 px-3 hover:scale-105 transition-transform cursor-default"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-card border-none shadow-card hover:shadow-glow transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <achievement.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-xl font-semibold">{achievement.title}</h4>
                          <Badge variant="outline" className="text-xs">
                            {achievement.year}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Contact Info Card */}
            <Card className="bg-gradient-card border-none shadow-card">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-semibold mb-4">Let's Connect!</h3>
                <p className="text-muted-foreground mb-4">
                  Always open to discussing new opportunities and collaborations.
                </p>
                <div className="space-y-2 text-sm">
                  <p>📧 aryanshukla9653@gmail.com</p>
                  <p>🌟 Based in India</p>
                  <p>💼 Open to freelance & full-time opportunities</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;