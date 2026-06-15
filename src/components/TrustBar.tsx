const trustItems = [
  { num: "16", label: "Years of Excellence" },
  { num: "7,500+", label: "Runners Annually" },
  { num: "AIMS", label: "Certified Course" },
  { num: "50000 ₹", label: "Equal Prize Money" },
];

export const TrustBar = () => (
  <div className="bg-[#F47B20] w-full">
    <div className="max-w-[1200px] mx-auto px-[5vw] grid grid-cols-2 md:grid-cols-4">
      {trustItems.map((item, i) => (
        <div
          key={i}
          className={`flex flex-col items-center text-center py-6 px-4 gap-0.5
            ${i < trustItems.length - 1 ? "border-r border-white/20" : ""}`}
        >
          <div className="font-['Montserrat'] text-[2rem] font-black text-white leading-none">
            {item.num}
          </div>
          <div className="font-['Montserrat'] text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-white/75">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  </div>
);
