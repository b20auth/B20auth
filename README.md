# B20auth

> Permission dashboard for B20 tokens on [Base](https://base.org)

[![Built on Base](https://img.shields.io/badge/Built%20on-Base-0000FF?style=flat-square)](https://base.org)
[![Status](https://img.shields.io/badge/Status-In%20Development-yellow?style=flat-square)](https://github.com/b20auth/B20auth)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

B20auth is a web dashboard that makes B20 token permission management simple. Manage roles, transfer policies, and compliance controls — without CLI.

---

## The Problem

[B20](https://docs.base.org/base-chain/specs/upgrades/beryl/b20) is Base's native token standard with built-in authorization:

- Role-based access (admin, minter, burner)
- Transfer policies (allowlist / blocklist)
- Freeze & seize controls
- Supply caps

But today, issuers manage all of this via CLI or raw contract calls. **There's no friendly UI.**

## The Solution

**B20auth** = the control panel for B20 token issuers.

| Feature | Description |
|---------|-------------|
| **Role Manager** | View, grant, and revoke roles per address |
| **Policy Editor** | Manage allowlist/blocklist via Policy Registry |
| **Token Overview** | Name, symbol, supply, pause status at a glance |
| **Audit Trail** | Track onchain permission changes |

---

## Getting Started

```bash
git clone https://github.com/b20auth/B20auth.git
cd B20auth
npm install
cp .env.example .env.local   # optional: WalletConnect project ID
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Connect your wallet on **Base Sepolia** testnet.

## Roadmap

- [x] Project setup & branding
- [x] Landing page & wallet connect (Base Sepolia)
- [ ] B20 token role viewer
- [ ] Grant / revoke roles from UI
- [ ] Transfer policy manager (allowlist/blocklist)
- [ ] Pause / unpause controls
- [ ] Base Mainnet support

---

## Tech Stack

- **Frontend:** Next.js, TypeScript, Tailwind CSS
- **Web3:** wagmi, viem
- **Chain:** Base Sepolia → Base Mainnet
- **Standard:** [B20](https://docs.base.org/base-chain/specs/upgrades/beryl/b20) via [base-std](https://github.com/base/base-std)

---

## Links

- 🐦 Twitter: [@B20auth](https://twitter.com/B20auth)
- 📖 B20 Docs: [docs.base.org](https://docs.base.org/base-chain/specs/upgrades/beryl/b20)
- 🟦 Base: [base.org](https://base.org)

---

## Contributing

This project is in early development. Issues and PRs welcome once the first release is live.

---

## License

MIT
