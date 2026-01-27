"use strict";
var Size;
(function (Size) {
    Size["MD"] = "md";
    Size["LG"] = "lg";
    Size["XL"] = "xl";
})(Size || (Size = {}));
const product1 = {
    id: 1,
    title: 'T-Shirt',
    description: 'Cotton T-shirt',
    price: 20,
    size: Size.MD,
};
class Shop {
    constructor() {
        this.name = 'Shop';
        this.products = [
            { id: 1, title: 'iPhone', categoryId: 1, price: 1234 },
            { id: 2, title: 'Samsung', categoryId: 1, price: 123 },
            { id: 3, title: 'MacBook', categoryId: 2, price: 1234 },
        ];
        this.categories = [
        // { id: 1, name: 'Telefonlar' },
        // { id: 2, name: 'Noutbuklar' },
        ];
    }
    addProduct(product) {
        this.products.push(product);
    }
    deleteProduct(id) {
        this.products = this.products.filter(p => p.id !== id);
    }
    updateProduct(product) {
        const index = this.products.findIndex(p => p.id === product.id);
        if (index !== -1) {
            this.products[index] = product;
        }
    }
    getProductById(id) {
        return this.products.find(p => p.id === id);
    }
    searchProductByTitle(title) {
        return this.products.filter(p => p.title.toLowerCase().includes(title.toLowerCase()));
    }
    // ====== CATEGORY =======
    addCategory(category) {
        this.categories.push(category);
    }
    deleteCategory(id) {
        this.categories = this.categories.filter(c => c.id !== id);
    }
    updateCategory(category) {
        const index = this.categories.findIndex(c => c.id === category.id);
        if (index !== -1) {
            this.categories[index] = category;
        }
    }
    getCategoryById(id) {
        return this.categories.find(c => c.id === id);
    }
    searchCategoryByName(name) {
        return this.categories.filter(c => c.name.toLowerCase().includes(name.toLowerCase()));
    }
}
//# sourceMappingURL=main.js.map