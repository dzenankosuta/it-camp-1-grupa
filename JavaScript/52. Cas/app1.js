// console.log(myFunc(1, 3));

// Ne vazi hoisting za promenljive koje su funkcije. (Definisane na bilo koji nacin)
// var myFunc = function (a, b) {
//   return a * b;
// };

// function myFunc() {
//   let broj = 4;
//   let predmet = "stolice";
//   return `U prostoru imamo ${broj} ${predmet}.`;
// }

// console.log(myFunc());
// Poznata je cinjenica da kada se izvrsi funkcija, sve njene lokalne promenljive pokupi "garbage" kolektor i one prestaju da postoje u memoriji.
// To nije slucaj ako postoji funkcija koja zahteva koriscenje promenljivih iz domena druge funkcije.
// To se najcesce postize ugradjivanjem funkcije unutar druge funkcije.

function myFunc() {
  let broj = 4;
  let predmet = "stolice";
  function mySecondFunc(arg) {
    console.log(arg + broj);
  }
  mySecondFunc(10);
  return `To je bio primer Closure u JavaScript_u.`;
}

console.log(myFunc());

// Closure je funkcija koja zahteva koriscenje promenljivih iz domena druge funkcije.

function mojaFunkcija() {
  console.log("Pocetak glavne funkcije.");
  function mojaSporednaFunkcija() {
    console.log("Ovo je radnja sporedne funkcije");
    return 5;
  }
  return mojaSporednaFunkcija;
}

console.log(mojaFunkcija()());
