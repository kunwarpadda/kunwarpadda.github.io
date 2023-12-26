import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
	return (
		<section id="about" className="section-wrapper">
			<SectionHeader title="About" dir="l" />
			<div className={styles.about}>
				<div>
					<Reveal>
						<p
							className={`${styles.aboutText} ${styles.highlightFirstLetter}`}
						>
							Hello! I'm Kunwarbir Singh Padda, a dedicated BSc
							Computer Science student aspiring to become a
							versatile software engineer.
							<br />
							<br />
							In my ongoing journey of skill enhancement, I've
							delved into various aspects of technology,
							showcasing my proficiency in Python, Flask, React,
							Git, Linux, and Java through projects like a
							real-time chat app and a robust Todo List
							application. This diverse skill set positions me for
							impactful contributions across the spectrum of
							full-stack development.
						</p>
					</Reveal>
					<Reveal>
						<p className={styles.aboutText}>
							Beyond the coding realm, I recognize the importance
							of maintaining a healthy work-life balance, a
							principle that fuels sustained productivity and
							motivation in my academic pursuits.
						</p>
					</Reveal>
					<Reveal>
						<p className={styles.aboutText}>
							As a passionate learner, I eagerly embrace new
							challenges and actively seek opportunities for
							growth in the ever-evolving tech landscape. I am now
							on the lookout for opportunities as a software
							engineer, where I can bring my skills and dedication
							to meaningful projects.
						</p>
					</Reveal>
					<Reveal>
						<p className={styles.aboutText}>
							If you're in search of a dynamic collaborator with a
							strong foundation in both frontend and backend
							technologies, let's connect and explore the exciting
							possibilities together! 🚀
						</p>
					</Reveal>
					<Reveal>
						<div className={styles.links}>
							<div className={styles.linksText}>
								<span>My links</span>
								<AiOutlineArrowRight />
							</div>
							<MyLinks />
						</div>
					</Reveal>
				</div>
				<Stats />
			</div>
		</section>
	);
};
