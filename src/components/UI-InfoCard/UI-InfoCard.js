import React from 'react';
import { motion } from 'framer-motion';
import './UI-InfoCard.css';

const UIInfoCard = ({ icon, title, children }) => {
    return (
        <motion.div 
            className="info-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
        >
            <div className="info-card-icon">{icon}</div>
            <h4 className="text-2xl font-bold text-white mb-3">{title}</h4>
            <div className="text-slate-300">{children}</div>
        </motion.div>
    );
};

export default UIInfoCard; 
 