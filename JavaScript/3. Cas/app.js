// var
// Redeklarisanje (ponovno deklarisanje neke promenljive) je dozvoljeno izvrsiti bilo gde u programu

var x = 14;
console.log(x);
console.log("neki string");
var x = 16;
console.log(x);

// let
// Redeklaracija (ponovno deklarisanje neke promenljive) za let nije dozvoljena, ako govorimo
//  o istom prostoru na kom je izvrsena prva deklaracija.

let y = 10;
console.log(y);
// let y = 19; Nece biti dozvoljeno!

// Block scope(prostor) nam obezbedjuju let i const keywords:

{
  //console.log(y);  Nece izvrsiti prikazivanje y jer u block scope nije poznata prethodna deklaracija promenljive.
  let y = 19;
  console.log(y);
}

console.log(y);

// let nam ne dozvoljana redeklaraciju (ako smo u istom prostoru),
// ali je moguce izvrsiti reinicijalizaciju (dodeljivanje druge vrednosti).

let z = 10;
z = 12;

// const
// Promenljive koje su definisane pomocu const
// NE MOGU BITI NI REDEKLARISANE NI REINICIJALIZOVANE.

const w = 16;
// const w = 14; Ne moze se redeklarisati
console.log(w);
// w = 20;    Nije moguce izvristi reinicijalizaciju
console.log(w);

// Karakteristike koje vaze za let kod block scope_a vaze i za promenljive definisane putem const.

// let dozvoljava sledece:
let prom;
prom = 40;

// const je striktna i kod nje se mora odjednom izvrsiti deklaracija i inicijalizacija.
const prom2 = 50;

// const ne dozvoljava reinicijalizaciju (ponovno dodeljivanje vrednosti).
// Medjutim mozemo izvrsiti neke izmene kada se radi o nizu ili objektu
// (izmene u smislu da se promeni vrednost nekog elementa, da se doda element...).
