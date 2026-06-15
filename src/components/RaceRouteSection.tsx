const courseFeatures = [
  {
    icon: "🏅",
    title: "AIMS-Certified International Standard",
    desc: "Internationally accredited flat course. Cross the finish line within 5h 30m to qualify for certificates and prizes.",
  },
  {
    icon: "🚗",
    title: "Traffic-Free for 6+ Hours",
    desc: "The entire course is closed to vehicles from start gun to cut-off. Run with complete peace of mind.",
  },
  {
    icon: "💧",
    title: "Hydration Every 1–1.5km",
    desc: "Water, electrolytes, and fruit at regular stations. Medical crew and washroom facilities on route.",
  },

  {
    icon: "🌅",
    title: "Stunning Riverside Scenery",
    desc: "Palm-lined river paths at sunrise. The most scenic flat course in India — ideal for a personal best.",
  },
];

const CourseMap = () => (
  <div className="bg-[#1A6FB4]/[0.08] border border-[#1A6FB4]/20 rounded-[16px] overflow-hidden aspect-[4/3]">
    <svg
      viewBox="0 0 520 390"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Sky bg */}
      <rect width="520" height="390" fill="#0a1e38" />

      {/* River body */}
      <path
        d="M0 240 Q80 220 160 235 Q260 255 360 228 Q440 215 520 222 L520 310 Q440 298 360 310 Q260 328 160 308 Q80 293 0 305Z"
        fill="#0f3460"
        opacity="0.9"
      />
      <path
        d="M0 262 Q90 245 180 255 Q280 268 380 245 Q460 232 520 238"
        stroke="#1A6FB4"
        strokeWidth="0.8"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M0 278 Q100 262 200 272 Q300 282 400 260 Q470 248 520 253"
        stroke="#5BB8F5"
        strokeWidth="0.6"
        fill="none"
        opacity="0.2"
      />

      {/* Palm trees */}
      <line
        x1="28"
        y1="200"
        x2="28"
        y2="240"
        stroke="#1a4030"
        strokeWidth="3"
      />
      <ellipse
        cx="24"
        cy="195"
        rx="12"
        ry="8"
        fill="#1a5540"
        opacity="0.8"
        transform="rotate(-15 24 195)"
      />
      <ellipse
        cx="32"
        cy="192"
        rx="11"
        ry="7"
        fill="#1f6048"
        opacity="0.8"
        transform="rotate(10 32 192)"
      />
      <line
        x1="70"
        y1="208"
        x2="70"
        y2="242"
        stroke="#1a4030"
        strokeWidth="2"
      />
      <ellipse
        cx="67"
        cy="203"
        rx="9"
        ry="6"
        fill="#1a5540"
        opacity="0.8"
        transform="rotate(-10 67 203)"
      />

      {/* Running path — orange dashed */}
      <path
        d="M42 222 Q110 205 200 215 Q300 228 400 205 Q460 193 480 196"
        stroke="#F47B20"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="10 5"
      />
      {/* Return path */}
      <path
        d="M480 210 Q460 205 400 218 Q300 238 200 228 Q110 218 42 235"
        stroke="rgba(244,123,32,0.28)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="7 5"
      />

      {/* Aid stations */}
      {[130, 240, 360, 440].map((cx, i) => (
        <circle
          key={i}
          cx={cx}
          cy={i === 0 ? 212 : i === 1 ? 220 : i === 2 ? 207 : 199}
          r="5"
          fill="white"
          opacity="0.7"
        />
      ))}

      {/* START marker */}
      <circle cx="42" cy="225" r="9" fill="#1A6FB4" />
      <circle cx="42" cy="225" r="5" fill="white" />
      <text
        x="55"
        y="220"
        fontFamily="Montserrat,sans-serif"
        fontSize="9"
        fontWeight="700"
        fill="rgba(255,255,255,0.75)"
        letterSpacing="0.1em"
      >
        START / FINISH
      </text>

      {/* TURNAROUND */}
      <circle cx="480" cy="200" r="9" fill="#F47B20" />
      <circle cx="480" cy="200" r="5" fill="white" />
      <text
        x="395"
        y="186"
        fontFamily="Montserrat,sans-serif"
        fontSize="8"
        fontWeight="700"
        fill="rgba(244,123,32,0.85)"
        letterSpacing="0.08em"
      >
        TURNAROUND
      </text>

      {/* KM markers */}
      <text
        x="105"
        y="200"
        fontFamily="Montserrat,sans-serif"
        fontSize="8"
        fontWeight="700"
        fill="rgba(255,255,255,0.4)"
      >
        5K
      </text>
      <text
        x="200"
        y="207"
        fontFamily="Montserrat,sans-serif"
        fontSize="8"
        fontWeight="700"
        fill="rgba(255,255,255,0.4)"
      >
        10K
      </text>
      <text
        x="305"
        y="196"
        fontFamily="Montserrat,sans-serif"
        fontSize="8"
        fontWeight="700"
        fill="rgba(255,255,255,0.4)"
      >
        15K
      </text>

      {/* River label */}
      <text
        x="160"
        y="280"
        fontFamily="Montserrat,sans-serif"
        fontSize="11"
        fontWeight="600"
        fill="rgba(90,184,245,0.22)"
        letterSpacing="0.2em"
      >
        ZUARI RIVER
      </text>

      {/* Skyline silhouette */}
      <path d="M340 185 L345 165 L350 185Z" fill="rgba(255,255,255,0.06)" />
      <rect
        x="344"
        y="155"
        width="12"
        height="10"
        fill="rgba(255,255,255,0.05)"
      />
      <path d="M360 185 L366 170 L372 185Z" fill="rgba(255,255,255,0.04)" />

      {/* Legend bar */}
      <rect
        x="10"
        y="338"
        width="500"
        height="42"
        rx="5"
        fill="rgba(255,255,255,0.04)"
      />
      <line
        x1="24"
        y1="359"
        x2="55"
        y2="359"
        stroke="#F47B20"
        strokeWidth="2"
        strokeDasharray="8 4"
      />
      <text
        x="62"
        y="363"
        fontFamily="Montserrat,sans-serif"
        fontSize="8"
        fontWeight="600"
        fill="rgba(255,255,255,0.4)"
      >
        Running route
      </text>
      <circle cx="160" cy="359" r="4" fill="white" opacity="0.6" />
      <text
        x="170"
        y="363"
        fontFamily="Montserrat,sans-serif"
        fontSize="8"
        fontWeight="600"
        fill="rgba(255,255,255,0.4)"
      >
        Aid station (every 1–1.5km)
      </text>
      <circle cx="330" cy="359" r="7" fill="#1A6FB4" />
      <circle cx="330" cy="359" r="4" fill="white" />
      <text
        x="342"
        y="363"
        fontFamily="Montserrat,sans-serif"
        fontSize="8"
        fontWeight="600"
        fill="rgba(255,255,255,0.4)"
      >
        Start / Finish
      </text>
      <circle cx="440" cy="359" r="7" fill="#F47B20" />
      <circle cx="440" cy="359" r="4" fill="white" />
      <text
        x="452"
        y="363"
        fontFamily="Montserrat,sans-serif"
        fontSize="8"
        fontWeight="600"
        fill="rgba(255,255,255,0.4)"
      >
        Turnaround
      </text>
    </svg>
  </div>
);

const RaceRouteSection = () => {
  return (
    <section id="course" className="bg-[#122B55] py-24">
      <div className="max-w-[1200px] mx-auto px-[5vw]">
        {/* Section header */}
        <div className="mb-14">
          <p className="font-['Montserrat'] text-[0.68rem] font-bold tracking-[0.20em] uppercase text-[#5BB8F5] mb-3">
            The Course
          </p>
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-black uppercase text-white leading-tight">
            A Route Worth <span className="text-[#F47B20]">Every Step</span>
          </h2>
          <div className="w-12 h-[3px] bg-gradient-to-r from-[#1A6FB4] to-[#5BB8F5] rounded-full mt-5 mb-5" />
          <p className="font-['Open_Sans'] text-base text-white/55 max-w-xl leading-relaxed">
            Flat, fast, and breathtaking — an AIMS-certified out-and-back route
            hugging the banks of the Zuari River in Chicalim, Goa.
          </p>
        </div>

        {/* Two-col layout: map + features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — map */}
          <CourseMap />

          {/* Right — feature list */}
          <div className="flex flex-col gap-7">
            {courseFeatures.map((f, i) => (
              <div key={i} className="flex gap-5 items-start">
                {/* Icon box */}
                <div className="shrink-0 w-12 h-12 rounded-[10px] bg-[#1A6FB4]/12 border border-[#1A6FB4]/22 flex items-center justify-center text-[1.2rem]">
                  {f.icon}
                </div>
                {/* Text */}
                <div>
                  <div className="font-['Montserrat'] text-[0.9rem] font-bold text-white mb-1">
                    {f.title}
                  </div>
                  <div className="font-['Open_Sans'] text-[0.82rem] text-white/75 font-light leading-[1.65]">
                    {f.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RaceRouteSection;
