import React from 'react';
import './GameplayVideoSection.css';

const GameplayVideoSection = () => {
  return (
    <section className="section-container gameplay-video-section">
      <h2>See Gold Clicker Mining in Action! (legacy version to show progression)</h2>
      <div className="video-player-wrapper">
        <div className="phone-mockup">
          <div className="phone-screen">
            <video 
              className="gameplay-video"
              src={process.env.PUBLIC_URL + '/images/demooo.mp4'}
              controls 
              autoPlay
              muted // Autoplay usually requires muted attribute
              loop
              playsInline // Important for iOS to play inline
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <p className="video-caption">VERY EARLY DEMO FOOTAGE: Experience the addictive clicker gameplay and see how you can turn your progress into $GCM rewards. Subject to change.</p>
    </section>
  );
};

export default GameplayVideoSection; 