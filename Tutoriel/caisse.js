let notes =[12, 15, 8, 17, 10];

let nombreValidie =0;

for(i=0; i<= notes.length-1; i++){

    if(notes[i]>=10){
        console.log(notes[i])
        nombreValidie++;
    }
}console.log(nombreValidie)


let mots = ["chat", "ordinateur", "table", "programmation", "js"];

let motsLongs =0;

for(i=0; i<=mots.length-1; i++){
    if(mots[i].length>=5){
        motsLongs++;
    }
}console.log(motsLongs);


let nombres = [4, 7, 2, 9, 5, 8];

sommePairs  =0;

for(i=0; i<= nombres.length-1; i++){
    if(nombres[i]%2===0){
        sommePairs++;
        console.log(nombres[i]);
    }
    
}

console.log(sommePairs)

let somme =0;
let sommeChers =0;
let compteur= 0;
let panier =[15, 42, 5, 89, 12, 50, 8];

for(i=0; i<= panier.length-1;i++){
    somme = somme + panier[i];
}
console.log(somme);

for(j=0; j<=panier.length; j++){
    if(panier[j]>20){
        compteur++;
        sommeChers = sommeChers + panier[j];
    }
}console.log(compteur);
console.log(sommeChers);