import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import vascoLogo from "@/assets/VSG_LOGO.png";
import skfLogo from "@/assets/SKF_GRM_Logo_removebg.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { link: "/", label: "Home" },
    { link: "/events", label: "Events" },
    { link: "/sponsors", label: "Sponsors" },
    { link: "/memories", label: "Gallery" },
    { link: "/contact-us", label: "Contact Us" },
    // { link: "/technology", label: "Technology" },
    { link: "/shop", label: "Shop (Coming Soon)" },
    { link: "/faq", label: "FAQ" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      {/* Top Banner */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 flex flex-col sm:flex-row items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <svg
            className="w-6 h-6 text-yellow-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm.75 4a.75.75 0 01.75.75v4.19l2.22 1.3a.75.75 0 11-.75 1.3l-2.72-1.59a.75.75 0 01-.37-.65V6.75a.75.75 0 01.75-.75z" />
          </svg>
          <p className="text-sm sm:text-base font-semibold">
            Register Now –{" "}
            <span className="font-bold text-yellow-300">
              Prices Set to Rise Soon!
            </span>
          </p>
        </div>
        <Link to="/registration">
          <Button variant="cta" size="lg">
            Register Now
          </Button>
        </Link>
      </div>

      {/* Navigation */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-16">
            <img src={skfLogo} alt="" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.link}
              to={item.link}
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link to="/registration">
            <Button variant="cta" size="lg">
              Register Now
            </Button>
          </Link>
        </div>
        <div className="flex justify-center font-semibold items-center gap-2">
          <img src={vascoLogo} width="55px" alt="" />
          <h1>Vasco Sports Club </h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden px-4 pb-4 border-t border-border pt-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.link}
                to={item.link}
                className="text-muted-foreground hover:text-primary transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="cta" className="mt-4">
              Register Now
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
