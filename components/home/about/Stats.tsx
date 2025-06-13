import styles from "./stats.module.scss";
import { 
	AiFillCode, 
	AiFillSmile, 
	AiFillTool, 
	AiOutlineCloudServer,
	AiOutlineDatabase,
	AiOutlineMobile
} from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";
import Magnetic from "@/components/Magnetic";

export const Stats = () => {
	const skillCategories = [
		{
			title: "Frontend",
			icon: AiFillCode,
			skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3/SCSS", "Tailwind CSS"]
		},
		{
			title: "Backend",
			icon: AiOutlineCloudServer,
			skills: ["Python", "Flask", "Node.js", "Express.js", "REST APIs", "GraphQL", "Java"]
		},
		{
			title: "Database",
			icon: AiOutlineDatabase,
			skills: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "SQLAlchemy", "Prisma"]
		},
		{
			title: "DevOps & Tools",
			icon: AiFillTool,
			skills: ["Git/GitHub", "Docker", "Azure", "AWS", "Linux", "CI/CD", "Kubernetes"]
		},
		{
			title: "Mobile & Testing",
			icon: AiOutlineMobile,
			skills: ["React Native", "Selenium", "Jest", "JUnit", "Cypress", "Postman"]
		},
		{
			title: "Learning",
			icon: AiFillSmile,
			skills: ["Microservices", "GraphQL", "Blockchain", "AI/ML", "Rust", "Go"]
		}
	];

	return (
		<div className={styles.stats}>
			<div className={styles.statsGrid}>
				{skillCategories.map((category, index) => (
					<Reveal key={category.title}>
						<div className={`${styles.statCard} ${styles[`card${index + 1}`]}`}>
							<div className={styles.cardHeader}>
								<div className={styles.iconWrapper}>
									<category.icon size="2.4rem" className={styles.icon} />
								</div>
								<h4 className={styles.cardTitle}>{category.title}</h4>
							</div>
							<div className={styles.skillsGrid}>
								{category.skills.map((skill) => (
									<Magnetic key={skill}>
										<span className="chip">{skill}</span>
									</Magnetic>
								))}
							</div>
						</div>
					</Reveal>
				))}
			</div>
		</div>
	);
};
