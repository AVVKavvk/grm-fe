import { Star, Quote, Camera } from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    initials: "PR",
    name: "Priya Rao",
    detail: "Mumbai · 6× Finisher · Full Marathon",
    text: "I've run 14 marathons across India and this is the one I return to every single year. The riverside route, the organisation, the Goa magic — nothing compares.",
  },
  {
    initials: "AK",
    name: "Arjun Kamath",
    detail: "Bangalore · 3× Finisher · Half Marathon",
    text: "Set my half marathon PB here. The course is fast, the December morning is perfect, and my family could track me live — it made every kilometre more meaningful.",
  },
  {
    initials: "NS",
    name: "Nisha Sharma",
    detail: "Delhi · 2× Finisher · 21K",
    text: "The memory timeline they sent after the race was incredible — splits, photos, every moment. I've shared it more than my wedding album. Genuinely.",
  },
  {
    initials: "KM",
    name: "Kiran Mehta",
    detail: "Pune · Half Marathon 2024",
    text: "A perfect blend of sport and festival vibes. The energy along the course kept me going, and the post-run celebrations were heartwarming.",
  },
  {
    initials: "LB",
    name: "Liora Bennett",
    detail: "UK · 10K Run 2024",
    text: "I joined the 10K while on vacation in Goa, and it turned out to be the highlight of my trip. Everything from registration to hydration stations was seamless.",
  },
  {
    initials: "EW",
    name: "Eamon Wright",
    detail: "Australia · 20 Miler 2024",
    text: "Traveling from Australia was worth it! The race captures Goan traditions beautifully while still being highly organized and tech-friendly.",
  },
];

const stats = [
  { num: "7,500+", label: "Runners Annually" },
  { num: "98%", label: "Would Recommend" },
  { num: "75%", label: "Return Participants" },
];

const Stars = () => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-3.5 h-3.5 fill-[#F47B20] text-[#F47B20]" />
    ))}
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-[5vw]">
        {/* ── Header ── */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 bg-[#1A6FB4]/10 border border-[#1A6FB4]/20
                          text-[#1A6FB4] px-4 py-1.5 rounded-full mb-5"
          >
            <Star className="w-3.5 h-3.5 fill-[#1A6FB4]" />
            <span className="font-['Montserrat'] text-[0.68rem] font-bold tracking-[0.16em] uppercase">
              Runner Stories
            </span>
          </div>
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-black uppercase text-[#0B1E3D] leading-tight mb-4">
            What Runners <span className="text-[#F47B20]">Say</span>
          </h2>
          <div className="w-12 h-[3px] bg-gradient-to-r from-[#1A6FB4] to-[#5BB8F5] rounded-full mx-auto mb-5" />
          <p className="font-['Open_Sans'] text-base text-[#0B1E3D]/55 max-w-xl mx-auto leading-relaxed">
            Join thousands of runners who come back year after year. This is
            their race.
          </p>
        </div>

        {/* ── Testimonial cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group flex flex-col bg-white border border-[#0B1E3D]/[0.08] rounded-[16px] p-7
                         hover:border-[#1A6FB4]/30 hover:shadow-[0_20px_40px_rgba(11,30,61,0.10)]
                         transition-all duration-300"
            >
              <Stars />

              {/* Quote */}
              <div className="relative flex-1 mb-6">
                <Quote className="w-4 h-4 text-[#1A6FB4]/30 mb-2" />
                <p className="font-['Open_Sans'] text-[0.875rem] font-light italic text-[#0B1E3D]/65 leading-[1.75]">
                  {t.text}
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center gap-3 pt-5 border-t border-[#0B1E3D]/[0.06]">
                <div className="w-10 h-10 rounded-full bg-[#1A6FB4] flex items-center justify-center shrink-0">
                  <span className="font-['Montserrat'] text-[0.72rem] font-bold text-white tracking-wide">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <div className="font-['Montserrat'] text-[0.85rem] font-bold text-[#0B1E3D]">
                    {t.name}
                  </div>
                  <div className="font-['Open_Sans'] text-[0.7rem] text-[#0B1E3D]/45 mt-0.5">
                    {t.detail}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Stats row ── */}
        <div className="grid grid-cols-3 gap-4 mb-14">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`text-center py-6 px-4
                ${i < stats.length - 1 ? "border-r border-[#0B1E3D]/[0.08]" : ""}`}
            >
              <div className="font-['Montserrat'] text-3xl font-black text-[#0B1E3D] mb-1">
                {s.num}
              </div>
              <div className="font-['Montserrat'] text-[0.68rem] font-semibold tracking-[0.12em] uppercase text-[#0B1E3D]/45">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── Finisher photo grid ── */}
        <div>
          <p
            className="font-['Montserrat'] text-[0.65rem] font-bold tracking-[0.18em] uppercase
                        text-[#0B1E3D]/35 text-center mb-4"
          >
            Finisher Gallery — #RunGoa
          </p>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-[#F4F7FB] border border-dashed border-[#0B1E3D]/10
                           rounded-[8px] flex flex-col items-center justify-center gap-1.5
                           hover:border-[#1A6FB4]/30 hover:bg-[#1A6FB4]/[0.04] transition-all duration-200
                           cursor-pointer group"
              >
                <Camera className="w-5 h-5 text-[#0B1E3D]/15 group-hover:text-[#1A6FB4]/40 transition-colors" />
                <span
                  className="font-['Montserrat'] text-[0.5rem] font-semibold tracking-[0.1em]
                                 uppercase text-[#0B1E3D]/20"
                >
                  Photo
                </span>
              </div>
            ))}
          </div>

          {/* Gallery CTA */}
          <div className="text-center">
            <Link
              to="/memories"
              className="inline-flex items-center gap-2 font-['Montserrat'] text-[0.78rem] font-bold
                         tracking-[0.10em] uppercase text-[#1A6FB4] border border-[#1A6FB4]/30
                         hover:bg-[#1A6FB4] hover:text-white px-6 py-3 rounded-[8px]
                         transition-all duration-200"
            >
              View Full Gallery →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
