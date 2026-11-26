import React from "react";
import { CheckCircle2 } from "lucide-react";

const REGISTER_URL = "https://ifinish.in/running/SKF_2026";

const HomeAnnouncement = () => {
  return (
    <section className="bg-[#0B1E3D] px-[5vw] py-6 md:py-8 rounded-sm mb-10">
      <div className="w-full max-w-[820px] mx-auto">
        <div className="flex items-start gap-4 rounded-[16px] border-[2px] border-[#1B9E4B] bg-[#1B9E4B]/10 p-5 md:p-6">
          <CheckCircle2 className="w-7 h-7 text-[#4ADE80] shrink-0 mt-0.5" />
          <div className="flex-1">
            <span className="inline-block font-head text-[0.62rem] font-bold tracking-[0.18em] uppercase text-[#4ADE80] mb-1">
              Registrations Open
            </span>
            <p className="text-white text-[0.95rem] leading-[1.6]">
              <strong className="text-[#4ADE80]">Limited registrations</strong>{" "}
              are now <strong className="text-[#4ADE80]">OPEN</strong> for all
              categories. Grab your spot before slots run out!
            </p>
            <p className="text-white/60 text-[0.8rem] leading-[1.5] mt-2">
              Slots are allotted on a first come, first served basis. T-shirt
              sizes are not guaranteed for late registrations.
            </p>
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 px-5 py-[0.55rem] rounded-[8px] bg-[#1B9E4B] text-white font-head text-[0.72rem] font-bold tracking-[0.1em] uppercase hover:bg-[#22b457] transition-colors"
            >
              Register Now &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAnnouncement;
