"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils/cn";
import { useIsMounted } from "@/lib/hooks/useIsMounted";
import { useSoundEffect } from "@/lib/hooks/useSoundEffect";

type ToggleThemeProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function ToggleTheme({ className }: ToggleThemeProps) {
  const isMounted = useIsMounted();
  const { theme, setTheme } = useTheme();
  const playSound = useSoundEffect("/Audios/toggle-theme.mp3");

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    if (isMounted) playSound();
  };

  if (!isMounted) return null;

  return (
    <button className={cn(className)} onClick={changeTheme}>
      <Image
        src={`/images/switch-${theme === "light" ? "dark" : "light"}.svg`}
        width={"30"}
        height={"30"}
        alt="switch page theme"
      />
    </button>
  );
}
