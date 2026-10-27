let jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];

for(i=0; i<= jours.length-1; i++){
    console.log("Jour de la semaine : " + jours[i]);
}


let coleurs = ["Rouge", "Vert", "Bleu", "Jaune", "Orange", "Violet"];

for(  let i= coleurs.length-1;    i>=0; i--){
    console.log("COLEURS : " + coleurs[i]);
}






let sequence = ["Ignition", 1, 2, 3, 4, 5, "Préparation"];

for(i = sequence.length-1; i>= 0; i--){  // Pour na pas faire un boucle pour 7 . max = INDEX 6
    console.log(sequence[i]);
}

console.log("Décollage !");   