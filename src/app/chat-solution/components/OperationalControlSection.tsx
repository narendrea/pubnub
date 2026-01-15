import React from "react";
import Image from "next/image";
import operationImage1 from "../../../../public/assets/chat-solution/operation3.jpg";
import operationImage2 from "../../../../public/assets/chat-solution/operation1.jpg";
import operationImage3 from "../../../../public/assets/chat-solution/operation2.jpg";
import { Icon } from "@iconify/react";

const OperationalControlSection: React.FC = () => {
  return (
    <section className="bg-[#001143] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 text-white">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-blue-400/60 bg-blue-400">
              <Icon icon="mdi:message-text-fast" width="24" height="24" />
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold">
              Operational Control at Scale
            </h2>
            <p className="max-w-md text-sm md:text-base text-blue-100">
              Simplify the complexity of running secure, reliable chat at scale.
            </p>
          </div>

          <article className="overflow-hidden rounded-3xl border border-[#234c8a] bg-[#1A2956] shadow-[0_0_30px_rgba(0,0,0,0.6)]">
            <div className="relative h-36 w-full md:h-40 lg:h-48">
              <Image
                src={operationImage1}
                alt="Moderation tools"
                fill
                sizes="(max-width:768px) 100vw,
                       (max-width:1200px) 50vw,
                       520px"
                className="object-cover"
              />
            </div>
            <div className="px-6 py-5">
              <h3 className="text-base md:text-lg font-semibold">
                Moderation &amp; Role‑Based Permissions
              </h3>
              <p className="mt-2 text-xs md:text-sm leading-relaxed text-blue-100">
                Enforce chat policies with profanity filtering, user bans,
                message deletion, fine‑grained access control, and security
                features built for compliance and user safety.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-3xl border border-[#234c8a] bg-[#1A2956] shadow-[0_0_30px_rgba(0,0,0,0.6)]">
            <div className="relative h-36 w-full md:h-40 lg:h-48">
              <Image
                src={operationImage2}
                alt="Real-time channel monitoring"
                fill
                sizes="(max-width:768px) 100vw,
                       (max-width:1200px) 50vw,
                       520px"
                className="object-cover"
              />
            </div>
            <div className="px-6 py-5">
              <h3 className="text-base md:text-lg font-semibold">
                Real‑Time Channel Monitoring
              </h3>
              <p className="mt-2 text-xs md:text-sm leading-relaxed text-blue-100">
                Inspect live message flow, monitor user activity, and debug
                issues in real time to stay ahead of disruptions.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-3xl border border-[#234c8a] bg-[#1A2956] shadow-[0_0_30px_rgba(0,0,0,0.6)]">
            <div className="relative h-36 w-full md:h-40 lg:h-48">
              <Image
                src={operationImage3}
                alt="Presence and typing indicators"
                fill
                sizes="(max-width:768px) 100vw,
                       (max-width:1200px) 50vw,
                       520px"
                className="object-cover"
              />
            </div>
            <div className="px-6 py-5">
              <h3 className="text-base md:text-lg font-semibold">
                Presence &amp; Typing Indicators
              </h3>
              <p className="mt-2 text-xs md:text-sm leading-relaxed text-blue-100">
                Drive real‑time engagement with online status, session tracking,
                and typing events—all without extra engineering effort.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default OperationalControlSection;
