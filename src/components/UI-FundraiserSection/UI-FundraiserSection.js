import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCopy, FiExternalLink, FiTarget, FiTrendingUp, FiStar, FiZap, FiArrowUpCircle } from 'react-icons/fi';
import './UI-FundraiserSection.css';

const UIFundraiserSection = () => {
    const [copied, setCopied] = useState(false);
    const contractAddress = "FYFHVP5ktPXxevbfD7Dqd2X6FhxRY28K4spcGFQwpump";
    const targetAmount = 5000;

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    };

    const milestones = [
        { amount: 1000, description: "Community Awareness Phase", icon: FiStar },
        { amount: 2500, description: "Game Download Surge", icon: FiZap },
        { amount: 4000, description: "Treasury Fund Nearly Ready", icon: FiTarget },
                                { amount: 5000, description: "250k MC reached → Dev dumps 2% → Treasury funded → GCM LAUNCH! 🚀", icon: FiArrowUpCircle },
    ];

    return (
        <section id="fundraiser-chart" className="ui-fundraiser-section">
            <div className="container mx-auto px-4 py-16">
                {/* Hero Section */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="fundraiser-hero-badge">
                        <FiTrendingUp className="fundraiser-hero-icon" />
                        <span>LIVE FUNDRAISER</span>
                    </div>
                    <h2 className="fundraiser-title">
                        🚀 Crowdfund the <span className="highlight-text">GCM Launch</span>
                    </h2>
                    <p className="fundraiser-subtitle">
                        This is our last chance. We need to reach 250k market cap so the dev can sell 2% supply for $5K treasury to launch GCM. Without this, the entire project dies.
                    </p>
                </motion.div>

                {/* Contract Address Card */}
                <motion.div 
                    className="contract-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="contract-header">
                        <h3><FiExternalLink /> Token Contract Address</h3>
                        <span className="live-indicator">● LIVE</span>
                    </div>
                    <div className="contract-address-container">
                        <code className="contract-address">{contractAddress}</code>
                        <button 
                            onClick={() => copyToClipboard(contractAddress)}
                            className={`copy-btn ${copied ? 'copied' : ''}`}
                            title="Copy Contract Address"
                        >
                            <FiCopy />
                            <span className={`copy-feedback ${copied ? 'show' : ''}`}>
                                {copied ? 'Copied!' : 'Copy'}
                            </span>
                        </button>
                    </div>
                </motion.div>

                {/* Goal Section */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    <motion.div 
                        className="goal-card"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="goal-title">
                            <FiTarget /> Fundraiser Goal
                        </h3>
                        <div className="goal-display">
                            <div className="goal-amount">${targetAmount.toLocaleString()}</div>
                            <div className="goal-description">
                                <strong>Target: 250k market cap → Dev sells 2% supply for $5K treasury</strong>
                                <br/><br/>
                                <span className="critical-note">⚠️ CRITICAL: Once we hit this target, the dev WILL "dump" their 2% holdings. This is not a rug pull - it's the planned treasury funding mechanism. The chart can and should continue rising after this point.</span>
                            </div>
                            
                            <div className="dev-wallet-info">
                                <h4>🔍 Dev Wallet (Fully Transparent)</h4>
                                <div className="wallet-details">
                                    <div className="wallet-address-container">
                                        <code className="wallet-address">HdtRSxaowEpwNTgMUcXfuxTUWgnUcz5F2gQA8EycqUCH</code>
                                        <button 
                                            onClick={() => copyToClipboard("HdtRSxaowEpwNTgMUcXfuxTUWgnUcz5F2gQA8EycqUCH")}
                                            className={`copy-btn-small ${copied ? 'copied' : ''}`}
                                            title="Copy Dev Wallet"
                                        >
                                            <FiCopy />
                                        </button>
                                    </div>
                                    <div className="wallet-stats">
                                        <span className="stat-badge">2% Supply</span>
                                        <span className="stat-badge">20M Tokens</span>
                                        <span className="stat-badge">Transparent Holdings</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="why-card"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="why-title">
                            <FiArrowUpCircle /> Why This Matters
                        </h3>
                        <div className="why-content">
                            <div className="why-item">
                                <span className="why-number">1</span>
                                <p>At 250k MC, dev <strong>WILL sell all 2% holdings</strong> for $5K treasury. This is planned, not a rug pull.</p>
                            </div>
                            <div className="why-item">
                                <span className="why-number">2</span>
                                <p><strong>$GCMF has long-term support</strong> - our third game will be built on $GCMF, ensuring continued utility and value.</p>
                            </div>
                            <div className="why-item">
                                <span className="why-number">3</span>
                                <p>Chart can continue rising after dev dump - only 2% supply sold, 98% remains in community hands.</p>
                            </div>
                            <div className="why-item">
                                <span className="why-number">4</span>
                                <p>Treasury funds enable lawyer engagement for full regulatory compliance and GCM launch.</p>
                            </div>
                            <div className="why-item critical-reality">
                                <span className="why-number">🚨</span>
                                <p><strong>THE REALITY:</strong> If we cannot raise the required treasury funds with $GCMF, then $GCM will never exist and the entire project will die. This fundraiser is an absolute last option - not being dramatic, just the truth.</p>
                            </div>
                            <div className="why-item gofundme-note">
                                <span className="why-number">💡</span>
                                <p><strong>Transparency Note:</strong> The GoFundMe helps keep my lights on and covers living expenses while I bootstrap this project. The $5K fundraiser is purely for GCM's official launch and legal compliance.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Milestones */}
                <motion.div 
                    className="milestones-section"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="milestones-title">Fundraising Milestones 🎯</h3>
                    <div className="milestones-grid">
                        {milestones.map((milestone, index) => {
                            const IconComponent = milestone.icon;
                            const isFinal = index === milestones.length - 1;
                            
                            return (
                                <motion.div 
                                    key={index}
                                    className={`milestone-card ${isFinal ? 'final' : ''}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <div className="milestone-icon">
                                        <IconComponent />
                                    </div>
                                    <div className="milestone-amount">${milestone.amount.toLocaleString()}</div>
                                    <div className="milestone-description">{milestone.description}</div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* The Strategy */}
                <motion.div 
                    className="strategy-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="strategy-title">
                        <FiZap /> The Exponential Strategy
                    </h3>
                    <div className="strategy-flow">
                        <div className="strategy-step">
                            <div className="step-number">1</div>
                            <div className="step-content">
                                <h4>Transparent Crowdfunding</h4>
                                <p>Community sees exactly what funds are needed and why</p>
                            </div>
                        </div>
                        <div className="strategy-arrow">→</div>
                        <div className="strategy-step">
                            <div className="step-number">2</div>
                            <div className="step-content">
                                <h4>Game Downloads Surge</h4>
                                <p>People verify the tech is legit by downloading the game</p>
                            </div>
                        </div>
                        <div className="strategy-arrow">→</div>
                        <div className="strategy-step">
                            <div className="step-number">3</div>
                            <div className="step-content">
                                <h4>Support Purchase</h4>
                                <p>Players buy small amounts to support the launch</p>
                            </div>
                        </div>
                        <div className="strategy-arrow">→</div>
                        <div className="strategy-step">
                            <div className="step-number">4</div>
                            <div className="step-content">
                                <h4>Official Launch</h4>
                                <p>$5K wallet value → Dev sells → Treasury funded → GCM launches on Raydium! 🚀</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* About the Developer */}
                <motion.div 
                    className="developer-story-section"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="developer-story-card">
                        <h3 className="developer-story-title">
                            <FiTarget /> About the Developer: Why Your Support Matters
                        </h3>
                        <div className="developer-story-content">
                            <div className="story-text">
                                <p><strong>I'm a laid-off developer fighting to keep my dreams alive.</strong></p>
                                <p>
                                    My name is <strong>Tanner</strong>, a fully doxxed full-stack developer with expertise in modern web technologies. 
                                    All my professional businesses are attached to my portfolio site - I'm completely transparent and not up to anything fishy.
                                    After being laid off, I've been bootstrapping GCM while barely making ends meet.
                                </p>
                                <p>
                                    <strong>The reality:</strong> I'm scared. Every day feels like I'm one step closer to losing everything I've worked for. 
                                    The rent is due, the bills keep coming, and I'm pouring every ounce of energy into making GCM a success 
                                    because I believe in this vision of transparent, community-driven GameFi.
                                </p>
                                <p>
                                    <strong>This fundraiser is my absolute last option.</strong> If $GCMF cannot raise the required treasury funds, 
                                    then $GCM will never exist and this entire project dies. I'm not being dramatic - this is the reality. 
                                    But there's hope: $GCMF will have long-term support as our third game will be built on it, creating lasting value.
                                </p>
                                <p>
                                    <strong>This isn't just about a token launch</strong> - it's about proving that an indie developer can create something 
                                    meaningful with community support. Your participation in this fundraiser could literally save my home 
                                    and help birth the next generation of ethical blockchain gaming.
                                </p>
                            </div>
                            <div className="portfolio-plug">
                                <div className="portfolio-card">
                                    <h4>🎯 Check Out My Work</h4>
                                    <p>See my full development portfolio, all professional businesses, and complete transparency:</p>
                                    <a 
                                        href="https://osknyo.com" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="portfolio-link"
                                    >
                                        <FiExternalLink />
                                        osknyo.com
                                    </a>
                                    <div className="skills-tags">
                                        <span className="skill-tag">TypeScript</span>
                                        <span className="skill-tag">Next.js</span>
                                        <span className="skill-tag">React</span>
                                        <span className="skill-tag">Unity</span>
                                        <span className="skill-tag">Blockchain</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="urgency-note">
                            <p>
                                <strong>🚨 This is it - the final stand.</strong> We need to reach 250k market cap for the dev to sell 2% and fund the $5K treasury. 
                                Once this target is hit, the dev WILL dump their holdings - but the chart can keep rising with 98% supply in community hands. 
                                If we fail, $GCM dies and the project ends. This is our absolute last chance.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div 
                    className="cta-section"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="cta-content">
                        <h3>Ready to be part of the GCM launch? 🚀</h3>
                        <p>Download the game, verify the tech, and join the crowdfunding movement!</p>
                        <div className="cta-buttons">
                            <a 
                                href="#community"
                                className="cta-btn primary"
                            >
                                <FiExternalLink />
                                Download Game
                            </a>
                            <button 
                                onClick={() => copyToClipboard(contractAddress)}
                                className={`cta-btn secondary ${copied ? 'copied' : ''}`}
                            >
                                <FiCopy />
                                {copied ? 'Copied!' : 'Copy Contract'}
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default UIFundraiserSection; 