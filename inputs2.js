const readLine = require('readline-sync');

let number = Number(readLine.question("give a number for the sum:"));
let other = Number(readLine.question("give the next for the sum:"));
let div = number + other;
  console.log(`sum: ${div}`);

let number1 = Number(readLine.question("give a number for the difference:"));
let other1 = Number(readLine.question("give the next for the difference:"));
let div1 = number1 - other1;
console.log(`difference: ${div1}`);





