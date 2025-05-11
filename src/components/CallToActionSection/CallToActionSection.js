import React from 'react';
import './CallToActionSection.css';

const CallToActionSection = () => {
  return (
    <section className="section-container cta-section">
      <h2>Ready to Dig In?</h2>
      <p className="cta-text">
        The Gold Clicker Mining adventure is just beginning! While the full game and $GCM minting are under active development, the vision is clear: an addictive game, a thriving community, and real rewards.
      </p>
      <p className="cta-text">
        Keep an eye out for updates, announcements, and the official launch. The gold rush is coming!
      </p>
      {/* Future: Add links to social media or a mailing list signup */}
      {/* <div className="cta-buttons">
        <button className="cta-button primary">Follow on X (Twitter)</button>
        <button className="cta-button secondary">Join Discord</button>
      </div> */}
    </section>
  );
};

export default CallToActionSection; 