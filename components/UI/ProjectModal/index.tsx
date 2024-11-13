import { MdOutlineClose } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

type ProjectModalProps = {
  img: string;
  name: string;
  techs: JSX.Element[];
  repo: string;
  demo: string;
  closeModal: () => void;
};

export default function ProjectModal({
  img,
  name,
  techs,
  repo,
  demo,
  closeModal,
}: ProjectModalProps) {
  return (
    <div className="bg-black-opacity fixed inset-0 h-full w-full">
      <article className="dark:shadow-white-opacity shadow-black-opacity absolute inset-0 m-auto h-fit w-[80%] bg-bg-light p-[20px] shadow-sm dark:bg-bg-dark">
        <Image src={img} width={999} height={999} alt={name} />
        <h3 className="mt-[11px] text-[20px]">{name}</h3>
        <ul className="flex gap-[10px]">
          {techs.map((tech, i) => (
            <li className="mt-[10px] text-[22px]" key={i}>
              {tech}
            </li>
          ))}
        </ul>
        <p className="mt-[10px] text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
          laudantium hic! Vero facere id, inventore nulla quasi magni nemo minus
        </p>
        <div className="mb-[50px] mt-[21px] flex justify-between gap-[3px]">
          <Link
            target="_blank"
            className="w-full border border-line-light p-[7px] text-center dark:border-line-dark"
            href={demo}
          >
            VIEW PAGE
          </Link>
          <Link
            target="_blank"
            className="w-full border border-line-light p-[7px] text-center dark:border-line-dark"
            href={repo}
          >
            RESPOSITORIE
          </Link>
        </div>
        <button
          onClick={closeModal}
          className="absolute bottom-0 right-0 border-l border-t border-line-light p-[10px] text-[20px] dark:border-line-dark"
        >
          <MdOutlineClose />
        </button>
      </article>
    </div>
  );
}
