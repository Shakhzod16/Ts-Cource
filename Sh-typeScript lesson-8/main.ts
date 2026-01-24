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

// ============ { Abstract class vs Interface }  ============

// Abstract classdan instance yaratilmaydi. Abstract class ichida abstract  method yoki oddiy methodlardan foydalansan bo'ladi.

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

// ============ { Homework 1 - Task }  ============

interface IUserProfile {
	id: number;
	name: string;
	email: string;
	isActive: boolean;
}

const userProfile: IUserProfile = {
	id: 34,
	name: 'Jonibek',
	email: 'jonibek@gmail.com',
	isActive: true,
};

type Author = {
	name: string;
	email: string;
};
interface IBlogPost {
	id: number;
	title: string;
	content: string;
	tags: [string, string, string];
	author: Author;
}

const blogPost: IBlogPost = {
	id: 1,
	title: 'Lorem Ipsum',
	content: 'typescript and javascript',
	tags: ['html', 'scss', 'Python'],
	author: {
		name: 'Jone',
		email: 'jone@gmail.com',
	},
};

// ============ { Homework 2 - Task }  ============

interface IProduct {
	id: number;
	name: string;
	description: string;
	price: number;
	stock: number;
	isOnStock: boolean;
}

const product: IProduct = {
	id: 1,
	name: 'Iphone',
	description: 'Lorem Ipsum',
	price: 1234,
	stock: 24,
	isOnStock: false,
};

type Items = {
	productId: number;
	quantity: number;
	price: number;
};
interface IOrder {
	orderId: string;
	customerId: number;
	items: Items[];
	totalAmount: number;
	status: string;
}

const order: IOrder = {
	orderId: 'qwerty',
	customerId: 2,
	items: [
		{ productId: 2, quantity: 2, price: 12345 },
		{ productId: 2, quantity: 2, price: 12345 },
	],
	totalAmount: 1234,
	status: 'Junior',
};

// ============ { Homework 3 - Task }  ============

type Attentdees = {
	name: string;
	email: string;
};
interface INewEvent {
	id: string;
	title: string;
	date: string;
	location: string;
	attentdees: Attentdees[];
}

const newEvent: INewEvent = {
	id: 'qwert1',
	title: 'Lorem Ipsum',
	date: '2025-07-23',
	location: 'Buxara',
	attentdees: [
		{ name: 'ali', email: 'ali@gmail.com' },
		{ name: 'ali', email: 'ali@gmail.com' },
	],
};

type Forecast = {
	day: string;
	temperature: string;
	condition: string;
};
interface IWeatherDate {
	city: string;
	tempperature: number;
	condition: string;
	humidity: number;
	windSpeed: number;
	forecast: Forecast[];
}

const weatherDate: IWeatherDate = {
	city: 'Buxara',
	tempperature: 1234,
	condition: 'Sunny',
	humidity: 50,
	windSpeed: 10,
	forecast: [
		{ day: 'Monday', temperature: '35', condition: 'Sunny' },
		{ day: 'Monday', temperature: '35', condition: 'Sunny' },
	],
};

// ============ { Homework 4 - Task }  ============

interface IVehicle {
	id: string;
	type: string;
	make: string;
	model: string;
	year: number;
	features: [string, string, string];
}

const vehicle: IVehicle = {
	id: 'VH1234',
	type: 'Car',
	make: 'Captiva',
	model: 'JM',
	year: 2023,
	features: ['Air ', '360 Camera', 'Comfort'],
};

type Sender = {
	id: number;
	name: string;
};
type Receiver = {
	id: number;
	name: string;
};
interface IChatMessage {
	id: string;
	sender: Sender;
	receiver: Receiver;
	message: string;
	isRead: boolean;
}

const chatMessage: IChatMessage = {
	id: 'M123',
	sender: { id: 1, name: 'ali' },
	receiver: { id: 2, name: 'Vali' },
	message: 'Hello World',
	isRead: true,
};

// ============ { Homework 5 - Task }  ============

type Ratings = {
	IMGB: number;
	RottenTomasoes: number;
};
interface IMovie {
	id: number;
	title: string;
	director: string;
	genres: [string, string];
	ratings: Ratings;
}

const movie: IMovie = {
	id: 2,
	title: 'Lorem Ipsum',
	director: 'Jone',
	genres: ['qwerty', 'yuiopp'],
	ratings: {
		IMGB: 8.9,
		RottenTomasoes: 24,
	},
};

type Itemss = {
	productId: number;
	name: string;
	quantity: number;
	price: number;
};
interface ICard {
	id: string;
	userId: number;
	items: Itemss[];
	totalPrice: number;
	isCheckoutCompleted: boolean;
}

const card: ICard = {
	id: 'qwerty1',
	userId: 1,
	items: [
		{ productId: 1234, name: 'Iphone', quantity: 1, price: 1234 },
		{ productId: 1234, name: 'Iphone', quantity: 1, price: 1234 },
	],
	totalPrice: 234,
	isCheckoutCompleted: true,
};
