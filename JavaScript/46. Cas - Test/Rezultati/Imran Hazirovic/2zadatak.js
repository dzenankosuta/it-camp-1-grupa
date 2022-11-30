// 2.	(20) Napraviti pomocni niz koji ce sadrzati elemente od oba niza.
// Napraviti jos jedan pomocni niz koji ce iz prvog dodatnog niza uzeti parne brojeve.
//  U drugom pomocnom nizu umetnuti na prva dva mesta 10 i 20.
// Funkcija na kraju treba da vrati dva napravljena pomocna niza.
// DATA1 = [2, 26, 38, 75, 11, 29];
// DATA2 = ["a", "b", "c", "d", "e"];

//////////////////////////////////////////////////
// const DATA1 = [2, 26, 38, 75, 11, 29];//////
// const DATA2 = ["a", "b", "c", "d", "e"];/////
// ////////////////////////////////////////////

// const DATA12 = DATA1.concat(DATA2);
// console.log(DATA12);
// /////////////////////////
// const DATA13 = DATA1.filter((el) => el % 2 === 0);
// console.log(DATA13);
// ////////////////////////////
// DATA13.unshift(10, 20)
// console.log(DATA13);

///////////////////////////////////////////////////////////////////
const DATA1 = [2, 26, 38, 75, 11, 29];
const DATA2 = ["a", "b", "c", "d", "e"];

const funkcija = () => {
  const DATA12 = DATA1.concat(DATA2);
  const DATA13 = DATA1.filter((el) => el % 2 === 0);
  DATA13.unshift(10, 20);
  return `Prvi pomocni niz je [${DATA12}], a drugi pomcni niz je [${DATA13}]`;
};

console.log(funkcija());
