import Image from 'next/image'
import React from 'react'
import support from "../../../../public/assets/home-img/support.png"

const GetStartedSection = () => {
  return (
    <section className="bg-[#f5f7fb] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-6 md:gap-8 lg:grid-cols-12">

          <div className="lg:col-span-4">
            <div className="flex h-full flex-col justify-center rounded-[12px] bg-[#EEF5FF] border border-[#CBDDF4] px-8 py-8">
              <h2 className="text-3xl md:text-[48px] font-extrabold text-neutral-900">
                Start building
              </h2>
              <p className="mt-3 text-[18px] font-medium text-neutral-900">
                Get started building real‑time apps now!
              </p>
              <ul className="mt-6 space-y-3 text-base text-neutral-900">
                <li className="flex items-start gap-2"><span className="mt-1 text-red-600">✓</span>Always free for up to 200 MAUs</li>
                <li className="flex items-start gap-2"><span className="mt-1 text-red-600">✓</span>No credit card required</li>
                <li className="flex items-start gap-2"><span className="mt-1 text-red-600">✓</span>Every PubNub SDK available</li>
                <li className="flex items-start gap-2"><span className="mt-1 text-red-600">✓</span>Complete feature access to 100+ integrations</li>
              </ul>
              <a href="#" className="mt-6 text-sm font-semibold text-red-600 hover:text-red-700">Learn more →</a>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-rows-2 gap-6">

            <div className="flex flex-col md:flex-row h-full rounded-[12px] border border-[#CBDDF4] bg-white overflow-hidden">
              <div className="flex flex-1 flex-col px-8 py-7">
                <h3 className="text-2xl md:text-[36px] font-extrabold text-gray-900">Talk to an expert</h3>
                <p className="mt-3 text-base text-neutral-900">
                  Let us share with you industry best practices and how we can
                  help you accelerate your real‑time application and growth.
                </p>
                <button className="my-6 inline-flex w-fit items-center justify-center rounded-md bg-red-600 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-red-700">
                  Contact us
                </button>
              </div>

              <div className="md:w-1/3 w-full flex-shrink-0 relative h-64 md:h-auto overflow-hidden">
                <Image
                  src={support}
                  alt="Support expert"
                  fill
                  className="object-cover object-center rounded-tr-[12px] md:rounded-tr-none md:rounded-r-[12px]"
                />
              </div>

            </div>

            <div className="flex h-full flex-col rounded-[12px] bg-[#EEF5FF] border border-[#CBDDF4] px-8 py-7">
              <h3 className="text-2xl md:text-[36px] font-extrabold text-gray-900">See our pricing</h3>
              <p className="mt-3 text-base text-neutral-900">
                Almost limitless pricing options from simple pay‑as‑you‑go to
                custom models to best match your business needs and growth
                objectives.
              </p>
              <a href="#" className="mt-auto text-sm font-semibold text-red-600 hover:text-red-700">Learn more →</a>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default GetStartedSection
