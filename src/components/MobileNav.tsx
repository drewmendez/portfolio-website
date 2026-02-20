'use client'

import Link from 'next/link'

export default function MobileNav({
	isMobileNavOpen,
	setIsMobileNavOpen,
}: {
	isMobileNavOpen: boolean
	setIsMobileNavOpen: (isMobileNavOpen: boolean) => void
}) {
	return (
		<nav
			className={`glass-card fixed top-22 right-2 grid place-items-center gap-3 rounded-xl px-10 py-8 text-lg font-semibold text-foreground/70 ${
				isMobileNavOpen ? 'translate-x-0' : 'translate-x-50'
			} transition-transform duration-300 ease-out`}
		>
			<Link href="/" onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
				Home
			</Link>
			<Link href="#projects" onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
				Projects
			</Link>
			<Link href="#about" onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
				About
			</Link>
			<Link href="#contact" onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
				Contact
			</Link>
		</nav>
	)
}
