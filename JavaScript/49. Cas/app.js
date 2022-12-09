const person = {
  firstName: "Imran",
  lastName: "Hazirovic",
};

console.log(person);

// Svi objekti u JavaScriptu su povezani sa nekim Prototype objektom, tako da mozemo reci da svaki objekat ima Prototype.
// Prototype je objekat koji sadrzi svojstva i metode (properties and methods).

// 2 Nacina pravljenja sablona za objekte:

// 1. Constructor function (Konstruktor funkcija):

function User(firstName, lastName, score) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.score = score;
}

User.prototype.incrementScore = function () {
  this.score += 1;
};

const imran = new User("Imran", "Hazirovic", 4);

imran.incrementScore();
console.log(imran);

const vahid = new User("Vahid", "Gasanin", 2);

vahid.incrementScore();
vahid.incrementScore();

console.log(vahid);

// Napraviti constructor function za objekte koji imaju:
// marka, boja, godinaProizvodnje, udaran.
// Nakon toga napraviti prototype funkciju za sve objekte napravljene preko tog konstruktora, koja pretvara udaran iz false u true.

function Automobil(marka, boja, godinaProizvodnje, udaran) {
  this.marka = marka;
  this.boja = boja;
  this.godinaProizvodnje = godinaProizvodnje;
  this.udaran = udaran;
}

Automobil.prototype.jeUdaran = function () {
  this.udaran = true;
};

const mojAuto = new Automobil("Audi", "bela", 1998, false);
console.log(mojAuto);
mojAuto.jeUdaran();
console.log(mojAuto);
