// 1. Zadatak
const radnik = {
  firstName: "Dzenan",
  lastName: "Kosuta",
  fullname: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  adresa: {
    ulica: "avnoja",
    broj: "bb",
    grad: "Novi Pazar",
    getAdress: function () {
      return `${radnik.firstName} ${radnik.lastName} stanuje na adresi ${this.ulica} ${this.broj} ${this.grad}.`;
    },
  },
};

console.log(radnik.fullname());
console.log(radnik.adresa.getAdress());

const automobil = {
  marka: "Audi",
  model: "Q7",
  boja: "Bela",
  pogon: "quattro",
  menjac: "Automatik",
  km: 240000,
  vlasnik: ["062321552", "063930630"],
  garaza: {
    parking: "JKP Servis",
    vikend: "od 17 free",
    satnaKarta: "50",
    dnevnaKarta: "200",
    mesecnaKarta: "2000",
    platiZa: function (pocetniDatum, krajnjiDatum) {
      const pocetniDan = pocetniDatum.getDate();
      const krajnjiDan = krajnjiDatum.getDate();
      const ukupnoDana = krajnjiDan - pocetniDan;
      return `Cena parkinga za dati period je ${
        ukupnoDana * this.dnevnaKarta
      }RSD`;
    },
  },
};

automobil.boja = "crvena";
console.log(automobil);

console.log(
  automobil.garaza.platiZa(new Date(2022, 10, 16), new Date(2022, 10, 21))
);

// console.log(new Date(818035920000));

// const amina = new Date(2003, 11, 8);
// const munevera = new Date(2003, 11, 13);

// const aRazlika = Date.parse(amina);
// const mRazlika = Date.parse(munevera);
// const razlika = Math.abs(aRazlika - mRazlika);
// const datumRazlike = new Date(razlika);
// console.log(datumRazlike);
