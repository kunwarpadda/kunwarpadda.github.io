import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";
import Magnetic from "@/components/Magnetic";

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
						Ready to bring your ideas to life? Drop me a line and let&apos;s discuss your project.
					</p>
				</Reveal>
				<Reveal>
					<Link href="mailto:kunwarpadda46@gmail.com">
						<Magnetic>
							<div className={styles.contactEmail}>
								<AiFillMail size="2.4rem" />
								<span>Get In Touch</span>
							</div>
						</Magnetic>
					</Link>
				</Reveal>
			</div>
		</section>
	);
};
