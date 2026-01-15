import React from "react";
import Link from "next/link";
import Image from "next/image";
import heroBg from "../../../../public/assets/chat-solution/chat-hero.jpg";

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroBg}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* <div className="absolute inset-0 bg-[#020b3a]/85" /> */}
      </div>

      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 py-20 text-center md:py-28 lg:py-32">
        <h1 className="text-3xl font-extrabold leading-tight md:text-4xl lg:text-[2.7rem]">
          Accelerate Time to Market With
          <br className="hidden md:block" />
          <span className="block">
            Uncompromising Scale and Control
          </span>
        </h1>

        <p className="mt-5 max-w-2xl text-sm md:text-base leading-relaxed text-blue-100">
          PubNub gives your team the tools to launch high‑performance chat
          rapidly, manage complexity as you grow, and eliminate the
          infrastructure overhead.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md border border-blue-400/60
                       bg-[#001143] px-7 py-4 text-base font-semibold text-white
                       shadow-[0_0_25px_rgba(0,153,255,0.65)]  hover:bg-[#0e266d]
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                       focus-visible:ring-offset-[#020b3a] focus-visible:ring-blue-400"
          >
            Start Building
          </Link>

          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md border border-white/80
                       bg-white px-7 py-4 text-base font-semibold text-slate-900
                       shadow-sm hover:bg-slate-100
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                       focus-visible:ring-offset-[#020b3a] focus-visible:ring-white"
          >
            Contact Sales
          </Link>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;