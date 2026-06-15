import { Award, Users, Calendar, MapPin, Leaf, TrendingUp } from "lucide-react";
import StoryLegacySection from "./StoryLegacySection";
import RaceRouteSection from "./RaceRouteSection";
import aimsLogo from "@/assets/AIMS_logo.jpg";
import abbottLogo from "@/assets/Abbott_World_Marathon_Majors_logo_blue.svg";

/* ── Stats ─────────────────────────────────────────── */
const stats = [
  {
    number: "16",
    label: "Years Running",
    icon: <Calendar className="w-5 h-5" />,
  },
  {
    number: "75,000+",
    label: "Total Runners",
    icon: <Users className="w-5 h-5" />,
  },
  {
    number: "42",
    label: "Countries Represented",
    icon: <MapPin className="w-5 h-5" />,
  },
  {
    number: "100%",
    label: "Full of Festive Spirit",
    icon: <Leaf className="w-5 h-5" />,
  },
];

/* ── Highlights ────────────────────────────────────── */
const highlights = [
  {
    icon: <img src={aimsLogo} alt="AIMS" className="w-48 object-contain" />,
    title: "AIMS Certified",
    link: "https://aims-worldrunning.org/aims.html",
    description:
      "Official certification from the Association of International Marathons ensures world-class standards and international recognition.",
  },
  {
    icon: (
      <img src={abbottLogo} alt="Abbott WMM" className="w-24 object-contain" />
    ),
    title: "AbbottWMM Qualifier",
    link: "https://www.worldmarathonmajors.com/",
    description:
      "Part of the Abbott World Marathon Majors Wanda Age Group Qualifier Series, marking our first year on the global ranking stage.",
  },
];

/* ── Evolution Stats ───────────────────────────────── */
const evolutionStats = [
  {
    metric: "Participants",
    from: "1,500 (2010)",
    to: "50,000+ (2026)",
    growth: "+566%",
  },
  {
    metric: "Technology Features",
    from: "0 (2010)",
    to: "15+ (2026)",
    growth: "∞",
  },
  {
    metric: "Sponsor Partners",
    from: "3 (2010)",
    to: "25+ (2026)",
    growth: "+733%",
  },
  {
    metric: "Countries Represented",
    from: "1 (2010)",
    to: "42 (2026)",
    growth: "+1900%",
  },
];

/* ── Main Component ────────────────────────────────── */
const AboutSection = () => {
  return (
    <>
      <section id="about" className="bg-[#122B55] py-24">
        <div className="max-w-[1200px] mx-auto px-[5vw]">
          {/* ── Section header ── */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#1A6FB4]/20 border border-[#1A6FB4]/30 text-[#5BB8F5] px-4 py-1.5 rounded-full mb-5">
              <Award className="w-4 h-4" />
              <span className="font-['Montserrat'] text-[0.7rem] font-bold tracking-[0.14em] uppercase">
                Established 2010
              </span>
            </div>
            <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-black uppercase text-white leading-tight mb-4">
              India's Most <span className="text-[#F47B20]">Festive</span>{" "}
              <span className="text-[#5BB8F5]">Marathon</span>
            </h2>
            <p className="font-['Open_Sans'] text-base text-white/55 max-w-2xl mx-auto leading-relaxed">
              15 years of inspiring runners worldwide with cutting-edge
              technology and Goa's stunning landscapes.
            </p>
          </div>

          {/* ── Stats grid ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="group bg-[#122B55] border border-white/[0.08] rounded-[16px] p-6 text-center
                           hover:border-[#1A6FB4]/40 hover:shadow-[0_20px_40px_rgba(11,30,61,0.4)]
                           transition-all duration-300"
              >
                <div
                  className="w-10 h-10 rounded-[8px] bg-[#1A6FB4]/15 flex items-center justify-center
                                text-[#5BB8F5] mx-auto mb-4 group-hover:bg-[#1A6FB4]/30 transition-colors"
                >
                  {stat.icon}
                </div>
                <div className="font-['Montserrat'] text-3xl font-black text-white mb-1">
                  {stat.number}
                </div>
                <div className="font-['Montserrat'] text-[0.68rem] font-semibold tracking-[0.10em] uppercase text-white/45">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
