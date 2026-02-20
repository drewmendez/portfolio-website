'use client'

import { useState } from 'react'
import { IoClose, IoMenu } from 'react-icons/io5'
import MobileNav from '../MobileNav'

export default function MenuButton() {
	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

	return (
		<>
			<button
				className="text-3xl text-foreground/70 sm:hidden"
				onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
			>
				{isMobileNavOpen ? <IoClose /> : <IoMenu />}
			</button>
			<MobileNav isMobileNavOpen={isMobileNavOpen} setIsMobileNavOpen={setIsMobileNavOpen} />
		</>
	)
}
