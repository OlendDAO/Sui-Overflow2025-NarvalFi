# NarvalFi - Sui Overflow 2025 DeFi Track Project

NarvalFi is an innovative DeFi protocol designed specifically for the Sui Overflow 2025 hackathon DeFi track, focusing on high capital efficiency and modular architecture. The frontend is built with Next.js 15 and Tailwind CSS, featuring a modern, tech-inspired style with a slate color scheme.

## Project Overview

NarvalFi aims to deliver a next-generation DeFi protocol within the Sui ecosystem, with key highlights including:

- **Modular Protocol Architecture**: Six core modules (Liquidity Layer, Vault Protocol, Lending Protocol, Narval DEX, Smart Collateral & Smart Debt, Liquidation Engine) can be flexibly combined to support diverse DeFi scenarios.
- **High Capital Efficiency**: Innovative mechanisms to improve capital utilization and lower user barriers.
- **Superior User Experience**: The frontend adopts glassmorphism, gradients, animations, and other modern designs for a smooth, tech-forward user experience.

## Track Information

- **Event**: Sui Overflow 2025
- **Track**: DeFi
- **Frontend Path**: `/Users/gz/Documents/GitHub/Sui-Overflow2025-NarvalFi/packages/frontend`

## Tech Stack

- Next.js 15.x
- React 19.x
- Tailwind CSS
- shadcn/ui component library
- framer-motion for animations
- Sui ecosystem dependencies such as @mysten/dapp-kit and @suiware/kit

## Main Features

- Highlighted protocol architecture and innovative modules
- Wallet connection and network detection
- Asset management and interactive forms
- Modern homepage with responsive design
- Highly modular components for easy extension and maintenance

## Getting Started

### Install dependencies

```bash
cd packages/frontend
pnpm install
```

### Start development server

```bash
pnpm dev
```

### Build and deploy

```bash
pnpm build
pnpm start
```

## Directory Structure

```
packages/frontend
  ├── public/           # Static assets
  └── src/
      ├── app/          # Next.js entry and pages
      ├── components/   # Common components
      ├── dapp/         # Protocol-related business components
      └── styles/       # Style files
```

## Useful Links

- [Sui Overflow 2025 Official Website](https://sui.io/overflow/)
- [Sui Official Documentation](https://docs.sui.io/)
- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui](https://ui.shadcn.com/)

## License

MIT 