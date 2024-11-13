"use client";

import Image from "next/image";
import ProjectModal from "../ProjectModal";
import useModal from "@/lib/hooks/useModal";
import { ProjectProps } from "@/lib/@types/projectProps";

type ProjectCardProps = {
  project: ProjectProps;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { img, name } = project;
  const { modal, openModal, closeModal } = useModal();

  return (
    <>
      <article
        onClick={openModal}
        className="w-full border border-line-light p-[10px] dark:border-line-dark"
      >
        <Image
          className="h-[200px] w-full object-cover object-top"
          src={img}
          alt={name}
          width={999}
          height={999}
          priority
        />
        <p className="mt-[9px] xl:text-[20px]">{name}</p>
      </article>
      {modal && <ProjectModal project={project} closeModal={closeModal} />}
    </>
  );
}
