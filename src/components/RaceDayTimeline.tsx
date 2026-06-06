type StepVariant = "default" | "active" | "orange";

const steps: {
  emoji: string;
  time: string;
  title: string;
  desc: string;
  variant: StepVariant;
}[] = [
  {
    emoji: "📋",
    time: "4:00 AM",
    title: "Kit Check & Assembly",
    desc: "Venue opens. Bag drop, warm-up zone, and kit verification.",
    variant: "default",
  },
  {
    emoji: "🏁",
    time: "5:30 AM",
    title: "Marathon Start",
    desc: "42K & 32K waves release. GPS tracking activates.",
    variant: "active",
  },
  {
    emoji: "🏃",
    time: "6:00 AM",
    title: "Half & 10K Start",
    desc: "21K and 10K waves. Live leaderboard goes public.",
    variant: "active",
  },
  {
    emoji: "💧",
    time: "On Course",
    title: "Aid Stations",
    desc: "Water, electrolytes & fruit every 1–1.5km along the route.",
    variant: "active",
  },
  {
    emoji: "🎉",
    time: "From 7:00 AM",
    title: "Finish Line",
    desc: "Medals, photos, finisher area, food & refreshments.",
    variant: "orange",
  },
  {
    emoji: "📱",
    time: "Post-Race",
    title: "Memory Timeline",
    desc: "Personal race reel with splits & photos delivered to your phone.",
    variant: "default",
  },
];

const dotStyles: Record<StepVariant, string> = {
  default: "bg-[#122B55] border-white/[0.12]",
  active:
    "bg-[#1A6FB4] border-[#1A6FB4] shadow-[0_0_0_6px_rgba(26,111,180,0.20)]",
  orange:
    "bg-[#F47B20] border-[#F47B20] shadow-[0_0_0_6px_rgba(244,123,32,0.20)]",
};

const RaceDayTimeline = () => {
  return (
    <section className="bg-[#0B1E3D] py-24">
      <div className="max-w-[1200px] mx-auto px-[5vw]">
        {/* ── Header ── */}
        <div className="text-center mb-16">
          <p className="font-['Montserrat'] text-[0.68rem] font-bold tracking-[0.20em] uppercase text-[#5BB8F5] mb-3">
            Race Day
          </p>
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-black uppercase text-white leading-tight mb-4">
            Your Day, <span className="text-[#F47B20]">Step by Step</span>
          </h2>
          <div className="w-12 h-[3px] bg-gradient-to-r from-[#1A6FB4] to-[#5BB8F5] rounded-full mx-auto mb-5" />
          <p className="font-['Open_Sans'] text-base text-white/55 max-w-xl mx-auto">
            Everything you need to know about December 14, 2027.
          </p>
        </div>

        {/* ── Desktop horizontal stepper ── */}
        <div className="hidden md:block relative">
          {/* Connecting line */}
          <div
            className="absolute top-7 h-[2px] bg-white/[0.10] z-0"
            style={{ left: "calc(8.33% + 28px)", right: "calc(8.33% + 28px)" }}
          />

          <div className="relative z-10 flex items-start">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex-1 flex flex-col items-center text-center px-3"
              >
                {/* Dot */}
                <div
                  className={`w-14 h-14 rounded-full border-2 flex items-center justify-center
                               text-[1.2rem] mb-5 relative z-10 transition-all duration-200
                               ${dotStyles[step.variant]}`}
                >
                  {step.emoji}
                </div>

                {/* Time */}
                <div className="font-['Montserrat'] text-[0.72rem] font-bold tracking-[0.08em] text-[#F47B20] mb-1">
                  {step.time}
                </div>

                {/* Title */}
                <div className="font-['Montserrat'] text-[0.85rem] font-bold text-white mb-1.5 leading-snug">
                  {step.title}
                </div>

                {/* Desc */}
                <div className="font-['Open_Sans'] text-[0.72rem] text-white/45 leading-[1.55]">
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Mobile vertical stepper ── */}
        <div className="md:hidden flex flex-col">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-5 relative">
              {/* Left spine */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 shrink-0 rounded-full border-2 flex items-center justify-center
                               text-[1.1rem] relative z-10 transition-all duration-200
                               ${dotStyles[step.variant]}`}
                >
                  {step.emoji}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 min-h-[2rem] bg-white/[0.10] my-1" />
                )}
              </div>

              {/* Content */}
              <div className="pb-8 pt-2">
                <div className="font-['Montserrat'] text-[0.72rem] font-bold tracking-[0.08em] text-[#F47B20] mb-0.5">
                  {step.time}
                </div>
                <div className="font-['Montserrat'] text-[0.88rem] font-bold text-white mb-1">
                  {step.title}
                </div>
                <div className="font-['Open_Sans'] text-[0.75rem] text-white/45 leading-[1.55]">
                  {step.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RaceDayTimeline;
