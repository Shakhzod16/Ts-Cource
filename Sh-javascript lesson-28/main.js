"use strict";
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
const input = document.getElementById('input');
const todosContainer = document.getElementById('todos_container');
const all_btn = document.getElementById('all_btn');
const todo_btn = document.getElementById('todo_btn');
const done_btn = document.getElementById('done_btn');
let editingTodoId = null;
class Todo {
    get getId() {
        return this.id;
    }
    set setId(id) {
        if (id > 0) {
            this.id = id;
        }
    }
    get getTitle() {
        return this.title;
    }
    set setTitle(title) {
        if (title.trim().length > 0) {
            this.title = title;
        }
        else {
            throw new Error('Title field must be exist');
        }
    }
    get getCompleted() {
        return this.isCompleted;
    }
    set setCompleted(iscompleted) {
        this.isCompleted = iscompleted;
    }
    toggleCompleted() {
        this.isCompleted = !this.isCompleted;
    }
    constructor(id, title) {
        this.isCompleted = false;
        if (id > 0) {
            this.id = id;
        }
        else {
            throw new Error('id must be positive');
        }
        if (title.trim().length > 0) {
            this.title = title;
        }
        else {
            throw new Error('title must be exist');
        }
    }
}
class TodoApp {
    constructor() {
        this.todos = [];
    }
    get getTodos() {
        return this.todos;
    }
    addTodo() {
        if (!input.value.trim())
            return;
        const newTodo = new Todo(Date.now(), input.value);
        this.todos.push(newTodo);
    }
    deleteTodo(id) {
        this.todos = this.todos.filter(t => t.getId !== id);
    }
    editTodo(id, newTitle) {
        const todo = this.todos.find(t => t.getId === id);
        if (!todo)
            return;
        todo.setTitle = newTitle;
    }
    deleteDoneTodos() {
        this.todos = this.todos.filter(t => !t.getCompleted);
    }
    deleteAllTodos() {
        this.todos = [];
    }
}
const todoApp = new TodoApp();
function handleSave() {
    if (editingTodoId) {
        todoApp.editTodo(editingTodoId, input.value);
        editingTodoId = null;
    }
    else {
        todoApp.addTodo();
    }
    input.value = '';
    draw(todoApp.getTodos);
}
function changeCompleted(todoId) {
    const todos = todoApp.getTodos;
    let currentTodo = todos.find(t => t.getId === todoId);
    if (!currentTodo) {
        return;
    }
    currentTodo.toggleCompleted();
    draw(todoApp.getTodos);
}
function filterTodo(filterType) {
    let todos = todoApp.getTodos;
    if (filterType === 'ALL') {
        draw(todos);
    }
    else {
        const filteredTodos = todos.filter(t => t.getCompleted === filterType);
        draw(filteredTodos);
    }
    drawButtons(filterType);
}
drawButtons('ALL');
function deleteTodo(todoId) {
    todoApp.deleteTodo(todoId);
    draw(todoApp.getTodos);
}
function editTodo(todoId) {
    const todos = todoApp.getTodos;
    const currentTodo = todos.find(t => t.getId === todoId);
    if (!currentTodo)
        return;
    input.value = currentTodo.getTitle;
    editingTodoId = todoId;
}
function drawButtons(filterType) {
    all_btn.classList.remove('btn-primary');
    all_btn.classList.add('btn-outline-primary');
    done_btn.classList.remove('btn-primary');
    done_btn.classList.add('btn-outline-primary');
    todo_btn.classList.remove('btn-primary');
    todo_btn.classList.add('btn-outline-primary');
    if (filterType === 'ALL') {
        all_btn.classList.remove('btn-outline-primary');
        all_btn.classList.add('btn-primary');
    }
    else if (filterType) {
        done_btn.classList.remove('btn-outline-primary');
        done_btn.classList.add('btn-primary');
    }
    else {
        todo_btn.classList.remove('btn-outline-primary');
        todo_btn.classList.add('btn-primary');
    }
}
function deleteDoneTasks() {
    todoApp.deleteDoneTodos();
    draw(todoApp.getTodos);
}
function deleteAllTasks() {
    const isConfirm = confirm('Barcha tasklarni o‘chirmoqchimisiz?');
    if (!isConfirm)
        return;
    todoApp.deleteAllTodos();
    draw(todoApp.getTodos);
}
draw(todoApp.getTodos);
function draw(todosArrray) {
    var _a, _b, _c, _d, _e, _f;
    const todoArray = todosArrray;
    let s = '';
    for (let i = 0; i < todoArray.length; i++) {
        s += `
		<div class="border px-4 py-2 mb-2 d-flex align-items-center justify-content-between">
			<h5 class="${((_a = todoArray[i]) === null || _a === void 0 ? void 0 : _a.getCompleted) ? 'text-decoration-line-through' : ''}">
				${(_b = todoArray[i]) === null || _b === void 0 ? void 0 : _b.getTitle}
			</h5>
			<div class="d-flex align-items-center gap-2">
				<input
					${((_c = todoArray[i]) === null || _c === void 0 ? void 0 : _c.getCompleted) ? 'checked' : ''}
					type="checkbox"
					onchange="changeCompleted(${(_d = todoArray[i]) === null || _d === void 0 ? void 0 : _d.getId})"
					class="form-check-input"
				/>
				<button onclick="deleteTodo(${(_e = todoArray[i]) === null || _e === void 0 ? void 0 : _e.getId})" class="btn btn-danger">🗑️</button>
				<button onclick="editTodo(${(_f = todoArray[i]) === null || _f === void 0 ? void 0 : _f.getId})" class="btn btn-warning">✏️</button>
			</div>
		</div>`;
    }
    todosContainer.innerHTML = s;
}
//# sourceMappingURL=main.js.map