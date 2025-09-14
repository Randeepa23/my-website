import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Zap, Smartphone, Sparkles, Code, Palette, Rocket, Shield } from "lucide-react";
import aboutIllustration from "@/assets/about-illustration.jpg";

const About = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Affordable Packages",
      description: "Budget-friendly solutions for every business size",
      color: "text-green-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Quick delivery with 24/7 support and unlimited revisions",
      color: "text-yellow-500"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "SEO-optimized, responsive websites that work perfectly on all devices",
      color: "text-blue-500"
    },
    {
      icon: Sparkles,
      title: "100% Custom",
      description: "Unique designs tailored to your brand and business goals",
      color: "text-purple-500"
    },
    {
      icon: Code,
      title: "Modern Technology",
      description: "Built with latest frameworks for speed, security, and performance",
      color: "text-indigo-500"
    },
    {
      icon: Palette,
      title: "Beautiful Design",
      description: "Stunning visuals and user experience that converts visitors",
      color: "text-pink-500"
    },
    {
      icon: Rocket,
      title: "SEO Ready",
      description: "Optimized for search engines to help you get found online",
      color: "text-orange-500"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "SSL certificates, regular backups, and 99.9% uptime guarantee",
      color: "text-red-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 text-primary text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Your Success is Our Mission
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We don't just build websites - we create digital experiences that drive results. 
            Every project is crafted with passion, precision, and your success in mind.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Illustration */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <img 
                src={aboutIllustration} 
                alt="Professional web development illustration" 
                className="rounded-2xl shadow-elegant max-w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Meet Randeepa Ariyawansa, Your Digital Partner
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                With years of experience in web development, I help businesses 
                establish their online presence and achieve their digital goals. Every website 
                I create is a reflection of your brand's unique story.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                My mission is simple: to create stunning, fast, and conversion-focused websites 
                that not only look amazing but also drive real business results for my clients.
              </p>
              
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-0 shadow-soft hover:shadow-glow transition-smooth hover:scale-105 group overflow-hidden"
            >
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 group-hover:scale-110 transition-smooth`}>
                  <feature.icon className={`h-8 w-8 text-primary-foreground`} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;