let dateNow = new Date();
let date1 = new Date("2023-12-1 12:03:24");
let date2 = new Date("2023-12-3 12:03:24");

console.log((date2 - date1) / 1000 / 60 / 60 / 24);

console.log(dateNow);
console.log(date1);

console.log(dateNow.getDay() + 1);
console.log(dateNow.getDate() + 1);
console.log(dateNow.getMonth());
console.log(dateNow.getFullYear());


console.log(dateNow.getDay() + 1);
console.log(dateNow.setDate(dateNow.getDate() + 6));
console.log(dateNow.setMonth(dateNow.getMonth() + 5));
console.log(dateNow.getFullYear(dateNow.getFullYear() + 1));

console.log(dateNow.getHours());
console.log(dateNow.getMinutes());
console.log(dateNow.getSeconds());
console.log(dateNow.getMilliseconds());

console.log(new Date().setHours(dateNow.getHours( + 12)));

let day = String(dateNow.getDate()).padStart(2, "0");
let month = String(dateNow.getMonth()).padStart(2, "0");
let year = dateNow.getFullYear();

console.log(`${day}/${month}/${year}`);

console.log(dateNow.toLocalDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
);