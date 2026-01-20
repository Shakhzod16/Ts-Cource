declare const todos_container: HTMLElement;
declare const input: HTMLInputElement;
declare let soqchi: number | null;
declare enum Status {
    NEW = 0,
    PROGRESS = 1,
    COMPLETED = 2
}
declare class Todo {
    id: number;
    title: string;
    status: Status;
    constructor(id: number, title: string);
}
declare class TodoApp {
    todos: Todo[];
    addTodo(title: string): void;
    deleteTodo(id: number): void;
    updateTodo(id: number, title: string): void;
}
declare let TodoApps: TodoApp;
declare function save(): void;
declare function handleDelete(id: number): void;
declare function handleEdit(id: number): void;
declare function draw(): void;
//# sourceMappingURL=main.d.ts.map