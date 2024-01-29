const listeDeTaches = [];

function ajouterTache(tache) {
  listeDeTaches.push(tache);
}

ajouterTache("Faire les courses");
ajouterTache("Acheter des fleurs");
console.log(`"Liste de tâches : ${listeDeTaches}`);
