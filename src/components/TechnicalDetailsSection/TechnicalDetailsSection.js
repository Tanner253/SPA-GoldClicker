import React from 'react';
import { Line } from 'react-chartjs-2';
import { FaReact, FaUnity, FaDatabase, FaCloud, FaKey, FaFire, FaGlobe, FaAndroid, FaApple, FaSteam, FaLaptop, FaLock } from 'react-icons/fa';
import './TechnicalDetailsSection.css';

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  LogarithmicScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  LogarithmicScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

const stats = [
  { project: 'SPA-GoldClicker', files: 50 },
  { project: 'CookieClicker', files: 80 },
  { project: 'api/api-cookie', files: 36 },
  { project: 'Total', files: 166 }
];

const totalLines = 46002;

const chartData = {
  labels: ['Start', 'MVP', 'Alpha Testing', 'Beta Testing', '1000x'],
  datasets: [
    {
      label: 'Lines of Code Growth',
      data: [100, 200, 400, 10000, 100000000],
      borderColor: '#FFD700',
      backgroundColor: 'rgba(255,215,0,0.2)',
      tension: 0.4,
      pointRadius: 5,
      pointBackgroundColor: ['#FFD700', '#FFD700', '#00FFB3', '#FFD700', '#FFD700'], // Highlight Alpha
    }
  ]
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Project Growth: To the Moon!',
      color: '#FFD700',
      font: { size: 20, weight: 'bold' }
    },
    tooltip: { enabled: false }
  },
  interaction: { mode: 'none' },
  scales: {
    y: {
      type: 'logarithmic',
      display: false, // Hide Y axis labels for conceptual look
      grid: { display: true },
      min: 100,
      max: 100000000
    },
    x: {
      ticks: { color: '#FFD700' },
      grid: { color: '#333' }
    }
  }
};

// Define platform details array
const platformDetails = [
  { name: 'Android', icon: <FaAndroid />, status: 'Live!', storeLink: 'become-tester-section', color: '#3DDC84' }, // Android green
  { name: 'iOS', icon: <FaApple />, status: 'Soon', storeLink: 'become-tester-section', color: '#AEAEB2' },     // Apple grey
  { name: 'Steam', icon: <FaSteam />, status: 'Soon', storeLink: 'become-tester-section', color: '#1b2838' },    // Steam dark blue/grey
  { name: 'Web App', icon: <FaLaptop />, status: 'Soon', storeLink: 'become-tester-section', color: '#4A90E2' } // Generic web blue
];

const techStack = [
  { name: 'React', icon: <FaReact color="#61dafb" />, desc: 'Modern SPA frontend' },
  { name: 'Unity', icon: <FaUnity color="#fff" />, desc: 'AAA-quality game engine' },
  { name: 'Firebase', icon: <FaFire color="#ffca28" />, desc: 'Realtime backend & auth' },
  { name: 'JWT', icon: <FaKey color="#FFD700" />, desc: 'Secure token auth' },
  { name: 'PostgreSQL', icon: <FaDatabase color="#336791" />, desc: 'Robust SQL database' },
  { name: 'Azure', icon: <FaCloud color="#0089d6" />, desc: 'Cloud hosting & scaling' },
  {
    name: 'Platforms',
    icon: <FaGlobe color="#90EE90" />,
    isPlatformsCard: true // Add a flag to identify this card for special rendering
  },
  {
    name: 'CMINER Token Lock', // Title for the new card
    icon: <FaLock color="#FFD700" />, // Main icon for this card
    contentType: 'image', // Special type for rendering logic
    contentSrc: '/images/lockd.jpg', // Path to your image
    contentAlt: 'CMINER Token Lock Details'
  }
];

export default function TechnicalDetailsSection() {
  const handleScrollToTarget = (targetId) => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="technical-details-section section-container">
      <h2 className="tech-title">Technical Details & Project Scale</h2>
      <div className="tech-stats-cards">
        <div className="tech-stats-table tech-stats-card">
          <table>
            <thead>
              <tr>
                <th>Project</th>
                <th>Files</th>
              </tr>
            </thead>
            <tbody>
              {stats.map(row => (
                <tr key={row.project}>
                  <td>{row.project}</td>
                  <td>{row.files}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="total-lines">
            <span className="gold-text">{totalLines.toLocaleString()}</span> total lines of code
          </div>
        </div>
        <div className="tech-moonshot-chart tech-stats-card">
          <Line data={chartData} options={chartOptions} width={'100%'} height={'100%'} />
        </div>
      </div>
      <div className="moonshot-label moonshot-label-below">Development Status: Alpha 🚀</div>
      <div className="tech-stack">
        {techStack.map(tech => (
          <div className="tech-stack-item" key={tech.name}>
            <span className="tech-icon">{tech.icon}</span>
            <span className="tech-name">{tech.name}</span>
            {tech.isPlatformsCard ? (
              <div className="platform-details-container">
                {platformDetails.map(platform => (
                  <div 
                    key={platform.name} 
                    className="platform-item" 
                    onClick={() => handleScrollToTarget(platform.storeLink)}
                    title={`Go to ${platform.name} ${platform.status === 'Live!' ? 'details' : 'tester info'}`}
                  >
                    <span className="platform-icon" style={{ color: platform.color }}>{platform.icon}</span>
                    <span className="platform-name">{platform.name}</span>
                    <span 
                      className={`platform-status ${platform.status === 'Live!' ? 'live' : ''}`}
                    >
                      {platform.status}
                    </span>
                  </div>
                ))}
              </div>
            ) : tech.contentType === 'image' ? (
              <img src={tech.contentSrc} alt={tech.contentAlt} className="tech-item-content-image" />
            ) : (
              <span className="tech-desc" dangerouslySetInnerHTML={{ __html: tech.desc }}></span>
            )}
          </div>
        ))}
      </div>
      <div className="tech-sell blurb">
        <strong>Built for scale, security, and real value.</strong> 
        <br />
        <span>
          <span className="gold-text">$GCM</span> is more than a meme—it's a real product, with a robust backend, secure authentication, scalable cloud infrastructure, and a AAA-quality game engine. 
          <br />
          <span className="gold-text">Invest in the future of play-to-earn.</span>
        </span>
      </div>
    </section>
  );
} 