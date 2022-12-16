// JavaScript Sets //

// Setovi predstavljaju kolekciju unikatnih vrednosti.
// Svaka vrednost se pojavljuje samo jednom.

// Kreiranje seta:

const letters = new Set(["a", "b", "c", "d", "a"]); // nema drugog "a"
console.log(letters);

// Metode:
// add() - dodaje novi element u setu.
letters.add("m");
console.log(letters);

// delete() - brise specifican element u setu.
letters.delete("m");
console.log(letters);

// has() - vraca boolean (da li se neka vrednost nalazi u setu)
// letters.has("m");
console.log(letters.has("m"));

// forEach() - poziva callback funkciju za svaki element

letters.forEach((element) => console.log(element));

// values()vraca iterator sa vrednostima datog seta
console.log(letters.values());

// Napraviti funkciju koja iz datog niza vraca novi niz, brisuci duplikate originalnom. (Koriscenjem setova)

const brisiDuplikate = (arr) => {
  const set = new Set(arr);
  return [...set];
};

console.log(brisiDuplikate([1, 1, 1, 1, 5, 8, 5, 4, 6, 2, 4]));
