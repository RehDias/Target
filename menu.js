// Criação de um menu interativo no terminal para escolher entre as duas funções

const readline = require('readline');
const {verifyFibonnaci} = require('./Fibonacci.js');
const {countA} = require('./countA.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function menu () {
  console.log('Menu inicial!');
  console.log('1. Desafio Fibonacci');
  console.log('2. Desafio contador de ocorrências da letra "a"');
  console.log('3. Sair');

  rl.question('Escolha um opção: ', (answer) =>  {
    handleMenu(answer);
  })
  }

function handleMenu (option) {
  switch(option) {
    case '1':
      console.log('---------------------------------------------------------');
      console.log('Essa função ira verificar se o número que for informado pertence a sequência de Fibonacci');
      console.log('---------------------------------------------------------');
      rl.question('Digite um número: ', (numAnswer) => {
        console.log('---------------------------------------------------------');
        verifyFibonnaci(Number(numAnswer));
        console.log('---------------------------------------------------------');
        console.log('Retornando ao menu!');
        console.log('---------------------------------------------------------');
        returnToMenu()
      });
      break;
    case '2':
      console.log('A função ira retornar a ocorrências da letra "a" na palavra informada')
      console.log('---------------------------------------------------------');
      rl.question('Digite uma palvra: ', (string) => {
        console.log('---------------------------------------------------------');
        countA(string);
        console.log('---------------------------------------------------------');
        console.log('Retornando ao menu!');
        console.log('---------------------------------------------------------');
        returnToMenu()
      });
      break;
    case '3': 
      console.log('---------------------------------------------------------');
      console.log('Encerrando!');
      console.log('---------------------------------------------------------');
      rl.close();
      break;
    default: 
      console.log('---------------------------------------------------------');
      console.log('Opção inválida, escolha novamente entre as opções apresentadas!');
      console.log('---------------------------------------------------------');
      returnToMenu()
    }
}

function returnToMenu() {
  setTimeout(menu, 1500);
}

module.exports = {menu};