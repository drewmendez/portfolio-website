import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import ToggleContextProvider from '@/context/ToggleState'
import './globals.css'

const sora = Sora({
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Andrew Jefferson Mendez',
	description: "Hi, I'm Andrew Jefferson Mendez, a Front-end Developer",
	icons: {
		icon: '/icon.png',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html className="scroll-pt-[80px]" lang="en">
			<body className={`${sora.className} antialiased`}>
				<ToggleContextProvider>{children}</ToggleContextProvider>
			</body>
		</html>
	)
}
