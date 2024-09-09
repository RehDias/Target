/* Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores 
anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar 
onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número 
informado pertence ou não a sequência.*/

function verifyFibonnaci(num) {
  if (num < 0) return false;

  let prev1 = 0, prev2 = 1, current = 0;

  while (current < num) {
    current = prev1 + prev2;
    prev1 = prev2;
    prev2 = current;
  }

  if (num == current || num == 0) {
    console.log(`O número ${num} pertence a sequência Fibonacci.`);
  } else {
    console.log(`O número ${num} não pertence a sequência Fibonacci.`);
  };
};

module.exports = {verifyFibonnaci};