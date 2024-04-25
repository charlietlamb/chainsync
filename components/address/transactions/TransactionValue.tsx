import { emeraldToast } from "@/components/toast/emeraldToast";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, Clipboard, Copy } from "lucide-react";
import React, { useState } from "react";

export default function TransactionValue({
  value,
  index,
}: {
  value: string;
  index: number;
}) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="group relative max-w-24 overflow-hidden">
      <p className="max-w-24 overflow-hidden overflow-ellipsis whitespace-nowrap">
        {value}
      </p>
      <Button
        onClick={() => {
          navigator.clipboard.writeText(value);
          emeraldToast("Successfully copied to clipboard", value, <Copy />);
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 1000);
        }}
        className={cn(
          "absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 p-1 py-0 text-zinc-200 hover:text-zinc-100 group-hover:flex",
          index % 2 === 0
            ? "bg-emerald-600 hover:bg-emerald-600"
            : "bg-emerald-700 hover:bg-emerald-700",
        )}
      >
        {copied ? <Check /> : <Clipboard />}
      </Button>
    </div>
  );
}
