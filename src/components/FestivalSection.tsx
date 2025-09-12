import { Button } from "@/components/ui/button";
import { Music, Utensils, Trophy, GamepadIcon, Heart, MapPin } from "lucide-react";

const FestivalSection = () => {
  const foodVendors = [
    { name: "Goan Fish Curry & Rice", icon: "🐟", specialty: "Traditional coastal flavors" },
    { name: "Bebinca & Feni Corner", icon: "🥥", specialty: "Authentic Goan desserts & spirits" },
    { name: "Fresh Coconut Water", icon: "🥥", specialty: "Straight from the tree refreshment" },
    { name: "Cashew Fruit Delicacies", icon: "🥜", specialty: "Seasonal Goan specialties" },
    { name: "Portuguese Pastries", icon: "🥐", specialty: "Colonial heritage baking" },
    { name: "Goan Sausage Pav", icon: "🌭", specialty: "Street food favorites" }
  ];

  const activities = [
    { name: "Beach Volleyball", icon: <GamepadIcon className="w-6 h-6" />, description: "Tournament on Miramar sands" },
    { name: "Traditional Konkani Music", icon: <Music className="w-6 h-6" />, description: "Live cultural performances" },
    { name: "Massage & Recovery Zone", icon: <Heart className="w-6 h-6" />, description: "Professional sports therapy" },
    { name: "Photo Booth with Craco", icon: "📸", description: "Capture memories with our mascot" },
    { name: "Tech Demo Zone", icon: "⌚", description: "Try latest running gadgets" },
    { name: "Kids Play Area", icon: "🎠", description: "Family-friendly activities" }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
            <Trophy className="w-4 h-4" />
            <span className="text-sm font-medium">Finish Line Festival</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Ultimate 
            <span className="bg-gradient-sunset bg-clip-text text-transparent"> Celebration</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your marathon achievement deserves an epic celebration! Experience the best of Goan 
            culture, cuisine, and entertainment at our spectacular finish line festival.
          </p>
        </div>

        {/* Festival Overview */}
        <div className="bg-gradient-ocean p-8 rounded-2xl shadow-strong mb-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">
              🎉 Epic Finish Line Celebration 🎉
            </h3>
            <p className="text-primary-foreground/90 text-lg mb-6">
              The ultimate post-marathon party! Premium Goan cuisine, live entertainment, beach activities, and celebration - all FREE for participants at Miramar Beach finish line!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-primary-foreground/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary-foreground">25+</div>
                <div className="text-primary-foreground/80 text-sm">Goan Food Stalls</div>
              </div>
              <div className="bg-primary-foreground/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary-foreground">6</div>
                <div className="text-primary-foreground/80 text-sm">Live Performances</div>
              </div>
              <div className="bg-primary-foreground/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary-foreground">8</div>
                <div className="text-primary-foreground/80 text-sm">Beach Activities</div>
              </div>
              <div className="bg-primary-foreground/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary-foreground">FREE</div>
                <div className="text-primary-foreground/80 text-sm">For All Runners</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 text-primary-foreground/90">
              <MapPin className="w-5 h-5" />
              <span>Miramar Beach Finish Line • 10 AM - 6 PM</span>
            </div>
          </div>
        </div>

        {/* Festival Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-card p-8 rounded-xl border border-border shadow-soft">
            <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
              <Utensils className="w-6 h-6 text-primary" />
              Goan Food Paradise
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>🐟 Traditional Fish Curry & Rice</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>🥥 Fresh Coconut Water & Bebinca</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>🌭 Goan Sausage Pav & Pastries</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>🥜 Cashew Delicacies & Feni Corner</span>
              </div>
              <div className="bg-primary/10 text-primary px-3 py-2 rounded-lg text-center mt-4">
                <strong>25% OFF</strong> for all participants!
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-xl border border-border shadow-soft">
            <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
              <GamepadIcon className="w-6 h-6 text-primary" />
              Beach Entertainment
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>🏐 Beach Volleyball Tournament</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>🎵 Live Konkani Music & DJ Sets</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>💆‍♂️ Professional Recovery Massage</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>📸 Photo Booth with Craco</span>
              </div>
              <div className="bg-secondary/10 text-secondary px-3 py-2 rounded-lg text-center mt-4">
                <strong>FREE</strong> for all runners & families!
              </div>
            </div>
          </div>
        </div>


        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-sunset p-8 rounded-2xl shadow-strong max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-accent-foreground mb-4">
              Your Ultimate Marathon Celebration Awaits!
            </h3>
            <p className="text-accent-foreground/80 mb-6 text-lg">
              FREE for all participants • Guest passes ₹200 • Authentic Goan experience • Beach-side celebration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="bg-background text-foreground hover:bg-background/90">
                Get Guest Passes
              </Button>
              <Button variant="outline" size="lg" className="border-accent-foreground/20 text-accent-foreground hover:bg-accent-foreground/10">
                View Full Schedule
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FestivalSection;