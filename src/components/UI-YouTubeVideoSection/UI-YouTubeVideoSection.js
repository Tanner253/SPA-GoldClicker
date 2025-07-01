import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import './UI-YouTubeVideoSection.css';

const UIYouTubeVideoSection = () => {
    return (
        <section className="ui-youtube-section">
            <div className="container mx-auto px-4">
                <h2 className="section-title text-3xl font-bold text-white mb-8 text-center">
                    Project Dev Log & Updates
                </h2>
                <div className="video-container">
                    <iframe
                        src="https://www.youtube.com/embed/ePr4YkljDN4?si=s_Y6NX1HxR3jcWCW&autoplay=1&mute=1"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="subscribe-button-container text-center mt-8">
                    <a
                        href="https://www.youtube.com/@osknyo?sub_confirmation=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="subscribe-btn"
                    >
                        <FaYoutube className="mr-2" />
                        Subscribe on YouTube
                    </a>
                </div>
            </div>
        </section>
    );
};

export default UIYouTubeVideoSection; 