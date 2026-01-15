// components/WhyPubNub.tsx

import React from "react";
import { Icon } from "@iconify/react";

type Item = {
  icon: string;
  text: string;
};

const leftItems: Item[] = [
  {
    icon: "solar:bolt-bold",
    text: "Accelerate development with prebuilt SDKs, components, and integrations.",
  },
  {
    icon: "mdi:shield-check-outline",
    text: "Maintain control with built‑in moderation, observability, and permissions.",
  },
];

const rightItems: Item[] = [
  {
    icon: "mdi:trending-up",
    text: "Confidently scale from MVP to millions of concurrent users.",
  },
  {
    icon: "mdi:cog-outline",
    text: "Simplify operations with built‑in security, moderation, and observability.",
  },
  {
    icon: "mdi:file-document-multiple-outline",
    text: "Backed by demos, tutorials, and a proven track record powering chat at global scale.",
  },
];

const WhyPubNub: React.FC = () => {
  return (
    <section className="bg-[#001143] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <div className="rounded-[30px] border border-[#fdfdfd45] bg-[#031143] px-6 py-8 md:px-12 md:py-12 shadow-lg">
          <div className="grid md:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: Heading + 2 bullets */}
            <div className="md:col-span-6 flex flex-col justify-start gap-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Why PubNub?
              </h2>

              <ul className="space-y-10">
                {leftItems.map((item) => (
                  <li key={item.text} className="flex items-start gap-4">
                    <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#1A2956]">
                      <Icon icon={item.icon} className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-sm md:text-base  leading-snug text-white">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT COLUMN: 3 bullets */}
            <div className="md:col-span-6 flex flex-col justify-start gap-11">
              <ul className="space-y-10">
                {rightItems.map((item) => (
                  <li key={item.text} className="flex items-start gap-4">
                    <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#1A2956]">
                      <Icon icon={item.icon} className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-sm md:text-base  leading-snug text-white">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPubNub;
