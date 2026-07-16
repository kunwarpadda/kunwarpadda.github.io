import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import Link from "next/link";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import styles from "./projects.module.scss";

type WorkItem = {
	title: string;
	eyebrow: string;
	description: string;
	details: string[];
	tech: string[];
	link?: string;
	linkLabel?: string;
};

const featuredWork: WorkItem[] = [
	{
		title: "Neeh SDK",
		eyebrow: "Open-source systems work",
		description:
			"A structured digital-ink SDK that turns pen strokes into stable, queryable context for assistants, analysis tools, and interoperable ink workflows.",
		details: [
			"Designed stable stroke identity, temporal and geometric analysis, and bounded context retrieval.",
			"Ships validated tool surfaces, UIM support, Python APIs, and a C++17 core with a C ABI.",
			"Backed by benchmarks, a technical paper, CI, and a public v0.2.0 prerelease.",
		],
		tech: ["Python", "C++17", "C ABI", "CMake", "Digital Ink", "CI"],
		link: "https://github.com/kunwarpadda/Neeh-SDK",
		linkLabel: "View Neeh on GitHub",
	},
	{
		title: "Production Product Engineering",
		eyebrow: "Private product work",
		description:
			"End-to-end product and platform engineering across mobile clients, backend services, operational tooling, and the failure paths that connect them.",
		details: [
			"Builds cross-platform product flows with React Native and TypeScript.",
			"Works across Node.js services, PostgreSQL data models, caching, authentication, and background processing.",
			"Treats permissions, retries, idempotency, state recovery, testing, and release safety as product requirements.",
		],
		tech: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker"],
	},
	{
		title: "GeoBC & LiDAR Work",
		eyebrow: "Geospatial data engineering",
		description:
			"Professional and public learning work with LiDAR, point clouds, quality control, and Python-based geospatial data workflows.",
		details: [
			"Works with point-cloud data and repeatable quality-control workflows.",
			"Uses Python tooling to inspect, validate, transform, and explain spatial datasets.",
			"Maintains a public LiDAR learning module that makes the fundamentals reproducible and approachable.",
		],
		tech: ["Python", "LiDAR", "Point Clouds", "Geospatial Data", "Quality Control"],
		link: "https://github.com/kunwarpadda/LiDAR-Learning-Module",
		linkLabel: "View the LiDAR module",
	},
	{
		title: "WEARLYZE",
		eyebrow: "Computer vision collaboration",
		description:
			"A team-built visual clothing analysis and retrieval project combining data preparation, model training, similarity search, and an interactive segmentation experience.",
		details: [
			"Contributed data-loading and transformation pipelines for model-ready inputs.",
			"Built parts of the model, training, and retrieval workflow.",
			"Contributed the garment-segmentation interface used to explore results.",
		],
		tech: ["Python", "PyTorch", "Computer Vision", "Retrieval", "Segmentation"],
		link: "https://github.com/NishantSaiChalla/WEARLYZE",
		linkLabel: "View the team repository",
	},
	{
		title: "AI Development Research",
		eyebrow: "Empirical software engineering",
		description:
			"A collaborative study of AI-assisted development, grounded in repository data, reproducible analysis, and careful interpretation of developer outcomes.",
		details: [
			"Owned the RQ4 developer-experience analysis and final synthesis.",
			"Built GitHub-enriched pull-request complexity models and audited class imbalance.",
			"Added robustness checks and figures to keep conclusions tied to the available evidence.",
		],
		tech: ["Python", "GitHub Data", "Statistical Analysis", "Research"],
		link: "https://github.com/lukethomas27/group6-aidev-research-final",
		linkLabel: "Read the research repository",
	},
];

const earlierWork = [
	{
		title: "RoomChat",
		description: "A Flask and Socket.IO real-time chat project.",
		link: "https://github.com/kunwarpadda/RoomChat",
	},
	{
		title: "BudgetBuddy",
		description: "A Python price-monitoring and email-alert automation project.",
		link: "https://github.com/kunwarpadda/BudgetBuddy",
	},
	{
		title: "BrightDash",
		description: "A Selenium browser-automation project for repetitive portal workflows.",
		link: "https://github.com/kunwarpadda/BrightDash",
	},
	{
		title: "TaskFlow",
		description: "An earlier Flask task-management application.",
		link: "https://github.com/kunwarpadda/Todo-App",
	},
];

export const Projects = () => {
	return (
		<section className="section-wrapper" id="projects">
			<SectionHeader title="Selected Work" dir="r" />

			<div className={styles.featuredIntro}>
				<Reveal>
					<p>
						A focused selection of systems work, product engineering, spatial data,
						computer vision, and empirical research. Public links point to the work
						and evidence behind each claim.
					</p>
				</Reveal>
			</div>

			<div className={styles.featuredGrid}>
				{featuredWork.map((project, index) => (
					<Reveal key={project.title} width="100%">
						<article className={styles.featuredCard}>
							<div className={styles.featuredNumber}>
								{String(index + 1).padStart(2, "0")}
							</div>
							<p className={styles.eyebrow}>{project.eyebrow}</p>
							<h3 className={styles.projectTitle}>{project.title}</h3>
							<p className={styles.projectDescription}>{project.description}</p>

							<div className={styles.techStack}>
								{project.tech.map((item) => (
									<span key={item} className={styles.techChip}>
										{item}
									</span>
								))}
							</div>

							<ul className={styles.technicalList}>
								{project.details.map((detail) => (
									<li key={detail} className={styles.technicalItem}>
										<span className={styles.arrow}>—</span>
										{detail}
									</li>
								))}
							</ul>

							{project.link && (
								<Link
									className={styles.projectLink}
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
								>
									<AiFillGithub aria-hidden="true" />
									{project.linkLabel}
									<AiOutlineExport aria-hidden="true" />
								</Link>
							)}
						</article>
					</Reveal>
				))}
			</div>

			<div className={styles.earlierWork}>
				<Reveal>
					<div>
						<p className={styles.eyebrow}>Learning archive</p>
						<h3>Earlier Work</h3>
						<p className={styles.earlierIntro}>
							Smaller projects that document the path to the systems work above.
						</p>
					</div>
				</Reveal>
				<div className={styles.earlierGrid}>
					{earlierWork.map((project) => (
						<Link
							key={project.title}
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className={styles.earlierCard}
						>
							<strong>{project.title}</strong>
							<span>{project.description}</span>
							<AiOutlineExport aria-hidden="true" />
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};
