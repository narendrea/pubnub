import React from 'react'
import DevelopersSection from './components/Developer'
import ContactBanner from '../components/ContactBanner'
import SupportImg from "../../../public/assets/home-img/support.png"

const page = () => {
  return (
    <>
      <DevelopersSection />

      <ContactBanner
        title="Contact sales"
        description="Start building real-time experiences today. Try PubNub for free or contact sales to get started."
        primaryLabel="Contact Sales"
        primaryHref="/signup"
        secondaryLabel="Try to free"
        secondaryHref="/signup"
        imageSrc={SupportImg}
        imageAlt="Developers collaborating on a project"
      />
    </>
  )
}

export default page
