import { IFlyJSS } from "./types";

const fly: IFlyJSS = {
	create: (classes) => (...keyClassNames) => {
		console.log(classes);
		console.log(keyClassNames);
		return "";
	},
};

export default fly;
