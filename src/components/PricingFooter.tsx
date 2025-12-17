const PricingBottomUI = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-gradient-to-br from-emerald-50 to-slate-100 border-t border-gray-200/60 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        {/* Message Section */}
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-xl sm:text-2xl font-bold text-emerald-700 drop-shadow-sm">
            Register for 2026
          </span>
        </div>

        {/* CTA Button */}
        <div className="flex-shrink-0">
          <a
            href="https://ifinish.in/running/SKF_2026"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-2.5 rounded-lg shadow-md transition-colors duration-200"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingBottomUI;
