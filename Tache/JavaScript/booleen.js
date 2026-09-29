//Operateur de comparaison

let score =14;
let seuil =10;
console.log(score > seuil);
console.log( score < seuil);
console.log(score === seuil);
console.log(score !== seuil);

//stocker un resultat

let estValider = score >= seuil;
console.log(estValider);

// Operateur Logic
let paiment = false;
let inscrit = true;

let acces = score >= seuil && inscrit=== true;

console.log(acces);

let entree = inscrit === true || paiment === true;

