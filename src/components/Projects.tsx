import type { Project } from '@/data/projects'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import projects from '@/data/projects'

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
