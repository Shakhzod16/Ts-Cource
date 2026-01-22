declare enum CourseType {
    FRONTEND = "frontend",
    BACKEND = "backend",
    FULLSTACK = "fullstack",
    GRAPHIC = "graphic"
}
declare enum Gender {
    MALE = "male",
    FEMALE = "female"
}
declare class User {
    id: number;
    name: string;
    age: number;
    gender: Gender;
    constructor(id: number, name: string, age: number, gender: Gender);
}
declare class Student extends User {
    phoneNumber: string;
    location: string;
    constructor(id: number, name: string, age: number, gender: Gender, phoneNumber: string, location: string);
}
declare const student1: Student;
declare const student2: Student;
declare class Teacher extends User {
    email: string;
    private password;
    courseType: CourseType;
    constructor(id: number, name: string, age: number, gender: Gender, email: string, password: string, courseType: CourseType);
}
declare const teacher1: Teacher;
declare const teacher2: Teacher;
declare class Group {
    id: number;
    name: string;
    students: Student[];
    teacher: Teacher | null;
    constructor(id: number, name: string);
}
declare let group1: Group;
declare let group2: Group;
declare class StudeyCentr {
    id: number;
    name: string;
    students: Student[];
    groups: Group[];
    teachers: Teacher[];
    constructor(name: string);
    addStudent(): void;
    private listStudents;
    private listGroups;
    private listteachers;
    seeAllInformations(): void;
    manageGroup(): void;
}
declare const shiftAcademy: StudeyCentr;
declare let isRunning: boolean;
//# sourceMappingURL=main.d.ts.map