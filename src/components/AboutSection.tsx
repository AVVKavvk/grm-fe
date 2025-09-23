import { Button } from "@/components/ui/button";
import { Award, Users, Calendar, MapPin, Heart, Leaf } from "lucide-react";
import StoryLegacySection from "./StoryLegacySection";

const AboutSection = () => {
  const stats = [
    {
      number: "14+",
      label: "Years Running",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      number: "25,000+",
      label: "Total Runners",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "42",
      label: "Countries Represented",
      icon: <MapPin className="w-6 h-6" />,
    },
    {
      number: "100%",
      label: "Festival Spirit",
      icon: <Leaf className="w-6 h-6" />,
    },
  ];

  const highlights = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "AIMS Certified",
      description:
        "Official certification from Association of International Marathons ensures world-class standards and international recognition.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Charity Partner",
      description:
        "Supporting local Goan communities and environmental conservation through our dedicated charity partnerships.",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainable Event",
      description:
        "Zero waste policy, eco-friendly materials, and carbon offset initiatives make this a truly green marathon.",
    },
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Award className="w-4 h-4" />
            <span className="text-sm font-medium">Established 2010</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            India's Most
            <span className="bg-gradient-ocean bg-clip-text text-transparent">
              {" "}
              Innovative Marathon
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            15 years of inspiring runners worldwide with cutting-edge technology
            and Goa's stunning landscapes.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-card p-6 rounded-xl border border-border shadow-soft hover:shadow-medium transition-smooth">
                <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        {<StoryLegacySection />}

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="text-center p-8 bg-card rounded-xl border border-border shadow-soft hover:shadow-medium transition-smooth group"
            >
              <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {highlight.icon}
              </div>
              <h4 className="text-xl font-bold text-foreground mb-4">
                {highlight.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-sunset p-8 rounded-2xl shadow-strong max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-accent-foreground mb-4">
              Be Part of Marathon History
            </h3>
            <p className="text-accent-foreground/80 mb-6 text-lg">
              Join us as we write the next chapter of the Goa River Marathon
              legacy with groundbreaking technology and unforgettable
              experiences.
            </p>
            <Button
              variant="hero"
              size="lg"
              className="bg-background text-foreground hover:bg-background/90"
            >
              Learn More About Our Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
