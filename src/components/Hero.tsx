import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Users, Award, Zap } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import heroIllustration from "@/assets/hero-illustration.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Animated Gradient */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/10 to-accent/20"></div>
      </div>
      
      {/* Enhanced Floating Elements with Better Animation */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-accent/30 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-primary/20 rounded-full animate-ping"></div>
      <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-accent/40 rounded-full animate-bounce delay-500"></div>
      
      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content - Left Side */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight drop-shadow-lg">
                Transform Your Business with a{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-black animate-pulse">
                  Stunning Website!
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold leading-relaxed max-w-2xl animate-fade-in drop-shadow-md bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                Professional, fast, and affordable websites that convert visitors into customers. 
                Let's build your digital success story together!
              </p>
              
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-accent to-orange-500 hover:from-accent/90 hover:to-orange-500/90 text-white font-bold px-8 py-4 text-lg rounded-xl shadow-glow hover:shadow-soft hover:scale-105 transition-all duration-300 group"
                asChild
              >
                <a href="mailto:avithariyawansa207@gmail.com?subject=Website%20Development%20Inquiry&body=Hi%20Randeepa,%0A%0AI'm%20interested%20in%20creating%20a%20website%20for%20my%20business.%20Please%20get%20in%20touch%20with%20me.%0A%0AThank%20you!">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg rounded-xl backdrop-blur-sm hover:scale-105 transition-all duration-300 group shadow-lg"
                asChild
              >
                <a href="#portfolio">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-smooth" />
                  See Our Work
                </a>
              </Button>
            </div>
            
            {/* Enhanced Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-white/90 text-sm animate-fade-in">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                <Zap className="w-4 h-4 text-accent" />
                <span className="font-medium">Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                <Award className="w-4 h-4 text-accent" />
                <span className="font-medium">SEO Optimized</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                <Users className="w-4 h-4 text-accent" />
                <span className="font-medium">Mobile First</span>
              </div>
            </div>
          </div>
          
          {/* Hero Illustration - Right Side */}
          <div className="relative animate-fade-in">
            <div className="relative">
              <img 
                src={heroIllustration} 
                alt="Professional website development workspace showcasing modern design" 
                className="rounded-3xl shadow-soft w-full h-auto transform hover:scale-105 transition-all duration-500"
              />
              
              {/* Floating Card Elements */}
              <div className="absolute -top-6 -left-6 bg-card/90 backdrop-blur-md rounded-2xl p-4 shadow-glow animate-bounce">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-foreground">Live Website</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-card/90 backdrop-blur-md rounded-2xl p-4 shadow-glow animate-pulse">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">100%</div>
                  <div className="text-xs text-muted-foreground">Satisfaction</div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-primary rounded-full opacity-30 animate-ping"></div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-accent/40 rounded-full animate-bounce"></div>
            </div>
          </div>
          
        </div>
      </div>
      
    </section>
  );
};

export default Hero;