import { Button } from "@/components/ui/button";
import { Play, Calendar, MapPin, X } from "lucide-react";
import heroImage from "@/assets/image.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-md">
              SKF Goa River
            </span>
            <br />
            <span className="text-foreground font-extrabold italic tracking-wide">
              Marathon 2025
            </span>
          </h1>

          {/* Vasco Sports Club Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/10 text-red-500 px-4 py-2 rounded-full mb-10">
            <span className="text-sm font-medium">
              Run the River. Feel the Festival
            </span>
          </div>
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-2xl leading-relaxed">
            Welcome to India's most scenic fitness festival. More than just a
            marathon, Goa River Marathon is a celebration of sport, culture, and
            community. For over 14 years, we've brought together runners from
            across the world to race, recover, and revel by Goa's riverside.
          </p>

          {/* Event Details */}
          <div className="flex flex-wrap gap-6 mb-6">
            <div className="flex items-center gap-2 text-gray-800">
              <Calendar className="w-5 h-5 text-primary" />
              <span>December 13th and 14th, 2025</span>
            </div>
            <div className="flex items-center gap-2 text-gray-800">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Vasco Da Gama, Goa</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://www.ifinish.in/running/SKF2025" target="_blank">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Register Now
              </Button>
            </a>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 group"
              onClick={() => setIsOpen(true)}
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Glimpses
            </Button>

            {isOpen && (
              <div
                className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-in fade-in"
                onClick={() => setIsOpen(false)}
              >
                <div
                  className="relative w-full max-w-5xl bg-background rounded-lg overflow-hidden shadow-2xl animate-in zoom-in-95"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  {/* Video Container */}
                  <div
                    className="relative w-full"
                    style={{ paddingBottom: "56.25%" }}
                  >
                    <iframe
                      src="https://drive.google.com/file/d/1y59jYDiGUkOTR_qxt5P9Gl5Wls5c1DxQ/preview"
                      className="absolute inset-0 w-full h-full"
                      allow="autoplay"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Tech Features Preview */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
