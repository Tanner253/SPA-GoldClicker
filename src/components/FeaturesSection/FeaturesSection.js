import React from 'react';
import './FeaturesSection.css';

const FeatureCard = ({ title, children, icon }) => (
  <div className="feature-card">
    {icon && <div className="feature-icon">{icon}</div>}
    <h3>{title}</h3>
    <p>{children}</p>
  </div>
);

const FeaturesSection = () => {
  return (
    <section className="section-container features-section">
      <h2>Core Pillars & Exciting Features</h2>
      <p className="section-intro">
        Gold Clicker Mining is packed with features designed for long-term engagement, community building, and a dynamic play experience.
      </p>
      <div className="features-grid">
        <FeatureCard title="Deep Prestige System" icon="👑">
          Reset your progress to earn permanent powerful boosts and Gold Bars for the Meme Mint. Each prestige unlocks new layers of strategy and accelerates your journey to the top. Aim for Prestige 1000 for the ultimate endgame challenge!
        </FeatureCard>
        <FeatureCard title="Addictive Core Loop" icon="🖱️">
          Inspired by clicker classics, enjoy exponential upgrade costs, linear base income with multiplicative upgrades, offline progress, critical clicks, and satisfying event spawns. Easy to learn, hard to master.
        </FeatureCard>
        <FeatureCard title="Massive Decentralized Distribution" icon="🌍">
          Players earn small, consistent portions of $GCM (1-5 tokens per relevant period/milestone), promoting wide, fair distribution. This approach reduces whale centralization and enhances token legitimacy for a healthier ecosystem.
        </FeatureCard>
        <FeatureCard title="Dynamic Global Boosts" icon="💹">
          The $GCM token's market performance directly impacts in-game click rates for everyone! Green days mean global boosts, red days mean challenges. Your fortune is tied to the community's success.
        </FeatureCard>
        <FeatureCard title="Future: Guild System" icon="🤝">
          (Coming Soon) Form guilds, share strategies, and participate in Guild PvE (boss fights) and PvP (click races with $GCM wagers). Unlock shared upgrades, cosmetics, and dominate the leaderboards together.
        </FeatureCard>
        <FeatureCard title="Future: Global Events" icon="🎉">
          (Coming Soon) Participate in seasonal and special global events that require community contributions to unlock unique rewards, rare cosmetics, and bonus $GCM payouts.
        </FeatureCard>
      </div>
    </section>
  );
};

export default FeaturesSection; 