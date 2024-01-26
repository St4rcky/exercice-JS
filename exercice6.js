const harryPotter = {
  titre: "Harry Potter",
  auteur: "J.J. Rowling",
  année: "1997",
};
const hobbit = {
  titre: "Le Hobbit",
  auteur: "J.R.R Tolkien",
  année: "1937",
};

const livres = [];

function ajouterLivre(nouveau) {
  livres.push(nouveau);
}

ajouterLivre(harryPotter);
ajouterLivre(hobbit);

console.log("Liste de livres : ");
livres.map((livre) => {
  console.log(
    `Titre : ${livre.titre}, Auteur : ${livre.auteur}, Année : ${livre.année}`
  );
});
