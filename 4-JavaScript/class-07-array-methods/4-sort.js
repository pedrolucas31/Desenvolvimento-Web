const arrayNumbers = [7, 4, 5, 7, 8, 9, "7", 40];

const arraySorted = arrayNumbers.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});

console.log(value.join("-"));
console.log(arrayNumbers.join("-"));

const arrayNames = ["Pedin", "Eduardo", "Luiza"];

arrayNames.sort((a, b) => a - b);
arrayNames.sort((a, b) => {
    a = a.toUpperCase()
    
})

const sortedArrayAnimes = arrayAnimes.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
});

console.table(sortedArrayAnimes);
console.table(arrayAnimes.sort((a, b) => a.year - b.year));

console.table(arrayAnimes);