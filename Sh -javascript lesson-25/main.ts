// type Size = 'MD' | 'LG' | 'XL';

// let size: Size;
// size = 'MD';

// type User = {
// 	id: number;
// 	name: string;
// 	age: number;
// 	isStudent: boolean;
// };

// let user1: User = {
// 	id: 1,
// 	name: 'ali',
// 	age: 87,
// 	isStudent: true,
// };

// type Product = {
// 	id: number;
// 	name: string;
// 	description: string;
// 	price: number;
// 	salePrice?: number | string;
// };

// let product1: Product = {
// 	id: 34,
// 	name: 'iphone',
// 	description: 'lorem',
// 	price: 34,
// 	salePrice: 8999,
// };

// let product2: Product = {
// 	id: 34,
// 	name: 'iphone',
// 	description: 'lorem',
// 	price: 34,
// };

// ====== ######### ======

// type UserForm = {
// 	firstName: string;
// 	age: number;
// 	email: string;
// 	password: string;
// 	birthday: number;
// 	location: string;
// 	hobbyName: string;

// 	imageUrl?: string;
// 	lastName?: string;
// 	phoneNumber?: string;
// };

// let user1: UserForm = {
// 	firstName: 'Tolip',
// 	age: 23,
// 	email: 'example@gmail.com',
// 	password: 'wwfer233',
// 	birthday: 34,
// 	location: 'new York ',
// 	hobbyName: 'walking',
// 	lastName: 'Sobirov',
// };

// let user2: UserForm = {
// 	firstName: 'Tolip',
// 	age: 23,
// 	email: 'example@gmail.com',
// 	password: 'wwfer233',
// 	birthday: 34,
// 	location: 'new York ',
// 	hobbyName: 'walking',
// };

// ====== ######### ======
// Object Array type

// type User = {
// 	id: number;
// 	name: string;
// 	isStudent?: boolean;
// };

// let users: User[] = [
// 	{ id: 1, name: 'ali', isStudent: true },
// 	{ id: 2, name: 'Vali', isStudent: true },
// ];

// ====== ######### ======

// type Product = {
// 	id: number;
// 	name: string;
// 	description: string;
// 	price: number;
// 	images: string[];
// };

// let products: Product[] = [
// 	{
// 		id: 1,
// 		name: 'ali',
// 		description: 'lorem',
// 		price: 333,
// 		images: ['link1', 'link2'],
// 	},
// ];

// ====== ######### ======

type Order = {
	id: number;
	name: string;
	totalPrice: number;
	location: string;
	status: string;
	items: OrderItem[];
};
type OrderItem = {
	id: number;
	name: string;
	price: number;
	quantity: number;
};
