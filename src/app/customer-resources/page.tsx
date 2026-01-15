"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

// --------------------- Types ---------------------
type SolutionFilter =
  | "all"
  | "chat"
  | "collaboration"
  | "gaming"
  | "health"
  | "messaging"
  | "events"
  | "elearning"
  | "ecommerce";

type UseCaseFilter =
  | "all"
  | "liveEntertainment"
  | "virtualEvents"
  | "elearning"
  | "gaming"
  | "fitness"
  | "wellness"
  | "foodDelivery"
  | "conferences"
  | "interactiveGames"
  | "retail"
  | "liveShopping";

type Story = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  solution: SolutionFilter;
  useCases: UseCaseFilter[];
  tags: string[];
};

const solutionOptions: { id: SolutionFilter; label: string }[] = [
  { id: "all", label: "All solutions" },
  { id: "chat", label: "In‑App chat" },
  { id: "collaboration", label: "Collaboration" },
  { id: "gaming", label: "Gaming" },
  { id: "health", label: "Health & Fitness" },
  { id: "messaging", label: "Messaging" },
  { id: "events", label: "Events" },
  { id: "elearning", label: "E‑Learning" },
  { id: "ecommerce", label: "E‑commerce" },
];

const useCaseOptions: { id: UseCaseFilter; label: string }[] = [
  { id: "all", label: "All use cases" },
  { id: "liveEntertainment", label: "Live entertainment" },
  { id: "virtualEvents", label: "Virtual events" },
  { id: "elearning", label: "E‑Learning" },
  { id: "gaming", label: "Gaming" },
  { id: "fitness", label: "Fitness" },
  { id: "wellness", label: "Wellness" },
  { id: "foodDelivery", label: "Food delivery" },
  { id: "conferences", label: "Conferences" },
  { id: "interactiveGames", label: "Interactive games" },
  { id: "retail", label: "Retail" },
  { id: "liveShopping", label: "Live shopping" },
];

// --------------------- Stories Data ---------------------
const STORIES: Story[] = [
  {
    id: "17live",
    title: "17LIVE",
    description:
      "See how 17LIVE leverages PubNub for chat, creating an engaging live stream experience between creators and fans.",
    imageSrc: "/assets/customer-resource/customer1.png",
    solution: "chat",
    useCases: ["liveEntertainment"],
    tags: ["In‑App chat", "Push notifications", "Live entertainment"],
  },
  {
    id: "ayoa",
    title: "Ayoa",
    description:
      "Ayoa creates a collaborative task management environment with real‑time syncing using PubNub.",
    imageSrc: "/assets/customer-resource/customer2.jpg",
    solution: "collaboration",
    useCases: ["virtualEvents", "elearning"],
    tags: ["Virtual events", "E‑Learning"],
  },
  {
    id: "beamable",
    title: "Beamable",
    description:
      "Beamable partners with PubNub to enable developers to quickly build highly engaging and interactive games.",
    imageSrc: "/assets/customer-resource/customer3.jpg",
    solution: "gaming",
    useCases: ["gaming"],
    tags: ["In‑App chat", "Gaming"],
  },
  {
    id: "fittrack",
    title: "FitTrack",
    description:
      "FitTrack uses PubNub to provide live fitness class streaming and real-time community challenges.",
    imageSrc: "/assets/customer-resource/customer4.jpg",
    solution: "health",
    useCases: ["fitness", "wellness"],
    tags: ["Live streaming", "Push notifications", "Community engagement"],
  },
  {
    id: "foodies",
    title: "Foodies App",
    description:
      "Foodies leverages PubNub to offer real-time order tracking and instant messaging between customers and restaurants.",
    imageSrc: "/assets/customer-resource/customer5.jpg",
    solution: "messaging",
    useCases: ["foodDelivery"],
    tags: ["In‑App chat", "Push notifications", "Order tracking"],
  },
  {
    id: "eventhub",
    title: "EventHub",
    description:
      "EventHub integrates PubNub to deliver real-time updates and interactive Q&A during virtual conferences.",
    imageSrc: "/assets/customer-resource/customer6.jpg",
    solution: "events",
    useCases: ["virtualEvents", "conferences"],
    tags: ["Live events", "In-App chat", "Push notifications"],
  },
  {
    id: "gamezone",
    title: "GameZone",
    description:
      "GameZone uses PubNub to enable multiplayer game interactions with instant messaging and state sync.",
    imageSrc: "/assets/customer-resource/customer7.jpg",
    solution: "gaming",
    useCases: ["gaming", "interactiveGames"],
    tags: ["Multiplayer", "In‑App chat", "Real-time gameplay"],
  },
  {
    id: "educonnect",
    title: "EduConnect",
    description:
      "EduConnect leverages PubNub to create interactive e-learning sessions with live quizzes and chat support.",
    imageSrc: "/assets/customer-resource/customer8.jpg",
    solution: "elearning",
    useCases: ["elearning", "virtualEvents"],
    tags: ["E-Learning", "Live chat", "Interactive sessions"],
  },
  {
    id: "shoplive",
    title: "ShopLive",
    description:
      "ShopLive integrates PubNub to enable live auctions and real-time customer engagement during sales events.",
    imageSrc: "/assets/customer-resource/customer9.jpg",
    solution: "ecommerce",
    useCases: ["retail", "liveShopping"],
    tags: ["Live streaming", "In-App chat", "Real-time bidding"],
  },
];


const CustomerStories: React.FC = () => {
  const [solutionFilter, setSolutionFilter] = useState<SolutionFilter>("all");
  const [useCaseFilter, setUseCaseFilter] = useState<UseCaseFilter>("all");
  const [openSolution, setOpenSolution] = useState(false);
  const [openUseCase, setOpenUseCase] = useState(false);

  const isAllActive =
    solutionFilter === "all" && useCaseFilter === "all" && !openSolution && !openUseCase;

  const filteredStories = STORIES.filter((story) => {
    const matchSolution =
      solutionFilter === "all" || story.solution === solutionFilter;
    const matchUseCase =
      useCaseFilter === "all" ||
      story.useCases.some((u) => u === useCaseFilter);
    return matchSolution && matchUseCase;
  });

  return (
    <section className="bg-white py-12 md:py-16">

         <section className="bg-white py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900">
          The world runs on PubNub
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base leading-relaxed text-neutral-900">
          See how over 2000 companies are building digital products — websites,
          apps, devices — with real‑time communication at their core.
        </p>
      </div>
    </section>
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* FILTER BAR --------------------------------------------------- */}
        <div className="flex flex-wrap items-center gap-6 border-b border-slate-200 pb-3">
          {/* All tab */}
          <button
            type="button"
            onClick={() => {
              setSolutionFilter("all");
              setUseCaseFilter("all");
              setOpenSolution(false);
              setOpenUseCase(false);
            }}
            className={`border-b-2 pb-1 text-sm font-medium cursor-pointer ${
              isAllActive
                ? "border-[#ff4b5c] text-[#ff4b5c]"
                : "border-transparent text-slate-700 hover:text-slate-900"
            }`}
          >
            All
          </button>

          {/* Solution dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setOpenSolution((v) => !v);
                setOpenUseCase(false);
              }}
              className={`flex items-center cursor-pointer gap-1 border-b-2 pb-1 text-sm font-medium ${
                openSolution || solutionFilter !== "all"
                  ? "border-[#ff4b5c] text-slate-900"
                  : "border-transparent text-slate-700 hover:text-slate-900"
              }`}
            >
              <span>Solution</span>
              <Icon
                icon="mdi:chevron-down"
                className={`h-4 w-4 transition-transform ${
                  openSolution ? "rotate-180" : ""
                }`}
              />
            </button>

            {openSolution && (
              <div className="absolute left-0 top-full z-20 mt-2 w-44 rounded-lg border border-slate-200 bg-white py-1 shadow-lg">
                {solutionOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      setSolutionFilter(opt.id);
                      setOpenSolution(false);
                    }}
                    className={`block w-full cursor-pointer px-3 py-1.5 text-left text-xs md:text-sm ${
                      solutionFilter === opt.id
                        ? "bg-[#fff2f3] text-[#ff4b5c]"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Use case dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setOpenUseCase((v) => !v);
                setOpenSolution(false);
              }}
              className={`flex items-center cursor-pointer gap-1 border-b-2 pb-1 text-sm font-medium ${
                openUseCase || useCaseFilter !== "all"
                  ? "border-[#ff4b5c] text-slate-900"
                  : "border-transparent text-slate-700 hover:text-slate-900"
              }`}
            >
              <span>Use case</span>
              <Icon
                icon="mdi:chevron-down"
                className={`h-4 w-4 transition-transform ${
                  openUseCase ? "rotate-180" : ""
                }`}
              />
            </button>

            {openUseCase && (
              <div className="absolute left-[-40px] sm:left-0 top-full z-20 mt-2 w-48 rounded-lg border border-slate-200 bg-white py-1 shadow-lg">
                {useCaseOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      setUseCaseFilter(opt.id);
                      setOpenUseCase(false);
                    }}
                    className={`block cursor-pointer w-full px-3 py-1.5 text-left text-xs md:text-sm ${
                      useCaseFilter === opt.id
                        ? "bg-[#fff2f3] text-[#ff4b5c]"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* CARDS GRID --------------------------------------------------- */}
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
          {filteredStories.map((story) => (
            <article key={story.id} className="flex flex-col p-4 rounded-2xl cursor-pointer hover:shadow">
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden rounded-[24px] bg-slate-100 md:h-52 lg:h-56">
                <Image
                  src={story.imageSrc}
                  alt={story.title}
                  fill
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         380px"
                  className="object-cover"
                />
              </div>

              {/* Tags */}
              <div className="mt-3 flex flex-wrap gap-2">
                {story.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-[#ffecef] px-3 py-1 text-xs font-medium text-[#ac1025]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Text */}
              <h3 className="mt-4 text-base md:text-lg font-semibold text-black">
                {story.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-neutral-900">
                {story.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerStories;