import { ReactNode } from "react";

type SectionDescriptionProps = {
  children: ReactNode;
};

export default function SectionDescription({
  children,
}: SectionDescriptionProps) {
  return (
    <p className="mt-3 text-justify opacity-40 lg:max-w-[75%] lg:text-[20px] xl:text-[24px]">
      {children}
    </p>
  );
}
