import React from "react";
import HeroContent from "@/components/hero/HeroContent";
import HeroShowcase from "@/components/hero/HeroShowcase";

export default function Hero() {
  return (
    <div className="grid min-h-screen w-full grid-cols-1 items-center justify-center gap-8 px-8 md:grid-cols-2">
      <HeroContent />
      <HeroShowcase />
    </div>
  );
}
