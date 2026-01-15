"use client";
import React from 'react';
import CompanyLogoSlider from '../LogoSlider';
import FeatureCardGrid from './FeatureCardGrid';
;

export default function CompanyShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16 px-4 rounded-t-[60px]">
      <div className="max-w-7xl mx-auto">
        <CompanyLogoSlider />
      <div className='max-w-7xl w-full mx-auto px-2 sm:px-8'>
          <FeatureCardGrid />
      </div>
      </div>
    </div>
  );
}
