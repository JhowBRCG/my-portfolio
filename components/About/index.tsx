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
          <p className="col-span-2 text-center text-[24px] animate-delay-[100ms] intersect:animate-fade-up">
            JHONATHAN
          </p>
          <p className="col-span-2 text-right text-[24px] animate-delay-[200ms] intersect:animate-fade-up">
            FrontEnd
          </p>
          <p className="col-span-2 text-left text-[24px] animate-delay-[300ms] intersect:animate-fade-up">
            brazilian
          </p>
          <p className="col-span-2 text-right text-[24px] animate-delay-[400ms] intersect:animate-fade-up">
            English
          </p>
          <p className="col-span-2 text-left text-[24px] animate-delay-[500ms] intersect:animate-fade-up">
            dark mode
          </p>
          <p className="col-span-2 text-center text-[24px] animate-delay-[600ms] intersect:animate-fade-up">
            web applications
          </p>
          <p className="text-left text-[24px] animate-delay-[700ms] intersect:animate-fade-up">
            minimalist
          </p>
          <p className="text-right text-[24px] animate-delay-[800ms] intersect:animate-fade-up">
            code
          </p>
          <p className="col-span-2 text-center text-[24px] animate-delay-[900ms] intersect:animate-fade-up">
            React
          </p>
        </div>
      </div>
    </section>
  );
}
