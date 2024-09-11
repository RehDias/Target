# Fibonacci e Verificação de Letras

Este projeto consiste em um programa interativo em Node.js que oferece duas funcionalidades principais:

1. **Verificar se um número informado pertence à sequência de Fibonacci.**
2. **Verificar se uma palavra informada contém a letra "a" (maiúscula ou minúscula) e retornar a quantidade de ocorrências.**

O programa possui um menu interativo no terminal para escolher qual funcionalidade utilizar. Para iniciar o menu, basta rodar o comando `node app.js` no terminal.

## Funcionalidades

### 1. Cálculo da Sequência de Fibonacci
A função recebe um número e verifica se ele pertence à sequência de Fibonacci. A sequência de Fibonacci é definida por:
- F(0) = 0
- F(1) = 1
- F(n) = F(n-1) + F(n-2) para n > 1

**Retorno**: O programa informa se o número pertence ou não à sequência de Fibonacci.

### 2. Verificação da Letra "a"
A função recebe uma string e verifica a presença da letra "a" (seja minúscula ou maiúscula). Além disso, retorna a quantidade de vezes que a letra ocorre na string.

**Retorno**: A quantidade de vezes que a letra "a" aparece na string informada, ou uma mensagem indicando que a letra não foi encontrada.

## Como Executar

1. **Pré-requisitos**: Certifique-se de que o [Node.js](https://nodejs.org/en/) está instalado na sua máquina.
2. **Clonar o repositório** (ou fazer download dos arquivos).

3. No terminal, navegue até o diretório do projeto e execute o seguinte comando:

   ```bash
   node app.js
   ```

4. O menu interativo será iniciado. A partir dele, você poderá selecionar as opções e fornecer as entradas necessárias para utilizar as funcionalidades.

## Estrutura do Menu Interativo

O menu interativo oferece as seguintes opções:

1. **Desafio Fibonacci**: O usuário deverá inserir um número, e o programa irá verificar se ele faz parte da sequência de Fibonacci.
   
2. **Desafio contador de ocorrências da letra "a"**: O usuário deverá inserir uma palavra, e o programa irá informar quantas vezes a letra "a" aparece, ou se não aparece.

3. **Sair**: Encerra o programa.

### Exemplo de Uso do Menu

```bash
--- Menu Inicial ---
1. Desafio Fibonacci
2. Desafio contador de ocorrências da letra "a"
3. Sair
Escolha uma opção: 1

Informe um número: 21
O número 21 pertence à sequência de Fibonacci.

--- Menu Inicial ---
1. Desafio Fibonacci
2. Desafio contador de ocorrências da letra "a"
3. Sair
Escolha uma opção: 2

Informe uma palavra: banana
A letra 'a' aparece 3 vezes!.

--- Menu Inicial ---
1. Verificar número na sequência de Fibonacci
2. Verificar ocorrência da letra 'a' em uma palavra
3. Sair
Escolha uma opção: 3

Encerrando!
```
