let recenica = "Pera ima devojku";
let recenica1 = "";
for (let i = 0; i < recenica.length; i++) {
  if (recenica.length % 2 === 1 && i === recenica.length - 1) {
    recenica1 += recenica[recenica.length - 1];
  } else if (i % 2 === 0) {
    recenica1 += recenica[i + 1];
  } else if (i % 2 === 1) {
    recenica1 += recenica[i - 1];
  }
}

console.log(recenica1);
