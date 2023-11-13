// Crie uma lógica para calcular o somatório das Receitas e das Despesas abaixo
// Imprima os somatórios e o saldo formatado no padão brasileiro,
// Informe se a situação está positiva ou negativa e se existe dívidas.

const incomes = ["salary", "R$ 2000,00", "commission", "R$ 825,45", "bônus", "R$ 320,00"];

const expenses = [
  "rent",
  "R$ 500,00",
  "energy",
  "R$ 325,55",
  "water",
  "R$ 120,34",
  "food",
  "R$ 1300,62",
  "Cabaré da Vanda",
  "R$ 898,94",

];

const incomesValues = incomes.filter ((value) =>
value.includes("R$"));

const incomesValuesNumber = incomes.values.map ((value) => { return Number(value.replace("R$ ", "").replace(",", "."));
});

const incomesExpenses = incomesValuesNumber.reduce((a, b) => a + b);


console.log(incomesValues);
console.log(incomesValuesNumber);
console.log(sumIncomes);

const expensesValues = expenses.filter ((value) =>
value.includes("R$"));

const expensesValuesNumber = expenses.values.map ((value) => { return Number(value.replace("R$ ", "").replace(",", "."));
});

const sumExpenses = expensesValuesNumber.reduce((a, b) => a + b);

console.log(sumExpenses.toLocaleString("pt-BR", {
    style: "currency",
    currency: "brl"
}));

let situation;

if (sumIncomes > sumExpenses) {
    situation = "Saldo positivo!"
 } else if (sumIncomes < sumExpenses) {
    situation = "Saldo nagativo!" 
 } else if (sumIncomes === sumExpenses) {
    situation = "Sem saldo mas sem dívidas!";
 }

 console.log(situation);

