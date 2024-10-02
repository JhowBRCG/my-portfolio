import { cn } from "@/lib/utils/cn";

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
  for (let index = 0; index < squares - 1; index++) squaresArr.push("");

  return (
    <div className="flex gap-[5px]">
      {squaresArr.map((e: string, i: number) => (
        <div
          key={i}
          className={cn(
            `animate-fade-down border border-black bg-transparent dark:border-white`,
            className,
          )}
          style={{ animationDelay: `${i * delayIncrease}ms` }}
        />
      ))}
    </div>
  );
}
