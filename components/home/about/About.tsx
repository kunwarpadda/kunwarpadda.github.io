import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import Magnetic from "@/components/Magnetic";

export const About = () => {
	const technologies = [
		"TypeScript", "JavaScript", "PHP", "Python", "React", "Next.js", 
		"Vue.js", "Laravel", "Node.js", "PostgreSQL", "Redis", "Tailwind", 
		"Docker", "Git", "AWS", "MongoDB", "Express.js"
	];

	const achievements = [
		{
			metric: "70%",
			description: "Response time reduction through database optimization",
			icon: "⚡"
		},
		{
			metric: "100k+",
			description: "Daily transactions in real-time inventory system",
			icon: "📊"
		},
		{
			metric: "6x",
			description: "Faster translations with smart caching architecture",
			icon: "🚀"
		}
	];

	return (
		<section id="about" className="section-wrapper">
			<SectionHeader title="About" dir="l" />
			<div className={styles.about}>
				{/* Main Introduction */}
				<Reveal>
					<div className={styles.intro}>
						<h2 className={styles.headline}>
							I&apos;m a <span className={styles.highlight}>full-stack developer</span> passionate about creating 
							performant, user-centered digital experiences that scale.
						</h2>
						<p className={styles.description}>
							Currently building innovative solutions at <strong>ColdSnake Digital</strong>, where I 
							focus on optimizing systems that handle millions of operations daily. I believe great 
							software should be both beautiful and blazingly fast—transforming complex problems 
							into elegant, intuitive solutions that users love.
						</p>
					</div>
				</Reveal>

				{/* Impact Metrics */}
				<Reveal>
					<div className={styles.metrics}>
						{achievements.map((achievement, index) => (
							<div key={index} className={styles.metric}>
								<div className={styles.metricIcon}>{achievement.icon}</div>
								<div className={styles.metricNumber}>{achievement.metric}</div>
								<div className={styles.metricDescription}>{achievement.description}</div>
							</div>
						))}
					</div>
				</Reveal>

				{/* Technology Stack */}
				<Reveal>
					<div className={styles.techSection}>
						<h3 className={styles.sectionTitle}>Technologies I work with</h3>
						<div className={styles.techGrid}>
							{technologies.map((tech, index) => (
								<Magnetic key={index}>
									<span className="chip">{tech}</span>
								</Magnetic>
							))}
						</div>
					</div>
				</Reveal>

				{/* What I'm About */}
				<Reveal>
					<div className={styles.philosophy}>
						<h3 className={styles.sectionTitle}>My development philosophy</h3>
						<div className={styles.philosophyContent}>
							<div className={styles.philosophyItem}>
								<h4>Performance First</h4>
								<p>Every line of code I write is optimized for speed and efficiency. Users shouldn&apos;t wait for great experiences. I focus on creating applications that load fast, respond instantly, and scale seamlessly under pressure.</p>
							</div>
							<div className={styles.philosophyItem}>
								<h4>Clean Architecture</h4>
								<p>Maintainable, scalable code that teams can understand and extend for years to come. I believe in writing code that tells a story—clear, purposeful, and elegant. Simplicity is the ultimate sophistication.</p>
							</div>
							<div className={styles.philosophyItem}>
								<h4>User-Centered Design</h4>
								<p>Technology should serve people, not the other way around. Every feature I build starts with understanding real user needs, pain points, and goals. Great software solves real problems beautifully.</p>
							</div>
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	);
};
