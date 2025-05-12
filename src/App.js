import React from 'react';
import './App.css';

import SocialBanner from './components/SocialBanner/SocialBanner';
import HeroSection from './components/HeroSection/HeroSection';
import GoFundMeSection from './components/GoFundMeSection/GoFundMeSection';
import AboutGameSection from './components/AboutGameSection/AboutGameSection';
import AdModelSection from './components/AdModelSection/AdModelSection';
import EarnMemecoinSection from './components/EarnMemecoinSection/EarnMemecoinSection';
import EcosystemSection from './components/EcosystemSection/EcosystemSection';
import FeaturesSection from './components/FeaturesSection/FeaturesSection';
import CallToActionSection from './components/CallToActionSection/CallToActionSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <SocialBanner />
      <HeroSection />
      <AboutGameSection />
      <AdModelSection />
      <EarnMemecoinSection />
      <EcosystemSection />
      <FeaturesSection />
      <CallToActionSection />
      <GoFundMeSection />
      <Footer />
    </div>
  );
}

export default App; 