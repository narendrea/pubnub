// components/CoreServicesSection.tsx

import React from "react";
import Image from "next/image";
import pubnubCoreServicesImage from "../../../../public/assets/core-services/core-hero.webp";

const CoreServicesSection: React.FC = () => {
  return (
    <section className="bg-[#001143] py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          PubNub Core Services
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm md:text-base text-blue-100">
          Enable real-time communication and power low-latency, event-driven
          logic across your entire application architecture.
        </p>
      </div>

      {/* Image area */}
      <div className="mt-10 flex justify-center px-4">
        <div className="relative w-full max-w-5xl">
          {/* apni image ka path yaha de do */}
          <Image
            src={pubnubCoreServicesImage}
            alt="PubNub core services icons"
            width={1600}
            height={750}
            // responsive
            sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 80vw,
                   960px"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default CoreServicesSection;