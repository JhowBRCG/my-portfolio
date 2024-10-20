"use client";

import { useEffect } from "react";
import SubTitle from "../SubTitle";
import { Observer } from "tailwindcss-intersect";

export default function About() {
  useEffect(() => Observer.start(), []);

  return (
    <section className="mx-[22px] mt-[51px]">
      <SubTitle text="Know me a litte bit" textCenter={false} />
      <div className="mt-[25px] min-h-[624px] w-full border border-line-light bg-about-mobile-light bg-contain bg-bottom bg-no-repeat dark:border-line-dark dark:bg-about-mobile-dark">
        <div className="grid grid-cols-2 gap-y-5 px-[16px] py-[50px]">
          <p className="intersect:animate-fade-up col-span-2 text-center text-[24px] animate-delay-[100ms]">
            JHONATHAN
          </p>
          <p className="intersect:animate-fade-up col-span-2 text-right text-[24px] animate-delay-[200ms]">
            FrontEnd
          </p>
          <p className="intersect:animate-fade-up col-span-2 text-left text-[24px] animate-delay-[300ms]">
            brazilian
          </p>
          <p className="intersect:animate-fade-up col-span-2 text-right text-[24px] animate-delay-[400ms]">
            English
          </p>
          <p className="intersect:animate-fade-up col-span-2 text-left text-[24px] animate-delay-[500ms]">
            dark mode
          </p>
          <p className="intersect:animate-fade-up col-span-2 text-center text-[24px] animate-delay-[600ms]">
            web applications
          </p>
          <p className="intersect:animate-fade-up text-left text-[24px] animate-delay-[700ms]">
            minimalist
          </p>
          <p className="intersect:animate-fade-up text-right text-[24px] animate-delay-[800ms]">
            code
          </p>
          <p className="intersect:animate-fade-up col-span-2 text-center text-[24px] animate-delay-[900ms]">
            React
          </p>
        </div>
      </div>
    </section>
  );
}
