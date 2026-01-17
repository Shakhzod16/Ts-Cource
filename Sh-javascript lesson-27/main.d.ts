declare class Book {
    id: number;
    name: string;
    author: string;
    price: number;
    quantity: number;
    isNew: boolean;
    constructor(id: number, name: string, author: string, price: number, quantity: number, isNew: boolean);
}
declare class Library {
    name: string;
    books: Book[];
    constructor(name: string);
    addBook(): void;
    seeAllBooks(): string;
    deleteBook(): void;
    searchBookByName(): string;
    etiBook(): void;
}
declare const library: Library;
declare let isRunning: boolean;
//# sourceMappingURL=main.d.ts.map