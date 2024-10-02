import SquaresAnimation from "../SquaresAnimation";

export default function Hero() {
  return (
    <section className="px-[13px] py-[29px]">
      <SquaresAnimation className="h-[24px] w-[26px]" squares={10} />
    </section>
  );
}
