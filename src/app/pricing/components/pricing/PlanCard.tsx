import { Icon } from "@iconify/react";
import Button from "./Button";

type Props = {
  badge?: string;
  name: string;
  priceLabel: string;
  subline?: string;
  highlights?: string[];
  features: string[];
  footNote?: string;
  cta: {
    label: string;
    variant?: "primary" | "danger" | "outline";
    onClick?: () => void;
  };
};

export default function PlanCard({
  badge,
  name,
  priceLabel,
  subline,
  highlights = [],
  features,
  footNote,
  cta,
}: Props) {
  return (
    <div className="flex flex-col rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
      <div className="p-6">
        <div className="flex justify-between items-center">
          <h3 className="text-3xl font-extrabold mt-4">{name}</h3>
          {badge && (
            <span className="rounded-full bg-red-50 text-red-700 text-xs font-semibold px-3 py-1">
              {badge}
            </span>
          )}
        </div>

        <p className="mt-3 text-2xl font-extrabold">{priceLabel}</p>
        {subline && <p className="text-base text-gray-600 mt-2">{subline}</p>}

        <div className="mt-4 space-y-2 border-l-3 border-red-600 rounded py-4">
          {highlights.map((h, i) => (

            <div key={i} className="flex items-center text-base text-black">
              <Icon icon="mdi:circle-small" className="text-gray-400 text-xl" />
              {h}
            </div>
          ))}
        </div>

        <div className="mt-5">
          <Button {...cta} className="w-full" />
          {footNote && (
            <p className="mt-2 text-xs text-center text-gray-500">{footNote}</p>
          )}
        </div>

        <div className="mt-6  pt-5">
          <p className="text-base text-gray-700 font-semibold">What's included</p>
          <ul className="mt-3 space-y-2">
            {features.map((f, i) => (
              <li key={i} className="flex items-center justify-start text-base">
                <Icon
                  icon="mdi:check-circle"
                  className="text-green-600 mt-0.5 mr-2"
                />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-auto  px-6 py-3">
        <a
          href="#"
          className="flex items-center text-base font-medium underline  text-gray-900 hover:text-blue-800"
          onClick={(e) => e.preventDefault()}
        >
          Full Feature Breakdown
          <Icon icon="mdi:chevron-right" className="ml-1 text-lg" />
        </a>
      </div>
    </div>
  );
}
