let ventes =[110, 75, 150, 180, 90, 130, 100, 160];

let nombreVentes = 0;
let somme=0;
let max = ventes[0];
let min= ventes[0];
let ventesExep = 0
let nbVentesExep=0;

for(i=0; i<= ventes.length-1; i++){
    let vente = ventes[i];
    nombreVentes++;
    somme = somme + vente;

    if(vente> max){
        max = vente;
    }
    if(vente< min){
        min = vente;
    }
    if(vente > 130){
        nbVentesExep++;
        ventesExep = ventesExep + vente;
    }
}


console.log("Le nombre total de ventes réalisées: "+nombreVentes, "Le chiffre d’affaires total: "+somme)
console.log("Le montant de la vente la plus élevée : "+max, "Le montant de la vente la plus faible  :"+min)
console.log("Le nombre de ventes Exceptionnelles: "+ nbVentesExep, "Le chiffre d’affaires Exceptionnelles: "+ ventesExep)