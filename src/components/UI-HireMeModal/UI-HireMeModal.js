import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiMail, FiCode, FiDatabase, FiCloud, FiTerminal } from 'react-icons/fi';
import { FaReact, FaUnity, FaAws, FaNodeJs, FaHtml5, FaCss3Alt, FaSass, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiDotnet, SiJavascript, SiPostgresql, SiMysql, SiMongodb, SiBlazor, SiUnity } from 'react-icons/si';
import { VscJson } from 'react-icons/vsc';

import './UI-HireMeModal.css';

const SkillCategory = ({ category, items }) => (
    <motion.div
        className="skill-category"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
    >
        <h4 className="skill-category-title">{category}</h4>
        <ul>
            {items.map((item, index) => (
                <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (index * 0.05) }}
                >
                    <span className="skill-icon" style={{ color: item.color }}>{item.icon}</span>
                    <span>{item.name}</span>
                </motion.li>
            ))}
        </ul>
    </motion.div>
);

const UIHireMeModal = ({ isOpen, onClose }) => {
    const modalRef = React.useRef(null);

    useEffect(() => {
        if (isOpen) {
            // Force scroll to top when modal opens
            window.scrollTo(0, 0);
            // Focus the modal when it opens
            setTimeout(() => {
                modalRef.current?.focus();
            }, 100); // Timeout to allow for transition
        }
    }, [isOpen]);

    const skills = {
        "Languages & Frameworks": [
            { name: 'C#', icon: <FiCode />, color: '#9a4993' },
            { name: '.NET', icon: <SiDotnet />, color: '#512bd4' },
            { name: 'JavaScript', icon: <SiJavascript />, color: '#f7df1e' },
            { name: 'React', icon: <FaReact />, color: '#61dafb' },
            { name: 'Node.js', icon: <FaNodeJs />, color: '#68a063' },
            { name: 'Blazor', icon: <SiBlazor />, color: '#512bd4' },
            { name: 'HTML5', icon: <FaHtml5 />, color: '#e34f26' },
            { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572b6' },
            { name: 'SASS', icon: <FaSass />, color: '#c69' },
        ],
        "Databases & ORMs": [
            { name: 'SQL / MSSQL', icon: <FiDatabase />, color: '#cc2927' },
            { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
            { name: 'MySQL', icon: <SiMysql />, color: '#4479a1' },
            { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248' },
            { name: 'Entity Framework', icon: <SiDotnet />, color: '#512bd4' },
            { name: 'ADO.NET', icon: <SiDotnet />, color: '#512bd4' },
        ],
        "Cloud & DevOps": [
            { name: 'AWS', icon: <FaAws />, color: '#ff9900' },
            { name: 'Azure DevOps', icon: <FiCloud />, color: '#0078d7' },
            { name: 'Docker', icon: <FaDocker />, color: '#2496ed' },
            { name: 'Git', icon: <FaGitAlt />, color: '#f05032' },
            { name: 'PowerShell', icon: <FiTerminal />, color: '#5391fe' },
            { name: 'REST API', icon: <VscJson />, color: '#f0f0f0' },
        ],
        "Game Dev & Real-time": [
            { name: 'Unity', icon: <SiUnity />, color: '#ffffff' },
            { name: 'SignalR', icon: <SiDotnet />, color: '#512bd4' },
            { name: 'WebSockets', icon: <FaNodeJs />, color: '#68a063' },
        ]
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="hire-me-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        ref={modalRef}
                        tabIndex="-1"
                        className="hire-me-modal"
                        initial={{ y: "100vh", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "100vh", opacity: 0 }}
                        transition={{ type: "spring", stiffness: 120, damping: 20 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="close-modal-btn" onClick={onClose}><FiX /></button>
                        
                        <div className="modal-header">
                            <h2 className="modal-title">Tanner // Full-Stack Developer</h2>
                            <p className="modal-subtitle">Problem Solver. Builder. Innovator.</p>
                        </div>

                        <div className="modal-content">
                            <div className="elevator-pitch">
                                <p>Full-stack Software Developer with expertise in Object-Oriented Programming (OOP) and microservices architecture, delivering high-performance web applications using .NET ecosystems and JavaScript frameworks. Skilled in multi-tenancy implementation, custom theming, and secure cloud integrations. Background in construction management informs a disciplined approach to scalable, secure, and responsive software development.</p>
                            </div>

                            <div className="skills-grid">
                                <div className="skills-column">
                                    <SkillCategory category="Languages & Frameworks" items={skills["Languages & Frameworks"]} />
                                </div>
                                <div className="skills-column">
                                    <SkillCategory category="Databases & ORMs" items={skills["Databases & ORMs"]} />
                                    <SkillCategory category="Game Dev & Real-time" items={skills["Game Dev & Real-time"]} />
                                </div>
                                <div className="skills-column">
                                    <SkillCategory category="Cloud & DevOps" items={skills["Cloud & DevOps"]} />
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <p>Ready to build something great together?</p>
                            <a href="mailto:GoldClickerMining@gmail.com" className="contact-btn">
                                <FiMail />
                                <span>Contact Me</span>
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default UIHireMeModal; 