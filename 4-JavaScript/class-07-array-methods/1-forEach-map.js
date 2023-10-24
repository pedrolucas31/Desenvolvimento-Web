const array = ["Matrix", "IT", "ET", "Jumanji", "Barbie"];

// array.forEach((value, index, array) => {
//     console.log({value, index, array});
// });

array.map((value) => {
    console.log({ value });
});

console.log(array);
console.log(arrayMap);

const real = [1, 2, 3000, 40, 50];

const realConverted = real.map(value => value * 5.05);

console.log(real);
console.log(realConverted);

const rectangles = [
    {width: 4, height: 5 },
    {width: 7, height: 10 },
    {width: 14, height: 7 },
];

const calculateAreas = rectangles.map((valeu, index) => {
    return {
        name: `Retângulo ${index + 1}` ,
        area: value.width * value.height,
    };
});

console.log(calculateAreas);
console.table(calculateAreas);
document.write(JSON.stringify(calculateAreas))