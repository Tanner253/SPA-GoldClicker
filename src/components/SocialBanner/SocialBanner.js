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

const SocialBanner = () => {
  return (
    <div className="social-banner">
      <div className="social-banner-content">
        <span className="banner-text">Join our Community!</span>
        <a href="https://x.com/GoldClickerSOL" target="_blank" rel="noopener noreferrer" className="social-link x-link">
          <XIcon />
          <span>Follow on X</span>
        </a>
        <a href="https://t.me/GoldClickerMining" target="_blank" rel="noopener noreferrer" className="social-link telegram-link">
          <TelegramIcon />
          <span>Join Telegram</span>
        </a>
      </div>
    </div>
  );
};

export default SocialBanner; 