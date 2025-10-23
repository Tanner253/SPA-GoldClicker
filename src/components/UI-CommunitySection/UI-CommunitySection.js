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
                    <p className="community-milestone-text">
                        🎉 <strong>Major Milestone:</strong> iOS testers are now actively mining gold on their devices! With 2,150+ downloads achieved (1.8K Android, 350 iOS) and $GCM NOW LIVE AND TRADING, we've entered the growth phase of mobile gaming and DeFi integration. Join the revolution that's reshaping the industry!
                    </p>
                </div>

                {/* Hype Section */}
                <div className="hype-section">
                    <div className="hype-item">
                        <span className="hype-value">$1,000+</span>
                        <span className="hype-label">Risk-Free Revenue Reinvested</span>
                    </div>
                    <div className="hype-item">
                        <span className="hype-value">2,150+</span>
                        <span className="hype-label">Downloads Achieved</span>
                    </div>
                    <div className="hype-item">
                        <span className="hype-value">iOS + Android</span>
                        <span className="hype-label">Now Testing on Both Platforms</span>
                    </div>
                    <div className="hype-item">
                        <span className="hype-value">LIVE! 🚀</span>
                        <span className="hype-label">$GCM IS NOW TRADING!</span>
                    </div>
                </div>

                <div className="community-main-content">
                    {/* Left Side - CTA */}
                    <div className="community-cta-card">
                        <div className="cta-header">
                            <h3>Start mining $GCM today!</h3>
                            <p>🚀 <strong>MAJOR MILESTONE:</strong> Gold Clicker Mining is officially launched on Android with iOS TestFlight now live! $GCM TOKEN IS NOW TRADING! Be among the pioneers on both platforms, shaping the future of the game, and earning real $GCM tokens!</p>
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
                                <span>Download on App Store!</span>
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
                                <a href="https://t.me/Gold_Clicker_Mining" target="_blank" rel="noopener noreferrer" className="stat-item">
                                    <FaTelegramPlane className="stat-icon" />
                                    <div className="stat-info">
                                        <span className="stat-value">Join Now!</span>
                                        <span className="stat-label">Telegram</span>
                                    </div>
                                </a>
                                <a href="https://discord.gg/mvbx7J295m" target="_blank" rel="noopener noreferrer" className="stat-item">
                                    <FaDiscord className="stat-icon discord" />
                                    <div className="stat-value">50+</div>
                                    <div className="stat-label">Discord Users</div>
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=com.osknyo.CryptonClicker" target="_blank" rel="noopener noreferrer" className="stat-item">
                                    <FaUserPlus className="stat-icon testers" />
                                    <div className="stat-value">2,150+</div>
                                    <div className="stat-label">Total Downloads</div>
                                </a>
                                <a href="https://x.com/GCM_SOL" target="_blank" rel="noopener noreferrer" className="stat-item">
                                    <FiX className="stat-icon x" />
                                    <div className="stat-value">600+</div>
                                    <div className="stat-label">Followers on X</div>
                                </a>
                            </div>
                        </div>
                        {/* Commented out GoFundMe support card */}
                        <div className="support-card">
                            <h4>🎉 GCM Token IS LIVE!</h4>
                            <p><strong>Strategic Roadmap:</strong> With iOS TestFlight live, Android officially launched, and $GCM now trading, we're executing the growth phase: expanding our player base, increasing token burns through gameplay, and building the complete gaming economy ecosystem!</p>
                            
                            {/* GoFundMe Widget */}
                            <div className="gofundme-widget-container">
                                <GoFundMeWidget />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="community-socials">
                    <h3 className="socials-title">Follow the Journey</h3>
                    <div className="social-links">
                        <a href="https://t.me/Gold_Clicker_Mining" target="_blank" rel="noopener noreferrer" className="social-link telegram">
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
                        <a href="https://www.tiktok.com/@osknyo" target="_blank" rel="noopener noreferrer" className="social-link tiktok">
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
                                <span>Download on iOS!</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UICommunitySection;
