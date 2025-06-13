import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
	return (
		<>
			<Head>
				<title>Kunwar Padda | Full-Stack Developer & Software Engineer</title>
				<link rel="shortcut icon" href="/favicon.png" />
				<meta
					name="description"
					content="Kunwar Padda - Passionate full-stack developer specializing in React, Python, and cloud technologies. Creating innovative web solutions and scalable applications."
				/>
				<meta
					name="keywords"
					content="Kunwar Padda, Software Engineer, Full-Stack Developer, React, Python, Flask, JavaScript, Web Development, Cloud Computing, Azure, AWS"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta
					property="og:title"
					content="Kunwar Padda | Full-Stack Developer & Software Engineer"
				/>
				<meta
					property="og:description"
					content="Passionate full-stack developer creating innovative web solutions with modern technologies. Let's build something amazing together!"
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
				<meta name="twitter:title" content="Kunwar Padda | Full-Stack Developer" />
				<meta name="twitter:description" content="Creating innovative web solutions with modern technologies" />
				<meta name="twitter:image" content="/profile.png" />
				<link rel="canonical" href="https://kunwarpadda.github.io" />
			</Head>
			<Home />
		</>
	);
}
