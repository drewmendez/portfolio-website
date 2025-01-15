import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Image, { StaticImageData } from "next/image";
import Project1 from "../../public/edusphere.gif";
import Project2 from "../../public/kanban-board.gif";
import Project3 from "../../public/spacex.png";
import Project4 from "../../public/newsbuzz-website.png";
import Project5 from "../../public/quiz-game-webapp.png";
import Project6 from "../../public/fake-store-ecommerce-webapp.png";
import Project7 from "../../public/notes-todo-webapp.png";
import Project8 from "../../public/blue-cafe-website.png";
import Project9 from "../../public/clipboard-landing-page.png";

type Project = {
  image: StaticImageData;
  title: string;
  description: string;
  techs: string[];
  githubLink: string;
  liveLink: string;
  isLive: boolean;
};

const projects = [
  {
    image: Project1,
    title: "EduSphere",
    description:
      "An LMS application inspired by Google Classroom's UI and functionality.",
    techs: ["React", "Tailwind", "Express", "MySQL"],
    githubLink: "https://github.com/drewmendez/edusphere-lms",
    liveLink: "#",
    isLive: false,
  },
  {
    image: Project2,
    title: "Kanban Board",
    description:
      "An application where you can manage tasks efficiently with drag and drop.",
    techs: ["React", "Tailwind", "Express", "MySQL"],
    githubLink: "https://github.com/drewmendez/kanban-board-webapp",
    liveLink: "#",
    isLive: false,
  },
  {
    image: Project3,
    title: "SpaceX Launch Tracker",
    description:
      "A website that tracks and displays detailed information about SpaceX past launches.",
    techs: ["Vue/Nuxt", "Vuetify", "Typescript"],
    githubLink: "https://github.com/drewmendez/spacex-launch-tracker",
    liveLink: "https://spacexnuxt.vercel.app",
    isLive: true,
  },
  {
    image: Project4,
    title: "NewsBuzz",
    description:
      "A website where you can browse news articles around the world.",
    techs: ["Next", "Typescript", "Tailwind"],
    githubLink: "https://github.com/drewmendez/newsbuzz-website",
    liveLink: "https://newsbuzz-website.vercel.app",
    isLive: true,
  },
  {
    image: Project5,
    title: "Quiz Game",
    description:
      "An engaging game that tests players' knowledge across various subjects.",
    techs: ["React", "Typescript", "Tailwind"],
    githubLink: "https://github.com/drewmendez/trivia-sprint-game",
    liveLink: "https://trivia-sprint.vercel.app",
    isLive: true,
  },
  {
    image: Project6,
    title: "Fake Store",
    description: "An E-commerce website focused on clean design and good UX",
    techs: ["React", "Sass"],
    githubLink: "https://github.com/drewmendez/fake-store-webapp",
    liveLink: "https://ecomm-fakestore.vercel.app/",
    isLive: true,
  },
  {
    image: Project7,
    title: "Notes | Todos",
    description: "A webapp where you can take notes and list your todos.",
    techs: ["Javascript", "CSS", "HTML"],
    githubLink: "https://github.com/drewmendez/notes-todo-webapp",
    liveLink: "https://drewmendez.github.io/notes-todo-webapp",
    isLive: true,
  },
  {
    image: Project8,
    title: "Blue Cafe",
    description: "A cafe website",
    techs: ["HTML", "CSS", "Javascript"],
    githubLink: "https://github.com/drewmendez/blue-cafe-website",
    liveLink: "https://drewmendez.github.io/blue-cafe-website",
    isLive: true,
  },
  {
    image: Project9,
    title: "Clipboard",
    description: "A landing page",
    techs: ["HTML", "CSS"],
    githubLink: "https://github.com/drewmendez/clipboard-landing-page",
    liveLink: "https://drewmendez.github.io/clipboard-landing-page",
    isLive: true,
  },
];

export default function Projects() {
  return (
    <section className="py-16 bg-[#fafafa]" id="projects">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16">
        <div className="flex justify-center">
          <h2 className="font-bold text-[#2d2e32] text-2xl mb-10 inline-block border-b-2 pb-2 border-slate-400">
            Projects
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="p-4 shadow-inner  bg-[#F0F2F2] rounded-xl">
      <Image
        className="border rounded-lg border-slate-300 w-full aspect-video"
        src={project.image}
        alt="Project image"
        quality={100}
      />

      <div className="mt-3">
        <h3 className="font-extrabold text-2xl text-[#2d2e32]">
          {project.title}
        </h3>
        <p className="line-clamp-2 text-slate-600 h-[48px]">
          {project.description}
        </p>
      </div>

      <div className="mt-3 divide-y">
        <div className="flex gap-2 mb-2">
          {project.techs.map((tech) => (
            <Badge key={tech} tech={tech} />
          ))}
        </div>
        <div className="flex text-sm pt-2 justify-end gap-2">
          <a
            className="flex items-center gap-1 py-1 px-2 bg-slate-800 text-white rounded-sm duration-300 hover:opacity-70"
            href={project.githubLink}
            target="_blank"
          >
            Code <FaGithub className="inline" />
          </a>
          <a
            className="flex items-center gap-1 py-1 px-2 bg-slate-800 text-white rounded-sm duration-300 hover:opacity-70"
            href={project.liveLink}
            target="_blank"
            tabIndex={-1}
          >
            <button
              disabled={!project.isLive}
              className={`${!project.isLive && "cursor-not-allowed"}`}
            >
              Live <FaArrowUpRightFromSquare className="inline" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

function Badge({ tech }: { tech: string }) {
  return (
    <span className="bg-slate-400 rounded-full py-1 px-2 text-xs text-white">
      {tech}
    </span>
  );
}
