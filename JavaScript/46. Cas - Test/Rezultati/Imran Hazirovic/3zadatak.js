// 3.(20) Shopping Cart.
// There are array of objects with all products that someone bought.In product object we got name, price
//  per unit, and amount of units.Your job is to loop throught array, and make new array of objects with
//  two key - value pairs name and total price for that product.After you did the job with new array, you
//   need to sum all prices of every product and return total sum value, and add a FIXED 320 shipping costs.
// After all of that you should print in console following statement:'You got ${num of products} in cart,
// shipping cost is ${shipping cost}, your total is ${total}.'

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

function shoppingCart(arr) {
  const shippingCost = 320;
  const num_products = arr.filter(function (amount) {
    return +amount.amount;
  });
  let num_products1 = num_products.map(function (amount) {
    return +amount.amount;
  });
  let num_products2 = num_products1.reduce((prev, curr) => prev + curr);
  const product = arr.filter(function (price) {
    return +price.price;
  });
  const total = shippingCost + product * num_products2;
  return `You got ${num_products2} articles in cart, shipping cost is ${shippingCost}. Your total is ${total}`;
}

console.log(shoppingCart(CART_DATA));
