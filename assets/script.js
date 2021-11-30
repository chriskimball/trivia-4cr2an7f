// Storing html elements that we are interacting with in variables
var welcomeEl = document.getElementById('welcome')
var questionsEl = document.getElementById('questions');
var feedbackEl = document.getElementById('feedback');
var timerEl = document.getElementById('timer');
var scoreLogEl = document.getElementById('score-logger');
var initials = document.getElementById('initials');
var finalScoreEl = document.getElementById('score-value');
var correctEl = document.getElementById('correctly-answered');
var finalTimeEl = document.getElementById('final-time');
var startButton = document.getElementById('start-button');
var logButton = document.getElementById('');
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var button4 = document.getElementById('button4');

// Restricts the initials input to only 3 characters
initials.setAttribute('maxlength',3);

// declaring global variables that we will be working with
var leaderboard = [];
var correct = 0;
var questionIndexPointer = 0;
var answer = undefined;
var timer;
var timeLeft;
var feedbackTimeLeft;
var feedbackTimer;
var finalScore;

// This function operates the timer for the game
function startTimer() {
    timeLeft = 100;
  
    timer = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft;
    
    //   If time hits zero or less than zero it will stop the timer and end game
        if (timeLeft <= 0) {
        clearInterval(timer);
        timeLeft=0;
        endGame();
        }
    }, 1000);
}

// This function that starts the game
function startGame() {
    // Resets user-game specific variables back to default values
    correct=0;
    initials.value= "";
    
    // Disables start button from being double clicked
    startButton.disabled = true;

    // Starts game timer, resets question pointer to 0, hides welcome message and renders the first question
    startTimer()
    questionIndexPointer = 0;
    welcomeEl.className = "hidden";
    renderNextQuestion();
}

// Renders the next question on the screen
function renderNextQuestion() {
    // If there are no more questions to render, end the game
    if (questionIndexPointer === (questionBank.length)){
        endGame();
        return
    }

    // Displays the question element and fills in the children with the content from the question object within the question bank array
    questionsEl.className= "displayed";
    questionsEl.children[0].textContent = questionBank[questionIndexPointer].questionName;
    for (i=0; i< (questionsEl.children.length-1); i++){
        questionsEl.children[(i+1)].textContent = questionBank[questionIndexPointer].answerOptions[(i)];
    }
}


// This function will handle serving the next question and increment score
function answerQuestion(event) {
    // If user is clicking through the questions before the feedback has been hidden, it will reset the feedback timer
    clearInterval(feedbackTimer)

    // Checks to make sure user clicks a button, if not a button then the next question will be rendered
    if (!event.target.matches("button")){
        return
    }
    
    var currentQuestion = questionBank[questionIndexPointer];
    var buttonEl = event.target;
    
    // Comparing user's answer that was selected to the correct answer
    if (buttonEl.textContent === currentQuestion.correctAnswer) {
        correct++;
        answerFeedback("right")
    } else {
        answerFeedback("wrong")
        // This if logic handles decreasing the time left when incorrect answer has been picked.
        if ( timeLeft > 10 ){
            timeLeft= timeLeft-10;
            timerEl.textContent = timeLeft;
        } 
        else if (timeLeft < 10 ) {
            // If less than 10 seconds remain, time left will be set to 0, the game will end, and timer will stop decrementing.
            clearInterval(timer);
            timeLeft = 0;
            timerEl.textContent = timeLeft;
            return endGame();
        }
    }

    // Increments the quesiton index pointer by one when a question is answered so the next question rendered will be different than the one that was answered. 
    if (questionIndexPointer !== questionBank.length){
        questionIndexPointer++;
    } else {
        endGame();    
        return;
    }
    
    renderNextQuestion()
}

// Feedback timer to display "Correct" or "Incorrect" for two seconds after answering a question
function startFeedbackTimer() {
        
    feedbackTimeLeft = 2;
    
    feedbackTimer = setInterval(function () {
        feedbackTimeLeft--;
  
        if (feedbackTimeLeft <= 0) {
            clearInterval(feedbackTimer);
            feedbackTimeLeft=0;
            feedbackEl.className="hidden";
        }
    }, 1000);
    
}

// This will handle writing the question feedback to the page
function answerFeedback(rightOrWrong){

    if (rightOrWrong === "right") {
        startFeedbackTimer()
        feedbackEl.className="displayed";
        feedbackEl.innerHTML=`<h2>Correct!</h2>`;
        feedbackEl.setAttribute("style", "color:green");
    } else {
        startFeedbackTimer()
        feedbackEl.className="displayed";
        feedbackEl.innerHTML=`<h2>Wrong!</h2>`;
        feedbackEl.setAttribute("style", "color:red");
    }
}
// This function stop the timer, hide questions element, and display leaderboard input
function endGame() {
    // This handles calculating the final score (Total answered correctly * Time Left), if Time Left = 0 then total answered correctly will be the final score (adds another layer of scoring by correct/speed)
    if ( timeLeft === 0 ) {
        finalScore = correct;
    } else {
        finalScore = correct * timeLeft;
    }

    // Sets text content for the results message
    finalScoreEl.textContent = finalScore;
    correctEl.textContent = correct;
    finalTimeEl.textContent = timeLeft;

    // Stops the game timer
    clearInterval(timer);
    
    // Hides the questions element, displays the Results/Leaderboard entry elements
    questionsEl.className= "hidden";
    scoreLogEl.className="displayed";
    return finalScore;
}

// This funciton handles submitting a score and initials to the leaderboard array
function submitLeaderboard(event) {
    // Conditional check to make sure user clicked the button and not another element within the leaderboard input form
    if (!event.target.matches("button")){
        return
    }
    // Prevents default action of page reload
    event.preventDefault();
    
    // Conditional check to make sure the input is not blank
    if (initials.value.length === 0){
        alert("Please enter your initials.")
        return
    } else {
        // Putting user statistics into an object to be saved into local storage
        var userStats = {
            initials: initials.value.toUpperCase(),
            timeLeft: timeLeft,
            answeredCorrectly: correct,
            totalScore: finalScore
        };
        // Adding the user stats object we just captured into the leaderboard array
        leaderboard = leaderboard.concat(userStats);

        // Saving the updated leaderboard array to local storage 
        localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
        
        // Sends user to the leaderboard page
        window.location.href='high_scores.html';
    }
}

// Initial actions on page load
function init() {
    // This will parse the todo array from local storage from string into an array
    leaderboard = JSON.parse(localStorage.getItem("leaderboard"));
    
    // If local storage is blank then it will set the leaderboard to a blank array
    if (leaderboard === null) {
      leaderboard = [];
    }

}

// Keydown event to prevent numeric and special characters from being submitted to leaderboard
initials.addEventListener('keydown', function (event) {
    
    // Access value of pressed key with key property
    var key = event.key;
    var alphabetNumericCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    
    if (alphabetNumericCharacters.includes(key)) {
        // If the keydown is a character within the alphabet then add it to the Initials input
        initials.textContent += event.key;
    } 
    else if (key === "Backspace" || key === "Enter") {
        // Allows us to perform normal backspace or enter keydown action.
    } else {event.preventDefault()}
    // This last 'else' conditional prevents the default aciton of keydown press for numbers and special characters to enter the key value into the input area.

  });

// Clicking this button will start the game
startButton.addEventListener( "click" , startGame );

// Event listener for clicks within the questions element
questionsEl.addEventListener( "click" , answerQuestion );

// Event listener for clicks within the Score Log element
scoreLogEl.addEventListener( "click" , submitLeaderboard)

// Calling the initial page load funciton
init()
