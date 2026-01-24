// interface IUser {
// 	id: number;
// 	name: string;
// 	isStudent: boolean;

// 	running: () => void;
// }

// class User implements IUser {
// 	id: number;
// 	name: string;
// 	isStudent: boolean;
// 	running() {
// 		console.log('user is running');
// 	}
// 	constructor(id: number, name: string, isStudent: boolean) {
// 		this.id = id;
// 		this.name = name;
// 		this.isStudent = isStudent;
// 	}
// }

// const user = new User(2, 'Sherali', true);
// console.log(user);

// ============ { Interface }  ============

// interface IUser {
// 	readonly id: number;
// 	name: string;
// }

// const user: IUser = {
// 	id: 1,
// 	name: 'Sherali',
// };

// console.log(user);

// ============ { Interface vs Type }  ============

// type User = {
// 	id: number;
// 	name: string;
// 	email: string;
// 	password: string;
// };

// // type User = {} mumkin emas

// type Admin = User & {
// 	role: 'SUPERADMIN' | 'ADMIN';
// };

// const admin: Admin = {};

// interface IUser {
// 	id: number;
// 	name: string;
// 	email: string;
// 	password: string;
// }

// interface IAdmin extends IUser {
// 	role: 'SUPERADMIN' | 'ADMIN';
// }
// interface IUser {
// 	test: boolean;
// }

// ============ { abstract vs ipmplement }  ============

// abstract class Animal {
// 	name: string = 'Hello';

// 	abstract makeSound(): void;
// }

// class Dog extends Animal {
// 	makeSound(): void {
// 		console.log('Dog is running');
// 	}
// }

// const dog = new Dog();
// dog.makeSound();

// ============ { Amaliy Task }  ============

// interface IUserProfile {
// 	id: number;
// 	name: string;
// 	email: string;
// 	isActive: boolean;
// }

// interface IAuthor {
// 	name: string;
// 	email: string;
// }
// type tag = string;
// interface IBlogPost {
// 	id: number;
// 	title: string;
// 	content: string;
// 	tags: tag[];
// 	author: IAuthor;
// }

// ============ { Homework }  ============