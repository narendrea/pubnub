import React from "react";
import Image from "next/image";
import askAiImage from "../../../../public/assets/core-services/ai-tool.webp";
import askAiImage2 from "../../../../public/assets/core-services/ai-tool2.webp";

const AIToolsSection: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="relative overflow-hidden rounded-3xl bg-slate-900/5">
            <Image
              src={askAiImage}
              alt="Ask AI feature"
              width={1200}
              height={700}
              sizes="(max-width: 768px) 100vw,
                     (max-width: 1200px) 50vw,
                     600px"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="">
            <h2 className="text-[20px] font-bold text-neutral-900">
              Built‑in AI Coding Assistance
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-800">
              Speed up development with your favorite AI tools. Popular LLMs are
              already trained on the platform’s APIs, making it easy to generate
              functions, integrate services, and bring real‑time features to
              life—faster.
            </p>

            <a
              href="#"
              className="mt-5 inline-flex text-base font-semibold text-slate-800 "
            >
              Learn More 
            </a>
          </div>
        </div>

        <div className="mt-28 grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="order-2 lg:order-1">
            <h3 className="text-[20px] font-bold text-neutral-900">
              Solution Kits &amp; Templates
            </h3>
            <p className="mt-3 text-base leading-relaxed text-slate-800">
              Jumpstart your project with curated kits, templates, and how‑to
              guides built around proven real‑time use cases. Whether you&apos;re
              launching a web chat app, IoT system, SaaS product, or live
              dashboard, you&apos;ll save time and reduce risk with pre‑tested
              components and best practices.
            </p>

            <a
              href="#"
              className="mt-5 inline-flex text-base font-semibold text-slate-800"
            >
              Learn More 
            </a>
          </div>

          <div className="order-1 lg:order-2 relative overflow-hidden rounded-3xl bg-slate-900/5">
            <Image
              src={askAiImage2}
              alt="Solution kits and templates"
              width={1200}
              height={700}
              sizes="(max-width: 768px) 100vw,
                     (max-width: 1200px) 50vw,
                     600px"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIToolsSection;