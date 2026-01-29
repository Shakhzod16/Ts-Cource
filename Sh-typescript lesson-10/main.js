"use strict";
// =========== { Genered yani unversal funcksiya hosil qilish } ===========
function GerFirstElement(array) {
    return array[0];
}
let numbers = [1, 2, 3];
let firstNumber = GerFirstElement(numbers);
let stringArray = ['qwerty', 'qwerty', 'qwerty'];
let firstString = GerFirstElement(stringArray);
console.log(firstString);
const users = [
    { id: 1, name: 'qwerty' },
    { id: 1, name: 'qwerty' },
];
let firsTUser = GerFirstElement(users);
console.log(firsTUser);
// ========= { Examples 1 } =========
function test(item) {
    return [item];
}
let a = test(4);
console.log(a);
let b = test('Hello');
console.log(b);
let c = test(true);
console.log(c);
class ItemList {
    constructor() {
        this.itmes = [];
    }
    addItem(newItem) {
        this.itmes.push(newItem);
    }
    removeItem(index) {
        this.itmes.splice(index, 1);
    }
    updateItem(index, newItem) {
        this.itmes[index] = newItem;
    }
    getOneItem(index) {
        return this.itmes[index];
    }
}
const userList = new ItemList();
userList.addItem({ name: 'User', age: 12, email: 'werty' });
const productList = new ItemList();
productList.addItem({
    title: 'qwerty',
    description: 'qwert',
    price: 23,
});
//# sourceMappingURL=main.js.map