console.log(saberiDvaBroja(4, 6));

function saberiDvaBroja(br1, br2) {
  return br1 + br2;
}

// console.log(saberiTriBroja(4, 6, 2));

const saberiTriBroja = (br1, br2, br3) => br1 + br2 + br3;

// Hoisting kod funkcija vazi ako se radi o funkcijama definisanim preko function keyword, dok kod arrow funcija ne vazi (nije moguce pozvati funkciju pre definisanja iste).

// Da li je neka vrednost TRUTHY ili FALSY
console.log(!!"Muhamed");
// console.log(Boolean("Muhamed")); alternativa

console.log(!!(5 + "36")); //true,
console.log(!!-1); // true,
console.log(!!(63 - 63)); // false

const niz = [1, 2, 3, 4, 5, 6, 7];
