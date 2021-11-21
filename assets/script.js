// declaring global variables
var welcomeEl = document.getElementById('welcome')
var questionsEl = document.getElementById('questions');
var timerEl = document.getElementById('timer');
var scoreLogEl = document.getElementById('score-logger');

var startButton = document.getElementById('start-button');
var logButton = document.getElementById('');

var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var button4 = document.getElementById('button4');

var score = 0;
var questionIndexPointer = 0;

var timer;
var timeLeft;



// TODO: Run back through pseudocode be very specific

// test one thing at a time, e.g. button click console log button click
// every step forward console log it and make sure you are hitting that step then move to next forward

// global variables

// TODO: Pointers to HTML elements

// TODO: fill out question bank
// array of objects
var questions = [
    {
        questionName: "What color is the sky?",
        answerOptions: [
            "Blue",
            "Boolean",
            "Alert",
            "Number"
        ],
        // refers to array index 0 above it
        correctAnswer: 0
    },
    {
        questionName: "What is your favorite color?",
        answerOptions: [
            "Red",
            "Green",
            "Yellow",
            "Plad"
        ],
        // refers to array index 1 above it
        correctAnswer: 0
    }
]


// variable definitions
// var 
// let
// // consistent variable that will not change
// const


// This functions only purpose is to start timer
function startTimer() {
    timeLeft = 10;
  
    timer = setInterval(function () {
      timeLeft--;
      timerEl.textContent = timeLeft;
  
      if (timeLeft === 0) {
        clearInterval(timer);
        startButton.disabled= false;
        welcomeEl.className = "displayed"
        questionsEl.className= "hidden";
      }
   
    }, 1000);
    
}


// TODO: function that starts the game
function startGame() {
    
    // disables start button from being double clicked
    startButton.disabled = true;
    // starts timer
    startTimer()
    questionIndexPointer = 0
    // hide welcome message
    welcomeEl.className = "hidden"
    renderNextQuestion()

}

// TODO: Renders the next question on the screen
function renderNextQuestion() {
    questionsEl.className= "displayed";
    console.log(questionsEl)
    questionsEl.children[0].textContent = questions[questionIndexPointer].questionName
    for (i=1; i<5; i++){
        questionsEl.children[i].textContent = questions[questionIndexPointer].answerOptions[(i-1)]
    }

    if (questionIndexPointer !== 2){
        questionIndexPointer++;
        console.log(questionIndexPointer);
    } else {
        return
    }

}


// TODO: this function will handle serving the next question and increment score
function answerQuestion() {
    
}

// TODO: this function stop the timer, hide question, display input to enter their high score on leader board
function endGame() {
    
}


function backToWelcome() {
    welcomeEl.className = "displayed"

}

// TODO: Activity 26 from saturday has helpful info
function submitLeaderboard() {
    
}

// TODO: render leaderboard upon submission and leaderboard page load
function renderLeaderboard() {
    
}

// TODO: clear out the leaderboard from local storage
function clearLeaderboard () {
    
}

// TODO: initial actions on page load
// needs to pull leaderboard from local storage
// what else....
function init () {
    
}








// TODO: button to start game

// when we click button, start interval timeLeft, serve question 1
// withinGame function that resets global timer and score variables to their initial values

startButton.addEventListener( "click" , startGame );



// TODO: button to take look at high scores




// // Notes from saturday

// var questions = [
//     {
//         question:"What's your favorite color?",
//         multipleChoiceOptions: [
//             "Red",
//             "Yellow",
//             "Green",
//             "Blue"
//         ],
//         correct: "Red"
//     }
// ];

// var questionIndexPointer = 0;


// function answerQuestion(event) {

//     // Which answer was picked (which button)
//     var buttonEl = event.target;

//     // data attribute from html elements to match user's choice with the answer they picked
//     var answer = buttonEl.dataset.answer;

//     // Compare 'answer' to the "current question"
//     var currentQuestion = questions[questionPointer]
    
//     if (answer === currentQuestion.correct) {
//         console.log("Correct!")
//     } else {
//         console.log("Wrong, the answer was ", currentQuestion.correct)
//     }

//     // if we have no questions left we 
//         // THEN end the game
//     // ELSE serve next question
//     console.log(answer)

//     }

// questionsEl.addEventListener( 'click' , answerQuestion);