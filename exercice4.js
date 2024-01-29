const monTableau = [9, 3, 7, 1, 5];

function trierTableau() {
  monTableau.sort();
}

const resultat = trierTableau(monTableau);
console.log(`"Tableau trié : [${resultat}]"`);
