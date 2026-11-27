import React from "react";
import { CheckCircle2 } from "lucide-react";

const REGISTER_URL = "https://ifinish.in/running/SKF_2026";

const HomeAnnouncement = () => {
  return (
    <section className="bg-[#0B1E3D] px-[5vw] py-6 md:py-8 rounded-sm mb-10">
      <div className="w-full max-w-[820px] mx-auto">
        <div className="rounded-[16px] border-[2px] border-[#F47B20] bg-[#F47B20]/10 p-5 md:p-6 text-center">
          <h3 className="font-head text-xl md:text-2xl font-extrabold text-white">
            Thank You for the Overwhelming Response! 🙌
          </h3>
          <p className="mt-3 text-white text-[0.95rem] leading-[1.7]">
            All timed events at SKF GRM are now{" "}
            <strong className="text-[#FF6B6B]">CLOSED</strong>, and no further
            entries will be accepted.
          </p>
          <p className="mt-3 text-white text-[0.95rem] leading-[1.7] flex items-start justify-center gap-2 text-left sm:text-center">
            <CheckCircle2 className="w-5 h-5 text-[#4ADE80] shrink-0 mt-0.5" />
            <span>
              Registrations for the <strong>5K Run/Walk</strong> remain{" "}
              <strong className="text-[#4ADE80]">OPEN</strong>, with slots
              filling up fast and available only while they last.
            </span>
          </p>
          <p className="mt-4 font-head text-sm font-bold tracking-[0.08em] uppercase text-[#F47B20]">
            Thank you for your support!
          </p>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 px-5 py-[0.55rem] rounded-[8px] bg-[#1B9E4B] text-white font-head text-[0.72rem] font-bold tracking-[0.1em] uppercase hover:bg-[#22b457] transition-colors"
          >
            Register for 5K &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeAnnouncement;