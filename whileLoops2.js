const readLine = require('readline-sync');

let answer = readLine.question("Want to quit? Y or N: ");
while (answer != "Y" && answer != "N"){
    console.log("invalid choice");
    answer = readLine.question("Try again. Enter Y or N ");
}
console.log(`You typed ${answer}`);


let answer1 = readLine.question("Want to quit? Y/y or N/n: ");
while (answer1 != "Y" && answer1 != "N")
    console.log("invalid choice");
while (answer1 != "y" && answer1 != "n") {
}
    console.log("invalid choice");
    console.log("invalid choice");
answer = readLine.question("Try again. Enter Y/y or N/n: ");
console.log(`You typed ${answer}`);
