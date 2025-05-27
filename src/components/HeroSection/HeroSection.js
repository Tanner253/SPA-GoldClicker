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
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#FFD700", // Gold color for particles
      },
      links: {
        color: "#FFD700",
        distance: 150,
        enable: false, // No links for a cleaner falling dust look
        opacity: 0.3,
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
          area: 800,
        },
        value: 80, // Number of particles
      },
      opacity: {
        value: 0.7, // Particle opacity
      },
      shape: {
        type: "circle", // Shape of particles
      },
      size: {
        value: { min: 1, max: 3 }, // Particle size
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
          <p className="hero-tagline">Stack Bars. Break Stars. Mine Your Fortune.</p>
          <p className="hero-tagline">WE DO NOT HAVE A COIN LAUNCHED YET, ANY CHART CAN BE PUT BEHIND THIS GAME, REACH OUT FOR COLLABS</p>
          <p className="hero-tagline">Meme: Tap a gold bar to mine $GCM memecoin.</p>
          <p className="hero-intro">
            Discover a revolutionary clicker game that merges addictive gameplay with real economic incentives. 
            Dive into a world of endless clicking, strategic upgrades, and the thrill of earning $GCM memecoins.
            Most Game developers pocket 100% of revenue from their games, I am offering 80% back to the user through memecoin ($GCM), no tricks, its that simple.
          </p>
          <p>live on pumpfun:  https://pump.fun/coin/CA281fpA6AiHcDxZdmRJFVTMCzupxgK9JyVGBegPpump CA: CA281fpA6AiHcDxZdmRJFVTMCzupxgK9JyVGBegPpump</p>
          <p>This is a development stream, please do not invest unless you understand the risks</p>
          {/* GoFundMe widget was here, now removed */}

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