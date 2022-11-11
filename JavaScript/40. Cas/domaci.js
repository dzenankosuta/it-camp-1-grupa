// Napraviti objekat student koji ce da ima vrednosti (po zelji), svojstava:
// ime, prezime, broj indeksa, ocene (niz svih ocena koje student ima u trenutnoj godini), prosekOcena (metoda koja na osnovu ocene vraca prosek datih ocena).

const student = {
  ime: "Ahmed",
  prezime: "Krkmisevic",
  brojIndeksa: "035029",
  ocene: [7, 9, 10, 6, 5, 8],
  prosekOcena: function () {
    const brojOcena = this.ocene.length;
    const suma = this.ocene.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
    const prosek = suma / brojOcena;
    return `Prosek trenutnih ocena ${this.ime}a ${this.prezime}a je ${prosek}.`;
  },
};

console.log(student);
console.log(student.ime);
console.log(student["prezime"]);
console.log(student.prosekOcena());
