// =========== { Genered yani unversal funcksiya hosil qilish } ===========

function GerFirstElement<T>(array: T[]) {
	return array[0];
}
let numbers = [1, 2, 3];
let firstNumber = GerFirstElement<number>(numbers);

let stringArray = ['qwerty', 'qwerty', 'qwerty'];
let firstString = GerFirstElement<string>(stringArray);
console.log(firstString);

const users = [
	{ id: 1, name: 'qwerty' },
	{ id: 1, name: 'qwerty' },
];
let firsTUser = GerFirstElement<{ id: number; name: string }>(users);
console.log(firsTUser);

// ========= { Examples 1 } =========

function test<T>(item: T): T[] {
	return [item];
}

let a = test<number>(4);
console.log(a);

let b = test<string>('Hello');
console.log(b);

let c = test<boolean>(true);
console.log(c);

// ========= { Examples 2 } =========

interface IUser {
	name: string;
	age: number;
	email: string;
}
interface IProduct {
	title: string;
	price: number;
	description: string;
}
class ItemList<T> {
	itmes: T[] = [];
	addItem(newItem: T) {
		this.itmes.push(newItem);
	}
	removeItem(index: number) {
		this.itmes.splice(index, 1);
	}
	updateItem(index: number, newItem: T) {
		this.itmes[index] = newItem;
	}
	getOneItem(index: number): T | undefined {
		return this.itmes[index];
	}
}

const userList = new ItemList<IUser>();
userList.addItem({ name: 'User', age: 12, email: 'werty' });

const productList = new ItemList<IProduct>();

productList.addItem({
	title: 'qwerty',
	description: 'qwert',
	price: 23,
});
