import React, { useState, useEffect } from 'react';
import './App.css';

import UINavbar from './components/UI-Navbar/UI-Navbar';
import UIHeroSection from './components/HeroSection/UI-HeroSection';
import UITheGameSection from './components/UI-TheGameSection/UI-TheGameSection';
import UILiveChartSection from './components/UI-LiveChartSection/UI-LiveChartSection';
import UITokenomicsSection from './components/UI-TokenomicsSection/UI-TokenomicsSection';
import UIFundraiserSection from './components/UI-FundraiserSection/UI-FundraiserSection';
import UICommunitySection from './components/UI-CommunitySection/UI-CommunitySection';
import UIYouTubeVideoSection from './components/UI-YouTubeVideoSection/UI-YouTubeVideoSection';
import UIFooter from './components/UI-Footer/UI-Footer';
import UIHireMeModal from './components/UI-HireMeModal/UI-HireMeModal';

// import SocialBanner from './components/SocialBanner/SocialBanner';
// import HeroSection from './components/HeroSection/HeroSection';
// import DexScreenerSection from './components/DexScreenerSection/DexScreenerSection';
// import TechnicalDetailsSection from './components/TechnicalDetailsSection/TechnicalDetailsSection';
// import SectionDivider from './components/SectionDivider/SectionDivider';
// import TokenomicsSection from './components/TokenomicsSection/TokenomicsSection';
// import YouTubeVideoSection from './components/YouTubeVideoSection/YouTubeVideoSection';
// import GameplayVideoSection from './components/GameplayVideoSection/GameplayVideoSection';
// import AboutGameSection from './components/AboutGameSection/AboutGameSection';
// import AdModelSection from './components/AdModelSection/AdModelSection';
// import EarnMemecoinSection from './components/EarnMemecoinSection/EarnMemecoinSection';
// import EcosystemSection from './components/EcosystemSection/EcosystemSection';
// import FeaturesSection from './components/FeaturesSection/FeaturesSection';
// import KeyDifferentiatorsSection from './components/KeyDifferentiatorsSection/KeyDifferentiatorsSection';
// import BecomeTesterSection from './components/BecomeTesterSection/BecomeTesterSection';
// import GoFundMeSection from './components/GoFundMeSection/GoFundMeSection';
// import CallToActionSection from './components/CallToActionSection/CallToActionSection';
// import Footer from './components/Footer/Footer';
// import FallingFruit from './components/FallingFruit/FallingFruit'; // Adjust path if necessary
// import ActivityFeed from './components/ActivityFeed/ActivityFeed';

function App() {
  const [isHireMeModalOpen, setIsHireMeModalOpen] = useState(false);

  useEffect(() => {
    if (isHireMeModalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    // Cleanup function to remove the class if the component unmounts
    return () => document.body.classList.remove('modal-open');
  }, [isHireMeModalOpen]);

  const openHireMeModal = () => {
    setIsHireMeModalOpen(true);
  };
  const closeHireMeModal = () => setIsHireMeModalOpen(false);

  return (
    <div className="App">
      <UINavbar />
      <UIHeroSection />
      <UITheGameSection />
      <UILiveChartSection />
      <UITokenomicsSection />
      <UIFundraiserSection />
      <UICommunitySection />
      <UIYouTubeVideoSection />
      <UIFooter onHireMeClick={openHireMeModal} />
      <UIHireMeModal isOpen={isHireMeModalOpen} onClose={closeHireMeModal} />
    </div>
  );
}

export default App; 