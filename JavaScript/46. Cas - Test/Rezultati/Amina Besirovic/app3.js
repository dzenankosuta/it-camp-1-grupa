// 3.	(20) Shopping Cart.
// There are array of objects with all products that someone bought. 
// In product object we got name, price per unit, and amount of units.
//  Your job is to loop throught array, and make new array of objects with two key-value 
// pairs name and total price for that product.
// After you did the job with new array, you need to sum all prices of every product
//  and return total sum value, and add a FIXED 320 shipping costs.
// After all of that you should print in console following statement:
// 'You got ${num of products} in cart, shipping cost is ${shipping cost}, your total is ${total}.'

const CART_DATA = [
    {
      id: 1,
      name: "Hawai Shirt",
      price: 30,
      amount: 2,
      categorty: "summer",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Adidas Slippers",
      price: 35,
      amount: 1,
      categorty: "summer",
      rating: 4.5,
    },
    {
      id: 6,
      name: "White T-Shirt",
      price: 15,
      amount: 4,
      categorty: "summer",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Summer hat",
      price: 7.5,
      amount: 3,
      categorty: "summer",
      rating: 40,
    },
  ];

const newArray = CART_DATA.map(el => el.amount).reduce((a, b) => a + b);
const newArray2 = CART_DATA.map(el => { return { name: el.name, total: el.price * el.amount }});
const nesto = newArray2.map(el => el.total);
const shippingCosts = 320;
const suma = nesto.reduce((a, b) => a + b, shippingCosts);

console.log(`You got ${newArray2} in cart,shipping cost is ${shippingCosts}, your total is ${suma}`);
