import React from 'react';
import './KeyDifferentiatorsSection.css';

const DifferentiatorCard = ({ title, children, icon }) => (
  <div className="differentiator-card">
    {icon && <div className="differentiator-icon">{icon}</div>}
    <h3>{title}</h3>
    <p>{children}</p>
  </div>
);

const KeyDifferentiatorsSection = () => {
  return (
    <section className="section-container key-differentiators-section">
      <h2>Why Gold Clicker Mining ($GCM) Stands Out</h2>
      <p className="section-intro">
        In a sea of clicker games and memecoins, $GCM is charting a new course. We're building more than just a game; 
        we're creating a sustainable, player-focused ecosystem where fun meets real financial opportunity.
      </p>
      <div className="differentiators-grid">
        <DifferentiatorCard title="Player-Centric Economy" icon="⚖️">
          A groundbreaking 80% of game revenue is reinvested into the $GCM ecosystem and its liquidity, directly benefiting players and token holders. Your time and engagement generate real, shared value.
        </DifferentiatorCard>
        <DifferentiatorCard title="True Play-to-Earn & Earn" icon="💸">
          Earn valuable $GCM tokens through engaging gameplay via the innovative Meme Mint. This isn't just about playing; it's about earning tangible rewards for your dedication and strategy.
        </DifferentiatorCard>
        <DifferentiatorCard title="Sustainable Revenue Model" icon="♻️">
          Powered by non-intrusive ads and optional IAPs, our model ensures a continuous revenue stream that fuels $GCM liquidity and game development, aiming for long-term stability and growth.
        </DifferentiatorCard>
        <DifferentiatorCard title="Community Driven Development" icon="🤝">
          Join a vibrant community on X and Telegram. Your feedback and engagement are vital, directly influencing game updates, new features, and the overall direction of the $GCM project.
        </DifferentiatorCard>
        <DifferentiatorCard title="Transparent & Engaging Gameplay" icon="🎮">
          Experience an addictive, fair, and transparent clicker game with clear progression, offline earnings, and exciting prestige mechanics. No hidden algorithms, just pure, rewarding fun.
        </DifferentiatorCard>
        <DifferentiatorCard title="Built for the Future" icon="🚀">
          With a clear roadmap including guild systems, global events, and further integration with the Web3 space, Gold Clicker Mining is designed for lasting appeal and continuous evolution.
        </DifferentiatorCard>
      </div>
    </section>
  );
};

export default KeyDifferentiatorsSection; 