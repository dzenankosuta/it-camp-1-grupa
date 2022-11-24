// Izračunavanje sume kvadrata parnih brojeva u opsegu od broja n do broja m
// (n i m se unose sa tastature, n<m)

function sumaKvadrata() {
  const prviBroj = +prompt("Unesite prvi broj: ");
  const drugiBroj = +prompt("Unesite drugi broj: ");
  let suma = 0;
  if (isNaN(prviBroj) || isNaN(prviBroj)) {
    return `Unete vrednosti moraju biti brojevi.`;
  } else if (prviBroj >= drugiBroj) {
    return `Drugi broj mora biti veci od prvog.`;
  } else {
    for (let br = prviBroj; br <= drugiBroj; br++) {
      if (br % 2 === 0) {
        suma += br ** 2;
      }
    }
  }
  return suma;
}

console.log(sumaKvadrata());
