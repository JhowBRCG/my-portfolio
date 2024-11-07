import SubTitle from "../SubTitle";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <section className="mx-[22px] mt-[51px] xl:mx-[42px]">
      <SubTitle text="Contact with me" textCenter={true} />
      <div className="mx-[-22px] mt-[46px] border-y border-line-light dark:border-line-dark xl:mx-[-42px]">
        <ul className="flex items-center justify-between divide-x-2 divide-line-light dark:divide-line-dark">
          <li className="w-full px-[23px] py-[20px]">
            <a href="mailto:guarino90@gmail.com">
              <MdEmail className="mx-auto text-[27px]" />
            </a>
          </li>
          <li className="w-full px-[23px] py-[20px]">
            <a href="https://www.linkedin.com/in/jhonathan-guarino-61636b173/">
              <FaLinkedinIn className="mx-auto text-[27px]" />
            </a>
          </li>
          <li className="w-full px-[23px] py-[20px]">
            <a href="https://www.instagram.com/jhowbrcg/">
              <RiInstagramFill className="mx-auto text-[27px]" />
            </a>
          </li>
          <li className="w-full px-[23px] py-[20px]">
            <a href="https://x.com/jhowbrcg">
              <FaXTwitter className="mx-auto text-[27px]" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
