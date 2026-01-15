"use client";
import React from 'react';
import { Icon } from '@iconify/react';

const FeatureCardGrid = () => {
  const features = [
    {
      title: 'Unleash creativity',
      description:
        'Focus on value creation leveraging real-time APIs, SDKs and software to accelerate development and management while retaining control and flexibility.',
      link: 'Read the Docs',
      linkUrl: '#',
    },
    {
      title: 'Scale infinitely',
      description:
        'Scalable infrastructure that provides flexible options to reach millions of concurrent users and devices safely, securely, and with no additional fees.',
      link: 'Explore the platform',
      linkUrl: '#',
    },
    {
      title: 'Surpass your KPIs',
      description:
        'Increase engagement and retention with real-time data analysis and automated decisioning for continuous optimization.',
      link: 'Discover Illuminate',
      linkUrl: '#',
    },
  ];

  return (
    <div className="grid gap-4 sm:gap-6 md:grid-cols-3 md:gap-8 p-4 sm:p-6 md:p-8 bg-white rounded-3xl border border-gray-200 shadow-[0_4px_15px_0_rgba(135,206,250,0.25)]">
      {features.map((feature, idx) => (
        <div
          key={idx}
          className="rounded-3xl p-4 sm:p-6 md:p-8 transition-transform "
        >
          <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-[400] leading-[28px] sm:leading-[30px] md:leading-[32px] text-neutral-900 mb-3 sm:mb-4">
            {feature.title}
          </h3>
          <p className="text-neutral-700 text-sm sm:text-base md:text-base leading-relaxed mb-3 sm:mb-4">
            {feature.description}
          </p>

          <a
            href={feature.linkUrl}
            className="flex items-center gap-1 text-[#001143] text-sm sm:text-base font-medium tracking-normal leading-6 group hover:text-red-600 transition-colors"
          >
            {feature.link}
            <Icon
              icon="akar-icons:arrow-right"
              className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default FeatureCardGrid;
