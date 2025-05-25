import React from 'react';
import FeatureCard from './FeatureCard';

/**
 * ProtocolHighlights - Section displaying all protocol feature cards.
 * No props. Features are hardcoded for now.
 */
const ProtocolHighlights: React.FC = () => {
  return (
    <section className="w-full max-w-6xl">
      <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
        Key Protocol Innovations
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard
          title="Unified Liquidity Layer"
          desc="A central liquidity pool powering lending, vaults, and DEX. All protocols share the same liquidity, eliminating fragmentation and enabling seamless composability."
          icon="🌊"
          className="lg:transform lg:hover:-translate-y-2"
        />
        <FeatureCard
          title="Smart Collateral & Smart Debt"
          desc="Collateral and debt positions can simultaneously act as AMM liquidity, allowing users to earn trading fees."
          icon="🧠"
          className="lg:transform lg:hover:-translate-y-2"
        />
        <FeatureCard
          title="Batch Liquidation Engine"
          desc="Innovative batch/range liquidation inspired by Uniswap v3. Enables ultra-high LTV (up to 95%) and ultra-low penalty (as low as 0.1%), with gas-efficient, market-driven liquidations."
          icon="⚙️"
          className="lg:transform lg:hover:-translate-y-2"
        />
        <FeatureCard
          title="Modular & Secure Architecture"
          desc="Separation of core liquidity and protocol logic, automated risk limits, robust oracle integration, and multi-layered security for a scalable, safe DeFi ecosystem."
          icon="🛡️"
          className="lg:transform lg:hover:-translate-y-2"
        />
      </div>
    </section>
  );
};

export default ProtocolHighlights; 