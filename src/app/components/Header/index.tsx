"use client"
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Logo from "../../../../public/assets/home-img/pubnub_logo.png"
import Link from 'next/link';
import NavImage from "../../../../public/assets/home-img/navImage.jpg"


interface NavItem {
  icon: string;
  title: string;
  subtitle?: string;
  href?: string; // optional href for routing
  featured?: boolean; // for special items
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const platformLeftItems: NavItem[] = [
    { icon: 'mdi:information-outline', title: 'Platform Overview', subtitle: 'Your platform for interactive experiences', href: '/', featured: true },
    { icon: 'mdi:cube-outline', title: 'Core Services', subtitle: 'Real-time communication with low-latency', href: '/core-services' },
    { icon: 'mdi:earth', title: 'Global Network', subtitle: 'Secure, Scalable Infrastructure' },
    { icon: 'mdi:brain', title: 'Decision Intelligence - Overview', subtitle: 'Power Decisions with Real-Time Intelligence' },
    { icon: 'mdi:lightbulb-outline', title: 'Illuminate', subtitle: 'Turn Live User Data into Real-Time Results' },
    { icon: 'mdi:chart-line', title: 'Insights', subtitle: 'Visibility into Real-Time App\'s Performance' },
  ];

  const platformRightItems: NavItem[] = [
    { icon: 'mdi:puzzle-outline', title: 'Integrations', subtitle: 'Integrate best-in-class third-party services' },
    { icon: 'mdi:robot-outline', title: 'Generative AI', subtitle: 'Build AI-native, real-time apps' },
    { icon: 'mdi:server', title: 'MCP Server', subtitle: 'Unlock real-time code with your AI' },
  ];

  const solutionsUseCases: NavItem[] = [
    { icon: 'mdi:chat-outline', title: 'Chat', subtitle: 'Provide chat experiences your users need', href: '/chat-solution', },
    { icon: 'mdi:account-group-outline', title: 'Live Audience Engagement', subtitle: 'From live events to social workouts' },
    { icon: 'mdi:account-multiple-outline', title: 'Multi-User Collaboration', subtitle: 'Bring the team together' },
    { icon: 'mdi:devices', title: 'IoT Device Control', subtitle: 'Build an IoT platform & manage devices' },
    { icon: 'mdi:play-box-outline', title: 'Real-Time Workflows', subtitle: 'Stream Data. Orchestrate Actions' },
    { icon: 'mdi:map-marker-outline', title: 'Geolocation & Dispatch', subtitle: 'Geolocation APIs to track your fleet\'s cars' },
    { icon: 'mdi:message-alert-outline', title: 'Edge Messaging', subtitle: 'Never worry about latency issues again' },
    { icon: 'mdi:source-branch', title: 'Event-Driven Architecture', subtitle: 'Launch faster with Events, not endpoints' },
    { icon: 'mdi:refresh', title: 'LiveOps', subtitle: 'Real-time decisions, zero lag' },
    { icon: 'mdi:gamepad-variant-outline', title: 'Gamification', subtitle: 'Drive engagement in real time' },
    // { icon: 'mdi:shield-check-outline', title: 'Auto-Moderation', subtitle: 'AI-powered message filtering' },
    // { icon: 'mdi:chart-line-variant', title: 'App Optimization', subtitle: 'Maximize Efficiency – Made Easy' },
  ];

  const solutionsIndustries: NavItem[] = [
    { icon: 'mdi:play-circle-outline', title: 'Sports, Media & Entertainment' },
    { icon: 'mdi:heart-pulse', title: 'Digital Healthcare' },
    { icon: 'mdi:casino-outline', title: 'iGaming, Betting & Casino' },
    { icon: 'mdi:controller-classic-outline', title: 'Gaming' },
    { icon: 'mdi:shopping-outline', title: 'eCommerce' },
    { icon: 'mdi:finance', title: 'FinTech' },
    // { icon: 'mdi:truck-delivery-outline', title: 'Transport, Delivery & Logistics' },
    // { icon: 'mdi:headset', title: 'Call Centers & Customer Care' },
    // { icon: 'mdi:account-group-outline', title: 'Social & Lifestyle' },
  ];

  const developerItems: NavItem[] = [
    { icon: 'mdi:home-outline', title: 'Developer Home', href: '/developer-home' },
    { icon: 'mdi:file-document-outline', title: 'Documentation', href: '/documentation' },
    { icon: 'mdi:school-outline', title: 'Tutorials', href: '/tutorials' },
    { icon: 'mdi:map-marker-path', title: 'Tour', href: '/tour' },
    { icon: 'mdi:network-outline', title: 'Network', href: '/network' },
  ];

  const resourcesItems: NavItem[] = [
    { icon: 'mdi:trophy-outline', title: 'Why PubNub Wins' },
    { icon: 'mdi:post-outline', title: 'Blog' },
    { icon: 'mdi:play-circle-outline', title: 'Demos' },
    { icon: 'mdi:account-group-outline', title: 'Customers', href: '/customer-resources' },
    { icon: 'mdi:book-outline', title: 'eBooks' },
    { icon: 'mdi:briefcase-outline', title: 'Careers' },
    { icon: 'mdi:information-outline', title: 'About Us' },
  ];

  const sdkIcons: string[] = [
    'mdi:language-javascript', 'mdi:language-swift', 'mdi:unity', 'mdi:language-kotlin', 'mdi:language-ruby', 'mdi:language-csharp', 'mdi:android', 'mdi:language-go', 'mdi:gamepad-variant', 'mdi:language-python', 'mdi:language-php', 'mdi:dart'
  ];

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <div className='flex items-center gap-4'>
              <div className="flex-shrink-0">
                <Link href="/"><Image src={Logo} alt="PubNub Logo" width={110} height={40} /></Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center ">
                {/* Platform Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setOpenDropdown('platform')}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="px-4 py-2 cursor-pointer text-[#171717] hover:text-gray-900 font-normal flex items-center gap-1">
                    Platform
                    {/* <Icon icon="gridicons:dropdown" width="20" height="20" /> */}
                  </button>
                  {openDropdown === 'platform' && (
                    <div
                      className="absolute left-[-100px] top-full pt-2 z-50"
                      onMouseEnter={() => setOpenDropdown('platform')}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <div className="w-screen max-w-6xl bg-white border border-gray-200 rounded-lg shadow-2xl p-8">
                        <div className="grid grid-cols-3 gap-6">
                          {/* Left Column - Featured Card */}
                          <div className="col-span-1">
                            <div className="relative rounded-lg p-6 text-white h-full flex flex-col justify-between overflow-hidden">
                              {/* Background Image */}
                              <Image
                                src={NavImage} // replace with your image path
                                alt="Platform Background"
                                fill
                                className="object-cover z-1" // -z-10 sends it behind content
                              />

                              {/* Content */}
                              <div>
                                <div className="flex items-center relative z-2 gap-3 mb-3">
                                  <Icon icon="mdi:information-outline" width="28" height="28" />
                                  <div className="font-bold text-lg">Platform Overview</div>
                                </div>
                                <p className="text-sm text-gray-200 mb-6 z-2 relative">
                                  Your platform for interactive experiences
                                </p>
                              </div>

                              <button className="flex items-center z-2 relative gap-2 text-sm font-medium hover:gap-3 transition-all">
                                Explore our platform
                                <Icon icon="mdi:arrow-right" width="18" height="18" />
                              </button>
                            </div>
                          </div>

                          {/* Middle Column */}
                          <div className="col-span-1 space-y-1">
                            {platformLeftItems.slice(1).map((item, idx) => (
                              <Link
                                key={idx}
                                href={item.href || '#'} // fallback if href not set
                                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-100 text-left transition-colors w-full"
                              >
                                <Icon icon={item.icon} width="22" height="22" className="text-gray-400 flex-shrink-0 mt-0.5" />
                                <div>
                                  <div className="font-semibold text-black text-lg">{item.title}</div>
                                  {item.subtitle && <div className="text-xs text-gray-500 mt-0.5">{item.subtitle}</div>}
                                </div>
                              </Link>
                            ))}

                          </div>

                          {/* Right Column */}
                          <div className="col-span-1 space-y-1">
                            {platformRightItems.map((item, idx) => (
                              <button
                                key={idx}
                                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 text-left transition-colors w-full"
                              >
                                <Icon icon={item.icon} width="22" height="22" className="text-gray-400 flex-shrink-0 mt-0.5" />
                                <div>
                                  <div className="font-semibold text-black text-lg">{item.title}</div>
                                  <div className="text-xs text-gray-500 mt-0.5">{item.subtitle}</div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Solutions Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setOpenDropdown('solutions')}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="px-4 py-2 cursor-pointer text-[#171717] hover:text-gray-900 font-medium flex items-center gap-1">
                    Solutions
                    {/* <Icon icon="gridicons:dropdown" width="20" height="20" /> */}
                  </button>
                  {openDropdown === 'solutions' && (
                    <div
                      className="absolute left-[-120px] top-full pt-2 z-50"
                      onMouseEnter={() => setOpenDropdown('solutions')}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <div className="w-screen max-w-5xl bg-white border border-gray-200 rounded-lg shadow-2xl p-8">
                        <div className="grid grid-cols-3 gap-8">
                          {/* Use Cases */}
                          <div className="col-span-2">
                            <div className="text-xs font-bold text-red-500 mb-4 tracking-wider">BY USE CASE</div>
                            <div className="grid grid-cols-2 gap-1">
                              {solutionsUseCases.map((item, idx) =>
                                item.href ? (
                                  <Link
                                    key={idx}
                                    href={item.href}
                                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 text-left transition-colors"
                                  >
                                    <Icon
                                      icon={item.icon}
                                      width="20"
                                      height="20"
                                      className="text-gray-400 flex-shrink-0 mt-0.5"
                                    />
                                    <div>
                                      <div className="font-semibold text-gray-900 text-lg">
                                        {item.title}
                                      </div>
                                      {item.subtitle && (
                                        <div className="text-xs text-gray-500 mt-0.5">
                                          {item.subtitle}
                                        </div>
                                      )}
                                    </div>
                                  </Link>
                                ) : (
                                  <button
                                    key={idx}
                                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 text-left transition-colors w-full"
                                  >
                                    <Icon
                                      icon={item.icon}
                                      width="20"
                                      height="20"
                                      className="text-gray-400 flex-shrink-0 mt-0.5"
                                    />
                                    <div>
                                      <div className="font-semibold text-gray-900 text-lg">
                                        {item.title}
                                      </div>
                                      {item.subtitle && (
                                        <div className="text-xs text-gray-500 mt-0.5">
                                          {item.subtitle}
                                        </div>
                                      )}
                                    </div>
                                  </button>
                                )
                              )}

                            </div>
                          </div>

                          {/* Industries */}
                          <div className="col-span-1">
                            <div className="text-xs font-bold text-red-500 mb-4 tracking-wider">BY INDUSTRY</div>
                            <div className="space-y-1">
                              {solutionsIndustries.map((item, idx) => (
                                <button
                                  key={idx}
                                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 text-left transition-colors w-full"
                                >
                                  <Icon icon={item.icon} width="20" height="20" className="text-gray-400 flex-shrink-0" />
                                  <span className="font-medium text-gray-900 text-lg">{item.title}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Pricing */}
                <Link href="/pricing" className="px-4 py-2 text-[#171717] hover:text-gray-900 font-medium">
                  Pricing
                </Link>

                {/* Developer Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setOpenDropdown('developer')}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="px-4 cursor-pointer py-2 text-[#171717] hover:text-gray-900 font-medium flex items-center gap-1">
                    Developer
                    {/* <Icon icon="gridicons:dropdown" width="20" height="20" /> */}
                  </button>
                  {openDropdown === 'developer' && (
                    <div
                      className="absolute left-0 top-full pt-2 z-50"
                      onMouseEnter={() => setOpenDropdown('developer')}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <div className="w-[480px] bg-white flex border border-gray-200 rounded-lg shadow-2xl p-4">
                        <div className="space-y-1 border-r border-gray-200">
                          {developerItems.map((item, idx) => (
                            <Link
                              key={idx}
                              href={item.href ?? "#"}
                              className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-50 text-left transition-colors"
                            >
                              <Icon
                                icon={item.icon}
                                width="20"
                                height="20"
                                className="text-gray-400"
                              />
                              <span className="font-semibold text-black text-lg">{item.title}</span>
                            </Link>
                          ))}
                        </div>

                        <div className="mt-4 pt-4  mx-auto">
                          <div className="text-xs font-semibold text-gray-500 mb-3">SDKs</div>
                          <div className="grid grid-cols-4 gap-2">
                            {sdkIcons.map((icon, idx) => (
                              <button key={idx} className="p-2 rounded-lg hover:bg-gray-50 flex items-center justify-center transition-colors">
                                <Icon icon={icon} width="24" height="24" className="text-gray-600" />
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Resources Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setOpenDropdown('resources')}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="px-4 py-2 cursor-pointer text-[#171717] hover:text-gray-900 font-medium flex items-center gap-1">
                    Resources
                    {/* <Icon icon="gridicons:dropdown" width="20" height="20" /> */}
                  </button>
                  {openDropdown === 'resources' && (
                    <div
                      className="absolute right-0 top-full pt-2 z-50"
                      onMouseEnter={() => setOpenDropdown('resources')}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <div className="w-72 bg-white border border-gray-200 rounded-lg shadow-2xl p-4">
                        <div className="space-y-1">
                          {resourcesItems.map((item, idx) => {
                            const commonClasses =
                              "flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-50 text-left transition-colors";
                            const textClasses = "text-lg"; // consistent text size

                            return item.href ? (
                              <Link
                                key={idx}
                                href={item.href}
                                className={commonClasses}
                              >
                                <Icon icon={item.icon} width="20" height="20" className="text-gray-400" />
                                <span className={`font-semibold text-black ${textClasses}`}>{item.title}</span>
                              </Link>
                            ) : (
                              <button
                                key={idx}
                                className={commonClasses}
                              >
                                <Icon icon={item.icon} width="20" height="20" className="text-gray-400" />
                                <span className={`font-semibold text-black ${textClasses}`}>{item.title}</span>
                              </button>
                            );
                          })}


                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </nav>
            </div>

            {/* Right side buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <button className="p-2 cursor-pointer text-gray-700 hover:text-gray-900">
                <Icon icon="mdi:magnify" width="24" height="24" />
              </button>
              <button className="px-3 cursor-pointer py-2 bg-red-600 text-white rounded-md hover:bg-red-700 font-medium transition-colors">
                Contact Sales
              </button>
              <button className="px-3 cursor-pointer py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 font-medium transition-colors">
                Try for free
              </button>
              <button className="px-3 cursor-pointer py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 font-medium transition-colors">
                Login
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700"
            >
              <Icon icon={mobileMenuOpen ? "mdi:close" : "mdi:menu"} width="24" height="24" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto">
          <div className="px-4 py-6">
            {/* Platform Mobile */}
            <div className="border-b border-gray-200 pb-4 mb-4">
              <button
                onClick={() => setOpenDropdown(openDropdown === 'platform-mobile' ? null : 'platform-mobile')}
                className="flex items-center justify-between w-full py-3 text-left"
              >
                <span className="font-semibold text-gray-900">Platform</span>
                <Icon
                  icon="gridicons:dropdown"
                  width="24"
                  height="24"
                  className={`transform transition-transform ${openDropdown === 'platform-mobile' ? 'rotate-180' : ''}`}
                />
              </button>
              {openDropdown === 'platform-mobile' && (
                <div className="pl-4 space-y-3 mt-3">
                  {[...platformLeftItems, ...platformRightItems].map((item, idx) =>
                    item.href ? (
                      <Link
                        key={idx}
                        href={item.href}
                        className="flex items-start gap-3 w-full text-left py-2"
                        onClick={() => setMobileMenuOpen(false)} // ✅ Close menu
                      >
                        <Icon icon={item.icon} width="20" height="20" className="text-gray-400 mt-1" />
                        <div>
                          <div className="font-medium text-gray-900 text-sm">{item.title}</div>
                          {item.subtitle && <div className="text-xs text-gray-500 mt-1">{item.subtitle}</div>}
                        </div>
                      </Link>
                    ) : (
                      <button
                        key={idx}
                        className="flex items-start gap-3 w-full text-left py-2"
                        onClick={() => setMobileMenuOpen(false)} // ✅ Close menu
                      >
                        <Icon icon={item.icon} width="20" height="20" className="text-gray-400 mt-1" />
                        <div>
                          <div className="font-medium text-gray-900 text-sm">{item.title}</div>
                          {item.subtitle && <div className="text-xs text-gray-500 mt-1">{item.subtitle}</div>}
                        </div>
                      </button>
                    )
                  )}


                </div>
              )}
            </div>

            {/* Solutions Mobile */}
            <div className="border-b border-gray-200 pb-4 mb-4">
              <button
                onClick={() => setOpenDropdown(openDropdown === 'solutions-mobile' ? null : 'solutions-mobile')}
                className="flex items-center justify-between w-full py-3 text-left"
              >
                <span className="font-semibold text-gray-900">Solutions</span>
                <Icon
                  icon="gridicons:dropdown"
                  width="24"
                  height="24"
                  className={`transform transition-transform ${openDropdown === 'solutions-mobile' ? 'rotate-180' : ''}`}
                />
              </button>
              {openDropdown === 'solutions-mobile' && (
                <div className="pl-4 space-y-3 mt-3">
                  <div className="text-xs font-bold text-red-500 mb-3">BY USE CASE</div>
                  {solutionsUseCases.map((item, idx) =>
                    item.href ? (
                      <Link
                        key={idx}
                        href={item.href}
                        className="flex items-start gap-3 w-full text-left py-2"
                        onClick={() => setMobileMenuOpen(false)} // menu close
                      >
                        <Icon
                          icon={item.icon}
                          width="20"
                          height="20"
                          className="text-gray-400 mt-1"
                        />
                        <div>
                          <div className="font-medium text-gray-900 text-sm">
                            {item.title}
                          </div>
                          {item.subtitle && (
                            <div className="text-xs text-gray-500 mt-1">
                              {item.subtitle}
                            </div>
                          )}
                        </div>
                      </Link>
                    ) : (
                      <button
                        key={idx}
                        className="flex items-start gap-3 w-full text-left py-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Icon
                          icon={item.icon}
                          width="20"
                          height="20"
                          className="text-gray-400 mt-1"
                        />
                        <div>
                          <div className="font-medium text-gray-900 text-sm">
                            {item.title}
                          </div>
                          {item.subtitle && (
                            <div className="text-xs text-gray-500 mt-1">
                              {item.subtitle}
                            </div>
                          )}
                        </div>
                      </button>
                    )
                  )}

                  <div className="text-xs font-bold text-red-500 mb-3 mt-6">BY INDUSTRY</div>
                  {solutionsIndustries.map((item, idx) => (
                    <button key={idx} className="flex items-center gap-3 w-full text-left py-2">
                      <Icon icon={item.icon} width="20" height="20" className="text-gray-400" />
                      <span className="text-sm font-medium text-gray-900">{item.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Pricing Mobile */}
            <div className="border-b border-gray-200 pb-4 mb-4">
              <Link href="/pricing" className="block py-3 font-semibold text-gray-900">
                Pricing
              </Link>
            </div>

            {/* Developer Mobile */}
            <div className="border-b border-gray-200 pb-4 mb-4">
              <button
                onClick={() => setOpenDropdown(openDropdown === 'developer-mobile' ? null : 'developer-mobile')}
                className="flex items-center justify-between w-full py-3 text-left"
              >
                <span className="font-semibold text-gray-900">Developer</span>
                <Icon
                  icon="gridicons:dropdown"
                  width="24"
                  height="24"
                  className={`transform transition-transform ${openDropdown === 'developer-mobile' ? 'rotate-180' : ''}`}
                />
              </button>
              {openDropdown === 'developer-mobile' && (
                <div className="pl-4 space-y-2 mt-3">
                  {developerItems.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href ?? "#"}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 w-full text-left py-2 hover:bg-gray-50 rounded transition-colors"
                    >
                      <Icon icon={item.icon} width="20" height="20" className="text-gray-400" />
                      <span className="text-sm font-medium text-gray-900">{item.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Mobile */}
            <div className="border-b border-gray-200 pb-4 mb-4">
              <button
                onClick={() => setOpenDropdown(openDropdown === 'resources-mobile' ? null : 'resources-mobile')}
                className="flex items-center justify-between w-full py-3 text-left"
              >
                <span className="font-semibold text-gray-900">Resources</span>
                <Icon
                  icon="gridicons:dropdown"
                  width="24"
                  height="24"
                  className={`transform transition-transform ${openDropdown === 'resources-mobile' ? 'rotate-180' : ''}`}
                />
              </button>
              {openDropdown === 'resources-mobile' && (
                <div className="pl-4 space-y-2 mt-3">
                  {resourcesItems.map((item, idx) =>
                    item.href ? (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)} // close mobile menu
                        className="flex items-center gap-3 w-full text-left py-2 hover:bg-gray-50 rounded transition-colors"
                      >
                        <Icon icon={item.icon} width="20" height="20" className="text-gray-400" />
                        <span className="text-sm font-medium text-gray-900">{item.title}</span>
                      </Link>
                    ) : (
                      <button
                        key={idx}
                        onClick={() => setMobileMenuOpen(false)} // also close menu if needed
                        className="flex items-center gap-3 w-full text-left py-2 hover:bg-gray-50 rounded transition-colors"
                      >
                        <Icon icon={item.icon} width="20" height="20" className="text-gray-400" />
                        <span className="text-sm font-medium text-gray-900">{item.title}</span>
                      </button>
                    )
                  )}

                </div>
              )}
            </div>

            {/* Mobile CTAs */}
            <div className="space-y-3 mt-6">
              <button className="w-full px-5 py-3 cursor-pointer bg-red-600 text-white rounded-md hover:bg-red-700 font-medium">
                Contact Sales
              </button>
              <button className="w-full px-5 py-3 cursor-pointer border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 font-medium">
                Try for free
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Overlay */}
      {(mobileMenuOpen || openDropdown) && (
        <div
          className="fixed  bg-opacity-25 z-30 top-16"
          onClick={() => {
            setMobileMenuOpen(false);
            setOpenDropdown(null);
          }}
        />
      )}
    </>
  );
}