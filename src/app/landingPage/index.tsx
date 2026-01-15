import React from 'react'
import HeroSection from './components/HeroSection'
import LogoSlider from './components/LogoSlider'
import CompanyShowcase from './components/CompanyShowcase/CompanyShowcase'
import IndustryCards from './components/IndustryCards'
import FeaturesGrid from './components/FeaturesGrid'
import NumbersSection from './components/NumbersSection'
import GetStartedSection from './components/GetStartedSection'

const index = () => {
  return (
<>
<HeroSection/>
<CompanyShowcase/>
<IndustryCards/>
<FeaturesGrid/>
<NumbersSection/>
<GetStartedSection/>
</>
  )
}

export default index