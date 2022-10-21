// Pravljenje funkcije koja nam vraca maximum nekog niza:

const max = (arr) => {
  let maximum = Number.NEGATIVE_INFINITY;
  for (let number of arr) {
    if (number > maximum) {
      maximum = number;
    }
  }
  return maximum;
};
