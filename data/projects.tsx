import { Icon } from "@iconify/react";

export const projects = [
  {
    name: "Where in the World",
    img: "/images/where-in-the-world.png",
    technologies: [
      <Icon icon="akar-icons:nextjs-fill" key="next" />,
      <Icon icon="nonicons:react-16" key="react" />,
      <Icon icon="teenyicons:typescript-solid" key="type-script" />,
      <Icon icon="bxl:tailwind-css" key="tailwindcss" />,
    ],
    demo: "https://countries-information-eight.vercel.app/",
    repo: "https://github.com/JhowBRCG/countries-information",
  },
  {
    name: "Poke Info",
    img: "/images/pokeinfo.png",
    technologies: [
      <Icon icon="nonicons:react-16" key="react" />,
      <Icon icon="file-icons:styledcomponents" key="styled-components" />,
      <Icon icon="devicon-plain:reactrouter" key="react-router" />,
    ],
    demo: "https://pokeinfo-react.netlify.app/",
    repo: "https://github.com/JhowBRCG/Poke-Info",
  },
  {
    name: "Rock, paper and scissors",
    img: "/images/rock-paper-scissors.png",
    technologies: [
      <Icon icon="nonicons:react-16" key="react" />,
      <Icon icon="file-icons:styledcomponents" key="styled-components" />,
      <Icon icon="teenyicons:typescript-solid" key="type-script" />,
      <Icon icon="file-icons:vite" key="vite" />,
    ],
    demo: "https://rock-paper-scissors-game-sandy-seven.vercel.app/",
    repo: "https://github.com/JhowBRCG/Rock-Paper-Scissors-game",
  },
  {
    name: "GitHub Profile Search",
    img: "/images/git-hub-api-search.png",
    technologies: [
      <Icon icon="bxl:html5" key="html" />,
      <Icon icon="bxl:css3" key="css" />,
      <Icon icon="cib:js" key="java-script" />,
    ],
    demo: "https://jhowbrcg.github.io/git-hub-api-search/",
    repo: "https://github.com/JhowBRCG/git-hub-api-search",
  },
  {
    name: "ToDo List",
    img: "/images/to-do.png",
    technologies: [
      <Icon icon="nonicons:react-16" key="react" />,
      <Icon icon="file-icons:styledcomponents" key="styled-components" />,
      <Icon icon="file-icons:vite" key="vite" />,
    ],
    demo: "https://todo-list-frontendmentor.netlify.app/",
    repo: "https://github.com/JhowBRCG/todo-app",
  },
  {
    name: "Job List",
    img: "/images/job-list.png",
    technologies: [
      <Icon icon="nonicons:react-16" key="react" />,
      <Icon icon="fa6-brands:sass" key="sass" />,
      <Icon icon="teenyicons:typescript-solid" key="type-script" />,
      <Icon icon="file-icons:vite" key="vite" />,
    ],
    demo: "https://job-list-filtering.vercel.app/",
    repo: "https://github.com/JhowBRCG/job-list-filtering",
  },
];
