import React, { useState } from 'react';
import { FiMenu, FiX, FiTrendingUp } from 'react-icons/fi';
import './UI-Navbar.css';

const UINavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const storeUrl = "https://play.google.com/store/apps/details?id=com.osknyo.CryptonClicker";

    const leftNavLinks = [
        { title: 'Home', url: '#home' },
        { title: 'Live Chart', url: '#live-chart' },
    ];

    const rightNavLinks = [
        { title: 'Tokenomics', url: '#tokenomics' },
        { title: 'Community', url: '#community' },
    ];
    
    const allNavLinks = [...leftNavLinks, { title: 'The Game', url: '#the-game'}, ...rightNavLinks, { title: 'Fundraiser Chart', url: '#fundraiser-chart' }];

    return (
        <nav className="ui-navbar sticky top-0 left-0 w-full z-50">
            <div className="nav-container container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top-left icon and website URL - Desktop only */}
                <div className="top-left-section">
                    <div className="top-left-icon">
                        <a href={storeUrl} target="_blank" rel="noopener noreferrer">
                            <img src={process.env.PUBLIC_URL + '/images/icon.png'} alt="Gold Clicker Game Icon" className="h-12 w-12" />
                        </a>
                    </div>
       
                </div>

                <div className="flex items-center justify-between h-20">
                    {/* Logo for mobile, hidden on desktop */}
                    <div className="flex-shrink-0 md:hidden">
                         <a href="#home" className="text-white text-2xl font-bold">
                            $GCM
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex justify-center items-center w-full">
                        <div className="flex items-center space-x-4">
                            {leftNavLinks.map((link, index) => (
                                <a key={index} href={link.url} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    {link.title}
                                </a>
                            ))}
                        </div>
                        <div className="central-logo-link mx-8">
                            <a href="#the-game" className="flex flex-col items-center text-white font-bold">
                                <img src={process.env.PUBLIC_URL + '/images/icon.png'} alt="The Game" className="h-10 w-10 mb-1 central-icon" />
                                <span>The Game</span>
                            </a>
                        </div>
                        <div className="flex items-center space-x-4">
                             {rightNavLinks.map((link, index) => (
                                <a key={index} href={link.url} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    {link.title}
                                </a>
                            ))}
                            {/* Exciting Fundraiser Chart Button */}
                            <a href="#fundraiser-chart" className="fundraiser-chart-btn">
                                <FiTrendingUp className="fundraiser-chart-icon" />
                                <span className="fundraiser-chart-text">Fundraiser Chart</span>
                                <div className="fundraiser-chart-glow"></div>
                            </a>
                        </div>
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? <FiX className="block h-6 w-6" /> : <FiMenu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {allNavLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                className={`${link.title === 'Fundraiser Chart' ? 'fundraiser-chart-mobile' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} block px-3 py-2 rounded-md text-base font-medium`}
                                onClick={toggleMenu}
                            >
                                {link.title === 'Fundraiser Chart' && <FiTrendingUp className="inline mr-2" />}
                                {link.title}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default UINavbar; 