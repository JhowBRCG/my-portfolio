"use client";

import Image from "next/image";
import ProjectModal from "../ProjectModal";
import useModal from "@/lib/hooks/useModal";

type ProjectCardProps = {
  img: string;
  name: string;
  techs: JSX.Element[];
  repo: string;
  demo: string;
};

export default function ProjectCard({
  img,
  name,
  techs,
  repo,
  demo,
}: ProjectCardProps) {
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
      {modal && (
        <ProjectModal
          img={img}
          name={name}
          techs={techs}
          repo={repo}
          demo={demo}
          closeModal={closeModal}
        />
      )}
    </>
  );
}
