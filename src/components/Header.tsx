import Link from 'next/link'
import links from '@/data/links'
import MenuButton from './ui/MenuButton'

export default function Header() {
	return (
		<>
			<header className="glass-card fixed top-0 z-10 w-full rounded-b-2xl rounded-br-2xl px-6 py-6 md:px-16">
				<nav className="flex items-center justify-between">
					<Link className="text-2xl font-extrabold text-foreground/70" href="/">
						Drew.dev
					</Link>
					<div className="hidden gap-5 font-semibold text-foreground/60 sm:flex">
						{links.map((link) => (
							<Link key={link.name} className="duration-300 hover:opacity-70" href={link.href}>
								{link.name}
							</Link>
						))}
					</div>
					<MenuButton />
				</nav>
			</header>
		</>
	)
}
