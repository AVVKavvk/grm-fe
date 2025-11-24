import { Utensils, Music, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import recoveryRave from "@/assets/recovery-rave.jpeg";
import carbLoading from "@/assets/carb-loading.jpeg";
import finishLine from "@/assets/finish-line.jpeg";
import { GetRegisterButton } from "@/lib/localstorage";
const FestivalHighlights = () => {
  const highlights = [
    {
      icon: Utensils,
      image: carbLoading,
      emoji: "🍝",
      title: "Carb-Loading Fiesta – Fuel Meets Flavor",
      description:
        "Kick off your marathon weekend with a feast designed to power your run. The Carb-Loading Fiesta brings together Goa's top chefs, artisanal bakers, and nutrition experts, serving up hearty pastas, wood-fired breads, fresh salads, and high-energy dishes crafted for performance. Pair it with protein shakes, recovery smoothies, or refreshing mocktails as you soak in the pre-race buzz.",
      details: "📅 Dec 13th, 5 pm – 8 pm | 📍 Chicalim Ground",
    },
    {
      icon: Trophy,
      image: finishLine,
      emoji: "🏆",
      title: "Finish Line Celebrations – Fun Beyond the Run",
      description:
        "Crossing the line is just the beginning. At the Finish Line Celebrations, you'll find a play arena with football kick zones, quick pickleball matches, mini fitness challenges, and family-friendly games. Add in vibrant food stalls, live entertainment, and photo-worthy moments — it's a finish line you won't want to leave.",
      details: "📅 Dec 14th | 📍 Chicalim Ground",
    },
    // {
    //   icon: Music,
    //   image: recoveryRave,
    //   emoji: "🎶",
    //   title: "Recovery Rave – Dance, Chill & Recharge",
    //   description:
    //     "When the run is done, it's time to let loose. The Recovery Rave is where music meets wellness — with live DJs, dance floors under the Goan sky, and a buzzing community vibe. Step into the Ice Bath Zone for a cool plunge, unwind with massage therapists, or stretch it out at dedicated recovery corners. It's the perfect blend of celebration and post-race self-care.",
    //   details: "📅 Dec 14th, 4 pm – 10 pm | 📍 Jubilate, Goa",
    // },
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Festival Highlights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the ultimate celebration that goes beyond the run
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Link
                to="/events"
                key={index}
                className="group relative bg-card border border-border rounded-xl p-6 hover-scale transition-all duration-300 hover:shadow-lg hover:border-primary/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-2xl">{highlight.emoji}</span>
                  </div>

                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />

                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {highlight.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-3">
                    {highlight.description}
                  </p>

                  <p className="text-sm font-medium text-primary">
                    {highlight.details}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Link>
            );
          })}
        </div>
      </div>
      <section className="mt-16 bg-gradient-to-t from-primary/30 to-primary/20 text-foreground py-12 px-6 rounded-2xl text-center border border-primary/30">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Limited Seats Available!
          </h3>
          <p className="text-lg md:text-xl mb-6 text-muted-foreground leading-relaxed">
            The{" "}
            <span className="font-semibold text-primary">
              Carb-Loading Fiesta
            </span>{" "}
            have limited capacity. With{" "}
            <span className="font-bold text-red-500">10,000 </span> runners
            expected this year, we can only accommodate{" "}
            <span className="font-bold text-red-500">1,500 </span> at these
            exclusive events. Book your festival pass now to secure your spot
            and make the most of your marathon weekend.
          </p>
          <GetRegisterButton />
        </div>
      </section>
    </div>
  );
};

export default FestivalHighlights;
