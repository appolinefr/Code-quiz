//variables getting elements from html
let root = document.querySelector("#quiz-container");
let welcomeMessage = document.querySelector("#welcome");
let quizRules = document.querySelector("#quiz-rules");
let startButton = document.querySelector("#start-quiz");
let question = document.querySelector("#questions");
var timeEl = document.querySelector(".timer");
var secondsLeft = 60;

// function start quizz
let firstQuestion = {
  question1: "Arrays with Javascript can be used to store _ ",
  answer1: "blabla",
  answer2: "blibli",
  answer3: "blublu",
  correctAnswer: "ahhhhhh",
};
let secondtQuestion = {
  question1: "",
  answer1: "",
  answer2: "",
  answer3: "",
  correctAnswer: "",
};
let thirdQuestion = {
  question1: "",
  answer1: "",
  answer2: "",
  answer3: "",
  correctAnswer: "",
};
let fourthQuestion = {
  question1: "",
  answer1: "",
  answer2: "",
  answer3: "",
  correctAnswer: "",
};
let fifthQuestion = {
  question1: "",
  answer1: "",
  answer2: "",
  answer3: "",
  correctAnswer: "",
};

//starting quizz and event listener
start = document.querySelector("#start-quiz");
start.addEventListener("click", function () {
  displayQuestion();
  startTimer();
});

// function display a question
function displayQuestion() {
  //setting welcome message + rules + startquiz btn to none once start quiz has been pressed
  welcomeMessage.textContent = " ";
  quizRules.textContent = " ";
  startButton.setAttribute("style", "display: none;");

  //creating h1 element that will hold the questions
  let h1El = document.createElement("h1");

  h1El.textContent = firstQuestion["question1"];
  h1El.setAttribute("class", ".questions");

  //creating ul element and li element that will hold the answers
  let listEl = document.createElement("ul");

  let answer1 = document.createElement("li");
  let answer2 = document.createElement("li");
  let answer3 = document.createElement("li");
  let answer4 = document.createElement("li");

  // setting style for all li element
  listEl.setAttribute("class", "answers");

  //appending all element to body
  root.appendChild(h1El);
  h1El.appendChild(listEl);
  listEl.appendChild(answer1);
  listEl.appendChild(answer2);
  listEl.appendChild(answer3);
  listEl.appendChild(answer4);

  answer1.textContent = "A. " + firstQuestion["answer1"];
  answer2.textContent = "B. " + firstQuestion["answer2"];
  answer3.textContent = "C. " + firstQuestion["answer3"];
  answer4.textContent = "D. " + firstQuestion["correctAnswer"];

  // function that handles question click nested in function displayquestion?
  //when answer is clicked,  if correct display correct else display wrong
  //loop so that new question is displayed
  listEl.addEventListener("click", function (event) {
    var clickedElement = event.target;

    // Check if the clicked element was an li and if it was an li and if it was correct answer then proceed to next question.
    //if the answer was not the correct one then deduct time from timer
    if (clickedElement.matches("li")) {
      var state = clickedElement.getAttribute("data-state");

      if (state === firstQuestion["correctAnswer"]) {
      }
    }
  });
}
// I need an object that will contain question and multiple choice answer
//if questions run out go to function quizzEnd
// answers to display in ul or ol

function startTimer() {
  // Sets interval in variable
  timeEl.textContent = " ";
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Timer " + secondsLeft;

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }
    // else if {//no more questions}
    // Calls function
    quizzEnd();
  }, 1000);
}
// function that handles the timer
//start timer at 60 secs
//if answer is wrong -5 secs
//else run as normal
//when time runs out function quizzEnd

function quizzEnd() {}
//function that handles quizz end
// if questions or quizz run out displays form with initials and score
//when submitted displays scores
//need a clear button and a go back button
//need to set scores in local storage
//when link/button to display score is clicked get item from storage
