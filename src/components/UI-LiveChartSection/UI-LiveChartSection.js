import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCopy, FiExternalLink } from 'react-icons/fi';
import './UI-LiveChartSection.css';

const UILiveChartSection = () => {
    const [copied, setCopied] = useState(false);
    const contractAddress = "Bn6TFByapFAy9t3sD9WzCj3GdyayvqXNp7ynpUiv9yBr"; // For chart
    const displayCA = "8gLG1UXVmJcTF6vvZdsuqLu44ZddUiyZ4XHyhboMfray"; // For display and copy

    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

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
                     <h2 className="text-4xl md:text-5xl font-bold text-white">$GCM Live Chart</h2>
                     <p className="text-slate-400 mt-2">Track the journey. Real-time price action.</p>
                     
                     {/* Contract Address Display */}
                     <div className="ca-display-container">
                        <div className="ca-label">Contract Address (CA):</div>
                        <div className="ca-container">
                            <code className="ca-text">{displayCA}</code>
                            <div className="ca-buttons">
                                <button 
                                    onClick={() => copyToClipboard(displayCA)}
                                    className={`ca-btn copy-btn ${copied ? 'copied' : ''}`}
                                    title="Copy Contract Address"
                                >
                                    <FiCopy />
                                    {copied ? 'Copied!' : 'Copy'}
                                </button>
                                <a 
                                    href={`https://dexscreener.com/solana/${displayCA}`}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="ca-btn external-btn"
                                    title="View on DexScreener"
                                >
                                    <FiExternalLink />
                                    DexScreener
                                </a>
                                <a 
                                    href={`https://solscan.io/token/${displayCA}`}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="ca-btn external-btn"
                                    title="View on Solscan"
                                >
                                    <FiExternalLink />
                                    Solscan
                                </a>
                            </div>
                        </div>
                     </div>
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
                            {/* Live DexScreener Chart */}
                            <div id="dexscreener-embed">
                                <iframe src={`https://dexscreener.com/solana/${contractAddress}?embed=1&loadChartSettings=0&chartDefaultOnMobile=1&chartTheme=dark&theme=dark&chartStyle=1&chartType=marketCap&interval=1`}></iframe>
                            </div>
                            
                            {/* Alternative Chart Links */}
                            <div className="chart-alternatives">
                                <p className="chart-note">If chart doesn't load correctly, try these alternatives:</p>
                                <div className="alt-chart-buttons">
                                    <a 
                                        href={`https://dexscreener.com/solana/${displayCA}`}
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="alt-chart-btn"
                                    >
                                        Open Full DexScreener
                                    </a>
                                    <a 
                                        href={`https://birdeye.so/token/${displayCA}?chain=solana`}
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="alt-chart-btn"
                                    >
                                        View on Birdeye
                                    </a>
                                    <a 
                                        href={`https://www.geckoterminal.com/solana/tokens/${displayCA}`}
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="alt-chart-btn"
                                    >
                                        View on GeckoTerminal
                                    </a>
                                </div>
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