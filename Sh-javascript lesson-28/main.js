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
class Password {
    constructor() {
        this.passWord = 'dewsfr452';
    }
    getPassword() {
        return this.passWord;
    }
    set setPassword(password) {
        if (password.trim().length >= 8) {
            this.passWord = password;
        }
        else {
            throw new Error('Password must be at least 8 characters');
        }
    }
}
const pass = new Password();
pass.setPassword = '5854558dcf';
console.log(pass.getPassword());
//# sourceMappingURL=main.js.map