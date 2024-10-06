"use client";

import ToggleTheme from "../ToggleTheme";
import MobileMenu from "../MobileMenu";
import { CiMenuFries } from "react-icons/ci";
import { useMenu } from "@/lib/hooks/useMenu";

export default function Header() {
  const { menu, closeMenu, openMenu } = useMenu();

  return (
    <header className="2xl:pl-[40px] relative border-x border-line-light px-[10px] py-[16px] dark:border-line-dark">
      <div className="flex items-center justify-between">
        <h2 className="2xl:text-3xl text-xl">Welcome</h2>
        <ToggleTheme className="md:right-80 2xl:right-96 absolute right-28 top-0" />
        <ul className="md:flex hidden">
          <li className="2xl:text-2xl relative px-[20px] text-lg">
            <a href="">Contact</a>
            <span className="2xl:h-[67px] absolute -top-[16px] right-0 h-[60px] w-[1px] bg-line-light dark:bg-line-dark" />
            <span className="2xl:h-[67px] absolute -top-[16px] left-0 h-[60px] w-[1px] bg-line-light dark:bg-line-dark" />
          </li>
          <li className="2xl:text-2xl relative px-[20px] text-lg">
            <a href="">GitHub</a>
            <span className="2xl:h-[67px] absolute -top-[16px] right-0 h-[60px] w-[1px] bg-line-light dark:bg-line-dark" />
          </li>
          <li className="2xl:text-2xl px-[20px] text-lg">
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
