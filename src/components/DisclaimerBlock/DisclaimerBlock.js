import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import './DisclaimerBlock.css';

const DisclaimerBlock = ({ type = 'default' }) => {
    return (
        <div className={`disclaimer-container ${type === 'footer' ? 'footer-style' : 'default-style'}`}>
            <div className="container mx-auto px-4">
                <h4 className="text-xl font-bold text-slate-400 mb-4 text-center">
                    <FiAlertTriangle className="inline-block mr-2" />
                    In-Game Items, Currency, and "Memecoin"
                </h4>
                <div className="text-xs text-slate-500 space-y-3 text-center max-w-4xl mx-auto">
                    <p><strong>No Financial Value:</strong> In-Game Items are licensed to you, not sold. They have no monetary or real-world value, are not redeemable or exchangeable for real money or anything of monetary value, and cannot be transferred or sold to anyone else outside of the Game.</p>
                    <p><strong>Not an Investment:</strong> In-Game Items are provided for entertainment purposes only. They are not a cryptocurrency, security, financial instrument, or any form of investment. Participation in the Game does not constitute an investment, and you should have no expectation of profit, income, or any financial return. The Game and its contents do not constitute financial advice.</p>
                    <p><strong>No Guarantees:</strong> We make absolutely no promises or guarantees regarding the value, availability, or continued existence of any In-Game Items. We reserve the right to modify, manage, control, or eliminate In-Game Items at our sole discretion, and we will have no liability to you or any third party for the exercise of such rights.</p>
                </div>
                <div className="mt-6 text-center">
                    <a href="https://tanner253.github.io/crypton-clicker-privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white underline">
                        Read the full Terms of Service & Privacy Policy
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DisclaimerBlock; 