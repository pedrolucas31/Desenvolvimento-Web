const mytitle = document.querySelector("h1");
const myContainer = document.querySelector(".container");

console.log(mytitle);
console.log(mytitle.textContent);
console.log(mytitle.innerHTML);

console.log(myContainer);
console.log(myContainer.textContent);
console.log(myContainer.innerHTML);

mytitle.innerText = "Document Object Model";
mytitle.innerText = "<i>Pedro</i>";
mytitle.innerHTML = "<i>HTML</i>";

mytitle.style.color = "#F00";
mytitle.style.color = "red";
mytitle.style.backgroundColor = "lightgray";

const boxesNodeList = document.querySelectorAll(".box");
// NodeList
console.log(boxesNodeList.forEach((value) => {
 node.style.color = "blue;" }
 ));

 const num1 = document.querySelector("#num1");
 const num2 = document.querySelector("#num2");
 const sumButton = document.querySelector(".sumButton");
 const result = document.querySelector(".result");

 function sumNumber() {
 result.innerHTML = Number(num1.value) +
 Number(num2.value);
 }

 sumButton.addEventListener("click", sumNumber);

num1.addEventListener("keyup", () => {
    console.log(num1.value);
});