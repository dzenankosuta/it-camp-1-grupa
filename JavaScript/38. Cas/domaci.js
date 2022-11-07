// Na osnovu stringa koji unosi korisnik napraviti niz, gde cemo ispitati da li se jagoda nalazi unutar tog niza. Ako se jagoda ne nalazi unutar niza, funkcija neka vrati taj niz poredjan abecedno, s tim sto ce se na prvom mestu dodati broj 10, a na poslednjem broj 100.
// Dok ako se jagoda nalazi unutar niza vratiti poziciju gde se ona nalazi.

const firstTask = () => {
  const voce = prompt("Unesite listu sa vocem: ");
  const nizVoca = voce.split(",");
  if (nizVoca.includes("jagoda")) {
    return `Jagoda se nalazi na ${nizVoca.indexOf("jagoda") + 1} mestu.`;
  } else {
    nizVoca.sort();
    nizVoca.unshift(10);
    nizVoca.push(100);
    return nizVoca;
  }
};

console.log(firstTask());
