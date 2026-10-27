let nombres =[10, 20, 30, 40];


let somme = nombres[0] + nombres[nombres.length-1]
console.log(somme);


let temperatures = [18, 20, 23, 19];

console.log("Avant : " +temperatures );

temperatures[1] = 21;

temperatures[temperatures.length-1] = 25;

console.log("Apres : " +temperatures );