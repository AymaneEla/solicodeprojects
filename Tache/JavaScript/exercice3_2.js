let compteur =0;
let somme =0;


for(let i=1; i<=20; i++){
    
    if(i % 2 === 0){
        compteur =i;
        somme= somme +compteur;
        

        
    }
}

console.log("Nombre de pairs : " + compteur);
console.log("la somme des pairs : " + somme);