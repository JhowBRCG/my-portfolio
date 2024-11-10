import { useEffect, useState } from "react";

export function useMenu() {
  const [menu, setMenu] = useState(false);

  const openMenu = () => setMenu(true);
  const closeMenu = () => setMenu(false);

  useEffect(() => {
    if (menu === true) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  });

  return { openMenu, closeMenu, menu };
}
