import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="section-container footer-content">
        <p>&copy; {currentYear} Gold Clicker Mining ($GCM). All Rights Reserved.</p>
        <p>Remember: $GCM is a memecoin for a game. Play responsibly. Not financial advice. Seeking marketing, fundraising, and partnerships. 
          I am a recently laid off software engineer, so I am looking for ways to make money and help others. This is not a rugpull, I am donating my money through the chart with initial startup costs (treasury wallet).
          there is no inscentive or ask to buy the chart, but people will. The chart will always be pushing ATH in the long run due to ad revenue (80%) being added as liquidity. The chart has a long term long game plan to stay green for years.</p>
        {/* <p><a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms of Service</a></p> */}
      </div>
    </footer>
  );
};

export default Footer; 