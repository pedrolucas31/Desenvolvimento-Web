// Object

let nameStudent = "Pedro";
let age = 30;
let profission = "Web Developer \nData Analyst";

console.log(profission);

let pokemon = {
    name: "Blastoise",
    level: 36,
    typeof: "Water",
    attack: () => "pound",
    special: () => "hydropump",
};

console.log(pokemon);
console.log(typeof pokemon);
console.log(pokemon.name);
console.log(pokemon.level);
console.log(pokemon["type"]);
console.log(pokemon.attack());
console.log(pokemon.special());

// Array (Vector)

let pokedex = [
    { name: "Charmander", level: 6 },
    { name: "Bulbasour", level: 5 },
    { name: "Squirtle", level: 4 },
    ];

console.log(pokedex);
console.log(typeof pokedex);
console.log(pokedex[0]);
console.log(pokedex[2]);
console.log(pokedex [1][0]);
console.log(pokedex[0].name);
console.log(pokedex[0].level);


