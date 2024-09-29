"use client";

import ToggleTheme from "../ToggleTheme";
import MobileMenu from "../MobileMenu";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

export default function Header() {
  const [menu, setMenu] = useState(false);

  const openMenu = () => setMenu(true);
  const closeMenu = () => setMenu(false);

  return (
    <header className="relative mx-[22px] border-x border-line-light px-[10px] py-[16px] dark:border-line-dark">
      <div className="flex items-center justify-between">
        <h2 className="text-xl">Welcome</h2>
        <ToggleTheme className="absolute right-28 top-0" />
        <button onClick={openMenu}>
          <CiMenuFries className="text-3xl" />
        </button>
        <MobileMenu closeMenu={closeMenu} menu={menu} />
      </div>
    </header>
  );
}
