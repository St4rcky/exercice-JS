const tableau1 = [1, 2, 3];
const tableau2 = [4, 5, 6];

function fusionnerTableaux(premierT, deuxiemeT) {
  const tableauFusionné = premierT.concat(deuxiemeT);
  console.log(tableauFusionné);
}
fusionnerTableaux(tableau1, tableau2);
