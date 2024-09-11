/*Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, 
além de informar a quantidade de vezes em que ela ocorre. */

function countA (str) {
  let count = 0;
  if (str.toLowerCase().includes('a')) {
    for (let i = 0; i <= str.length; i += 1) {
      if (str[i] === 'a') {
        count += 1;
      }
    }
  }
  if (count > 0) {
    console.log(`A letra "a" aparece ${count} vez${count > 1 ? "es" : ""}!`);
  } else {
    console.log(`A string não possui letra "a"!`);
  }
}

module.exports = {countA};