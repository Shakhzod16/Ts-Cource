"use strict";
// { enum } typescript uchun o'zgarmas qiymatlar yaratish uchun foydalaniladi
// enum OrderSatus {
// 	COMPLETED = 'completed',
// 	NEW = 'new',
// 	PROGRESS = 'progress',
// }
// const order = {
// 	id: 1,
// 	customerName: 'alisher',
// 	created: '09-2-2322',
// 	totalPrice: 450000,
// 	status: OrderSatus.NEW,
// };
// console.log(order);
// {OOP} Typescriptda OOP
// class Car {
// 	name: string;
// 	year: number;
// 	isNew: boolean;
// 	color: string;
// 	constructor(name: string, year: number, isNew: boolean, color: string) {
// 		(this.name = name), (this.year = year), (this.isNew = isNew);
// 		this.color = color;
// 	}
// }
// let car = new Car('Cobalt', 2024, false, 'black');
// let car1 = new Car('Spark', 2023, false, 'white');
// console.log(car);
// console.log(car1);
// ==== { ******* } ====
// class Person {
// 	firstName: string;
// 	lastName: string;
// 	age: number;
// 	run(): void {
// 		console.log('This person is running');
// 	}
// 	constructor(firstName: string, lastName: string, age: number) {
// 		(this.firstName = firstName), (this.lastName = lastName), (this.age = age);
// 	}
// }
// let person1 = new Person('nozim', 'kozimov', 87);
// person1.run();
// console.log(person1);
// ======= {  Homework } =======
// const todos_container = document.getElementById('todos_container') as HTMLElement;
// const input = document.getElementById('input') as HTMLInputElement;
// let soqchi: number | null = null;
// enum Status {
// 	NEW,
// 	PROGRESS,
// 	COMPLETED,
// }
// class Todo {
// 	id: number;
// 	title: string;
// 	status: Status = Status.NEW;
// 	constructor(id: number, title: string) {
// 		this.id = id;
// 		this.title = title;
// 	}
// }
// class TodoApp {
// 	todos: Todo[] = [];
// 	addTodo(title: string): void {
// 		let newTodo = new Todo(Date.now(), title);
// 		this.todos.push(newTodo);
// 	}
// 	deleteTodo(id: number) {
// 		this.todos = this.todos.filter(item => item.id !== id);
// 	}
// 	updateTodo(id: number, title: string): void {
// 		let currentTodo = this.todos.find(t => t.id === id);
// 		if (!currentTodo) return;
// 		currentTodo.title = title;
// 	}
// }
// let TodoApps = new TodoApp();
// function save() {
// 	if (soqchi !== null) {
// 		TodoApps.updateTodo(soqchi, input.value);
// 		soqchi = null;
// 	} else {
// 		TodoApps.addTodo(input.value);
// 	}
// 	draw();
// 	input.value = '';
// }
// function handleDelete(id: number) {
// 	TodoApps.deleteTodo(id);
// 	draw();
// }
// function handleEdit(id: number) {
// 	let currentTodo = TodoApps.todos.find(t => t.id === id);
// 	if (!currentTodo) return;
// 	input.value = currentTodo.title;
// 	soqchi = id;
// }
// function draw() {
// 	let s = '';
// 	let myArray = TodoApps.todos;
// 	for (let i = 0; i < myArray.length; i++) {
// 		s += `<div class="px-2 mb-2 w-50 py-1 rounded-2 border d-flex align-items-center justify-content-between">
// 			<p>${myArray[i]?.title}</p>
// 			<div class="d-flex gap-1">
// 				<button onclick="handleDelete(${myArray[i]?.id})" class="btn btn-danger">🗑️</button>
// 				<button onclick="handleEdit(${myArray[i]?.id})" class="btn btn-warning">✏️</button>
// 			</div>
// 		</div>`;
// 	}
// 	todos_container.innerHTML = s;
// }
// draw();
// ======= {  Homework - 2 } =======
// 1 - masala
// enum Weekdays {
// 	DUSHANBA = 'dushanba',
// 	SESHANBA = 'seshanba',
// 	CHORSHANBA = 'chorshanba',
// 	PAYSHANBA = 'payshanba',
// 	JUMA = 'juma',
// 	SHANBA = 'shanba',
// 	YAKSHANBA = 'yakshanba',
// }
// const week = {
// 	id: 1,
// 	weekDay: OrderSatus.DUSHANBA,
// };
// 2 - masala
// enum SvetaforColor {
// 	RED = 'red',
// 	YELLOW = 'yellow',
// 	GREEN = 'green',
// }
// 3 - masala
// enum UserRoll {
// 	USER = 'user',
// 	ADMIN = 'admin',
// 	TEACHER = 'teacher',
// 	STUDENT = 'student',
// }
// 4 - masala
// enum Gender {
// 	MALE = 'male',
// 	FEMALE = 'female',
// 	OTHER = 'other',
// }
// 5 - masala
// enum OrderStatus {
// 	OPEN = 'open',
// 	INPROGRESS = 'inprogress',
// 	COMPLETED = 'completed',
// 	CLOSED = 'closed',
// }
//# sourceMappingURL=main.js.map