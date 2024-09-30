// The Shopping Cart Totalizer:
//     You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities


function calculateTotal(products) {
    let total = 0;

    products.forEach(product => {
        total += product.price * product.quantity;
    });

    return total;
}


const cartItems = [
    { name: "Product 1", price: 10.99, quantity: 2 },
    { name: "Product 2", price: 5.49, quantity: 3 },
    { name: "Product 3", price: 20.00, quantity: 1 }
];

const totalCost = calculateTotal(cartItems);
console.log(`Total cost: $${totalCost.toFixed(2)}`);
