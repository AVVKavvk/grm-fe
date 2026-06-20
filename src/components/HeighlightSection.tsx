import React from "react";
import aimsLogo from "@/assets/AIMS_logo.jpg";
import abbottLogo from "@/assets/Abbott_World_Marathon_Majors_logo_blue.svg";

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

export const HighlightsSection = () => (
  <div className="bg-[#F4F7FB] text-[#0B1E3D] w-full font-['Montserrat'] ">
    <div className="max-w-[1200px] mx-auto px-4 md:px-[5vw] grid grid-cols-1 md:grid-cols-2">
      {highlights.map((item, i) => (
        <div
          key={i}
          className={`flex flex-col items-center text-center px-4 md:px-12 py-6 gap-4
            ${i === 0 ? "border-b border-gray-200 md:border-b-0 md:border-r" : ""}
          `}
        >
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="h-20 flex items-center justify-center hover:scale-105 transition-transform duration-300"
          >
            {item.icon}
          </a>

          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <h3 className="font-['Montserrat'] text-[1.5rem] font-black leading-none uppercase tracking-wider text-[#0B1E3D]">
              {item.title}
            </h3>
          </a>

          <p className="font-['Montserrat'] text-[0.85rem] md:text-[0.95rem] font-medium leading-relaxed max-w-[400px] text-[#374151]">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
);
