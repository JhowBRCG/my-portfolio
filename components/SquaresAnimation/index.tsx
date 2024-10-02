import { cn } from "@/lib/utils";

type SquaresAnimationProps = {
  className: string;
};

export default function SquaresAnimation({ className }: SquaresAnimationProps) {
  const squares = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const delayIncrease = 100;

  return (
    <div className="flex gap-[5px]">
      {squares.map((e: number, i: number) => (
        <div
          key={e}
          className={cn(
            `animate-fade-down border border-black bg-transparent animate-delay-[${i * delayIncrease}ms] dark:border-white`,
            className,
          )}
        />
      ))}
    </div>
  );
}
