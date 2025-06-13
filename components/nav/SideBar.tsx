import { useEffect, useState } from "react";
import styles from "./sidebar.module.scss";
import { motion } from "framer-motion";

export const SideBar = () => {
	const [selected, setSelected] = useState("about");

	useEffect(() => {
		const sections = document.querySelectorAll(".section-wrapper");

		const options = {
			threshold: 0.3,
		};

		const callback = (entries: any) => {
			entries.forEach((entry: any) => {
				if (entry.isIntersecting) {
					setSelected(entry.target.id);
				}
			});
		};

		const observer = new IntersectionObserver(callback, options);

		sections.forEach((section) => observer.observe(section));

		// Cleanup observer on unmount
		return () => {
			sections.forEach((section) => observer.unobserve(section));
		};
	}, []);

	return (
		<div
			style={{ background: "var(--background-dark)" }}
			className={styles.sideBarLayout}
		>
			<motion.nav
				initial={{ x: -70 }}
				animate={{ x: 0 }}
				transition={{ duration: 0.5 }}
				className={styles.sideBar}
			>
				<span
					className={styles.logo}
					onClick={() => {
						window.scrollTo({ top: 0, behavior: 'smooth' });
						setSelected("about"); // Set to about since it's the first section
					}}
				>
					KP<span>.</span>
				</span>
				<motion.a
					initial={{ x: -70 }}
					animate={{ x: 0 }}
					transition={{ duration: 0.5, delay: 0.0 }}
					href="#about"
					onClick={() => {
						setSelected("about");
					}}
					className={selected === "about" ? styles.selected : ""}
				>
					About
				</motion.a>
				<motion.a
					initial={{ x: -70 }}
					animate={{ x: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					href="#projects"
					onClick={() => setSelected("projects")}
					className={selected === "projects" ? styles.selected : ""}
				>
					Projects
				</motion.a>
				<motion.a
					initial={{ x: -70 }}
					animate={{ x: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					href="#contact"
					onClick={() => setSelected("contact")}
					className={selected === "contact" ? styles.selected : ""}
				>
					Contact
				</motion.a>
			</motion.nav>
		</div>
	);
};
