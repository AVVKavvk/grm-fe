import { GetRegisterButton } from "@/lib/localstorage";
import CountdownTimerForFooter from "./countDownForFooter";
import { Button } from "./ui/button";
import getLastDateOfMonth from "@/lib/getDate";

const PricingBottomUI = () => {
  const { date } = getLastDateOfMonth();
  const originalPrice = 800;
  const discountedPrice = 675;

  const discountPercentage = Math.round(
    ((originalPrice - discountedPrice) / originalPrice) * 100
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-gradient-to-br from-emerald-50 to-slate-100 border-t border-gray-200/60 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        {/* Price Section */}
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-2xl sm:text-3xl font-extrabold text-emerald-600 drop-shadow-sm">
            ₹{discountedPrice}
          </span>
          <span className="text-sm sm:text-base text-gray-500 line-through">
            ₹{originalPrice}
          </span>
          <span className="hidden sm:inline-block bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs sm:text-sm px-2 py-0.5 rounded-full font-semibold shadow-md">
            {discountPercentage}% OFF
          </span>
        </div>

        {/* Countdown Section */}
        <div className="flex flex-col md:flex-row items-center gap-2 sm:gap-3 text-gray-700 text-sm sm:text-base font-medium">
          <span className="inline">Offer ends in</span>
          <CountdownTimerForFooter targetDate={date} />
        </div>

        {/* CTA Button */}
        <div className="flex-shrink-0">
          <div>
            <GetRegisterButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingBottomUI;
