'use client'

import { use } from 'react'
import { ToggleContext } from './toggleContext'

export function useToggleContext() {
	const context = use(ToggleContext)
	if (!context) {
		throw new Error('Toggle context should be used within ToggleContextProvider')
	}
	return context
}
