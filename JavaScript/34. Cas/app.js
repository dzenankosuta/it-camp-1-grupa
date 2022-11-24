// reduce() metoda  vrsi takodje iteraciju kroz svaki element, s tim sto
// ona, kao razultat daje jedan broj.
// Najcesca primena reduce() metode je kada zelimo sumu elemenata niza.

const korpa = [1600, 900, 1400, 220, 1490];

// U slucaju da kupujemo direktno u radnji.
const zbir = korpa.reduce(
  (previousValue, currentValue) => previousValue + currentValue
);
console.log(zbir);

// U slucaju da kupujemo online i placa se postarina od 500rsd
// reduce() metoda dozvoljava initial value, i ona se upisuje nakon funkcije.
// Zapravo, kao drugi (opcioni) argument reduce() metode.
// niz.reduce(function() {}, initial value)
const onlineZbir = korpa.reduce((prev, curr) => prev + curr, 500);
console.log(onlineZbir);

const godine = [15, 14, 19, 18, 17, 18, 20, 13];
// Napraviti funkciju koja vraca zbir godina koje su vece od 17.

const sumAdult = (arr) => {
  const punoletni = arr.filter((element) => {
    return element > 17;
  });
  const zbir = punoletni.reduce((prv, crv) => {
    return prv + crv;
  });
  return zbir;
};
console.log(sumAdult(godine));

function sumAdult2nd(arr) {
  const zbir = arr.reduce((prev, curr) => {
    if (curr >= 18) {
      return prev + curr;
    } else {
      return prev;
    }
  }, 0);
  return zbir;
}

console.log(sumAdult2nd(godine));

// Domaci zadatak:
// 1. Zadatak
// Sabrati sve godine tj. elemente niza a nakon toga podeliti sa brojem elemenata.
// tj. vratiti prosecnu starost godina.

// 2. Zadatak
// Write a function that converts an array of values from miles to kilometres using the map method.
// In the end, add the kilometres up in a new variable called "totalDistanceInKilometers" and
// return this variable.
