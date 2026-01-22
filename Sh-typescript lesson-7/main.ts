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

enum CourseType {
	FRONTEND = 'frontend',
	BACKEND = 'backend',
	FULLSTACK = 'fullstack',
	GRAPHIC = 'graphic',
}
enum Gender {
	MALE = 'male',
	FEMALE = 'female',
}
class User {
	id: number;
	name: string;
	age: number;
	gender: Gender;

	constructor(id: number, name: string, age: number, gender: Gender) {
		this.id = id;
		this.name = name;
		this.age = age;
		this.gender = gender;
	}
}

class Student extends User {
	phoneNumber: string;
	location: string;

	constructor(id: number, name: string, age: number, gender: Gender, phoneNumber: string, location: string) {
		super(id, name, age, gender);
		this.phoneNumber = phoneNumber;
		this.location = location;
	}
}

const student1 = new Student(1, 'Nozim Kozimov', 19, Gender.MALE, '+998911233456', 'Buxoro');
const student2 = new Student(2, 'Ali Valiyev', 23, Gender.MALE, '+998911234567', 'Samarqand');

class Teacher extends User {
	email: string;
	private password: string;
	courseType: CourseType;

	constructor(
		id: number,
		name: string,
		age: number,
		gender: Gender,
		email: string,
		password: string,
		courseType: CourseType,
	) {
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
	id: number;
	name: string;
	students: Student[] = [];
	teacher: Teacher | null = null;

	constructor(id: number, name: string) {
		this.id = id;
		this.name = name;
	}
}
let group1 = new Group(34564, 'G-1');
let group2 = new Group(34, 'G-2');
class StudeyCentr {
	id: number = 1;
	name: string;
	students: Student[] = [student1, student2];
	groups: Group[] = [group1, group2];
	teachers: Teacher[] = [teacher1, teacher2];

	constructor(name: string) {
		this.name = name;
	}
	addStudent(): void {
		const name = prompt('enter name:') as string;
		const age = +(prompt('enter age:') as string);
		const choice = +(prompt('choose gender (1-MALE,2-FEMALE):') as string);
		const gender = choice === 1 ? Gender.MALE : Gender.FEMALE;
		const phoneNumber = prompt('enter phoneNumber:') as string;
		const location = prompt('enter location:') as string;

		const newStudent = new Student(Date.now(), name, age, gender, phoneNumber, location);

		this.students.push(newStudent);
	}

	private listStudents(): string {
		let s = '';
		for (let i = 0; i < this.students.length; i++) {
			s += `${i + 1}, ${this.students[i]?.name} ${this.students[i]?.phoneNumber}\n`;
		}
		return s;
	}
	private listGroups(): string {
		let s = '';
		for (let i = 0; i < this.groups.length; i++) {
			s += `${i + 1}, ${this.groups[i]?.name} ${this.groups[i]?.teacher?.name}, ${this.groups[i]?.students.length}\n ta`;
		}
		return s;
	}
	private listteachers(): string {
		let s = '';
		for (let i = 0; i < this.teachers.length; i++) {
			s += `${i + 1}, ${this.teachers[i]?.name} ${this.teachers[i]?.courseType}\n`;
		}
		return s;
	}
	seeAllInformations(): void {
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
		const groupNumber = +(prompt(`Please choose one group:\n${this.listGroups()}`) as string);
		const currentGroup = this.groups[groupNumber - 1];

		if (!currentGroup) {
			alert('Group not found');
			return;
		}

		let isRunning = true;

		while (isRunning) {
			const command = +(prompt(
				'1-add student to group\n2-edit name\n3-assign teacher\n4-remove student\n5-see students\n0-back\nChoose command:',
			) as string);

			switch (command) {
				// ADD STUDENT TO GROUP
				case 1: {
					if (this.students.length === 0) {
						alert('No students');
						break;
					}

					const studentNumber = +(prompt(`Choose student:\n${this.listStudents()}`) as string);

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
					const newName = prompt(`Enter new group name (current: ${currentGroup.name}):`) as string;

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

					const teacherNumber = +(prompt(`Choose teacher:\n${this.listteachers()}`) as string);

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

					const studentNumber = +(prompt(`Choose student to remove:\n${s}`) as string);

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
	const command = +(prompt(
		'1-add student\n2-add group\n3-add teacher\n4-manage group\n5-see information\n0-exit\nChoose command:',
	) as string);
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
