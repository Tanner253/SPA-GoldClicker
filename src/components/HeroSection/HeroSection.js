import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // or loadFull if you need more features
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
        <div className="hero-content section-container">
          <h1 className="hero-title">Gold Clicker Mining <span className="hero-ticker">($GCM)</span></h1>
          <p className="hero-tagline">Stack Bars. Break Stars. Mine Your Fortune. Ask me to demo on stream.</p>
          <p className="hero-tagline hero-deployment-shoutout"> 
            <span className="hero-special-deployment-text">
              WE ARE DEPLOYED IN THE ANDROID APP STORE FOR TESTERS
            </span>
            , PLEASE JOIN THE TESTERS TEAM TO EARN AIRDROPS!
          </p>
          <p className="hero-tagline">Meme: Tap a gold bar to mine $GCM memecoin.</p>
          <p className="hero-intro">
            Discover a revolutionary clicker game that merges addictive gameplay with real economic incentives. 
            Dive into a world of endless clicking, strategic upgrades, and the thrill of earning $GCM memecoins.
          </p>
          <p className="hero-revenue-share">
            Most Game developers pocket 100% of revenue from their games, I am offering 80% back to the user through memecoin ($GCM), no tricks, its that simple.
          </p>
          <p>100% dev supply locked.</p>
          {/* New lock.jpg image */}
          <img src="/images/lock.jpg" alt="Token Lock Information" className="hero-lock-image" />

          <p>live on pumpfun:  https://pump.fun/coin/CA281fpA6AiHcDxZdmRJFVTMCzupxgK9JyVGBegPpump CA: CA281fpA6AiHcDxZdmRJFVTMCzupxgK9JyVGBegPpump</p>
          <p>This is a development stream, please do not invest unless you understand the risks THIS IS A DEVELOPMENT STREAM TO SUPPORT THE DEVELOPMENT OF THE GAME</p>
          {/* GoFundMe widget was here, now removed */}
          <p>$CMINER will be sold by the dev when supply is unlocked, and when GCM is going to launch. It will be used to help fund the treasury deposit I currently have to pay for out of the thin budget I currently have.</p>
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