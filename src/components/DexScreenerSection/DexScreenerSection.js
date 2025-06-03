import React from 'react';
import './DexScreenerSection.css';

const DexScreenerSection = () => {
  return (
    <section className="dexscreener-section section-container">
      <h2 className="section-title">Live Chart</h2>
      <div id="dexscreener-embed">
        <iframe 
          src="https://dexscreener.com/solana/Ee1AAxbER1UY3yv5nwYAm1siwNsLahxYf8yDF7qHaTHB?embed=1&loadChartSettings=0&chartLeftToolbar=0&chartDefaultOnMobile=1&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"
          title="DexScreener Chart"
        ></iframe>
      </div>
    </section>
  );
};

export default DexScreenerSection; 