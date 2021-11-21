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
var answer = undefined;
console.log(answer)
var timer;
var timeLeft;

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
            "Red",
            "Alert",
            "Number"
        ],
        // refers to array index 0 above it
        correctAnswer: "Blue"
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
        correctAnswer: "Red"
    },
    {
        questionName: "How many people have landed on the moon?",
        answerOptions: [
            "1",
            "2",
            "3",
            "12"
        ],
        // refers to array index 1 above it
        correctAnswer: 12
    }
]


// This functions only purpose is to start timer
function startTimer() {
    timeLeft = 100;
  
    timer = setInterval(function () {
      timeLeft--;
      timerEl.textContent = timeLeft;
  
      if (timeLeft <= 0) {
        clearInterval(timer);
        startButton.disabled= false;
                
        questionsEl.className= "hidden";
        scoreLogEl.className="displayed";
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
    questionsEl.children[0].textContent = questions[questionIndexPointer].questionName
    for (i=0; i< (questionsEl.children.length-1); i++){
        questionsEl.children[(i+1)].textContent = questions[questionIndexPointer].answerOptions[(i)];
    }
}


// TODO: this function will handle serving the next question and increment score
function answerQuestion(event) {
    
    // checks to make sure user clicks a button, if not a button then the next question will be rendered
    if (!event.target.matches("button")){
        return
    }
    
    var currentQuestion = questions[questionIndexPointer]
    var buttonEl = event.target

    // Comparing user's answer that was selected to the correct answer
    if (buttonEl.textContent === currentQuestion.correctAnswer) {
        console.log("Correct!")
    } else {
        console.log("Wrong, the answer was ", currentQuestion.correctAnswer)
        timeLeft= timeLeft-10;
        // if (timeLeft=0 logic to not go negative
    }

    if (questionIndexPointer !== 2){
        console.log("questionIndexPointer: ", questionIndexPointer);
        questionIndexPointer++;
    } else {
        console.log("questionIndexPointer: ", questionIndexPointer);
        return
    }
    
    console.log("questionIndexPointer: ", questionIndexPointer);
    renderNextQuestion()
}

// TODO: this function stop the timer, hide question, display input to enter their high score on leader board
function endGame() {
    
}


function backToWelcome() {
    welcomeEl.className = "displayed";
    scoreLogEl.className= "hidden";

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

questionsEl.addEventListener( "click" , answerQuestion );

scoreLogEl.addEventListener( "click" , backToWelcome )

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