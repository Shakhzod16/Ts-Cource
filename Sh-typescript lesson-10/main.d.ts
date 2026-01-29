declare function GerFirstElement<T>(array: T[]): T | undefined;
declare let numbers: number[];
declare let firstNumber: number | undefined;
declare let stringArray: string[];
declare let firstString: string | undefined;
declare const users: {
    id: number;
    name: string;
}[];
declare let firsTUser: {
    id: number;
    name: string;
} | undefined;
declare function test<T>(item: T): T[];
declare let a: number[];
declare let b: string[];
declare let c: boolean[];
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
declare class ItemList<T> {
    itmes: T[];
    addItem(newItem: T): void;
    removeItem(index: number): void;
    updateItem(index: number, newItem: T): void;
    getOneItem(index: number): T | undefined;
}
declare const userList: ItemList<IUser>;
declare const productList: ItemList<IProduct>;
//# sourceMappingURL=main.d.ts.map