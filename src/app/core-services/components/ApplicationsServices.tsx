import React from "react";
import Image from "next/image";

const appServices = [
  {
    title: "Presence",
    description: (
      <>
        Track user and device activity in <strong className="font-bold">real time</strong>, 
        with instant awareness of who’s <strong className="font-bold">online, offline, or inactive</strong>. Build apps like 
        <strong className="font-bold">chat dashboards</strong>, multiplayer experiences, and live operations monitoring with just a few lines of code.
      </>
    ),
    imageSrc: "/assets/core-services/application1.jpg", 
    imageAlt: "Presence service visualization",
  },
  {
    title: "App Context",
    description: (
      <>
        Store and access <strong className="font-bold">user or app metadata</strong> in a flexible, always‑available data layer. Tie rich context to 
        <strong className="font-bold">real-time events</strong>, power intelligent automation, and keep client applications in sync with server state.
      </>
    ),
    imageSrc: "/assets/core-services/application5.jpg",
    imageAlt: "Application context cards",
  },
  {
    title: "Bridge Workspace",
    description: (
      <>
        Get a full view of <strong className="font-bold">real‑time tools</strong> to monitor, configure, and modernize event‑driven systems. Debug flows, manage access, and quickly iterate—without needing to redeploy or write additional backend code.
      </>
    ),
    imageSrc: "/assets/core-services/application2.jpg",
    imageAlt: "Bridge workspace dashboard",
  },
  {
    title: "Functions",
    description: (
      <>
        Run <strong className="font-bold">custom logic</strong> at the edge to process, transform, and route messages instantly. Enrich streams with <strong className="font-bold">business rules</strong>, filtering, and integrations to third‑party services—all without changing backend infrastructure.
      </>
    ),
    imageSrc: "/assets/core-services/application3.jpg",
    imageAlt: "Serverless functions diagram",
  },
  {
    title: "PubNub Chat",
    description: (
      <>
        Launch <strong className="font-bold">rich, scalable chat experiences</strong> with PubNub Chat. Add messaging into web, mobile, and gaming apps with features like <strong className="font-bold">typing indicators, read receipts, and message history</strong>—without rebuilding your stack.
      </>
    ),
    imageSrc: "/assets/core-services/application6.jpg",
    imageAlt: "Chat interface preview",
  },
  {
    title: "File Sharing",
    description: (
      <>
        Bring <strong className="font-bold">file & media sharing</strong> to life in real‑time experiences. Upload, store, and deliver files and images alongside messages, so <strong className="font-bold">collaboration and content delivery</strong> are a core part of the experience.
      </>
    ),
    imageSrc: "/assets/core-services/application4.jpg",
    imageAlt: "File sharing UI",
  },
];

const ApplicationsServices: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="text-center text-slate-900">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Applications Services
          </h2>
          <p className="mx-auto mt-3 max-w-4xl text-xs md:text-[20px] text-neutral-800">
            Build smarter, more interactive apps with real‑time context, control, and
            communication tools.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {appServices.map((service) => (
            <article
              key={service.title}
              className="flex h-full flex-col bg-white rounded-[24px] overflow-hidden border-0 border-solid border-[#1A2956] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] px-7 pt-7 pb-0"
            >
              <div>
                <h3 className="text-base md:text-lg font-semibold text-black">
                  {service.title}
                </h3>
                <p className="mt-3 text-xs md:text-base leading-relaxed text-neutral-800">
                  {service.description}
                </p>
              </div>

              <div className="relative mt-6 h-28 w-full md:h-32 lg:h-58">
                <Image
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         320px"
                  className="object-contain"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsServices;
