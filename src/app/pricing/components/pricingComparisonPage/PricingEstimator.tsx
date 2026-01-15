import NumberBox from "./NumberBox";
import { clamp, formatInt, formatUSD } from "./utils";

export default function PricingEstimator({ mau, setMau, price }: any) {
  return (
    <section className="mt-10 sm:mt-12">
      <h2 className="text-center text-xl sm:text-2xl font-extrabold">
        Commit & Save Big: Annual Discounts
      </h2>
      <p className="text-center mt-2 text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
        Switch to annual pricing and unlock deep discounts on our Pro plan. Your monthly costs are estimated by the number of Monthly Active Users (MAU), with pricing designed to match real‑world use cases.
      </p>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Left: Slider */}
        <div className="rounded-xl  p-5 sm:p-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-700">
                Monthly Active Users (MAU)
              </p>
            </div>
            <NumberBox
              value={mau}
              onChange={(val: number) => setMau(clamp(val, 1000, 50000))}
            />
          </div>

          <div className="mt-4">
            <input
              type="range"
              min={1000}
              max={50000}
              step={100}
              value={mau}
              onChange={(e) => setMau(clamp(parseInt(e.target.value, 10), 1000, 50000))}
              className="w-full accent-blue-600"
            />
            <div className="mt-2 grid grid-cols-6 text-[11px] text-gray-500">
              <span className="text-left">1k</span>
              <span className="text-center">5k</span>
              <span className="text-center">10k</span>
              <span className="text-center">15k</span>
              <span className="text-center">25k</span>
              <span className="text-right">50k+</span>
            </div>
          </div>

        </div>

        {/* Right: Estimate card */}
        <div className="rounded-xl border border-gray-200 shadow-sm bg-white p-5 sm:p-6">
          <p className="text-xs uppercase tracking-wide text-gray-500 text-center">
            Platform Pro (Estimated)
          </p>
          <div className="mt-2 flex items-end justify-center gap-1">
            <span className="text-3xl sm:text-4xl font-extrabold">
              {formatUSD(price)}
            </span>
            <span className="text-gray-500 mb-1">/month</span>
          </div>
          <p className="mt-1 text-xs text-gray-600 text-center">
            Your estimated price for {formatInt(mau)} MAU.
          </p>

          <button
            className="mt-5 w-full rounded-md bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
            onClick={(e) => e.preventDefault()}
          >
            Contact Sales
          </button>

          <p className="mt-3  text-base text-gray-500 text-center">
            The pricing shown is representative of most common use cases.
          </p>
        </div>
                 
      </div>
       <p className="mt-12 mb-4 text-center text-sm text-gray-700">
            Need more than 50,000 MAU?{" "}
            <a href="#" className="text-neutral-700 underline">
              Contact sales for volume discounts
            </a>
            .
          </p>
    </section>
  );
}
