"use client";

import useEmblaCarousel from "embla-carousel-react";
import { skillIcons } from "@/data/skillIcons";

export default function Skills() {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
    loop: true,
    align: "start",
  });
  return (
    <section
      className="overflow-hidden border-y border-line-light dark:border-line-dark"
      ref={emblaRef}
    >
      <ul className="flex items-center divide-x-[1px] divide-line-light dark:divide-line-dark">
        {skillIcons.map((icon, i) => (
          <li
            key={i}
            className="flex flex-[0_0_50px] justify-center px-[9px] py-[18px] text-[38px] first:border-l first:dark:border-line-dark md:flex-[0_0_80px] lg:flex-[0_0_120px] xl:flex-[0_0_150px]"
          >
            {icon.icon}
          </li>
        ))}
      </ul>
    </section>
  );
}
