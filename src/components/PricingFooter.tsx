import { GetRegisterButton } from "@/lib/localstorage";
import CountdownTimerForFooter from "./countDownForFooter";
import { Button } from "./ui/button";
import getLastDateOfMonth from "@/lib/getDate";
const PricingBottomUI = () => {
  const { date } = getLastDateOfMonth();
  const originalPrice = 700;
  const discountedPrice = 630;

  const discountPercentage = Math.round(
    ((originalPrice - discountedPrice) / originalPrice) * 100
  );
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
                  ₹{discountedPrice}
                </span>
                <span className="text-sm sm:text-base text-gray-500 line-through">
                  ₹{originalPrice}
                </span>
                <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded font-semibold hidden sm:inline">
                  {discountPercentage}% OFF
                </span>
              </div>

              {/* Timer Section */}
              <div className="">
                <CountdownTimerForFooter targetDate={date} />
              </div>

              {/* CTA Button */}
              <GetRegisterButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingBottomUI;
