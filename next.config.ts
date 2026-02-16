import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'skillicons.dev',
			},
		],
		qualities: [100],
	},
}

export default nextConfig
