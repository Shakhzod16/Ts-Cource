"use strict";
// interface IUser {
// 	id: number;
// 	name: string;
// 	isStudent: boolean;
const userProfile = {
    id: 34,
    name: 'Jonibek',
    email: 'jonibek@gmail.com',
    isActive: true,
};
const blogPost = {
    id: 1,
    title: 'Lorem Ipsum',
    content: 'typescript and javascript',
    tags: ['html', 'scss', 'Python'],
    author: {
        name: 'Jone',
        email: 'jone@gmail.com',
    },
};
const product = {
    id: 1,
    name: 'Iphone',
    description: 'Lorem Ipsum',
    price: 1234,
    stock: 24,
    isOnStock: false,
};
const order = {
    orderId: 'qwerty',
    customerId: 2,
    items: [
        { productId: 2, quantity: 2, price: 12345 },
        { productId: 2, quantity: 2, price: 12345 },
    ],
    totalAmount: 1234,
    status: 'Junior',
};
const newEvent = {
    id: 'qwert1',
    title: 'Lorem Ipsum',
    date: '2025-07-23',
    location: 'Buxara',
    attentdees: [
        { name: 'ali', email: 'ali@gmail.com' },
        { name: 'ali', email: 'ali@gmail.com' },
    ],
};
const weatherDate = {
    city: 'Buxara',
    tempperature: 1234,
    condition: 'Sunny',
    humidity: 50,
    windSpeed: 10,
    forecast: [
        { day: 'Monday', temperature: '35', condition: 'Sunny' },
        { day: 'Monday', temperature: '35', condition: 'Sunny' },
    ],
};
const vehicle = {
    id: 'VH1234',
    type: 'Car',
    make: 'Captiva',
    model: 'JM',
    year: 2023,
    features: ['Air ', '360 Camera', 'Comfort'],
};
const chatMessage = {
    id: 'M123',
    sender: { id: 1, name: 'ali' },
    receiver: { id: 2, name: 'Vali' },
    message: 'Hello World',
    isRead: true,
};
const movie = {
    id: 2,
    title: 'Lorem Ipsum',
    director: 'Jone',
    genres: ['qwerty', 'yuiopp'],
    ratings: {
        IMGB: 8.9,
        RottenTomasoes: 24,
    },
};
const card = {
    id: 'qwerty1',
    userId: 1,
    items: [
        { productId: 1234, name: 'Iphone', quantity: 1, price: 1234 },
        { productId: 1234, name: 'Iphone', quantity: 1, price: 1234 },
    ],
    totalPrice: 234,
    isCheckoutCompleted: true,
};
//# sourceMappingURL=main.js.map