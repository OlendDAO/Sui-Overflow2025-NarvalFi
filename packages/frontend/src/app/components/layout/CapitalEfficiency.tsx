import React from 'react';
import Glass from './Glass';

/**
 * CapitalEfficiency - Section highlighting capital efficiency (39x, LTV, etc).
 * No props. Content is hardcoded for now.
 */
const CapitalEfficiency: React.FC = () => {
  return (
    <section className="w-full max-w-6xl">
      <Glass className="p-8 md:p-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Unparalleled Capital Efficiency
            </h2>
            <p className="text-white/80 mb-6">
              NarvalFi&rsquo;s innovative architecture allows for up to liquidity through its Smart Collateral and Smart Debt mechanisms. Users can simultaneously provide liquidity, earn trading fees, and leverage their positions.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">→</span>
                <span>Up to 95% LTV with ultra-low liquidation penalties</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">→</span>
                <span>Earn trading fees while using assets as collateral</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">→</span>
                <span>Composable liquidity across lending, vaults, and DEX</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-600/40 to-cyan-600/40 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-700/50 to-cyan-700/50 flex items-center justify-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">leverageX</div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-blue-500/10 blur-[30px] rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </Glass>
    </section>
  );
};

export default CapitalEfficiency; 