"use client";
import React, { useMemo, useState } from "react";
import PricingTable from "./PricingTable";
import PricingEstimator from "./PricingEstimator";
import { estimatePrice } from "./utils";

export default function PricingComparisonPage() {
  const [mau, setMau] = useState(1000);
  const price = useMemo(() => estimatePrice(mau), [mau]);

  return (
    <main className="bg-white text-gray-900">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Title + subtext */}
        <header className="text-center max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            Simple, Predictable Pricing — No Hidden Fees
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Other providers have unexpected charges for concurrency, channels, and messaging, making costs unpredictable and difficult to budget for. With PubNub’s MAU pricing, it’s simple. You only pay for MAUs. That’s it.
          </p>
        </header>

       <div className="border border-[#6363633a] p-2 sm:p-8 rounded-3xl mt-14">
         <PricingTable />
        <PricingEstimator mau={mau} setMau={setMau} price={price} />
       </div>

      </section>
    </main>
  );
}
