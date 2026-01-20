"use strict";
// function test(a: string): string;
// function test(a: number): number;
// function test(qiymat: any) {
// 	if (typeof qiymat === 'string') {
// 		return qiymat;
// 	} else if (typeof qiymat === 'number') {
// 		return qiymat;
// 	}
// }
// let result = test(7);
// let result2 = test('salom');
// console.log(result);
// console.log(result2);
// Union type
// let soqchi: null | string | number;
// soqchi = 4;
//   Literal type
// soqchi = null;
// let size: 'MD' | 'SM' | 'XL';
// size = 'SM';
// ===========================
// type NetworkLoadingState = {
// 	state: 'loading';
// };
// type NetworkFailedState = {
// 	state: 'failed';
// 	code: number;
// };
// type NetworkSuccessState = {
// 	state: 'success';
// 	response: {
// 		title: string;
// 		duration: number;
// 		summary: string;
// 	};
// };
// Homework WarpUp
// 1 - masala
// function sleepIn(weekday:boolean, vacation:boolean): boolean {
// 	if (weekday == false || vacation == true) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// let result = sleepIn(true, true)
// console.log(result)
// 2 - masala
// function monkeyTrouble(aSmile: boolean, bSmile: boolean): boolean {
// 	if (aSmile && bSmile) {
// 		return true;
// 	} else if (!aSmile && !bSmile) {
// 		return true;
// 	} else if (aSmile && !bSmile) {
// 		return false;
// 	} else {
// 		return false;
// 	}
// }
// let result = monkeyTrouble(true, true);
// console.log(result);
// 3 - masala
// function sumDouble(a: number, b: number): number {
// 	if (a != b) {
// 		return a + b;
// 	} else {
// 		return a * 4;
// 	}
// }
// let result = sumDouble(1, 2);
// console.log(result);
// 4 - masala
// function diff21(n: number): number {
// 	if (n > 21) {
// 		return Math.abs((n - 21) * 2);
// 	} else {
// 		return 21 - n;
// 	}
// }
// let result = diff21(19);
// console.log(result);
// 5 - masala
// function parrotTrouble(talking: boolean, hour: number): boolean {
// 	if (talking && hour < 7) {
// 		return true;
// 	} else if (talking && hour > 20) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// let result = parrotTrouble(true, 6);
// console.log(result);
// 6 - masala
// function makes10(a: number, b: number): boolean {
// 	return a == 10 || b == 10 || a + b == 10 ? true : false;
// }
// let result = makes10(9, 10);
// console.log(result);
// 7 - masala
// function nearHundred(n: number): boolean {
// 	if ((n >= 90 && n <= 110) || (n >= 190 && n <= 210)) {
// 		return true;
// 	}
// 	return false;
// }
// let result = nearHundred(89);
// console.log(result);
// 8 - masala
// function posNeg(a: number, b: number, negative: boolean) {
// 	if (
// 		(a > 0 && b < 0 && negative == false) ||
// 		(a < 0 && b > 0 && negative == false) ||
// 		(a < 0 && b < 0 && negative == true)
// 	) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// let result = posNeg(1, -1, false);
// console.log(result);
// 9 - masala
// function notString(str: string): string {
// 	if (str.startsWith('not')) {
// 		return str;
// 	} else {
// 		return 'not ' + str;
// 	}
// }
// let result = notString('candy');
// console.log(result);
// 10 - masala 🟥
// function missingChar(str: string, n: number) {
// 	return str.slice(0, n) + str.slice(n + 1);
// }
// let result = missingChar('hello', 2);
// console.log(result);
// 11 - masala
// function frontBack(str: string): string {
// 	if (str.length <= 1) return str;
// 	let first = str[0];
// 	let last = str[str.length - 1];
// 	let middle = str.slice(1, str.length - 1);
// 	return last + middle + first;
// }
// let result = frontBack('code');
// console.log(result);
// 12 - masala
// function front3(str: string): string {
// 	return str.slice(0, 3).repeat(3);
// }
// let result = front3('Java');
// console.log(result);
// 13 - masala
// function backAround(str: string) {
// 	if (str.length >= 1) {
// 		return str.slice(-1) + str + str.slice(-1);
// 	}
// }
// let result = backAround('cat');
// console.log(result);
// 14 - masala
// function or35(n: number): boolean {
// 	if (n % 3 == 0 || n % 5 == 0) {
// 		return true;
// 	} else return false;
// }
// let result = or35(3);
// console.log(result);
// 15 - masala
// function front22(str: string): string {
// 	if (str.length >= 2) {
// 		return str.slice(0, 2) + str + str.slice(0, 2);
// 	} else {
// 		return str + str + str;
// 	}
// }
// let result = front22('kitten');
// console.log(result);
// 16 - masala
// function startHi(str: string): boolean {
// 	if (str.startsWith('hi')) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// let result = startHi('hi there');
// console.log(result);
// 17 - masala
// function icyHot(temp1: number, temp2: number): boolean {
// 	if ((temp1 > 100 && temp2 < 0) || (temp1 < 0 && temp2 > 100)) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// let result = icyHot(120, -1);
// console.log(result);
// 18 - masala
// function in1020(a: number, b: number): boolean {
// 	if ((a >= 10 && a <= 20) || (b >= 10 && b <= 20)) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// let result = in1020(12, 99);
// console.log(result);
// 19 - masala
// function hasTeen(a: number, b: number, c: number): boolean {
// 	if ((a >= 13 && a <= 19) || (b >= 13 && b <= 19) || (c >= 13 && c <= 19)) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// let result = hasTeen(13, 20, 10);
// console.log(result);
// 20 - masala
// function loneTeen(a: number, b: number): boolean {
// 	if (a >= 13 && a <= 19 && b >= 13 && b <= 19) {
// 		return false;
// 	} else if ((a >= 13 && a <= 19) || (b >= 13 && b <= 19)) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// let result = loneTeen(13, 99);
// console.log(result);
// 21 - masala
// function delDel(str: string): string {
// 	if (str.slice(1, 4) == 'del') {
// 		return str.slice(0, 1) + str.slice(4);
// 	} else {
// 		return str;
// 	}
// }
// let result = delDel('adelHello');
// console.log(result);
// 22 - masala
// function mixStart(str: string): boolean {
// 	if (str.slice(1, 3) === 'ix') {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// let result = mixStart('mix snacks');
// console.log(result);
// 23 - masala
// function startOz(str: string): string {
// 	if (str.startsWith('oz')) {
// 		return 'oz';
// 	} else if (str.charAt(0) == 'o') {
// 		return 'o';
// 	} else if (str.charAt(1) == 'z') {
// 		return 'z';
// 	} else {
// 		return '';
// 	}
// }
// let result = startOz('bzoo');
// console.log(result);
// 24 - masala
// function intMax(a: number, b: number, c: number) {
// 	if (a < c && b < c) {
// 		return c;
// 	}
// 	if (a < b && b > c) {
// 		return b;
// 	}
// 	if (a > b && a > c) {
// 		return a;
// 	}
// }
// let result = intMax(1, 2, 3);
// console.log(result);
// 25 - masala
// function close10(a: number, b: number): number {
// 	if (Math.abs(a - 10) < Math.abs(b - 10)) {
// 		return a;
// 	} else if (Math.abs(b - 10) < Math.abs(a - 10)) {
// 		return b;
// 	} else {
// 		return 0;
// 	}
// }
// let result = close10(8, 13);
// console.log(result);
// 26 - masala
// function in3050(a: number, b: number): boolean {
// 	if (a >= 30 && a <= 40 && b >= 30 && b <= 40) {
// 		return true;
// 	} else if (a >= 40 && a <= 50 && b >= 40 && b <= 50) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// let result = in3050(30, 31);
// console.log(result);
// 27 - masala
// function max1020(a: number, b: number): number {
// 	if (a < 10 || a > 20) {
// 		a = 0;
// 	}
// 	if (b < 10 || b > 20) {
// 		b = 0;
// 	}
// 	if (a > b) {
// 		return a;
// 	} else if (b > a) {
// 		return b;
// 	} else {
// 		return 0;
// 	}
// }
// let result = max1020(11, 19);
// console.log(result);
// 28 - masala 🟥
// function stringE(str: string): boolean {
// 	let count = 0;
// 	for (let i = 0; i < str.length; i++) {
// 		if (str[i] === 'e') count++;
// 	}
// 	return count >= 1 && count <= 3;
// }
// let result = stringE('Heeelloe');
// console.log(result);
// 29 - masala
// function lastDigit(a: number, b: number): boolean {
// 	let bir1 = a % 10;
// 	let bir2 = b % 10;
// 	if (bir1 == bir2) {
// 		return true;
// 	} else return false;
// }
// let result = lastDigit(7, 17);
// console.log(result);
// 30 - masala
// function endUp(str: string): string {
// 	if (str.length >= 3) {
// 		let start = str.slice(0, str.length - 3);
// 		let end = str.slice(str.length - 3).toUpperCase();
// 		return start + end;
// 	} else {
// 		return str.toUpperCase();
// 	}
// }
// let result = endUp('Hello');
// console.log(result);
// 31 - masala 🟥
// function everyNth(str: string, n: number): string {
// 	let result = '';
// 	for (let i = 0; i < str.length; i += n) {
// 		result += str[i];
// 	}
// 	return result;
// }
// let result = everyNth('Miracle', 2);
// console.log(result);
//# sourceMappingURL=main.js.map