import React from 'react';
import GoFundMeWidget from '../GoFundMeWidget/GoFundMeWidget';
import './GoFundMeSection.css';

const GoFundMeSection = () => {
  return (
    <section className="section-container gofundme-section">
      <h2>Fuel the Gold Rush: Invest in $GCM&apos;s Future</h2>
      <p className="gfm-intro-text">
        Your support directly accelerates game development, expands our marketing reach to bring in more players, 
        and strengthens the initial $GCM liquidity pool. Become an early backer and help us build the ultimate 
        play-to-earn clicker experience where your time and effort are truly rewarded!
      </p>
      <div className="gfm-section-widget-container">
        <GoFundMeWidget />
      </div>
    </section>
  );
};

export default GoFundMeSection; 