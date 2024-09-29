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
    <header className="relative border-x border-line-light px-[10px] py-[16px] dark:border-line-dark 2xl:pl-[40px]">
      <div className="flex items-center justify-between">
        <h2 className="text-xl 2xl:text-3xl">Welcome</h2>
        <ToggleTheme className="absolute right-28 top-0 md:right-80 2xl:right-96" />
        <ul className="hidden md:flex">
          <li className="relative px-[20px] text-lg 2xl:text-2xl">
            <a href="">Contact</a>
            <span className="absolute -top-[16px] right-0 h-[60px] w-[1px] bg-line-light dark:bg-line-dark 2xl:h-[67px]"></span>
            <span className="absolute -top-[16px] left-0 h-[60px] w-[1px] bg-line-light dark:bg-line-dark 2xl:h-[67px]"></span>
          </li>
          <li className="relative px-[20px] text-lg 2xl:text-2xl">
            <a href="">GitHub</a>
            <span className="absolute -top-[16px] right-0 h-[60px] w-[1px] bg-line-light dark:bg-line-dark 2xl:h-[67px]"></span>
          </li>
          <li className="px-[20px] text-lg 2xl:text-2xl">
            <a href="">CV</a>
          </li>
        </ul>
        <button className="md:hidden" onClick={openMenu}>
          <CiMenuFries className="text-3xl" />
        </button>
        <MobileMenu closeMenu={closeMenu} menu={menu} />
      </div>
    </header>
  );
}
