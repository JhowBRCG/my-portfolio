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
  const { img, name, technologies, demo, repo, description } = project;
  return (
    <div className="fixed inset-0 h-full w-full bg-black-opacity">
      <article className="absolute inset-0 m-auto flex h-fit w-[80%] flex-col gap-[11px] bg-bg-light p-[20px] shadow-sm shadow-black-opacity dark:bg-bg-dark dark:shadow-white-opacity lg:flex-row xl:w-[840px]">
        <Image
          className="h-[150px] w-full object-cover object-top md:h-[200px] lg:h-[300px] lg:w-[50%] xl:h-[400px]"
          src={img}
          width={999}
          height={999}
          alt={name}
        />
        <div className="flex-col lg:flex">
          <h3 className="text-[20px] md:text-[24px] xl:text-[28px]">{name}</h3>
          <ul className="flex gap-[10px]">
            {technologies.map((tech, i) => (
              <li className="mt-[10px] text-[22px] xl:text-[30px]" key={i}>
                {tech}
              </li>
            ))}
          </ul>
          <p className="mt-[10px] text-justify xl:mt-[20px] xl:text-[20px]">
            {description}
          </p>
          <div className="mb-[50px] mt-[21px] flex justify-between gap-[3px] lg:mb-0 lg:mt-auto lg:justify-start">
            <Link
              target="_blank"
              className="w-full border border-line-light p-[7px] text-center dark:border-line-dark lg:w-[150px]"
              href={demo}
            >
              VIEW PAGE
            </Link>
            <Link
              target="_blank"
              className="w-full border border-line-light p-[7px] text-center dark:border-line-dark lg:w-[150px]"
              href={repo}
            >
              RESPOSITORY
            </Link>
          </div>
          <button
            onClick={closeModal}
            className="absolute bottom-0 right-0 border-l border-t border-line-light p-[10px] text-[20px] hover:bg-line-light dark:border-line-dark dark:hover:bg-line-dark"
          >
            <MdOutlineClose />
          </button>
        </div>
      </article>
    </div>
  );
}
