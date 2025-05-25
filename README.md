# NarvalFi - Sui Overflow 2025 DeFi Track Project

## Project Overview

NarvalFi is an innovative decentralized finance (DeFi) protocol designed specifically for the Sui Overflow 2025 hackathon DeFi track, focusing on high capital efficiency and modular architecture. The frontend is built with Next.js 15 and Tailwind CSS, and the core business logic is implemented using Sui Move smart contracts.

---

## Key Features

- **Modular Protocol Architecture**: Six core modules (Liquidity Layer, Vault Protocol, Lending Protocol, Narval DEX, Smart Collateral & Smart Debt [not implemented], Liquidation Engine [not implemented]) can be flexibly combined to support diverse DeFi scenarios.
- **High Capital Efficiency**: Innovative mechanisms improve capital utilization and lower user barriers.
- **Open Source & Extensibility**: Clean code structure, easy for community participation and secondary development.

---

## Track Information

- **Event**: Sui Overflow 2025
- **Track**: DeFi
- **Frontend Path**: `packages/frontend`
- **Contract Path**: `packages/contract`

---

## Tech Stack

- Next.js 15.x
- React 19.x
- Tailwind CSS
- shadcn/ui component library
- framer-motion animation library
- Sui ecosystem dependencies (e.g., @mysten/dapp-kit, @suiware/kit)
- Sui Move
- SUi Move Framework

---

## Main Features

- Innovative protocol architecture and modular design
- Wallet connection and network detection
- Asset management and interactive forms
- Responsive modern homepage
- Highly modular components for easy extension and maintenance

---

## Getting Started & Useful Scripts

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

### Lint & Format

- Lint
  ```bash
  pnpm lint
  ```
- Format
  ```bash
  pnpm format
  ```

---

## Directory Structure

```
packages/frontend
  ├── public/           # Static assets
  └── src/
      ├── app/          # Next.js entry and pages
      ├── components/   # Common components
      ├── dapp/         # Protocol-related business components
      └── styles/       # Style files
packages/contract
  ├── scripts/          # Deployment & utility scripts
  │   └── copy-package-id.js  # Script for handling package IDs
```

---

## Useful Links

- [Sui Overflow 2025 Official Website](https://sui.io/overflow/)
- [Sui Official Documentation](https://docs.sui.io/)

---

## License

MIT

---

We welcome contributions from the community to help grow the Sui ecosystem together! 