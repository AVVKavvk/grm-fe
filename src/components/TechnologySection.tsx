import { Button } from "@/components/ui/button";
import { Smartphone, Activity, Zap, Globe, Clock, Trophy } from "lucide-react";
import techImage from "@/assets/tech-features.jpg";

const TechnologySection = () => {
  const features = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Integration",
      description: "Track your training, register for events, and access real-time race data through our intuitive mobile app.",
      highlight: "iOS & Android"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Live Performance Analytics",
      description: "Get instant feedback on pace, heart rate zones, and energy expenditure during your run.",
      highlight: "Real-time Data"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "RFID Chip Timing",
      description: "Precision timing with RFID technology ensures accurate split times and final results.",
      highlight: "0.1s Accuracy"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "GPS Route Mapping",
      description: "Follow the exact race route with turn-by-turn navigation and elevation profiles.",
      highlight: "Satellite Precision"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Spectator Tracking",
      description: "Friends and family can track your progress in real-time with estimated arrival times at key points.",
      highlight: "Live Updates"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Digital Achievements",
      description: "Earn digital badges, compare with past performances, and share your achievements instantly.",
      highlight: "Social Sharing"
    }
  ];

  return (
    <section id="technology" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Powered by Technology</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Future of 
            <span className="bg-gradient-tech bg-clip-text text-transparent"> Running</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're revolutionizing the marathon experience with cutting-edge technology that 
            enhances performance, safety, and engagement for runners and spectators alike.
          </p>
        </div>

        {/* Tech Image */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-strong max-w-4xl mx-auto">
            <img 
              src={techImage} 
              alt="Technology Features" 
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-primary/20"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl border border-border shadow-soft hover:shadow-medium transition-smooth group"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <div className="mb-2">
                <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded-full">
                  {feature.highlight}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-ocean p-8 rounded-2xl shadow-strong max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Experience the Tech Revolution
            </h3>
            <p className="text-primary-foreground/80 mb-6 text-lg">
              Join thousands of runners who are already experiencing the future of marathons.
            </p>
            <Button variant="hero" size="lg" className="bg-background text-foreground hover:bg-background/90">
              Download the App
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;