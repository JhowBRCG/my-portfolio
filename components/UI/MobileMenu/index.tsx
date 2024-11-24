import { cn } from "@/lib/utils/cn";
import { FaRegWindowClose } from "react-icons/fa";
import Link from "next/link";

type MobileMenuProps = {
  closeMenu: () => void;
  menu: boolean;
};

export default function MobileMenu({ closeMenu, menu }: MobileMenuProps) {
  const menuClass =
    "absolute left-0 top-0 min-h-screen w-full bg-bg-light py-[16px] transition-all dark:bg-bg-dark z-10";
  const menuTransition = { "-translate-y-[999px]": !menu };

  return (
    <div className={cn(menuClass, menuTransition)}>
      <div className="min-h-[calc(63px-16px)] border-b border-line-light dark:border-line-dark">
        <button
          onClick={closeMenu}
          aria-label="close menu"
          className="ml-auto mr-[10px] block"
        >
          <FaRegWindowClose className="text-3xl" />
        </button>
      </div>
      <ul className="mt-28 flex flex-col items-center">
        <li className="w-full border-b border-t border-line-light py-[14px] text-center text-[24px] dark:border-line-dark">
          <a href="mailto:guarino90@gmail.com">Contact</a>
        </li>
        <li className="w-full border-b border-line-light py-[14px] text-center text-[24px] dark:border-line-dark">
          <Link href="https://github.com/JhowBRCG" target="_blank">
            GitHub
          </Link>
        </li>
        <li className="w-full border-b border-line-light py-[14px] text-center text-[24px] dark:border-line-dark">
          <Link href="pdfs/portuguese-cv.pdf" target="_blank">
            CV
          </Link>
        </li>
      </ul>
    </div>
  );
}
