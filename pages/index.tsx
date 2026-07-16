import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
	return (
		<>
			<Head>
				<title>Kunwarbir Singh Padda | Systems &amp; Product Engineer</title>
				<link rel="shortcut icon" href="/favicon.png" />
				<meta
					name="description"
					content="Kunwarbir Singh Padda builds Neeh, an open-source digital-ink SDK, and works across production product systems, LiDAR workflows, computer vision, and empirical software research."
				/>
				<meta
					name="keywords"
					content="Kunwarbir Singh Padda, Neeh SDK, Software Engineer, Product Engineer, Digital Ink, Python, C++, TypeScript, LiDAR, Geospatial, Computer Vision"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta
					property="og:title"
					content="Kunwarbir Singh Padda | Systems & Product Engineer"
				/>
				<meta
					property="og:description"
					content="Open-source digital ink, production product systems, LiDAR workflows, computer vision, and empirical software research."
				/>
				<meta
					property="og:image"
					content="/profile.png"
				/>
				<meta
					property="og:url"
					content="https://kunwarpadda.github.io"
				/>
				<meta
					property="og:type"
					content="website"
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Kunwarbir Singh Padda | Systems & Product Engineer" />
				<meta name="twitter:description" content="Building Neeh and working across production systems, LiDAR, computer vision, and software research." />
				<meta name="twitter:image" content="/profile.png" />
				<link rel="canonical" href="https://kunwarpadda.github.io" />
			</Head>
			<Home />
		</>
	);
}
