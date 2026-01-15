// components/MultiLanguageSection.tsx

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

type Language = {
  id: string;
  name: string;
  subtitle: string;
  iconSrc: string;
  iconAlt: string;
};

const LANGUAGES: Language[] = [
  {
    id: "python",
    name: "Python",
    subtitle: "Great for real‑time data, AI, and backend services.",
    iconSrc: "/assets/core-services/PythonSDK.svg",
    iconAlt: "Python logo",
  },
  {
    id: "javascript",
    name: "JavaScript",
    subtitle: "Perfect for web, dashboards, and Node.js backends.",
    iconSrc: "/assets/core-services/JavaScriptSDK.svg",
    iconAlt: "JavaScript logo",
  },
  {
    id: "kotlin",
    name: "Kotlin",
    subtitle: "Native, low‑latency Android experiences.",
    iconSrc: "/assets/core-services/KotlinSDK.svg",
    iconAlt: "Kotlin logo",
  },
  {
    id: "swift",
    name: "Swift",
    subtitle: "Real‑time apps on iOS, iPadOS, and macOS.",
    iconSrc: "/assets/core-services/SwiftSDK.svg",
    iconAlt: "Swift logo",
  },
  {
    id: "java",
    name: "Java",
    subtitle: "Battle‑tested SDK for JVM servers and Android.",
    iconSrc: "/assets/core-services/JavaSDK.svg",
    iconAlt: "Java logo",
  },
  {
    id: "cpp",
    name: "C++",
    subtitle: "High‑performance native and embedded clients.",
    iconSrc: "/assets/core-services/C-coreSDK.svg",
    iconAlt: "C++ logo",
  },
  {
    id: "unreal",
    name: "Unreal Engine",
    subtitle: "Real‑time multiplayer sync and game logic.",
    iconSrc: "/assets/core-services/UnrealEngineSDK.svg",
    iconAlt: "Unreal Engine logo",
  },
];

const MultiLanguageSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(LANGUAGES[0].id);
  const [typedText, setTypedText] = useState<string>(LANGUAGES[0].name);

  const activeLanguage = LANGUAGES.find((l) => l.id === activeId)!;

  // TYPEWRITER EFFECT  -------------------------------------------
  useEffect(() => {
    const fullText = activeLanguage.name;
    let index = 0;
    setTypedText("");

    let timeoutId: ReturnType<typeof setTimeout>;

    const type = () => {
      setTypedText(fullText.slice(0, index + 1));
      index += 1;
      if (index < fullText.length) {
        timeoutId = setTimeout(type, 80); // typing speed
      }
    };

    timeoutId = setTimeout(type, 120); // small delay before start
    return () => clearTimeout(timeoutId);
  }, [activeId, activeLanguage.name]);

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Multi‑Language, Multi‑Platform
          </h2>
          <p className="mt-4 text-[20px] font-[400] leading-[28px] text-neutral-700 max-md:max-w-full">
            Accelerate development with tools and SDKs built for speed, scale,
            and AI‑powered productivity.
          </p>
        </div>


        <div className="mt-10 rounded-3xl bg-[#020b3a] px-6 py-7 text-white md:px-16 md:py-18">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="md:w-1/2">
              <p className="text-[22px] mb-4 font-medium  tracking-[0.16em] text-white">
                Support for
              </p>

              <h3
                className="mt-1 text-2xl md:text-3xl font-extrabold"
                aria-live="polite"
              >
                {typedText}
                <span className="ml-0.5 text-blue-300">|</span>
              </h3>

              <p className="mt-3 text-xs md:text-sm text-blue-100">
                {activeLanguage.subtitle}
              </p>

              <button
                type="button"
                className="mt-5 inline-flex items-center gap-1 text-xs md:text-sm font-semibold text-white hover:text-white"
              >
                See all <span aria-hidden>→</span>
              </button>
            </div>

            <div className="md:w-1/2">
              <div className="flex flex-wrap justify-start gap-3 md:justify-end">
                {LANGUAGES.map((lang) => {
                  const isActive = lang.id === activeId;
                  return (
                    <button
                      key={lang.id}
                      type="button"
                      aria-label={lang.name}
                      aria-pressed={isActive}
                      onMouseEnter={() => setActiveId(lang.id)}
                      onFocus={() => setActiveId(lang.id)}
                      onClick={() => setActiveId(lang.id)}
                      className={`relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl bg-white transition
                        hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2
                        focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020b3a]
                        ${
                          isActive
                            ? "bg-white shadow-[0_0_0_2px_rgba(255,255,255,0.7)] scale-105"
                            : ""
                        }`}
                    >
                      <Image
                        src={lang.iconSrc}
                        alt={lang.iconAlt}
                        width={28}
                        height={28}
                        className="h-6 w-6 object-contain"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiLanguageSection;