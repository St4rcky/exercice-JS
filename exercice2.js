const monTableau = [12, 24, 56, 78, 90];

function rechercherElement(tableau, chiffre) {
  return tableau.includes(chiffre);
}
const resultat = rechercherElement(monTableau, 22);
console.log(resultat);
