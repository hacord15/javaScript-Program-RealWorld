// The Asynchronous Shopper:
//    Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.


// The Asynchronous Shopper
async function placeOrder() {
    // Generate a unique order ID
    const orderID = Math.floor(Math.random() * 90000) + 10000;

    return new Promise((resolve) => {
        // Fix: Capitalize 'Math' here
        const delay = Math.floor(Math.random() * 5000) + 1000;

        // Simulate the delay with setTimeout
        setTimeout(() => {
            // Optional: Capitalize 'Order' for consistency
            resolve(`Order ${orderID} has been placed successfully`);
        }, delay);
    });
}

// Example usage
placeOrder().then((confirmation) => {
    console.log(confirmation); // Logs the order confirmation message with a unique order ID after a random delay
});
