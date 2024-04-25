import Link from "next/link";

export default function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-zinc-100 underline-offset-2 transition duration-300 hover:text-zinc-200 hover:underline"
    >
      {children}
    </Link>
  );
}
