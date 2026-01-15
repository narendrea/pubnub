"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-[#020b3a] text-white min-h-screen flex items-center">
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16 py-16 lg:py-20">

        <motion.div
          className="w-full lg:w-2/3 text-start mb-34"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[0.25em] text-xs text-blue-300 mb-4">
            REAL-TIME PLATFORM
          </p>

          <h1 className="text-[60px] font-[700] tracking-[-1.5px] leading-[60px] max-md:max-w-full !text-[56px] !leading-[64px] !tracking-[-1.4px]">
            The market leading platform
            <br />
            for real-time interactive apps
          </h1>

          <p className="text-sm md:text-base text-blue-100 mb-2">
            The PubNub promise: real-time innovation
          </p>
          <p className="text-sm md:text-base text-blue-100/80 mb-8">
            Efficiently and effectively build, manage, and monetize engaging apps that captivate and delight users.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-md cursor-pointer bg-[#001143] hover:bg-[#0e266d] text-sm md:text-base font-medium shadow-[0_0_40px_rgba(37,99,235,0.9)] border border-blue-300/40">
              Start Building
            </button>

            <button className="px-6 py-3 cursor-pointer rounded-md bg-white text-slate-900 text-sm md:text-base font-medium hover:bg-slate-100 shadow-md">
              Contact sales
            </button>
          </div>
        </motion.div>

        <div className="hidden lg:block w-full lg:w-1/3 relative h-[520px] md:h-[580px]">
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <div className="w-[130%] h-[130%] rounded-full bg-gradient-to-br from-cyan-900/30 to-cyan-700/20 backdrop-blur-sm border border-cyan-400/30 shadow-[0_0_40px_rgba(34,211,238,0.5)] blur-xl" />
          </div>

          <motion.div
            className="absolute top-4 right-6 z-10 w-44 sm:w-52 md:w-60 h-48 sm:h-56 md:h-60 rounded-lg p-3"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: -20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <Image
              src="/assets/home-img/hero-img3.png"
              alt="Top image"
              fill
              className="object-contain"
            />
          </motion.div>

          <motion.div
            className="absolute top-14 right-[120px] z-20 w-52 sm:w-60 md:w-68 h-56 sm:h-64 md:h-72 rounded-lg p-4"
            initial={{ opacity: 0, y: -180 }}
            whileInView={{ opacity: 1, y: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <Image
              src="/assets/home-img/hero-img2.png"
              alt="Middle image"
              fill
              className="object-contain"
            />
          </motion.div>

          <motion.div
            className="absolute bottom-40 right-12 z-30 w-48 sm:w-60 md:w-68 h-52 sm:h-60 md:h-64 rounded-lg p-3"
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 30 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <Image
              src="/assets/home-img/hero-img1.png"
              alt="Bottom image"
              fill
              className="object-contain"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
