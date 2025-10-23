import React from 'react';
import { FaDiscord, FaTelegramPlane, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import DisclaimerBlock from '../DisclaimerBlock/DisclaimerBlock';
import './UI-Footer.css';

const UIFooter = ({ onHireMeClick }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="ui-footer">
            <div className="footer-container">
                <div className="footer-column info-column">
                    <h4 className="footer-heading">About Gold Clicker Mining</h4>
                    <p className="footer-disclaimer">
                        $GCM is a memecoin for a game. Play responsibly. Not financial advice. The chart's longevity is supported by ad revenue, creating a unique economic model.
                    </p>
                    {/* Commented out fundraiser reference */}
                    {/* <div className="bg-slate-800 rounded-lg p-3 mt-4 border-l-4 border-green-500">
                        <p className="text-sm text-slate-300">
                            <strong>🚀 Major Milestone:</strong> iOS TestFlight live, Android officially launched, 1000+ downloads achieved! We're executing the final treasury development phase - $5K target to launch the complete $GCM token ecosystem and activate the full gaming economy.
                        </p>
                    </div> */}
                    <div className="bg-slate-800 rounded-lg p-3 mt-4 border-l-4 border-green-500">
                        <p className="text-sm text-slate-300">
                            <strong>🚀 Major Milestone:</strong> iOS and Android versions are LIVE with 2,150+ downloads achieved (1.8K Android, 350 iOS)! Players are actively mining gold and earning GCM Points. $GCM TOKEN IS NOW LIVE AND TRADING! 🎉
                        </p>
                    </div>
                </div>

                <div className="footer-column links-column">
                    <h3 className="footer-title">Quick Links</h3>
                    <ul>
                        <li><a href="#the-game">The Game</a></li>
                        <li><a href="#tokenomics">Tokenomics</a></li>
                        <li><a href="#community">Community</a></li>
                        <li><a href="https://dexscreener.com/solana/DgjLq7AWAxf6Fn6LeMEdrimZn3kYwke2UJDWwFbUy8wT" target="_blank" rel="noopener noreferrer">Live Chart</a></li>
                        <li><a href="https://tanner253.github.io/crypton-clicker-privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                        <li><a href="https://tanner253.github.io/crypton-clicker-privacy-policy/" target="_blank" rel="noopener noreferrer">Terms of Service</a></li>
                    </ul>
                </div>

                <div className="footer-column contact-column">
                    <h3 className="footer-title">Get In Touch</h3>
                    <div className="social-links-footer">
                        <a href="https://t.me/Gold_Clicker_Mining" target="_blank" rel="noopener noreferrer" aria-label="Telegram"><FaTelegramPlane /></a>
                        <a href="https://discord.gg/mvbx7J295m" target="_blank" rel="noopener noreferrer" aria-label="Discord"><FaDiscord /></a>
                        <a href="https://x.com/GCM_SOL" target="_blank" rel="noopener noreferrer" aria-label="X"><FiX /></a>
                        <a href="https://www.instagram.com/goldclickermining/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                        <a href="https://www.tiktok.com/@osknyo" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><FaTiktok /></a>
                        <a href="https://www.youtube.com/@osknyo" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {currentYear} Gold Clicker Mining ($GCM). All Rights Reserved.</p>
                <button onClick={onHireMeClick} className="hire-me-btn">
                    Looking for a Developer?
                </button>
            </div>
            <DisclaimerBlock type="footer" />
        </footer>
    );
};

export default UIFooter; 