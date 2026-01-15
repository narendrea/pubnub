"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";

type Badge = {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  width?: number;
  height?: number;
};

const stats = [
  { value: "99.999%", label: "Uptime SLA" },
  { value: "<100ms", label: "Global Latency" },
  { value: "3M+", label: "Developers" },
  { value: "25M+", label: "Concurrent Connections" },
];

const badges: Badge[] = [
  { src: "/assets/pricing/pricing1.webp", alt: "GDPR badge", title: "GDPR", subtitle: "Compliant" },
  { src: "/assets/pricing/pricing2.webp", alt: "HIPAA badge", title: "HIPAA", subtitle: "Compliant" },
  { src: "/assets/pricing/pricing3.webp", alt: "SOC 2 Type 2 badge", title: "SOC 2 Type 2", subtitle: "Certified" },
  { src: "/assets/pricing/pricing4.webp", alt: "ISO 27001 badge", title: "ISO 27001", subtitle: "Certified" },
];

const features = [
  {
    icon: "mdi:database-lock-outline",
    title: "Data Residency",
    desc: "Control where your data is stored and processed",
  },
  {
    icon: "mdi:clipboard-text-outline",
    title: "Audit Logs",
    desc: "Complete audit trails built into the platform",
  },
  {
    icon: "mdi:shield-check-outline",
    title: "Access Controls",
    desc: "Granular permissions and role-based access",
  },
];

export default function TrustCompliance() {
  return (
    <section className="py-16 md:py-24 bg-[#FAFAFA]">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <h2 className="text-center text-2xl font-extrabold tracking-tight md:text-4xl text-gray-900">
          Trusted by 3M+ Developers Worldwide
        </h2>

        <div className="mx-auto mt-4 rounded-2xl border border-gray-200 bg-white px-4 py-10 shadow sm:mt-6 sm:px-6 md:mt-8 md:px-28">
  <div className="grid grid-cols-2 items-center gap-4 text-center sm:gap-6 md:grid-cols-4">
    {stats.map((s) => (
      <div key={s.label}>
        <div className="text-lg font-extrabold md:text-3xl text-gray-900">{s.value}</div>
        <div className="text-sm mt-2 uppercase tracking-wide text-neutral-900">{s.label}</div>
      </div>
    ))}
  </div>
</div>


        <div className="mt-34 grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-center gap-8 lg:items-start">
            <div className="flex flex-wrap items-center justify-center gap-8">
              {badges.map((b) => (
                <div key={b.title} className="text-center ">
                  <Image
                    src={b.src}
                    alt={b.alt}
                    width={64}
                    height={64}
                    className="mx-auto h-14 w-14 object-contain mb-6"
                  />
                  <div className="mt-2 font-bold text-xl text-gray-900">{b.title}</div>
                  <div className="text-base text-neutral-900">{b.subtitle}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-extrabold tracking-tight md:text-4xl text-gray-900">
              Enterprise-Grade Compliance
            </h3>
            <p className="mt-4 text-xl font-medium text-[#4f4f4f]">
              Compliance is handled out of the box, with support for <strong> GDPR, HIPAA, SOC 2
              Type 2,</strong> and <strong>ISO 27001</strong>. Control how and where data is stored and routed—
              including locking it to U.S.-only data centers when needed. Access controls
              and audit logs are built in, so meeting requirements doesn&apos;t add extra
              overhead.
            </p>
          </div>
        </div>

       <div className="  mt-26">
  <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
    {features.map((f) => (
      <div
        key={f.title}
        className="rounded-xl text-center flex flex-col items-center"
      >
        <Icon icon={f.icon} width={28} height={28} className="text-gray-900" />
        <div className="mt-3 font-bold text-xl text-gray-900">{f.title}</div>
        <p className="mt-1 text-base text-neutral-900">{f.desc}</p>
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
}
