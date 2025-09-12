import { Button } from "@/components/ui/button";
import { Heart, Camera, Smile, Users } from "lucide-react";

const MascotSection = () => {
  const cracofacts = [
    { icon: <Heart className="w-5 h-5" />, fact: "Loves running along Goa's beaches at sunrise" },
    { icon: <Camera className="w-5 h-5" />, fact: "Expert at taking selfies with marathon participants" },
    { icon: <Smile className="w-5 h-5" />, fact: "Can do the Goan cashew dance to motivate runners" },
    { icon: <Users className="w-5 h-5" />, fact: "Speaks 5 languages including fluent Portuguese" }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Mascot Image & Info */}
          <div className="text-center lg:text-left">
            <div className="relative mb-8">
              {/* Craco Image */}
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-full overflow-hidden shadow-elegant">
                <img 
                  src="/lovable-uploads/c0c27ab1-2592-4a1a-b7be-826296e14106.png" 
                  alt="Craco - The Goa River Marathon Mascot"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Tech Badge */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-strong rotate-12">
                Tech-Savvy!
              </div>
            </div>
            
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Smile className="w-4 h-4" />
              <span className="text-sm font-medium">Meet Our Mascot</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Say Hello to 
              <span className="bg-gradient-ocean bg-clip-text text-transparent"> Craco!</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Named after Goa's famous crabs, Craco is our tech-loving mascot who'll be your 
              running companion throughout the marathon experience. From registration help to 
              race day motivation, Craco is here to make your journey unforgettable!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {cracofacts.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg border border-border">
                  <div className="text-primary mt-0.5">
                    {item.icon}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {item.fact}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Section */}
          <div className="space-y-8">
            {/* Chat with Craco */}
            <div className="bg-card p-8 rounded-xl border border-border shadow-soft">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src="/lovable-uploads/c0c27ab1-2592-4a1a-b7be-826296e14106.png" 
                    alt="Craco"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Chat with Craco</h3>
                  <p className="text-sm text-muted-foreground">Get instant help with registration and race info</p>
                </div>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg mb-4 border-l-4 border-primary">
                <p className="text-sm text-muted-foreground italic">
                  "Hey there, future marathon hero! 🏃‍♂️ I'm here to help you with anything you need. 
                  Want to know about the best training spots in Goa? Or maybe you need help choosing 
                  the right race category? Just ask me!"
                </p>
              </div>
              <Button variant="hero" className="w-full">
                Start Chatting with Craco
              </Button>
            </div>

            {/* Craco's Challenges */}
            <div className="bg-gradient-ocean p-8 rounded-xl shadow-strong">
              <h3 className="text-xl font-bold text-primary-foreground mb-4">
                Craco's Pre-Race Challenges
              </h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-primary-foreground/90">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  <span className="text-sm">Complete 3 training runs and share photos with Craco</span>
                </div>
                <div className="flex items-center gap-3 text-primary-foreground/90">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  <span className="text-sm">Try Goan cuisine recommendations from Craco's food guide</span>
                </div>
                <div className="flex items-center gap-3 text-primary-foreground/90">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  <span className="text-sm">Download and test all tech features with Craco's help</span>
                </div>
              </div>
              <div className="text-sm text-primary-foreground/80">
                Complete all challenges and get special Craco merchandise at the race!
              </div>
            </div>

            {/* Social Media */}
            <div className="text-center p-6 bg-muted/50 rounded-lg border border-border">
              <h4 className="font-bold text-foreground mb-2">Follow Craco's Adventures</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Get daily training tips, Goan cultural insights, and tech updates
              </p>
              <div className="flex justify-center gap-4">
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">📸 Instagram</a>
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">🐦 Twitter</a>
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">📘 Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MascotSection;