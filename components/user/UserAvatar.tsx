import Image from "next/image";
import React from "react";
import { useAccount } from "wagmi";

export default function UserAvatar({ address }: { address: string }) {
  const account = useAccount();
  console.log(account.address);
  return (
    <div className="flex items-center gap-2">
      <div className="relative size-16 rounded-full">
        <Image
          src="https://avatar.iran.liara.run/public"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-full"
          alt={`${address} data`}
        />
      </div>
      <div className="flex flex-col">
        <h2 className="leading-none text-zinc-200">{address}</h2>
        <h2 className="leading-none text-zinc-300">username</h2>
      </div>
    </div>
  );
}
