const prompt = require("prompt-sync")();
console.clear();
/*
Faça um programa para a leitura de quatro notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
A mensagem "Em recuperação", se a média for entre cinco e sete;
A mensagem "Reprovado", se a média for menor que cinco.

*/

let nota1 = +prompt("Digite a primeira nota do aluno: ");
let nota2 = +prompt("Digite a segunda nota do aluno: ");
let nota3 = +prompt("Digite a terceira nota do aluno: ");
let nota4 = +prompt("Digite a quarta nota do aluno: ");

let mediaNotas = (nota1 + nota2 + nota3 + nota4) / 4;

if (mediaNotas >= 7) {
  console.log(`
  A média alcançada pelo aluno foi de ${(mediaNotas).toFixed(2)},
  portanto, o aluno está APROVADO!`);
} else if (mediaNotas >= 5 && mediaNotas < 7) {
  console.log(`
  A média alcançada pelo aluno foi de ${(mediaNotas).toFixed(2)},
  portanto, o aluno está EM RECUPERAÇÃO!`);
} else if (mediaNotas < 5) {
  console.log(`
  A média alcançada pelo aluno foi de ${(mediaNotas).toFixed(2)}, 
  portanto, o aluno está REPROVADO!`);
}
