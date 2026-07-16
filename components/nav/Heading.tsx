import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";
import { contactMailto } from "../utils/contact";

export const Heading = () => {
	return (
		<header className={styles.heading}>
			<MyLinks />

			<OutlineButton
				onClick={() => {
					window.location.href = contactMailto;
				}}
			>
				Email me
			</OutlineButton>
		</header>
	);
};
