enum Size {
	MD = 'md',
	LG = 'lg',
	XL = 'xl',
}

interface IProduct {
	id: number;
	title: string;
	description: string;
	price: number;
	size: Size;
}

const product1: IProduct = {
	id: 1,
	title: 'T-Shirt',
	description: 'Cotton T-shirt',
	price: 20,
	size: Size.MD,
};

interface Category {
	id: number;
	name: string;
	description: string;
	products: string;
}

// ======= { Shop } =======

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
class Shop implements Shop {
	name = 'Shop';

	products: Product[] = [
		{ id: 1, title: 'iPhone', categoryId: 1, price: 1234 },
		{ id: 2, title: 'Samsung', categoryId: 1, price: 123 },
		{ id: 3, title: 'MacBook', categoryId: 2, price: 1234 },
	];

	categories: Category[] = [
		// { id: 1, name: 'Telefonlar' },
		// { id: 2, name: 'Noutbuklar' },
	];

	addProduct(product: Product): void {
		this.products.push(product);
	}

	deleteProduct(id: number): void {
		this.products = this.products.filter(p => p.id !== id);
	}

	updateProduct(product: Product): void {
		const index = this.products.findIndex(p => p.id === product.id);
		if (index !== -1) {
			this.products[index] = product;
		}
	}

	getProductById(id: number): Product | undefined {
		return this.products.find(p => p.id === id);
	}

	searchProductByTitle(title: string): Product[] {
		return this.products.filter(p => p.title.toLowerCase().includes(title.toLowerCase()));
	}

	// ====== CATEGORY =======

	addCategory(category: Category): void {
		this.categories.push(category);
	}

	deleteCategory(id: number): void {
		this.categories = this.categories.filter(c => c.id !== id);
	}

	updateCategory(category: Category): void {
		const index = this.categories.findIndex(c => c.id === category.id);
		if (index !== -1) {
			this.categories[index] = category;
		}
	}

	getCategoryById(id: number): Category | undefined {
		return this.categories.find(c => c.id === id);
	}

	searchCategoryByName(name: string): Category[] {
		return this.categories.filter(c => c.name.toLowerCase().includes(name.toLowerCase()));
	}
}
