import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCopy, FiExternalLink, FiTarget, FiTrendingUp, FiStar, FiZap, FiArrowUpCircle, FiAward, FiLock, FiUsers, FiGift } from 'react-icons/fi';
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
                                <p><strong>THE REALITY:</strong> If we cannot raise the required treasury funds with $GCMF, then $GCM will never exist and the entire project will die. I'd rather receive donations through GoFundMe, but I know nobody will donate there - so $GCMF is the best idea I had. This fundraiser is an absolute last option - not being dramatic, just the truth.</p>
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

                {/* Founders NFT Section */}
                <motion.div 
                    className="founders-nft-section"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="founders-nft-card">
                        <div className="founders-nft-header">
                            <div className="founders-badge">
                                <FiAward className="founders-badge-icon" />
                                <span>EXCLUSIVE FOUNDERS NFT LINE</span>
                            </div>
                            <h3 className="founders-nft-title">
                                🚀 Introducing: $GCMF Founders NFTs
                            </h3>
                            <p className="founders-nft-subtitle">
                                Exclusive NFTs that add massive utility to $GCMF while propelling us past our 250k MC goal! (All details are TBD as I want to ensure the community will push for NFT's before I spend a bunch of time developing them)
                            </p>
                        </div>

                        <div className="founders-nft-content">
                            <div className="nft-launch-trigger">
                                <div className="trigger-badge">
                                    <FiTarget />
                                    <span>LAUNCH TRIGGER</span>
                                </div>
                                <div className="trigger-details">
                                    <div className="trigger-amount">100k MC STABLE</div>
                                    <div className="trigger-description">
                                        Once we hit and maintain 100k market cap as a support level, the Founders NFT line production, development, and launch will start. 
                                        This should motivate everyone to buy and hold NOW to raise the floor.
                                    </div>
                                </div>
                            </div>

                            <div className="nft-details-grid">
                                <div className="nft-detail-card">
                                    <div className="nft-detail-icon">
                                        <FiGift />
                                    </div>
                                    <h4>NFT Supply & Price</h4>
                                    <ul>
                                        <li><strong>600-800 Total Supply</strong> (Limited & Exclusive)</li>
                                        <li><strong>0.1-0.5 SOL</strong> per mint (Final details TBD)</li>
                                        <li><strong>Minted on Solana</strong> for low fees & fast transactions</li>
                                    </ul>
                                </div>

                                <div className="nft-detail-card">
                                    <div className="nft-detail-icon">
                                        <FiTrendingUp />
                                    </div>
                                    <h4>Revenue Distribution</h4>
                                    <ul>
                                        <li><strong>80% → $GCMF Buyback & Burn</strong> (Propels price up!)</li>
                                        <li><strong>20% → Marketing Wallet</strong> (Funds project growth)</li>
                                        <li><strong>Direct path to 250k+ MC</strong> through burns</li>
                                    </ul>
                                </div>

                                <div className="nft-detail-card exclusive">
                                    <div className="nft-detail-icon">
                                        <FiLock />
                                    </div>
                                    <h4>Exclusive Founder Benefits</h4>
                                    <ul>
                                        <li><strong>Founder-Only Games</strong> & Features</li>
                                        <li><strong>Private Discord Channels</strong> & Roles</li>
                                        <li><strong>Community Leadership</strong> Recognition</li>
                                        <li><strong>Early Access</strong> to all future releases</li>
                                        <li><strong>Whitelist Access</strong> to partner NFT drops at special prices</li>
                                        <li><strong>FREE Airdrops</strong> of future in-game cosmetic NFTs (Founder exclusives/When Applicable)</li>
                                        <li><strong>Special GCM Perks</strong> - Founders may find their mining experience... enhanced 👑✨</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="nft-strategy-flow">
                                <h4 className="strategy-flow-title">
                                    <FiZap /> The NFT Strategy: Exponential Growth Loop
                                </h4>
                                <div className="nft-flow-steps">
                                    <div className="nft-flow-step">
                                        <div className="flow-step-number">1</div>
                                        <div className="flow-step-content">
                                            <h5>Buy & Hold $GCMF</h5>
                                            <p>Push to 100k MC stable to trigger NFT launch</p>
                                        </div>
                                    </div>
                                    <div className="flow-arrow">→</div>
                                    <div className="nft-flow-step">
                                        <div className="flow-step-number">2</div>
                                        <div className="flow-step-content">
                                            <h5>Founders NFTs Launch</h5>
                                            <p>600-800 exclusive NFTs mint at 0.1-0.5 SOL</p>
                                        </div>
                                    </div>
                                    <div className="flow-arrow">→</div>
                                    <div className="nft-flow-step">
                                        <div className="flow-step-number">3</div>
                                        <div className="flow-step-content">
                                            <h5>80% SOL → $GCMF Burns</h5>
                                            <p>Massive buyback & burn propels price to 250k+ MC</p>
                                        </div>
                                    </div>
                                    <div className="flow-arrow">→</div>
                                    <div className="nft-flow-step">
                                        <div className="flow-step-number">4</div>
                                        <div className="flow-step-content">
                                            <h5>Treasury Funded</h5>
                                            <p>Dev "dumps" 2% at 250k+ MC → GCM launches! 🚀</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="founders-cta">
                                <div className="founders-cta-content">
                                    <h4>🔥 Ready to Become a Founder?</h4>
                                    <p>
                                        The earlier you get in, the better your position. Buy $GCMF now to help trigger the NFT launch at 100k MC, 
                                        then secure your Founder status with exclusive NFTs that will burn tokens and drive us to victory!
                                    </p>
                                    <div className="founders-benefits-tags">
                                        <span className="benefit-tag">
                                            <FiAward /> Founder Status
                                        </span>
                                        <span className="benefit-tag">
                                            <FiLock /> Exclusive Access
                                        </span>
                                        <span className="benefit-tag">
                                            <FiTrendingUp /> Price Appreciation
                                        </span>
                                        <span className="benefit-tag">
                                            <FiUsers /> Community Leadership
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
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