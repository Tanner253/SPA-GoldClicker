import React from 'react';
import { motion } from 'framer-motion';
import './UI-LiveChartSection.css';

const UILiveChartSection = () => {
    const quotes = [
        { text: `"The only way you lose money is if you sell."`, author: "— Warren Buffet, probably" },
        { text: `"Diamond hands are forged in the fires of red candles."`, author: "— Ancient Proverb" },
        { text: `"Buy high, sell never."`, author: "— A True Believer" },
        { text: `"It's not a loss until you realize it."`, author: "— Quantum Economics" },
        { text: `"I'm not a financial advisor, but... moon."`, author: "— Every Crypto Influencer" },
        { text: `"The dip is just a discount."`, author: "— The Entire Internet" },
    ];

    return (
        <section id="live-chart" className="ui-live-chart-section">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                     <h2 className="text-4xl md:text-5xl font-bold text-white">The Chart of Destiny</h2>
                     <p className="text-slate-400 mt-2">Witness the journey. Remember, patience is key.</p>
                </div>

                <div className="chart-grid-container">
                    {/* Map quotes to grid cells */}
                    {quotes.map((quote, index) => (
                        <motion.div
                            key={index}
                            className={`meme-quote-grid-item item-${index + 1}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                            viewport={{ once: true, amount: 0.8 }}
                            transition={{ type: 'spring', stiffness: 100, delay: index * 0.15 }}
                        >
                            <div className="quote-content">
                                <p className="quote-text">{quote.text}</p>
                                <p className="quote-author">{quote.author}</p>
                            </div>
                        </motion.div>
                    ))}
                    
                    <div className="chart-grid-item">
                        <div className="chart-embed-container">
                            {/* Commented out the original iframe */}
                            {/* <iframe 
                                src="https://dexscreener.com/solana/FYFHVP5ktPXxevbfD7Dqd2X6FhxRY28K4spcGFQwpump?embed=1&loadChartSettings=0&chartLeftToolbar=0&chartDefaultOnMobile=1&chartTheme=dark&theme=dark&chartStyle=1&chartType=marketCap&interval=1D"
                                title="DexScreener Chart for $GCM"
                            ></iframe> */}
                            
                            {/* GCM LAUNCHING SOON Message */}
                            <div className="launching-soon-container">
                                <motion.div 
                                    className="launching-soon-content"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <motion.h3 
                                        className="launching-soon-title"
                                        animate={{ 
                                            textShadow: [
                                                "0 0 20px #ff6b35",
                                                "0 0 40px #f7931e", 
                                                "0 0 60px #ffd700",
                                                "0 0 40px #f7931e",
                                                "0 0 20px #ff6b35"
                                            ]
                                        }}
                                        transition={{ 
                                            duration: 3, 
                                            repeat: Infinity, 
                                            repeatType: "reverse" 
                                        }}
                                    >
                                        🚀 GCM LAUNCHING SOON 🚀
                                    </motion.h3>
                                    <motion.p 
                                        className="launching-soon-subtitle"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.3 }}
                                    >
                                        The chart will appear here once $GCM officially launches!
                                    </motion.p>
                                    <motion.div 
                                        className="launching-soon-details"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.6 }}
                                    >
                                        <p>🎮 Game is LIVE on iOS & Android</p>
                                        <p>💰 Players are earning GCM Points</p>
                                        <p>📈 Token launch preparations underway</p>
                                    </motion.div>
                                    
                                    {/* Treasury Fund Status */}
                                    <motion.div 
                                        className="treasury-fund-status"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.9 }}
                                    >
                                        <div className="fund-requirement">
                                            <h4>🏦 Treasury Fund Status</h4>
                                            <p>The only thing keeping us from launching is securing the <strong>$5K treasury fund</strong>.</p>
                                            <p>I've been actively sourcing investment for the past <strong>4 months</strong>.</p>
                                        </div>
                                        <div className="launch-process">
                                            <h4>🚀 Launch Process (Once Funded)</h4>
                                            <ul>
                                                <li>✅ Purchase chart on Raydium</li>
                                                <li>✅ Immediately lock team supply (53%)</li>
                                                <li>✅ Honor all withdrawal requests manually</li>
                                                <li>✅ Process game airdrops manually</li>
                                                <li>✅ Begin automated burn protocol</li>
                                            </ul>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        className="launching-soon-glow"
                                        animate={{ 
                                            scale: [1, 1.2, 1],
                                            opacity: [0.3, 0.7, 0.3]
                                        }}
                                        transition={{ 
                                            duration: 2, 
                                            repeat: Infinity 
                                        }}
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>

                 <p className="chart-disclaimer mt-8 text-center text-slate-500 text-sm">
                    This chart is for informational purposes only. Please conduct your own research.
                </p>
            </div>
        </section>
    );
};

export default UILiveChartSection; 