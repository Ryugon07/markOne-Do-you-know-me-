var readLineSync = require("readline-sync");
var score = 0;
var userName = readLineSync.question("Whats your name? ");
console.log("welcome " + userName + " to the 'Do You Know Madhur' quiz");

function play(question, answer) {
  var userAnswer = readLineSync.question(question);

  if (userAnswer === answer) {
    console.log("You are correct!")
    score = score + 1
  }  else {
    console.log("you are wrong")
  }
}
play("what's my full name? ", "madhur aggarwal");
play("what's my age? ", "22")
play("where do I live? ", "delhi")
play("what's my favourite cuisine? ", "italian")
play("what's my favuorite color? ", "red")

console.log("Your final score is " + score)