import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // or loadFull if you need more features
import { FaChartLine, FaVideo } from 'react-icons/fa'; // Added FaVideo, kept FaChartLine for now in case it's used elsewhere or for quick revert
import './HeroSection.css';

const HeroSection = () => {
  const particlesInit = useCallback(async engine => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's a MUST to choose a bundle preset or load custom shapes
    await loadSlim(engine); // or await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    // await console.log(container);
  }, []);

  const handleScrollToTarget = (targetId) => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // --- GoFundMe Script loading is now handled within GoFundMeWidget component --- 

  const particleOptions = {
    // background: { // Temporarily remove this to see if it's causing an overlay
    //   color: {
    //     value: '#1a1a1a',
    //   },
    // },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse", 
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 120,
          duration: .5,
        },
      },
    },
    particles: {
      color: {
        value: "random", // Changed from "#FFD700" to random
      },
      links: {
        color: "random", // Changed from "#FFD700" to random
        distance: 150,
        enable: true, // Changed from false to true
        opacity: 0.4, // Adjusted opacity slightly for visibility, can be tweaked
        width: 1,
      },
      collisions: {
        enable: false,
      },
      move: {
        direction: "bottom",
        enable: true,
        outModes: {
          default: "out",
        },
        random: true,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area:1000,
        },
        value: 300, // Number of particles
      },
      opacity: {
        value:.3, // Particle opacity
      },
      shape: {
        type: "circle", // Shape of particles
      },
      size: {
        value: { min: 1, max: 2 }, // Particle size
      },
    },
    detectRetina: true,
  };

  return (
    <section className="hero-section">
      <Particles
        id="tsparticles-hero"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particleOptions}
        className="hero-particles"
      />
      <div className="hero-overlay"> {/* This overlay ensures text is readable over particles */}
        <div className="hero-content-grid section-container"> {/* New main grid container */}

          {/* Main Info Area - could span full width or be a large top block */}
          <div className="hero-main-info">
            <h1 className="hero-title">Gold Clicker Mining <span className="hero-ticker">($GCM)</span></h1>
            <p className="hero-tagline">Stack Bars. Break Stars. Mine Your Fortune. Ask me to demo on stream.</p>
            
            <div className="hero-announcement-card"> 
              <p className="hero-tagline hero-deployment-shoutout"> 
                <span className="hero-special-deployment-text">
                  WE ARE DEPLOYED IN THE ANDROID APP STORE FOR TESTERS
                </span>
                , PLEASE JOIN THE TESTERS TEAM TO EARN AIRDROPS!
              </p>
            </div>

            <p className="hero-tagline">Meme: Tap a gold bar to mine $GCM memecoin.</p>

          </div>

          {/* Details Area - could be a 2-column layout on wider screens */}
          <div className="hero-details-area">
            <div className="hero-detail-card hero-intro-card">
              <h3 className="hero-card-title">The Game Concept</h3>
              <p className="hero-intro">
                Addictive game generates ad revenue, 80% of which is injected into GCM chart for distribution to gamers.
              </p>
              <p className="hero-revenue-share">
                Most Game developers pocket 100% of revenue from their games, I am offering 80% back to the user through memecoin ($GCM), no tricks, its that simple.
              </p>
            </div>

            <div className="hero-detail-card hero-status-disclaimer-card">
              <h3 className="hero-card-title">Project Status & Disclaimers</h3>
              
              {/* Combined Lock Info and Chart Link */}
              <div className="card-header-info">
                <span className="lock-status-text">100% dev supply locked.</span>
                <a href="https://pump.fun/coin/CA281fpA6AiHcDxZdmRJFVTMCzupxgK9JyVGBegPpump" target="_blank" rel="noopener noreferrer" className="pumpfun-icon-link header-link">
                  <FaVideo /> <span>Watch development Live on Pump.Fun!</span>
                </a>
              </div>
              
              {/* Warning and Positive notes remain */}
              <p className="hero-warning-text">This is a development stream, please do not invest unless you understand the risks, IT IS A SUPPORT STREAM TO SUPPORT THE DEVELOPMENT OF THE GAME AND MARKET THE UPCOMING LAUNCH. IF THIS CHART DOES WELL ITS GOOD FOR GMC LAUNCH (2 months eta) which is good for everyone. 🚀💛</p>
              <p className="hero-positive-note">
                $CMINER will sell CMINER dev wallet at GCM launch to help suppliment treasury wallet costs.
                Rest assured, 100% of the initial dev supply is locked, safeguarding against any rug pull.
              </p>
              <p className="card-footer-ca">CA: CA281fpA6AiHcDxZdmRJFVTMCzupxgK9JyVGBegPpump</p>
            </div>
          </div>
              <img src="/images/lock.jpg" alt="Token Lock Information" className="hero-lock-image-card" /> 
          
          {/* Additional Info / Disclaimers Area - could be full width below details */}
          <div className="hero-additional-info">
            {/* Pump.fun links moved into the card */}
          </div>

          <div className="hero-cta-buttons-container">
            <button onClick={() => handleScrollToTarget('about-game-section')} className="hero-cta-button">
              Explore the Gold Mines!
            </button>
            <button onClick={() => handleScrollToTarget('become-tester-section')} className="hero-cta-button secondary">
              Join Testers Team!
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection; 