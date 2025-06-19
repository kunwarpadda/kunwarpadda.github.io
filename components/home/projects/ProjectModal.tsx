import styles from "./projectmodal.module.scss";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub, AiOutlineExport, AiOutlineMail } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { DemoRequestModal } from "./DemoRequestModal";
interface Props {
	isOpen: boolean;
	setIsOpen: Function;
	title: string;
	imgSrc: string;
	code: string;
	projectLink: string;
	tech: string[];
	modalContent: JSX.Element;
	demoRequest?: boolean;
}

export const ProjectModal = ({
	modalContent,
	projectLink,
	setIsOpen,
	imgSrc,
	isOpen,
	title,
	code,
	tech,
	demoRequest = false,
}: Props) => {
	const [isDemoRequestOpen, setIsDemoRequestOpen] = useState(false);

	useEffect(() => {
		const body = document.querySelector("body");

		if (isOpen) {
			body!.style.overflowY = "hidden";
		} else {
			body!.style.overflowY = "scroll";
		}
	}, [isOpen]);

	const content = (
		<div className={styles.modal} onClick={() => setIsOpen(false)}>
			<button className={styles.closeModalBtn}>
				<MdClose />
			</button>

			<motion.div
				initial={{ y: 100, opacity: 0, scale: 0.9 }}
				animate={{ y: 0, opacity: 1, scale: 1 }}
				exit={{ y: 100, opacity: 0, scale: 0.9 }}
				transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
				onClick={(e) => e.stopPropagation()}
				className={styles.modalCard}
			>
				<div className={styles.modalImageContainer}>
					<Image
						priority
						src={imgSrc}
						alt={`An image of the ${title} project.`}
						width={500}
						height={400}
						className={styles.modalImage}
					/>
					<div className={styles.imageOverlay} />
				</div>
				<div className={styles.modalContent}>
					<div className={styles.modalHeader}>
						<h4>{title}</h4>
						<div className={styles.modalTech}>
							{tech.map((techItem, index) => (
								<span key={index}>{techItem}</span>
							))}
						</div>
					</div>
					
					<div className={styles.modalContentWrapper}>
						<div className={styles.suppliedContent}>{modalContent}</div>
					</div>

					<div className={styles.modalFooter}>
						<p className={styles.linksText}>
							Project Links<span>.</span>
						</p>
						<div className={styles.links}>
							{demoRequest ? (
								<>
									<button 
										onClick={() => setIsDemoRequestOpen(true)}
										className={styles.demoRequestBtn}
									>
										<AiOutlineMail /> Request Demo
									</button>
								</>
							) : (
								<>
									{code && (
										<Link target="_blank" rel="nofollow" href={code}>
											<AiFillGithub /> Source Code
										</Link>
									)}
									{projectLink && (
										<Link
											target="_blank"
											rel="nofollow"
											href={projectLink}
										>
											<AiOutlineExport /> Live Demo
										</Link>
									)}
								</>
							)}
						</div>
					</div>
				</div>
			</motion.div>
			
			<DemoRequestModal 
				isOpen={isDemoRequestOpen}
				setIsOpen={setIsDemoRequestOpen}
				projectTitle={title}
			/>
		</div>
	);

	if (!isOpen) return <></>;

	// @ts-ignore
	return ReactDOM.createPortal(content, document.getElementById("root"));
};
