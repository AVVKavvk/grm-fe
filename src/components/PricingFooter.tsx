import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PricingBottomUI = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 29,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let newSeconds = prev.seconds - 1;
        let newMinutes = prev.minutes;
        let newHours = prev.hours;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }

        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        if (newHours < 0) {
          return { hours: 0, minutes: 0, seconds: 0 };
        }

        return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      {/* Fixed Bottom Pricing UI - One Line Responsive */}
      <div className="fixed bottom-0 left-0 right-0 z-10">
        <div className="bg-white border-t border-gray-200 shadow-2xl">
          <div className="px-2 sm:px-4 py-3">
            <div className="flex items-center justify-between gap-2 sm:gap-4 max-w-7xl mx-auto">
              {/* Price Section */}
              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                <span className="text-xl sm:text-2xl font-bold text-emerald-600">
                  ₹1800
                </span>
                <span className="text-sm sm:text-base text-gray-500 line-through">
                  ₹2200
                </span>
                <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded font-semibold hidden sm:inline">
                  18% OFF
                </span>
              </div>

              {/* Timer Section */}
              <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                <span className="text-xs sm:text-sm text-red-600 font-semibold hidden sm:inline">
                  🔥
                </span>
                <div className="flex gap-1">
                  <div className="bg-red-600 text-white px-1.5 sm:px-2 py-1 rounded text-xs sm:text-sm min-w-[28px] sm:min-w-[32px] text-center">
                    {timeLeft.hours.toString().padStart(2, "0")}
                  </div>
                  <div className="text-red-600 text-xs sm:text-sm">:</div>
                  <div className="bg-red-600 text-white px-1.5 sm:px-2 py-1 rounded text-xs sm:text-sm min-w-[28px] sm:min-w-[32px] text-center">
                    {timeLeft.minutes.toString().padStart(2, "0")}
                  </div>
                  <div className="text-red-600 text-xs sm:text-sm">:</div>
                  <div className="bg-red-600 text-white px-1.5 sm:px-2 py-1 rounded text-xs sm:text-sm min-w-[28px] sm:min-w-[32px] text-center">
                    {timeLeft.seconds.toString().padStart(2, "0")}
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Link to="/registration">
                <button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold py-2 sm:py-3 px-3 sm:px-6 rounded-lg sm:rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 active:scale-95 flex-shrink-0">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <span className="text-sm sm:text-base">Register</span>
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingBottomUI;
