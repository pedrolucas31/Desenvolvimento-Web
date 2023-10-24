// Binary

let num1 = 2;
let num2 = 3;

console.log(num1 + num2); 5
console.log("text" + num2); 'text3'
console.log(2 + 3); 5

// Unary

console.log(num1++); 2
console.log(num1); 3
console.log(++num1); 4
console.log(typeof num1); 'number'

// Ternary
console.log(3 != 4 ? "Verdadeiro" : "Falso"); 'Verdadeiro'

console.log(4 != 4 ? num1 = "AAA" : num1 = "BBB"); 'BBB'
console.log(num1); 'BBB'

const average = 2;

console.log(average >= 7 ? "Aprovado" : "Reprovado"); 'Reprovado'

// Truthy False

//Truthy               False
// 1, 1.5, -1          0
// " ", "0", "false"   ""
// {}                  null
// []                  undefined
// Infinity, -Infinity NaN

console.log(Boolean ? true : false); false