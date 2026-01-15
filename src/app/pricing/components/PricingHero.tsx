import React from "react";

const PricingHero = () => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
          Simple, Transparent Pricing
        </h1>

        <p className="mt-5 text-base sm:text-lg md:text-xl text-gray-700">
          Start building for free, then scale with confidence. Our pay-as-you-grow pricing is based on{" "}
          <span className="font-semibold text-gray-900">Monthly Active Users</span>. No hidden fees, no surprises.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 rounded-md font-semibold text-sm sm:text-base bg-red-600 text-white hover:bg-red-700">
            Start Free - No Credit Card
          </button>

          <button className="px-6 py-3 rounded-md font-semibold text-sm sm:text-base border border-gray-300 bg-white text-gray-900 hover:bg-gray-50">
            Calculate Your Costs
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
