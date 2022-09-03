//  1.	(20) Traziti od korisnika unos nekog realnog broja. Nakon toga ispisati
//  u konzoli kvadrat tog broja 
// (pozeljno je obuhvatiti slucaj kada korisnik ne unese odgovarajucu vrednost).


let broj = Number(prompt("Unesite neki broj: "));
if (isNaN(broj) || broj<1) {
  console.log("Niste uneli korektnu vrednost za broj.");
} for(let i = 1; i<= broj; i++ ) { 
 console.log(broj*broj);
}
