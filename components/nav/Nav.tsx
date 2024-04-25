"use client";

import Logo from "@/components/logo/Logo";
import NavItems from "./NavItems";
import { cn } from "@/lib/utils";
import { useAccount } from "wagmi";

export default function Nav() {
  const loggedIn = useAccount().address !== undefined;
  return (
    <div
      className={cn(
        "fixed z-50 flex w-full items-center justify-between border-b border-zinc-200 bg-emerald-800 p-2 px-4 shadow-md",
        loggedIn && "p-4",
      )}
    >
      <Logo />
      <NavItems />
    </div>
  );
}
