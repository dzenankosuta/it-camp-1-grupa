const brojFlasa = function () {
  const zapreminaJedne = +prompt("Unesite zapreminu flase: ");
  const ukupnaKolicina = +prompt("Unesite kolicinu limunade: ");
  return Math.ceil(ukupnaKolicina / zapreminaJedne);
};

console.log(brojFlasa());
