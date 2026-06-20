import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

export function Logo({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — Accueil`}
      className={cn("inline-flex items-center", className)}
    >
      <Image
        src="/logo/Image3.jpg"
        alt={`Logo ${siteConfig.name} — ${siteConfig.slogan}`}
        width={1320}
        height={495}
        priority={priority}
        className="h-9 w-auto sm:h-10"
      />
    </Link>
  );
}
