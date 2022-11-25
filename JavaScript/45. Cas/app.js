// Napraviti funkciju koja nam vraca novi niz koji nema duplikata:

const niz = [12, 1, 3, 2, 3, 4, 6, 4];
const eraseDuplicate = function (arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
console.log(eraseDuplicate(niz));

// ...spread operator nam sluzi za pravljenje kopije niza ili objekta, kao i spajanje vise nizova (objekata).

const niz1 = ["sto", "stolica", "tabla", "marker"];
const niz2 = [...niz1];
console.log(niz2);
niz2[1] = "fotelja";
console.log(niz2);
console.log(niz1);
// Spajanje vise nizova
const niz3 = [...niz, ...niz1];
console.log(niz3);
const niz4 = [15, ...niz2, 150];
console.log(niz4);

const obj = {
  ime: "Muhamed",
  prezime: "Krkmisevic",
  starost: 17,
};
const newObj = {
  ...obj,
  bojaKose: "crna",
  kovrdzav: false,
};
console.log(newObj);

// Napraviti funkciju koja vraca novi niz, gde je svaki element objekat sa vrednostima title i budget.
const movies = [
  { title: "Inception", rating: 8, budget: "230M" },
  { title: "Interstelar", rating: 5, budget: "200M" },
  { title: "Godfather", rating: 9, budget: "280M" },
  { title: "Home Alone", rating: 4, budget: "300M" },
  { title: "Bad boys", rating: 8, budget: "180M" },
];
function just2(arr) {
  const newArr = arr.map(function (element) {
    return {
      title: element.title,
      budget: element.budget,
    };
  });
  return newArr;
}
console.log(just2(movies));
