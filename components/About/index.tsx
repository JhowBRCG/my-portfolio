import SubTitle from "../SubTitle";

export default function About() {
  return (
    <section className="mx-[22px] mt-[51px]">
      <SubTitle text="Know me a litte bit" textCenter={false} />
      <div className="mt-[25px] min-h-[624px] w-full border border-line-light bg-about-mobile-light bg-contain bg-bottom bg-no-repeat dark:border-line-dark dark:bg-about-mobile-dark">
        <div className="grid grid-cols-2 gap-y-5 px-[16px] py-[50px]">
          <p className="col-span-2 text-center text-[24px]">JHONTHAN</p>
          <p className="col-span-2 text-right text-[24px]">FrontEnd</p>
          <p className="col-span-2 text-left text-[24px]">brazilian</p>
          <p className="col-span-2 text-right text-[24px]">English</p>
          <p className="col-span-2 text-left text-[24px]">dark mode</p>
          <p className="col-span-2 text-center text-[24px]">web applications</p>
          <p className="text-left text-[24px]">minimalist</p>
          <p className="text-right text-[24px]">code</p>
          <p className="col-span-2 text-center text-[24px]">React</p>
        </div>
      </div>
    </section>
  );
}
