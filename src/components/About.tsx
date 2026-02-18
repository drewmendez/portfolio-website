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
						className="w-full max-w-[400px] flex-1 rounded-3xl shadow-lg"
						src={profile}
						quality={100}
						alt="me"
					/>
					<div className="flex-1 text-[#2d2e32]">
						<h3 className="mb-4 text-3xl font-bold">Hello,</h3>
						<p className="text-slate-600">
							I&apos;m Andrew Jefferson Mendez, a recent graduate from Catanduanes State University, holding a
							Bachelor&apos;s degree in Computer Engineering. I am passionate about front-end development,
							focusing on crafting responsive and interactive web applications. I also have a strong interest
							in learning new technologies to expand my knowledge and skills. My aspiration is to become a
							successful developer and create applications that benefit communities.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
