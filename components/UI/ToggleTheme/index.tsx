"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils/cn";
import { useIsMounted } from "@/lib/hooks/useIsMounted";

type ToggleThemeProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function ToggleTheme({ className }: ToggleThemeProps) {
  const isMounted = useIsMounted();
  const { theme, setTheme } = useTheme();

  if (!isMounted) return null;

  return (
    <button
      className={cn(className)}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Image
        src={`/images/switch-${theme === "light" ? "dark" : "light"}.svg`}
        width={"30"}
        height={"30"}
        alt="switch page theme"
      />
    </button>
  );
}
