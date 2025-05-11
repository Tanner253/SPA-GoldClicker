import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="section-container footer-content">
        <p>&copy; {currentYear} Gold Clicker Mining ($GCM). All Rights Reserved.</p>
        <p>Remember: $GCM is a memecoin for a game. Play responsibly. Not financial advice.</p>
        {/* <p><a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms of Service</a></p> */}
      </div>
    </footer>
  );
};

export default Footer; 