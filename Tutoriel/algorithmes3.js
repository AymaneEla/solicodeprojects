
let panier = [15, 42, 5, 89, 12, 50, 8];
let somme=0;
let compteur =0;
let sommeChers =0;

for(i=0; i <= panier.length-1;i++){
     somme = somme + panier[i] 

     if(panier[i]> 20){
        compteur++
        sommeChers = sommeChers + panier[i];
     }
}

console.log(somme)
console.log(compteur)
console.log(sommeChers)