"use client";
import React, { useState } from "react";
import Image from "next/image";

// Local images
import inApp from "../../../../../public/assets/bento-grid/In-App.png";
import presence from "../../../../../public/assets/bento-grid/Presence.svg";
import pubnubChat from "../../../../../public/assets/bento-grid/PubNub.svg";
import liveAnalytics from "../../../../../public/assets/bento-grid/LiveAnalytics.svg";
import liveData from "../../../../../public/assets/bento-grid/LiveData.svg";
import mobilePush from "../../../../../public/assets/bento-grid/MobilePush.jpg";

const FeaturesGrid = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="bg-[#001143] p-4 md:p-8">
      <div className="mx-auto max-w-7xl px-1 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          
          {/* In-App Messaging - Large card */}
          <div
            className="lg:col-span-8 group cursor-pointer"
            onMouseEnter={() => setHoveredCard("messaging")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="h-full overflow-hidden rounded-xl border border-[#5286ff] bg-[#001143] 
              shadow-[0_4px_12px_rgba(82,134,255,0.3)] transition-all duration-300
              hover:border-[#3B82F6] hover:shadow-[0_8px_20px_rgba(59,130,246,0.4)]">
              <div className="relative h-[210px] md:h-[230px] lg:h-[250px] overflow-hidden">
                <Image
                  src={inApp}
                  alt="In-App Messaging"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5 md:p-6 lg:p-7">
                <h3 className="mb-3 text-xl font-bold text-white md:text-2xl">
                  In-App Messaging
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-[#94A3B8] md:text-base">
                  Incrementally provision PubNub with persistence, file sharing, functions, and 3rd party integrations for a fully featured social and engagement.
                </p>
                <button className="flex items-center gap-2 text-sm font-medium text-[#3B82F6] transition-colors hover:text-[#60A5FA]">
                  Learn more
                </button>
              </div>
            </div>
          </div>

          {/* Presence - Small card */}
          <div
            className="lg:col-span-4 group cursor-pointer"
            onMouseEnter={() => setHoveredCard("presence")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#5286ff] bg-[#001143] 
              shadow-[0_4px_12px_rgba(82,134,255,0.3)] transition-all duration-300
              hover:border-[#3B82F6] hover:shadow-[0_8px_20px_rgba(59,130,246,0.4)]">
              <div className="p-5 md:p-6 lg:p-7">
                <h3 className="mb-3 text-xl font-bold text-white md:text-2xl">
                  Presence
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-[#94A3B8] md:text-base">
                  Real-time awareness to seamlessly monitor and manage user activity &amp; engagement.
                </p>
                <button className="mb-1 flex items-center gap-2 text-sm font-medium text-[#3B82F6] transition-colors hover:text-[#60A5FA]">
                  Learn more
                </button>
              </div>
              <div className="relative h-[150px] md:h-[170px] overflow-hidden">
                <Image
                  src={presence}
                  alt="Presence"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* PubNub Chat */}
          <div
            className="lg:col-span-4 group cursor-pointer"
            onMouseEnter={() => setHoveredCard("chat")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#5286ff] bg-[#001143] 
              shadow-[0_4px_12px_rgba(82,134,255,0.3)] transition-all duration-300
              hover:border-[#3B82F6] hover:shadow-[0_8px_20px_rgba(59,130,246,0.4)]">
              <div className="p-5 md:p-6 lg:p-7">
                <h3 className="mb-3 text-xl font-bold text-white md:text-2xl">
                  PubNub Chat
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-[#94A3B8] md:text-base">
                  Build feature-rich chat with our SDKs, UI Templates, &amp; moderation tools.
                </p>
                <button className="mb-1 flex items-center gap-2 text-sm font-medium text-[#3B82F6] transition-colors hover:text-[#60A5FA]">
                  Learn more
                </button>
              </div>
              <div className="relative h-[180px] md:h-[200px] overflow-hidden">
                <Image
                  src={pubnubChat}
                  alt="PubNub Chat"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Live Analytics */}
          <div
            className="lg:col-span-8 group cursor-pointer"
            onMouseEnter={() => setHoveredCard("analytics")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="h-full overflow-hidden rounded-3xl border border-[#5286ff] bg-[#001143] 
              shadow-[0_4px_12px_rgba(82,134,255,0.3)] transition-all duration-300
              hover:border-[#3B82F6] hover:shadow-[0_8px_20px_rgba(59,130,246,0.4)]">
              <div className="relative h-[200px] md:h-[220px] lg:h-[240px] overflow-hidden">
                <Image
                  src={liveAnalytics}
                  alt="Live Analytics"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5 md:p-6 lg:p-7">
                <h3 className="mb-3 text-xl font-bold text-white md:text-2xl">
                  Live Analytics and Decisioning
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-[#94A3B8] md:text-base">
                  PubNub Illuminate enables real-time analytics, decisioning, and automation with no-code tools, empowering rapid responses to live trends and issues.
                </p>
                <button className="flex items-center gap-2 text-sm font-medium text-[#3B82F6] transition-colors hover:text-[#60A5FA]">
                  Learn more
                </button>
              </div>
            </div>
          </div>

          {/* Live Data Sync */}
          <div
            className="lg:col-span-8 group cursor-pointer"
            onMouseEnter={() => setHoveredCard("sync")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="h-full overflow-hidden rounded-3xl border border-[#5286ff] bg-[#001143] 
              shadow-[0_4px_12px_rgba(82,134,255,0.3)] transition-all duration-300
              hover:border-[#3B82F6] hover:shadow-[0_8px_20px_rgba(59,130,246,0.4)]">
              <div className="relative h-[190px] md:h-[210px] lg:h-[230px] overflow-hidden">
                <Image
                  src={liveData}
                  alt="Live Data Sync"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5 md:p-6 lg:p-7">
                <h3 className="mb-3 text-xl font-bold text-white md:text-2xl">
                  Live Data Sync
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-[#94A3B8] md:text-base">
                  PubNub&apos;s App Context system ensures real-time consistency by syncing critical app data across users and devices.
                </p>
                <button className="flex items-center gap-2 text-sm font-medium text-[#3B82F6] transition-colors hover:text-[#60A5FA]">
                  Learn more
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Push Notifications */}
          <div
            className="lg:col-span-4 group cursor-pointer"
            onMouseEnter={() => setHoveredCard("notifications")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="h-full overflow-hidden rounded-3xl border border-[#5286ff] bg-[#001143] 
              shadow-[0_4px_12px_rgba(82,134,255,0.3)] transition-all duration-300
              hover:border-[#3B82F6] hover:shadow-[0_8px_20px_rgba(59,130,246,0.4)] flex flex-col">
              <div className="p-5 md:p-6 lg:p-7 flex flex-col justify-start flex-1">
                <h3 className="mb-3 text-xl font-bold text-white md:text-2xl">
                  Mobile Push Notifications
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-[#94A3B8] md:text-base">
                  Mobile Push Notifications deliver immediate updates to users even when they&apos;re not in the app.
                </p>
                <button className="flex items-center gap-2 text-sm font-medium text-[#3B82F6] transition-colors hover:text-[#60A5FA]">
                  Learn more
                </button>
              </div>
              <div className="relative h-[210px] md:h-[230px] lg:h-[250px] w-full overflow-hidden">
                <Image
                  src={mobilePush}
                  alt="Mobile Push Notifications"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;
