import React from "react";

const racesData = [
  {
    dist: "5",
    unit: "Kilometres",
    name: "Fun Run",
    price: "₹1000",
    scratchedPrice: null,
    features: [
      "Race bib & kit bag",
      "Finisher medal",
      "Hydration stations",
      "Goodie bag items",
    ],
    isFeatured: false,
  },
  {
    dist: "10",
    unit: "Kilometres",
    name: "Timed Run",
    price: "₹1,400",
    scratchedPrice: "₹2,000",
    features: [
      "Chip-timed bib",
      "Finisher medal + T-shirt",
      "Live tracking",
      "Digital certificate",
    ],
    isFeatured: false,
  },
  {
    dist: "21",
    unit: "Kilometres",
    name: "Half Marathon",
    price: "₹2,100",
    scratchedPrice: "₹3,000",
    features: [
      "Finisher medal + T-shirt",
      "Live analytics for family",
      "Prize pool eligible",
    ],
    isFeatured: true,
  },
  {
    dist: "32",
    unit: "Kilometres",
    name: "20 Miler",
    price: "₹2,450",
    scratchedPrice: "₹3,500",
    features: [
      "Finisher medal + T-shirt",
      "Live analytics",
      "Prize pool eligible",
    ],
    isFeatured: false,
  },
  {
    dist: "42",
    unit: "Kilometres",
    name: "Full Marathon",
    price: "₹2,800",
    scratchedPrice: "₹4,000",
    features: [
      "Finisher medal + T-shirt",
      "Memory timeline + photos",
      "Open prize eligible",
    ],
    isFeatured: false,
  },
];

const RaceCategories = () => {
  return (
    <section className="bg-[#F4F7FB] py-16 md:py-24" id="races">
      <div className="w-full max-w-[1400px] mx-auto px-[5vw] xl:px-8">
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
                <div className="absolute top-[-2px] right-5 bg-[#F47B20] text-white font-head text-[0.62rem] font-bold tracking-[0.12em] uppercase px-3 py-1 rounded-b-[6px]">
                  Most Popular
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
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="https://ifinish.in/running/SKF_2026"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RaceCategories;
