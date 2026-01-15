"use client";
import React, { useState, useRef } from "react";
import { Icon } from "@iconify/react";

type Faq = { q: string; a: React.ReactNode };

const faqs: Faq[] = [
  {
    q: "What is MAU (Monthly Active Users)?",
    a: (
      <p>
        MAU stands for Monthly Active Users — the number of unique users who interact
        with your app each month. This includes users who send/receive messages, join
        channels, or use any platform features.
      </p>
    ),
  },
  {
    q: "How much does Platform Starter cost per MAU?",
    a: (
      <p>
        Starter typically begins around $170/month for 1,000 MAU (~$0.17 per MAU). Pricing
        scales with usage and qualifies for discounts at higher volumes.
      </p>
    ),
  },
  {
    q: "What are the Free plan limitations?",
    a: (
      <ul className="list-disc pl-5 space-y-1">
        <li>200 MAU for testing and small pilots</li>
        <li>Basic feature access and community support</li>
        <li>Usage caps intended for evaluation only</li>
      </ul>
    ),
  },
  {
    q: "How much do messages cost?",
    a: (
      <p>
        Messages and API calls are included as part of MAU-based pricing.
        No per-message or concurrency surprise fees.
      </p>
    ),
  },
  {
    q: "Are there any subscription fees for storing chats?",
    a: (
      <p>
        Storage and bandwidth are included up to generous limits. For heavy or regulated
        workloads, talk to sales for tailored allowances.
      </p>
    ),
  },
  {
    q: "Can I estimate costs for 100,000 MAU?",
    a: (
      <p>
        Yes—contact sales for volume discounts and a precise quote based on your usage profile.
      </p>
    ),
  },
  {
    q: "Do I need a credit card to start?",
    a: (
      <p>
        No credit card is required to start building on the free tier.
      </p>
    ),
  },
  {
    q: "How do overages work?",
    a: (
      <p>
        It’s pay‑as‑you‑grow. If you exceed included MAU, additional usage is billed at the
        applicable tier rate—no hard stops.
      </p>
    ),
  },
];

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (i: number) =>
    setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <h2 className="text-center text-black text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
          Frequently Asked Pricing Questions
        </h2>

        <ul className="mt-8 space-y-3 sm:space-y-4">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <li key={i} className={`group rounded-lg transition-colors ${isOpen ? "bg-gray-50" : "hover:bg-gray-50"}`}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => toggle(i)}
                  className="w-full flex items-start gap-3 sm:gap-4 p-4 text-left focus:outline-none rounded-lg"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-700">
                    <Icon
                      icon="mdi:chevron-right"
                      className={`h-5 w-5 transition-transform duration-200 ${isOpen ? "rotate-90" : "rotate-0"}`}
                    />
                  </span>
                  <span className="mt-[1px] text-base sm:text-lg font-semibold text-gray-900">
                    {item.q}
                  </span>
                </button>

                <div
                  id={`faq-panel-${i}`}
                  ref={(el) => {
                    contentRefs.current[i] = el || null; 
                  }}
                  style={{
                    maxHeight: isOpen
                      ? `${contentRefs.current[i]?.scrollHeight}px`
                      : "0px",
                  }}
                  className="overflow-hidden transition-[max-height] duration-300 px-4"
                >
                  <div className="ml-9 sm:ml-10 text-sm sm:text-base text-gray-700 leading-relaxed py-2">
                    {item.a}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
