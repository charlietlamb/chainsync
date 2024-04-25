import { ConnectButton } from "@rainbow-me/rainbowkit";
import HeroSearch from "@/components/hero/HeroSearch";

export default function HeroContent() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="hero-clamp text-center font-bold leading-none text-zinc-100">
        We do xyz for everyone tbh
      </h1>
      <HeroSearch />
      <ConnectButton
        chainStatus="icon"
        accountStatus="avatar"
        showBalance={false}
        label="Sign In With Wallet"
      />
    </div>
  );
}
