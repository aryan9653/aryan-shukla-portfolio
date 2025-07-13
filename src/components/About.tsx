import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Trophy, Heart } from "lucide-react";

const About = () => {
  const skills = [
    "Solidity", "TypeScript", "Next.js", "React.js", "Node.js", "Python", "Java",
    "Blockchain", "Ethereum", "Web3.js", "MongoDB", "Firebase", "SQL",
    "Git", "GitHub", "VS Code", "Cursor", "Wireshark", "Nmap", "Ethical Hacking",
    "Gemini AI", "IPFS", "QuickNode", "Hardhat", "MetaMask", "Canva"
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "Hackniche Runner Up - DJ Sanghvi College",
      description: "Secured 2nd position in blockchain domain hackathon at DJ Sanghvi College of Engineering",
      year: "2024"
    },
    {
      icon: Trophy,
      title: "HackInfinity Top 5 - RGCOE",
      description: "Achieved top 5 position at HackInfinity hackathon at Rajiv Gandhi College of Engineering",
      year: "2024"
    },
    {
      icon: Code,
      title: "GDSC Marketing Lead - TCET",
      description: "Leading marketing initiatives at Google Developer Students Club at TCET",
      year: "Current"
    },
    {
      icon: Brain,
      title: "Documentation Engineer",
      description: "Enhanced workflow efficiency for 1,000+ students at TCET-OpenSource",
      year: "2024-2025"
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
                    I'm a Computer Science Engineering student at Mumbai University specializing in Cybersecurity, 
                    maintaining a strong CGPA of 9.28. Currently serving as Marketing Lead at Google Developer Students Club - TCET, 
                    I'm passionate about blockchain technology, AI integration, and full-stack development.
                  </p>
                  <p>
                    As a Documentation Intern at TCET-OpenSource, I've enhanced workflow efficiency through GitHub strategies 
                    and developed documentation platforms used by 1,000+ students annually. My projects span from decentralized 
                    file storage systems to AI-powered legal assistants, showcasing my versatility in emerging technologies.
                  </p>
                  <p>
                    I'm a hackathon enthusiast with notable achievements including Runner Up at DJ Sanghvi College's Hackniche 
                    and Top 5 position at HackInfinity. I believe in continuous learning, open-source contribution, and 
                    democratizing access to technology through innovative solutions.
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