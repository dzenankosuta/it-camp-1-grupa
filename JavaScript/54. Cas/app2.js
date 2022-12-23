// Promise je JavaScript objekat koji predstavlja mesto za rezultate asinhrone funkcije sve dok traje izvrsavanje asinhrone operacije.

const imatiCas = new Promise((resolve, reject) => {
  const response = 200;
  if (response === 200) {
    resolve();
  } else {
    reject();
  }
});

imatiCas
  .then(() => console.log("Odrzana je rec. Imali smo cas!"))
  .catch(() => console.log("Nismo imali smo cas!"));
//   .finally(() => console.log("Poruka koja se ispisuje u svakom slucaju."));

//   then() se izvrsava u slucaju da se desi resolve().
//   catch() se izvrsava u slucaju da se desi reject().
//   finally() se izvrsava u svakom slucaju.

// Ispisati poruku da li je dobijen niz ili nije.
// Nakon toga ispisati sve parne brojeve niza.
const isArray = new Promise((resolve, reject) => {
  response = 200;
  if (response === 200) {
    resolve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 21, 22, 14]);
  } else {
    reject("Nema niza.");
  }
});

// chain efekat.
isArray
  .then((arg1) => {
    console.log("Dobili smo niz.");
    const parni = arg1.filter((el) => el % 2 === 0);
    return parni;
  })
  .then((parniElementi) => console.log(parniElementi))
  .catch((err) => console.log(err));

// Domaci zadatak.
// Napraviti promise koji proverava da li je neki objekat ispunio uslova da je njegov property godine veci od 17 ili nije.
// U slucaju da je osoba punoletna then() funkcija vraca poruku "Vi ste punoletni".
// U slucaju da osoba nije punoletna catch() vraca broj godina osobe.
