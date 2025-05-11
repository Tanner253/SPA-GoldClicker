import React from 'react';
import './AboutGameSection.css';

const AboutGameSection = () => {
  return (
    <section className="section-container about-game-section">
      <h2>What is Gold Clicker Mining?</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            <strong>Gold Clicker Mining ($GCM)</strong> is not just another clicker game. It's a meticulously crafted experience designed to be genuinely fun, addicting, and rewarding. 
            Inspired by classics like Cookie Clicker and AdVenture Capitalist, $GCM offers exponential idle clicker progression where every click and every upgrade brings you closer to unparalleled virtual wealth.
          </p>
          <p>
            The core gameplay is simple yet deeply engaging: click to earn gold, invest in powerful upgrades to automate and boost your earnings, and strategically prestige to unlock permanent bonuses and climb to new heights of productivity. 
            But $GCM goes further by integrating this satisfying loop with a real-world crypto-economic layer.
          </p>
          <p>
            Why play? First, for the sheer fun of watching your empire grow from a humble gold panner to a galactic mining tycoon. Second, for the unique opportunity to convert your in-game achievements into tangible value through $GCM memecoins.
          </p>
        </div>
        {/* Optional: Add an image or simple animation here related to the game */}
        {/* <div className="about-image">
          <img src="placeholder-game-visual.png" alt="Gold Clicker Mining Gameplay Concept" />
        </div> */}
      </div>
    </section>
  );
};

export default AboutGameSection; 