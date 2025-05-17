import React from 'react';
import './BecomeTesterSection.css';

// Re-using TelegramIcon from CallToActionSection for consistency
const TelegramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.78 18.46c-.18-.08-.28-.24-.35-.4l-.98-3.2c-.2-.65.18-.93.6-.73l7.98 2.78c.42.14.72.04.8-.43l1.7-7.88c.15-.7-.16-1-.78-.78l-9.86 3.9c-.6.24-.6.58-.12.7L6.8 12.3c.5.17.98.38 1.46.58l4.36-2.5c.48-.28.85-.13.48.22l-3.3 3.07c-.6.55-.27 1.3.48.86l4.6-2.68c.42-.25.78-.12.6.33l-1.83 8.3c-.13.58-.48.7-.9.43l-3.55-2.54-.98.94c-.2.2-.4.32-.65.32z"/>
  </svg>
);

const BecomeTesterSection = () => {
  return (
    <section id="become-tester-section" className="section-container become-tester-section">
      <h2>Become a Gold Clicker Mining Tester!</h2>
      <p className="tester-intro">
        Be among the first to experience new features, hunt for bugs, and help shape the future of Gold Clicker Mining! 
        We're looking for enthusiastic players to join our exclusive testing team.
      </p>
      <div className="tester-steps">
        <h3>How to Join:</h3>
        <ol>
          <li>Click the button below to join our official Telegram group.</li>
          <li>Once in the group, simply state that you're interested in becoming a tester.</li>
          <li>Our community admins will guide you through the next steps and add you to the testers list for early access builds and feedback channels.</li>
        </ol>
      </div>
      <a href="https://t.me/GoldClickerMining" target="_blank" rel="noopener noreferrer" className="cta-button primary telegram-tester-button">
        <TelegramIcon /> Join Telegram &amp; Ask to Test!
      </a>
      <p className="tester-thanks">
        Your contribution as a tester is invaluable and will help us make $GCM the best play-to-earn clicker game possible!
      </p>
    </section>
  );
};

export default BecomeTesterSection; 