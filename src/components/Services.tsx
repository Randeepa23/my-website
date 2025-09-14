import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, ShoppingCart, Search, Settings, CheckCircle, ArrowRight } from "lucide-react";
import servicesIllustration from "@/assets/services-illustration.jpg";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Website Design & Development",
      description: "Custom, responsive websites that look stunning on all devices and convert visitors into customers.",
      features: ["Custom Design", "Mobile Responsive", "Fast Loading", "SEO Ready"]
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description: "Complete online stores with payment integration, inventory management, and sales optimization.",
      features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Analytics"]
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Boost your Google rankings with technical SEO, content optimization, and performance tuning.",
      features: ["Keyword Research", "Technical SEO", "Content Optimization", "Analytics Setup"]
    },
    {
      icon: Settings,
      title: "Website Maintenance",
      description: "Keep your website secure, updated, and running smoothly with our comprehensive maintenance plans.",
      features: ["Security Updates", "Backup & Recovery", "Performance Monitoring", "24/7 Support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 text-primary text-sm font-medium mb-4">
            <Settings className="h-4 w-4" />
            <span>Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Complete Web Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From concept to launch, we provide everything you need to establish a powerful online presence 
            that drives growth and success for your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="bg-gradient-card border-0 shadow-soft hover:shadow-glow transition-smooth hover:scale-105 group overflow-hidden"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-primary rounded-lg group-hover:scale-110 transition-smooth">
                        <service.icon className="h-7 w-7 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-smooth">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground">What's Included:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2 text-xs text-muted-foreground">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      size="sm" 
                      className="w-full bg-gradient-primary hover:shadow-glow transition-smooth group"
                      asChild
                    >
                      <a href="#contact">
                        Get Started
                        <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-smooth" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Services Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={servicesIllustration} 
                alt="Web development services illustration" 
                className="rounded-2xl shadow-elegant max-w-full h-auto"
              />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-primary rounded-full opacity-30 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;