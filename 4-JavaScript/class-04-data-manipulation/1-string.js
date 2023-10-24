let myName = "Pedro"

console.log(myName.__proto__);
console.log(myName.lenght);
console.log(myName[1]);
console.log(myName.toLocaleUpperCase());
console.log(myName.toLocaleLowerCase());
console.log(myName.toUpperCase());

let phrase = "Im a web developer"

console.log(phrase.split(" ")[2] ="WEB");
console.log(typeof phrase);

console.log(phrase.split("").reverse().join(""));

console.log(phrase.replaceAll("web", "WEB"));
console.log(phrase);

console.log(phrase.indexOf(""));
console.log(phrase);
console.log(phrase.trim());
console.log(phrase.substring(5));

console.log(phrase.includes("Web"));
console.log("web" == "Web");
console.log(phrase.toLocaleLowerCase().includes("web") ? "Teste Verdadeiro" : "Teste Falso");

const consoles = {
    log: () => {
        return "imprimir"
    }
}

consoles.log()
console.log();

