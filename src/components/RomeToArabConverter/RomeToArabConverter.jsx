import { useState } from "react";
import { transformRomeToArab } from "@utils/transformRomeToArab";
import classNames from "classnames";
import styles from "./../ConverterStyles.module.scss";

const RomeToArabConverter = () => {
	const [inputValid, updateInputValid] = useState(true);
	const reg = /^M{0,3}(CM|CD|D?C{0,3})?(XC|XL|L?X{0,3})?(IX|IV|V?I{0,3})?$/;
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
						updateAnswer(transformRomeToArab(inputValue));
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

export default RomeToArabConverter;
