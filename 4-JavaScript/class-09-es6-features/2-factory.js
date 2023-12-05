function person (name, age) {
    return {
        name,
        age: age,
        canDrive: age >= 18,
        status: () => {
            if (age >= 18) {
            return "Pode dirigir";
        } else {
            return "Não pode dirigir";
            }
        },
    };
}

console.log(person("Emanuel", 30));
console.log(typeof person("Emanuel", 30));
console.log(person("Pedrinho", 18));
console.log(person("Odilon", 17));
console.log(person(Neemias, 21));
console.log(person("Neemias", 21).status());