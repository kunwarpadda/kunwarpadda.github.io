import { MouseEventHandler } from "react";
import styles from "./standardbutton.module.scss";
import Magnetic from "@/components/Magnetic";

interface Props {
	children: string | JSX.Element;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const StandardButton = ({ children, onClick }: Props) => {
	return (
		<Magnetic>
			<button onClick={onClick} className={styles.standardButton}>
				{children}
			</button>
		</Magnetic>
	);
};
