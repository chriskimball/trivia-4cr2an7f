// // Notes from saturday class
// var questionsEl = document.getElementById('questions');
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



// TODO: Run back through pseudocode be very specific

// test one thing at a time, e.g. button click console log button click
// every step forward console log it and make sure you are hitting that step then move to next forward

// global variables
var timeLeft = 30;
var score = 0;
var questionIndexPointer = 0;

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
        questionName: "What color is the sky?",
        answerOptions: [
            "Blue",
            "Boolean",
            "Alert",
            "Number"
        ],
        // refers to array index 0 above it
        correctAnswer: 0
    }
]


// variable definitions
// var 
// let
// // consistent variable that will not change
// const

 
// TODO: only purpose is to start timer
function startIntervalTimer() {
    timeLeft
}

// TODO: function that starts the game
function startGame() { 
    // hide welcome message
    // start timer
    questions[questionIndexPointer]
}

// TODO: Renders the next question on the screen
function renderNextQuestion() {
    
}


// TODO: this function will handle serving the next question and increment score
function answerQuestion() {

}

// TODO: this function stop the timer, hide question, display input to enter their high score on leader board
function endGame() {

}


function backToWelcome() {

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




// TODO: button to take look at high scores



