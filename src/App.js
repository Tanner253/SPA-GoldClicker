import React from 'react';
import './App.css';

import SocialBanner from './components/SocialBanner/SocialBanner';
import HeroSection from './components/HeroSection/HeroSection';
import TechnicalDetailsSection from './components/TechnicalDetailsSection/TechnicalDetailsSection';
import SectionDivider from './components/SectionDivider/SectionDivider';
import TokenomicsSection from './components/TokenomicsSection/TokenomicsSection';
import YouTubeVideoSection from './components/YouTubeVideoSection/YouTubeVideoSection';
import GameplayVideoSection from './components/GameplayVideoSection/GameplayVideoSection';
import AboutGameSection from './components/AboutGameSection/AboutGameSection';
import AdModelSection from './components/AdModelSection/AdModelSection';
import EarnMemecoinSection from './components/EarnMemecoinSection/EarnMemecoinSection';
import EcosystemSection from './components/EcosystemSection/EcosystemSection';
import FeaturesSection from './components/FeaturesSection/FeaturesSection';
import KeyDifferentiatorsSection from './components/KeyDifferentiatorsSection/KeyDifferentiatorsSection';
import BecomeTesterSection from './components/BecomeTesterSection/BecomeTesterSection';
import GoFundMeSection from './components/GoFundMeSection/GoFundMeSection';
import CallToActionSection from './components/CallToActionSection/CallToActionSection';
import Footer from './components/Footer/Footer';
import FallingFruit from './components/FallingFruit/FallingFruit'; // Adjust path if necessary

function App() {
  return (
    <div className="App"> 
      <FallingFruit />
      <SocialBanner />
      <HeroSection />
      <TechnicalDetailsSection />
      <SectionDivider />
      <TokenomicsSection />
      <SectionDivider />
      <YouTubeVideoSection />
      <GoFundMeSection />
      <SectionDivider />
      <GameplayVideoSection />
      <SectionDivider />
      <AboutGameSection />
      <SectionDivider />
      <AdModelSection />
      <SectionDivider />
      <EarnMemecoinSection />
      <SectionDivider />
      <EcosystemSection />
      <SectionDivider />
      <FeaturesSection />
      <SectionDivider />
      <KeyDifferentiatorsSection />
      <SectionDivider />
      <BecomeTesterSection />
      <SectionDivider />
      <SectionDivider />
      <CallToActionSection />
      <Footer />
    </div>
  );
}

export default App; 