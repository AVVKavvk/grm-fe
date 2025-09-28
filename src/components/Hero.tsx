import { Button } from "@/components/ui/button";
import { Play, Calendar, MapPin } from "lucide-react";
import heroImage from "@/assets/image.png";
import { Link } from "react-router-dom";

const Hero = () => {
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-tech bg-clip-text text-transparent">
              SKF Goa River
            </span>
            <br />
            <span className="text-foreground">Marathon 2025</span>
          </h1>

          {/* Vasco Sports Club Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/10 text-red-500 px-4 py-2 rounded-full mb-10">
            <span className="text-sm font-medium">
              Run the River. Feel the Festival
            </span>
          </div>
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-2xl leading-relaxed">
            Welcome to India’s most scenic fitness festival. More than just a
            marathon, Goa River Marathon is a celebration of sport, culture, and
            community. For over 14 years, we’ve brought together runners from
            across the world to race, recover, and revel by Goa’s riverside.
          </p>

          {/* Event Details */}
          <div className="flex flex-wrap gap-6 mb-6">
            <div className="flex items-center gap-2 text-gray-800">
              <Calendar className="w-5 h-5 text-primary" />
              <span>December 14, 2025</span>
            </div>
            <div className="flex items-center gap-2 text-gray-800">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Vasco Da Gama, Goa</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/registration">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Register Now
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 group"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Explore the Festival
            </Button>
          </div>

          {/* Tech Features Preview */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
