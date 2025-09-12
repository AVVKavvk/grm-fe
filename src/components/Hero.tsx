import { Button } from "@/components/ui/button";
import { Play, Calendar, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-goa-marathon.jpg";
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
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 border border-primary/20">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">
              Now with Advanced Technology
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-tech bg-clip-text text-transparent">
              Goa River
            </span>
            <br />
            <span className="text-foreground">Marathon 2025</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Experience India's most scenic marathon with cutting-edge
            technology. Run along the pristine Mandovi River with real-time
            tracking, digital timing, and immersive race analytics.
          </p>

          {/* Event Details */}
          <div className="flex flex-wrap gap-6 mb-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-5 h-5 text-primary" />
              <span>December 13 & 14, 2025</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Vasco Da Gama, Goa</span>
            </div>
          </div>

          {/* Vasco Sports Club Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-10">
            <span className="text-sm font-medium">
              An Initiative of Vasco Sports Club
            </span>
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
              Watch Preview
            </Button>
          </div>

          {/* Tech Features Preview */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border shadow-soft">
              <div className="text-2xl font-bold text-primary mb-2">
                GPS Tracking
              </div>
              <div className="text-muted-foreground">
                Real-time location and pace monitoring
              </div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border shadow-soft">
              <div className="text-2xl font-bold text-primary mb-2">
                Live Analytics
              </div>
              <div className="text-muted-foreground">
                Instant performance insights and metrics
              </div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border shadow-soft">
              <div className="text-2xl font-bold text-primary mb-2">
                Digital Timing
              </div>
              <div className="text-muted-foreground">
                Chip-based precision timing system
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
