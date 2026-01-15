import React from 'react'
import HeroSection from './components/ChatHero'
import ChatInfrastructureSection from './components/ChatInfrastructureSection'
import OperationalControlSection from './components/OperationalControlSection'
import ReEngineering from './components/ReEngineering'
import WhyPubNub from './components/WhyPubNub'
import Contact from './components/ContactBanner'

const page = () => {
  return (
    <>
    <HeroSection/>
    <ChatInfrastructureSection/>
    <OperationalControlSection/>
    <ReEngineering/>
    <WhyPubNub/>
    <Contact/>
    </>
  )
}

export default page