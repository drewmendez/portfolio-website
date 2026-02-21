import Image from 'next/image'
import profile from '../../public/me.png'

export default function About() {
	return (
		<section className="py-16" id="about">
			<div className="mx-auto max-w-[1200px] px-6 md:px-16">
				<div className="flex justify-center">
					<h2 className="mb-10 inline-block border-b-2 border-slate-400 pb-2 text-2xl font-bold text-[#2d2e32]">
						About Me
					</h2>
				</div>
				<div className="flex flex-col items-center justify-between gap-10 md:flex-row lg:gap-20">
					<Image
						className="w-full max-w-[400px] flex-1 rounded-full drop-shadow-xl drop-shadow-purple-500"
						src={profile}
						data-aos="fade-right"
						quality={100}
						alt="me"
						loading="eager"
					/>
					<div data-aos="fade-left" className="flex-1 text-[#2d2e32]">
						<h3 className="mb-4 text-3xl font-bold">Hello,</h3>
						<p className="text-slate-600">
							I&apos;m Andrew Jefferson Mendez, a Computer Engineering graduate and web developer passionate
							about building clean, responsive, and user-centered web applications. I enjoy turning ideas into
							intuitive digital experiences and continuously improving my skills. My goal is to create
							impactful applications that solve real-world problems and benefit communities.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
