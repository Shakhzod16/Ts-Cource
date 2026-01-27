// import { addTwoNumbers, PI } from './index';
// ======= { NameSpace } =======

// namespace MyMath {
// 	export const PI = 3.14;
// 	export const E = 2.71;

// 	export function addTwoNumbers(a: number, b: number): number {
// 		return a + b;
// 	}
// 	export class Math {}

// 	export type MathType = {};
// }

// MyMath.addTwoNumbers(3, 4);
// const obj: MyMath.MathType;

// ==================================

// import print, { PI, add } from ".index"

// addTwoNumbers(2,3)

// ======== { Homework } =========
// ======== { 1 - masala } =========

type Price = {
	amount: number;
	currency: string;
};
type Rating = {
	avg: number;
	count: number;
};

interface IProduct {
	id: string;
	title: string;
	price: Price;
	stock: number;
	tags: [string, string];
	rating: Rating;
}

const product: IProduct = {
	id: 'p_1234',
	title: 'Lorem Ipsum',
	price: { amount: 122, currency: 'USB' },
	stock: 2345,
	tags: ['qwerty', 'poiuyt'],
	rating: { avg: 123, count: 1234 },
};

// ======== { 2 - masala } =========

type Geo = {
	lat: number;
	lng: number;
};

interface IAddress {
	id: string;
	type: string;
	city: string;
	street: string;
	geo: Geo;
	notes?: undefined;
}

const address = {
	id: 'qwerty',
	type: 'home',
	city: 'London',
	street: 'chilonzor',
	geo: { lat: 1234, lng: 2234 },
};

// ======== { 3 - masala } =========

type CreatedBy = {
	id: string;
	name: string;
};
interface IMessage {
	at: string;
	by: string;
	text: string;
}

interface ITicket {
	id: string;
	subject: string;
	priority: string;
	status: string;
	createdBy: CreatedBy;
	messages: IMessage[];
}

const ticket: ITicket = {
	id: '12qwerty',
	subject: 'Lorem Ipsum',
	priority: 'qwerty',
	status: 'open',
	createdBy: { id: 'qwerty', name: 'qwerty' },
	messages: [
		{ at: 'qwertyuioijhgvc', by: 'user', text: 'qwertyui' },
		{ at: 'qwertyuioijhgvc', by: 'user', text: 'qwertyui' },
	],
};

// ======== { 4 - masala } =========

type Page = {
	path: string;
	referrer: null;
};
type Device = {
	os: string;
	version: string;
};

interface IEvent {
	id: string;
	name: string;
	at: number;
	page: Page;
	device: Device;
}

const events: IEvent = {
	id: 'qwerty',
	name: 'Lorem Ipsum',
	at: 12345678,
	page: { path: 'qwerty', referrer: null },
	device: { os: 'Samsung', version: 'qwerty' },
};

// ======== { 5 - masala } =========

type ResourceKind = 'video' | 'article' | 'book' | 'other';

interface IResource {
	kind: ResourceKind;
	url: string;
	pages?: number;
}

interface IQuestion {
	id: string;
	prompt: string;
	options: string[];
	answerIndex: number;
}

interface IQuiz {
	passingScore: number;
	questions: IQuestion[];
}

interface ILesson {
	id: string;
	title: string;
	durationSec: number;
	resources: IResource[];
	quiz: IQuiz;
}

const lesson: ILesson = {
	id: '1234',
	title: 'Union',
	durationSec: 1234,
	resources: [
		{ kind: 'video', url: '/video-url' },
		{ kind: 'book', url: '/book-url', pages: 234 },
	],
	quiz: {
		passingScore: 70,
		questions: [{ id: 'q1', prompt: 'Union nima?', options: ['A', 'B', 'C'], answerIndex: 0 }],
	},
};
