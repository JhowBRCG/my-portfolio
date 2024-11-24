"use client";

import SquaresAnimation from "@/components/UI/SquaresAnimation";
import { getSquareNumByScreenSize } from "@/lib/utils/getSquareNumByScreenSize";
import { useIsMounted } from "@/lib/hooks/useIsMounted";
import { useResponsiveQueries } from "@/lib/hooks/useResponsiveQueries";

export default function Hero() {
  const isMounted = useIsMounted();
  const { isDesktop, isLaptop, isMobileL, isTablet } = useResponsiveQueries();

  const numSquares = getSquareNumByScreenSize(
    isDesktop,
    isLaptop,
    isTablet,
    isMobileL,
  );

  const squareAnimation = isMounted ? (
    <SquaresAnimation
      className="h-[24px] w-[26px] animate-fade-down lg:h-[46px] lg:w-[50px]"
      squares={numSquares}
    />
  ) : null;

  return (
    <section className="relative flex min-h-[calc(100svh-62px)] flex-col items-center justify-between px-[13px] py-[29px] lg:px-[25px]">
      <div className="w-full">{squareAnimation}</div>
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex flex-col gap-[8px]">
          <h1 className="animate-fade-left text-[20px] delay-100 md:text-2xl xl:text-[32px]">
            FrontEnd Developer
          </h1>
          <h2 className="animate-fade-right text-[24px] delay-200 md:text-3xl xl:text-[36px]">
            HELLO, I&apos;M JHONATHAN
          </h2>
        </div>
        <div className="mt-[30px] flex items-center gap-[28px]">
          <p className="text animate-fade rounded-full border border-dashed border-black px-[14px] py-[7px] text-[12px] animate-delay-500 dark:border-white md:text-[14px]">
            minimalist design
          </p>
          <p className="animate-fade rounded-full border border-dashed border-black px-[14px] py-[7px] text-[12px] animate-delay-500 dark:border-white md:text-[16px]">
            web applications
          </p>
        </div>
        <a
          href="#contact"
          className="mt-[73px] animate-jump-in border-[0.5px] border-black px-[29px] py-[11px] text-[14px] animate-delay-1000 dark:border-white md:text-[18px] xl:text-[20px]"
        >
          CONTACT-ME
        </a>
      </div>
      <div className="w-full">{squareAnimation}</div>
    </section>
  );
}
