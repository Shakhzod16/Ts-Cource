// type Size = 'MD' | 'LG' | 'XL';

// let size: Size;
// size = 'MD';

// type User = {
// 	id: number;
// 	name: string;
// 	age: number;
// 	isStudent: boolean;
// };

// let user1: User = {
// 	id: 1,
// 	name: 'ali',
// 	age: 87,
// 	isStudent: true,
// };

// type Product = {
// 	id: number;
// 	name: string;
// 	description: string;
// 	price: number;
// 	salePrice?: number | string;
// };

// let product1: Product = {
// 	id: 34,
// 	name: 'iphone',
// 	description: 'lorem',
// 	price: 34,
// 	salePrice: 8999,
// };

// let product2: Product = {
// 	id: 34,
// 	name: 'iphone',
// 	description: 'lorem',
// 	price: 34,
// };

// ====== ######### ======

// type UserForm = {
// 	firstName: string;
// 	age: number;
// 	email: string;
// 	password: string;
// 	birthday: number;
// 	location: string;
// 	hobbyName: string;

// 	imageUrl?: string;
// 	lastName?: string;
// 	phoneNumber?: string;
// };

// let user1: UserForm = {
// 	firstName: 'Tolip',
// 	age: 23,
// 	email: 'example@gmail.com',
// 	password: 'wwfer233',
// 	birthday: 34,
// 	location: 'new York ',
// 	hobbyName: 'walking',
// 	lastName: 'Sobirov',
// };

// let user2: UserForm = {
// 	firstName: 'Tolip',
// 	age: 23,
// 	email: 'example@gmail.com',
// 	password: 'wwfer233',
// 	birthday: 34,
// 	location: 'new York ',
// 	hobbyName: 'walking',
// };

// ====== ######### ======
// Object Array type

// type User = {
// 	id: number;
// 	name: string;
// 	isStudent?: boolean;
// };

// let users: User[] = [
// 	{ id: 1, name: 'ali', isStudent: true },
// 	{ id: 2, name: 'Vali', isStudent: true },
// ];

// ====== ######### ======

// type Product = {
// 	id: number;
// 	name: string;
// 	description: string;
// 	price: number;
// 	images: string[];
// };

// let products: Product[] = [
// 	{
// 		id: 1,
// 		name: 'ali',
// 		description: 'lorem',
// 		price: 333,
// 		images: ['link1', 'link2'],
// 	},
// ];

// ====== ######### ======

// type Order = {
// 	id: number;
// 	name: string;
// 	totalPrice: number;
// 	location: string;
// 	status: string;
// 	items: OrderItem[];
// };
// type OrderItem = {
// 	id: number;
// 	name: string;
// 	price: number;
// 	quantity: number;
// };

// Homework

// 1 - masala

// type User = {
// 	id: number;
// 	name: string;
// 	age: number;
// 	location: string;
// 	isStudent: boolean;
// };

// let users: User = {
// 	id: 1,
// 	name: 'alisher',
// 	age: 23,
// 	location: 'Buxara',
// 	isStudent: false,
// };

// 2 - masala

// type Car = {
// 	name: string;
// 	year: number;
// 	speed: number;
// 	color: string;
// 	price: number;
// };

// let cars: Car = {
// 	name: 'onex',
// 	year: 2023,
// 	speed: 220,
// 	color: 'orange',
// 	price: 130000000,
// };

// 3 - masala

// type Product = {
// 	title: string;
// 	description: string;
// 	price: number;
// 	imageUrl: string[];
// 	sizes: 'MD' | 'LG' | 'XS' | 'XL';
// 	isActive: boolean;
// };

// let product: Product = {
// 	title: 'camera',
// 	description: 'lorem Ipsum',
// 	price: 3400,
// 	imageUrl: ['imgUrl'],
// 	sizes: 'LG',
// 	isActive: true,
// };

// 4 - masala

// type Order = {
// 	userName: string;
// 	phone: string;
// 	location: string;
// 	products: string[];
// 	totalPrice: number;
// 	status: 'open' | 'Progress' | 'compleded';
// };

// let orders: Order = {
// 	userName: 'Ahmad',
// 	phone: '+998917689776',
// 	location: 'new york',
// 	products: ['camera', 'phone'],
// 	totalPrice: 34222,
// 	status: 'compleded',
// };

// 5 - masala

// type SmartPhone = {
// 	name: string;
// 	description: string;
// 	price: number;
// 	model: string;
// 	isNan: boolean;
// 	images: string[];
// };
// let samrtPhones: SmartPhone = {
// 	name: 'redmi',
// 	description: 'good',
// 	price: 3442,
// 	model: 'note 12pro',
// 	isNan: true,
// 	images: ['img1', 'img2'],
// };

// ================ ************* ==============

// 1 - masala

// let numbers: number[] = [2, 4, 5, 6, 9];

// 2 - masala

// type TypeArrays = [number, string, string, number];

// let sana: TypeArrays = [5, 'hello', 'World', 6];

// 3 - masala

// type TypeArrays = [boolean, string, boolean, boolean];

// let date: TypeArrays = [true, 'salom', false, false];

// 4 - masala

// type TypeArrays = [string, object, number, string];

// let typeArray: TypeArrays = ['hello', {}, 2, 'salom'];

// 5 - masala

// type TypeArrays = [number, number[], boolean, string];

// let type: TypeArrays = [21, [3, 4, 5], true, 'hello'];

// 6 - masala

// type TypeArrays = [number, number[], boolean, [number, boolean, string[]]];

// let type: TypeArrays = [21, [4, 56, 23], true, [7, false, ['hello', 'world']]];

// ================ ************* ==============

// 1 - masala

// type TypeArray = {
// 	eventName: string;
// 	at: string;
// 	userId: string;
// 	device: {
// 		platform: string;
// 		os: string;
// 		brauser: string;
// 		ip: string;
// 	};
// 	payload: {
// 		vacansy: string;
// 		source: string;
// 		abTest: {
// 			name: string;
// 			variant: string;
// 		};
// 	};
// };

// const eventObj: TypeArray = {
// 	eventName: 'job',
// 	at: '3244353jjnu',
// 	userId: 'canday-33',
// 	device: { platform: 'web', os: 'mac', brauser: 'chrome', ip: '3214' },
// 	payload: {
// 		vacansy: 'hgjk',
// 		source: 'landing',
// 		abTest: { name: 'aply', variant: 'a' },
// 	},
// };

// 2 - masala

// type Skill = {
// 	name: string;
// 	level: number;
// };

// type Portfolio = {
// 	github: string;
// 	website: string | null;
// };

// type DesiredSalary = {
// 	type: 'fixed' | 'negotiable';
// 	amount?: number;
// };

// type Candidate = {
// 	id: string;
// 	fullName: string;
// 	phone: string;
// 	city: string;
// 	portfolio: Portfolio;
// 	skills: Skill[];
// 	desiredSalary: DesiredSalary;
// };

// type HistoryItem = {
// 	at: string;
// 	to: 'sent' | 'review' | 'interview' | 'rejected' | 'accepted';
// 	by: string;
// 	note?: string;
// };

// type Application = {
// 	id: string;
// 	vacancyId: string;
// 	candidate: Candidate;
// 	createdAt: string;
// 	status: 'sent' | 'review' | 'interview' | 'rejected' | 'accepted';
// 	history: HistoryItem[];
// };

// const applicationObj: Application = {
// 	id: 'app_300',
// 	vacancyId: 'v_901',
// 	candidate: {
// 		id: 'cand_55',
// 		fullName: 'Dilshod Karimov',
// 		phone: '+998933334455',
// 		city: 'Buxoro',
// 		portfolio: {
// 			github: 'https://github.com/dilshod',
// 			website: null,
// 		},
// 		skills: [
// 			{ name: 'React', level: 4 },
// 			{ name: 'TypeScript', level: 3 },
// 			{ name: 'CSS', level: 5 },
// 		],
// 		desiredSalary: {
// 			type: 'negotiable',
// 		},
// 	},
// 	createdAt: '2026-01-09T15:40:00Z',
// 	status: 'interview',
// 	history: [
// 		{
// 			at: '2026-01-09T15:40:00Z',
// 			to: 'sent',
// 			by: 'system',
// 		},
// 		{
// 			at: '2026-01-09T16:10:00Z',
// 			to: 'review',
// 			by: 'u_admin_1',
// 		},
// 		{
// 			at: '2026-01-10T08:00:00Z',
// 			to: 'interview',
// 			by: 'u_hr_2',
// 			note: 'Zoom link yuborildi',
// 		},
// 	],
// };

// 3 - masala

// type CompanyContacts = {
// 	phone: string;
// 	telegram: string;
// };

// type CompanyLocation = {
// 	city: string;
// 	addressLine: string;
// };

// type Company = {
// 	id: string;
// 	name: string;
// 	verified: boolean;
// 	contacts: CompanyContacts;
// 	location: CompanyLocation;
// };

// type Salary = {
// 	type: 'fixed' | 'range' | 'negotiable';
// 	from?: number;
// 	to?: number;
// 	currency?: 'USD' | 'UZS';
// };

// type EmploymentType = 'full_time' | 'part_time' | 'contract' | 'internship';

// type ExperienceLevel = 'junior' | 'mid' | 'senior';

// type VacancyStatus = 'active' | 'paused' | 'closed';

// type VacancyMeta = {
// 	views: number;
// 	applyClicks: number;
// 	source: 'telegram' | 'website' | 'linkedin';
// };

// type Vacancy = {
// 	id: string;
// 	company: Company;
// 	title: string;
// 	description: string;
// 	employment: EmploymentType;
// 	experience: ExperienceLevel;
// 	salary: Salary;
// 	skills: string[];
// 	tags: string[];
// 	createdAt: string;
// 	status: VacancyStatus;
// 	meta: VacancyMeta;
// };
// ======
// const vacancyObj: Vacancy = {
// 	id: 'v_901',
// 	company: {
// 		id: 'c_77',
// 		name: 'ISH LLC',
// 		verified: true,
// 		contacts: {
// 			phone: '+998990001122',
// 			telegram: '@ish_support',
// 		},
// 		location: {
// 			city: 'Buxoro',
// 			addressLine: 'Kitoblar olami, 2-qavat',
// 		},
// 	},
// 	title: 'Front-end Developer (React)',
// 	description: 'Admin panel va job marketplace ustida ishlash.',
// 	employment: 'full_time',
// 	experience: 'mid',
// 	salary: {
// 		type: 'fixed',
// 		from: 800,
// 		to: 1300,
// 		currency: 'USD',
// 	},
// 	skills: ['React', 'TypeScript', 'REST', 'Git'],
// 	tags: ['remote_possible', 'urgent'],
// 	createdAt: '2026-01-08T10:00:00Z',
// 	status: 'active',
// 	meta: {
// 		views: 183,
// 		applyClicks: 29,
// 		source: 'telegram',
// 	},
// };
