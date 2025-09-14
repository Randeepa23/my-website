import { Mail, Phone, Linkedin, Instagram, Facebook, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Website Design",
    "E-Commerce Solutions",
    "SEO Optimization",
    "Website Maintenance",
    "Custom Development",
    "Mobile Apps"
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/randeepa-ariyawansa-a589a6265",
      label: "LinkedIn"
    },
    {
      icon: Instagram,
      href: "https://instagram.com/randeeeepa",
      label: "Instagram"
    },
    {
      icon: Facebook,
      href: "https://facebook.com/randeepa.ariyawansa",
      label: "Facebook"
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">BizConnect</h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Professional web development services that help your business grow online. 
              Built by Randeepa Ariyawansa with passion and expertise.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span className="text-sm">avithariyawansa207@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span className="text-sm">0740904523</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-primary-foreground/80 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-3 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="bg-primary-foreground/10 rounded-lg p-4">
              <p className="text-sm font-medium mb-2">Ready to get started?</p>
              <p className="text-xs text-primary-foreground/80">
                Get a free consultation and quote for your project today.
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © 2025 BizConnect. All rights reserved. Built by Randeepa Ariyawansa.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
            >
              <span>Back to top</span>
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;