import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import profile from '../../public/me.png'

const icons = [
	'html',
	'css',
	'javascript',
	'typescript',
	'react',
	'next',
	'tailwind',
	'sass',
	'express',
	'nodejs',
	'mysql',
	'postman',
]

export default function Hero() {
	return (
		<section className="min-h-screen bg-[url('/wallpaper.svg')] bg-cover bg-center pt-[80px] md:grid md:place-items-center">
			<div className="mx-auto max-w-[1200px] px-6 py-16 md:px-16">
				<div className="flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between">
					<Image
						className="max-w-[300px] rounded-full border-4 border-[#2d2e32] md:order-2 lg:max-w-[400px]"
						src={profile}
						quality={100}
						alt="Me"
					/>
					<div className="text-center text-[#2d2e32] md:text-start">
						<p className="text-lg text-slate-600">Hello there,</p>
						<h1 className="text-3xl font-extrabold md:mt-2 md:text-4xl lg:text-5xl">
							I&apos;m Andrew Jefferson Mendez
						</h1>
						<p className="text-lg text-slate-600">Aspiring Web Developer.</p>
						<div className="mt-2 flex justify-center gap-4 text-3xl md:mt-5 md:justify-start">
							<a
								className="duration-300 hover:opacity-70"
								href="https://www.linkedin.com/in/andrewjeffersonmendez"
								target="_blank"
							>
								<FaLinkedin />
							</a>
							<a
								className="duration-300 hover:opacity-70"
								href="https://github.com/drewmendez"
								target="_blank"
							>
								<FaGithub />
							</a>
						</div>
					</div>
				</div>
				<div className="mt-16 flex flex-col items-center text-lg font-bold text-[#2d2e32] md:flex-row">
					<p className="mr-0 mb-8 border-b-2 border-slate-400 pb-2 md:mr-6 md:mb-0 md:border-r-2 md:border-b-0 md:pr-5 md:pb-0">
						Skills
					</p>
					<div className="flex flex-wrap justify-center gap-5">
						{icons.map((icon) => (
							<IconCard key={icon} icon={icon} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

function IconCard({ icon }: { icon: string }) {
	return (
		<Image src={`https://skillicons.dev/icons?i=${icon}`} alt={icon} width={55} height={55} unoptimized />
	)
}
