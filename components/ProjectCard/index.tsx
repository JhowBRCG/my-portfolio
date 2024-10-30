import Image from "next/image";

type ProjectCardProps = {
  img: string;
  name: string;
};

export default function ProjectCard({ img, name }: ProjectCardProps) {
  return (
    <article className="w-full border border-line-light p-[10px] dark:border-line-dark">
      <Image
        className="h-[161px] w-full object-cover object-top"
        src={img}
        alt={name}
        width={255}
        height={90}
        priority
      />
      <p className="mt-[9px]">{name}</p>
    </article>
  );
}
