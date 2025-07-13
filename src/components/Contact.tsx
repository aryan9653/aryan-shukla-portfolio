import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aryanshukla9004@gmail.com",
      href: "mailto:aryanshukla9004@gmail.com"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/aryan9653",
      href: "https://github.com/aryan9653"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/aryan-shukla-480564219",
      href: "https://www.linkedin.com/in/aryan-shukla-480564219/"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mumbai, India",
      href: null
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9653365961",
      href: "tel:+919653365961"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on projects, 
            or just have a chat about technology and innovation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gradient-card border-none shadow-card hover:shadow-glow transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{item.label}</h4>
                          {item.href ? (
                            <a
                              href={item.href}
                              target={item.href.startsWith('http') ? '_blank' : undefined}
                              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{item.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Available for */}
            <Card className="bg-gradient-card border-none shadow-card mt-8">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Available For</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>💼 Full-time opportunities</p>
                  <p>🚀 Freelance projects</p>
                  <p>🤝 Collaboration on open-source</p>
                  <p>🎤 Speaking at events</p>
                  <p>☕ Coffee chats about tech</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="bg-gradient-card border-none shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Ready to Start a Project?</h3>
                
                <div className="space-y-6">
                  <p className="text-muted-foreground">
                    Whether you have a clear vision or just an idea, I'd love to help bring it to life. 
                    Let's discuss how we can work together to create something amazing.
                  </p>

                  <div className="space-y-4">
                    <h4 className="font-semibold">What I can help with:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        Full-stack web application development
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        Blockchain and smart contract development
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        API design and integration
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        Technical consulting and code review
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        Performance optimization
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col gap-3 pt-4">
                    <Button
                      size="lg"
                      className="w-full group bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a href="mailto:aryanshukla9653@gmail.com">
                        <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        Send me an email
                      </a>
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full group"
                      asChild
                    >
                      <a href="https://www.linkedin.com/in/aryan-shukla-480564219/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                        Connect on LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="bg-gradient-card border-none shadow-card">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold mb-2">Quick Response</h4>
                <p className="text-muted-foreground text-sm">
                  I typically respond to emails within 24 hours.
                  For urgent matters, feel free to connect on LinkedIn.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
