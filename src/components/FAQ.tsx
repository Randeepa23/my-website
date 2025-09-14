import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Clock, DollarSign, Shield, Zap, CheckCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "Website completion time depends on complexity. Simple business websites are typically completed quickly, while e-commerce sites may take longer. We provide detailed timelines during our consultation.",
      icon: Clock
    },
    {
      question: "What's included in your website packages?",
      answer: "All packages include custom design, mobile responsiveness, SEO optimization, fast loading speeds, contact forms, social media integration, and 30 days of free support. E-commerce packages also include payment gateway setup and inventory management.",
      icon: CheckCircle
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer: "Yes! We offer comprehensive maintenance plans that include security updates, regular backups, performance monitoring, content updates, and 24/7 technical support.",
      icon: Shield
    },
    {
      question: "Can you help with SEO and getting found on Google?",
      answer: "Absolutely! All our websites are built with SEO best practices, including fast loading speeds, mobile optimization, proper meta tags, and clean code structure. We also offer dedicated SEO services to improve your Google rankings.",
      icon: Zap
    },
    {
      question: "What if I need changes after the website is live?",
      answer: "We include 30 days of free revisions with every project. After that, we offer affordable maintenance packages or charge reasonable hourly rates for updates. We're always here to help your website grow with your business.",
      icon: HelpCircle
    },
    {
      question: "Do you work with businesses outside of Sri Lanka?",
      answer: "Yes! We work with clients worldwide. Our remote collaboration process is seamless, and we use modern tools to ensure smooth communication throughout the project. We've successfully delivered projects for clients in multiple countries.",
      icon: DollarSign
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 text-primary text-sm font-medium mb-4">
            <HelpCircle className="h-4 w-4" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Got Questions? We've Got Answers
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are the most common questions we receive about our web development services. 
            Don't see your question? Feel free to contact us directly!
          </p>
        </div>

        <div className="space-y-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border/20 rounded-lg mb-4">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-primary/5 transition-colors">
                  <div className="flex items-center space-x-3 text-left">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <faq.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-semibold text-foreground">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed pl-11">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-card border-0 shadow-soft">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Still Have Questions?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're here to help! Get in touch with us for a free consultation and personalized answers to all your questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-primary text-white font-semibold rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  Contact Us Now
                </a>
                <a
                  href="mailto:avithariyawansa207@gmail.com"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Send Email
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
