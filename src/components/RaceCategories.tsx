import React, { useEffect, useRef, useState } from "react";
import HomeAnnouncement from "./HomeAnnouncement";

const REGISTER_URL = "https://ifinish.in/running/SKF_2026";

const racesData = [
  {
    dist: "5",
    unit: "Kilometres",
    name: "Fun Run",
    price: "₹1000",
    scratchedPrice: null,
    features: [
      "Participation Medal",
      "Event T-Shirt",
      "Digital Certificate",
      "Nourishment",
    ],
    isFeatured: false,
    isOpen: true,
  },
  {
    dist: "10",
    unit: "Kilometres",
    name: "Timed Run",
    price: "₹2,000",
    scratchedPrice: null,
    features: [
      "Finisher Medal",
      "Event T-Shirt",
      "Digital Certificate",
      "Electronic Timing Chip",
      "Nourishment",
    ],
    isFeatured: false,
    isOpen: false,
  },
  {
    dist: "21",
    unit: "Kilometres",
    name: "Half Marathon",
    price: "₹3,000",
    scratchedPrice: null,
    features: [
      "Finisher Medal",
      "Tech T-Shirt",
      "Digital Certificate",
      "Electronic Timing Chip",
      "Nourishment",
    ],
    isFeatured: true,
    isOpen: false,
  },
  {
    dist: "32",
    unit: "Kilometres",
    name: "20 Miler",
    price: "₹3,500",
    scratchedPrice: null,
    features: [
      "Finisher Medal",
      "Tech T-Shirt",
      "Digital Certificate",
      "Electronic Timing Chip",
      "Nourishment",
    ],
    isFeatured: false,
    isOpen: false,
  },
  {
    dist: "42",
    unit: "Kilometres",
    name: "Full Marathon",
    price: "₹4,000",
    scratchedPrice: null,
    features: [
      "Finisher Medal",
      "Tech T-Shirt",
      "Digital Certificate",
      "Electronic Timing Chip",
      "Nourishment",
      "Required Eligibility Submission",
    ],
    isFeatured: false,
    isOpen: false,
  },
];

const RaceCategories = () => {
  const [showEligibilityInfo, setShowEligibilityInfo] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        setShowEligibilityInfo(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="bg-[#F4F7FB] py-16 md:py-24" id="races">
      <div className="w-full max-w-[1400px] mx-auto px-[5vw] xl:px-8">
        {/* Announcement Banner */}
        {/* <div className="max-w-[820px] mx-auto mb-12 rounded-[16px] border-[2px] border-[#F47B20] bg-white p-6 md:p-8 text-center shadow-[0_10px_30px_rgba(11,30,61,0.08)]">
          <h3 className="font-head text-xl md:text-2xl font-extrabold text-[#0B1E3D]">
            Thank You, Runners! 🙌
          </h3>
          <p className="mt-3 text-[0.95rem] leading-[1.7] text-[#0B1E3D]/75">
            A big thank you to all our participants for the overwhelming
            response to Goa River Marathon 2026!
          </p>
          <p className="mt-3 text-[0.95rem] leading-[1.7] text-[#0B1E3D]">
            Registrations for all competitive categories – 10K, 21K, 32K and 42K
            – are now <strong className="text-[#D62828]">CLOSED</strong>!
          </p>
          <p className="mt-3 text-[0.95rem] leading-[1.7] text-[#0B1E3D]">
            The <strong>5K Fun Run/Walk</strong> is still{" "}
            <strong className="text-[#1B9E4B]">OPEN</strong>. Grab your spot and
            be part of the excitement!
          </p>
          <p className="mt-4 font-head text-sm font-bold tracking-[0.08em] uppercase text-[#F47B20]">
            See you at the starting line on December 13th!
          </p>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-5 px-6 py-[0.7rem] rounded-[8px] bg-[#F47B20] text-white font-head text-[0.72rem] font-bold tracking-[0.1em] uppercase hover:bg-[#FF9748] transition-colors"
          >
            Register for 5K &rarr;
          </a>
        </div> */}

        <HomeAnnouncement />

        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="inline-block font-head text-[0.68rem] font-bold tracking-[0.22em] uppercase text-[#F47B20] mb-3">
            Race Categories
          </span>
          <h2 className="font-head text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold leading-[1.15] text-[#0B1E3D]">
            Choose Your Distance
          </h2>
          <div className="w-[48px] h-[3px] bg-[#F47B20] rounded-[2px] mx-auto my-5"></div>
          <p className="max-w-[580px] mx-auto text-base text-[#0B1E3D]/65 leading-[1.75]">
            Five certified distances for every runner — from first-timers to
            elite. All on Goa's stunning Zuari River course.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mt-8">
          {racesData.map((race, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-6 lg:p-5 xl:p-6 rounded-[16px] border-[2px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(11,30,61,0.12)]
                ${
                  race.isFeatured
                    ? "bg-[#0B1E3D] border-[#1A6FB4]"
                    : "bg-white border-[#e8edf5] hover:border-[#1A6FB4]"
                }
              `}
            >
              {/* Badge for Featured */}
              {race.isFeatured && (
                <div
                  className={`absolute top-[-2px] right-5 text-white font-head text-[0.62rem] font-bold tracking-[0.12em] uppercase px-3 py-1 rounded-b-[6px] ${
                    race.isOpen ? "bg-[#F47B20]" : "bg-[#D62828]"
                  }`}
                >
                  {race.isOpen ? "Most Popular" : "Closed"}
                </div>
              )}

              {/* Distance & Name */}
              <div
                className={`font-head text-5xl font-black leading-none ${
                  race.isFeatured ? "text-[#5BB8F5]" : "text-[#1A6FB4]"
                }`}
              >
                {race.dist}
              </div>
              <div
                className={`font-head text-xs font-bold tracking-[0.12em] uppercase mt-1 ${
                  race.isFeatured ? "text-[#5BB8F5]" : "text-[#1A6FB4]"
                }`}
              >
                {race.unit}
              </div>
              <div
                className={`font-head text-[0.8rem] font-semibold tracking-[0.08em] uppercase mt-1.5 ${
                  race.isFeatured ? "text-white/60" : "text-[#1A3A6B]"
                }`}
              >
                {race.name}
              </div>

              {/* Divider */}
              <div
                className={`w-full h-[1px] my-5 ${
                  race.isFeatured ? "bg-white/10" : "bg-[#e8edf5]"
                }`}
              ></div>

              {/* Price */}
              <div className="flex items-center gap-2">
                <span
                  className={`font-head text-[1.4rem] font-extrabold ${
                    race.isFeatured ? "text-white" : "text-[#0B1E3D]"
                  }`}
                >
                  {race.price}
                </span>
                {race.scratchedPrice && (
                  <span className="font-head text-[1rem] font-semibold text-[#8899aa] line-through">
                    {race.scratchedPrice}
                  </span>
                )}
              </div>

              <div className="text-[0.68rem] font-semibold tracking-[0.08em] uppercase text-[#8899aa] mt-0.5">
                per runner
              </div>

              {/* Features List */}
              <ul className="flex-1 flex flex-col gap-2.5 mt-5">
                {race.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={`flex items-start gap-2 text-[0.78rem] leading-[1.4] ${
                      race.isFeatured ? "text-white/80" : "text-[#556677]"
                    }`}
                  >
                    <span
                      className={`font-bold text-[0.7rem] shrink-0 mt-[1px] ${
                        race.isFeatured ? "text-[#5BB8F5]" : "text-[#1A6FB4]"
                      }`}
                    >
                      ✓
                    </span>

                    {feature === "Required Eligibility Submission" ? (
                      <div
                        ref={tooltipRef}
                        className="relative flex items-center gap-1 flex-wrap group"
                      >
                        <span>{feature}</span>

                        <button
                          type="button"
                          onClick={() =>
                            setShowEligibilityInfo((prev) => !prev)
                          }
                          className={`inline-flex items-center justify-center w-4 h-4 rounded-full border text-[10px] font-bold transition-opacity ${
                            race.isFeatured
                              ? "border-[#5BB8F5] text-[#5BB8F5]"
                              : "border-[#1A6FB4] text-[#1A6FB4]"
                          }`}
                        >
                          ?
                        </button>

                        <div
                          className={`
      absolute left-0 top-6 z-50 w-[280px]
      rounded-lg bg-[#0B1E3D]
      p-3 text-[12px] leading-relaxed text-white
      shadow-xl border border-white/10

      ${showEligibilityInfo ? "block" : "hidden md:group-hover:block"}
    `}
                        >
                          <div className="font-semibold mb-1">
                            Full Marathon Eligibility
                          </div>
                          Participants must provide proof of a Full Marathon
                          finish time of <strong>6 hours or less</strong> or a
                          Half Marathon finish time of{" "}
                          <strong>2 hours 45 minutes or less</strong> from a
                          recognized event.
                        </div>
                      </div>
                    ) : (
                      feature
                    )}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              {race.isOpen ? (
                <a
                  href={REGISTER_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={`block w-full text-center mt-6 py-[0.7rem] rounded-[8px] font-head text-[0.72rem] font-bold tracking-[0.1em] uppercase transition-all duration-200
                    ${
                      race.isFeatured
                        ? "bg-[#F47B20] text-white hover:bg-[#FF9748]"
                        : "bg-[#1A6FB4] text-white hover:bg-[#2E8FD8]"
                    }
                  `}
                >
                  Register &rarr;
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className={`block w-full text-center mt-6 py-[0.7rem] rounded-[8px] font-head text-[0.72rem] font-bold tracking-[0.1em] uppercase cursor-not-allowed ${
                    race.isFeatured
                      ? "bg-white/10 text-white/50"
                      : "bg-[#8899aa]/20 text-[#8899aa]"
                  }`}
                >
                  Registration Closed
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RaceCategories;
