"use client";

import ToggleTheme from "@/components/UI/ToggleTheme";
import MobileMenu from "@/components/UI/MobileMenu";
import { CiMenuFries } from "react-icons/ci";
import { useMenu } from "@/lib/hooks/useMenu";

export default function Header() {
  const { menu, closeMenu, openMenu } = useMenu();

  return (
    <header className="relative border-x border-line-light px-[10px] py-[16px] dark:border-line-dark 2xl:pl-[40px]">
      <div className="flex items-center justify-between">
        <h2 className="text-xl 2xl:text-3xl">Welcome</h2>
        <ToggleTheme className="absolute right-28 top-0 md:right-80 2xl:right-96" />
        <ul className="hidden md:flex">
          <li className="relative px-[20px] text-lg 2xl:text-2xl">
            <a
              href="mailto:guarino90@gmail.com"
              className="decoration-black hover:underline dark:decoration-white"
            >
              Contact
            </a>
            <span className="absolute -top-[16px] right-0 h-[60px] w-[1px] bg-line-light dark:bg-line-dark 2xl:h-[67px]" />
            <span className="absolute -top-[16px] left-0 h-[60px] w-[1px] bg-line-light dark:bg-line-dark 2xl:h-[67px]" />
          </li>
          <li className="relative px-[20px] text-lg 2xl:text-2xl">
            <a
              href="https://github.com/JhowBRCG"
              target="_blank"
              className="decoration-black hover:underline dark:decoration-white"
            >
              GitHub
            </a>
            <span className="absolute -top-[16px] right-0 h-[60px] w-[1px] bg-line-light dark:bg-line-dark 2xl:h-[67px]" />
          </li>
          <li className="px-[20px] text-lg 2xl:text-2xl">
            <a
              href="pdfs/portuguese-cv.pdf"
              target="_blank"
              className="decoration-black hover:underline dark:decoration-white"
            >
              CV
            </a>
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
