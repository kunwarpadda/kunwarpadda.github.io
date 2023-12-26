import Image from "next/image";
import { motion } from "framer-motion";
import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";
import Profile from "@/public/profile.png";
import Magnetic from "@/components/Magnetic";

export const Hero = () => {
	return (
		<section className={`section-wrapper ${styles.hero}`}>
			<div className={styles.heroGrid}>
				<div className={styles.copyWrapper}>
					<Reveal>
						<h1 className={styles.title}>
							Hi, I&apos;m KP<span>.</span>
						</h1>
					</Reveal>
					<Reveal>
						<h2 className={styles.subTitle}>
							I&apos;m a <span>Software Engineer</span>
						</h2>
					</Reveal>
					<Reveal>
						<p className={styles.aboutCopy}>
							dedicated to
							continuous skill enhancement. Ready to bring
							innovation and a passion for technology to
							collaborative and dynamic work environments.
							Let&apos;s connect!
						</p>
					</Reveal>
					<Reveal>
						<StandardButton
							onClick={() =>
								document
									.getElementById("contact")
									?.scrollIntoView()
							}
						>
							Contact me
						</StandardButton>
					</Reveal>
				</div>
				<motion.div
					initial={{ y: -30, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					<Magnetic>
						<Image
							className={styles.profile}
							src={Profile}
							priority
							alt="Kunwarbir Singh Padda | Software Engineer"
							width={250}
							height={250}
						/>
					</Magnetic>
				</motion.div>
			</div>
			<DotGrid />
		</section>
	);
};
