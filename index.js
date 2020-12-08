var readlinesync = require("readline-sync")
const chalk = require('chalk');

var score = 0;

var userName = readlinesync.question("What is you name? ");
console.log(chalk.blue("Welcome " + userName + " to the Marvel quiz"))

console.log();

function playQuiz(question, answer){

  var userAnswer = readlinesync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green("Correct"));
    
    ++score;

  } else {
    console.log(chalk.red("wrong"));
  }

  console.log("Your current score is: " + score);
  console.log("--------------------------------")
  console.log();
}

var quizQuestionAnswer = [{
  question: "What alien metal gives the Wakandans their power? ", 
  answer: "Vibranium"
 }, {
   question: "What is the FalcoShn’s real name? ",
   answer: "Sam Wilson"
 }, {

   question: "In which film did Black Widow first appear? ",
   answer: "IronMan 2"
 }, {
   question: "In which fictional country is Black Panther set? ",
   answer: "Wakanda"
 }, {
   question: "Which Avenger does Thor team up with in Thor: Ragnarok? ",
   answer: "Hulk"
 }, {
   question: "In which film did Hawkeye first appear? ",
   answer: "Thor"
 }, {
   question: "What is the name of Tony Stark’s A.I. assistant, who becomes the basis of The Vision? ",
   answer: "Jarvis"
 }, {
   question: "What is Ant Man’s real name? ",
   answer: "Scott Lang"
 }, {
  question: "Who is Black Panther’s sister? ",
  answer: "Shuri"
}, {  
  question: "What is Tony Stark’s final line in the first Iron Man (not including post-credits)? ",
  answer: "I am Ironman"
}];


for (i=0;i<quizQuestionAnswer.length;i++){
  
  playQuiz(quizQuestionAnswer[i].question, quizQuestionAnswer[i].answer)
}

console.log("Your total score is ", score);
console.log();

var scoreList = [{
  name: "Tanay",
  score: "3"
}, {
  name: "Pavan",
  score: "5"

}, {
  name: "Manan",
  score: "10"
}]

var temp = 0;

 for (i=0;i<scoreList.length;i++){
   if (scoreList[i].score <= score){
     console.log("Congrulations " + userName + ", you have made a new high score");

     scoreList[i].name = userName;
     scoreList[i].score = score;

     temp++;
   }

   if (temp == 1){
     i++;
   }
 }

console.log("Score List: ");

for (i=0;i<scoreList.length;i++){
  console.log(scoreList[i].name + ": " + scoreList[i].score)
}