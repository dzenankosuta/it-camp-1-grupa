/*There are array of objects with all products that someone bought. In product object we got name,
price per unit, and amount of units. Your job is to loop throught array,
 and make new array of objects with two key-value pairs name and total price for that product.
After you did the job with new array, you need to sum all prices of every product and return total sum value,
 and add a FIXED 320 shipping costs.
After all of that you should print in console following statement:
'You got ${num of products} in cart, shipping cost is ${shipping cost}, your total is ${total}.'*/

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
];
const Funkcija = (arr) => {
  const numOfProducts = arr.length;
  //  console.log(numOfProducts);

  const noviNiz = arr.map((el) => {
    return {
      name: el.name,
      totalPrice: el.price * el.amount,
    };
  });
  //return noviNiz;
  //console.log(noviNiz);
  const suma = noviNiz.map((element) => {
    return element.totalPrice;
  });
  //console.log(suma);
  const ukupno = suma.reduce((a, b) => {
    return a + b;
  }, 320);

  //console.log(ukupno);
  const shippingCost = 320;
  return `You got ${numOfProducts} in cart, shipping cost is ${shippingCost}, your total is ${ukupno}.`;
};
console.log(Funkcija(CART_DATA));
