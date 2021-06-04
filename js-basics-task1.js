var yourName="Grzegorz Dunin-Ślęczek";
const birthDateJs = new Date('09/18/1990');
birthDateJs.setHours(11);
const birthDate= JSON.stringify(birthDateJs);

var num1=3;
var num2=3;
var num3=3;


console.log(`Hello! This program has been written by ${yourName}`);
console.log(`Author has been born on ${birthDate}`);
console.log(`The result of hidden equation is: ${(num1 + num2) * num3}`);

