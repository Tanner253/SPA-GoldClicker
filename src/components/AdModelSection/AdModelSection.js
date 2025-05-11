import React from 'react';
import './AdModelSection.css';

const AdModelSection = () => {
  return (
    <section className="section-container ad-model-section">
      <h2>Fueling the Gold Rush: Our Revenue Engine</h2>
      <p className="section-intro">
        Gold Clicker Mining is built on a sustainable economic model where player engagement directly contributes to the ecosystem's growth. 
        Revenue generated from the game is transparently reinvested, primarily to bolster the $GCM memecoin's liquidity pool.
      </p>
      <div className="revenue-streams">
        <div className="stream-card">
          <h3>Advertising Revenue</h3>
          <p>
            Players encounter non-intrusive, rewarded advertisements that offer in-game boosts. 
            This ad engagement is a primary revenue source, ensuring that even free-to-play users contribute to the $GCM liquidity pool. 
            The more players engage, the more value flows into the ecosystem.
          </p>
        </div>
        <div className="stream-card">
          <h3>In-App Purchases (IAPs)</h3>
          <p>
            For players seeking to accelerate their progress or enhance their experience, we offer traditional idle game IAPs such as powerful boosts, time skips, and exclusive cosmetic items. 
            A significant portion of IAP revenue also feeds into the $GCM liquidity.
          </p>
        </div>
        <div className="stream-card">
          <h3>Dual App Monetization</h3>
          <p>
            We plan a dual approach: a free, ad-driven version and a premium, ad-free version with an enhanced UX, sold separately. This caters to all player preferences while maximizing revenue streams that support the $GCM token.
          </p>
        </div>
        <div className="stream-card">
          <h3>Clicker Object Auction System</h3>
          <p>
            An innovative future feature where memecoin projects can bid to have their coin's imagery featured as the clickable gold bar in-game. This auction system will generate direct revenue, further funding $GCM liquidity and development.
          </p>
        </div>
      </div>
      <p className="revenue-commitment">
        <strong>Our Commitment:</strong> A substantial majority of the profits generated from these streams is funneled back into the $GCM ecosystem, primarily by strengthening its liquidity pool. This creates a direct link between game activity, revenue generation, and the value of the $GCM token for all holders.
      </p>
    </section>
  );
};

export default AdModelSection; 