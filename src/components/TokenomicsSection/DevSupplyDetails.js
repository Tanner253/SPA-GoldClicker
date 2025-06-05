import React from 'react';
import './DevSupplyDetails.css';
import { FaWallet, FaArrowRight, FaChartPie } from 'react-icons/fa';

const WalletInfo = ({ address, percentage, alias }) => (
  <div className="wallet-info">
    <FaWallet className="wallet-icon" />
    <div className="wallet-details">
      <span className="wallet-alias">{alias}</span>
      <span className="wallet-address">{address}</span>
    </div>
    {percentage && <span className="wallet-percentage">{percentage}</span>}
  </div>
);

const DevSupplyDetails = () => {
  const mainWallet = "EndD214byMFqGU4T1nZAzfMgfWyRG4DioSstASHDvNfB";
  const totalHoldings = "4.646%";
  const distributions = [
    { address: "CwCzqTGQEu9vVkpY8nkuY1suSdceANrfeioH9xXsBUeT", percentage: "4%", alias: "Locked Holding 1 (1 Month)" },
    { address: "4uns2jDeVUo6E9SFkpnMpCVksBBg4ksqEk3ghTrDuJff", percentage: "0.6%", alias: "Holding 2 (1 Month)" },
    { address: "GoMu28MvRPUwrefHcsrKHsbXJCidQXavXThXBug5iu2R", percentage: "0.45%", alias: "Holding 3 (Development)" },
    { address: "6NFcuaqmYDcVoT8aPj7gUmvZYEBxLZBbfrN2rmwCnkeh", percentage: "0.01%", alias: "Holding 4 (payment to CM)" },
  ];

  return (
    <div className="dev-supply-details">
      <p className="intro-text">
        For full transparency, here's a breakdown of the developer-controlled supply. These holdings are allocated for strategic purposes, including supplementing the treasury deposit right before the GCM launch.
      </p>
      
      <div className="main-wallet-section">
        <h4><FaChartPie /> Initial Purchase & Total Holdings</h4>
        <p>A total of <strong>{totalHoldings}</strong> of the supply was acquired by the development team.</p>
        <WalletInfo address={mainWallet} alias="Primary Purchase Wallet" />
        <p className="explanation-text">
          This amount was then distributed into several wallets for operational security and specific lock-up periods.
        </p>
      </div>

      <h4><FaArrowRight /> Distribution Breakdown</h4>
      <div className="distribution-list">
        {distributions.map((dist, index) => (
          <WalletInfo key={index} address={dist.address} percentage={dist.percentage} alias={dist.alias} />
        ))}
      </div>
      
      <div className="future-plans">
        <h4>Future Plans & Lock-up Notice</h4>
        <p>The majority of these holdings, particularly the 4% in wallet <code>CwCzq...BUeT</code>, are locked for one month post-launch to ensure stability. The intention is to liquidate these holdings strategically before the official GCM launch to bolster the treasury.</p>
        <p><em>Note: Wallet addresses are provided for transparency. Holdings are subject to change based on strategic needs for the project's success.</em></p>
      </div>
    </div>
  );
};

export default DevSupplyDetails; 