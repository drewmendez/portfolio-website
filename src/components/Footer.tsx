import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
	return (
		<footer className="glass-card rounded-tl-2xl rounded-tr-2xl py-10 text-[#2d2e32]">
			<div className="mx-auto max-w-[1200px] px-6 md:px-16">
				<div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
					<Link className="text-2xl font-extrabold" href="/">
						Drew.dev
					</Link>

					<div className="flex gap-4 text-2xl">
						<a
							className="duration-300 hover:opacity-70"
							href="https://www.linkedin.com/in/andrewjeffersonmendez"
							target="_blank"
						>
							<FaLinkedin />
						</a>
						<a className="duration-300 hover:opacity-70" href="https://github.com/drewmendez" target="_blank">
							<FaGithub />
						</a>
					</div>
				</div>

				<p className="mt-5 text-center text-xs md:text-start">
					&copy; {new Date().getFullYear()} Andrew Mendez. All Rights Reserved.
				</p>
			</div>
		</footer>
	)
}
