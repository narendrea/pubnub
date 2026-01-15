"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const CompanyLogoSlider = () => {
  const logos = [
    { name: "Swiggy", src: "/assets/slider-img/Swiggy.svg" },
    { name: "Adobe", src: "/assets/slider-img/Adobe.svg" },
    { name: "Unity", src: "/assets/slider-img/Unity.svg" },
    { name: "LiveLike", src: "/assets/slider-img/LiveLike.svg" },
    { name: "Gameloft", src: "/assets/slider-img/Gameloft.svg" },
    { name: "Logitech", src: "/assets/slider-img/Logitech.svg" },
    { name: "Beamable", src: "/assets/slider-img/Beamable.svg" },
    { name: "DAZN", src: "/assets/slider-img/DAZN Logo.svg" },
    { name: "FanHub", src: "/assets/slider-img/Fan Hub.svg" },
    { name: "Life.Church", src: "/assets/slider-img/Life.Church.svg" },
    { name: "RingCentral", src: "/assets/slider-img/Ring Central.svg" },
    { name: "ServiceMax", src: "/assets/slider-img/ServiceMax.svg" },
    { name: "Ticketmaster", src: "/assets/slider-img/Ticketmaster.svg" },
    { name: "Yelp", src: "/assets/slider-img/yelp.svg" },
  ];

  return (
    <div className="overflow-hidden mb-24 px-6 md:px-20 lg:px-40">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={5}        // Shows 5 logos at once
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={3000}             // Adjust speed for smooth scrolling
        freeMode={true}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 },
        }}
      >
        {logos.map((logo, idx) => (
          <SwiperSlide
            key={idx}
            className="flex items-center justify-center"
          >
            <div className="h-20 flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.name}
                width={150}
                height={80}
                className="object-contain w-auto h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CompanyLogoSlider;
