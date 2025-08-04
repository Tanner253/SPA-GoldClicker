import React from 'react';
import { FiArrowDown } from 'react-icons/fi';
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
                    <motion.p
                        className="text-lg md:text-xl max-w-2xl mb-6"
                        variants={itemVariants}
                    >
                        The only risk free growing asset on solana. Click, earn, and watch
                        your fortune grow.
                    </motion.p>
                    <motion.div
                        className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-4 max-w-3xl mx-auto mb-4"
                        variants={itemVariants}
                    >
                        <p className="text-white font-semibold text-center">
                            🎉 <strong>MAJOR UPDATE:</strong> iOS Testing Now Live! • 1000+ Downloads Achieved • GCM Launch Imminent
                        </p>
                    </motion.div>
                </motion.div>

                {/* Scroll Down Button Footer */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20">
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