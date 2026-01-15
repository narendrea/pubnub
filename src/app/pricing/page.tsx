import React from 'react'
import PricingHero from './components/PricingHero'
import PricingPage from './components/pricing/PricingPage'
import PricingComparisonPage from './components/pricingComparisonPage/PricingComparisonPage'
import PricingFAQ from './components/FAQ'
import TrustCompliance from './components/TrustCompliance'
import Contact from './components/Contact'

const page = () => {
  return (
   <>
   <PricingHero/>
  <PricingPage/>
  <PricingComparisonPage/>
  <PricingFAQ/>
  < TrustCompliance/>
  <Contact/>
   </>
  )
}

export default page