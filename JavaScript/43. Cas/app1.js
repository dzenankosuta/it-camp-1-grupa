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
    satnaKarta: 50,
    dnevnaKarta: 200,
    mesecnaKarta: 2000,
  },
};
// Napraviti funkciju koja ce povecati vrednost satne, dnevne i mesecne karte za po 20%.
// Za bilo koji objekat koji ima properties: satnaKarta, dnevnaKarta i mesecnaKarta.
// Nakon toga je primeniti za automobil objekat i ispisati automobil nakon toga.

function povecajZa20() {
  this.satnaKarta += this.satnaKarta * 0.2;
  this.dnevnaKarta += this.dnevnaKarta * 0.2;
  this.mesecnaKarta += this.mesecnaKarta * 0.2;
  return {
    satnaKarta: this.satnaKarta,
    dnevnaKarta: this.dnevnaKarta,
    mesecnaKarta: this.mesecnaKarta,
  };
}

console.log(povecajZa20.call(automobil.garaza));
console.log(automobil);
