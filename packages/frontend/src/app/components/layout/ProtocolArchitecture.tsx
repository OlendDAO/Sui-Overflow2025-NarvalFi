import React from 'react';
import VaultProtocolCard from './VaultProtocolCard';
import LendingProtocolCard from './LendingProtocolCard';
import NarvalDEXCard from './NarvalDEXCard';
import SmartCollateralDebtCard from './SmartCollateralDebtCard';
import LiquidationEngineCard from './LiquidationEngineCard';

/**
 * ProtocolArchitecture - Section displaying all core Narval protocol modules as animated cards.
 */
const ProtocolArchitecture: React.FC = () => (
  <section className="w-full max-w-6xl mx-auto py-12">
    <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
      Narval Protocol Architecture
    </h2>
    <p className="text-center text-lg text-white/80 mb-12">
      Explore the core modules powering Narval: unified liquidity, advanced vaults, lending, DEX, smart collateral & debt, and a next-gen liquidation engine.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <VaultProtocolCard />
      <LendingProtocolCard />
      <NarvalDEXCard />
      <SmartCollateralDebtCard />
      <LiquidationEngineCard />
    </div>
  </section>
);

export default ProtocolArchitecture; 