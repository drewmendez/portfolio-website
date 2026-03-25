'use client'

import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import { useEffect, useMemo, useRef } from 'react'

type Props = {
	src: StaticImageData
	alt: string
	aos?: string
	className?: string
	imageClassName?: string
}

export default function HeroImage({
	src,
	alt,
	aos = 'fade-left',
	className = '',
	imageClassName = '',
}: Props) {
	const blobRef = useRef<HTMLDivElement | null>(null)

	const makeBlobRadius = useMemo(() => {
		const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min
		const makePair = () => {
			const a = rand(20, 80)
			return [a, 100 - a] as const
		}
		return () => {
			const [a, b] = makePair()
			const [c, d] = makePair()
			const [e, f] = makePair()
			const [g, h] = makePair()
			return `${a}% ${b}% ${c}% ${d}% / ${e}% ${f}% ${g}% ${h}%`
		}
	}, [])

	useEffect(() => {
		const el = blobRef.current
		if (!el) return

		const reduceMotion =
			typeof window !== 'undefined' &&
			window.matchMedia &&
			window.matchMedia('(prefers-reduced-motion: reduce)').matches

		if (reduceMotion) {
			el.style.borderRadius = makeBlobRadius()
			return
		}

		const shapes = Array.from({ length: 7 }, () => makeBlobRadius())
		shapes[shapes.length - 1] = shapes[0]

		const animation = el.animate(
			shapes.map((borderRadius) => ({ borderRadius })),
			{
				duration: 14000,
				easing: 'ease-in-out',
				iterations: Infinity,
			},
		)

		return () => animation.cancel()
	}, [makeBlobRadius])

	return (
		<div ref={blobRef} className={`hero-blob w-fit drop-shadow-xl ${className}`} data-aos={aos}>
			<Image
				className={`max-w-[300px] rounded-[inherit] lg:max-w-[400px] ${imageClassName}`}
				style={{ borderRadius: 'inherit' }}
				src={src}
				quality={100}
				alt={alt}
				loading="eager"
			/>
		</div>
	)
}
