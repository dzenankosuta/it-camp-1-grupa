const radnoVreme = () => {
  let satnica = +prompt("Unesite satnicu prispeca maila: ");
  let minutnica = +prompt("Unesite minutnicu prispeca maila: ");
  if (isNaN(satnica) || isNaN(minutnica)) {
    return `Satnica i minutnica moraju biti brojevi.`;
  } else if (satnica < 0 || satnica > 23) {
    return `Nije uneta korektna vrednost za satnicu`;
  } else if (minutnica < 0 || minutnica > 59) {
    return `Nije uneta korektna vrednost za minutnicu`;
  } else if (satnica < 9 || satnica > 16) {
    return `Ne`;
  } else {
    return `Da`;
  }
};

console.log(radnoVreme());
