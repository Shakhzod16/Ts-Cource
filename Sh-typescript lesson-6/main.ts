// Abstragsaya
// GETTER AND SETTER

// class User {
// 	id: number = 1;
// 	name: string = '';
// 	age: number = 0;

// 	// Getter
// 	get getId(): number {
// 		return this.id;
// 	}

// 	// Setter
// 	set setId(value: number) {
// 		if (value > 0) {
// 			this.id = value;
// 		} else {
// 			throw new Error('Id field must be positive');
// 		}
// 	}
// }

// const user = new User();
// user.setId = 2;
// console.log(user.getId);

// ==============={ 000000000000000000 }=================

// class BankAccount {
// 	private balance: number = 0;

// 	// Getter
// 	get getBalance(): number {
// 		return this.balance;
// 	}

// 	// Setter
// 	set setBalance(value: number) {
// 		if (value > 0) {
// 			this.balance = value;
// 		} else {
// 			throw new Error('Balance must be Musbat Number');
// 		}
// 	}
// }

// const bank = new BankAccount();
// bank.setBalance = -4455;
// console.log(bank.getBalance);

// class Password {
// 	private passWord: string = 'dewsfr452';

// 	getPassword(): string {
// 		return this.passWord;
// 	}

// 	set setPassword(password: string) {
// 		if (password.trim().length >= 8) {
// 			this.passWord = password;
// 		} else {
// 			throw new Error('Password must be at least 8 characters');
// 		}
// 	}
// }

// const pass = new Password();
// pass.setPassword = '5854558dcf';
// console.log(pass.getPassword());

// ======== { Homework } =======
// ======== [ Loyiha ] ========

// const input = document.getElementById('input') as HTMLInputElement;
// const todosContainer = document.getElementById('todos_container') as HTMLElement;
// const all_btn = document.getElementById('all_btn') as HTMLButtonElement;
// const todo_btn = document.getElementById('todo_btn') as HTMLButtonElement;
// const done_btn = document.getElementById('done_btn') as HTMLButtonElement;

// let editingTodoId: number | null = null;

// class Todo {
// 	private id: number;
// 	private title: string;
// 	private isCompleted: boolean = false;

// 	get getId(): number {
// 		return this.id;
// 	}

// 	set setId(id: number) {
// 		if (id > 0) {
// 			this.id = id;
// 		}
// 	}

// 	get getTitle(): string {
// 		return this.title;
// 	}
// 	set setTitle(title: string) {
// 		if (title.trim().length > 0) {
// 			this.title = title;
// 		} else {
// 			throw new Error('Title field must be exist');
// 		}
// 	}
// 	get getCompleted(): boolean {
// 		return this.isCompleted;
// 	}
// 	set setCompleted(iscompleted: boolean) {
// 		this.isCompleted = iscompleted;
// 	}
// 	toggleCompleted(): void {
// 		this.isCompleted = !this.isCompleted;
// 	}
// 	constructor(id: number, title: string) {
// 		if (id > 0) {
// 			this.id = id;
// 		} else {
// 			throw new Error('id must be positive');
// 		}
// 		if (title.trim().length > 0) {
// 			this.title = title;
// 		} else {
// 			throw new Error('title must be exist');
// 		}
// 	}
// }
// class TodoApp {
// 	private todos: Todo[] = [];

// 	get getTodos(): Todo[] {
// 		return this.todos;
// 	}

// 	addTodo(): void {
// 		if (!input.value.trim()) return;
// 		const newTodo = new Todo(Date.now(), input.value);
// 		this.todos.push(newTodo);
// 	}

// 	deleteTodo(id: number): void {
// 		this.todos = this.todos.filter(t => t.getId !== id);
// 	}

// 	editTodo(id: number, newTitle: string): void {
// 		const todo = this.todos.find(t => t.getId === id);
// 		if (!todo) return;
// 		todo.setTitle = newTitle;
// 	}

// 	deleteDoneTodos(): void {
// 		this.todos = this.todos.filter(t => !t.getCompleted);
// 	}

// 	deleteAllTodos(): void {
// 		this.todos = [];
// 	}
// }

// const todoApp = new TodoApp();

// function handleSave() {
// 	if (editingTodoId) {
// 		todoApp.editTodo(editingTodoId, input.value);
// 		editingTodoId = null;
// 	} else {
// 		todoApp.addTodo();
// 	}

// 	input.value = '';
// 	draw(todoApp.getTodos);
// }

// function changeCompleted(todoId: number) {
// 	const todos = todoApp.getTodos;
// 	let currentTodo = todos.find(t => t.getId === todoId);
// 	if (!currentTodo) {
// 		return;
// 	}

// 	currentTodo.toggleCompleted();
// 	draw(todoApp.getTodos);
// }
// function filterTodo(filterType: 'ALL' | boolean) {
// 	let todos = todoApp.getTodos;
// 	if (filterType === 'ALL') {
// 		draw(todos);
// 	} else {
// 		const filteredTodos = todos.filter(t => t.getCompleted === filterType);
// 		draw(filteredTodos);
// 	}
// 	drawButtons(filterType);
// }

// drawButtons('ALL');

// function deleteTodo(todoId: number) {
// 	todoApp.deleteTodo(todoId);
// 	draw(todoApp.getTodos);
// }
// function editTodo(todoId: number) {
// 	const todos = todoApp.getTodos;
// 	const currentTodo = todos.find(t => t.getId === todoId);
// 	if (!currentTodo) return;

// 	input.value = currentTodo.getTitle;

// 	editingTodoId = todoId;
// }

// function drawButtons(filterType: 'ALL' | boolean) {
// 	all_btn.classList.remove('btn-primary');
// 	all_btn.classList.add('btn-outline-primary');
// 	done_btn.classList.remove('btn-primary');
// 	done_btn.classList.add('btn-outline-primary');
// 	todo_btn.classList.remove('btn-primary');
// 	todo_btn.classList.add('btn-outline-primary');
// 	if (filterType === 'ALL') {
// 		all_btn.classList.remove('btn-outline-primary');
// 		all_btn.classList.add('btn-primary');
// 	} else if (filterType) {
// 		done_btn.classList.remove('btn-outline-primary');
// 		done_btn.classList.add('btn-primary');
// 	} else {
// 		todo_btn.classList.remove('btn-outline-primary');
// 		todo_btn.classList.add('btn-primary');
// 	}
// }
// function deleteDoneTasks() {
// 	todoApp.deleteDoneTodos();
// 	draw(todoApp.getTodos);
// }
// function deleteAllTasks() {
// 	const isConfirm = confirm('Barcha tasklarni o‘chirmoqchimisiz?');
// 	if (!isConfirm) return;

// 	todoApp.deleteAllTodos();
// 	draw(todoApp.getTodos);
// }

// draw(todoApp.getTodos);
// function draw(todosArrray: Todo[]) {
// 	const todoArray = todosArrray;
// 	let s = '';
// 	for (let i = 0; i < todoArray.length; i++) {
// 		s += `
// 		<div class="border px-4 py-2 mb-2 d-flex align-items-center justify-content-between">
// 			<h5 class="${todoArray[i]?.getCompleted ? 'text-decoration-line-through' : ''}">
// 				${todoArray[i]?.getTitle}
// 			</h5>
// 			<div class="d-flex align-items-center gap-2">
// 				<input
// 					${todoArray[i]?.getCompleted ? 'checked' : ''}
// 					type="checkbox"
// 					onchange="changeCompleted(${todoArray[i]?.getId})"
// 					class="form-check-input"
// 				/>
// 				<button onclick="deleteTodo(${todoArray[i]?.getId})" class="btn btn-danger">🗑️</button>
// 				<button onclick="editTodo(${todoArray[i]?.getId})" class="btn btn-warning">✏️</button>
// 			</div>
// 		</div>`;
// 	}
// 	todosContainer.innerHTML = s;
// }
