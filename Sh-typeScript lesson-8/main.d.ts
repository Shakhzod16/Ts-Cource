interface IUserProfile {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}
declare const userProfile: IUserProfile;
type Author = {
    name: string;
    email: string;
};
interface IBlogPost {
    id: number;
    title: string;
    content: string;
    tags: [string, string, string];
    author: Author;
}
declare const blogPost: IBlogPost;
interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    isOnStock: boolean;
}
declare const product: IProduct;
type Items = {
    productId: number;
    quantity: number;
    price: number;
};
interface IOrder {
    orderId: string;
    customerId: number;
    items: Items[];
    totalAmount: number;
    status: string;
}
declare const order: IOrder;
type Attentdees = {
    name: string;
    email: string;
};
interface INewEvent {
    id: string;
    title: string;
    date: string;
    location: string;
    attentdees: Attentdees[];
}
declare const newEvent: INewEvent;
type Forecast = {
    day: string;
    temperature: string;
    condition: string;
};
interface IWeatherDate {
    city: string;
    tempperature: number;
    condition: string;
    humidity: number;
    windSpeed: number;
    forecast: Forecast[];
}
declare const weatherDate: IWeatherDate;
interface IVehicle {
    id: string;
    type: string;
    make: string;
    model: string;
    year: number;
    features: [string, string, string];
}
declare const vehicle: IVehicle;
type Sender = {
    id: number;
    name: string;
};
type Receiver = {
    id: number;
    name: string;
};
interface IChatMessage {
    id: string;
    sender: Sender;
    receiver: Receiver;
    message: string;
    isRead: boolean;
}
declare const chatMessage: IChatMessage;
type Ratings = {
    IMGB: number;
    RottenTomasoes: number;
};
interface IMovie {
    id: number;
    title: string;
    director: string;
    genres: [string, string];
    ratings: Ratings;
}
declare const movie: IMovie;
type Itemss = {
    productId: number;
    name: string;
    quantity: number;
    price: number;
};
interface ICard {
    id: string;
    userId: number;
    items: Itemss[];
    totalPrice: number;
    isCheckoutCompleted: boolean;
}
declare const card: ICard;
//# sourceMappingURL=main.d.ts.map