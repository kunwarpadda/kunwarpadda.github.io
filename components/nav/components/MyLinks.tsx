import styles from "./headinglinks.module.scss";
import {
	AiFillLinkedin,
	AiFillGithub,
	AiFillInstagram,
	AiFillYoutube,
	AiFillSkype,
} from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";

export const MyLinks = () => {
	return (
		<div className={styles.links}>
			<motion.span
				initial={{ y: -30, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.0 }}
			>
				<Link
					href="https://www.linkedin.com/in/kunwar-padda-6247b22a6/"
					target="_blank"
					rel="nofollow"
				>
					<AiFillLinkedin size="2.4rem" />
				</Link>
			</motion.span>

			<motion.span
				initial={{ y: -30, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.1 }}
			>
				<Link
					href="https://github.com/kunwarpadda"
					target="_blank"
					rel="nofollow"
				>
					<AiFillGithub size="2.4rem" />
				</Link>
			</motion.span>

			<motion.span
				initial={{ y: -30, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				<Link
					href="https://www.instagram.com/__k.s__padda______/"
					target="_blank"
					rel="nofollow"
				>
					<AiFillInstagram size="2.4rem" />
				</Link>
			</motion.span>
		</div>
	);
};
