import { cn } from "@/lib/utils/cn";
import { createIndexByInput } from "@/lib/utils/createIndexByInput";

type SquaresAnimationProps = {
  className: string;
  squares: number;
};

const delayIncrease = 100;

export default function SquaresAnimation({
  className,
  squares,
}: SquaresAnimationProps) {
  const squaresArr = [""];
  createIndexByInput(squares, squaresArr);

  return (
    <div className="flex justify-center gap-[5px] lg:gap-[16px]">
      {squaresArr.map((e: string, i: number) => (
        <div
          key={i}
          className={cn(
            `border border-black bg-transparent dark:border-white`,
            className,
          )}
          style={{ animationDelay: `${i * delayIncrease}ms` }}
        />
      ))}
    </div>
  );
}
