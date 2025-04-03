let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
};
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
        console.log(fruit)
    });
}
console.log(displayGroceries())

const cloneGroceries = () => {
    let user = client;
    client = 'Betty';
    let shopping = groceries;
    groceries.totalPrice = '35$';
    groceries.paid = false;
     // those values chanec 'cause both variables point to the exact same object in memory
}
cloneGroceries();