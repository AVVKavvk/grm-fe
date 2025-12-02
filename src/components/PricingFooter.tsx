import { GetRegisterButton } from "@/lib/localstorage";
import CountdownTimerForFooter from "./countDownForFooter";
import { Button } from "./ui/button";
import getLastDateOfMonth from "@/lib/getDate";

const PricingBottomUI = () => {
  const { date } = getLastDateOfMonth();
  const originalPrice = 800;
  const discountedPrice = 750;

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
        </div>

        {/* Countdown Section */}

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
