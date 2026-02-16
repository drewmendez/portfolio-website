'use client'

import type * as React from 'react'
import { createContext } from 'react'

export interface ToggleContextProps {
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const ToggleContext = createContext<ToggleContextProps | null>(null)
