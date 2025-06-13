import { motion } from "framer-motion";
import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";
import Magnetic from "@/components/Magnetic";
import { 
	SiReact, 
	SiNextdotjs, 
	SiTypescript, 
	SiJavascript, 
	SiNodedotjs, 
	SiPython, 
	SiDocker, 
	SiKubernetes, 
	SiAmazonaws, 
	SiMicrosoftazure, 
	SiGooglecloud, 
	SiMongodb, 
	SiPostgresql, 
	SiRedis, 
	SiGraphql, 
	SiTailwindcss, 
	SiSass, 
	SiGit, 
	SiLinux, 
	SiVisualstudiocode 
} from "react-icons/si";

export const Hero = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3
			}
		}
	};

	const itemVariants = {
		hidden: { y: 50, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
		}
	};

	return (
		<section id="home" className={`section-wrapper ${styles.hero}`}>
			<div className={styles.heroGrid}>
				<motion.div 
					className={styles.copyWrapper}
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					{/* Main Title */}
					<motion.div variants={itemVariants}>
						<Reveal width="100%">
							<h1 className={`${styles.title} ${styles.nameGradient}`}>
								Kunwarbir<span className={styles.lastName}>Padda</span>
							</h1>
						</Reveal>
					</motion.div>
					
					{/* Role with Enhanced Design */}
					<motion.div variants={itemVariants}>
						<Reveal width="100%">
							<div className={styles.roleWrapper}>
								<div className={styles.roleContainer}>
									<div className={styles.roleDecor}>
										<span className={styles.roleDot}></span>
										<span className={styles.roleLine}></span>
									</div>
									<h2 className={styles.roleTitle}>
										<span className={styles.roleStack}>Full Stack</span>
										<span className={styles.roleDeveloper}>Developer</span>
									</h2>
									<div className={styles.roleDecor}>
										<span className={styles.roleLine}></span>
										<span className={styles.roleDot}></span>
									</div>
								</div>
							</div>
						</Reveal>
					</motion.div>
					
					{/* Enhanced Description */}
					<motion.div variants={itemVariants}>
						<Reveal width="100%">
							<div className={styles.descriptionWrapper}>
								<p className={styles.mainDescription}>
									Building the <span className={styles.highlight}>future of web</span> with modern technologies,
									<br />
									one line of code at a time
								</p>
								<div className={styles.skillsPreview}>
									<span className={styles.skillTag}>React</span>
									<span className={styles.skillTag}>Node.js</span>
									<span className={styles.skillTag}>Cloud</span>
									<span className={styles.skillTag}>AI/ML</span>
								</div>
							</div>
						</Reveal>
					</motion.div>

					{/* Stats Section */}
					<motion.div variants={itemVariants}>
						<Reveal width="100%">
							<div className={styles.statsContainer}>
								<div className={styles.stat}>
									<span className={styles.statNumber}>3+</span>
									<span className={styles.statLabel}>Years Experience</span>
								</div>
								<div className={styles.statDivider}></div>
								<div className={styles.stat}>
									<span className={styles.statNumber}>50+</span>
									<span className={styles.statLabel}>Projects Completed</span>
								</div>
								<div className={styles.statDivider}></div>
								<div className={styles.stat}>
									<span className={styles.statNumber}>∞</span>
									<span className={styles.statLabel}>Lines of Code</span>
								</div>
							</div>
						</Reveal>
					</motion.div>
					
					{/* Enhanced CTA Buttons */}
					<motion.div 
						className={styles.heroButtons}
						variants={itemVariants}
					>
						<div className={styles.buttonContainer}>
							<Magnetic>
								<StandardButton
									onClick={() =>
										document
											.getElementById("projects")
											?.scrollIntoView()
									}
								>
									Explore My Work
								</StandardButton>
							</Magnetic>
						</div>
						<div className={styles.buttonContainer}>
							<Magnetic>
								<StandardButton
									onClick={() =>
										document
											.getElementById("contact")
											?.scrollIntoView()
									}
									variant="outline"
								>
									Let's Connect
								</StandardButton>
							</Magnetic>
						</div>
					</motion.div>

					{/* Scroll Indicator */}
					<motion.div 
						className={styles.scrollIndicator}
						variants={itemVariants}
						animate={{ y: [0, 10, 0] }}
						transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
					>
						<div className={styles.scrollDot}></div>
						<span className={styles.scrollText}>Scroll to explore</span>
					</motion.div>
				</motion.div>
			</div>
			
			{/* Floating Elements */}
			<div className={styles.floatingElements}>
				<motion.div 
					className={`${styles.floatingElement} ${styles.element1}`}
					animate={{ 
						y: [0, -20, 0],
						x: [0, 10, 0],
						rotate: [0, 180, 360]
					}}
					transition={{ 
						duration: 8, 
						repeat: Infinity, 
						ease: "easeInOut" 
					}}
				>
					<SiReact />
				</motion.div>
				<motion.div 
					className={`${styles.floatingElement} ${styles.element2}`}
					animate={{ 
						y: [0, 15, 0],
						x: [0, -15, 0],
						rotate: [0, -90, 0]
					}}
					transition={{ 
						duration: 10, 
						repeat: Infinity, 
						ease: "easeInOut" 
					}}
				>
					<SiNextdotjs />
				</motion.div>
				<motion.div 
					className={`${styles.floatingElement} ${styles.element3}`}
					animate={{ 
						y: [0, -25, 0],
						x: [0, 20, 0],
						rotate: [0, 270, 360]
					}}
					transition={{ 
						duration: 12, 
						repeat: Infinity, 
						ease: "easeInOut" 
					}}
				>
					<SiTypescript />
				</motion.div>
				<motion.div 
					className={`${styles.floatingElement} ${styles.element4}`}
					animate={{ 
						y: [0, 18, 0],
						x: [0, -12, 0],
						rotate: [0, 45, 90]
					}}
					transition={{ 
						duration: 9, 
						repeat: Infinity, 
						ease: "easeInOut" 
					}}
				>
					<SiJavascript />
				</motion.div>
				<motion.div 
					className={`${styles.floatingElement} ${styles.element5}`}
					animate={{ 
						y: [0, -30, 0],
						x: [0, 25, 0],
						rotate: [0, -180, -360]
					}}
					transition={{ 
						duration: 11, 
						repeat: Infinity, 
						ease: "easeInOut" 
					}}
				>
					<SiNodedotjs />
				</motion.div>
				<motion.div 
					className={`${styles.floatingElement} ${styles.element6}`}
					animate={{ 
						y: [0, 22, 0],
						x: [0, -18, 0],
						rotate: [0, 120, 240]
					}}
					transition={{ 
						duration: 13, 
						repeat: Infinity, 
						ease: "easeInOut" 
					}}
				>
					<SiPython />
				</motion.div>
				<motion.div 
					className={`${styles.floatingElement} ${styles.element7}`}
					animate={{ 
						y: [0, -15, 0],
						x: [0, 30, 0],
						rotate: [0, -45, -90]
					}}
					transition={{ 
						duration: 14, 
						repeat: Infinity, 
						ease: "easeInOut" 
					}}
				>
					<SiDocker />
				</motion.div>
				<motion.div 
					className={`${styles.floatingElement} ${styles.element8}`}
					animate={{ 
						y: [0, 35, 0],
						x: [0, -20, 0],
						rotate: [0, 90, 180]
					}}
					transition={{ 
						duration: 15, 
						repeat: Infinity, 
						ease: "easeInOut" 
					}}
				>
					<SiKubernetes />
				</motion.div>
				<motion.div 
					className={`${styles.floatingElement} ${styles.element9}`}
					animate={{ 
						y: [0, -40, 0],
						x: [0, 15, 0],
						rotate: [0, -270, -360]
					}}
					transition={{ 
						duration: 16, 
						repeat: Infinity, 
						ease: "easeInOut" 
					}}
				>
					<SiAmazonaws />
				</motion.div>
				<motion.div 
					className={`${styles.floatingElement} ${styles.element10}`}
					animate={{ 
						y: [0, 28, 0],
						x: [0, -25, 0],
						rotate: [0, 150, 300]
					}}
					transition={{ 
						duration: 17, 
						repeat: Infinity, 
						ease: "easeInOut" 
					}}
				>
					<SiMicrosoftazure />
				</motion.div>
				<motion.div 
					className={`${styles.floatingElement} ${styles.element11}`}
					animate={{ 
						y: [0, -20, 0],
						x: [0, 35, 0],
						rotate: [0, -60, -120]
					}}
					transition={{ 
						duration: 18, 
						repeat: Infinity, 
						ease: "easeInOut" 
					}}
				>
					<SiGooglecloud />
				</motion.div>
				<motion.div 
					className={`${styles.floatingElement} ${styles.element12}`}
					animate={{ 
						y: [0, 45, 0],
						x: [0, -30, 0],
						rotate: [0, 210, 420]
					}}
					transition={{ 
						duration: 19, 
						repeat: Infinity, 
						ease: "easeInOut" 
					}}
				>
					<SiMongodb />
				</motion.div>
				<motion.div 
					className={`${styles.floatingElement} ${styles.element13}`}
					animate={{ 
						y: [0, -35, 0],
						x: [0, 20, 0],
						rotate: [0, -150, -300]
					}}
					transition={{ 
						duration: 20, 
						repeat: Infinity, 
						ease: "easeInOut" 
					}}
				>
					<SiPostgresql />
				</motion.div>
				<motion.div 
					className={`${styles.floatingElement} ${styles.element14}`}
					animate={{ 
						y: [0, 25, 0],
						x: [0, -40, 0],
						rotate: [0, 75, 150]
					}}
					transition={{ 
						duration: 21, 
						repeat: Infinity, 
						ease: "easeInOut" 
					}}
				>
					<SiRedis />
				</motion.div>
				<motion.div 
					className={`${styles.floatingElement} ${styles.element15}`}
					animate={{ 
						y: [0, -50, 0],
						x: [0, 25, 0],
						rotate: [0, -240, -480]
					}}
					transition={{ 
						duration: 22, 
						repeat: Infinity, 
						ease: "easeInOut" 
					}}
				>
					<SiGraphql />
				</motion.div>
				<motion.div 
					className={`${styles.floatingElement} ${styles.element16}`}
					animate={{ 
						y: [0, 30, 0],
						x: [0, -35, 0],
						rotate: [0, 105, 210]
					}}
					transition={{ 
						duration: 23, 
						repeat: Infinity, 
						ease: "easeInOut" 
					}}
				>
					<SiTailwindcss />
				</motion.div>
				<motion.div 
					className={`${styles.floatingElement} ${styles.element17}`}
					animate={{ 
						y: [0, -25, 0],
						x: [0, 40, 0],
						rotate: [0, -120, -240]
					}}
					transition={{ 
						duration: 24, 
						repeat: Infinity, 
						ease: "easeInOut" 
					}}
				>
					<SiSass />
				</motion.div>
				<motion.div 
					className={`${styles.floatingElement} ${styles.element18}`}
					animate={{ 
						y: [0, 40, 0],
						x: [0, -15, 0],
						rotate: [0, 300, 600]
					}}
					transition={{ 
						duration: 25, 
						repeat: Infinity, 
						ease: "easeInOut" 
					}}
				>
					<SiGit />
				</motion.div>
				<motion.div 
					className={`${styles.floatingElement} ${styles.element19}`}
					animate={{ 
						y: [0, -45, 0],
						x: [0, 30, 0],
						rotate: [0, -195, -390]
					}}
					transition={{ 
						duration: 26, 
						repeat: Infinity, 
						ease: "easeInOut" 
					}}
				>
					<SiLinux />
				</motion.div>
				<motion.div 
					className={`${styles.floatingElement} ${styles.element20}`}
					animate={{ 
						y: [0, 35, 0],
						x: [0, -45, 0],
						rotate: [0, 135, 270]
					}}
					transition={{ 
						duration: 27, 
						repeat: Infinity, 
						ease: "easeInOut" 
					}}
				>
					<SiVisualstudiocode />
				</motion.div>
			</div>
		</section>
	);
};
