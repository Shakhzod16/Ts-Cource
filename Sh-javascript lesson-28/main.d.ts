declare const input: HTMLInputElement;
declare const todosContainer: HTMLElement;
declare const all_btn: HTMLButtonElement;
declare const todo_btn: HTMLButtonElement;
declare const done_btn: HTMLButtonElement;
declare let editingTodoId: number | null;
declare class Todo {
    private id;
    private title;
    private isCompleted;
    get getId(): number;
    set setId(id: number);
    get getTitle(): string;
    set setTitle(title: string);
    get getCompleted(): boolean;
    set setCompleted(iscompleted: boolean);
    toggleCompleted(): void;
    constructor(id: number, title: string);
}
declare class TodoApp {
    private todos;
    get getTodos(): Todo[];
    addTodo(): void;
    deleteTodo(id: number): void;
    editTodo(id: number, newTitle: string): void;
    deleteDoneTodos(): void;
    deleteAllTodos(): void;
}
declare const todoApp: TodoApp;
declare function handleSave(): void;
declare function changeCompleted(todoId: number): void;
declare function filterTodo(filterType: 'ALL' | boolean): void;
declare function deleteTodo(todoId: number): void;
declare function editTodo(todoId: number): void;
declare function drawButtons(filterType: 'ALL' | boolean): void;
declare function deleteDoneTasks(): void;
declare function deleteAllTasks(): void;
declare function draw(todosArrray: Todo[]): void;
//# sourceMappingURL=main.d.ts.map