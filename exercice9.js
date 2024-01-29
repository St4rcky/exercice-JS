const monTableau = [7, 12, 9, 34, 18, 5];
let resultat;

function filtrerPairs(tableau) {
  resultat = tableau.filter((chiffre) => chiffre % 2 === 0);
}

filtrerPairs(monTableau);
console.log(resultat);
