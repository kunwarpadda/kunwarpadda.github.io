import { motion } from "framer-motion";
import { StandardButton } from "@/components/buttons/StandardButton";
import styles from "./hero.module.scss";

const disciplines = [
	"Digital ink",
	"Product systems",
	"Geospatial data",
	"Applied research",
];

export const Hero = () => {
	return (
		<section id="home" className={`section-wrapper ${styles.hero}`}>
			<motion.div
				className={styles.copyWrapper}
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.55, ease: "easeOut" }}
			>
				<p className={styles.eyebrow}>Systems / Product / Research</p>

				<h1 className={styles.title}>
					Kunwarbir Singh
					<span>Padda</span>
				</h1>

				<div className={styles.statement}>
					<h2>Systems &amp; Product Engineer</h2>
					<p>
						I build <strong>Neeh</strong>, an open-source digital-ink SDK, and work
						across production products, LiDAR workflows, and applied research.
					</p>
				</div>

				<ul className={styles.disciplines} aria-label="Areas of work">
					{disciplines.map((discipline) => (
						<li key={discipline}>{discipline}</li>
					))}
				</ul>

				<div className={styles.heroButtons}>
					<StandardButton
						onClick={() => document.getElementById("projects")?.scrollIntoView()}
					>
						Explore my work
					</StandardButton>
					<StandardButton
						onClick={() => document.getElementById("contact")?.scrollIntoView()}
						variant="outline"
					>
						Get in touch
					</StandardButton>
				</div>
			</motion.div>
		</section>
	);
};
