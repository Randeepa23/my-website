import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import portfolioRio from "@/assets/portfolio-rio.jpg";
import portfolioLuxury from "@/assets/portfolio-luxury.jpg";
import portfolioMap from "@/assets/portfolio-map.jpg";
import portfolioIllustration from "@/assets/portfolio-illustration.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Rio Café Website",
      image: portfolioRio,
      description: "A modern cafe website with menu showcase and online ordering system",
      url: "https://rio-cafe-7na2.vercel.app/",
      tech: ["React", "Tailwind CSS", "Responsive Design"],
      category: "Restaurant & Food"
    },
    {
      title: "Luxury Property Showcase",
      image: portfolioLuxury,
      description: "Elegant real estate platform for premium property listings with advanced filtering and virtual tours",
      url: "https://luxury-property-showcase-website.vercel.app/",
      tech: ["React", "TypeScript", "Modern UI"],
      category: "Real Estate"
    },
    {
      title: "Interactive Map Property Finder",
      image: portfolioMap,
      description: "Advanced property search with interactive map integration and location-based filtering",
      url: "https://interactive-map-based-property-find.vercel.app/",
      tech: ["React", "Map API", "Search Filters"],
      category: "Real Estate Tech"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 text-primary text-sm font-medium mb-4">
            <ExternalLink className="h-4 w-4" />
            <span>Our Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover how we've transformed businesses with stunning, high-converting websites 
            that drive real results and growth.
          </p>
          
          {/* Portfolio Illustration */}
          <div className="relative max-w-xl mx-auto mb-12">
            <img 
              src={portfolioIllustration} 
              alt="Professional portfolio showcase with successful projects" 
              className="rounded-2xl shadow-elegant w-full h-auto"
            />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-primary rounded-full opacity-20 animate-ping"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-0 shadow-soft hover:shadow-glow transition-smooth hover:scale-105 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-smooth"></div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-medium">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button 
                  asChild
                  variant="outline" 
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                >
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    View Live Site
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;