const trustItems = [
  { num: "16", label: "Years of Excellence" },
  { num: "7,500+", label: "Runners Annually" },
  { num: "AIMS", label: "Certified Course" },
  { num: "Abbott", label: "WMM Qualifier" },
  { num: "50000 ₹", label: "Equal Prize Money" },
];

export const TrustBar = () => (
  <div className="bg-[#F47B20] w-full">
    <div className="max-w-[1200px] mx-auto px-[5vw] grid grid-cols-2 md:grid-cols-5">
      {trustItems.map((item, i) => (
        <div
          key={i}
          className={`flex flex-col items-center justify-center text-center py-6 px-4 gap-0.5 border-white/20
            ${/* Mobile: 5th item spans 2 columns. Desktop: 5th item spans 1 column */ ""}
            ${i === 4 ? "col-span-2 md:col-span-1" : ""}
            
            ${/* Mobile: Only the left items (index 0 and 2) get a right border */ ""}
            ${i % 2 === 0 && i !== 4 ? "border-r" : ""}
            
            ${/* Desktop: First 4 items get a right border, last item gets none */ ""}
            ${i < 4 ? "md:border-r" : "md:border-r-0"}
          `}
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
