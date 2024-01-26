const monTableau = [85, 92, 78, 90, 88];
let resultat = 0;

function calculerSomme() {
  for (let i = 0; i < monTableau.length; i++) resultat += monTableau[i];
  return;
}
calculerSomme();
console.log(`La moyenne des notes est : ${resultat / monTableau.length}`);
