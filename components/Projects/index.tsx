import SubTitle from "../SubTitle";
import { projects } from "@/data/projects";
import ProjectCard from "../ProjectCard";

export default function Projects() {
  return (
    <section className="mx-[22px] mt-[51px] xl:mx-[42px]">
      <SubTitle text="Projects" textCenter={false} />
      <div className="mt-[25px] grid gap-2">
        {projects.map((project, i) => (
          <ProjectCard key={i} img={project.img} name={project.name} />
        ))}
      </div>
    </section>
  );
}
