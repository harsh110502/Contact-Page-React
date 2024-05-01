import styles from "./Button.module.css";
import { MdMessage } from "react-icons/md";

const Button = ({ text, isOutLine, icon, ...rest }) => {
	return (
		<button
			{...rest}
			className={isOutLine ? styles.outline_btn : styles.primary_btn}>
			{icon}
			{text}
		</button>
	);
};

export default Button;
