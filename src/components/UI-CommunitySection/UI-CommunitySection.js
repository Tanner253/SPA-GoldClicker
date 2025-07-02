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
                        The mines are open, and the gold rush is ON! Be among the first to stake your claim.
                    </p>
                </div>

                {/* Hype Section */}
                <div className="hype-section">
                    <div className="hype-item">
                        <span className="hype-value">$1,000+</span>
                        <span className="hype-label">Risk-Free Revenue Reinvested</span>
                    </div>
                    <div className="hype-item">
                        <span className="hype-value">300+</span>
                        <span className="hype-label">Player Installs & Growing</span>
                    </div>
                    <div className="hype-item">
                        <span className="hype-value">Worldwide</span>
                        <span className="hype-label">Players in Every Region</span>
                    </div>
                    <div className="hype-item">
                        <span className="hype-value">3 Weeks</span>
                        <span className="hype-label">Until Official $GCM Launch</span>
                    </div>
                </div>

                <div className="community-main-content">
                    {/* Left Side - CTA */}
                    <div className="community-cta-card">
                        <div className="cta-header">
                            <h3>Become an Early Pioneer!</h3>
                            <p>Open testing is now LIVE. Your feedback will shape the future of the game and be among the first to experience new features, hunt for bugs, and help shape the future of Gold Clicker Mining!</p>
                        </div>
                        <div className="cta-buttons-container">
                            <a href="https://play.google.com/store/apps/details?id=com.osknyo.CryptonClicker" target="_blank" rel="noopener noreferrer" className="cta-button google-play-button">
                                <FaGooglePlay className="button-icon" />
                                <span>Download & Play Now!</span>
                                <div className="shine-effect"></div>
                            </a>
                            <div className="coming-soon-ios">
                                <FaApple className="button-icon" />
                                <span>Coming to iOS</span>
                            </div>
                        </div>
                        <div className="cta-perks">
                            <h4>Early Tester Perks:</h4>
                            <ul>
                                <li>Directly influence game development.</li>
                                <li>Exclusive access to pre-release features.</li>
                                <li>Earn a special "Pioneer" role in our community.</li>
                                <li>Be part of a tight-knit group of core players.</li>
                            </ul>
                        </div>
                        <UIMintFeed />
                    </div>

                    {/* Right Column Wrapper */}
                    <div className="community-right-column">
                        <div className="community-stats-card">
                            <h4>Community Strength</h4>
                            <div className="stats-grid">
                                <a href="https://t.me/GCMOfficialPortal" target="_blank" rel="noopener noreferrer" className="stat-item">
                                    <FaTelegramPlane className="stat-icon telegram" />
                                    <div className="stat-value">300+</div>
                                    <div className="stat-label">Telegram Members</div>
                                </a>
                                <a href="https://discord.gg/mvbx7J295m" target="_blank" rel="noopener noreferrer" className="stat-item">
                                    <FaDiscord className="stat-icon discord" />
                                    <div className="stat-value">50+</div>
                                    <div className="stat-label">Discord Users</div>
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=com.osknyo.CryptonClicker" target="_blank" rel="noopener noreferrer" className="stat-item">
                                    <FaUserPlus className="stat-icon testers" />
                                    <div className="stat-value">300+</div>
                                    <div className="stat-label">Active Testers</div>
                                </a>
                                <a href="https://x.com/GCM_SOL" target="_blank" rel="noopener noreferrer" className="stat-item">
                                    <FiX className="stat-icon x" />
                                    <div className="stat-value">600+</div>
                                    <div className="stat-label">Followers on X</div>
                                </a>
                            </div>
                        </div>
                        <div className="support-card">
                            <GoFundMeWidget />
                        </div>
                    </div>
                </div>

                <div className="community-socials">
                    <h3 className="socials-title">Follow the Journey</h3>
                    <div className="social-links">
                        <a href="https://t.me/GCMOfficialPortal" target="_blank" rel="noopener noreferrer" className="social-link telegram">
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
                            <a href="https://play.google.com/store/apps/details?id=com.osknyo.CryptonClicker" target="_blank" rel="noopener noreferrer" className="social-link tester">
                                <FaGooglePlay />
                                <span>Become a Tester</span>
                            </a>
                            <div className="coming-soon-ios-small">
                                <FaApple />
                                <span>iOS Soon</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UICommunitySection;
