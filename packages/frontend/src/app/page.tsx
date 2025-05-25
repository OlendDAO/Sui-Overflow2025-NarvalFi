import React from "react";
import AnimatedBackground from './components/AnimatedBackground';
import HomeHeader from './components/layout/HomeHeader';
import ProtocolHighlights from './components/layout/ProtocolHighlights';
import ProtocolArchitecture from './components/layout/ProtocolArchitecture';
import CapitalEfficiency from './components/layout/CapitalEfficiency';
import Glass from './components/layout/Glass';
import NetworkSupportChecker from './components/NetworkSupportChecker';

/**
 * Home - Main homepage layout using modular components.
 */
export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col">
      {/* Animated background for a modern DeFi look */}
      <AnimatedBackground />
      {/* Glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-96 bg-blue-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-1/4 w-1/2 h-96 bg-cyan-500/20 blur-[120px] rounded-full"></div>
      <HomeHeader />
      <main className="z-10 relative flex flex-col items-center justify-center gap-16 flex-1 px-4">
        <ProtocolHighlights />
        <ProtocolArchitecture />
        <CapitalEfficiency />
        {/* Network support checker section */}
        <section className="w-full max-w-md">
          <Glass className="p-6">
            <h3 className="text-xl font-bold mb-4 text-center">Network Support</h3>
            <NetworkSupportChecker />
          </Glass>
        </section>
      </main>
    </div>
  );
}
