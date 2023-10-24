let num1 = 10;
let num2 = 20;

num2 = Number(num2); // type conversion

console.log(num1 + num2); // type conversion

//Interpolation
console.log("A soma é: " + (num1 + num2));

//Concatenation
console.log("A soma de " + num1 + " e " + num2 + " é: " + (num1 + num2));

//Template literals (String)
console.log(`A soma de ${num1} e ${num2} é: ${num1 + num2}`)