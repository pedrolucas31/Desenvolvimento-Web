function runAplication() {
    return "Running...";
}

try {
    console.log(runAplication());
} catch (error) {
    console.error(error);
} finally {
    console.log("Sempre será executado!!!");
}

document.write("Aplication is live...");

function divideNumbers(num1, num2) {
    if (num2 == 0) {
        throw new Error("Não é possível dividir por 0 abestado!");
    }
    return num1 / num2;
}

console.log(divideNumbers(6, 0));