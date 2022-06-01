const prompt = require("prompt-sync")();
console.clear();
/* 
Faça um programa que leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si.
*/

let numA = +prompt("Digite um número: ");
let numB = +prompt("Digite um outro número: ");

if (numA % numB == 0 || numB % numA == 0) {
  console.log(`Os números ${numA} e ${numB} são múltiplos entre si.`);
} else {
  console.log(`Os números ${numA} e ${numB} não são múltiplos entre si.`);
}
