"use client";

import { useEffect } from "react";
import SubTitle from "../SubTitle";
import { Observer } from "tailwindcss-intersect";

export default function About() {
  useEffect(() => Observer.start(), []);

  return (
    <section className="mx-[22px] mt-[51px] xl:mx-[42px]">
      <SubTitle text="Know me a litte bit" textCenter={false} />
      <div className="mt-[25px] min-h-[624px] w-full border border-line-light bg-about-mobile-light bg-contain bg-bottom bg-no-repeat dark:border-line-dark dark:bg-about-mobile-dark md:bg-[center_bottom_-100px] lg:bg-[center_bottom_-170px] xl:bg-about-desktop-light xl:bg-left dark:xl:bg-about-desktop-dark">
        <div className="grid grid-cols-2 gap-y-5 px-[16px] py-[50px] md:px-[100px] xl:ml-auto xl:mr-[200px] xl:mt-[58px] xl:w-fit xl:grid-cols-3 xl:gap-x-4 xl:gap-y-12 xl:p-0">
          <p className="col-span-2 text-center text-[24px] animate-delay-[100ms] intersect:animate-fade-up xl:col-span-3 xl:text-[36px]">
            JHONATHAN
          </p>
          <p className="col-span-2 text-right text-[24px] animate-delay-[200ms] intersect:animate-fade-up md:col-auto md:text-center xl:col-auto xl:text-left xl:text-[36px]">
            FrontEnd
          </p>
          <p className="col-span-2 text-[24px] animate-delay-[300ms] intersect:animate-fade-up md:col-auto md:text-center xl:text-[36px]">
            brazilian
          </p>
          <p className="col-span-2 text-right text-[24px] animate-delay-[400ms] intersect:animate-fade-up xl:col-auto xl:text-right xl:text-[36px]">
            English
          </p>
          <p className="col-span-2 text-left text-[24px] animate-delay-[500ms] intersect:animate-fade-up xl:col-auto xl:text-center xl:text-[36px]">
            dark mode
          </p>
          <p className="col-span-2 text-center text-[24px] animate-delay-[600ms] intersect:animate-fade-up xl:col-span-2 xl:text-right xl:text-[36px]">
            web applications
          </p>
          <p className="text-left text-[24px] animate-delay-[700ms] intersect:animate-fade-up xl:text-left xl:text-[36px]">
            minimalist
          </p>
          <p className="text-right text-[24px] animate-delay-[800ms] intersect:animate-fade-up xl:col-span-2 xl:text-center xl:text-[36px]">
            code
          </p>
          <p className="xl:text-ce col-span-2 text-center text-[24px] animate-delay-[900ms] intersect:animate-fade-up xl:col-span-3 xl:text-[36px]">
            React
          </p>
        </div>
      </div>
    </section>
  );
}
