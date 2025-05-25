'use client'

const NetworkSupportChecker = () => {
  // Only support Sui Testnet, show warning for all other networks
  // Here we assume window.suiWallet or a global object can provide the current network. Adjust according to your wallet API in real projects.
  // Here we use a simple environment variable or global variable as a simulation.
  let currentNetwork = ''
  if (typeof window !== 'undefined' && (window as { suiWallet?: { network?: string } }).suiWallet) {
    currentNetwork = (window as { suiWallet?: { network?: string } }).suiWallet?.network || ''
  } else if (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_SUI_NETWORK) {
    currentNetwork = process.env.NEXT_PUBLIC_SUI_NETWORK
  }

  // Allow testnet, show warning for all others
  if (currentNetwork === 'testnet' || currentNetwork === 'sui:testnet') {
    return null
  }

  return (
    <div className="mx-auto w-full max-w-lg px-3 py-2">
      <div className="w-full rounded border border-red-400 px-3 py-2 text-center text-red-400">
        Currently only <span className="font-bold">Sui Testnet</span> is supported. Please switch your wallet to Sui Testnet network.
      </div>
    </div>
  )
}

export default NetworkSupportChecker
