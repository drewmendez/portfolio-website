'use client'

import Link from 'next/link'
import links from '@/data/links'
import cn from '@/helpers/tailwindHelpers'

export default function MobileNav({
	isMobileNavOpen,
	setIsMobileNavOpen,
}: {
	isMobileNavOpen: boolean
	setIsMobileNavOpen: (isMobileNavOpen: boolean) => void
}) {
	return (
		<nav
			className={cn(
				'glass-card fixed top-22 right-2 grid place-items-center gap-3 rounded-xl px-10 py-8 text-lg font-semibold text-foreground/70 transition-transform duration-300 ease-out',
				isMobileNavOpen ? 'translate-x-0' : 'translate-x-50',
			)}
		>
			{links.map((link) => (
				<Link key={link.name} href={link.href} onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
					{link.name}
				</Link>
			))}
		</nav>
	)
}
