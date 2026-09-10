const prompt = require("prompt-sync")();
let nameOfArticle = prompt("donner le nom de larticle: ");
let priceOfArticle = Number(prompt("donner le prix :"));
let quantityOfArticle = Number(prompt("donner la quantite: "));


let total = priceOfArticle * quantityOfArticle;
console.log("le nom de larticle: "+ nameOfArticle);
console.log("le prix de larticle: "+ priceOfArticle);
console.log("le prix totale: "+ total);