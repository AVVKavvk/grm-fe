import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" }
  ];

  const quickLinks = [
    { label: "About Marathon", href: "#about" },
    { label: "Technology", href: "#technology" },
    { label: "Events & Timing", href: "#events" },
    { label: "Registration", href: "#registration" },
    { label: "Training Plans", href: "#" },
    { label: "FAQs", href: "#" }
  ];

  const supportLinks = [
    { label: "Contact Us", href: "#" },
    { label: "Volunteer", href: "#" },
    { label: "Sponsorship", href: "#" },
    { label: "Media Kit", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Privacy Policy", href: "#" }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">GRM</span>
              </div>
              <span className="font-bold text-xl">Goa River Marathon</span>
            </div>
            <p className="text-background/80 leading-relaxed mb-6">
              India's most scenic and technologically advanced marathon experience. 
              Join us for an unforgettable journey along the beautiful Mandovi River.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="text-background/60 hover:text-primary transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <div className="text-background/80">
                    Vasco Sports Club<br />
                    Panaji, Goa 403001<br />
                    India
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a 
                  href="tel:+91-9876543210"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  +91-9876543210
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a 
                  href="mailto:info@goarivermarathon.com"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  info@goarivermarathon.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-background/60 text-sm mb-4 md:mb-0">
              © 2024 Goa River Marathon. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-background/60">
              <span>Powered by cutting-edge technology</span>
              <span>•</span>
              <span>AIMS Certified Course</span>
              <span>•</span>
              <span>Eco-friendly Event</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;