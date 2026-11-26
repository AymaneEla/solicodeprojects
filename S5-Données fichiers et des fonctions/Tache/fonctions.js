function calculerSurface(largeur, longeur){
    return largeur* longeur;
}

function max(surface){
    return surface > 100;
}


let resultSurface = calculerSurface(12,10);
let checkSurface = max(resultSurface);

console.log("le resultat :"+ resultSurface);
console.log("check est :"+ checkSurface);