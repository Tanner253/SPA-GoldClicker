import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { FiTrendingUp, FiLock, FiRepeat } from 'react-icons/fi';
import './UI-TokenomicsSection.css';
import CMinerTokenomics from './CMinerTokenomics';

ChartJS.register(ArcElement, Tooltip, Legend);

const GcmTokenomics = () => {
    const mainSupplyData = {
        labels: ['Treasury & Ecosystem', 'Publicly Circulating', 'Personal & Partnerships'],
        datasets: [{
            data: [50, 47, 3],
            backgroundColor: ['#8b3fae', '#4f46e5', '#34d399'],
            borderColor: '#1e1b4b',
            borderWidth: 4,
        }],
    };

    const treasuryBreakdown = [
        { label: 'Locked for 2 Years', value: 25, duration: '2-Year Lock' },
        { label: 'Locked for 1 Year', value: 15, duration: '1-Year Lock' },
        { label: 'Locked for 6 Months', value: 5, duration: '6-Month Lock' },
    ];

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: { color: 'white', font: { size: 14 } }
            },
            tooltip: {
                enabled: true,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: 'white',
                bodyColor: 'white',
                cornerRadius: 8,
                padding: 12,
                callbacks: {
                    label: function(context) {
                        return `${context.label}: ${context.raw}%`;
                    }
                }
            }
        }
    };

    return (
        <>
            {/* Top Grid: Distribution & Allocation */}
            <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-16">
                <div className="token-card">
                    <h3 className="card-title"><FiTrendingUp /> Overall Supply Distribution</h3>
                    <div className="chart-container">
                        <Doughnut data={mainSupplyData} options={chartOptions} />
                    </div>
                </div>

                <div className="token-card">
                    <h3 className="card-title"><FiLock /> Treasury & Ecosystem Allocation (50%)</h3>
                    <p className="card-subtitle">A transparent breakdown of the treasury funds, secured with vesting schedules to ensure long-term stability.</p>
                    <div className="progress-bar-container">
                        {treasuryBreakdown.map((item, index) => (
                            <div key={index} className="progress-item">
                                <div className="progress-labels">
                                    <span className="label-text">{item.label} ({item.value}%)</span>
                                    <span className="label-duration">{item.duration}</span>
                                </div>
                                <div className="progress-bar-bg">
                                    <motion.div 
                                        className="progress-bar-fg" 
                                        style={{ width: `${item.value / 45 * 100}%` }}
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true, amount: 0.8 }}
                                        transition={{ duration: 1, delay: index * 0.2 }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Full-Width Flywheel Section */}
            <div className="token-card flywheel-card">
                <h3 className="card-title"><FiRepeat /> The Self-Feeding Economic Loop</h3>
                <div className="economic-loop-steps">
                    <div className="step-item"><span>1</span><p><strong>Players Engage:</strong> Play the game, click, upgrade, and watch rewarded ads.</p></div>
                    <div className="step-item"><span>2</span><p><strong>Revenue Generation:</strong> Ad views and In-App Purchases generate real-world revenue.</p></div>
                    <div className="step-item"><span>3</span><p><strong>Liquidity Pool Growth:</strong> A significant portion of this revenue is directly channeled into the $GCM liquidity pool.</p></div>
                    <div className="step-item"><span>4</span><p><strong>$GCM Earning:</strong> Players earn $GCM by converting Gold Bars through the Meme Mint.</p></div>
                    <div className="step-item"><span>5</span><p><strong>Stake or Sell:</strong> Players can stake their $GCM for in-game boosts or sell it on the open market.</p></div>
                    <div className="step-item"><span>6</span><p><strong>Market Stability:</strong> Staking promotes retention and reduces sell pressure, while ad revenue supports token value.</p></div>
                    <div className="step-item"><span>7</span><p><strong>Enhanced Gameplay:</strong> The cycle repeats, with game success directly impacting token health.</p></div>
                </div>
                <p className="flywheel-caption">This closed-value loop ensures that player activity directly contributes to the value and liquidity of $GCM. The more the game is played, the stronger the token's foundation becomes.</p>
            </div>
        </>
    );
};

const UITokenomicsSection = () => {
    const [activeTab, setActiveTab] = useState('GCM');

    return (
        <section id="tokenomics" className="ui-tokenomics-section">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                     <h2 className="text-4xl md:text-5xl font-bold text-white">Tokenomics: The Engine of Growth</h2>
                     <p className="text-slate-400 mt-2 max-w-3xl mx-auto">Our tokenomics are designed for sustainability, transparency, and long-term value creation for the community.</p>
                </div>

                <div className="flex justify-center items-center mb-12 space-x-4">
                    <button 
                        onClick={() => setActiveTab('GCM')}
                        className={`tab-button ${activeTab === 'GCM' ? 'active' : ''}`}
                    >
                        $GCM
                    </button>
                    <button 
                        onClick={() => setActiveTab('CMINER')}
                        className={`tab-button ${activeTab === 'CMINER' ? 'active' : ''}`}
                    >
                        $CMINER
                    </button>
                </div>

                <div>
                    {activeTab === 'GCM' ? <GcmTokenomics /> : <CMinerTokenomics />}
                </div>
            </div>
        </section>
    );
};

export default UITokenomicsSection;
