import { toast } from "sonner";

export function errorToast(
  text: string,
  description?: string,
  icon?: React.ReactNode,
) {
  toast(text, {
    description,
    icon,
    classNames: {
      toast:
        "bg-rose-700 group-[.toaster]:bg-rose-700 group-[.toaster]:text-zinc-100 text-zinc-100 gap-3",
      description: "group-[.toaster]:text-zinc-300 text-zinc-300",
      icon: "group-[.toaster]:text-zinc-20 text-zinc-200",
    },
  });
}
