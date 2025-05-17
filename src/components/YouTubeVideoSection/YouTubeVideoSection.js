import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import './YouTubeVideoSection.css';

const YouTubeVideoSection = () => {
  const videoSrc = "https://www.youtube.com/embed/L5TL1BW_UzY?si=xkS7u3kzCMrp6xT6";
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <section 
      ref={sectionRef} 
      className={`section-container youtube-video-section scroll-animate ${isVisible ? 'is-visible' : ''}`}
    >
      <h2>Project Overview & Vision</h2>
      <div className="youtube-video-wrapper">
        <iframe 
          src={videoSrc}
          title="YouTube video player - Gold Clicker Mining Overview"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
      </div>
      <p className="video-caption">Learn more about the vision behind Gold Clicker Mining, the unique economic model, and how you can be a part of this exciting new venture.</p>
    </section>
  );
};

export default YouTubeVideoSection; 