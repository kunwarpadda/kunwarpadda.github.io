import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
	return (
		<>
			<Head>
				<title>Kunwar Padda | Software Engineer</title>
				<link rel="shortcut icon" href="/favicon.png" />
				<meta
					name="description"
					content="Kunwar Padda | Software Engineer"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta
					property="og:title"
					content="Kunwar Padda | Software Engineer"
				/>
			</Head>
			<Home />
		</>
	);
}
