import React from 'react';
import './GoFundMeWidget.css'; // We'll create this for potential styling

const GoFundMeWidget = () => {
  // useEffect to load the script is no longer needed

  const iframeSrc = "https://www.gofundme.com/f/tanners-game-play-free-earn-real-rewards/widget/large?sharesheet=manage+coaching+tasks+card&attribution_id=sl%3A5238c3c6-8559-46d2-9fe5-6e82281f00fc&utm_content=none&utm_medium=referral&utm_source=widget#:~:tcm-regime=GDPR&tcm-prompt=Hidden";

  return (
    // The outer container (.gfm-section-widget-container) is in GoFundMeSection.css for positioning
    // This div below is specifically for the iframe itself, matching GFM's class for potential styles.
    <div className="gfm-embed-iframe-wrapper"> 
      <iframe
        src={iframeSrc}
        className="gfm-embed-iframe" // Class from GFM's own iframe
        width="100%" // Let container control max-width
        height="549px" // Height from GFM's iframe for the large widget
        frameBorder="0"
        scrolling="no"
        title="GoFundMe Widget - Tanner's Game"
        // allowTransparency="true" // This attribute is deprecated in HTML5 but sometimes seen
      ></iframe>
    </div>
  );
};

export default GoFundMeWidget; 