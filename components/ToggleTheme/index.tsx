"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

type ToggleThemeProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function ToggleTheme({ className }: ToggleThemeProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

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
