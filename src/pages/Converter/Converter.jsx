import { useState } from "react";
import ArabToRomeConverter from "@components/ArabToRomeConverter";

import RomeToArabConverter from "@components/RomeToArabConverter";
import classNames from "classnames";
import styles from "./Converter.module.scss";

const Converter = () => {
	const [CurrentConverter, updateConverter] = useState(true);
	return (
		<div>
			<button
				onClick={() => {
					updateConverter(true);
				}}
				className={classNames({
					[styles.buttonActive]: CurrentConverter,
				})}
			>
				арабские в греческие
			</button>
			<button
				onClick={() => {
					updateConverter(false);
				}}
				className={classNames({
					[styles.buttonActive]: !CurrentConverter,
				})}
			>
				греческие в арабские
			</button>
			<div className={styles.converterBlock}>
				{CurrentConverter ? (
					<ArabToRomeConverter />
				) : (
					<RomeToArabConverter />
				)}
			</div>
		</div>
	);
};

export default Converter;
