const panels = [
  {
    bg: "#122B55",
    borderColor: "rgba(90,184,245,0.2)",
    num: "01 / THE ROUTE",
    title: "42km of Pure\nGoan Beauty",
    desc: "Flat riverside paths, canopied by palms, with the shimmering Zuari beside you every step.",
    photo: null, // replace with: import routeImg from "@/assets/route.jpg"
    svg: (
      <svg width="56" height="56" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="8" fill="rgba(90,184,245,0.1)" />
        <path
          d="M8 36 Q16 20 24 26 Q32 32 40 16"
          stroke="#5BB8F5"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
    photoDesc:
      "Aerial / wide shot: Zuari riverfront with runners at dawn, palm trees, water reflection",
  },
  {
    bg: "#0f2845",
    borderColor: "rgba(244,123,32,0.2)",
    num: "02 / THE ENERGY",
    title: "7,500 Runners.\nOne Heartbeat.",
    desc: "Cheering zones, pacemakers, a buzzing finish line, and a community that celebrates every finisher.",
    photo: null, // replace with: import energyImg from "@/assets/energy.jpg"
    svg: (
      <svg width="56" height="56" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="8" fill="rgba(244,123,32,0.1)" />
        <circle
          cx="24"
          cy="24"
          r="12"
          stroke="#F47B20"
          strokeWidth="2"
          fill="none"
        />
        <path d="M20 24l3 3 6-6" stroke="#F47B20" strokeWidth="2" fill="none" />
      </svg>
    ),
    photoDesc:
      "Crowd / atmosphere shot: finish line celebration, cheering spectators, runners hugging",
  },
  {
    bg: "#0a1e38",
    borderColor: "rgba(26,111,180,0.2)",
    num: "03 / THE MEMORY",
    title: "Your Race.\nRelived Forever.",
    desc: "GPS timing, instant split notifications, a personal memory timeline and photo reel — all on your phone.",
    photo: null, // replace with: import memoryImg from "@/assets/memory.jpg"
    svg: (
      <svg width="56" height="56" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="8" fill="rgba(26,111,180,0.1)" />
        <rect
          x="12"
          y="20"
          width="24"
          height="16"
          rx="3"
          stroke="#5BB8F5"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M18 20v-4a6 6 0 0112 0v4"
          stroke="#5BB8F5"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
    photoDesc:
      "Tech / medal shot: runner holding finisher medal, looking at phone memory timeline",
  },
];

const ExperienceStrip = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {panels.map((panel, i) => (
        <div
          key={i}
          className="relative overflow-hidden min-h-[340px] md:min-h-[420px] flex items-end group"
        >
          {/* Background — swap div for <img> once photos are available */}
          {panel.photo ? (
            <img
              src={panel.photo}
              alt={panel.num}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-2 border-dashed border"
              style={{ background: panel.bg, borderColor: panel.borderColor }}
            >
              {panel.svg}
              <span className="font-['Montserrat'] text-[0.6rem] font-bold tracking-[0.16em] uppercase text-white/30">
                Photo Panel {i + 1}
              </span>
              <span className="font-['Open_Sans'] text-[0.7rem] text-white/20 text-center max-w-[200px] leading-relaxed">
                {panel.photoDesc}
              </span>
            </div>
          )}

          {/* Bottom-up gradient overlay */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500 group-hover:opacity-90"
            style={{
              background:
                "linear-gradient(to top, rgba(11,30,61,0.95) 0%, rgba(11,30,61,0.4) 50%, transparent 100%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 p-7 w-full">
            <div className="font-['Montserrat'] text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#F47B20] mb-2">
              {panel.num}
            </div>
            <h3 className="font-['Montserrat'] text-[1.15rem] font-extrabold text-white leading-[1.2] mb-2 whitespace-pre-line">
              {panel.title}
            </h3>
            <p className="font-['Open_Sans'] text-[0.8rem] font-light text-white/75 leading-[1.6] max-w-[260px]">
              {panel.desc}
            </p>
          </div>

          {/* Left separator line (skip first) */}
          {i > 0 && (
            <div className="absolute top-0 left-0 bottom-0 w-px bg-white/[0.07]" />
          )}
        </div>
      ))}
    </div>
  );
};

export default ExperienceStrip;
