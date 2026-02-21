import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import Project8 from '../../public/blue-cafe-website.png'
import Project9 from '../../public/clipboard-landing-page.png'
import Project1 from '../../public/edusphere.gif'
import Project6 from '../../public/fake-store-ecommerce-webapp.png'
import Project2 from '../../public/kanban-board.gif'
import Project4 from '../../public/newsbuzz-website.png'
import Project7 from '../../public/notes-todo-webapp.png'
import Project5 from '../../public/quiz-game-webapp.png'
import Project3 from '../../public/spacex.png'

type Project = {
	id: number
	image: StaticImageData
	title: string
	description: string
	techs: string[]
	githubLink: string
	liveLink: string
	isLive: boolean
	isGif?: boolean
}

const projects = [
	{
		id: 1,
		image: Project1,
		title: 'EduSphere',
		description: "An LMS application inspired by Google Classroom's UI and functionality.",
		techs: ['React', 'Tailwind', 'Express', 'MySQL'],
		githubLink: 'https://github.com/drewmendez/edusphere-lms',
		liveLink: '#',
		isLive: false,
		isGif: true,
	},
	{
		id: 2,
		image: Project2,
		title: 'Kanban Board',
		description: 'An application where you can manage tasks efficiently with drag and drop.',
		techs: ['React', 'Tailwind', 'Express', 'MySQL'],
		githubLink: 'https://github.com/drewmendez/kanban-board-webapp',
		liveLink: '#',
		isLive: false,
		isGif: true,
	},
	{
		id: 3,
		image: Project3,
		title: 'SpaceX Launch Tracker',
		description: 'A website that tracks and displays detailed information about SpaceX past launches.',
		techs: ['Vue/Nuxt', 'Vuetify', 'Typescript'],
		githubLink: 'https://github.com/drewmendez/spacex-launch-tracker',
		liveLink: 'https://spacexnuxt.vercel.app',
		isLive: true,
	},
	{
		id: 4,
		image: Project4,
		title: 'NewsBuzz',
		description: 'A website where you can browse news articles around the world.',
		techs: ['Next', 'Typescript', 'Tailwind'],
		githubLink: 'https://github.com/drewmendez/newsbuzz-website',
		liveLink: 'https://newsbuzz-website.vercel.app',
		isLive: true,
	},
	{
		id: 5,
		image: Project5,
		title: 'Quiz Game',
		description: "An engaging game that tests players' knowledge across various subjects.",
		techs: ['React', 'Typescript', 'Tailwind'],
		githubLink: 'https://github.com/drewmendez/trivia-sprint-game',
		liveLink: 'https://trivia-sprint.vercel.app',
		isLive: true,
	},
	{
		id: 6,
		image: Project6,
		title: 'Fake Store',
		description: 'An E-commerce website focused on clean design and good UX',
		techs: ['React', 'Sass'],
		githubLink: 'https://github.com/drewmendez/fake-store-webapp',
		liveLink: 'https://ecomm-fakestore.vercel.app/',
		isLive: true,
	},
	{
		id: 7,
		image: Project7,
		title: 'Notes | Todos',
		description: 'A webapp where you can take notes and list your todos.',
		techs: ['Javascript', 'CSS', 'HTML'],
		githubLink: 'https://github.com/drewmendez/notes-todo-webapp',
		liveLink: 'https://drewmendez.github.io/notes-todo-webapp',
		isLive: true,
	},
	{
		id: 8,
		image: Project8,
		title: 'Blue Cafe',
		description: 'A cafe website',
		techs: ['HTML', 'CSS', 'Javascript'],
		githubLink: 'https://github.com/drewmendez/blue-cafe-website',
		liveLink: 'https://drewmendez.github.io/blue-cafe-website',
		isLive: true,
	},
	{
		id: 9,
		image: Project9,
		title: 'Clipboard',
		description: 'A landing page',
		techs: ['HTML', 'CSS'],
		githubLink: 'https://github.com/drewmendez/clipboard-landing-page',
		liveLink: 'https://drewmendez.github.io/clipboard-landing-page',
		isLive: true,
	},
]

export default function Projects() {
	return (
		<section className="py-16" id="projects">
			<div className="mx-auto max-w-[1200px] px-6 md:px-16">
				<div className="flex justify-center">
					<h2 className="mb-10 inline-block border-b-2 border-slate-400 pb-2 text-2xl font-bold text-[#2d2e32]">
						Projects
					</h2>
				</div>

				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{projects.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</div>
		</section>
	)
}

function ProjectCard({ project }: { project: Project }) {
	return (
		<div data-aos="fade-up" className="glass-card rounded-xl p-4">
			<Image
				className="aspect-video w-full rounded-lg border border-slate-300"
				src={project.image}
				alt="Project image"
				quality={100}
				unoptimized={project.isGif}
			/>

			<div className="mt-3">
				<h3 className="text-2xl font-extrabold text-[#2d2e32]">{project.title}</h3>
				<p className="line-clamp-2 h-[48px] text-slate-600">{project.description}</p>
			</div>

			<div className="mt-3 divide-y">
				<div className="mb-3 flex gap-2 border-slate-400 pb-3">
					{project.techs.map((tech) => (
						<Badge key={tech} tech={tech} />
					))}
				</div>
				<div className="flex justify-end gap-2 text-sm">
					<a
						className="flex items-center gap-1 rounded-sm bg-slate-800 px-2 py-1 text-white duration-300 hover:opacity-70"
						href={project.githubLink}
						target="_blank"
					>
						Code <FaGithub className="inline" />
					</a>
					<a
						className="flex items-center gap-1 rounded-sm bg-slate-800 px-2 py-1 text-white duration-300 hover:opacity-70"
						href={project.liveLink}
						target="_blank"
						tabIndex={-1}
					>
						<button disabled={!project.isLive} className={`${!project.isLive && 'cursor-not-allowed'}`}>
							Live <FaArrowUpRightFromSquare className="inline" />
						</button>
					</a>
				</div>
			</div>
		</div>
	)
}

function Badge({ tech }: { tech: string }) {
	return <span className="rounded-full bg-slate-400 px-2 py-1 text-xs text-white">{tech}</span>
}
