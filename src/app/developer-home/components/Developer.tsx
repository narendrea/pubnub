// components/DevelopersSection.tsx

import React from "react";
import Image from "next/image";

type DevItem = {
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
};

const items: DevItem[] = [
  {
    title: "Documentation",
    description:
      "Get started quickly with PubNub’s SDKs, APIs and 3rd‑party integrations.",
    imageSrc: "/assets/developer/developerlogo3.svg",
    alt: "Documentation Logo",
  },
  {
    title: "Live Code Tour",
    description:
      "Explore PubNub’s core features in our interactive live coding tour.",
    imageSrc: "/assets/developer/developerlogo2.svg",
    alt: "Live Code Tour Logo",
  },
  {
    title: "Tutorials",
    description:
      "Start building chat, geolocation, IoT solutions, and more with step‑by‑step tutorials.",
    imageSrc: "/assets/developer/developerlogo1.svg",
    alt: "Tutorials Logo",
  },
  {
    title: "Blog",
    description:
      "Understand key concepts to architect and build your application with PubNub.",
    imageSrc: "/assets/developer/developerlogo5.svg",
    alt: "Blog Logo",
  },
  {
    title: "Demos",
    description: "Working demos and sample code of data streams in action.",
    imageSrc: "/assets/developer/developerlogo4.svg",
    alt: "Demos Logo",
  },
];

const DevelopersSection: React.FC = () => {
  return (
    <section className="bg-[#f5f7fb] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <h2 className="text-center text-2xl md:text-4xl font-extrabold text-slate-900">
          PubNub for Developers
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white px-7 py-7 shadow-[0_4px_12px_rgba(15,23,42,0.06)]"
            >
              <div className="mb-6">
                <div className="inline-flex h-20 w-20 items-center justify-center">
                  <Image
                    src={item.imageSrc}
                    alt={item.alt}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-base md:text-lg font-semibold text-black">
                  {item.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-neutral-900">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopersSection;
