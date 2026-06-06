import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import vascoLogo from "@/assets/VSG_LOGO.png";
import skfLogo from "@/assets/grm-2026.jpeg";
import getLastDateOfMonth from "@/lib/getDate";
import { GetRegisterButton } from "@/lib/localstorage";

const navItems = [
  { link: "/", label: "Home" },
  { link: "/events", label: "Events" },
  { link: "/sponsors", label: "Sponsors" },
  { link: "/memories", label: "Gallery" },
  { link: "/contact-us", label: "Contact Us" },
  { link: "/prizes", label: "Prizes" },
  { link: "/results", label: "Results" },
  { link: "/getting-there", label: "Getting There" },
  { link: "/faq", label: "FAQ" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { daysRemaining } = getLastDateOfMonth();
  const location = useLocation();

  return (
    <header className="fixed  top-0 left-0 right-0 z-[500] h-[100px] flex items-center bg-[rgba(11,30,61,0.96)] backdrop-blur-[20px] border-b border-white/10">
      {/* Nav inner */}
      <div className="w-full max-w-[1400px] mx-auto  flex items-center justify-between gap-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-[0.9rem] shrink-0">
          <img
            src={skfLogo}
            alt="GRM 2026"
            className="w-[40px]   object-cover"
          />

          {/* Text block */}
          <div className="font-['Montserrat'] leading-[1.25]">
            <p className="text-[0.65rem] font-semibold tracking-[0.14em] uppercase text-[#5BB8F5]">
              SKF Presents
            </p>
            <p className="text-[0.95rem] font-extrabold text-white">
              Goa River Marathon
            </p>
          </div>
        </Link>

        {/* Desktop nav links */}
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

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-[0.8rem] shrink-0">
          {/* Days counter */}
          <div className="font-['Montserrat'] text-[0.65rem] font-bold tracking-[0.08em] uppercase text-[#5BB8F5]">
            <span className="text-[1rem] font-extrabold text-white">
              {daysRemaining}
            </span>{" "}
            days to go
          </div>

          <GetRegisterButton />
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden ml-auto p-2 rounded-md text-white/70 hover:text-white hover:bg-white/[0.07] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {isMenuOpen && (
        <nav className="lg:hidden absolute top-[70px] left-0 right-0 bg-[rgba(11,30,61,0.98)] border-b border-white/10 px-[5vw] py-4">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.link;
              return (
                <Link
                  key={item.link}
                  to={item.link}
                  onClick={() => setIsMenuOpen(false)}
                  className={`
                    font-['Montserrat'] text-[0.75rem] font-semibold
                    tracking-[0.08em] uppercase px-[0.85rem] py-[0.6rem]
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

            <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
              <div className="font-['Montserrat'] text-[0.65rem] font-bold tracking-[0.08em] uppercase text-[#5BB8F5]">
                <span className="text-[1rem] font-extrabold text-white">
                  {daysRemaining}
                </span>{" "}
                days to go
              </div>
              <GetRegisterButton />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
