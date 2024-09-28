"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function ToggleTheme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <Image
        src={`/images/switch-${theme === "light" ? "dark" : "light"}.svg`}
        width={"30"}
        height={"30"}
        alt="switch page theme"
      />
    </button>
  );
}
