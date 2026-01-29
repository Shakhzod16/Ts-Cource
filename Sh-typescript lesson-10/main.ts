// =========== { Genered yani unversal funcksiya hosil qilish } ===========

// function GerFirstElement<T>(array: T[]) {
// 	return array[0];
// }
// let numbers = [1, 2, 3];
// let firstNumber = GerFirstElement<number>(numbers);

// let stringArray = ['qwerty', 'qwerty', 'qwerty'];
// let firstString = GerFirstElement<string>(stringArray);
// console.log(firstString);

// const users = [
// 	{ id: 1, name: 'qwerty' },
// 	{ id: 1, name: 'qwerty' },
// ];
// let firsTUser = GerFirstElement<{ id: number; name: string }>(users);
// console.log(firsTUser);

// // ========= { Examples 1 } =========

// function test<T>(item: T): T[] {
// 	return [item];
// }

// let a = test<number>(4);
// console.log(a);

// let b = test<string>('Hello');
// console.log(b);

// let c = test<boolean>(true);
// console.log(c);

// // ========= { Examples 2 } =========

// interface IUser {
// 	name: string;
// 	age: number;
// 	email: string;
// }
// interface IProduct {
// 	title: string;
// 	price: number;
// 	description: string;
// }
// class ItemList<T> {
// 	itmes: T[] = [];
// 	addItem(newItem: T) {
// 		this.itmes.push(newItem);
// 	}
// 	removeItem(index: number) {
// 		this.itmes.splice(index, 1);
// 	}
// 	updateItem(index: number, newItem: T) {
// 		this.itmes[index] = newItem;
// 	}
// 	getOneItem(index: number): T | undefined {
// 		return this.itmes[index];
// 	}
// }

// const userList = new ItemList<IUser>();
// userList.addItem({ name: 'User', age: 12, email: 'werty' });

// const productList = new ItemList<IProduct>();

// productList.addItem({
// 	title: 'qwerty',
// 	description: 'qwert',
// 	price: 23,
// });

// ============================

// Bir cil turli type yaratish
// type Type1 = Record<'width' | 'height' | 'size'>;

// ===========================

// belgilangan turdan keylarni olib tashlash

// type User2 = Omit<User, 'name' | 'age'>;

// ============================

// belgilangan keyni saqlab qolganini o'chirish

// type User3 = Pick <User,"passeord">

// ============================

// const numberArray: ReadonlyArray<number> = [4, 5, 6, 3];

// ============================

// type Users = {
// 	id: number;
// 	name: string;
// 	email: string;
// 	isActive: boolean;
// };
// type NewType = keyof User;

// let x: NewType = 'email';

// ============= { Homework } =============

// class Product {
// 	constructor(
// 		 id: number,
// 		 title: string,
// 		 description: string,
// 		 price: number,
// 		 imagesUrl: string[],
// 	) {}
// }

// class Category {
// 	constructor(
// 		 id: number,
// 		 name: string,
// 		 imageUrl: string,
// 		 products: Product[],
// 	) {}
// }
// interface ICRUD<T> {
// 	create(item: T): void;
// 	update(id: number, item: Partial<T>): void;
// 	delete(id: number): void;
// 	getOne(id: number): T | undefined;
// 	searchByTitle(title: string): T[];
// }
// class CrudService<T extends { id: number; title?: string }> implements ICRUD<T> {
// 	private items: T[] = [];

// 	create(item: T): void {
// 		this.items.push(item);
// 	}

// 	update(id: number, updatedItem: Partial<T>): void {
// 		const index = this.items.findIndex(i => i.id === id);
// 		if (index !== -1) {
// 			// this.items[index] = { ...this.items[index], ...updatedItem };
// 		}
// 	}

// 	delete(id: number): void {
// 		this.items = this.items.filter(i => i.id !== id);
// 	}

// 	getOne(id: number): T | undefined {
// 		return this.items.find(i => i.id === id);
// 	}

// 	searchByTitle(title: string): T[] {
// 		return this.items.filter(i => i.title?.toLowerCase().includes(title.toLowerCase()));
// 	}
// }

// 2 - masala

type User = {
	id: string;
	username: string;
	email: string;
	passwordHash: string;
	avatarUrl?: string;
	role: 'user' | 'admin';
};

type PublicUser = Pick<User, 'id' | 'username' | 'avatarUrl'>;

// 3 - masala

type Product = {
	id: number;
	title: string;
	price: number;
	inStock: boolean;
};

type UpdateProduct = Partial<Product>;

// 4 - masala

type Profile = {
	bio?: string;
	avatarUrl?: string;
	website?: string;
};

type FullProfile = Required<Profile>;

// 5 - masala

type Action = 'login' | 'logout' | 'refresh';

type UpperAction = Uppercase<Action>;

// 6 - masala

type Header = 'CONTENT-TYPE' | 'AUTHORIZATION';

type LowerHeader = Lowercase<Header>;

// 7 - masala

type Word = 'user' | 'product' | 'order';

type CapitalizedWord = Capitalize<Word>;

// 8 - masala

type Title = 'User' | 'Product' | 'Order';

type UncapitalizedTitle = Uncapitalize<Title>;
