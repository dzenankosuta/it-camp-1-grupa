// Napraviti objekat sa sledecim svojstvima:
// 1. firstName,
// 2. lastName,
// 3. language,
// 4. setLanguage - metoda za setovanje jezika,
// 5. setNickName - metoda (svaka osoba ima nadimak sastavljen od prva dva slova imena i prva dva slova prezimena)

const person = {
  firstName: "Dzenan",
  lastName: "Kosuta",
  language: "engleski",
  setLanguage: function (jezik) {
    this.language = jezik;
    return this.language;
  },
  setNickName: function () {
    let prvaDva =
      this.firstName[0].toUpperCase() + this.firstName[1].toLowerCase();
    let drugaDva =
      this.lastName[0].toLowerCase() + this.lastName[1].toLowerCase();
    return prvaDva + drugaDva;
  },
};

console.log(person.setLanguage("bosanski"));
console.log(person.language);
console.log(person.setNickName());

// Domaci zadatak:
// 1. Zadatak
//  const radnik = {
//     first_name: "Dzenan",
//      last_name : "Kosuta",
//      fullname:function(){
//      },
//      adresa:{
//          ulica:"avnoja",
//          broj:"bb",
//          grad:"Novi Pazar",
//          getAdress:function(){
//          }
//      }
// 2. Zadatak
// const automobil = {
//     marka: "Audi",
//     model: "Q7",
//     boja: "Bela",
//     pogon: "quattro",
//     menjac: "Automatik",
//     km:240000,
//     vlasnik:[062321552,063930630],
//     garaza:{
//         parking:"JKP Servis",
//         vikend:"od 17 free",
//         satnaKarta: "50",
//         dnevnaKarta: "200",
//         mesecnaKarta: "2000",
//         platiZa: function(od, do) {
//
// }
//     }
// }
