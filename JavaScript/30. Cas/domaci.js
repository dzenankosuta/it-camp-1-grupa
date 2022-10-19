// Domaci:
// 1. Iz nekog niza izdvojiti sve parne brojeve.(Napraviti novi niz)
// 2. Iz nekog niza izdvojiti sve neparne brojeve.(Napraviti novi niz)
// 3. Iz nekog niza izdvojiti sve pozitivne brojeve.(Napraviti novi niz)

const firstTask = (arr) => {
  const parni = [];
  for (let broj of arr) {
    if (broj % 2 === 0 && !isNaN(broj)) {
      parni.push(broj);
    }
  }
  return parni;
};

console.log(firstTask([-66, -67, -93, -22, -35, 2, 4, 5, 7, 9, 88]));

const secondTask = (arr) => {
  const neparni = [];
  for (let broj of arr) {
    if (broj % 2 !== 0 && !isNaN(broj)) {
      neparni.push(broj);
    }
  }
  return neparni;
};

console.log(secondTask([-66, -67, -93, -22, -35, 2, "dfd", 4, 5, 7, 9, 88]));

const thirdTask = (arr) => {
  const pozitivni = [];
  for (let broj of arr) {
    if (broj > 0 && !isNaN(broj)) {
      pozitivni.push(broj);
    }
  }
  return pozitivni;
};

console.log(thirdTask([-66, -67, -93, -22, -35, 2, "dfd", 4, 5, 7, 9, 88]));
