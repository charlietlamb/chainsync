"use client";

import NavItem from "@/components/nav/NavItem";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export default function NavItems() {
  const { address } = useAccount();

  return (
    <div className="flex items-center gap-4">
      <NavItem href="/more">More</NavItem>
      {!address && (
        <ConnectButton
          chainStatus="icon"
          accountStatus="avatar"
          showBalance={false}
          label={"Connect Wallet"}
        />
      )}
    </div>
  );
}
