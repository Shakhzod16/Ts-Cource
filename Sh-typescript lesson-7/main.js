"use strict";
// ======== { OOP Inheritance  - Bitta class boshqasidan xususiyat va metodlarni meros oladi } ========
// class Father {
// 	name: string;
// 	age: number;
// 	teaching(): void {
// 		console.log('Father is teaching');
// 	}
// 	constructor(name: string, age: number) {
// 		this.age = age;
// 		this.name = name;
// 	}
// }
// let father = new Father('Father', 45);
// class Child1 extends Father {
// 	heigth: number;
// 	constructor(name: string, age: number, heigth: number) {
// 		super(name, age);
// 		this.heigth = heigth;
// 	}
// }
// let child1 = new Child1('Child', 34, 180);
// console.log(child1);
// console.log(father);
// ======== { OOP Polymorphism  - Bitta metod — har xil classlarda har xil ishlaydi } ========
// class Animals{
//   name: string,
//   color: string
//   makeSound(): void{
//     console.log("Sound")
//   }
// }
// class Dog extends Animals{
//   override makeSound(): void {
//     console.log("Dog sound...")
//   }
// }
// let dog = new Dog()
// dog.makeSound()
// ========= { Loyiha Btouser oynasida } =========
var CourseType;
(function (CourseType) {
    CourseType["FRONTEND"] = "frontend";
    CourseType["BACKEND"] = "backend";
    CourseType["FULLSTACK"] = "fullstack";
    CourseType["GRAPHIC"] = "graphic";
})(CourseType || (CourseType = {}));
var Gender;
(function (Gender) {
    Gender["MALE"] = "male";
    Gender["FEMALE"] = "female";
})(Gender || (Gender = {}));
class User {
    constructor(id, name, age, gender) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
class Student extends User {
    constructor(id, name, age, gender, phoneNumber, location) {
        super(id, name, age, gender);
        this.phoneNumber = phoneNumber;
        this.location = location;
    }
}
const student1 = new Student(1, 'Nozim Kozimov', 19, Gender.MALE, '+998911233456', 'Buxoro');
const student2 = new Student(2, 'Ali Valiyev', 23, Gender.MALE, '+998911234567', 'Samarqand');
class Teacher extends User {
    constructor(id, name, age, gender, email, password, courseType) {
        super(id, name, age, gender);
        this.email = email;
        if (password.length < 8) {
            throw new Error('Password must be at least 8 characters');
        }
        this.password = password;
        this.courseType = courseType;
    }
}
const teacher1 = new Teacher(1, 'Mirshod', 28, Gender.MALE, 'mirshod@gmail.com', 'root12345', CourseType.FRONTEND);
const teacher2 = new Teacher(2, 'Feruz', 30, Gender.MALE, 'feruz@gmail.com', 'root67890', CourseType.FRONTEND);
class Group {
    constructor(id, name) {
        this.students = [];
        this.teacher = null;
        this.id = id;
        this.name = name;
    }
}
let group1 = new Group(34564, 'G-1');
let group2 = new Group(34, 'G-2');
class StudeyCentr {
    constructor(name) {
        this.id = 1;
        this.students = [student1, student2];
        this.groups = [group1, group2];
        this.teachers = [teacher1, teacher2];
        this.name = name;
    }
    addStudent() {
        const name = prompt('enter name:');
        const age = +prompt('enter age:');
        const choice = +prompt('choose gender (1-MALE,2-FEMALE):');
        const gender = choice === 1 ? Gender.MALE : Gender.FEMALE;
        const phoneNumber = prompt('enter phoneNumber:');
        const location = prompt('enter location:');
        const newStudent = new Student(Date.now(), name, age, gender, phoneNumber, location);
        this.students.push(newStudent);
    }
    listStudents() {
        var _a, _b;
        let s = '';
        for (let i = 0; i < this.students.length; i++) {
            s += `${i + 1}, ${(_a = this.students[i]) === null || _a === void 0 ? void 0 : _a.name} ${(_b = this.students[i]) === null || _b === void 0 ? void 0 : _b.phoneNumber}\n`;
        }
        return s;
    }
    listGroups() {
        var _a, _b, _c, _d;
        let s = '';
        for (let i = 0; i < this.groups.length; i++) {
            s += `${i + 1}, ${(_a = this.groups[i]) === null || _a === void 0 ? void 0 : _a.name} ${(_c = (_b = this.groups[i]) === null || _b === void 0 ? void 0 : _b.teacher) === null || _c === void 0 ? void 0 : _c.name}, ${(_d = this.groups[i]) === null || _d === void 0 ? void 0 : _d.students.length}\n ta`;
        }
        return s;
    }
    listteachers() {
        var _a, _b;
        let s = '';
        for (let i = 0; i < this.teachers.length; i++) {
            s += `${i + 1}, ${(_a = this.teachers[i]) === null || _a === void 0 ? void 0 : _a.name} ${(_b = this.teachers[i]) === null || _b === void 0 ? void 0 : _b.courseType}\n`;
        }
        return s;
    }
    seeAllInformations() {
        let groups = this.listGroups();
        let students = this.listStudents();
        let teachers = this.listteachers();
        alert(`Groups:
      ${groups}
      Teachers:
      ${teachers}
      Students:
      ${students}`);
    }
    manageGroup() {
        const groupNumber = +prompt(`Please choose one group:\n${this.listGroups()}`);
        const currentGroup = this.groups[groupNumber - 1];
        if (!currentGroup) {
            alert('Group not found');
            return;
        }
        let isRunning = true;
        while (isRunning) {
            const command = +prompt('1-add student to group\n2-edit name\n3-assign teacher\n4-remove student\n5-see students\n0-back\nChoose command:');
            switch (command) {
                // ADD STUDENT TO GROUP
                case 1: {
                    if (this.students.length === 0) {
                        alert('No students');
                        break;
                    }
                    const studentNumber = +prompt(`Choose student:\n${this.listStudents()}`);
                    const student = this.students[studentNumber - 1];
                    if (!student) {
                        alert('Student not found');
                        break;
                    }
                    currentGroup.students.push(student);
                    alert('Student added to group');
                    break;
                }
                // EDIT GROUP NAME
                case 2: {
                    const newName = prompt(`Enter new group name (current: ${currentGroup.name}):`);
                    if (!newName || !newName.trim()) {
                        alert('Name cannot be empty');
                        break;
                    }
                    currentGroup.name = newName;
                    alert('Group name updated');
                    break;
                }
                // ASSIGN TEACHER
                case 3: {
                    if (this.teachers.length === 0) {
                        alert('No teachers');
                        break;
                    }
                    const teacherNumber = +prompt(`Choose teacher:\n${this.listteachers()}`);
                    const teacher = this.teachers[teacherNumber - 1];
                    if (!teacher) {
                        alert('Teacher not found');
                        break;
                    }
                    currentGroup.teacher = teacher;
                    alert('Teacher assigned');
                    break;
                }
                // REMOVE STUDENT FROM GROUP
                case 4: {
                    if (currentGroup.students.length === 0) {
                        alert('Group is empty');
                        break;
                    }
                    let s = '';
                    for (let i = 0; i < currentGroup.students.length; i++) {
                        s += `${i + 1}, ${currentGroup.students[i].name}\n`;
                    }
                    const studentNumber = +prompt(`Choose student to remove:\n${s}`);
                    const index = studentNumber - 1;
                    if (!currentGroup.students[index]) {
                        alert('Student not found');
                        break;
                    }
                    currentGroup.students.splice(index, 1);
                    alert('Student removed');
                    break;
                }
                // SEE STUDENTS
                case 5: {
                    if (currentGroup.students.length === 0) {
                        alert('No students in group');
                        break;
                    }
                    let s = '';
                    for (let i = 0; i < currentGroup.students.length; i++) {
                        s += `${i + 1}, ${currentGroup.students[i].name}\n`;
                    }
                    alert(`Students in ${currentGroup.name}:\n${s}`);
                    break;
                }
                case 0:
                    isRunning = false;
                    break;
                default:
                    alert('Please choose valid command');
                    break;
            }
        }
    }
}
const shiftAcademy = new StudeyCentr('Shift academy');
let isRunning = true;
while (isRunning) {
    const command = +prompt('1-add student\n2-add group\n3-add teacher\n4-manage group\n5-see information\n0-exit\nChoose command:');
    switch (command) {
        case 1:
            // add student
            break;
        case 2:
            // add group
            break;
        case 3:
            // add teacher
            break;
        case 4:
            // manage group
            shiftAcademy.manageGroup();
            break;
        case 5:
            // see all students
            shiftAcademy.seeAllInformations();
            break;
        case 0:
            isRunning = false;
            break;
        default:
            alert('Please choose valid command:');
            break;
    }
}
//# sourceMappingURL=main.js.map