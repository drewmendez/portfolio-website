import Link from 'next/link'
import MobileNav from './MobileNav'
import MenuButton from './ui/MenuButton'

export default function Header() {
	return (
		<>
			<header className="glass-card fixed top-0 z-10 w-full px-6 py-6 md:px-16">
				<nav className="flex items-center justify-between">
					<Link className="text-2xl font-extrabold text-[#2d2e32]" href="/">
						Drew.dev
					</Link>
					<div className="hidden gap-5 font-semibold text-[#2d2e32] sm:flex">
						<Link className="duration-300 hover:opacity-70" href="/">
							Home
						</Link>
						<Link className="duration-300 hover:opacity-70" href="#projects">
							Projects
						</Link>
						<Link className="duration-300 hover:opacity-70" href="#about">
							About
						</Link>
						<Link className="duration-300 hover:opacity-70" href="#contact">
							Contact
						</Link>
					</div>
					<MenuButton />
				</nav>
			</header>
			<MobileNav />
		</>
	)
}
