"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";
import { searchAccount } from "./functions/searchAccount";
import { useRouter } from "next/navigation";

export default function HeroSearch() {
  const [address, setAddress] = useState("");
  const router = useRouter();
  return (
    <div className="flex w-full gap-4">
      <Input
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="flex-grow border border-zinc-100 bg-zinc-200/20 text-zinc-100 placeholder:text-zinc-200/80 focus-visible:border focus-visible:outline-0 focus-visible:ring-0"
        placeholder="Search any eth address..."
      ></Input>

      <Button
        className="border border-zinc-100 bg-zinc-200/20 transition hover:bg-zinc-200/40"
        onClick={async () => {
          const transactions = await searchAccount(address);
          if (transactions) router.push(`/address/${address}`);
        }}
      >
        <Search />
      </Button>
    </div>
  );
}
