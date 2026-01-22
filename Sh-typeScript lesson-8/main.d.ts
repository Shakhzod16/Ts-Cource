type User = {
    id: number;
    name: string;
    email: string;
    password: string;
};
type Admin = User & {
    role: 'SUPERADMIN' | 'ADMIN';
};
declare const admin: Admin;
interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
}
interface IAdmin extends IUser {
    role: 'SUPERADMIN' | 'ADMIN';
}
interface IUser {
    test: boolean;
}
//# sourceMappingURL=main.d.ts.map