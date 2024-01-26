const personne = {
  prénom: "Alice",
  nom: "Smith",
  age: 25,
};

function afficherPersonne() {
  console.log(
    "Prénom : " +
      personne.prénom +
      ", Nom : " +
      personne.nom +
      ", Âge : " +
      personne.age
  );
}

afficherPersonne(personne);
