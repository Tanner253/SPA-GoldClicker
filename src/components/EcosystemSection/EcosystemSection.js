import React from 'react';
import './EcosystemSection.css';

const EcosystemSection = () => {
  return (
    <section className="section-container ecosystem-section">
      <h2>The $GCM Symbiotic Ecosystem</h2>
      <p className="section-intro">
        Gold Clicker Mining isn't just a game with a token; it's a self-sustaining economic engine where every part fuels the others. 
        Our goal is to create a vibrant, circular economy that rewards players, supports the $GCM token, and ensures long-term growth.
      </p>

      <div className="ecosystem-core-loop">
        <h3>The Self-Feeding Economic Loop:</h3>
        <ol className="loop-steps">
          <li><strong>Players Engage:</strong> You play the game, click, upgrade, and watch rewarded ads.</li>
          <li><strong>Revenue Generation:</strong> Ad views and In-App Purchases generate real-world revenue.</li>
          <li><strong>Liquidity Pool Growth:</strong> A significant portion of this revenue is directly channeled into the $GCM memecoin's liquidity pool on decentralized exchanges.</li>
          <li><strong>$GCM Earning:</strong> Players earn $GCM by converting Gold Bars through the Meme Mint.</li>
          <li><strong>Stake or Sell:</strong> Players can choose to stake their $GCM for in-game boosts and further rewards, or sell it on the open market.</li>
          <li><strong>Market Activity & Stability:</strong> Selling provides liquidity and chart action. Staking promotes retention and reduces sell pressure. The constantly growing LP from ad revenue supports token value.</li>
          <li><strong>Enhanced Gameplay:</strong> The cycle repeats, with game success directly impacting token health, and vice-versa.</li>
        </ol>
        <p className="loop-summary">This creates a closed value loop where player activity (generating ad revenue) directly contributes to the value and liquidity backing the $GCM they earn. The more the game is played, the stronger the token's foundation becomes.</p>
      </div>

      <div className="global-boost-system">
        <h3>Global Boost System: Market Performance as a Gameplay Modifier!</h3>
        <p>
          The $GCM token's market performance directly influences your in-game experience:
        </p>
        <ul>
          <li><span className="boost-icon green">▲</span> <strong>Green Day ($GCM Price Up):</strong> All players receive a Clicks-Per-Second (CPS) boost, scaled by the token's percentage growth. Stakers get an additional, amplified boost! This means when the token does well, everyone in the game benefits, incentivizing holding and community support.</li>
          <li><span className="boost-icon red">▼</span> <strong>Red Day ($GCM Price Down):</strong> No universal boost. Debuffs might even occur during significant downturns. This mechanic further aligns player interests with the token's success, encouraging a healthy market.
          </li>
        </ul>
        <p>This innovative system transforms real-world market dynamics into an exciting, collective gameplay modifier, giving every player a stake in $GCM's prosperity.</p>
      </div>
    </section>
  );
};

export default EcosystemSection; 