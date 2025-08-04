import React from 'react';
import { FiAward, FiZap, FiGlobe, FiTrendingUp, FiUsers, FiShield, FiRefreshCw, FiMessageSquare, FiDollarSign, FiBarChart2, FiLock, FiUserCheck, FiPlayCircle, FiShoppingCart, FiMonitor, FiBriefcase } from 'react-icons/fi';
import './UI-TheGameSection.css';
import UIActivityFeed from '../UI-ActivityFeed/UI-ActivityFeed';
import UIInfoCard from '../UI-InfoCard/UI-InfoCard';

const UITheGameSection = () => {
    const features = [
        { icon: <FiAward />, title: "Deep Prestige System", description: "Reset your progress to earn permanent powerful boosts and Gold Bars for the Meme Mint. Each prestige unlocks new layers of strategy and accelerates your journey to the top. Aim for Prestige 1000 for the ultimate endgame challenge!" },
        { icon: <FiZap />, title: "Addictive Core Loop", description: "Inspired by clicker classics, enjoy exponential upgrade costs, linear base income with multiplicative upgrades, offline progress, critical clicks, and satisfying event spawns. Easy to learn, hard to master." },
        { icon: <FiGlobe />, title: "Massive Decentralized Distribution", description: "Players earn small, consistent portions of $GCM (1-5 tokens per relevant period/milestone), promoting wide, fair distribution. This approach reduces whale centralization and enhances token legitimacy for a healthier ecosystem." },
        { 
            icon: <FiTrendingUp />, 
            title: "Global Boost System", 
            description: (
                <span>
                    The $GCM token's market performance directly influences your in-game experience.
                    <br/><br/>
                    <strong className="text-green-400">▲ Green Day ($GCM Price Up):</strong> All players receive a Clicks-Per-Second (CPS) boost, scaled by the token's percentage growth. Stakers get an additional, amplified boost!
                    <br/><br/>
                    <strong className="text-red-400">▼ Red Day ($GCM Price Down):</strong> No universal boost. Debuffs might even occur during significant downturns. This mechanic further aligns player interests with the token's success.
                </span>
            )
        },
        { icon: <FiShield />, title: "Risk-Free Sustainable Growth", description: "Unlike other projects, $GCM's value is backed by a real, sustainable revenue stream from ads. This creates a more stable and reliable ecosystem for players." },
        { icon: <FiRefreshCw />, title: "Magic Revenue Loop", description: "For every $1 in value distributed to players via $GCM, the game generates approximately $2 in ad revenue, creating a positive feedback loop for long-term growth." },
        { icon: <FiUsers />, title: "Future: Guild System", description: "(Coming Soon) Form guilds, share strategies, and participate in Guild PvE (boss fights) and PvP (click races with $GCM wagers)." },
        { icon: <FiMessageSquare />, title: "Global Chat", description: "Engage with the entire player base in real-time. Share tips, celebrate achievements, and connect with the community." },
    ];

    return (
        <section id="the-game" className="ui-the-game-section">
            <div className="game-section-container">
                {/* Left Sticky Column */}
                <div className="left-sticky-col">
                    <div className="sticky-content">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What is Gold Clicker Mining?</h2>
                            <div className="prose-lg text-slate-300">
                                <p><strong>Gold Clicker Mining ($GCM)</strong> is not just another clicker game. It's a meticulously crafted experience designed to be genuinely fun, addicting, and rewarding.</p>
                                <p>Inspired by classics like Cookie Clicker and AdVenture Capitalist, $GCM offers exponential idle clicker progression where every click and every upgrade brings you closer to unparalleled virtual wealth. GCM is the first game of many to come to the ARCADE system we are building.</p>
                            </div>

                            <h3 className="text-3xl font-bold text-white mt-10 mb-4">Why Consider $GCM?</h3>
                            <div className="prose-lg text-slate-300">
                                <p>In a world of fleeting trends, Gold Clicker Mining is built for longevity. Unlike typical projects that rely on hype, $GCM's value is directly fueled by a continuous stream of ad revenue from the game.</p>
                                <p>With a massive <strong>80% of net revenue</strong> injected back into the ecosystem, every player's engagement helps strengthen the foundation for the entire community. This creates a self-sustaining model designed for stable, long-term growth—a true blue-chip contender in the making.</p>
                                <p><strong>Next Phase:</strong> Once iOS approval is secured, we'll begin livestreaming and executing strategic treasury fundraising activities. The roadmap is clear: raise funds → launch GCM → establish chart presence → integrate legal framework → deliver the complete ecosystem.</p>
                            </div>

                            {/* Download Now Button */}
                            <div className="mt-8">
                                <button
                                    onClick={() => {
                                        const communitySection = document.getElementById('community');
                                        if (communitySection) {
                                            communitySection.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    className="download-now-btn bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse"
                                >
                                    🚀 Download Now!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Scrollable Column */}
                <div className="right-scroll-col">
                    {/* Gameplay Video */}
                    <div className="content-block">
                        <div className="phone-mockup-wrapper mx-auto">
                            <div className="phone-mockup">
                                <div className="phone-screen">
                                    <video className="gameplay-video" src={process.env.PUBLIC_URL + '/images/demooo.mp4'} controls autoPlay muted loop playsInline />
                                </div>
                            </div>
                            <p className="video-caption mt-2 text-center text-slate-400 text-sm">VERY EARLY DEMO FOOTAGE. Subject to change.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Grid Full-Width Section */}
            <div className="features-full-width">
                <div className="container mx-auto px-4">
                     <h3 className="text-3xl font-bold text-white mb-12 text-center">Core Pillars & Features</h3>
                     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <div className="feature-icon text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                                <p className="text-slate-300">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Key Differentiators Section */}
            <div className="differentiators-section">
                <div className="container mx-auto px-4">
                     <h3 className="text-3xl font-bold text-white mb-12 text-center">How We Stand Out</h3>
                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <UIInfoCard icon={<FiBarChart2 />} title="Player-Centric Economy">
                            A groundbreaking 80% of game revenue is reinvested into the $GCM ecosystem, directly benefiting players and token holders. Your time generates real, shared value.
                        </UIInfoCard>
                         <UIInfoCard icon={<FiDollarSign />} title="True Play-to-Earn & Earn">
                            Earn valuable $GCM tokens through engaging gameplay via the innovative Meme Mint. This isn't just about playing; it's about earning tangible rewards.
                        </UIInfoCard>
                         <UIInfoCard icon={<FiShield />} title="Sustainable Revenue Model">
                            Powered by non-intrusive ads and optional IAPs, our model ensures a continuous revenue stream that fuels $GCM liquidity and game development for long-term stability.
                        </UIInfoCard>
                     </div>
                </div>
            </div>

            {/* Trust & Transparency Section */}
            <div className="trust-section">
                <div className="container mx-auto px-4">
                    <UIInfoCard icon={<FiLock />} title="A New Standard of Trust & Transparency">
                        <p className="max-w-3xl mx-auto">
                            We built Gold Clicker Mining to be different. The ecosystem is structurally designed to be fundamentally transparent and community-first. The developer is fully doxxed, and their revenue is earned from the game's success—not from selling tokens.
                        </p>
                        <p className="max-w-3xl mx-auto mt-4">
                            A massive <strong>80% of ad revenue</strong> is used to purchase $GCM from the open market, which is then distributed to players as in-game rewards. The initial treasury for these rewards is also purchased and locked, with its sole purpose being distribution back to the players. This creates a clear, sustainable, and trustworthy model where everyone wins together.
                        </p>
                    </UIInfoCard>
                </div>
            </div>

            {/* Why Invest Section */}
            <div className="why-invest-section">
                <div className="container mx-auto px-4">
                    <UIInfoCard icon={<FiTrendingUp />} title="Why Invest? The Perpetual Revenue Engine">
                        <p className="max-w-3xl mx-auto">
                            Picture this: millions of players actively engaged in a fun, addictive game. Every ad they watch generates a micro-stream of real, external revenue. This isn't theoretical; it's a functioning, risk-free cash flow pipeline powered by player engagement, not market speculation.
                        </p>
                        <p className="max-w-3xl mx-auto mt-4">
                           A massive 80% of this revenue is then injected directly back into the ecosystem through market buys of $GCM. This creates a powerful, relentless buy pressure that operates 24/7, independent of chart sentiment. Over the next 5-10 years, as the game scales, this mechanism is designed to create a compounding wave of value, consistently pumping the bags of long-term holders. It's a direct investment in a system built for growth.
                        </p>
                    </UIInfoCard>
                </div>
            </div>

            {/* KYC Section */}
            <div className="kyc-section">
                <div className="container mx-auto px-4">
                    <UIInfoCard icon={<FiUserCheck />} title="How We Navigate KYC & Payouts">
                        <p className="max-w-3xl mx-auto">
                            To keep things simple and secure, our game operates in a "crypto-free" environment. You play and earn virtual, in-game rewards called <strong>"GCM Points."</strong> These points have no direct cash value and exist only within the game.
                        </p>
                        <p className="max-w-3xl mx-auto mt-4">
                            When you're ready to convert your "GCM Points" into real `$GCM` tokens, you initiate a withdrawal. You provide us with a recipient address—we don't ask for any personal information. Our game server then tells a completely separate, isolated payout server to send the `$GCM` tokens from our treasury to your address.
                        </p>
                        <p className="max-w-3xl mx-auto mt-4">
                            This separation is key: the game itself never handles cryptocurrency, ensuring compliance and reducing risk. We assume that any user providing a wallet address has already completed the necessary KYC with their own wallet provider.
                        </p>
                        <div className="tldr-box">
                            <p><strong>TL;DR:</strong> You play the game for "GCM Points" (like arcade tickets). When you want to cash out, you give us an address, and our separate, secure payout system sends you actual `$GCM` crypto. The game and the crypto are kept completely separate.</p>
                        </div>
                    </UIInfoCard>
                </div>
            </div>

            {/* Revenue Engine Section */}
            <div className="revenue-engine-section">
                <div className="container mx-auto px-4">
                    <h3 className="text-3xl font-bold text-white mb-4 text-center">Our Revenue Engine</h3>
                    <p className="text-slate-400 max-w-3xl mx-auto text-center mb-12">Our sustainable economic model is designed for massive scalability, where player engagement directly contributes to the ecosystem's growth and transparently reinvests into the $GCM memecoin's liquidity pool.</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="revenue-card">
                            <div className="revenue-icon"><FiPlayCircle /></div>
                            <h4 className="revenue-title">Advertising Revenue</h4>
                            <p className="revenue-description">Players encounter non-intrusive, rewarded advertisements that offer in-game boosts. This is a primary revenue source, ensuring even F2P users contribute to the $GCM liquidity pool.</p>
                        </div>
                        <div className="revenue-card">
                            <div className="revenue-icon"><FiShoppingCart /></div>
                            <h4 className="revenue-title">In-App Purchases (IAPs)</h4>
                            <p className="revenue-description">We offer boosts, time skips, and exclusive cosmetic items. A significant portion of IAP revenue also feeds into the $GCM liquidity, accelerating progress without being P2W.</p>
                        </div>
                        <div className="revenue-card">
                            <div className="revenue-icon"><FiMonitor /></div>
                            <h4 className="revenue-title">Dual App Monetization</h4>
                            <p className="revenue-description">A dual approach: a free, ad-driven version and a premium, ad-free version with an enhanced UX. This caters to all player preferences while maximizing revenue streams.</p>
                        </div>
                        <div className="revenue-card">
                            <div className="revenue-icon"><FiBriefcase /></div>
                            <h4 className="revenue-title">Clicker Object Auction</h4>
                            <p className="revenue-description">(Future) Memecoin projects can bid to have their coin's imagery featured as the clickable in-game object. This auction system generates direct revenue for liquidity and development.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Live Activity Feed */}
            <UIActivityFeed />
        </section>
    );
};

export default UITheGameSection; 
 