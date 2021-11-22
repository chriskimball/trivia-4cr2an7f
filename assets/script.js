// declaring global variables
var welcomeEl = document.getElementById('welcome')
var questionsEl = document.getElementById('questions');
var timerEl = document.getElementById('timer');
var scoreLogEl = document.getElementById('score-logger');
var initials = document.getElementById('initials')
var finalScoreEl = document.getElementById('score-value')
var correctEl = document.getElementById('correctly-answered')
var finalTimeEl = document.getElementById('final-time')

var startButton = document.getElementById('start-button');
var logButton = document.getElementById('');
var leaderboard = []

var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var button4 = document.getElementById('button4');

var correct = 0;
var questionIndexPointer = 0;
var answer = undefined;
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
        correctAnswer: "12"
    },
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
        correctAnswer: "12"
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
        timeLeft=0
        endGame()
      }
   
    }, 1000);
    
}


// TODO: function that starts the game
function startGame() {
    correct=0;
    initials.value= "";
    // disables start button from being double clicked
    startButton.disabled = true;
    // starts timer
    startTimer()
    questionIndexPointer = 0;
    // hide welcome message
    welcomeEl.className = "hidden";
    renderNextQuestion()
}
// TODO: Renders the next question on the screen
function renderNextQuestion() {
    if (questionIndexPointer === (questions.length)){
        endGame()
        return
    }
    questionsEl.className= "displayed";
    questionsEl.children[0].textContent = questions[questionIndexPointer].questionName;
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
    
    var currentQuestion = questions[questionIndexPointer];
    var buttonEl = event.target;
    
    // Comparing user's answer that was selected to the correct answer
    if (buttonEl.textContent === currentQuestion.correctAnswer) {
        correct++;
    } else {
        // This if logic handles decreasing the time left when incorrect answer has been picked.
        if ( timeLeft > 10 ){
            timeLeft= timeLeft-10;
            timerEl.textContent = timeLeft;
        } 
        else if (timeLeft < 10 ) {
            clearInterval(timer);
            timeLeft = 0;
            timerEl.textContent = timeLeft;
            endGame()
        }
    }

    if (questionIndexPointer !== questions.length){
        questionIndexPointer++;
    } else {
        endGame()    
        return
    }
    
    renderNextQuestion()
}

// TODO: this function stop the timer, hide question, display input to enter their high score on leader board
function endGame() {
    finalScore = correct * timeLeft
    finalScoreEl.textContent = finalScore
    correctEl.textContent = correct
    finalTimeEl.textContent = timeLeft
    clearInterval(timer);
    questionsEl.className= "hidden";
    scoreLogEl.className="displayed";
    startButton.disabled = false;
    return finalScore
}

function backToWelcome() {
    welcomeEl.className = "displayed";
    scoreLogEl.className= "hidden";
    
}

// TODO: Activity 26 from saturday has helpful info
function submitLeaderboard(event) {
    if (!event.target.matches("button")){
        return
    }
    event.preventDefault();
    var userStats = {
        initials: initials.value,
        timeLeft: timeLeft,
        answeredCorrectly: correct,
        totalScore: finalScore
      }
      console.log(userStats)
      
      leaderboard = leaderboard.concat(userStats)
      // TODO: Set new submission to local storage 
      console.log(leaderboard)
      localStorage.setItem("leaderboard", JSON.stringify(leaderboard))
    
      window.location.href='high_scores.html'
    // backToWelcome()
}



// TODO: render leaderboard upon submission and leaderboard page load
// function renderLeaderboard() {
//         // TODO: Describe the functionality of the following two lines of code.
//         // defines the todo list's inner html as string values
//         // increments the number of items on your todo list to equal the todo array length
//         todoList.innerHTML = "";
//         todoCountSpan.textContent = todos.length;
        
//         // TODO: Describe the functionality of the following `for` loop.
//         // converts todo array into list items on the todo list
//         for (var i = 0; i < todos.length; i++) {
//           var todo = todos[i];
      
//           var li = document.createElement("li");
//           li.textContent = todo;
//           li.setAttribute("data-index", i);
      
//           var button = document.createElement("button");
//           button.textContent = "Complete ✔️";
      
//           li.appendChild(button);
//           todoList.appendChild(li);
//         }
//       }
// }

// TODO: clear out the leaderboard from local storage
function clearLeaderboard () {
    
}

// TODO: initial actions on page load
// needs to pull leaderboard from local storage
// what else....
function init() {
    // TODO: What is the purpose of the following line of code?
    // this will parse the todo array from local storage from string into an array
    leaderboard = JSON.parse(localStorage.getItem("leaderboard"));
    // TODO: Describe the functionality of the following `if` statement.
    // if local storage is not blank then it will set the stored todos to the todos variable
    if (leaderboard !== null) {
      leaderboard = leaderboard;
    }

    // TODO: Describe the purpose of the following line of code.
    // runs the render todo function which will display your todo array on the page
    // renderTodos();
    console.log(leaderboard)
  }


// TODO: button to start game

// when we click button, start interval timeLeft, serve question 1
// withinGame function that resets global timer and score variables to their initial values

startButton.addEventListener( "click" , startGame );

questionsEl.addEventListener( "click" , answerQuestion );

scoreLogEl.addEventListener( "click" , submitLeaderboard )

// TODO: button to take look at high scores
init()



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