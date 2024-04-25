import { ServerCrash } from "lucide-react";

export default function AddressNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="hero-clamp text-center font-bold text-zinc-200">
        Address Not Found
      </h1>
      <ServerCrash className="size-8 text-zinc-200 sm:size-12 md:size-16 lg:size-20" />
    </div>
  );
}
