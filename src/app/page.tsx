import { ConnectWallet } from "@/components/connect-wallet";
import { Logo } from "@/components/logo";

const features = [
  {
    title: "Role Manager",
    description: "View, grant, and revoke admin, minter, and burner roles per address.",
  },
  {
    title: "Policy Editor",
    description: "Manage allowlist and blocklist rules via the B20 Policy Registry.",
  },
  {
    title: "Token Overview",
    description: "Name, symbol, supply, and pause status at a glance.",
  },
  {
    title: "Compliance Ready",
    description: "Built for B20 issuers who need native onchain permission controls.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-zinc-100">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Logo />
          <ConnectWallet />
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-5xl px-6 py-20 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-base-blue/20 bg-base-blue/5 px-4 py-1.5 text-sm font-medium text-base-blue">
            <span className="h-2 w-2 rounded-sm bg-base-blue" />
            Built on Base
          </div>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Permission dashboard for{" "}
            <span className="text-base-blue">B20 tokens</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600">
            Manage roles, transfer policies, and compliance controls — without
            CLI. B20 has native auth built into the chain. We make it usable.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <ConnectWallet />
            <a
              href="https://github.com/b20auth/B20auth"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-zinc-200 px-5 py-2.5 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50"
            >
              View on GitHub
            </a>
          </div>
          <p className="mt-6 text-sm text-zinc-500">
            Base Sepolia testnet · MVP in development
          </p>
        </section>

        <section className="border-t border-zinc-100 bg-zinc-50/50">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <h2 className="text-center text-2xl font-semibold text-zinc-900">
              What we&apos;re building
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="font-semibold text-zinc-900">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16 text-center">
          <h2 className="text-xl font-semibold text-zinc-900">Roadmap</h2>
          <ul className="mx-auto mt-6 max-w-md space-y-2 text-left text-sm text-zinc-600">
            <li className="flex items-center gap-2">
              <span className="text-base-blue">✓</span> Project setup &amp; branding
            </li>
            <li className="flex items-center gap-2">
              <span className="text-base-blue">✓</span> Landing page &amp; wallet connect
            </li>
            <li className="flex items-center gap-2">
              <span className="text-zinc-400">○</span> B20 token role viewer
            </li>
            <li className="flex items-center gap-2">
              <span className="text-zinc-400">○</span> Grant / revoke roles from UI
            </li>
            <li className="flex items-center gap-2">
              <span className="text-zinc-400">○</span> Transfer policy manager
            </li>
          </ul>
        </section>
      </main>

      <footer className="border-t border-zinc-100">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-500">
          <span>© 2026 B20auth</span>
          <div className="flex gap-4">
            <a
              href="https://docs.base.org/base-chain/specs/upgrades/beryl/b20"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-base-blue"
            >
              B20 Docs
            </a>
            <a
              href="https://github.com/b20auth/B20auth"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-base-blue"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
