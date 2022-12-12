// Unose se dva stringa A i B. Kreirati novi string kao kombinaciju stringova A i B, tako što se kombinuju prvi sa prvim, drugi sa drugim, treći sa trećim znakom itd. Ako je jedan string duži od drugog, na kraju samo dodati znakove viška. Npr. za stringove "PERA" i "sladoled" dobija se string "PsElRaAdoled".

const stringovi = (A, B) => {
  const duzina = A.length > B.length ? A.length : B.length;
  let C = "";
  for (let i = 0; i <= duzina - 1; i++) {
    if (A[i] !== undefined && B[i] !== undefined) {
      C += A[i] + B[i];
    } else if (A[i] === undefined) {
      C += B[i];
    } else if (B[i] === undefined) {
      C += A[i];
    }
  }
  return C;
};

console.log(stringovi("PERA", "sladoled"));
console.log(stringovi("OVO JE SADA DUZI STRING", "sladoled"));
