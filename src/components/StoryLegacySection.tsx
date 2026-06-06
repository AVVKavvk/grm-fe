import { Clock, Globe } from "lucide-react";

const milestones = [
  {
    year: "2010",
    title: "Humble Beginnings",
    description:
      "Started as a small community run organized by local volunteers in Vasco, with just a handful of passionate runners coming together for the joy of running.",
  },
  {
    year: "2011",
    title: "First International Qualifier",
    description:
      "Became part of the Abbott World Marathon Majors Wanda Age Group Qualifier Series, marking our first step onto the global stage.",
  },
  {
    year: "2018",
    title: "AIMS Certification & Global Recognition",
    description:
      "Officially certified by AIMS, attracting runners from outside India and establishing credibility in the international marathon community.",
  },
  {
    year: "2023",
    title: "Global Participation",
    description:
      "Welcomed runners from 42 countries, turning the marathon into a truly international celebration of sports, culture, and community.",
  },
  {
    year: "2025",
    title: "Evolving into a Sports Festival",
    description:
      "Expanding beyond running to create a full-scale sports festival experience, combining competition, wellness, and cultural events for all participants.",
  },
];

const StoryLegacySection = () => {
  return (
    <section className="bg-[#0B1E3D] py-24">
      <div className="max-w-[1200px] mx-auto px-[5vw]">
        {/* ── Header ── */}
        <div className="text-center mb-16">
          <p className="font-['Montserrat'] text-[0.68rem] font-bold tracking-[0.20em] uppercase text-[#5BB8F5] mb-3">
            Since 2010
          </p>
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-black uppercase text-white leading-tight mb-5">
            Our Story & <span className="text-[#F47B20]">Legacy</span>
          </h2>
          <div className="w-12 h-[3px] bg-gradient-to-r from-[#1A6FB4] to-[#5BB8F5] rounded-full mx-auto" />
        </div>

        {/* ── Two-col split ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left — Heritage + Timeline */}
          <div className="flex flex-col gap-10">
            {/* Heritage quote */}
            <div className="relative pl-6 border-l-2 border-[#1A6FB4]">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-[#5BB8F5]" />
                <span className="font-['Montserrat'] text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#5BB8F5]">
                  Heritage
                </span>
              </div>
              <p className="font-['Open_Sans'] text-[0.95rem] text-white/65 leading-relaxed italic">
                "Born from humble beginnings, the Goa River Marathon started as
                a local community run organised by the Vasco Sports Club — a
                name synonymous with nurturing grassroots football in Goa. Over
                the years, it has grown into a world-class running festival,
                attracting athletes from 42 countries and thousands of
                passionate fitness lovers."
              </p>
            </div>

            {/* Timeline */}
            <div className="flex flex-col gap-0">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-4 group">
                  {/* Spine */}
                  <div className="flex flex-col items-center">
                    <div
                      className="w-12 h-12 shrink-0 rounded-full bg-[#122B55] border-2 border-[#1A6FB4]/40
                                    flex items-center justify-center
                                    group-hover:border-[#5BB8F5] group-hover:bg-[#1A6FB4]/20
                                    transition-all duration-300"
                    >
                      <span className="font-['Montserrat'] text-[0.6rem] font-black text-[#5BB8F5] leading-none text-center">
                        {m.year}
                      </span>
                    </div>
                    {i < milestones.length - 1 && (
                      <div className="w-px flex-1 min-h-[2rem] bg-gradient-to-b from-[#1A6FB4]/40 to-transparent my-1" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-8 pt-2 flex-1">
                    <h4
                      className="font-['Montserrat'] text-[0.88rem] font-bold text-white mb-1
                                   group-hover:text-[#5BB8F5] transition-colors duration-300"
                    >
                      {m.title}
                    </h4>
                    <p className="font-['Open_Sans'] text-[0.8rem] text-white/50 leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Evolution quote + visual cards */}
          <div className="flex flex-col gap-8">
            {/* Evolution quote */}
            <div className="relative pr-6 border-r-2 border-[#F47B20] text-right">
              <div className="flex items-center gap-2 mb-3 justify-end">
                <span className="font-['Montserrat'] text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#FF9748]">
                  Evolution
                </span>
                <Globe className="w-4 h-4 text-[#FF9748]" />
              </div>
              <p className="font-['Open_Sans'] text-[0.95rem] text-white/65 leading-relaxed italic">
                "The route across the Zuari River isn't just a race — it's a
                journey through time, culture, and Goa's vibrant spirit. This
                year marks a revolutionary chapter: we're expanding into a
                full-scale sports festival, with experiences designed to enhance
                every aspect of your running journey."
              </p>
            </div>

            {/* Highlight cards */}
            {[
              {
                emoji: "🌍",
                num: "42",
                label: "Countries",
                desc: "Runners from every corner of the globe come to race along the Zuari.",
              },
              {
                emoji: "🏅",
                num: "16",
                label: "Years",
                desc: "A decade and a half of community, competition, and celebration.",
              },
              {
                emoji: "🏃",
                num: "75K+",
                label: "Total Finishers",
                desc: "Every one of them carries a piece of Goa's spirit home.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="flex items-center gap-5 bg-[#122B55] border border-white/[0.08]
                           rounded-[16px] px-6 py-5
                           hover:border-[#1A6FB4]/40 hover:shadow-[0_20px_40px_rgba(11,30,61,0.4)]
                           transition-all duration-300 group"
              >
                <div
                  className="w-14 h-14 shrink-0 rounded-[12px] bg-[#1A6FB4]/15 border border-[#1A6FB4]/20
                                flex items-center justify-center text-2xl
                                group-hover:bg-[#1A6FB4]/25 transition-colors duration-300"
                >
                  {card.emoji}
                </div>
                <div>
                  <div className="flex items-baseline gap-1.5 mb-0.5">
                    <span className="font-['Montserrat'] text-2xl font-black text-white leading-none">
                      {card.num}
                    </span>
                    <span className="font-['Montserrat'] text-[0.65rem] font-bold tracking-[0.14em] uppercase text-[#5BB8F5]">
                      {card.label}
                    </span>
                  </div>
                  <p className="font-['Open_Sans'] text-[0.78rem] text-white/50 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryLegacySection;
