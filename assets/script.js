// declaring global variables
var welcomeEl = document.getElementById('welcome')
var questionsEl = document.getElementById('questions');
var timerEl = document.getElementById('timer');
var scoreLogEl = document.getElementById('score-logger');
var initials = document.getElementById('initials')
document.getElementById('initials').setAttribute('maxlength',3)
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
var finalScore;



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

// This function that starts the game
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

// Renders the next question on the screen
function renderNextQuestion() {
    if (questionIndexPointer === (questionBank.length)){
        endGame()
        return
    }
    questionsEl.className= "displayed";
    questionsEl.children[0].textContent = questionBank[questionIndexPointer].questionName;
    for (i=0; i< (questionsEl.children.length-1); i++){
        questionsEl.children[(i+1)].textContent = questionBank[questionIndexPointer].answerOptions[(i)];
    }
}


// This function will handle serving the next question and increment score
function answerQuestion(event) {
    
    // checks to make sure user clicks a button, if not a button then the next question will be rendered
    if (!event.target.matches("button")){
        return
    }
    
    var currentQuestion = questionBank[questionIndexPointer];
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

    if (questionIndexPointer !== questionBank.length){
        questionIndexPointer++;
    } else {
        endGame()    
        return
    }
    
    renderNextQuestion()
}

// This function stop the timer, hide question, display leaderboard input
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
    
    if (initials.value.length === 0){
        alert("Please enter your initials.")
        return
    } else 
    {
        var userStats = {
            initials: initials.value.toUpperCase(),
            timeLeft: timeLeft,
            answeredCorrectly: correct,
            totalScore: finalScore
        }
        
        leaderboard = leaderboard.concat(userStats)
        // Set new submission to local storage 
        localStorage.setItem("leaderboard", JSON.stringify(leaderboard))
        window.location.href='high_scores.html'
    }
    
    
}

// Initial actions on page load
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


// when we click button, start interval timeLeft, serve question 1
// withinGame function that resets global timer and score variables to their initial values

// Keydown event to prevent numeric and special characters from being submitted to leaderboard
initials.addEventListener('keydown', function (event) {
    // Access value of pressed key with key property
    var key = event.key;
    var alphabetNumericCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    
    if (alphabetNumericCharacters.includes(key)) {
    
        initials.textContent += event.key;

    } 
    else if (key === "Backspace" || key === "Enter") {
        // perform normal backspace or enter keydown action.
    } else (event.preventDefault())
    // This last 'else' conditional prevents the default aciton of keydown press for numbers and special characters to enter the key value into the input area.

  });

// clicking this button will start the game
startButton.addEventListener( "click" , startGame );

questionsEl.addEventListener( "click" , answerQuestion );

scoreLogEl.addEventListener( "click" , submitLeaderboard)

init()
