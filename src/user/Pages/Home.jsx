import React from 'react'

import HeroSection from '../Component/HeroSection'
import AboutSection from '../Component/AboutSection'
import FeatureSection from "../Component/FeatureSection";
import CallToAction from "../Component/CallToAction";
import ServicesSection from '../Component/ServicesSection'
import HowWeWork from '../Component/HowWeWork';
import ContactSection from '../Component/ContactSection';

const Home = () => {
  return (
    <main className="main">
      <HeroSection />
      <AboutSection />
      <FeatureSection />
      <CallToAction />
      <ServicesSection />
      <HowWeWork />
      <ContactSection />
    </main>
  )
}

export default Home
