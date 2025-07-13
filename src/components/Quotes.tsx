import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Quotes = () => {
  const quotes = [
    {
      text: "The best way to predict the future is to invent it.",
      author: "Alan Kay",
      category: "Innovation"
    },
    {
      text: "Code is like humor. When you have to explain it, it's bad.",
      author: "Cory House",
      category: "Code Quality"
    },
    {
      text: "First, solve the problem. Then, write the code.",
      author: "John Johnson",
      category: "Problem Solving"
    },
    {
      text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      author: "Martin Fowler",
      category: "Programming"
    },
    {
      text: "The most important property of a program is whether it accomplishes the intention of its user.",
      author: "C.A.R. Hoare",
      category: "Purpose"
    },
    {
      text: "Programming isn't about what you know; it's about what you can figure out.",
      author: "Chris Pine",
      category: "Learning"
    },
    {
      text: "Experience is the name everyone gives to their mistakes.",
      author: "Oscar Wilde",
      category: "Growth"
    },
    {
      text: "The only way to learn a new programming language is by writing programs in it.",
      author: "Dennis Ritchie",
      category: "Learning"
    },
    {
      text: "Simplicity is the ultimate sophistication.",
      author: "Leonardo da Vinci",
      category: "Design"
    }
  ];

  return (
    <section id="quotes" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Words of Inspiration
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Motivational quotes that fuel my passion for coding and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full bg-gradient-card border-none shadow-card hover:shadow-glow transition-all duration-300 group-hover:scale-105">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-start gap-3 mb-4">
                    <Quote className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <p className="text-lg leading-relaxed mb-4 italic">
                        "{quote.text}"
                      </p>
                      <div className="mt-auto">
                        <p className="font-semibold text-primary">— {quote.author}</p>
                        <p className="text-sm text-muted-foreground">{quote.category}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-card border-none shadow-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Quote className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Keep Coding, Keep Learning</h3>
              <p className="text-lg text-muted-foreground">
                Every line of code is a step towards building something amazing. 
                Let's create the future together, one commit at a time.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Quotes;