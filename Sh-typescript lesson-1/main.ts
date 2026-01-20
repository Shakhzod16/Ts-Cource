// let a: number = 5;

// a = 34;

// console.log(a);

// Masalalar

//  ===========  Homework 1  ===========

// 1 - masala

// let num1: number = 3;
// let num2: number = 5;

// let num3: number = num1 * num2;

// console.log(num3);

// 2 - masala

// let str1: string = 'Hello';
// let str2: string = 'World';
// let str3: string = str1 + str2;

// console.log(str3);

// 3 - masala

// let num1: number = 70;
// let num2: number = 15;
// let num3: number = 30;
// let num4: number = num1 - num2 - num3;

// console.log(num4);

// 4 - masala

// let str1: string = 'Hello';
// let str2: string = 'World';

// let str3: string = str1.charAt(0) + str2.slice(-1);
// console.log(str3);

// 5 - masala

// let num1: number = 20;
// let num2: number = 10;
// let num3: number = 30;
// let num4: number = num1 + num2 + num3;

// console.log(num4);

// 6 - masala

// let str1: string = 'Hello';
// let str2: string = 'World';

// console.log(str1.length + str2.length);

// 7 - masala

// let num1: number = 25;
// let num2: number = 5;

// console.log(num1 / num2);

// 8 - masala

// let str1: string = 'hello';

// console.log(str1.toUpperCase());

// 9 - masala

// let str1: string = 'Hello';
// let str2: string = 'World';
// let str3: string = 'welcome';
// let str4: string = str1 + str2 + str3;

// console.log(str4);

// 10 - masala

// let num1: number = 25;
// let num2: number = 45;
// let num3: number = (num1 + num2) / 2;

// console.log(num3);

// 11 - masala

// let str1: string = 'Hello';
// let str2: string = 'World';

// console.log(str1.length === str2.length);

// 12 - masala

// let num1: number = 12;
// let num2: number = 10;
// let num3: number = 35;
// let num4: number = 28;
// let num5: number = num1 * num2 * num3 * num4;

// console.log(num5);

// 13 - masala

// let str1: string = 'HelloAssalomuSalom';
// let str2: string = '';

// str2 = str1.substring(3, 7);
// console.log(str2);

// 14 - masala

// let num1: number = 30;
// let num2: number = 65;

// let num3: number = Math.max(num1, num2);

// console.log(num3);

// 15 - masala

// let bool1: boolean = true;

// console.log(bool1);

// 16 - masala

// let bool1: boolean = true;
// let bool2: boolean = false;

// let bool3: boolean = (bool1 && bool2) && (bool1 || bool2);

// console.log(bool3);

// 17 - masala

// let obj1: object = {
// 	name: 'Ali',
// 	age: 34,
// 	isStudent: true,
// };

// console.log(obj1);

// 18 - masala 🟨

// const obj1 = {
// 	name: 'Ali',
// 	age: 34,
// 	isStudent: true,
// };

// const obj2 = {
// 	...obj1,
// 	name: 'Vali',
// 	age: 454,
// };

// console.log(obj2);

// 19 - masala

// let num1: number = 20;
// let num2: number = 25;
// let num3: number = 30;
// let num4: number = 45;

// let geometric: number = Math.pow(num1 * num2 * num3 * num4, 1 / 4);

// console.log(geometric);

// 20 - masala

// let bool1: boolean = false;

// bool1 = 5 > 3;

// console.log(bool1);

// 21 - masala

// let obj1: object = {
// 	title: 'Iphone',
// 	price: 34,
// 	isStock: true,
// };

// console.log(obj1);

// 22 - masala 🟨

// let obj1: any = {
// 	title: 'Iphone',
// 	price: 34,
// 	isStock: true,
// };
// obj1.price += 20;

// console.log(obj1);

// 23 - masala

// let bool1: boolean = false;
// bool1 = !false;

// console.log(bool1);

// 24 - masala

// let bool1: boolean = true;

// bool1 = 10 === '10';

// console.log(bool1);

// 25 - masala

// let bool1: boolean = true;

// bool1 = 5 <= 5 && 'apple' !== 'banana';

// console.log(bool1);

// =================================
//  ===========  Homework 2  ===========

// 1 - masala

// function print(name: string, age: number, schoolNumber: number): void {
// 	console.log(`Mening ismim ${name}. men ${age}-yoshdaman. Men hozirda ${schoolNumber}-maktabda o'qiyman`);
// }

// print('ali', 23, 234);

// function print(num1: number, num2: number, num3: number): void {
// 	console.log((num1 + num2 + num3) / 3);
// }
// print(2, 3, 4);

// 2 - masala

// function print(a: number, b: number): void {
// 	let num1 = Math.sqrt(a);
// 	let num2 = Math.sqrt(b);
// 	console.log(num1, num2);
// }

// print(25, 16);

// 3 - masala

// function print(a: number, b: number, c: number): number {
// 	return (a + b + c) / 3;
// }
// let result = print(25, 10, 15);
// console.log(result);

// 4 - masala

// function print(a: number, b: number, c: number, d: number): number {
// 	return a ** 2 + b ** 2 + c ** 2 + d ** 2;
// }
// let result = print(5, 6, 7, 8);
// console.log(result);

// 5 - masala

// function print(str1: string, str2: string): string {
// 	return str1.toUpperCase() + str2.toUpperCase();
// }
// let result = print('hello', 'world');
// console.log(result);

// 6 - masala

// function print(str1: string, str2: string, str3: string): string {
// 	return str1.charAt(0) + str2.slice(-1) + str3;
// }
// let result = print('hello', 'World', 'Salom');
// console.log(result);

// 7 - masala

// function print(num1: number, num2: number, num3: number): number {
// 	return num1 + num2 + num3;
// }
// let result = print(5, 7, 9);
// console.log(result);

// 8 - masala 🟥

// function print(num1: number): number {
// 	return num1;
// }
// let result = print(4);
// console.log(result);

// 9 - masala

// function print(str1: string): number {
// 	return str1.length;
// }
// let result = print('Hello');
// console.log(result);

// 10 - masala

// function print(str1: string): string {
// 	return `Hello ${str1}`;
// }
// let result = print('ali');
// console.log(result);

//  ===========  Homework 3  ===========

// 1 - masala

// function print(num1: number, num2: number): number {
// 	return num1 + num2;
// }
// let result = print(24, 16);
// console.log(result);

// 2 - masala

// function print(str1: string): number {
// 	return str1.length;
// }
// let result = print('HelloWolrd');
// console.log(result);

// 3 - masala

// function print(num1: number): string {
// 	if (num1 % 2 == 1) {
// 		return 'toq son';
// 	} else {
// 		return 'juft son';
// 	}
// }
// let result = print(34);
// console.log(result);

// 4 - masala

// function print(str1: string): string {
// 	return str1.split('').reverse().join('');
// }
// let result = print('Hello');
// console.log(result);

// 5 - masala

// function print(num1: number): number {
// 	let result = 1;
// 	for (let i = 1; i <= num1; i++) {
// 		result *= i;
// 	}
// 	return result;
// }
// let result = print(34);
// console.log(result);

// 6 - masala

// function print(str1: string, str2: string): string {
// 	return str1 + str2;
// }
// let result = print('Hello', 'World');
// console.log(result);

// 7 - masala

// function print(num1: number): number {
// 	return num1 ** 2;
// }
// let result = print(5);
// console.log(result);

// 8 - masala 🟥

// function print(str1: string): string {
// 	return str1;
// }
// let result = print('hello , i,m form Bukhara');
// console.log(result);

// 9 - masala 🟥

// function checkPrime(num: number): string {
// 	if (num < 2) return `${num} tub emas`;
// 	for (let i = 2; i <= Math.sqrt(num); i++) {
// 		if (num % i === 0) return `${num} tub emas`;
// 	}
// 	return `${num} tub son`;
// }

// console.log(checkPrime(17));

// 10 - masala

// function print(str1: string, str2: string): string {
// 	if (str1.length == str2.length) {
// 		return 'teng ';
// 	} else {
// 		return 'teng emas';
// 	}
// }
// let result = print('Hello', 'World');
// console.log(result);

// 11 - masala

// function print(str1: string): string {
// 	return str1.charAt(0) + str1.slice(-1);
// }
// let result = print('Hello');
// console.log(result);

// 12 - masala 🟨

// function print(num1: number): number {
// 	return num1
// 		.toString()
// 		.split('')
// 		.reduce((sum, digit) => sum + Number(digit), 0);
// }
// let result = print(234);
// console.log(result);

// 13 - masala

// function print(str1: string): string {
// 	if (!str1) return '';
// 	return str1.charAt(0).toUpperCase() + str1.slice(1);
// }

// console.log(print('hello'));

// 14 - masala

// function trimString(str: string): string {
// 	return str.trim();
// }

// console.log(trimString('   hello world   '));
