import React from "react";
import { CalendarClock, CheckCircle2 } from "lucide-react";

const REGISTER_URL = "https://ifinish.in/running/SKF_2026";

const HomeAnnouncement = () => {
  return (
    <section className="bg-[#0B1E3D] px-[5vw] py-6 md:py-8 rounded-sm mb-10">
      <div className="w-full max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Timed events reopening */}
        <div className="flex items-start gap-4 rounded-[16px] border-[2px] border-[#F47B20] bg-[#F47B20]/10 p-5 md:p-6">
          <CalendarClock className="w-7 h-7 text-[#FF9748] shrink-0 mt-0.5" />
          <div>
            <span className="inline-block font-head text-[0.62rem] font-bold tracking-[0.18em] uppercase text-[#FF9748] mb-1">
              Timed Events
            </span>
            <p className="text-white text-[0.95rem] leading-[1.6]">
              <strong>Limited registrations</strong> for timed events will open
              up on <strong className="text-[#FF9748]">27th November</strong> at
              9:00 AM.
            </p>
            <p className="text-white/60 text-[0.8rem] leading-[1.5] mt-2">
              First come, first served. T-shirt sizes are not guaranteed for
              late registrations.
            </p>
          </div>
        </div>

        {/* 5K open */}
        <div className="flex items-start gap-4 rounded-[16px] border-[2px] border-[#1B9E4B] bg-[#1B9E4B]/10 p-5 md:p-6">
          <CheckCircle2 className="w-7 h-7 text-[#4ADE80] shrink-0 mt-0.5" />
          <div className="flex-1">
            <span className="inline-block font-head text-[0.62rem] font-bold tracking-[0.18em] uppercase text-[#4ADE80] mb-1">
              5K Fun Run/Walk
            </span>
            <p className="text-white text-[0.95rem] leading-[1.6]">
              5K registrations are still{" "}
              <strong className="text-[#4ADE80]">OPEN</strong>. Grab your spot
              now!
            </p>
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-3 px-5 py-[0.55rem] rounded-[8px] bg-[#1B9E4B] text-white font-head text-[0.72rem] font-bold tracking-[0.1em] uppercase hover:bg-[#22b457] transition-colors"
            >
              Register for 5K &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAnnouncement;
