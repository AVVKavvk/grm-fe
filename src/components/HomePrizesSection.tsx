import { Link } from "react-router-dom";

const prizeRows = [
  {
    medal: "🥇",
    place: "1st Place",
    colorClass: "text-[#F5C842]",
    full: "₹50,000",
    half: "₹25,000",
    miler: "₹20,000",
  },
  {
    medal: "🥈",
    place: "2nd Place",
    colorClass: "text-[#C0C8D4]",
    full: "₹30,000",
    half: "₹15,000",
    miler: "₹12,000",
  },
  {
    medal: "🥉",
    place: "3rd Place",
    colorClass: "text-[#D4875A]",
    full: "₹20,000",
    half: "₹10,000",
    miler: "₹8,000",
  },
];

const HomePrizesSection = () => {
  return (
    <section id="prizes" className="bg-[#0B1E3D] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-[5vw]">
        {/* ── Header ── */}
        <div className="mb-10 md:mb-12">
          <p className="font-['Montserrat'] text-[0.68rem] font-bold tracking-[0.20em] uppercase text-[#5BB8F5] mb-3">
            Prize Structure
          </p>
          <h2 className="font-['Montserrat'] text-3xl md:text-4xl lg:text-5xl font-black uppercase text-white leading-tight mb-5">
            Race for Glory & <br className="md:hidden" />
            <span className="text-[#F47B20]">Prize Money</span>
          </h2>
          <div className="w-12 h-[3px] bg-gradient-to-r from-[#1A6FB4] to-[#5BB8F5] rounded-full mb-5" />
        </div>

        {/* ── Two-col layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
          {/* Left — intro */}
          <div>
            <p className="font-['Open_Sans'] text-[0.95rem] md:text-base text-white/60 leading-relaxed max-w-[400px] mb-6">
              Open category cash prizes are equal for men and women. Awards
              based on net chip time, not gun time.
            </p>

            {/* Info note */}
            <div className="border-l-[3px] border-[#5BB8F5] bg-[#5BB8F5]/[0.07] rounded-r-[8px] px-5 py-4">
              <ul className="font-['Open_Sans'] text-[0.8rem] text-white/75 leading-[1.65] space-y-1.5">
                <li>🏅 Open category results declared on race day.</li>
                <li>🗓 Age category prizes distributed within a fortnight.</li>
                <li>✅ Eligibility: finish within 5h 30m cut-off.</li>
              </ul>
            </div>

            {/* Equal prize callout */}
            <div className="mt-6 flex items-start md:items-center gap-3 bg-[#F47B20]/10 border border-[#F47B20]/25 rounded-[8px] px-5 py-4">
              <span className="text-xl mt-0.5 md:mt-0">⚖️</span>
              <p className="font-['Montserrat'] text-[0.75rem] font-bold tracking-wide text-[#FF9748] leading-snug">
                Equal prize money for men &amp; women across all open categories
              </p>
            </div>

            <Link
              to="/faq"
              className="mt-6 inline-flex items-center bg-white border border-gray-200 rounded-[8px] px-5 py-4 hover:border-[#F47B20] transition-colors w-full sm:w-auto justify-center"
            >
              <p className="font-['Montserrat'] text-[0.80rem] font-bold tracking-wide text-[#F47B20]">
                FAQ for more details →
              </p>
            </Link>
          </div>

          {/* Right — prize table */}
          <div className="w-full overflow-hidden">
            {/* The outer div handles rounded corners, the inner handles scrolling */}
            <div className="bg-[#0B1E3D] border border-white/[0.08] rounded-[16px] overflow-x-auto w-full custom-scrollbar">
              <table className="w-full border-collapse min-w-[550px]">
                <thead>
                  <tr className="border-b border-white/[0.08] bg-white/[0.02]">
                    {["Position", "Full 42K", "Half 21K", "20 Miler 32K"].map(
                      (h, i) => (
                        <th
                          key={i}
                          className="font-['Montserrat'] text-[0.62rem] font-bold tracking-[0.16em] uppercase
                                   text-white/40 text-left px-5 py-4 whitespace-nowrap"
                        >
                          {h}
                        </th>
                      ),
                    )}
                  </tr>
                </thead>
                <tbody>
                  {prizeRows.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-white/[0.05] hover:bg-white/[0.04] transition-colors duration-150"
                    >
                      {/* Position */}
                      <td className="px-5 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center gap-1.5 font-['Montserrat'] text-[0.85rem] font-bold ${row.colorClass}`}
                        >
                          {row.medal} {row.place}
                        </span>
                      </td>
                      {/* Amounts */}
                      {[row.full, row.half, row.miler].map((amt, j) => (
                        <td key={j} className="px-5 py-4 whitespace-nowrap">
                          <span className="font-['Montserrat'] text-[0.95rem] font-extrabold text-[#F47B20]">
                            {amt}
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}

                  {/* Age categories row */}
                  <tr className="bg-white/[0.01]">
                    <td className="px-5 py-4 whitespace-nowrap">
                      <span className="font-['Open_Sans'] text-[0.78rem] text-white/40">
                        Age Categories
                      </span>
                    </td>
                    <td
                      colSpan={3}
                      className="px-5 py-4 font-['Open_Sans'] text-[0.78rem] text-white/40"
                    >
                      Trophies + certificates · Men &amp; Women equal · 5-year
                      brackets
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Footnote */}
            <p className="font-['Open_Sans'] text-[0.7rem] text-white/30 mt-4 px-2 leading-relaxed">
              * Prize amounts subject to final confirmation. Equal prizes for
              men and women in all open categories. Swipe table on mobile to
              view all distances.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePrizesSection;
