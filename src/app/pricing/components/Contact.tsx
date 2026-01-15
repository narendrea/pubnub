import ContactBanner from '@/app/components/ContactBanner';
import React from 'react';
import ContactImage from '../../../../public/assets/home-img/support.png';

const Contact = () => {
  return (
    <div className="bg-white py-10">
      <ContactBanner
        title="Ready to Build Real-Time Apps?"
        description="Join millions of developers building the future of real-time experiences. Start free, scale as you grow."
        primaryLabel="Start Free - No Credit Card"
        primaryHref="/contact"
        secondaryLabel="Talk to sales"
        secondaryHref="/about"
        imageSrc={ContactImage}
        imageAlt="People working together"
        imagePosition="right"
      />

      <div className="bg-white p-6 rounded-lg max-w-5xl text-center mx-auto my-8 ">
        <h2 className="text-[18px] font-[700] leading-[28px] tracking-normal text-slate-900">
          What is MAU?
        </h2>
        <p className="typography text-[16px] leading-[24px] font-normal mt-2 text-slate-900">
          A Monthly Active User is a unique user who connects to PubNub at least once in a monthly billing cycle. <span className='underline'>Learn more in our FAQ</span>.
          Our free plan is designed for you to build and test your application. When you're ready for production, you can seamlessly upgrade to a paid plan.
        </p>
      </div>
    </div>
  );
};

export default Contact;
