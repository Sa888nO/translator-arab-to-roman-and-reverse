import { roman } from "./alphabet";
export const transformRomeToArab = (str) => {
	return str
		.toUpperCase()
		.split("")
		.reduce(function (r, v, i, arr) {
			const [a, b, c] = [
				roman[arr[i]],
				roman[arr[i + 1]],
				roman[arr[i + 2]],
			];
			return b > a ? r - a : r + a;
		}, 0);
};
