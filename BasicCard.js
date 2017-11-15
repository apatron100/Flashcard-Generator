var inquirer = require("inquirer")
inquirer.prompt([{
	type:"input", name:"text", message:"Cual es su nombre?"
}]).then(answers => {
  console.log(answers)  // Use user feedback for... whatever!!
});
function BasicCard(question, answer) {
	this.question = question;
	this.answer = answer;
}

var questions = [
	{
		"question1":"Who was the first president of the USA?",// constructor function used to create programmers objects
function question(question1, question2, question3,) {
   

// creates the printInfo method and applies it to all programmer objects
Programmer.prototype.printInfo = function() {
  console.log("Question: " + this.question) ;
};

// variable we will use to count how many times our questions have been asked
var count = 0;

var askQuestion = function() {
  // if statement to ensure that our questions are only asked five times
  if (count < 3) {
    // runs inquirer and asks the user a series of questions whose replies are
    // stored within the variable answers inside of the .then statement
    inquirer.prompt([
      {
        name: "question1",
        message: "Who was the first president of USA?"
      }, {
        name: "question2",
        message: "Who was the last USA president?"
      }, {
        name: "question3",
        message: "Who is the actual USA president?"
      }, 
        
     
      
    ]).then(function(answers) {
      // initializes the variable newguy to be a programmer object which will take
      // in all of the user's answers to the questions above
      var correct answers = new Questions(
        answers.question1,
        answers.question2,
        answers.question3,
        
      // printInfo method is run to show that the newguy object was successfully created and filled
      newQuestions.printInfo();
      // add one to count to increment our recursive loop by one
      count++;
      // run the askquestion function again so as to either end the loop or ask the questions again
      askQuestion();
    });
    // else statement which prints "all questions asked" to the console
    // when the code has been run five times
  }
  else {
    console.log("All questions asked");
  }
};

// call askquestion to run our code
askQuestion();
		"answer": "George Washington"
	},
	{
		"question2":"Who was the last president of the USA?",
		"answer": "Barak Obama"
	},
	{
		"question3":"Who is the actual president of the USA?",
		"answer": "Donald Trump"
	}

]


 
