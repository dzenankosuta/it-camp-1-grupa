let niz = [
  { name: "televizor", pricePerUnit: 500, amount: 5 },
  { name: "telefon", pricePerUnit: 650, amount: 3 },
  { name: "tablet", pricePerUnit: 320, amount: 6 },
  { name: "laptop", pricePerUnit: 800, amount: 2 },
];

const niz1 = function (arr) {
  const FIXED = 320;
  const newArr = arr.map((element) => {
    return {
      name: element.name,
      totalPrice: element.pricePerUnit * element.amount,
    };
  });
  let newArr1 = newArr.map((element) => {
    return element.totalPrice;
  });
  let suma = newArr1.reduce((prev, curr) => {
    return prev + curr;
  }, FIXED);

  return `You got ${arr.length} in cart, shipping cost is ${FIXED}, your total is ${suma}`;
};

console.log(niz1(niz));
