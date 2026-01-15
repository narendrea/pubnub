import React from "react";
import Image from "next/image";
import SupportImg from "../../../../public/assets/home-img/support.png"; 


export default function Contact() {
  return (
    <>
     <section className="py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 mb-10">
        <div className="overflow-hidden rounded-3xl border border-[#ffffff29] bg-[#1A2956] shadow-sm">
          <div className="grid gap-6 md:grid-cols-12 md:gap-0">

            {/* Image on the right */}
            <div className="relative h-52 w-full md:h-full md:min-h-[18rem] md:col-span-4 order-2">
              <Image
                src={SupportImg}
                alt="Contact Banner"
                fill
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 33vw,
                       400px"
                className="object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div className="flex items-center px-6 py-7 md:px-10 md:py-10 md:col-span-8 order-1">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                 Speak to an Expert

                </h2>

                <p className="mt-3 max-w-xl text-sm md:text-lg leading-relaxed text-white">
                Whether you build apps for digital healthcare, fintech, ecommerce, or the gaming industry, now’s the time to enhance your user experience with real-time chat. Connect with our experts to learn how you can build secure, scalable, and interactive chat experiences.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md bg-red-600 px-5 py-4 text-base font-semibold text-white shadow hover:bg-red-700"
                  >
                    Contact Sales
                  </a>

                  <a
                    href="/learn-more"
                    className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-4 text-base font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
     
    </>
  );
}