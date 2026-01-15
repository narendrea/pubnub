"use client";
import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import RedButton from "./buttons/RedButton";

const IndustryCards = () => {
  const cards = [
    {
      id: 1,
      category: "Sports, Media, Entertainment",
      logo: "/assets/power-global/dan.svg",
      title: "Increase Fan Engagement",
      description:
        "through real-time fan interactions with chat, notifications, alerts, and more",
      bgImage: "/assets/power-global/global-1.jpg",
    },
    {
      id: 2,
      category: "Digital Health",
      logo: "/assets/power-global/mana.svg",
      title: "Enhance patient care",
      description:
        "with user status, full-featured chat and push notifications, all with HIPAA compliance",
      bgImage: "/assets/power-global/global-2.jpg",
    },
    {
      id: 3,
      category: "Digital Commerce",
      logo: "/assets/power-global/sta.svg",
      title: "Elevate buyer experiences",
      description:
        "with instant user status, chat, and automated push notifications",
      bgImage: "/assets/power-global/global-3.jpg",
    },
    {
      id: 4,
      category: "FinTech",
      logo: "/assets/power-global/Gaming.png",
      title: "Build secure financial journeys",
      description:
        "using real-time alerts, in-app messaging, and fraud prevention notifications",
      bgImage: "/assets/power-global/global-4.jpg",
    },
    {
      id: 5,
      category: "Education & E-Learning",
      logo: "/assets/power-global/kust.svg",
      title: "Boost student engagement",
      description:
        "with live chat, instant updates, and collaborative learning experiences",
      bgImage: "/assets/power-global/global-5.jpg",
    },
    {
      id: 6,
      category: "Travel & Hospitality",
      logo: "/assets/power-global/mont.svg",
      title: "Deliver seamless guest experiences",
      description:
        "through real-time support, booking alerts, and personalized notifications",
      bgImage: "/assets/power-global/global-6.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-16 rounded-b-[60px]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-[36px] font-[800] tracking-[-0.9px] leading-[40px] max-md:max-w-full text-neutral-900 mb-18 mt-16 text-center">
          Powering global real-time interactive experiences in 40+ Industries
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${card.bgImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a33]/90 via-[#0a1a33]/55 to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-[12px] shadow-md z-10">
                  <span className="text-xs sm:text-base font-medium text-[#2e2e2e]">
                    {card.category}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 z-10">
                  <div className="relative h-16 w-auto min-w-[80px] max-w-[160px] flex items-center">
                    <Image
                      src={card.logo}
                      alt="logo"
                      width={260}
                      height={80}
                      className="w-auto h-20 object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl sm:text-2xl font-medium text-[#3b3b3b] mb-3">
                  {card.title}
                </h3>
                <p className="text-neutral-700 text-sm sm:text-[18px] leading-relaxed mb-6 flex-1">
                  {card.description}
                </p>
                <button className="inline-flex items-center text-gray-800 font-semibold transition-colors duration-200 group-hover:text-red-600">
                  <span>Read their story</span>
                  <Icon
                    icon="akar-icons:arrow-right"
                    className="ml-2 w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full text-center my-16">
          <RedButton label="Discover More" />
        </div>
      </div>
    </div>
  );
};

export default IndustryCards;
