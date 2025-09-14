import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ThumbsUp, Award } from "lucide-react";
import testimonialIllustration from "@/assets/testimonial-illustration.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rio Café",
      role: "Coffee Shop & Bakery",
      content: "BizConnect built us a stylish and functional website that perfectly represents our café. Customers love it and we've seen a significant increase in online orders!",
      rating: 5
    },
    {
      name: "Luxury Properties Ltd",
      role: "Real Estate Agency",
      content: "The luxury property showcase website exceeded our expectations. The elegant design and smooth user experience have helped us close more deals than ever before.",
      rating: 5
    },
    {
      name: "TechStart Solutions",
      role: "Software Company",
      content: "Professional, fast, and reliable service. Randeepa delivered our website ahead of schedule and it's been performing exceptionally well for our business.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 text-primary text-sm font-medium mb-4">
            <ThumbsUp className="h-4 w-4" />
            <span>Client Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear from the businesses we've helped transform 
            with our web development services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-glow transition-smooth hover:scale-105 group">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-accent fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-sm text-foreground mb-4 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="border-t pt-4">
                  <cite className="text-primary font-semibold text-sm">{testimonial.name}</cite>
                  <p className="text-muted-foreground text-xs mt-1">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Featured Testimonial */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Card className="bg-gradient-card border-0 shadow-glow">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6">
                <Quote className="h-8 w-8 text-primary-foreground" />
              </div>
              
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-current" />
                ))}
              </div>
              
              <blockquote className="text-lg sm:text-xl text-foreground mb-6 leading-relaxed font-medium">
                "Working with Randeepa was an absolute pleasure. He understood our vision perfectly and delivered 
                a website that not only looks amazing but also drives real business results. Highly recommended!"
              </blockquote>
              
              <div className="border-t pt-4">
                <cite className="text-primary font-semibold text-lg">Rio Cafe</cite>
                <p className="text-muted-foreground text-sm mt-1">
                  Coffee Shop & Bakery
                </p>
                <div className="mt-2 text-sm bg-accent/10 text-accent px-3 py-1 rounded-full inline-block">
                  <Award className="h-3 w-3 inline mr-1" />
                  Featured Client
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Testimonial Illustration */}
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={testimonialIllustration} 
                alt="Customer testimonial illustration" 
                className="rounded-2xl shadow-elegant max-w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-accent/20 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;