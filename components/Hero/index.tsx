import SquaresAnimation from "../SquaresAnimation";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-62px)] flex-col items-center justify-between px-[13px] py-[29px]">
      <div className="w-full">
        <SquaresAnimation
          className="h-[24px] w-[26px] animate-fade-down"
          squares={10}
        />
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex flex-col gap-[8px]">
          <h1 className="animate-fade-left text-[20px] delay-100">
            FrontEnd Developer
          </h1>
          <h2 className="animate-fade-right text-[24px] delay-200">
            HELLO, I&apos;M JHONATHAN
          </h2>
        </div>
        <div className="mt-[30px] flex items-center gap-[28px]">
          <p className="animate-fade rounded-full border border-dashed border-black px-[14px] py-[7px] text-[12px] animate-delay-500 dark:border-white">
            minimalist design
          </p>
          <p className="animate-fade rounded-full border border-dashed border-black px-[14px] py-[7px] text-[12px] animate-delay-500 dark:border-white">
            web applications
          </p>
        </div>
        <a
          href="#"
          className="mt-[73px] animate-jump-in border-[0.5px] border-black px-[29px] py-[11px] text-[14px] animate-delay-1000 dark:border-white"
        >
          CONTACT-ME
        </a>
      </div>
      <div className="w-full">
        <SquaresAnimation
          className="h-[24px] w-[26px] animate-fade-up"
          squares={10}
        />
      </div>
    </section>
  );
}
