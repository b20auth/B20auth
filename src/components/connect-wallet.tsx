"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";

export function ConnectWallet() {
  const { address, isConnected, isConnecting } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-3">
        <span className="rounded-full bg-base-blue/10 px-3 py-1 font-mono text-sm text-base-blue">
          {address.slice(0, 6)}…{address.slice(-4)}
        </span>
        <button
          type="button"
          onClick={() => disconnect()}
          className="rounded-lg border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50"
        >
          Disconnect
        </button>
      </div>
    );
  }

  const primaryConnector = connectors[0];

  return (
    <button
      type="button"
      disabled={!primaryConnector || isPending || isConnecting}
      onClick={() => primaryConnector && connect({ connector: primaryConnector })}
      className="rounded-lg bg-base-blue px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-base-blue/90 disabled:opacity-50"
    >
      {isPending || isConnecting ? "Connecting…" : "Connect Wallet"}
    </button>
  );
}
