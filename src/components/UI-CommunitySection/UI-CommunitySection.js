import React from 'react';
import './UI-CommunitySection.css';
import { FaDiscord, FaTelegramPlane, FaGooglePlay, FaUserPlus, FaApple, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { FiX } from "react-icons/fi";
import GoFundMeWidget from '../GoFundMeWidget/GoFundMeWidget';
import UIMintFeed from '../UI-MintFeed/UIMintFeed'; // Import the new component

const UICommunitySection = () => {

    return (
        <section id="community" className="ui-community-section">
            <div className="community-container">
                <div className="community-header">
                    <h2 className="community-title">Join the Gold Clicker Revolution!</h2>
                    <p className="community-subtitle">
                        🎉 <strong>Major Milestone:</strong> iOS testers are now actively mining gold on their devices! With 1000+ downloads achieved and iOS publication imminent, we're entering the final phase before the official $GCM token launch. Join the revolution that's about to reshape mobile gaming and DeFi!
                    </p>
                </div>

                {/* Hype Section */}
                <div className="hype-section">
                    <div className="hype-item">
                        <span className="hype-value">$1,000+</span>
                        <span className="hype-label">Risk-Free Revenue Reinvested</span>
                    </div>
                    <div className="hype-item">
                        <span className="hype-value">1000+</span>
                        <span className="hype-label">Downloads Achieved</span>
                    </div>
                    <div className="hype-item">
                        <span className="hype-value">iOS + Android</span>
                        <span className="hype-label">Now Testing on Both Platforms</span>
                    </div>
                    <div className="hype-item">
                        <span className="hype-value">Soon™</span>
                        <span className="hype-label">$GCM Launch Pending iOS Approval</span>
                    </div>
                </div>

                <div className="community-main-content">
                    {/* Left Side - CTA */}
                    <div className="community-cta-card">
                        <div className="cta-header">
                            <h3>Start mining $GCM today!</h3>
                            <p>🚀 <strong>MAJOR MILESTONE:</strong> Gold Clicker Mining is officially launched on Android with iOS TestFlight now live! Be among the pioneers testing on both platforms, shaping the future of the game, and experiencing new features before anyone else!</p>
                        </div>
                        <div className="cta-buttons-container">
                            <a href="https://play.google.com/store/apps/details?id=com.osknyo.CryptonClicker" target="_blank" rel="noopener noreferrer" className="cta-button google-play-button">
                                <FaGooglePlay className="button-icon" />
                                <span>Download & Play Now!</span>
                                <div className="shine-effect"></div>
                                <div className="pulse-glow"></div>
                            </a>
                            <a href="https://testflight.apple.com/join/YJAajCq6" target="_blank" rel="noopener noreferrer" className="cta-button ios-button">
                                <FaApple className="button-icon" />
                                <span>Test on iOS Now!</span>
                                <div className="shine-effect"></div>
                                <div className="ios-glow"></div>
                            </a>
                        </div>
                        <div className="cta-perks">
                            <h4>Player Benefits:</h4>
                            <ul>
                                <li>Shape the future of Gold Clicker Mining development.</li>
                                <li>First access to new features and updates.</li>
                                <li>Earn exclusive "Pioneer" status in our community.</li>
                                <li>Join the core community of dedicated miners.</li>
                            </ul>
                        </div>
                        <UIMintFeed />
                    </div>

                    {/* Right Column Wrapper */}
                    <div className="community-right-column">
                        <div className="community-stats-card">
                            <h4>Community Strength</h4>
                            <div className="stats-grid">
                                <a href="https://t.me/+2VC4-Yay9WczN2Rh" target="_blank" rel="noopener noreferrer" className="stat-item">
                                    <FaTelegramPlane className="stat-icon telegram" />
                                    <div className="stat-value">500+</div>
                                    <div className="stat-label">Telegram Members</div>
                                </a>
                                <a href="https://discord.gg/mvbx7J295m" target="_blank" rel="noopener noreferrer" className="stat-item">
                                    <FaDiscord className="stat-icon discord" />
                                    <div className="stat-value">50+</div>
                                    <div className="stat-label">Discord Users</div>
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=com.osknyo.CryptonClicker" target="_blank" rel="noopener noreferrer" className="stat-item">
                                    <FaUserPlus className="stat-icon testers" />
                                    <div className="stat-value">1000+</div>
                                    <div className="stat-label">Total Downloads</div>
                                </a>
                                <a href="https://x.com/GCM_SOL" target="_blank" rel="noopener noreferrer" className="stat-item">
                                    <FiX className="stat-icon x" />
                                    <div className="stat-value">600+</div>
                                    <div className="stat-label">Followers on X</div>
                                </a>
                            </div>
                        </div>
                        <div className="support-card">
                            <h4>🚀 GCM Token Launch Initiative</h4>
                            <p><strong>Treasury Development Phase:</strong> We're raising $5,000 to establish the official $GCM token treasury and complete the ecosystem infrastructure. This funding will create the token chart, establish market liquidity, and implement the legal compliance framework for seamless in-game token distribution and player withdrawals.</p>
                            <p className="mb-4"><strong>Strategic Roadmap:</strong> With iOS TestFlight live and Android officially launched, we're executing the final phase: community-driven treasury building through strategic CMINER activities, leading directly to GCM token launch and full ecosystem activation. Every contribution accelerates our path to delivering the complete gaming economy.</p>
                            <GoFundMeWidget />
                        </div>
                    </div>
                </div>

                <div className="community-socials">
                    <h3 className="socials-title">Follow the Journey</h3>
                    <div className="social-links">
                        <a href="https://t.me/+2VC4-Yay9WczN2Rh" target="_blank" rel="noopener noreferrer" className="social-link telegram">
                            <FaTelegramPlane />
                            <span>Telegram</span>
                        </a>
                        <a href="https://discord.gg/mvbx7J295m" target="_blank" rel="noopener noreferrer" className="social-link discord">
                            <FaDiscord />
                            <span>Discord</span>
                        </a>
                        <a href="https://x.com/GCM_SOL" target="_blank" rel="noopener noreferrer" className="social-link x">
                            <FiX />
                            <span>Follow on X</span>
                        </a>
                        <a href="https://www.instagram.com/goldclickermining/" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                            <FaInstagram />
                            <span>Instagram</span>
                        </a>
                        <a href="https://www.tiktok.com/@goldclickermining?lang=en" target="_blank" rel="noopener noreferrer" className="social-link tiktok">
                            <FaTiktok />
                            <span>TikTok</span>
                        </a>
                        <a href="https://www.youtube.com/@osknyo" target="_blank" rel="noopener noreferrer" className="social-link youtube">
                            <FaYoutube />
                            <span>YouTube</span>
                        </a>
                        <div className="tester-button-container">
                            <a href="https://play.google.com/store/apps/details?id=com.osknyo.CryptonClicker" target="_blank" rel="noopener noreferrer" className="social-link tester android">
                                <FaGooglePlay />
                                <span>Play Now!</span>
                            </a>
                            <a href="https://testflight.apple.com/join/YJAajCq6" target="_blank" rel="noopener noreferrer" className="social-link tester ios">
                                <FaApple />
                                <span>Test on iOS!</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UICommunitySection;
