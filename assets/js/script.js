//variables getting elements from html
//all var holding containers that will be either visible or hidden
let quizStart = document.querySelector("#quizStart-container");
let quizContainer = document.querySelector("#quiz-container");
let questContainer = document.querySelector("#question-container");
let answerContainer = document.querySelector("#answer-container");
let resultContainer = document.querySelector("#result-container");
let highScoreContainer = document.querySelector("#high-score-container");

//all var holding the question and answers
let questionEl = document.querySelector("#question");
let answerList = document.querySelector("#answer-list");
let answerEl = document.querySelectorAll("#answer-button");
let checkLineDiv = document.querySelector("#answer-line");
let score = 0;
let questionNumber = 0;

//time element
let timeEl = document.getElementById("timer");
let secondsLeft = 60;

// I need an array of objects that will contain question and multiple choice answer
//if questions run out go to function quizzEnd
let questions = [
  {
    question: "Arrays with Javascript can be used to store _ ",
    possibleAnswers: [
      "Numbers and strings",
      "Other arrays",
      "Booleans",
      "All of the above",
    ],
    correctAnswer: "All of the above",
  },
  {
    question: "Commonly used data types DO NOT include:",
    possibleAnswers: ["Strings", "Booleans", "Numbers", "Alerts"],
    correctAnswer: "Alerts",
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    possibleAnswers: [
      "Square Brackets",
      "Parentheses",
      "Curly Brackets",
      "Quotes",
    ],
    correctAnswer: "Parentheses",
  },
  {
    question:
      "A very useful tool for used during development and debugging for printing content to the debugger is:",
    possibleAnswers: [
      "Console log",
      "Javascript",
      "Terminal/ Bash",
      "For loops",
    ],
    correctAnswer: "Console log",
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    possibleAnswers: ["Commas", "Curly brackets", "Quotes", "Parenthesis"],
    correctAnswer: "Quotes",
  },
];

//starting quizz: score and questionNumber is set to 0
let start = document.querySelector("#start-quiz");
start.addEventListener("click", function () {
  score = 0;
  questionNumber = 0;
  quizStart.setAttribute("style", "display: none;");
  startTimer();
  getQuestion(questionNumber);
});

var timerInterval;
// function that handles the timer
//start timer at 60 secs
//when time runs out function quizzEnd
function startTimer() {
  // Sets interval in variable
  timeEl.textContent = " ";
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Timer " + secondsLeft;

    if (secondsLeft <= 0) {
      // Stops execution of action at set interval

      quizzEnd(), resultContainer.setAttribute("class", "visible");
    }
    // Calls function
  }, 1000);
}

// function to display a question
function getQuestion() {
  quizContainer.setAttribute("class", "visible");

  questionEl.innerHTML = questions[questionNumber].question;

  //populate button with possibleAnswers
  for (var i = 0; i < answerEl.length; i++) {
    answerEl[i].innerHTML = questions[questionNumber].possibleAnswers[i];
  }
}
// function that handles question click nested in function displayquestion?
//when answer is clicked,  if correct display correct else display wrong
//loop so that new question is displayed

function questionClick(event) {
  checkLineDiv.setAttribute("style", "block");
  setTimeout(function () {
    checkLineDiv.setAttribute("style", "display: none");
  }, 1000);

  if (questions[questionNumber].correctAnswer == event.target.innerHTML) {
    score = score + 1;
    checkLineDiv.textContent = "Correct!";
  } else {
    secondsLeft = secondsLeft - 10;
    checkLineDiv.textContent = "Wrong!";
  }
  //THEN I am presented with another question
  if (questionNumber < questions.length - 1) {
    questionNumber++;
    getQuestion();
  } else {
    quizzEnd();
  }
}

//all var holding the scores
let finalScore = document.querySelector("#total-score");
let submitScore = document.querySelector("#submit-score"); //button to submit score
let initialsInput = document.querySelector("#initials"); //initials of user
let highScoreList = document.querySelector("#high-score-list");
let goBackBtn = document.querySelector("#go-back");
let clearScore = document.querySelector("#clear-high-score");

function quizzEnd() {
  clearInterval(timerInterval);
  resultContainer.setAttribute("class", "visible");

  secondsLeft.innerHTML = "";
  //remove class of hidden of quizcontainer
  //setting quizStartContainer to none once start quiz has been pressed
  quizContainer.setAttribute("style", "display: none;");

  highScoreContainer.setAttribute("style", "display: none;");

  finalScore.innerHTML = "Your score is: " + score;
}

function renderHighScore() {
  var list = document.createElement("li");
  list.textContent = initialsInput.value.trim() + ": " + score;
  highScoreList.appendChild(list);

  var userInitials = {
    user: initialsInput.value.trim(),
    userscore: score,
  };
  localStorage.setItem("userInitials", JSON.stringify(userInitials));
}

function getHighScore() {
  highScoreContainer.setAttribute("style", "display: block;");

  var lastScore = JSON.parse(localStorage.getItem("userInitials"));

  if (lastScore !== null) {
    initials.innerHTML = lastScore;
  }
}
//remove class of hidden of quizcontainer
//function that handles quizz end
// if questions or quizz run out displays form with initials and score
//when button submit is pressed then it displays scores
//need a clear button and a go back button
//need to set scores in local storage
//when link/button to display score is clicked get item from storage
submitScore.addEventListener("click", function (event) {
  event.preventDefault();
  highScoreContainer.setAttribute("style", "display: block;");
  resultContainer.setAttribute("style", "display: none;");

  renderHighScore();
});

goBackBtn.addEventListener("click", function () {
  highScoreContainer.setAttribute("style", "display: none;");
  quizStart.setAttribute("style", "display: block;");
});
