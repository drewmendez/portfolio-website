'use client'

import { useState } from 'react'
import { ToggleContext } from './toggleContext'

export default function ToggleContextProvider({ children }: { children: React.ReactNode }) {
	const [isOpen, setIsOpen] = useState(false)

	return <ToggleContext value={{ isOpen, setIsOpen }}>{children}</ToggleContext>
}
