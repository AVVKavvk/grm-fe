import { Utensils, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import recoveryRave from "@/assets/recovery-rave.jpeg";
import carbLoading from "@/assets/carb-loading.jpeg";
import finishLine from "@/assets/finish-line.jpeg";
import { GetRegisterButton } from "@/lib/localstorage";

const highlights = [
  {
    icon: Utensils,
    image: carbLoading,
    emoji: "🍝",
    title: "Carb-Loading Fiesta – Fuel Meets Flavor",
    description:
      "Kick off your marathon weekend with a feast designed to power your run. The Carb-Loading Fiesta brings together Goa's top chefs, artisanal bakers, and nutrition experts, serving up hearty pastas, wood-fired breads, fresh salads, and high-energy dishes crafted for performance.",
    details: "📅 Dec 13th, 5 pm – 8 pm | 📍 Hotel HQ, Vasco",
  },
  {
    icon: Trophy,
    image: finishLine,
    emoji: "🏆",
    title: "Finish Line Celebrations – Fun Beyond the Run",
    description:
      "Crossing the line is just the beginning. At the Finish Line Celebrations, you'll find a play arena with football kick zones, quick pickleball matches, mini fitness challenges, and family-friendly games. Add in vibrant food stalls, live entertainment, and photo-worthy moments.",
    details: "📅 Dec 14th | 📍 Chicalim Ground",
  },
];

const FestivalHighlights = () => {
  return (
    <section className="py-24 px-4 bg-[#0B1E3D]">
      <div className="max-w-[1200px] mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="font-['Montserrat'] text-[0.68rem] font-bold tracking-[0.20em] uppercase text-[#5BB8F5] mb-3">
            More Than A Race
          </p>
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-black uppercase text-white leading-tight mb-4">
            Festival <span className="text-[#F47B20]">Highlights</span>
          </h2>
          <p className="font-['Open_Sans'] text-base text-white/55 max-w-xl mx-auto leading-relaxed">
            Experience the ultimate celebration that goes beyond the run
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Link
                to="/events"
                key={index}
                className="group relative bg-[#122B55] border border-white/[0.08] rounded-[16px] overflow-hidden
                           hover:border-[#1A6FB4]/50 hover:shadow-[0_20px_40px_rgba(11,30,61,0.5)]
                           transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-52">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#122B55] via-transparent to-transparent" />
                  {/* emoji badge */}
                  <span className="absolute top-4 left-4 text-3xl drop-shadow-lg">
                    {highlight.emoji}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-6">
                  {/* Icon + title */}
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className="shrink-0 w-10 h-10 rounded-[8px] bg-[#1A6FB4]/20 flex items-center justify-center
                                    group-hover:bg-[#1A6FB4]/35 transition-colors duration-300"
                    >
                      <Icon className="w-5 h-5 text-[#5BB8F5]" />
                    </div>
                    <h3
                      className="font-['Montserrat'] text-lg font-bold text-white leading-snug
                                   group-hover:text-[#5BB8F5] transition-colors duration-300"
                    >
                      {highlight.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="font-['Open_Sans'] text-sm text-white/60 leading-relaxed mb-4 flex-1">
                    {highlight.description}
                  </p>

                  {/* Details */}
                  <p className="font-['Montserrat'] text-[0.75rem] font-semibold tracking-wide text-[#FF9748]">
                    {highlight.details}
                  </p>
                </div>

                {/* Bottom accent bar */}
                <div
                  className="h-[3px] bg-gradient-to-r from-[#1A6FB4] via-[#5BB8F5] to-[#F47B20]
                                transform scale-x-0 group-hover:scale-x-100
                                transition-transform duration-500 origin-left"
                />
              </Link>
            );
          })}
        </div>

        {/* CTA banner */}
        <div
          className="mt-14 bg-[#122B55] border border-[#1A6FB4]/25 rounded-[16px] px-8 py-12 text-center
                        relative overflow-hidden"
        >
          {/* Subtle glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A6FB4]/10 via-transparent to-[#F47B20]/08 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <p className="font-['Montserrat'] text-[0.68rem] font-bold tracking-[0.20em] uppercase text-[#5BB8F5] mb-3">
              Don't Miss Out
            </p>
            <h3 className="font-['Montserrat'] text-3xl md:text-4xl font-black uppercase text-white mb-4">
              Limited Seats <span className="text-[#F47B20]">Available!</span>
            </h3>
            <p className="font-['Open_Sans'] text-base text-white/60 leading-relaxed mb-8">
              The{" "}
              <span className="font-semibold text-[#5BB8F5]">
                Carb-Loading Fiesta
              </span>{" "}
              has limited capacity. With{" "}
              <span className="font-bold text-[#FF9748]">7,500</span> runners
              expected, we can only accommodate{" "}
              <span className="font-bold text-[#FF9748]">1,500</span> at these
              exclusive events. Book your festival pass now to secure your spot.
            </p>
            <GetRegisterButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FestivalHighlights;
