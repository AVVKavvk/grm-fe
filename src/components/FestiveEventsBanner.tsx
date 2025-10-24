import { GetBookNowButtonForCarbAndRecovery } from "@/lib/localstorage";
import { Sparkles, UtensilsCrossed, Music, ArrowRight } from "lucide-react";

export default function FestiveEventsBanner() {
  return (
    <div className="bg-gradient-ocean rounded-2xl text-center mt-16 ">
      <div className=" rounded-xl p-8 md:p-10">
        <div className="text-center">
          {/* Header with emoji and sparkle effect */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-yellow-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Join the Festive Side of Goa River Marathon 2025!
            </h2>
            <Sparkles className="w-8 h-8 text-yellow-500" />
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-700 mb-6 font-medium">
            Already registered for the run or just want to be part of the
            celebration?
          </p>

          {/* Main message */}
          <div className="rounded-xl p-6 mb-6 ">
            <p className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              You can now book your spot for our events separately!
            </p>

            {/* Event cards */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-lg p-5 shadow-md border-2 border-orange-200 hover:border-orange-400 transition-all">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <UtensilsCrossed className="w-6 h-6 text-orange-600" />
                  <h3 className="text-xl font-bold text-orange-600">
                    Carb Loading Fiesta
                  </h3>
                  <span className="text-2xl">🍝</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Fuel up with delicious food before race day!
                </p>
              </div>

              <div className="bg-white rounded-lg p-5 shadow-md border-2 border-purple-200 hover:border-purple-400 transition-all">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Music className="w-6 h-6 text-purple-600" />
                  <h3 className="text-xl font-bold text-purple-600">
                    Recovery Rave
                  </h3>
                  <span className="text-2xl">🎧</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Dance and celebrate your achievement!
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-700 font-semibold">
              Whether you're a runner or a party starter — these events are open
              to everyone.
            </p>
          </div>

          {/* Call to action */}
          <div className="mb-6">
            <p className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Don't miss the fun, food, and fantastic vibes of GRM weekend!
            </p>
          </div>

          <GetBookNowButtonForCarbAndRecovery />
        </div>
      </div>
    </div>
  );
}
