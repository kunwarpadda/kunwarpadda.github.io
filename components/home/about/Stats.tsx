import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";
import Magnetic from "@/components/Magnetic";

export const Stats = () => {
	return (
		<div className={styles.stats}>
			<Reveal>
				<div className={styles.statColumn}>
					<h4>
						<AiFillCode size="2.4rem" color="var(--brand)" />
						<span>Expertise</span>
					</h4>
					<div className={styles.statGrid}>
						<Magnetic>
							<span className="chip">JavaScript</span>
						</Magnetic>
						<Magnetic>
							<span className="chip">HTML</span>
						</Magnetic>
						<Magnetic>
							<span className="chip">CSS</span>
						</Magnetic>
						<Magnetic>
							<span className="chip">React</span>
						</Magnetic>
						<Magnetic>
							<span className="chip">Git</span>
						</Magnetic>
						<Magnetic>
							<span className="chip">Python automation</span>
						</Magnetic>
						<Magnetic>
							<span className="chip">Linux</span>
						</Magnetic>
						<Magnetic>
							<span className="chip">Flask</span>
						</Magnetic>
						<Magnetic>
							<span className="chip">Azure</span>
						</Magnetic>
					</div>
				</div>
			</Reveal>
			<Reveal>
				<div className={styles.statColumn}>
					<h4>
						<AiFillSmile size="2.4rem" color="var(--brand)" />
						<span>Currently learning</span>
					</h4>
					<div className={styles.statGrid}>
						<Magnetic>
							<span className="chip">Nextjs</span>
						</Magnetic>
						<Magnetic>
							<span className="chip">Django</span>
						</Magnetic>
						<Magnetic>
							<span className="chip">ELK Stack</span>
						</Magnetic>
					</div>
				</div>
			</Reveal>
		</div>
	);
};
