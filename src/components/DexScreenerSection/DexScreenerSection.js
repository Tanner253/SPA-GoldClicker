import React from 'react';
import './DexScreenerSection.css';

const DexScreenerSection = () => {
  return (
    <section className="dexscreener-section section-container">
      <h2 className="section-title">Live Chart - WE HAVE BONDED! (Kols's kinda fucked the chart though, we are recovering)</h2>
      <div id="dexscreener-embed">
        <iframe 
          src="https://dexscreener.com/solana/DgjLq7AWAxf6Fn6LeMEdrimZn3kYwke2UJDWwFbUy8wT?embed=1&loadChartSettings=0&chartLeftToolbar=0&chartDefaultOnMobile=1&chartTheme=dark&theme=dark&chartStyle=1&chartType=marketCap&interval=240"
          title="DexScreener Chart"
        ></iframe>
      </div>
      <p className="chart-disclaimer">
        This chart is for informational purposes only. Please conduct your own research before making any financial decisions.
      </p>
    </section>
  );
};

export default DexScreenerSection; 