let recenica;
recenica =
	"Nakon danasnjeg testa cemo znati ko ce nastaviti sa drugim ciklusom it campa";

let recenica1 = "";

for (i = 0; i <= recenica.length; i++) {
	if (
		recenica[i] === "a" ||
		recenica[i] === "e" ||
		recenica[i] === "i" ||
		recenica[i] === "o" ||
		recenica[i] === "u"
	) {
		recenica1 += recenica[i].toUpperCase();
	} else if (i === recenica.length) {
		recenica1 += ".";
	} else {
		recenica1 += recenica[i];
	}
}

console.log(recenica1);
console.log(recenica1.length);
