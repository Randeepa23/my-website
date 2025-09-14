import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin, Instagram, Facebook, Send, Clock, MapPin, MessageCircle } from "lucide-react";
import contactIllustration from "@/assets/contact-illustration.jpg";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Form submission logic would go here
    alert("Thank you for your message! We'll get back to you within 24 hours.");
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "avithariyawansa207@gmail.com",
      href: "mailto:avithariyawansa207@gmail.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      label: "Phone/WhatsApp",
      value: "0740904523",
      href: "tel:0740904523",
      description: "Call or message us directly"
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      href: "#",
      description: "We respond to all inquiries quickly"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sri Lanka",
      href: "#",
      description: "Serving clients worldwide"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/randeepa-ariyawansa-a589a6265"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/randeeeepa"
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://facebook.com/randeepa.ariyawansa"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 text-primary text-sm font-medium mb-4">
            <MessageCircle className="h-4 w-4" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Let's discuss your vision and create something amazing together. 
            Get a free consultation and quote for your website project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Illustration */}
          <div className="lg:col-span-1 flex justify-center items-start">
            <div className="relative">
              <img 
                src={contactIllustration} 
                alt="Contact and communication illustration" 
                className="rounded-2xl shadow-elegant max-w-full h-auto"
              />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-primary rounded-full opacity-30 animate-ping"></div>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
                    <Mail className="h-5 w-5 text-primary-foreground" />
                  </div>
                  Randeepa Ariyawansa
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                      <contact.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-foreground">{contact.label}</p>
                      <a 
                        href={contact.href}
                        className="text-foreground hover:text-primary transition-smooth font-medium block"
                      >
                        {contact.value}
                      </a>
                      <p className="text-xs text-muted-foreground mt-1">{contact.description}</p>
                    </div>
                  </div>
                ))}
                
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground mb-3">Follow me on social media:</p>
                  <div className="flex space-x-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-primary/10 hover:bg-gradient-primary rounded-lg flex items-center justify-center transition-smooth hover:scale-110 group"
                      >
                        <social.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name" 
                      required 
                      className="border-border/20 focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com" 
                      required 
                      className="border-border/20 focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..." 
                      rows={5}
                      required 
                      className="border-border/20 focus:border-primary resize-none"
                    />
                  </div>
                  
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <p className="text-sm text-primary font-medium mb-2">What happens next?</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• We'll review your project details within 24 hours</li>
                      <li>• You'll receive a detailed proposal and timeline</li>
                      <li>• Free consultation call to discuss your vision</li>
                      <li>• No obligation - completely free to discuss</li>
                    </ul>
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:shadow-glow transition-smooth group"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Get Free Quote
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;