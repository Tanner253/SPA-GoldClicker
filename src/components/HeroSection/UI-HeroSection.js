import React from 'react';
import { FiArrowDown, FiClock, FiTrendingUp, FiDownload, FiDollarSign } from 'react-icons/fi';
import { motion } from 'framer-motion';
import UIHeroBackground from './UI-HeroBackground';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4,
        },
    },
};

const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            type: 'spring',
            stiffness: 100,
            damping: 10,
        },
    },
};

const UIHeroSection = () => {
    const scrollToContent = () => {
        const heroElement = document.getElementById('home');
        if (heroElement) {
            window.scrollTo({
                top: heroElement.offsetHeight,
                behavior: 'smooth',
            });
        }
    };

    return (
        <>
            <div
                className="relative overflow-hidden"
                id="home"
                style={{ height: 'calc(100vh - 5rem)' }}
            >
                {/* Background is positioned absolutely to fill the container */}
                <div className="absolute inset-0 z-0">
                    <UIHeroBackground />
                </div>
                {/* Hero Content */}
                <motion.div
                    className="relative z-10 flex flex-col items-center text-white text-center px-4 pt-28"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold leading-tight mb-4"
                        variants={itemVariants}
                    >
                        Welcome to Gold Clicker Mining $GCM
                    </motion.h1>
                    
                    {/* Compact Stats Badges */}
                    <motion.div
                        className="flex flex-wrap items-center justify-center gap-3 mb-4"
                        variants={itemVariants}
                    >
                        <div className="stat-badge">
                            <FiDownload className="stat-badge-icon" />
                            <span className="stat-badge-value">1.8K</span>
                            <span className="stat-badge-label">Android</span>
                            <span className="stat-badge-change positive">+78%</span>
                        </div>
                        <div className="stat-badge">
                            <FiDownload className="stat-badge-icon" />
                            <span className="stat-badge-value">350</span>
                            <span className="stat-badge-label">iOS</span>
                        </div>
                        <div className="stat-badge">
                            <FiTrendingUp className="stat-badge-icon" />
                            <span className="stat-badge-value">+30%</span>
                            <span className="stat-badge-label">Revenue</span>
                        </div>
                        <div className="stat-badge">
                            <FiDollarSign className="stat-badge-icon" />
                            <span className="stat-badge-value">POSITIVE</span>
                            <span className="stat-badge-label">Profitable</span>
                        </div>
                    </motion.div>
                    
                    <motion.div
                        className="flex items-center justify-center gap-2 text-slate-400 text-sm mb-4"
                        variants={itemVariants}
                    >
                        <FiClock className="w-4 h-4" />
                        <span>2.5 minute read</span>
                    </motion.div>
                    <motion.p
                        className="text-lg md:text-xl max-w-2xl mb-6"
                        variants={itemVariants}
                    >
                        The only risk free growing asset on solana. Click, earn, and watch
                        your fortune grow.
                    </motion.p>

                    {/* Key Info Grid Layout */}
                    <div className="hero-info-grid">
                        <motion.div
                            className="hero-personal-note"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.8 }}
                            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
                        >
                            <p className="personal-note-text">
                                I am a laid off software engineer who is about to lose everything. I have built real tech, on chain, doxxed for the past 8 months. I have built something really special. all I ask is for 5 mins of your time to read what ive built, and maybe download and play the game for yourself. I really, really appreciate your time.
                            </p>
                        </motion.div>
                        
                        <motion.div
                            className="hero-info-item item-1"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                            viewport={{ once: true, amount: 0.8 }}
                            transition={{ type: 'spring', stiffness: 100, delay: 0 }}
                        >
                            <p className="hero-info-text">GCM is a free to play game, where players can earn memecoin through gameplay. P2E</p>
                        </motion.div>
                        
                        <motion.div
                            className="hero-info-item item-2"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                            viewport={{ once: true, amount: 0.8 }}
                            transition={{ type: 'spring', stiffness: 100, delay: 0.15 }}
                        >
                            <p className="hero-info-text">Players must onboard to solana to recieve earned memecoin.</p>
                        </motion.div>
                        
                        <motion.div
                            className="hero-info-item item-3"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                            viewport={{ once: true, amount: 0.8 }}
                            transition={{ type: 'spring', stiffness: 100, delay: 0.3 }}
                        >
                            <p className="hero-info-text">As long as there are players playing the game the chart will increase in value</p>
                        </motion.div>
                        
                        <motion.div
                            className="hero-info-item item-4"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                            viewport={{ once: true, amount: 0.8 }}
                            transition={{ type: 'spring', stiffness: 100, delay: 0.45 }}
                        >
                            <p className="hero-info-text">There are over 6b normies with cellphones, that is a lot of potential people to onboard.</p>
                        </motion.div>
                        
                        <motion.div
                            className="hero-pfp-container"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.8 }}
                            transition={{ type: 'spring', stiffness: 100, delay: 0.5 }}
                        >
                            <img 
                                src={process.env.PUBLIC_URL + '/images/pfp.jpg'} 
                                alt="Developer Profile" 
                                className="hero-pfp-image"
                            />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Scroll Down Button Footer */}
                <div className="absolute bottom-5 md:bottom-5 left-1/2 -translate-x-1/2 z-20 hero-scroll-button">
                    <button
                        onClick={scrollToContent}
                        className="bg-black bg-opacity-70 backdrop-blur-md border border-white/20 rounded-full px-8 py-3 flex flex-col items-center text-white animate-bounce hover:bg-opacity-80 transition-all duration-300"
                        aria-label="Scroll down"
                    >
                        <span className="text-sm">Start Mining $GCM!</span>
                        <FiArrowDown className="w-6 h-6 mt-1" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default UIHeroSection; 