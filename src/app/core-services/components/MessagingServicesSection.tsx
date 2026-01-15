import React from "react";
import Image from "next/image";

const cards = [
  {
    title: "In App Messaging",
    description:
      "Deliver real-time updates across devices and servers in under 100ms using a pub/sub model built for scale. Perfect for sending messages, signals, or notifications where speed and responsiveness are mission‑critical.",
    imageSrc: "/assets/core-services/ms1.jpg",
    imageAlt: "In app messaging diagram",
  },
  {
    title: "Mobile Push Notifications",
    description:
      "Ensure critical communications always reach users—even when they're offline—with built‑in push fallback to Apple and Android devices via FCM and APNS. Automatically switch from in‑app delivery to native push for seamless reliability.",
    imageSrc: "/assets/core-services/ms2.jpg",
    imageAlt: "Mobile push notification preview",
  },
  {
    title: "Event Hub",
    description:
      "Streamline integrations with an Event Hub that filters, processes, and triggers actions from user or device events—directly to your backend or analytics stack. Ideal for powering event‑driven workflows, automation, and insight generation in real time.",
    imageSrc: "/assets/core-services/ms3.jpg",
    imageAlt: "Event hub flow diagram",
  },
];

const MessagingServicesSection: React.FC = () => {
  return (
    <section className="bg-[#001143] py-16 md:py-20 mb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Messaging Services
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm md:text-base text-blue-100">
            Power real‑time, event‑driven experiences with messaging tools built
            for scale, speed, and seamless integration.
          </p>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex h-full flex-col rounded-3xl overflow-hidden bg-[#1A2956] text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="px-7 pt-7 pb-4 flex-1">
                <h3 className="text-lg md:text-xl font-semibold">
                  {card.title}
                </h3>
                <p className="mt-3 text-xs md:text-base leading-relaxed text-blue-100">
                  {card.description}
                </p>
              </div>

              <div className="relative top-6 w-full aspect-video md:aspect-[4/3] lg:aspect-[3/2]">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw,
           (max-width: 1200px) 33vw,
           360px"
                  priority={false}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MessagingServicesSection;
