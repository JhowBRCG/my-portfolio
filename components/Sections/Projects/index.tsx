import SubTitle from "@/components/UI/SubTitle";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/UI/ProjectCard";

export default function Projects() {
  return (
    <section className="mx-[22px] mt-[51px] xl:mx-[42px] xl:mt-[102px]">
      <SubTitle text="Projects" textCenter={false} />
      <div className="mt-[25px] grid gap-2 md:grid-cols-2 md:gap-0 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={i} img={project.img} name={project.name} />
        ))}
      </div>
    </section>
  );
}
