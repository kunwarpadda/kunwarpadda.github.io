import Image from "next/image";
import { Reveal } from "@/components/utils/Reveal";
import { useAnimation, useInView, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { ProjectModal } from "./ProjectModal";
import styles from "./projects.module.scss";
interface Props {
	modalContent: JSX.Element;
	description: string;
	projectLink: string;
	imgSrc: string;
	tech: string[];
	title: string;
	code: string;
	technicalDetails: string[];
	index: number;
	demoRequest?: boolean;
}

export const Project = ({
	modalContent,
	projectLink,
	description,
	imgSrc,
	title,
	code,
	tech,
	technicalDetails,
	index,
	demoRequest = false,
}: Props) => {
	const [hovered, setHovered] = useState(false);

	const [isOpen, setIsOpen] = useState(false);

	const controls = useAnimation();

	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (isInView) {
			controls.start("visible");
		} else {
			controls.start("hidden");
		}
	}, [isInView, controls]);

	return (
		<>
			<motion.div
				ref={ref}
				variants={{
					hidden: { opacity: 0, y: 100 },
					visible: { opacity: 1, y: 0 },
				}}
				initial="hidden"
				animate={controls}
				transition={{ duration: 0.75 }}
				className={styles.project}
			>
				<div className={styles.projectContent}>
					<div className={styles.projectHeader}>
						<Reveal>
							<h3 className={styles.projectTitle}>{title}</h3>
						</Reveal>
						
						<Reveal>
							<div className={styles.techStack}>
								{tech.map((item) => (
									<span key={item} className={styles.techChip}>
										{item}
									</span>
								))}
							</div>
						</Reveal>
						
						<Reveal>
							<p className={styles.projectDescription}>
								{description}
							</p>
						</Reveal>
					</div>

					<div className={styles.technicalImplementation}>
						<Reveal>
							<h4 className={styles.sectionTitle}>Technical Implementation</h4>
						</Reveal>
						
						<Reveal>
							<ul className={styles.technicalList}>
								{technicalDetails.map((detail, index) => (
									<li key={index} className={styles.technicalItem}>
										<span className={styles.arrow}>▹</span>
										{detail}
									</li>
								))}
							</ul>
						</Reveal>
					</div>
				</div>

				<div 
					className={styles.projectImageContainer}
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}
					onClick={() => setIsOpen(true)}
				>
					<div className={styles.projectNumber}>
						{String(index + 1).padStart(2, '0')}
					</div>
					
					<div className={styles.projectImage}>
						<Image
							priority
							src={imgSrc}
							alt={`${title} project screenshot`}
							width={500}
							height={300}
							className={styles.projectImg}
						/>
						
						<div className={styles.clickIndicator}>
							Click to view details
						</div>
					</div>
				</div>
			</motion.div>
			
			<ProjectModal
				modalContent={modalContent}
				projectLink={projectLink}
				setIsOpen={setIsOpen}
				isOpen={isOpen}
				imgSrc={imgSrc}
				title={title}
				code={code}
				tech={tech}
				demoRequest={demoRequest}
			/>
		</>
	);
};
