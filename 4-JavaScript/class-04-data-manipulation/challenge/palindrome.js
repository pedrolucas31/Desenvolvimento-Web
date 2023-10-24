function isPalindrome(text) {
    let normalText = text;
    let reverseText = text.split("")
    .reverse().join("");
    return normalText == reverseText;
}

const isPalindrome = checkPalindrome(text);

console.log(isPalindrome ? "Verdadeiro" : "Falso");