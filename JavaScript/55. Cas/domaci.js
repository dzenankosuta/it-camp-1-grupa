// Domaci zadatak.
// Napraviti promise koji proverava da li je neki objekat ispunio uslova da je njegov property godine veci od 17 ili nije.
// U slucaju da je osoba punoletna then() funkcija vraca poruku "Vi ste punoletni".
// U slucaju da osoba nije punoletna catch() vraca broj godina osobe.

const punoletnost = new Promise((resolve, reject) => {
  const osoba = {
    ime: "Dzenan",
    prezime: "Kosuta",
    godine: 26,
  };
  if (osoba.godine > 17) {
    resolve("Vi ste punoletni");
  } else {
    reject(osoba.godine);
  }
});

punoletnost
  .then((arg) => console.log(arg))
  .catch((godine) => console.log(`Imate ${godine} godina.`));
