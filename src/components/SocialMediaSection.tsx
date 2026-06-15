import { Instagram, Facebook, Youtube, Hash, ExternalLink } from "lucide-react";

const socialPlatforms = [
  {
    name: "Instagram",
    handle: "@skfgoarivermarathon",
    link: "https://www.instagram.com/skfgoarivermarathon/",
    followers: "2.2K+",
    icon: Instagram,
    accentColor: "#E1306C",
    desc: "Daily training tips, behind-the-scenes content",
  },
  {
    name: "Facebook",
    handle: "SKF.Goa.River.Marathon",
    link: "https://www.facebook.com/SKF.Goa.River.Marathon",
    followers: "7.9K+",
    icon: Facebook,
    accentColor: "#1877F2",
    desc: "Event updates, community discussions, race day info",
  },
  {
    name: "YouTube",
    handle: "@SkfGoaRiverMarathon",
    link: "https://www.youtube.com/@SkfGoaRiverMarathon",
    followers: "112+",
    icon: Youtube,
    accentColor: "#FF0000",
    desc: "Race highlights, training videos, runner stories",
  },
];

const hashtags = [
  "#GoaRiverMarathon2027",
  "#RunWithSKF",
  "#GoaRunning",
  "#MarathonMemories",
  "#RunGoa",
  "#ZuariRiverRun",
];

const SocialMediaSection = () => {
  return (
    <section className="bg-[#0B1E3D] py-24">
      <div className="max-w-[1200px] mx-auto px-[5vw]">
        {/* ── Header ── */}
        <div className="text-center mb-14">
          <p className="font-['Montserrat'] text-[0.68rem] font-bold tracking-[0.20em] uppercase text-[#5BB8F5] mb-3">
            Stay Connected
          </p>
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-black uppercase text-white leading-tight mb-4">
            Join the <span className="text-[#F47B20]">Conversation</span>
          </h2>
          <div className="w-12 h-[3px] bg-gradient-to-r from-[#1A6FB4] to-[#5BB8F5] rounded-full mx-auto mb-5" />
          <p className="font-['Open_Sans'] text-base text-white/55 max-w-xl mx-auto leading-relaxed">
            Connect with runners worldwide, share your journey, and stay updated
            with the latest marathon news and training tips.
          </p>
        </div>

        {/* ── Social platform cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {socialPlatforms.map((p, i) => {
            const Icon = p.icon;
            return (
              <a
                key={i}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-[#122B55] border border-white/[0.08] rounded-[16px]
                           overflow-hidden hover:border-white/20
                           hover:shadow-[0_20px_40px_rgba(11,30,61,0.5)]
                           transition-all duration-300"
              >
                {/* Coloured top bar */}
                <div
                  className="px-6 pt-6 pb-5 flex items-start justify-between"
                  style={{ borderBottom: `1px solid rgba(255,255,255,0.06)` }}
                >
                  <div
                    className="w-12 h-12 rounded-[10px] flex items-center justify-center"
                    style={{ background: `${p.accentColor}22` }}
                  >
                    <Icon
                      className="w-6 h-6"
                      style={{ color: p.accentColor }}
                    />
                  </div>
                  <span
                    className="font-['Montserrat'] text-[0.65rem] font-bold tracking-[0.12em] uppercase
                               px-2.5 py-1 rounded-full border"
                    style={{
                      color: p.accentColor,
                      borderColor: `${p.accentColor}44`,
                      background: `${p.accentColor}11`,
                    }}
                  >
                    {p.followers}
                  </span>
                </div>

                {/* Body */}
                <div className="px-6 py-5 flex-1 flex flex-col gap-3">
                  <div>
                    <h3 className="font-['Montserrat'] text-base font-bold text-white mb-0.5">
                      {p.name}
                    </h3>
                    <p className="font-['Open_Sans'] text-[0.72rem] text-white/40">
                      {p.handle}
                    </p>
                  </div>
                  <p className="font-['Open_Sans'] text-[0.8rem] text-white/55 leading-relaxed flex-1">
                    {p.desc}
                  </p>

                  {/* Follow button */}
                  <div
                    className="flex items-center justify-center gap-2 mt-1 py-2.5 rounded-[8px] border
                               font-['Montserrat'] text-[0.72rem] font-bold tracking-[0.10em] uppercase
                               transition-all duration-200"
                    style={{
                      borderColor: `${p.accentColor}44`,
                      color: p.accentColor,
                    }}
                  >
                    Follow
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* ── Trending hashtags ── */}
        {/* <div className="bg-[#122B55] border border-white/[0.08] rounded-[16px] px-8 py-7">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-8 h-8 rounded-[8px] bg-[#1A6FB4]/20 flex items-center justify-center">
              <Hash className="w-4 h-4 text-[#5BB8F5]" />
            </div>
            <h3 className="font-['Montserrat'] text-sm font-bold uppercase tracking-[0.12em] text-white">
              Trending Hashtags
            </h3>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {hashtags.map((tag, i) => (
              <span
                key={i}
                className="font-['Montserrat'] text-[0.75rem] font-semibold tracking-wide
                           px-4 py-2 rounded-full border border-[#1A6FB4]/30 text-[#5BB8F5]
                           bg-[#1A6FB4]/[0.08] hover:bg-[#1A6FB4]/20 hover:border-[#5BB8F5]/50
                           cursor-pointer transition-all duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SocialMediaSection;
