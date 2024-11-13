import { MdOutlineClose } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { ProjectProps } from "@/lib/@types/projectProps";

type ProjectModalProps = {
  project: ProjectProps;
  closeModal: () => void;
};

export default function ProjectModal({
  project,
  closeModal,
}: ProjectModalProps) {
  const { img, name, technologies, demo, repo } = project;
  return (
    <div className="fixed inset-0 h-full w-full bg-black-opacity">
      <article className="absolute inset-0 m-auto h-fit w-[80%] bg-bg-light p-[20px] shadow-sm shadow-black-opacity dark:bg-bg-dark dark:shadow-white-opacity">
        <Image
          className="h-[150px] w-full object-cover object-top md:h-[200px]"
          src={img}
          width={999}
          height={999}
          alt={name}
        />
        <div>
          <h3 className="mt-[11px] text-[24px]">{name}</h3>
          <ul className="flex gap-[10px]">
            {technologies.map((tech, i) => (
              <li className="mt-[10px] text-[22px]" key={i}>
                {tech}
              </li>
            ))}
          </ul>
          <p className="mt-[10px] text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
            laudantium hic! Vero facere id, inventore nulla quasi magni nemo
            minus
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
              RESPOSITORY
            </Link>
          </div>
          <button
            onClick={closeModal}
            className="absolute bottom-0 right-0 border-l border-t border-line-light p-[10px] text-[20px] dark:border-line-dark"
          >
            <MdOutlineClose />
          </button>
        </div>
      </article>
    </div>
  );
}
