declare enum Size {
    MD = "md",
    LG = "lg",
    XL = "xl"
}
interface IProduct {
    id: number;
    title: string;
    description: string;
    price: number;
    size: Size;
}
declare const product1: IProduct;
interface Category {
    id: number;
    name: string;
    description: string;
    products: string;
}
interface Category {
    id: number;
    name: string;
}
interface Product {
    id: number;
    title: string;
    categoryId: number;
    price: number;
}
interface Shop {
    name: string;
    products: Product[];
    categories: Category[];
    addProduct(product: Product): void;
    deleteProduct(id: number): void;
    updateProduct(product: Product): void;
    getProductById(id: number): Product | undefined;
    searchProductByTitle(title: string): Product[];
    addCategory(category: Category): void;
    deleteCategory(id: number): void;
    updateCategory(category: Category): void;
    getCategoryById(id: number): Category | undefined;
    searchCategoryByName(name: string): Category[];
}
declare class Shop implements Shop {
    name: string;
    products: Product[];
    categories: Category[];
}
//# sourceMappingURL=main.d.ts.map