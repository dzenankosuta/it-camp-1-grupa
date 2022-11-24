// Domaci:
// 1.
// Napraviti funkciju koja izracunava obim kruga, gde se
//  poluprecnik unosi od strane korisnika.

// 2.
// Napraviti funkciju koja izracunava povrsinu kruga, gde
//  poluprecnik predstavlja argument funkcije.

// 3.
// Napraviti funkciju za pretvaranje stepena u radijane.

function firstTask() {
  let r = +prompt("Unesite poluprecnik kruga: ");
  let obim = Number((2 * r * Math.PI).toFixed(2));
  if (isNaN(r)) {
    return `Obim mora biti broj.`;
  } else {
    return `Obim kruga je: ${obim}`;
  }
}
console.log(firstTask());

const secondTask = function (r) {
  let povrsina = +(r ** 2 * Math.PI).toFixed(2);
  return `Povrsina kruga je ${povrsina}`;
};

console.log(secondTask(5));

const thirdTask = (stepeni) => {
  let radijani = stepeni * (Math.PI / 180);
  return radijani;
};

console.log(thirdTask(90));
