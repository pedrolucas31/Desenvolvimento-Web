function convertMsToKmh(speed) {
 return speed * 3.6 + "km/h";
}

const userSpeed = prompt("Digite a velocidade:");
const convertedSpeed = convertMsToKmh(userSpeed);
document.write(convertMsToKmh + "km/h");
