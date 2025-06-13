import { MouseEventHandler } from "react";
import styles from "./standardbutton.module.scss";
import Magnetic from "@/components/Magnetic";

interface Props {
	children: string | JSX.Element;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	variant?: "primary" | "outline";
}

export const StandardButton = ({ children, onClick, variant = "primary" }: Props) => {
	const buttonClass = variant === "outline" 
		? `${styles.standardButton} ${styles.outline}` 
		: styles.standardButton;
		
	return (
		<Magnetic>
			<button onClick={onClick} className={buttonClass}>
				{children}
			</button>
		</Magnetic>
	);
};
