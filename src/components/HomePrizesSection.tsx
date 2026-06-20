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
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
          {/* Left — intro */}
          <div>
            <p className="font-['Open_Sans'] text-[0.95rem] md:text-base text-white/60 leading-relaxed max-w-[400px] mb-6">
              Open category cash prizes are equal for men and women. Awards are
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
          </div>

          {/* Right — Prize Highlights */}
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-[16px] p-6 md:p-7">
            <div className="mb-4">
              <span className="inline-flex items-center bg-[#F47B20]/10 border border-[#F47B20]/20 rounded-full px-3 py-1 text-[#F47B20] text-[0.72rem] font-bold tracking-[0.12em] uppercase">
                Prize Highlights
              </span>
            </div>

            <h3 className="font-['Montserrat'] text-[1.8rem] md:text-[2.2rem] font-black text-white mb-5 leading-tight">
              ₹8 Lakh+
              <br />
              <span className="text-[#F47B20]">Prize Purse</span>
            </h3>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-xl shrink-0">🏆</span>
                <span className="text-white/85 font-medium text-[0.95rem]">
                  ₹8,00,000 in Cash Prizes
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-xl shrink-0">🏃</span>
                <span className="text-white/85 font-medium text-[0.95rem]">
                  5 Race Categories
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-xl shrink-0">🎖️</span>
                <span className="text-white/85 font-medium text-[0.95rem]">
                  Open &amp; Age Category Awards
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-xl shrink-0">⚖️</span>
                <span className="text-white/85 font-medium text-[0.95rem]">
                  Equal prizes for men and women
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-xl shrink-0">💰</span>
                <span className="text-white/85 font-medium text-[0.95rem]">
                  96 individual cash prizes to win
                </span>
              </li>
            </ul>

            <div className="mt-6 pt-5 border-t border-white/[0.08]">
              <Link
                to="/prizes"
                className="inline-flex items-center justify-center bg-[#F47B20] text-white font-['Montserrat'] text-[0.8rem] font-bold tracking-[0.08em] uppercase px-6 py-4 rounded-[8px] hover:bg-[#FF9748] transition-colors"
              >
                Prize Details →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePrizesSection;
