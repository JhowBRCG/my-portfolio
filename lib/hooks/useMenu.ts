import { useState } from "react";

export function useMenu() {
  const [menu, setMenu] = useState(false);

  const openMenu = () => setMenu(true);
  const closeMenu = () => setMenu(false);

  return { openMenu, closeMenu, menu };
}
