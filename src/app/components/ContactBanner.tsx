import React from "react";
import Image, { StaticImageData } from "next/image";

interface ContactBannerProps {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  imageSrc: StaticImageData | string;
  imageAlt: string;
  imagePosition?: "left" | "right";
}

const ContactBanner: React.FC<ContactBannerProps> = ({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  imageSrc,
  imageAlt,
  imagePosition = "right",
}) => {
  const imageLeft = imagePosition === "left";

  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 mb-10">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-6 md:grid-cols-12 md:gap-0">
            
            {/* Image (4 columns) */}
            <div
              className={`relative h-52 w-full md:h-full md:min-h-[18rem] md:col-span-4 ${
                imageLeft ? "order-1" : "order-2"
              }`}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 33vw,
                       400px"
                className="object-cover"
                priority
              />
            </div>

            {/* Content (8 columns) */}
            <div
              className={`flex items-center px-6 py-7 md:px-10 md:py-10 md:col-span-8 ${
                imageLeft ? "order-2" : "order-1"
              }`}
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                  {title}
                </h2>

                <p className="mt-3 max-w-xl text-sm md:text-base leading-relaxed text-neutral-900">
                  {description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={primaryHref}
                    className="inline-flex items-center justify-center rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-red-700"
                  >
                    {primaryLabel}
                  </a>

                  {secondaryLabel && secondaryHref && (
                    <a
                      href={secondaryHref}
                      className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                    >
                      {secondaryLabel}
                    </a>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
