import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Award, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Documentation Intern",
      company: "TCET-OpenSource",
      location: "Remote",
      period: "June 2024 - Feb 2025",
      type: "Internship",
      description: [
        "Implemented GitHub and Git Branching Strategies to optimize PR merging for L4 documentation engineering, enhancing workflow efficiency",
        "Designed and managed the TCET TNP website documentation, ensuring accessibility and ease of use for stakeholders",
        "Developed the Fill My Cycle documentation page, utilized by 1,000+ students annually for streamlined access to information",
        "Collaborated using Git for version control, task assignments, and project organization, improving team productivity and code quality"
      ],
      technologies: ["Git", "GitHub", "Documentation", "Technical Writing", "Project Management"]
    }
  ];

  const achievements = [
    {
      title: "Hackniche Runner Up",
      event: "DJ Sanghvi College of Engineering",
      date: "2024",
      description: "Secured 2nd position in blockchain domain hackathon",
      icon: Award
    },
    {
      title: "HackInfinity Top 5",
      event: "Rajiv Gandhi College of Engineering",
      date: "2024",
      description: "Achieved top 5 position in hackathon competition",
      icon: Award
    },
    {
      title: "GDSC Marketing Lead",
      event: "Google Developer Students Club - TCET",
      date: "Current",
      description: "Leading marketing initiatives and community engagement",
      icon: Award
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Experience & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and notable accomplishments in the tech industry.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-primary" />
              Work Experience
            </h3>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-card border-none shadow-card hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-primary">{exp.title}</h4>
                        <p className="text-lg font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-col sm:items-end mt-2 sm:mt-0">
                        <Badge variant="secondary" className="mb-2">
                          {exp.type}
                        </Badge>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Achievements */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Award className="h-6 w-6 text-primary" />
              Achievements
            </h3>
            
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
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
                          <h4 className="text-lg font-semibold">{achievement.title}</h4>
                          <Badge variant="outline" className="text-xs">
                            {achievement.date}
                          </Badge>
                        </div>
                        <p className="text-primary font-medium mb-2">{achievement.event}</p>
                        <p className="text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Education */}
            <Card className="bg-gradient-card border-none shadow-card">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4">Education</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium">B.E in Computer Science and Engineering (CyberSecurity)</h5>
                    <p className="text-muted-foreground">Mumbai University - Thakur College of Engineering and Technology</p>
                    <p className="text-sm text-muted-foreground">2022-2026 • CGPA: 9.28 (Till 5th Semester)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills Highlight */}
            <Card className="bg-gradient-card border-none shadow-card">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4">Core Strengths</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Blockchain Development</span>
                    <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="w-5/6 h-full bg-primary rounded-full" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Full Stack Development</span>
                    <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="w-5/6 h-full bg-primary rounded-full" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Cybersecurity</span>
                    <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-primary rounded-full" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>AI Integration</span>
                    <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="w-4/5 h-full bg-primary rounded-full" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;