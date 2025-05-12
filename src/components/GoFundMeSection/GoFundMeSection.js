import React from 'react';
import GoFundMeWidget from '../GoFundMeWidget/GoFundMeWidget';
import './GoFundMeSection.css';

const GoFundMeSection = () => {
  return (
    <section className="section-container gofundme-section">
      <h2>Support Our Project</h2>
      <div className="gfm-section-widget-container">
        <GoFundMeWidget />
      </div>
    </section>
  );
};

export default GoFundMeSection; 