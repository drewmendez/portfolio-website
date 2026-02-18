import { FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

export default function Contact() {
	return (
		<section className="pt-10 pb-20" id="contact">
			<div className="mx-auto max-w-[1200px] px-6 md:px-16">
				<div className="flex justify-center">
					<h2 className="mb-10 inline-block border-b-2 border-slate-400 pb-2 text-2xl font-bold text-[#2d2e32]">
						Contact Me
					</h2>
				</div>
				<div className="flex flex-col justify-center gap-7 md:flex-row md:gap-20">
					<div className="flex flex-col items-center justify-center gap-3 md:flex-row">
						<div className="rounded-full bg-slate-300 p-3 text-2xl text-[#2d2e32] shadow-inner">
							<FaLinkedin />
						</div>
						<div className="text-center md:text-start">
							<p className="mb-1 font-bold text-[#2d2e32]">LinkedIn</p>
							<a
								className="text-slate-500 duration-300 hover:opacity-70"
								href="https://www.linkedin.com/in/andrewjeffersonmendez"
								target="_blank"
							>
								Andrew Jefferson Mendez
							</a>
						</div>
					</div>
					<div className="flex flex-col items-center justify-center gap-3 md:flex-row">
						<div className="rounded-full bg-slate-300 p-3 text-2xl text-[#2d2e32] shadow-inner">
							<SiGmail />
						</div>
						<div className="text-center md:text-start">
							<p className="mb-1 font-bold text-[#2d2e32]">Gmail</p>
							<a
								className="text-slate-500 duration-300 hover:opacity-70"
								href="mailto:andrewjeff.mendez@gmail.com"
							>
								andrewjeff.mendez@gmail.com
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
