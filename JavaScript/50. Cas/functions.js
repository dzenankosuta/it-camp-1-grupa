const zbir = function (arg1, arg2) {
  return arg1 + arg2;
};

const br = 5;

export default zbir;
export { br };

// Postoje 2 nacina za eksportovanje modula:
// export zbir
// export default zbir

// export default mozemo iskoristiti samo jednom u fajlu.
