class Brush {
    constructor(color.height) {
        this.colorName = color;
        this.height = height
    }
}

const blueBrush = new Brush("Azul", 10);
const redBrush = new Brush("Vermelho", 12);

redBrush.action();

console.log(blueBrush.colorName);
console.log(redBrush.colorName);

console.log(blueBrush.height);
console.log(redBrush.height);

//console.log();

class Pokemon {
    constructor(name, level) {
        this.name = name;
        this.level = level;
        this.health = 100;
    }

    attack() {
        console.log(´${this.name} atacou!´);
    }

    damage(effective, damage = 20) {
        if (effective) {
            this.health -= damage * 1.3;
        } else {
            this.health -= damage;
        }
    }
}

const charmander = new Pokemon("Charmander", 5);
const squirtle = new Pokemon("Squirtle", 4);
const bulbasaur = new Pokemon("Bulbasaur", 4);

console.log(charmander.name);
console.log(charmander.level);
console.log(squirtle.name);
console.log(squirtle.health);

squirtle.attack();

console.log(bulbasaur.name);
console.log(bulbasaur.health);

bulbasaur.damage();
console.log(bulbasaur.health);

const effective = true;
bulbasaur.damage(effective);
console.log(bulbasaur.health);



