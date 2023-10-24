const numUser = Number(prompt("Digite um número"));

const result = numUser % 2 == 0 ? "Par" : "Ímpar";

alert(`O número ${numUser} é ${result}`);