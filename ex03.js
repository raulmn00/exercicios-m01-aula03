const prompt = require("prompt-sync")();
console.clear();

let num = +prompt("Digite um número aleatório: ");

if((num%2)==0){
    console.log("O número digitado é par!");
}else {
    console.log("O número digitado é ímpar");
}