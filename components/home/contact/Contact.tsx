import { Reveal } from "@/components/utils/Reveal";
import { contactMailto } from "@/components/utils/contact";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";

export const Contact = () => {
	return (
		<section className="section-wrapper" id="contact">
			<div className={styles.contactWrapper}>
				<Reveal>
					<h4 className={styles.contactTitle}>
						Let&apos;s work together<span>.</span>
					</h4>
				</Reveal>
				<Reveal>
					<p className={styles.contactCopy}>
						I&apos;m interested in systems, product engineering, developer tools, and geospatial work where the implementation and the evidence both matter.
					</p>
				</Reveal>
				<Reveal>
					<Link href={contactMailto}>
						<div className={styles.contactEmail}>
							<AiFillMail size="2.4rem" />
							<span>Get In Touch</span>
						</div>
					</Link>
				</Reveal>
			</div>
		</section>
	);
};
