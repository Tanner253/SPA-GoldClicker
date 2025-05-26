import React from 'react';
import { Line } from 'react-chartjs-2';
import { FaReact, FaUnity, FaDatabase, FaCloud, FaKey, FaFire } from 'react-icons/fa';
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
  labels: ['Start', 'MVP', 'Alpha', 'Beta', '1000x'],
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

const techStack = [
  { name: 'React', icon: <FaReact color="#61dafb" />, desc: 'Modern SPA frontend' },
  { name: 'Unity', icon: <FaUnity color="#fff" />, desc: 'AAA-quality game engine' },
  { name: 'Firebase', icon: <FaFire color="#ffca28" />, desc: 'Realtime backend & auth' },
  { name: 'JWT', icon: <FaKey color="#FFD700" />, desc: 'Secure token auth' },
  { name: 'PostgreSQL', icon: <FaDatabase color="#336791" />, desc: 'Robust SQL database' },
  { name: 'Azure', icon: <FaCloud color="#0089d6" />, desc: 'Cloud hosting & scaling' }
];

export default function TechnicalDetailsSection() {
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
            <span className="tech-desc">{tech.desc}</span>
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