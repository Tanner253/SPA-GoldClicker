import React from 'react';

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
        <div className="text-slate-300">
            <h4 className="text-lg font-bold text-white mb-2">Developer Wallet & Holdings</h4>
            <p>A total of <strong>{totalHoldings}</strong> of the supply was acquired by the development team.</p>
            <div className="mt-4">
                <h5 className="font-bold">Primary Purchase Wallet:</h5>
                <p className="text-sm font-mono break-all">{mainWallet}</p>
            </div>
            <div className="mt-4">
                <h5 className="font-bold">Distribution Breakdown:</h5>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    {distributions.map((dist, index) => (
                        <li key={index}>
                            <span className="font-semibold">{dist.alias}:</span> {dist.percentage}
                            <p className="text-sm font-mono break-all">{dist.address}</p>
                        </li>
                    ))}
                </ul>
            </div>
             <p className="mt-6 text-sm italic text-slate-400">
                <strong>Note:</strong> This is legacy information. The developer has since purchased and burned a significant amount of the supply and has not sold any tokens.
            </p>
        </div>
    );
};


const CMinerTokenomics = () => {
    return (
        <>
            <div className="token-card">
                <h3 className="card-title text-2xl font-bold text-white">Purpose of $CMINER</h3>
                <div className="text-slate-300 space-y-4 mt-4">
                    <p>$CMINER is a prototype development token designed to support and test the core systems of our play-to-earn game prior to the launch of our main token, $GCM.</p>
                    <p>It plays a critical role in ensuring the stability, balance, and economic integrity of the game ecosystem, serving as an essential short-term testing environment.</p>
                    <p className="font-bold text-emerald-400 mt-2">More importantly, $CMINER will not be abandoned. It will be revived and receive long-term support as part of our broader GCM arcade ecosystem. The next game to join the arcade will be built on CMINER.</p>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start mt-12">
                <div className="token-card">
                     <h4 className="card-title text-xl font-bold text-white">Token Details & Lock</h4>
                     <div className="mt-4">
                        <img src="/images/lock.jpg" alt="CMINER Lock" className="rounded-lg shadow-lg w-full mb-4" />
                        <p className="text-center text-slate-400 italic">100% of initial dev supply is locked.</p>
                        <div className="text-slate-300 mt-4">
                            <p className="mb-2"><strong>Total Supply:</strong> 979.8M remaining (the rest is burned).</p>
                            <p><strong>Developer Initial Holdings:</strong> 12%</p>
                        </div>
                        {/* Commented out CA link */}
                        {/* <div className="mt-4">
                            <a href="https://pump.fun/coin/CA281fpA6AiHcDxZdmRJFVTMCzupxgK9JyVGBegPpump" target="_blank" rel="noopener noreferrer" className="ca-pill">
                                <span className="ca-label">CA:</span>
                                <span className="ca-address">CA281fp...gPpump</span>
                            </a>
                        </div> */}
                     </div>
                </div>

                <div className="token-card">
                    <DevSupplyDetails />
                </div>
            </div>
        </>
    );
};

export default CMinerTokenomics; 