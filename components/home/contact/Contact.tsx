import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";
import Magnetic from "@/components/Magnetic";

export const Contact = () => {
	return (
		<section className="section-wrapper" id="contact">
			<div className={styles.contactWrapper}>
				<Reveal width="100%">
					<h4 className={styles.contactTitle}>
						Contact<span>.</span>
					</h4>
				</Reveal>
				<Reveal width="100%">
					<p className={styles.contactCopy}>
						Have an idea to discuss? Shoot me an email if you want
						to connect! You can also find me on{" "}
						<Link
							href="https://www.linkedin.com/in/kunwarbir-singh-padda"
							target="_blank"
							rel="nofollow"
						>
							Linkedin
						</Link>{" "}
						or{" "}
						<Link
							href="https://www.instagram.com/_kunwar.___"
							target="_blank"
							rel="nofollow"
						>
							Instagram
						</Link>{" "}
						if that&apos;s more your speed.
					</p>
				</Reveal>
				<Reveal width="100%">
					<Link href="mailto:kunwarpadda46@gmail.com">
						<Magnetic>
							<div className={styles.contactEmail}>
								<AiFillMail size="2.4rem" />
								<span>Send Email</span>
							</div>
						</Magnetic>
					</Link>
				</Reveal>
			</div>
		</section>
	);
};
