import React, { useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './UI-HeroBackground.css';

const UIHeroBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        console.log('Particles loaded', container);
    }, []);

    const starfieldOptions = useMemo(
        () => ({
            fullScreen: { enable: false },
            zIndex: {
                value: 1,
            },
            background: {
                color: {
                    value: 'transparent',
                },
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: 'bubble',
                    },
                },
                modes: {
                    bubble: {
                        distance: 100,
                        duration: 2,
                        opacity: 0.8,
                        size: 10,
                    },
                },
            },
            particles: {
                color: {
                    value: '#ffffff',
                },
                move: {
                    direction: 'none',
                    enable: true,
                    outModes: 'out',
                    random: false,
                    speed: 0.1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 100,
                },
                opacity: {
                    value: { min: 0.1, max: 0.5 },
                },
                shape: {
                    type: 'circle',
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
        }),
        []
    );

    const fallingParticleOptions = useMemo(
        () => ({
            fullScreen: { enable: false },
            zIndex: {
                value: 8, // Behind the wave (z-index: 9)
            },
            background: {
                color: {
                    value: 'transparent',
                },
            },
            fpsLimit: 60,
            particles: {
                color: {
                    value: '#ffffff',
                },
                move: {
                    direction: 'bottom',
                    enable: true,
                    outModes: 'out',
                    random: true,
                    speed: 2,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 40,
                },
                opacity: {
                    value: { min: 0.2, max: 0.6 },
                },
                shape: {
                    type: 'circle',
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
        }),
        []
    );

    const headerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: headerRef,
        offset: ['start start', 'end start'],
    });

    const rocketY = useTransform(scrollYProgress, [0, 1], ['0%', '-200%']);
    const rocketOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);

    useEffect(() => {
        const updateHeaderHeight = () => {
            if (headerRef.current) {
                headerRef.current.style.height = `${window.innerHeight}px`;
            }
        };

        updateHeaderHeight();
        window.addEventListener('resize', updateHeaderHeight);

        return () => {
            window.removeEventListener('resize', updateHeaderHeight);
        };
    }, []);

    const elementVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: (custom) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: custom.delay,
                duration: 1.5,
                type: 'spring',
                stiffness: 70,
            },
        }),
    };

    return (
        <div className="header" ref={headerRef}>
            <Particles id="starfield" init={particlesInit} loaded={particlesLoaded} options={starfieldOptions} className="h-full w-full absolute top-0 left-0" />
            <Particles id="falling-stars" init={particlesInit} loaded={particlesLoaded} options={fallingParticleOptions} className="h-full w-full absolute top-0 left-0" />
            <div className="wave"></div>
            <motion.div
                className="big-rocket"
                style={{
                    y: rocketY,
                    opacity: rocketOpacity,
                }}
                custom={{ delay: 1.2 }}
                variants={elementVariants}
                initial="hidden"
                animate="visible"
            >
                <img src="https://res.cloudinary.com/rocket-landing-page/image/upload/v1549206065/rock-big.png" alt="" />
            </motion.div>
            <div className="shine">
                <img src="https://res.cloudinary.com/rocket-landing-page/image/upload/v1549206064/shine-2.png" alt="" />
                <img src="https://res.cloudinary.com/rocket-landing-page/image/upload/v1549206064/shine-3.png" alt="" />
                <img src="https://res.cloudinary.com/rocket-landing-page/image/upload/v1549206064/shine-4.png" alt="" />
                <img src="https://res.cloudinary.com/rocket-landing-page/image/upload/v1549206064/shine-5.png" alt="" />
            </div>
            <div className="shine shine-2">
                <img src="https://res.cloudinary.com/rocket-landing-page/image/upload/v1549206064/shine-2.png" alt="" />
                <img src="https://res.cloudinary.com/rocket-landing-page/image/upload/v1549206064/shine-3.png" alt="" />
                <img src="https://res.cloudinary.com/rocket-landing-page/image/upload/v1549206064/shine-4.png" alt="" />
                <img src="https://res.cloudinary.com/rocket-landing-page/image/upload/v1549206064/shine-5.png" alt="" />
            </div>
            <motion.div
                className="moon"
                custom={{ delay: 0.8 }}
                variants={elementVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.img
                    src="https://res.cloudinary.com/rocket-landing-page/image/upload/v1549206064/moon-1.png"
                    alt=""
                    animate={{
                        rotate: [-10, 10, -10],
                        transition: {
                            duration: 5,
                            ease: 'easeInOut',
                            repeat: Infinity,
                        },
                    }}
                />
            </motion.div>
            <motion.div
                className="moon-1"
                custom={{ delay: 1.0 }}
                variants={elementVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.img
                    src="https://res.cloudinary.com/rocket-landing-page/image/upload/v1549206064/moon.png"
                    alt=""
                     animate={{
                        rotateY: [0, 360],
                        transition: {
                            duration: 7,
                            ease: 'linear',
                            repeat: Infinity,
                        },
                    }}
                />
            </motion.div>
        </div>
    );
};

export default UIHeroBackground; 