/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		fontLoaders: [
			{ loader: "@next/font/google", options: { subsets: ["latin"] } },
		],
		images: true,
	},
	output: "export",
};

module.exports = nextConfig;
