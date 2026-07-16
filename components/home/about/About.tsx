import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";

const technologies = [
	"Python",
	"C++",
	"C",
	"TypeScript",
	"React Native",
	"Node.js",
	"PostgreSQL",
	"Redis",
	"Docker",
	"CMake",
	"GitHub Actions",
	"LiDAR",
	"Point Clouds",
	"PyTorch",
];

const focusAreas = [
	{
		metric: "SDK",
		description: "Developer tools with stable interfaces, validation, and reproducible evidence",
	},
	{
		metric: "Systems",
		description: "Mobile, backend, data, and operational paths considered as one product",
	},
	{
		metric: "Spatial",
		description: "LiDAR, point-cloud quality control, and Python geospatial workflows",
	},
];

export const About = () => {
	return (
		<section id="about" className="section-wrapper">
			<SectionHeader title="About" dir="l" />
			<div className={styles.about}>
				<Reveal>
					<div className={styles.intro}>
						<h2 className={styles.headline}>
							I&apos;m a <span className={styles.highlight}>systems and product engineer</span>{" "}
							who likes making difficult technical work understandable, testable, and useful.
						</h2>
						<p className={styles.description}>
							My work spans the open-source <strong>Neeh SDK</strong>, production product
							engineering, LiDAR and point-cloud workflows, computer vision, and empirical
							software research. I&apos;m most useful where a problem crosses boundaries:
							from native code to Python, mobile UI to backend state, or research questions
							to reproducible analysis.
						</p>
					</div>
				</Reveal>

				<Reveal>
					<div className={styles.metrics}>
						{focusAreas.map((area) => (
							<div key={area.metric} className={styles.metric}>
								<div className={styles.metricNumber}>{area.metric}</div>
								<div className={styles.metricDescription}>{area.description}</div>
							</div>
						))}
					</div>
				</Reveal>

				<Reveal>
					<div className={styles.techSection}>
						<h3 className={styles.sectionTitle}>Tools I use</h3>
						<div className={styles.techGrid}>
							{technologies.map((tech) => (
								<span className="chip" key={tech}>{tech}</span>
							))}
						</div>
					</div>
				</Reveal>

				<Reveal>
					<div className={styles.philosophy}>
						<h3 className={styles.sectionTitle}>How I work</h3>
						<div className={styles.philosophyContent}>
							<div className={styles.philosophyItem}>
								<h4>Evidence before claims</h4>
								<p>
									Benchmarks, tests, traces, and failure cases are part of the explanation,
									not something added after the implementation.
								</p>
							</div>
							<div className={styles.philosophyItem}>
								<h4>Interfaces that survive real use</h4>
								<p>
									I care about stable contracts, explicit state, bounded work, recovery paths,
									and the details that make systems operable.
								</p>
							</div>
							<div className={styles.philosophyItem}>
								<h4>Research into product</h4>
								<p>
									I like moving between investigation and implementation, then folding the
									proven seam back into a tool people can actually use.
								</p>
							</div>
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	);
};
