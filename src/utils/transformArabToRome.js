import { roman } from "./alphabet";
export const transformArabToRome = (num) => {
	let str = "";

	for (let i of Object.keys(roman)) {
		let q = Math.floor(num / roman[i]);
		num -= q * roman[i];
		str += i.repeat(q);
	}

	return str;
};
