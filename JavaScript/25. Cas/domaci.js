// Zadatak:
// Izracunati rastojanje izmedu dve tacke u prostoru
// ako su zadate koordinate krajnjih tacaka.

const range = () => {
  let x1 = +prompt("Unesite x koordinatu tacke A: ");
  let y1 = +prompt("Unesite y koordinatu tacke A: ");
  let x2 = +prompt("Unesite x koordinatu tacke B: ");
  let y2 = +prompt("Unesite y koordinatu tacke B: ");
  const rastojanje = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  const rastKon = +rastojanje.toFixed(2);
  return `Rastojanje izmedju tacke A i tacke B je: ${rastKon}`;
};

console.log(range());
