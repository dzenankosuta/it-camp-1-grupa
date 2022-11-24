// kvadrat datog broja
let broj = Number(prompt("unesite neki broj"));
if (isNaN(broj)) {
  console.log("uneti podatak nije broj");
} else {
  console.log((broj *= broj));
}
