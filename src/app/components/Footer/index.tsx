// app/components/Footer.tsx
import { Icon } from '@iconify/react';
import React from 'react';

const Footer = () => {
  const footerData = {
    platform: [
      'Overview',
      'Core Services',
      'Decision Intelligence',
      'Global Network',
      'Integrations',
      'Generative AI',
      'AI MCP Server',
      'Security & Compliance',
      'Pricing'
    ],
    useCases: [
      'Chat',
      'Live Audience Engagement',
      'Multi-User Collaboration',
      'IoT Device Control',
      'Real-Time Workflows',
      'Geolocation & Dispatch',
      'Edge Messaging',
      'Event Driven Architecture',
      'LiveOps',
      'Gamification',
      'Auto-Moderation'
    ],
    industries: [
      'Sports, Media & Entertainment',
      'Digital Healthcare',
      'iGaming, Betting & Casino',
      'Gaming',
      'Enterprise SaaS',
      'Transport, Delivery & Logistics',
      'eCommerce',
      'Push Notifications',
      'Call Centers & Customer Care',
      'Social & Lifestyle',
      'FinTech'
    ],
    resources: [
      'Blog',
      'Customers',
      'Demos',
      'Tutorials',
      'eBook',
      'Glossary'
    ],
    about: [
      'Our Company',
      'Careers',
      'Support',
      'Partners',
      'Privacy Policy',
      'Terms and Conditions',
      'Bug Bounty Policy',
      'Contact Us',
      'Trust Center',
      'Cookies Policy',
      'Cookies Settings'
    ]
  };

  return (
    <div className='bg-white'>
      <footer className="bg-[#001143] text-gray-300 rounded-t-[32px] sm:rounded-t-[60px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div>
              <h3 className="text-white font-bold text-base mb-4">PUBNUB PLATFORM</h3>
              <ul className="space-y-2">
                {footerData.platform.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-white hover:text-gray-400 transition-colors duration-200 text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* USE CASE */}
            <div>
              <h3 className="text-white font-bold text-base mb-4">USE CASE</h3>
              <ul className="space-y-2">
                {footerData.useCases.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-white hover:text-gray-400 transition-colors duration-200 text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* INDUSTRY */}
            <div>
              <h3 className="text-white font-bold text-base mb-4">INDUSTRY</h3>
              <ul className="space-y-2">
                {footerData.industries.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-white hover:text-gray-400 transition-colors duration-200 text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* RESOURCES */}
            <div>
              <h3 className="text-white font-bold text-base mb-4">RESOURCES</h3>
              <ul className="space-y-2">
                {footerData.resources.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-white hover:text-gray-400 transition-colors duration-200 text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ABOUT */}
            <div>
              <h3 className="text-white font-bold text-base mb-4">ABOUT</h3>
              <ul className="space-y-2">
                {footerData.about.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-white hover:text-gray-400 transition-colors duration-200 text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Separator */}
          <div className="border-t border-gray-800 my-8"></div>

          {/* Copyright Section */}
          <div className="flex flex-col md:flex-row justify-between gap-80 items-center space-y-4 md:space-y-0">
            <div>
              <div className="text-gray-400 text-sm">
                © 2010 - 2026 PubNub Inc. All Rights Reserved. PUBNUB and the PUBNUB logo are trademarks or registered trademarks of PubNub Inc. in the U.S. and other countries.
              </div>
            </div>
       <div className="flex space-x-4">
  {/* Facebook */}
  <a href="#" className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-[#1877F2] hover:scale-110 transition-transform">
    <Icon icon="fa7-brands:facebook" width="28" height="28" />
  </a>

  {/* X (Twitter) */}
  <a href="#" className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-[#1DA1F2] hover:scale-110 transition-transform">
    <Icon icon="fa7-brands:x-twitter" width="28" height="28" />
  </a>

  {/* Instagram */}
  <a href="#" className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-[#E1306C] hover:scale-110 transition-transform">
    <Icon icon="fa7-brands:instagram" width="28" height="28" />
  </a>

  {/* LinkedIn */}
  <a href="#" className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-[#0A66C2] hover:scale-110 transition-transform">
    <Icon icon="fa7-brands:linkedin" width="28" height="28" />
  </a>

  {/* YouTube */}
  <a href="#" className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-[#FF0000] hover:scale-110 transition-transform">
    <Icon icon="fa7-brands:youtube" width="28" height="28" />
  </a>
</div>



          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;