import SubTitle from "../SubTitle";

export default function About() {
  return (
    <section className="mx-[22px] mt-[51px]">
      <SubTitle text="Know me a litte bit" textCenter={false} />
      <div className="dark:bg-about-mobile-dark bg-about-mobile-light mt-[25px] min-h-[624px] w-full border border-line-light bg-contain bg-bottom bg-no-repeat dark:border-line-dark"></div>
    </section>
  );
}
