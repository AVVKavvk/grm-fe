import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, link: "#", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, link: "#", label: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, link: "#", label: "Twitter" },
    { icon: <Youtube className="w-5 h-5" />, link: "#", label: "YouTube" },
  ];

  const quickLinks = [
    { label: "About Marathon", link: "/" },
    { label: "Technology", link: "/technology" },
    { label: "Events & Timing", link: "/events" },
    { label: "Registration", link: "/registration" },
    { label: "Training Plans", link: "#" },
    { label: "FAQs", link: "#" },
  ];

  const supportLinks = [
    { label: "Contact Us", link: "/contact-us" },
    { label: "Volunteer", link: "#" },
    { label: "Sponsorship", link: "#" },
    { label: "Media Kit", link: "#" },
    { label: "Terms & Conditions", link: "#" },
    { label: "Privacy Policy", link: "#" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  GRM
                </span>
              </div>
              <span className="font-bold text-xl">Goa River Marathon</span>
            </div>
            <p className="text-background/80 leading-relaxed mb-6">
              India's most scenic and technologically advanced marathon
              experience. Join us for an unforgettable journey along the
              beautiful Mandovi River.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.link}
                  aria-label={link.label}
                  className="text-background/60 hover:text-primary transition-colors"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.link}
                    className="text-background/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
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
                  <Link
                    to={link.link}
                    className="text-background/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
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
                    Vasco Sports Club
                    <br />
                    Panaji, Goa 403001
                    <br />
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
