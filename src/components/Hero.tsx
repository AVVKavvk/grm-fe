import { Play, Calendar, MapPin, Medal, X } from "lucide-react";
// Import your webm video instead of the image
import heroVideo from "@/assets/videos/hero-video.webm";
import { useState, useEffect } from "react";
import { GetRegisterButton } from "@/lib/localstorage";
import { Link } from "react-router-dom";

const useCountdown = (targetDate: string) => {
  const calculate = () => {
    const diff = new Date(targetDate).getTime() - Date.now();
    if (diff <= 0) return { days: 0, hrs: 0, min: 0, sec: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hrs: Math.floor((diff % 86400000) / 3600000),
      min: Math.floor((diff % 3600000) / 60000),
      sec: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calculate);
  useEffect(() => {
    const t = setInterval(() => setTime(calculate()), 1000);
    return () => clearInterval(t);
  }, []);
  return time;
};

const CdUnit = ({ n, u }: { n: number; u: string }) => (
  <div className="text-center min-w-[44px]">
    <div className="font-['Montserrat'] text-[1.5rem] font-extrabold text-white leading-none">
      {String(n).padStart(2, "0")}
    </div>
    <div className="text-[0.56rem] font-semibold tracking-[0.12em] uppercase text-white/45 mt-0.5">
      {u}
    </div>
  </div>
);

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { days, hrs, min, sec } = useCountdown("2026-12-13T06:00:00");

  return (
    <section className="relative  font-['Montserrat'] min-h-screen flex items-end overflow-hidden md:pt-[70px] pt-[80px]">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      >
        <source src={heroVideo} type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Dark gradient overlay — left-heavy */}
      <div
        className="absolute inset-0 pointer-events-none font-semibold"
        style={
          {
            // background:
            //   // "linear-gradient(to right, rgba(11,30,61,0.90) 0%, rgba(11,30,61,0.60) 55%, rgba(11,30,61,0.15) 100%)",
          }
        }
      />
      {/* Bottom fade to navy */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[220px] pointer-events-none"
        style={{
          background: "linear-gradient(to top, #0B1E3D 0%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-[5vw] pb-20">
        {/* Pre-line */}
        <div className="flex items-center gap-4 mb-6">
          <span className="inline-block bg-[#F47B20]/15 border border-[#F47B20]/30 text-[#db680f] font-['Montserrat'] text-[0.8rem] font-bold tracking-[0.16em] uppercase px-3 py-1 rounded-full">
            16th Edition · Dec 13, 2026
          </span>
          <div className="w-px h-[18px] bg-white/25" />
          <span className="font-['Montserrat'] text-[0.72rem] font-semibold tracking-[0.10em] uppercase text-white/40">
            AIMS Certified
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-['Montserrat'] font-black uppercase leading-[1.02] text-white mb-6 max-w-[700px]"
          style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
        >
          Run Along
          <br />
          <span className="text-[#0c8be0]">Goa's</span>
          <span className="text-[#F47B20]"> Beautiful</span>
          <br />
          Rivers
        </h1>

        {/* Tagline */}
        <p className="font-['Montserrat'] text-[1.05rem] font-semibold tracking-[0.25em] uppercase text-white/55 mb-10">
          Breathe.&nbsp;
          <span className="text-[#2E8FD8]">Run.</span>
          &nbsp;
          <span className="text-[#F47B20]">Inspire.</span>
        </p>

        {/* CTAs + Countdown row */}
        <div className="flex items-stretch flex-wrap gap-8 mb-10">
          {/* Actions */}
          <div className="flex items-stretch font-['Montserrat'] gap-3 flex-wrap">
            <a
              href="https://ifinish.in/running/SKF_2026"
              target="_blank"
              className="flex items-center justify-center bg-[#F47B20] text-[0.92rem] font-bold tracking-[0.06em] uppercase px-[1.8rem] py-[1rem] rounded-[8px] text-white hover:bg-[#F47B20]/90 transition-all duration-150"
            >
              Register Now
            </a>

            <Link
              to="/categories"
              className="flex items-center  bg-white/[0.06]  border-white/10 justify-center gap-2 text-[0.92rem] font-bold tracking-[0.06em] uppercase px-[1.8rem] py-[1rem] rounded-[8px] border border-white/20 text-white hover:bg-white/[0.07] transition-all duration-150"
            >
              {/* <Play className="w-4 h-4" /> */}
              View Categories
            </Link>
          </div>

          {/* Countdown */}
          <div className="flex items-center justify-center gap-2 bg-white/[0.06] border border-white/10 rounded-[8px] px-5 py-[1rem]">
            <CdUnit n={days} u="Days" />
            <span className="font-['Montserrat'] text-[1.3rem] font-extrabold text-[#F47B20] self-start mt-0.5">
              :
            </span>
            <CdUnit n={hrs} u="Hrs" />
            <span className="font-['Montserrat'] text-[1.3rem] font-extrabold text-[#F47B20] self-start mt-0.5">
              :
            </span>
            <CdUnit n={min} u="Min" />
            <span className="font-['Montserrat'] text-[1.3rem] font-extrabold text-[#F47B20] self-start mt-0.5">
              :
            </span>
            <CdUnit n={sec} u="Sec" />
          </div>
        </div>

        {/* Meta strip */}
        <div className="flex flex-wrap gap-8">
          <div className="inline-flex items-center gap-4  bg-[#F47B20]/12  rounded-[10px] px-2 py-3">
            <Calendar className="w-5 h-5 text-[#F47B20]" />

            <div>
              <div className="text-[0.65rem] font-bold tracking-[0.14em] uppercase text-white/60">
                Race Day
              </div>

              <div className="font-['Montserrat'] text-[1.15rem] md:text-[1.35rem] font-black text-white">
                Sunday, <span className="text-[#F47B20]">13 December 2026</span>
              </div>
            </div>
          </div>
          {[
            {
              icon: <MapPin className="w-4 h-4 text-[#5BB8F5]" />,
              label: "Location",
              value: "Vasco Da Gama, South Goa",
            },
            {
              icon: <Medal className="w-4 h-4 text-[#5BB8F5]" />,
              label: "Distances",
              value: "5K · 10K · 21K · 32K · 42K",
            },
          ].map(({ icon, label, value }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-[6px] bg-[#5BB8F5]/12 flex items-center justify-center shrink-0">
                {icon}
              </div>
              <div>
                <div className="text-[0.68rem] font-semibold tracking-[0.10em] uppercase text-white/45">
                  {label}
                </div>
                <div className="font-['Montserrat'] text-[0.92rem] font-bold text-white">
                  {value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl bg-[#0B1E3D] rounded-[16px] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src="https://drive.google.com/file/d/1y59jYDiGUkOTR_qxt5P9Gl5Wls5c1DxQ/preview"
                className="absolute inset-0 w-full h-full"
                allow="autoplay"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
