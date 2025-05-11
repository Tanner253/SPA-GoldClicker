import React from 'react';
import './EarnMemecoinSection.css';

const EarnMemecoinSection = () => {
  return (
    <section className="section-container earn-memecoin-section">
      <h2>From Gold Bars to $GCM: Earn Your Share</h2>
      <p className="section-intro">
        Your dedication in Gold Clicker Mining translates directly into tangible rewards. 
        The innovative <strong>Meme Mint</strong> feature allows you to convert Gold Bars (GB), earned through prestiging, into $GCM memecoins over time.
      </p>
      
      <div className="mint-features-grid">
        <div className="mint-feature-card">
          <h3>The Meme Mint</h3>
          <p>Unlocked as a mid-to-late game feature via a Prestige Upgrade (100,000 GB, 3+ prestiges), the Meme Mint is your gateway to passive $GCM income. Deposit your hard-earned Gold Bars to fuel the minting process.</p>
        </div>

        <div className="mint-feature-card">
          <h3>Fueling & Generation</h3>
          <p>Deposited Gold Bars (D) fuel $GCM generation. The rate (R) uses a logarithmic formula <code>R = f(D) * E</code>, ensuring diminishing returns for balance and sustained growth. Efficiency (E) is boosted by upgrades and your total lifetime Gold Bars earned.</p>
        </div>

        <div className="mint-feature-card">
          <h3>Manual Collection & Capacity</h3>
          <p>Meme Coins accumulate in the Mint and must be manually collected. The Mint has a capacity, and generation pauses when full, encouraging active engagement. Upgrade both efficiency and capacity to maximize your $GCM output.</p>
        </div>

        <div className="mint-feature-card">
          <h3>Strategic Upgrades</h3>
          <p>Invest Gold Bars into Efficiency Upgrades (e.g., "Refined Gears") and Capacity Upgrades (e.g., "Expanded Vault"). Late-game Meta-Efficiency upgrades will require both GB and $GCM, adding further depth.</p>
        </div>
      </div>

      <div className="withdrawal-info">
        <h3>Redeeming Your $GCM</h3>
        <p>While the full on-chain redemption system is under development, our vision is clear:</p>
        <ul>
          <li><strong>Secure Validation:</strong> Server-side validation for all withdrawal requests.</li>
          <li><strong>Minimum Thresholds:</strong> To ensure efficiency and prevent abuse (e.g., 50-100 $GCM).</li>
          <li><strong>Global Minting Quota:</strong> Daily mint cap tied to actual ad revenue to maintain token health (e.g., <code>MaxDistributable = (AdRevenue * 0.8) / $GCM_Price</code>).</li>
          <li><strong>Transparency:</strong> Scheduled disbursements and transaction hash records.</li>
        </ul>
        <p className="disclaimer"><em><strong>Disclaimer:</strong> Meme Coins ($GCM) have no guaranteed monetary value and are distributed as a reward for time spent in-game. This is not an investment.</em></p>
      </div>
    </section>
  );
};

export default EarnMemecoinSection; 