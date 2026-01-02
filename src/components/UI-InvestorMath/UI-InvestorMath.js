import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiUsers, FiDollarSign, FiZap, FiTarget, FiBarChart2, FiActivity, FiRepeat, FiInfo } from 'react-icons/fi';
import './UI-InvestorMath.css';

const UIInvestorMath = () => {
    const [selectedPeriod, setSelectedPeriod] = useState('3');
    const [showMobileImage, setShowMobileImage] = useState(false);
    const modalRef = useRef(null);

    // Focus management for mobile modal
    useEffect(() => {
        if (showMobileImage && modalRef.current) {
            modalRef.current.focus();
            modalRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [showMobileImage]);

    const scenarios = {
        worst: {
            dailyPlayers: 5000,
            adsPerPlayer: 5,
            revenuePerK: 50,
            label: "Worst Case",
            description: "Conservative"
        },
        medium: {
            dailyPlayers: 15000,
            adsPerPlayer: 6,
            revenuePerK: 450,
            label: "Medium Case", 
            description: "Realistic"
        },
        best: {
            dailyPlayers: 50000,
            adsPerPlayer: 8,
            revenuePerK: 750,
            label: "Best Case",
            description: "Aggressive"
        }
    };

    const calculateMetrics = (data) => {
        const dailyViews = data.dailyPlayers * data.adsPerPlayer;
        const dailyRevenue = (dailyViews / 1000) * data.revenuePerK;
        const yearlyRevenue = dailyRevenue * 365;
        const burnableRevenue = yearlyRevenue * 0.8; // 20% operational fee
        
        return {
            dailyViews,
            dailyRevenue,
            yearlyRevenue,
            burnableRevenue,
            threeYearBurns: burnableRevenue * 3,
            fiveYearBurns: burnableRevenue * 5,
            tenYearBurns: burnableRevenue * 10
        };
    };

    const calculateMarketCap = (burnAmount, currentMarketCap = 10000, totalSupply = 1000000000) => {
        // Pump.fun bonding curve mechanics:
        // 1. Burns = buying pressure that directly increases market cap
        // 2. Bonding curve means each dollar of buying pressure has exponential impact
        // 3. Conservative assumption: 70% of burn revenue goes to token buys (30% slippage/fees)
        
        const effectiveBuyPressure = burnAmount * 0.7; // Account for slippage and fees
        
        // Bonding curve effect: Each dollar of buy pressure has greater impact as MC grows
        // Conservative model: MC grows by 1.5x the buy pressure (accounting for curve mechanics)
        const marketCapIncrease = effectiveBuyPressure * 1.5;
        const projectedMarketCap = currentMarketCap + marketCapIncrease;
        
        // Calculate new token price
        const newTokenPrice = projectedMarketCap / totalSupply;
        const currentTokenPrice = currentMarketCap / totalSupply;
        
        // More realistic burn percentage calculation
        // Assume we burn tokens equivalent to a reasonable percentage of circulating supply
        // Based on buy pressure relative to market cap growth
        const burnPercentage = Math.min((effectiveBuyPressure / projectedMarketCap) * 100 * 2, 25); // Cap at 25% for realism
        
        return {
            projectedMarketCap,
            burnPercentage,
            newTokenPrice
        };
    };

    const getBurnAmountForPeriod = (metrics, period) => {
        switch(period) {
            case '3': return metrics.threeYearBurns;
            case '5': return metrics.fiveYearBurns;
            case '10': return metrics.tenYearBurns;
            default: return metrics.threeYearBurns;
        }
    };

    return (
        <section className="ui-investor-math-section">
            <div className="container mx-auto px-4 py-12">
                {/* Mobile Image Viewer Modal */}
                {showMobileImage && (
                    <div 
                        className="mobile-image-modal" 
                        ref={modalRef}
                        tabIndex={-1}
                        onClick={() => setShowMobileImage(false)}
                    >
                        <div className="mobile-image-container">
                            <button className="close-btn" onClick={() => setShowMobileImage(false)}>×</button>
                            <img 
                                src="/images/imgmobile.png" 
                                alt="GCM Burn Projections - Full View" 
                                className="mobile-image"
                            />
                            <p className="mobile-image-caption">Tap anywhere to close • Pinch to zoom</p>
                        </div>
                    </div>
                )}

                {/* Mobile Image Button - Only visible on mobile */}
                <div className="mobile-image-button-container">
                    <button 
                        className="mobile-image-button"
                        onClick={() => setShowMobileImage(true)}
                    >
                        📱 View Full Image (Mobile Friendly)
                    </button>
                </div>

                {/* Compact Header */}
                <motion.div 
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="investor-badge">
                        <FiActivity className="badge-icon" />
                        <span>REVENUE ENGINE MATHEMATICS</span>
                    </div>
                    <h2 className="investor-title">
                        $GCM <span className="highlight-text">Burn Projections</span>
                    </h2>
                    <p className="investor-subtitle">
                        Real ad revenue × 80% burn rate = Unlimited market cap growth
                    </p>
                </motion.div>

                {/* Revenue Note */}
                <div className="revenue-note-compact">
                    <FiInfo className="note-icon" />
                    <span><strong>Note:</strong> Revenue per 1K views varies by region (US/EU: $250-750, Global avg: $50-150). Additional revenue streams (subscriptions, IAP, NFTs) not included. Game already playable with 20K+ active players (18.5K Android, 1.5K iOS).</span>
                </div>

                {/* Period Selector */}
                <div className="period-selector">
                    <h3>Select Projection Period:</h3>
                    <div className="period-buttons">
                        {['3', '5', '10'].map((period) => (
                            <button
                                key={period}
                                className={`period-btn ${selectedPeriod === period ? 'active' : ''}`}
                                onClick={() => setSelectedPeriod(period)}
                            >
                                {period} Years
                            </button>
                        ))}
                    </div>
                </div>

                {/* Compact Scenarios Grid */}
                <motion.div 
                    className="scenarios-grid-compact"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {Object.entries(scenarios).map(([key, scenarioData], index) => {
                        const metrics = calculateMetrics(scenarioData);
                        const selectedBurnAmount = getBurnAmountForPeriod(metrics, selectedPeriod);
                        const marketCapData = calculateMarketCap(selectedBurnAmount);
                        
                        return (
                            <div key={key} className={`scenario-column-compact ${key}`}>
                                {/* Header */}
                                <div className="scenario-header-compact">
                                    <h3 className="scenario-title-compact">{scenarioData.label}</h3>
                                    <p className="scenario-description-compact">{scenarioData.description}</p>
                                </div>

                                {/* Input Metrics - Horizontal */}
                                <div className="input-metrics-compact">
                                    <div className="input-metric-compact">
                                        <FiUsers />
                                        <span>{scenarioData.dailyPlayers.toLocaleString()}</span>
                                        <small>Players</small>
                                    </div>
                                    <div className="input-metric-compact">
                                        <FiZap />
                                        <span>{scenarioData.adsPerPlayer}</span>
                                        <small>Ads</small>
                                    </div>
                                    <div className="input-metric-compact">
                                        <FiDollarSign />
                                        <span>${scenarioData.revenuePerK}</span>
                                        <small>/1K</small>
                                    </div>
                                </div>

                                {/* Key Metrics */}
                                <div className="key-metrics-compact">
                                    <div className="metric-row">
                                        <span>Daily Views:</span>
                                        <strong>{metrics.dailyViews.toLocaleString()}</strong>
                                    </div>
                                    <div className="metric-row">
                                        <span>Daily Revenue:</span>
                                        <strong>${metrics.dailyRevenue.toLocaleString()}</strong>
                                    </div>
                                    <div className="metric-row fee-row">
                                        <span>Less 20% Fee:</span>
                                        <strong>-${(metrics.dailyRevenue * 0.2).toLocaleString()}</strong>
                                    </div>
                                    <div className="metric-row highlight-row">
                                        <span>Net Daily Burns:</span>
                                        <strong>${(metrics.burnableRevenue / 365).toLocaleString()}</strong>
                                    </div>
                                </div>

                                {/* Multi-Year Projections - Prominent */}
                                <div className="projections-compact">
                                    <h4>Cumulative Token Burns</h4>
                                    <div className="projection-grid">
                                        <div className="projection-item-compact">
                                            <span className="period">3Y</span>
                                            <span className="amount">${(metrics.threeYearBurns / 1000000).toFixed(1)}M</span>
                                        </div>
                                        <div className="projection-item-compact">
                                            <span className="period">5Y</span>
                                            <span className="amount">${(metrics.fiveYearBurns / 1000000).toFixed(1)}M</span>
                                        </div>
                                        <div className="projection-item-compact highlight-projection-compact">
                                            <span className="period">10Y</span>
                                            <span className="amount">${(metrics.tenYearBurns / 1000000).toFixed(1)}M</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Market Cap Impact - Compact */}
                                <div className="market-impact-compact">
                                    <div className="impact-row">
                                        <span>{selectedPeriod}Y Burn %:</span>
                                        <strong>{marketCapData.burnPercentage.toFixed(1)}%</strong>
                                    </div>
                                    <div className="impact-row">
                                        <span>New Token Price:</span>
                                        <strong>${marketCapData.newTokenPrice.toFixed(3)}</strong>
                                    </div>
                                    <div className="impact-row market-cap-row">
                                        <span>Projected Market Cap:</span>
                                        <strong>${(marketCapData.projectedMarketCap / 1000000).toFixed(0)}M</strong>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>

                {/* Bottom Summary - Single Row */}
                <motion.div 
                    className="bottom-summary"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="summary-section">
                        <FiRepeat className="summary-icon" />
                        <div>
                            <h4>Additional Revenue Streams</h4>
                            <p>Subscriptions • In-App Purchases • NFT Marketplace • Partnerships • Premium Features</p>
                        </div>
                    </div>
                    <div className="summary-section">
                        <FiTrendingUp className="summary-icon" />
                        <div>
                            <h4>Real Business Model</h4>
                            <p>Working game • Proven ad tech • 20K+ active players • Revenue before token launch • Sustainable economics</p>
                        </div>
                    </div>
                    <div className="summary-section">
                        <FiTarget className="summary-icon" />
                        <div>
                            <h4>Market Cap Growth Potential</h4>
                            <p>From $10K start → 116x to 27,600x growth in 3 years based purely on ad revenue burns</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default UIInvestorMath; 