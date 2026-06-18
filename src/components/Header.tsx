import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import vascoLogo from "@/assets/logos/vsc.png";
import skfLogo from "@/assets/logos/grm.png";
import getLastDateOfMonth from "@/lib/getDate";

const navItems = [
  { link: "/", label: "Home" },
  { link: "/categories", label: "Categories" },
  { link: "/sponsors", label: "Sponsors" },
  { link: "/memories", label: "Gallery" },
  { link: "/contact-us", label: "Contact Us" },
  { link: "/prizes", label: "Prizes" },
  // { link: "/results", label: "Results" },
  { link: "/getting-there", label: "Getting There" },
  { link: "/faq", label: "FAQ" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { daysRemaining } = getLastDateOfMonth();
  const location = useLocation();

  return (
    <header className="fixed font-['Montserrat'] top-0 left-0 right-0 z-[500] md:h-[130px] h-[90px] flex items-center bg-[rgba(11,30,61,0.96)] backdrop-blur-[20px] border-b border-white/10 overflow-visible">
      {/* Nav inner */}
      <div className="w-full max-w-[1600px] mx-auto px-[5vw] xl:px-8 flex items-center justify-between gap-4">
        {/* Left: SKF Logo & Text */}
        <Link
          to="/"
          className="flex items-center gap-[0.9rem] shrink-0 relative"
        >
          <img
            src={skfLogo}
            alt="GRM 2026"
            className="w-[60px] md:w-[110px] object-contain mt-5 md:mt-16 drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]"
          />

          <div className="hidden md:block font-['Montserrat'] leading-[1.25]">
            <p className="text-[0.65rem] font-semibold tracking-[0.14em] uppercase text-[#5BB8F5]">
              SKF Presents
            </p>
            <p className="text-[0.95rem] font-extrabold text-white">
              Goa River Marathon
            </p>
          </div>
        </Link>

        {/* Center: Desktop nav links (Hidden on Phones/Tablets) */}
        <nav className="hidden lg:flex items-center gap-[0.3rem] list-none">
          {navItems.map((item) => {
            const isActive = location.pathname === item.link;
            return (
              <Link
                key={item.link}
                to={item.link}
                className={`
                  font-['Montserrat'] text-[0.75rem] font-semibold
                  tracking-[0.08em] uppercase px-[0.85rem] py-[0.5rem]
                  rounded-[5px] transition-all duration-150
                  ${
                    isActive
                      ? "text-white bg-white/[0.07]"
                      : "text-white/65 hover:text-white hover:bg-white/[0.07]"
                  }
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right actions: Reg Button, Vasco Logo, Hamburger */}
        <div className="flex items-center gap-[1rem] shrink-0">
          {/* Desktop Register Button (Hidden on Mobile) */}
          <div className="hidden lg:block">
            <a
              href="https://ifinish.in/running/SKF_2026"
              target="_blank"
              className="flex items-center justify-center bg-[#F47B20] text-[0.92rem] font-bold tracking-[0.06em] uppercase px-[1.8rem] py-[1rem] rounded-[8px] text-white hover:bg-[#F47B20]/90 transition-all duration-150"
            >
              Register Now
            </a>
          </div>

          {/* Vasco Logo (Visible Everywhere) */}
          <img
            src={vascoLogo}
            alt="Vasco Logo"
            className="w-[70px] p-2 rounded md:w-[90px] object-contain"
          />

          {/* Mobile hamburger (Only visible on Phones/Tablets) */}
          <button
            className="lg:hidden p-2 rounded-md text-white/70 hover:text-white hover:bg-white/[0.07] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer (Toggled by Hamburger) */}
      {isMenuOpen && (
        <nav className="lg:hidden absolute top-[130px] left-0 right-0 bg-[rgba(11,30,61,0.98)] border-b border-white/10 px-[5vw] py-4 shadow-2xl">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.link;
              return (
                <Link
                  key={item.link}
                  to={item.link}
                  onClick={() => setIsMenuOpen(false)}
                  className={`
                    font-['Montserrat'] text-[0.85rem] font-semibold
                    tracking-[0.08em] uppercase px-[0.85rem] py-[0.8rem]
                    rounded-[5px] transition-all duration-150
                    ${
                      isActive
                        ? "text-white bg-white/[0.07]"
                        : "text-white/65 hover:text-white hover:bg-white/[0.07]"
                    }
                  `}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Mobile Register Button */}
            <div className="mt-4 pt-4 border-t border-white/10 flex justify-center">
              <a
                href="https://ifinish.in/running/SKF_2026"
                target="_blank"
                onClick={() => setIsMenuOpen(false)}
                className="w-full flex items-center justify-center bg-[#F47B20] text-[0.92rem] font-bold tracking-[0.06em] uppercase px-[1.8rem] py-[1rem] rounded-[8px] text-white hover:bg-[#F47B20]/90 transition-all duration-150"
              >
                Register Now
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
