const readLine= require('readLine-sync');

let joke = readLine.question("Want to hear a joke");
if (joke == "yes"){
    console.log(`Deez nuts`);
} if (joke == "no") {
    console.log("192.984.292");
}

let number = Number(readLine.question("ENTER NUMBER"));
if (number %2 ==0){
  console.log("CAN DIVIDE BY 2");
}
if (number %3 ==0){
    console.log("CAN DIVIDE BY 3");
}
if (number %4 ==0) {
    console.log("CAN DIVIDE BY 4");
}
if (number %5 ==0){
    console.log("CAN DIVIDE BY 5");
}
if (number %6 ==0){
    console.log("CAN DIVIDE BY 6");
}

let Guess = Number(readLine.question("Guess a number between 1-10"));
if (Guess == 7){
    console.log(`Congrats, You won a sad feeling!`);
} if (Guess >7 ) {
    console.log("To high");
} if (Guess <7)
    console.log("To Low");

let cost = Number(readLine.question("Please enter you cost "));
let tax


