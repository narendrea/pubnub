"use client";
import React from "react";
import PlanCard from "./PlanCard";
import PillCard from "./PillCard";

export default function PricingPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            Choose Your Plan
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            All plans include unlimited channels and core features. Pay only for MAU.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          <PlanCard
            name="Free Plan"
            priceLabel="Free"
            subline="The basics to test and build"
            highlights={["200 MAU + 3k interactions", "Best for testing"]}
            features={[
              "1 GB data storage",
              "Community support",
              "Up to 15k transactions",
            ]}
            footNote="No credit card required"
            cta={{ label: "Start Building Free" }}
          />

          <PlanCard
            badge="Popular"
            name="Starter Plan"
            priceLabel="$98/month"
            subline="Pay as you grow"
            highlights={["1,000 MAU included", "Ideal for launching"]}
            features={[
              "Channel & command management",
              "50 GB data storage",
              "Standard support (24x5)",
            ]}
            cta={{ label: "Create Starter Account", variant: "danger" }}
          />

          <PlanCard
            name="Pro Plan"
            priceLabel="Custom"
            subline="Built for scale"
            highlights={["MAU pricing", "Volume discounts"]}
            features={[
              "Priority SLA",
              "Advanced analytics",
              "Dedicated support",
              "Custom integrations",
            ]}
            cta={{ label: "Contact Sales", variant: "outline" }}
          />
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-xl sm:text-4xl font-extrabold mb-12">
            Pay-As-You-Go Pricing
          </h2>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-7xl mx-auto">
            <PillCard title="Free" price="$0/month" note="Up to 200 MAU" />
            <PillCard title="Starter" price="$98/month" note="1,000 MAU" />
            <PillCard title="Volume" price="Custom" note="10,000+ MAU" />
          </div>
        </div>
      </section>
    </main>
  );
}
