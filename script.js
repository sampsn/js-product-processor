const startProcessing = () => {
	const products = [
		{
			name: "Laptop",
			category: "Electronics",
			price: 1000,
			quantity: 5,
			inStock: true,
		},
		{
			name: "Phone",
			category: "Electronics",
			price: 500,
			quantity: 0,
			inStock: false,
		},
		{
			name: "Shirt",
			category: "Apparel",
			price: 20,
			quantity: 100,
			inStock: true,
		},
		{
			name: "Jeans",
			category: "Apparel",
			price: 40,
			quantity: 50,
			inStock: true,
		},
		{
			name: "TV",
			category: "Electronics",
			price: 1500,
			quantity: 3,
			inStock: true,
		},
		{
			name: "Hat",
			category: "Apparel",
			price: 15,
			quantity: 200,
			inStock: true,
		},
	];

	const discountCategory = "Apparel";
	const discountRate = 0.1; // 10% discount
	console.log(processProducts(products, discountCategory, discountRate));
};

const processProducts = (products, discountCategory, discountRate) => {
	// Your code goes here
	let processedProducts = [];
	for (i in products) {
		if (products[i].inStock === false) {
			products.splice(i, 1);
		}
		if (products[i].category === discountCategory) {
			products[i].price = products[i].price * (1 - discountRate);
		}
		products[i].total = products[i].price * products[i].quantity;
		const productObject = {
			name: products[i].name,
			category: products[i].category,
			total: products[i].total,
		};
		processedProducts.push(productObject);
	}
	return processedProducts;
};
