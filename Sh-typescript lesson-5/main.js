"use strict";
// OOP tamoyillari
// class Rectangular {
// 	width: number;
// 	heigth: number;
// 	calculateArea(): number {
// 		return this.width * this.heigth;
// 	}
// 	constructor(width: number, heigth: number) {
// 		((this.heigth = heigth), (this.width = width));
// 	}
// }
// let result = new Rectangular(23, 2);
// let ress = result.calculateArea();
// console.log(ress);
// ====== {OOP Turlari} ======
// 1 - ENCAPSULATION
// 2 - POLYMORPHISIM
// 3 - ABSTRACTION
// 4 - INHERITENCE
// ======= { Terminal Aplication } =======
class Book {
    constructor(id, name, author, price, quantity, isNew) {
        ((this.id = id),
            (this.name = name),
            (this.author = author),
            (this.price = price),
            (this.quantity = quantity),
            (this.isNew = isNew));
    }
}
class Library {
    constructor(name) {
        this.books = [];
        this.name = name;
    }
    addBook() {
        let bookName = prompt('Iltimos kitob nomini kiritng');
        let author = prompt('Iltimos kitob mualifini kiritng');
        let bookPrice = +prompt('Iltimos kitob narxini kiritng');
        let quantity = +prompt('Iltimos kitob sonini kiritng');
        let tanlov = +prompt('Kitob holatini belgilang:\n1-Yangi\n2-Eski');
        let bookStatus = false;
        if (tanlov === 1) {
            bookStatus = true;
        }
        else if (tanlov === 2) {
            bookStatus = false;
        }
        else {
            alert("noto'g'ri qiymat");
        }
        const newBook = new Book(Date.now(), bookName, author, bookPrice, quantity, bookStatus);
        this.books.push(newBook);
        console.log(this.books);
        alert("muvofaqiyatli qo'shildi");
    }
    seeAllBooks() {
        var _a, _b, _c;
        let s = '';
        for (let i = 0; i < this.books.length; i++) {
            s += `${i + 1}. ${(_a = this.books[i]) === null || _a === void 0 ? void 0 : _a.name} ${(_b = this.books[i]) === null || _b === void 0 ? void 0 : _b.price}UZS, ${(_c = this.books[i]) === null || _c === void 0 ? void 0 : _c.quantity}ta\n`;
        }
        return s;
    }
    deleteBook() {
        const selectedBookNum = +prompt(`iltimos o'chirmoqchi bo'lgan kitob raqamini tanlang:\n${this.seeAllBooks()}`);
        this.books.splice(selectedBookNum - 1, 1);
        alert('sucess');
    }
    searchBookByName() {
        var _a, _b, _c;
        let searchValue = prompt('Iltimos kerakli kitob nomini kiritng');
        let filterBook = this.books.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));
        let s = '';
        for (let i = 0; i < filterBook.length; i++) {
            s += `${i + 1}. ${(_a = filterBook[i]) === null || _a === void 0 ? void 0 : _a.name} ${(_b = filterBook[i]) === null || _b === void 0 ? void 0 : _b.price}UZS, ${(_c = filterBook[i]) === null || _c === void 0 ? void 0 : _c.quantity}ta\n`;
        }
        return s;
    }
    etiBook() {
        const selectedBookNum = +prompt(`Iltimos tahrirlashni istagan kitob raqamini tanlang:\n${this.seeAllBooks()}`);
        const book = this.books[selectedBookNum - 1];
        if (!book) {
            alert('Bunday kitob topilmadi');
            return;
        }
        const newName = prompt(`Kitob nomi (${book.name})`) || book.name;
        const newAuthor = prompt(`Muallif (${book.author})`) || book.author;
        const newPrice = +(prompt(`Narx (${book.price})`) || book.price);
        const newQuantity = +(prompt(`Soni (${book.quantity})`) || book.quantity);
        const newStatus = +prompt(`Holati:\n1-Yangi\n2-Eski (${book.isNew ? 'Yangi' : 'Eski'})`);
        book.name = newName;
        book.author = newAuthor;
        book.price = newPrice;
        book.quantity = newQuantity;
        book.isNew = newStatus === 1 ? true : false;
        alert('Kitob muvaffaqiyatli tahrirlandi');
    }
}
const library = new Library('Falaq Nashr');
let isRunning = true;
while (isRunning) {
    const command = +prompt('Buyruqlardan birini tanlang\n1-add book\n2-remove book\n3-edit book\n4-search books\n5-see all books\n0-exit');
    switch (command) {
        case 1:
            // add book logic
            library.addBook();
            break;
        case 2:
            // remove logic
            library.deleteBook();
            break;
        case 3:
            // edit logic
            library.etiBook();
            break;
        case 4:
            // search books logic
            let result1 = library.searchBookByName();
            alert(result1);
            break;
        case 5:
            // see all  books logic
            let result = library.seeAllBooks();
            alert(result);
            break;
        case 0:
            // exit logic
            isRunning = false;
            console.log('Dasturdan foydalanganingiz uchun rahmat');
            break;
        default:
            alert('xato');
            break;
    }
}
//# sourceMappingURL=main.js.map