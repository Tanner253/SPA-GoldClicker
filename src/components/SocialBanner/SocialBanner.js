import React from 'react';
import './SocialBanner.css';

// Simple icons (can be replaced with SVGs or an icon library later for better visuals)
const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const TelegramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.78 18.46c-.18-.08-.28-.24-.35-.4l-.98-3.2c-.2-.65.18-.93.6-.73l7.98 2.78c.42.14.72.04.8-.43l1.7-7.88c.15-.7-.16-1-.78-.78l-9.86 3.9c-.6.24-.6.58-.12.7L6.8 12.3c.5.17.98.38 1.46.58l4.36-2.5c.48-.28.85-.13.48.22l-3.3 3.07c-.6.55-.27 1.3.48.86l4.6-2.68c.42-.25.78-.12.6.33l-1.83 8.3c-.13.58-.48.7-.9.43l-3.55-2.54-.98.94c-.2.2-.4.32-.65.32z"/>
  </svg>
);

const DiscordIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
    <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
  </svg>
);

const SocialBanner = () => {
  return (
    <div className="social-banner">
      <div className="social-banner-content">
        <span className="banner-text">🚀 Project Launch ETA: ~2 months</span>
        
        {/* Container for Join Community button and stats */}
        <div className="community-info-container">
          <span className="banner-text join-community-button">Join our Community!</span>
          <div className="community-stats">
            <span className="stat-item">1k+ Telegram members</span>
            <span className="stat-item">350+ X followers</span>
          </div>
        </div>

        <div className="social-links-container">
        <a href="https://x.com/GoldClickerG" target="_blank" rel="noopener noreferrer" className="social-link x-link">
          <XIcon />
          <span>Follow on X</span>
        </a>
        <a href="https://t.me/GCMOfficialPortal" target="_blank" rel="noopener noreferrer" className="social-link telegram-link">
          <TelegramIcon />
          <span>Join our Telegram</span>
        </a>
          <a href="https://discord.gg/mvbx7J295m" target="_blank" rel="noopener noreferrer" className="social-link discord-link">
            <DiscordIcon />
            <span>Join Discord</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialBanner; 