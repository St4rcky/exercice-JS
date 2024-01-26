const monTableau = [2, 4, 6, 8, 10];
let resultat = 0;

function calculerSomme() {
  for (let i = 0; i < monTableau.length; i++) resultat += monTableau[i];
  return;
}
calculerSomme();
console.log(`La somme est : ${resultat}`);
