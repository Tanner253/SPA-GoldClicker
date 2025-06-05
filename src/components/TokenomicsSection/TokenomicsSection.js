import React, { useState } from 'react';
import './TokenomicsSection.css';
import { FaCoins, FaShieldAlt, FaChartLine, FaMoneyBillWave, FaUniversity, FaBalanceScale, FaExclamationTriangle, FaCodeBranch } from 'react-icons/fa'; // Example icons
import { Pie } from 'react-chartjs-2'; // Import Pie
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title // Import Title
} from 'chart.js';
import DevSupplyDetails from './DevSupplyDetails'; // Import the new component

// Register Chart.js components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title // Register Title
);

const InfoCard = ({ icon, title, children }) => (
  <div className="info-card">
    {icon && <div className="info-card-icon">{icon}</div>} 
    <h3 className="info-card-title">{title}</h3>
    <div className="info-card-content">{children}</div>
  </div>
);

const TokenomicsSection = () => {
  const [activeTab, setActiveTab] = useState('devSupply');
  const defaultIconColor = '#e0e0e0'; // Light gray for icons on dark background
  const activeTreasuryIconColor = '#FFD700'; // Gold for treasury icon when active

  const tokenomicsData = {
    devSupply: {
      title: "Developer Wallet & Holdings",
      icon: <FaCodeBranch size={40} color={defaultIconColor}/>,
      content: <DevSupplyDetails />
    },
    overview: {
      title: "GCM Tokenomics: Quick Look",
      icon: <FaChartLine size={40} color={defaultIconColor}/>,
      content: (
        <>
          <p>Gold Clicker Memecoin (GCM) is the heart of Gold Clicker Mining's play-to-earn (P2E) world.</p>
          <p>Our goal: <strong>long-term value</strong>, a stable token, and a safe system for players.</p>
          <p>How? GCM rewards your gameplay with real value, backed by ad revenue. It's transparent and sustainable.</p>
        </>
      )
    },
    dualNature: {
      title: "GCM: In-Game Points & Real Crypto",
      icon: <FaBalanceScale size={40} color={defaultIconColor} />,
      content: (
        <>
          <p>GCM works in two ways:</p>
          <ul>
            <li><strong>GCM Points (In-Game):</strong> Earn these as you play via the "Meme Mint". They track your in-game success (off-chain).</li>
            <li><strong>GCM Crypto Tokens (On-Chain):</strong> Convert your GCM Points into actual GCM crypto tokens. These are SPL tokens on the Solana blockchain, sent to your personal SOL wallet.</li>
          </ul>
        </>
      )
    },
    accruingPoints: {
      title: "Earning GCM Points: The Meme Mint",
      icon: <FaCoins size={40} color={defaultIconColor} />,
      content: (
        <>
          <p>Unlock the "Meme Mint" with game progress (e.g., spend 100k Gold Bars after 3 prestiges).</p>
          <p>Deposit your in-game Gold Bars (GB) into the Mint to generate GCM Points.</p>
          <p><strong>Point Generation Formula:</strong> <code>Rate = Base_Rate_from_GB × Efficiency_Multiplier</code></p>
          <ul>
            <li><strong>Base Rate (from Gold Bars):</strong> Uses a special formula (<code>k × log10(1 + GB_Deposited/s)</code>) that gives more points for more GB, but with diminishing returns to keep things fair and sustainable.</li>
            <li><strong>Efficiency Multiplier:</strong> Boosted by your game upgrades and overall progress.</li>
          </ul>
        </>
      )
    },
    withdrawalProcess: {
      title: "Withdrawing Your GCM Crypto",
      icon: <FaMoneyBillWave size={40} color={defaultIconColor} />,
      content: (
        <>
          <h4>Easy & Secure Withdrawals:</h4>
          <ol>
            <li>Request withdrawal in-game.</li>
            <li>Provide your Solana (SOL) wallet address.</li>
            <li>Our server checks your request (points balance, cooldowns, anti-fraud).</li>
            <li>Tokens are sent from our Treasury to your wallet.</li>
            <li>Your in-game GCM Points balance updates.</li>
          </ol>
          <h4>Smart Token Value (Dynamic Valuation):</h4>
          <p>The number of GCM Crypto Tokens you get per GCM Point <strong>isn't fixed</strong>.</p>
          <p>It depends on a <strong>Target USD Value</strong> (set by us based on ad revenue, game balance, and GCM market price) and the GCM token's current market price.</p>
          <p><code>Tokens Received = Target_USD_Value_for_Your_Points / Current_Market_Price_of_GCM_Token</code></p>
          <p>This keeps the system sustainable and fair, adapting to real-world conditions.</p>
          <p><strong>Withdrawal Cooldown:</strong> A short wait period (e.g., 24-72 hours) between withdrawals to ensure system stability.</p>
        </>
      )
    },
    treasury: {
      title: "Our Treasury & Token Supply",
      icon: <FaUniversity size={40} color={activeTab === 'treasury' ? activeTreasuryIconColor : defaultIconColor} />,
      content: (
        <>
          <p>A dedicated Treasury Wallet on Solana holds a large supply of GCM Crypto Tokens. Initially, this will be <strong>50% of the total 1 billion GCM token supply</strong>, exclusively for distributing player-earned rewards.</p>
          <p>The remaining <strong>50% of the supply is for public circulation</strong>, initially via platforms like pump.fun, and eventually on decentralized (DEX) and centralized (CEX) exchanges like Raydium.</p>
          <p>We will NOT use Treasury funds for team sales or anything that could harm the token's market value.</p>
        </>
      )
    },
    sustainability: {
      title: "Keeping it Sustainable: Ad Revenue",
      icon: <FaShieldAlt size={40} color={defaultIconColor} />,
      content: (
        <>
          <p>Our P2E model is powered by <strong>real ad revenue</strong> from in-game ads.</p>
          <p><strong>Financial Goal:</strong> Ad revenue should be roughly double (2x) the value of GCM tokens we distribute as rewards.</p>
          <h4>How We Use Ad Revenue:</h4>
          <p>Most of our net ad revenue (e.g., 80%) goes back into the GCM ecosystem to benefit players:</p>
          <ul>
            <li><strong>More Liquidity:</strong> Adding to GCM/SOL or GCM/USDC trading pools on exchanges.</li>
            <li><strong>Market Support:</strong> Buying GCM tokens from the Treasury to help stabilize price and build confidence.</li>
          </ul>
          <p>This creates a healthy cycle: <strong>More Play → More Ad Revenue → Stronger GCM Rewards.</strong></p>
        </>
      )
    },
    riskDisclosure: {
        title: "Important: Risks & Your Responsibility",
        icon: <FaExclamationTriangle size={40} color={defaultIconColor} />,
        content: (
          <>
            <p>Please understand:</p>
            <ul>
              <li>Cryptocurrency values can change quickly and are risky.</li>
              <li>You are responsible for providing the correct wallet address and keeping your private keys safe.</li>
            </ul>
            <p>GCM Crypto Tokens are rewards for playing. Their market value isn't guaranteed.</p>
            <p>Our system uses smart valuation, ad revenue backing, and secure processes to reduce risks, but we encourage you to play responsibly.</p>
          </>
        )
      }
  };

  const chartData = {
    labels: ['Treasury (Player Rewards)', 'Publicly Held (DEX/CEX)'],
    datasets: [
      {
        label: 'Token Distribution',
        data: [50, 50],
        backgroundColor: [
          'rgba(75, 192, 192, 0.8)',  // Teal for Treasury
          'rgba(255, 159, 64, 0.8)', // Orange for Publicly Held
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: { 
            color: '#f0f0f0' // Light color for legend text for dark mode
        }
      },
      title: {
        display: true,
        text: 'GCM Initial Token Distribution',
        font: {
            size: 18,
            weight: 'bold'
        },
        color: '#f0f0f0' // Light color for title text for dark mode
      },
      tooltip: {
        callbacks: {
            label: function(context) {
                let label = context.label || '';
                if (label) {
                    label += ': ';
                }
                if (context.parsed !== null) {
                    label += context.parsed + '%';
                }
                return label;
            }
        }
      }
    },
  };

  const tabs = [
    { id: 'devSupply', label: 'Dev Supply' },
    { id: 'overview', label: 'Overview' },
    { id: 'dualNature', label: 'Dual Nature' },
    { id: 'accruingPoints', label: 'Accruing Points' },
    { id: 'withdrawalProcess', label: 'Withdrawals' },
    { id: 'treasury', label: 'Treasury' },
    { id: 'sustainability', label: 'Sustainability' },
    { id: 'riskDisclosure', label: 'Risks' },
  ];

  let currentItem = tokenomicsData[activeTab];
  let displayIcon = currentItem.icon;
  if (activeTab === 'treasury' && currentItem.icon) {
    displayIcon = React.cloneElement(currentItem.icon, { color: activeTreasuryIconColor });
  } else if (currentItem.icon) {
    displayIcon = React.cloneElement(currentItem.icon, { color: defaultIconColor });
  }

  return (
    <section className="tokenomics-section" id="tokenomics">
      <div className="container">
        <h2>GCM Tokenomics</h2>
        <p className="subtitle">A Framework for Sustainable Play-to-Earn Value</p>

        <div className="tokenomics-tabs">
          {tabs.map(tab => (
            <button 
              key={tab.id} 
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        <div className="tokenomics-content-area">
          {currentItem && (
             <InfoCard 
                key={activeTab}
                icon={displayIcon} 
                title={currentItem.title}
              >
                {currentItem.content}
                {activeTab === 'treasury' && (
                  <div className="chart-container" style={{ height: '400px', marginTop: '30px', padding: '10px', backgroundColor:'#2c2c2c', borderRadius:'8px' }}>
                    <Pie data={chartData} options={chartOptions} />
                  </div>
                )}
             </InfoCard>
          )}
        </div>

      </div>
    </section>
  );
};

export default TokenomicsSection; 