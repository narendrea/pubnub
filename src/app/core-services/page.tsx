import React from 'react'
import CoreServicesSection from './components/CoreHero'
import MessagingServicesSection from './components/MessagingServicesSection'
import ApplicationsServices from './components/ApplicationsServices'
import MultiLanguage from './components/MultiLanguage'
import AIToolsSection from './components/AIToolsSection'
import ContactCard from './components/ContactCard'

const page = () => {
  return (
    <><CoreServicesSection />
      <MessagingServicesSection/>
      <ApplicationsServices/>
      <MultiLanguage/>
      <AIToolsSection/>
      <ContactCard/>
    </>
  )
}

export default page