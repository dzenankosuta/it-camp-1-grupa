// 14.	Uneti string se šifruje tako što se zamenjuje redosled znacima u stringu.
// Prvi i drugi zamene mesta, zatim 3. i 4. zamene mesta itd.
// Npr. za string 'Pera ima devojku', treba dobiti 'ePari amd vejouk'.
// Ako string ima neparan broj znakova, poslednji znak se ne dira.

// const changeIndexes = () => {
//   const recenica = prompt("Unesite neku recenicu: ");
//   let duzina = recenica.length;
//   let novaRecenica = "";
//   for (let i = 0; i < duzina; i++) {
//     if (duzina % 2 === 1 && i === duzina - 1) {
//       novaRecenica += recenica[i];
//     } else if (i % 2 === 0) {
//       novaRecenica += recenica[i + 1];
//     } else if (i % 2 === 1) {
//       novaRecenica += recenica[i - 1];
//     }
//   }
//   return novaRecenica;
// };

// console.log(changeIndexes());

// 15.	Unose se dva stringa A i B. Kreirati novi string kao kombinaciju stringova A i B,
// tako što se kombinuju prvi sa prvim, drugi sa drugim, treći sa trećim znakom itd.
// Ako je jedan string duži od drugog, na kraju samo dodati znakove viška.
// Npr. za stringove "PERA" i "sladoled" dobija se string "PsElRaAdoled".

const firstByFirst = () => {
  const A = prompt("Unesite prvu recenicu: ");
  const duzina1 = A.length;
  const B = prompt("Unesite drugu recenicu: ");
  const duzina2 = B.length;
  let C = "";
  //   let duzina = 0;
  //   if (duzina1 > duzina2) {
  //     duzina = duzina1;
  //   } else {
  //     duzina = duzina2;
  //   }

  //   Sintaksa za ternary operator:
  //  USLOV ? vrednost u slucaju ispunjenja uslova : vrednost u slucaju neispunjenja uslova
  let duzina = duzina1 > duzina2 ? duzina1 : duzina2;
  for (let i = 0; i < duzina; i++) {
    if (i >= duzina1) {
      C += B[i];
    } else if (i >= duzina2) {
      C += A[i];
    } else {
      C += A[i] + B[i];
    }
  }
  return C;
};

console.log(firstByFirst());
