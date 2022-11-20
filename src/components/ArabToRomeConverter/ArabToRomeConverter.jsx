import { useState } from "react";
import { transformArabToRome } from "@utils/transformArabToRome";
import classNames from "classnames";
import styles from "./../ConverterStyles.module.scss";

const ArabToRomeConverter = () => {
	const [inputValid, updateInputValid] = useState(true);
	const reg = /^\d+$/;
	const [inputValue, updateInputValue] = useState("");
	const [answer, updateAnswer] = useState("");
	return (
		<div className={styles.wrapper}>
			<input
				onChange={(e) => {
					updateInputValue(e.target.value);
				}}
				className={classNames(styles.input, {
					[styles.inputError]: !inputValid,
				})}
			></input>
			<div className={styles.answer}>{answer}</div>
			<button
				onClick={() => {
					if (reg.test(inputValue)) {
						updateInputValid(true);
						updateAnswer(transformArabToRome(inputValue));
					} else {
						updateInputValid(false);
					}
				}}
			>
				конвертировать
			</button>
		</div>
	);
};

export default ArabToRomeConverter;
