import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      race: "Full Marathon 2024",
      rating: 5,
      text: "The organization was flawless! The river route is absolutely stunning, and the tech integration made tracking so easy. Already registered for 2025!",
      avatar: "👩"
    },
    {
      name: "Raj Patel",
      location: "Bangalore",
      race: "Half Marathon 2024",
      rating: 5,
      text: "Best marathon experience in India. The post-race celebration at Bogmalo Beach was incredible. The whole event felt like a festival!",
      avatar: "👨"
    },
    {
      name: "Sarah Johnson",
      location: "UK",
      race: "10K Run 2024",
      rating: 5,
      text: "Came to Goa for vacation, ended up having the most amazing running experience. The hospitality and organization exceeded all expectations.",
      avatar: "👱‍♀️"
    },
    {
      name: "Dr. Amit Singh",
      location: "Delhi",
      race: "Full Marathon 2023",
      rating: 5,
      text: "14 years of excellence shows! From medical support to hydration stations, everything was perfect. The GPS tracking feature is a game-changer.",
      avatar: "👨‍⚕️"
    },
    {
      name: "Maria D'Souza",
      location: "Goa",
      race: "5K Fun Run 2024",
      rating: 5,
      text: "As a local, I'm proud of how this marathon showcases our beautiful Goa. The community spirit and Craco mascot make it so special!",
      avatar: "👩‍🦱"
    },
    {
      name: "James Wilson",
      location: "Australia",
      race: "20 Miler 2024",
      rating: 5,
      text: "Traveled from Australia just for this marathon. The combination of traditional Goan culture and modern tech made it unforgettable.",
      avatar: "👨‍🦲"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">Runner Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our 
            <span className="bg-gradient-sunset bg-clip-text text-transparent"> Runners Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Over 50,000 runners have experienced the magic of our marathon. Here's what they have to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-medium transition-smooth">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <div className="bg-accent/5 px-3 py-1 rounded-full inline-block mb-4">
                <span className="text-xs text-accent font-medium">{testimonial.race}</span>
              </div>
              
              <div className="relative">
                <Quote className="w-4 h-4 text-muted-foreground mb-2" />
                <p className="text-muted-foreground italic">{testimonial.text}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-2">50K+</div>
            <div className="text-sm text-muted-foreground">Total Participants</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Would Recommend</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-2">75%</div>
            <div className="text-sm text-muted-foreground">Return Participants</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;