const javaScript =
  "JavaScript est un langage de programmation largement utilisé pour le développement web. Il est polyvalent et peut être utilisé pour créer des applications web dynamiques. Les développeurs JavaScript utilisent fréquemment des bibliothèques comme React et Angular.";
let mots = 1;
let caracteres = 0;
let phrases = 0;
let paragraphes = 1;

function statistiquesTexte(texte) {
  //nombre de mots
  if (texte.length === 0) {
    mots = 0;
  } else {
    for (let mot of texte) {
      mot === " " ? mots++ : 0;
    }
  }
  //nombre de caracteres
  caracteres = texte.length;
  //nombre de phrases
  for (let phrase of texte) {
    phrase === "." ? phrases++ : 0;
  }
  //nombre de paragraphes
  if (texte.length === 0) {
    paragraphes = 0;
  } else {
    for (let paragraphe of texte) {
      paragraphe === "/n" ? paragraphes++ : 0;
    }
  }
}

statistiquesTexte(javaScript);
console.log(`Affichage des statistiques du texte :
Nombre de mots : ${mots} 
Nombre de caractères : ${caracteres}
Nombre de phrases : ${phrases}
Nombre de paragraphes : ${paragraphes}`);
